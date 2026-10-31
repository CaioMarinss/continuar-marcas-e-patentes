import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * How the 0 → 1 progress is measured:
 * - `pin`:  while the element's sticky child is pinned (element taller than the viewport).
 * - `view`: from the element's top entering the viewport bottom until its bottom leaves the top.
 * - `exit`: from the element sitting at the top of the viewport until it has fully scrolled away.
 * - `page`: whole document scroll.
 */
export type ScrollProgressMode = 'pin' | 'view' | 'exit' | 'page';

const clamp01 = (value: number): number => Math.min(Math.max(value, 0), 1);

/**
 * Exposes scroll progress as the CSS custom property `--p` (0 → 1) on the host and adds the
 * `is-scrolly` class, so scroll-driven scenes are written in plain CSS.
 *
 * Runs only in the browser and never when the visitor prefers reduced motion: without `is-scrolly`
 * every scene must render as a normal, fully visible static layout (prerendered HTML, no-JS, a11y).
 */
@Directive({ selector: '[appScrollProgress]' })
export class ScrollProgress {
  readonly mode = input<ScrollProgressMode, ScrollProgressMode | ''>('pin', {
    alias: 'appScrollProgress',
    transform: (value) => value || 'pin',
  });

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof window.matchMedia !== 'function' || !('IntersectionObserver' in window)) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const mode = this.mode();
      let headerOffset = 0;
      let frame = 0;

      const readHeaderOffset = (): void => {
        headerOffset =
          parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) ||
          0;
      };

      const measure = (): number => {
        const viewport = window.innerHeight;
        if (mode === 'page') {
          const scrollable = document.documentElement.scrollHeight - viewport;
          return scrollable > 0 ? window.scrollY / scrollable : 0;
        }
        const rect = element.getBoundingClientRect();
        switch (mode) {
          case 'pin':
            return (headerOffset - rect.top) / Math.max(rect.height - (viewport - headerOffset), 1);
          case 'exit':
            return (headerOffset - rect.top) / Math.max(rect.height, 1);
          default:
            return (viewport - rect.top) / Math.max(viewport + rect.height, 1);
        }
      };

      const update = (): void => {
        frame = 0;
        element.style.setProperty('--p', clamp01(measure()).toFixed(4));
      };
      const schedule = (): void => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      const onResize = (): void => {
        readHeaderOffset();
        schedule();
      };

      let listening = false;
      const listen = (on: boolean): void => {
        if (on === listening) return;
        listening = on;
        const method = on ? 'addEventListener' : 'removeEventListener';
        window[method]('scroll', schedule, { passive: true } as AddEventListenerOptions);
        window[method]('resize', onResize);
      };

      readHeaderOffset();
      element.classList.add('is-scrolly');
      update();

      // Only track scroll while the element is near the viewport.
      const observer =
        mode === 'page'
          ? null
          : new IntersectionObserver(
              ([entry]) => {
                listen(!!entry?.isIntersecting);
                update();
              },
              { rootMargin: '25% 0px' },
            );
      if (observer) observer.observe(element);
      else listen(true);

      destroyRef.onDestroy(() => {
        observer?.disconnect();
        listen(false);
        cancelAnimationFrame(frame);
      });
    });
  }
}
