import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  IMAGES,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  whatsappUrl,
} from '../core/site-content';
import { Icon } from '../shared/ui/icon';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly logo = IMAGES.logoLight;
  protected readonly nav = NAV_ITEMS;
  protected readonly instagramUrl = INSTAGRAM_URL;
  protected readonly instagramHandle = INSTAGRAM_HANDLE;
  protected readonly whatsappDisplay = WHATSAPP_DISPLAY;
  protected readonly whatsapp = whatsappUrl();
  protected readonly year = new Date().getFullYear();
}
