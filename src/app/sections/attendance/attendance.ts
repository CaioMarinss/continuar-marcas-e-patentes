import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IMAGES, WHATSAPP_MESSAGES, whatsappUrl } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { ButtonLink } from '../../shared/ui/button-link';
import { Icon } from '../../shared/ui/icon';
import { ScrollProgress } from '../../shared/scroll-progress';
import { Spotlight } from '../../shared/spotlight';

@Component({
  selector: 'app-attendance',
  imports: [NgOptimizedImage, Reveal, ButtonLink, Icon, ScrollProgress, Spotlight],
  template: `
    <section class="attendance" aria-labelledby="atendimento-title">
      <div class="inner" appSpotlight>
        <div class="copy" appReveal>
          <p class="eyebrow">Atendimento comigo</p>
          <h2 id="atendimento-title">Cada marca começa com uma conversa.</h2>
          <p class="text">
            A proteção começa pela compreensão da sua história, do seu posicionamento e do caminho
            que a marca pretende construir.
          </p>
          <a appButton variant="ink" [href]="whatsapp" target="_blank" rel="noopener">
            <app-icon name="whatsapp" [size]="18" />
            Conversar no WhatsApp
          </a>
        </div>
        <img
          appScrollProgress="view"
          [ngSrc]="photo.src"
          [width]="photo.width"
          [height]="photo.height"
          [alt]="photo.alt"
        />
      </div>
    </section>
  `,
  styleUrl: './attendance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Attendance {
  protected readonly photo = IMAGES.office;
  protected readonly whatsapp = whatsappUrl(WHATSAPP_MESSAGES.attendance);
}
