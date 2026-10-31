import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ButtonVariant = 'gold' | 'ink';

/** Call-to-action styling for anchors: `<a appButton variant="gold" href="...">`. */
@Component({
  selector: 'a[appButton]',
  template: '<ng-content />',
  styleUrl: './button-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"btn btn--" + variant()',
  },
})
export class ButtonLink {
  readonly variant = input<ButtonVariant>('gold');
}
