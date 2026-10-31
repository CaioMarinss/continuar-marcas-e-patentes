import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IMAGES, PRESENCE_PHOTOS } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-presence',
  imports: [NgOptimizedImage, Reveal, SectionHeading],
  template: `
    <section id="presenca" class="presence" aria-labelledby="presenca-title">
      <app-section-heading
        appReveal
        layout="split"
        eyebrow="Presença"
        title="Conhecimento compartilhado, conexões que fortalecem marcas"
        titleId="presenca-title"
      >
        Registros reais de palestras, encontros e espaços de conversa sobre identidade e propriedade intelectual.
      </app-section-heading>

      <ul class="gallery">
        @for (photo of photos; track photo.src) {
          <li appReveal>
            <img
              [ngSrc]="photo.src"
              [width]="photo.width"
              [height]="photo.height"
              [alt]="photo.alt"
            />
          </li>
        }
      </ul>

      <figure class="manifesto" appReveal>
        <img
          [ngSrc]="manifesto.src"
          [width]="manifesto.width"
          [height]="manifesto.height"
          [alt]="manifesto.alt"
        />
      </figure>
    </section>
  `,
  styleUrl: './presence.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Presence {
  protected readonly photos = PRESENCE_PHOTOS;
  protected readonly manifesto = IMAGES.manifesto;
}
