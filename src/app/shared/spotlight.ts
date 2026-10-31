import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/**
 * Pointer position inside the host as `--x` / `--y` (px), for a soft light that follows the cursor
 * on glass cards. Native listener (no change detection per move); fine pointers only.
 */
@Directive({ selector: '[appSpotlight]', host: { class: 'spotlight' } })
export class Spotlight {
  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof window.matchMedia !== 'function' || !window.matchMedia('(pointer: fine)').matches) return;

      const onMove = (event: PointerEvent): void => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty('--x', `${event.clientX - rect.left}px`);
        element.style.setProperty('--y', `${event.clientY - rect.top}px`);
      };
      element.addEventListener('pointermove', onMove, { passive: true });
      destroyRef.onDestroy(() => element.removeEventListener('pointermove', onMove));
    });
  }
}
