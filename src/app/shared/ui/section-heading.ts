import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Eyebrow + h2 + optional lead (projected content).
 * Colors come from the parent section's --section-* custom properties.
 */
@Component({
  selector: 'app-section-heading',
  template: `
    <div class="heading">
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h2 [id]="titleId()">{{ title() }}</h2>
    </div>
    <div class="lead"><ng-content /></div>
  `,
  styleUrl: './section-heading.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-center]': 'layout() === "center"',
    '[class.is-split]': 'layout() === "split"',
  },
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  /** Lets the parent section reference the title with aria-labelledby. */
  readonly titleId = input<string>();
  readonly layout = input<'start' | 'center' | 'split'>('start');
}
