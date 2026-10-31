import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IMAGES, NAV_ITEMS, WHATSAPP_MESSAGES, whatsappUrl } from '../core/site-content';
import { ButtonLink } from '../shared/ui/button-link';
import { Icon } from '../shared/ui/icon';
import { ScrollProgress } from '../shared/scroll-progress';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, ButtonLink, Icon, ScrollProgress],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeAndFocusToggle()',
    '(focusout)': 'onFocusOut($event)',
  },
})
export class Header {
  protected readonly nav = NAV_ITEMS;
  protected readonly logo = IMAGES.logoLight;
  protected readonly whatsapp = whatsappUrl(WHATSAPP_MESSAGES.header);
  protected readonly menuOpen = signal(false);
  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggleButton');

  toggle(): void {
    this.menuOpen.update((open) => !open);
  }

  close(): void {
    this.menuOpen.set(false);
  }

  closeAndFocusToggle(): void {
    if (!this.menuOpen()) return;
    this.close();
    this.toggleButton().nativeElement.focus();
  }

  /** Keeps keyboard focus from moving behind the open menu (WCAG 2.4.11). */
  onFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    if (next && !(event.currentTarget as HTMLElement).contains(next)) this.close();
  }
}
