import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES, WHATSAPP_DISPLAY, WHATSAPP_MESSAGES, whatsappUrl } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { ButtonLink } from '../../shared/ui/button-link';
import { Icon } from '../../shared/ui/icon';
import { ScrollProgress } from '../../shared/scroll-progress';

@Component({
  selector: 'app-contact',
  imports: [Reveal, ButtonLink, Icon, ScrollProgress],
  template: `
    <section id="contato" class="contact" appScrollProgress="view" aria-labelledby="contato-title">
      <!-- Decorative backdrop: the portrait opens as a growing circle (static full image without motion). -->
      <div class="backdrop" aria-hidden="true" [style.background-image]="backdrop"></div>
      <div class="inner" appReveal>
        <p class="eyebrow">O próximo passo</p>
        <h2 id="contato-title">Vamos conversar?</h2>
        <p class="text">
          Proteja o que você construiu. Fale diretamente com Jaqueline e inicie uma conversa sobre a
          sua marca.
        </p>
        <a appButton variant="gold" [href]="whatsapp" target="_blank" rel="noopener">
          <app-icon name="whatsapp" [size]="18" />
          Falar com Jaqueline
        </a>
        <p class="phone">WhatsApp {{ phone }}</p>
      </div>
    </section>
  `,
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly whatsapp = whatsappUrl(WHATSAPP_MESSAGES.contact);
  protected readonly phone = WHATSAPP_DISPLAY;
  protected readonly backdrop = `url(${IMAGES.portrait.src})`;
}
