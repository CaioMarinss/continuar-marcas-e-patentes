import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BenefitIcon } from '../../core/site-content';

export type IconName = BenefitIcon | 'whatsapp' | 'instagram' | 'arrow-left' | 'arrow-right' | 'arrow-down' | 'arrow-up-right';

/** Decorative inline SVG icons (1.25px line style). Always aria-hidden: pair with visible text or an aria-label. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    style: 'display:inline-flex;flex:none',
  },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
}
