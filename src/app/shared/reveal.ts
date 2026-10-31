import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Subtle fade-in when the element enters the viewport.
 * Runs only in the browser, skips elements already visible and respects prefers-reduced-motion,
 * so prerendered content is never hidden for crawlers or users without JavaScript.
 */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window) || typeof window.matchMedia !== 'function') return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (element.getBoundingClientRect().top < window.innerHeight) return;

      element.classList.add('reveal-pending');
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return;
          element.classList.replace('reveal-pending', 'reveal-done');
          observer.disconnect();
        },
        { rootMargin: '0px 0px -10% 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
