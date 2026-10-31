import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IMAGES, WHATSAPP_MESSAGES, whatsappUrl } from '../../core/site-content';
import { ButtonLink } from '../../shared/ui/button-link';
import { Icon } from '../../shared/ui/icon';
import { ScrollProgress } from '../../shared/scroll-progress';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, ButtonLink, Icon, ScrollProgress],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly portrait = IMAGES.portrait;
  protected readonly whatsapp = whatsappUrl(WHATSAPP_MESSAGES.hero);
}
