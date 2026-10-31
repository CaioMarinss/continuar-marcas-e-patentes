import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IDENTITY_QUESTIONS } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/ui/section-heading';
import { ScrollProgress } from '../../shared/scroll-progress';

@Component({
  selector: 'app-questions',
  imports: [Reveal, SectionHeading, ScrollProgress],
  template: `
    <section class="questions" aria-labelledby="identidade-title">
      <div class="inner">
        <div class="aside">
          <app-section-heading
            appReveal
            eyebrow="Identidade antes do registro"
            title="Qual é a história por trás da sua marca?"
            titleId="identidade-title"
          />
        </div>
        <ol class="list">
          @for (question of questions; track question; let i = $index) {
            <li appScrollProgress="view">
              <span class="number" aria-hidden="true">{{
                (i + 1).toString().padStart(2, '0')
              }}</span>
              <h3>{{ question }}</h3>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styleUrl: './questions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Questions {
  protected readonly questions = IDENTITY_QUESTIONS;
}
