import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BENEFITS } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { Icon } from '../../shared/ui/icon';
import { SectionHeading } from '../../shared/ui/section-heading';
import { ScrollProgress } from '../../shared/scroll-progress';
import { Spotlight } from '../../shared/spotlight';

@Component({
  selector: 'app-protection',
  imports: [Reveal, Icon, SectionHeading, ScrollProgress, Spotlight],
  templateUrl: './protection.html',
  styleUrl: './protection.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Protection {
  protected readonly benefits = BENEFITS;
}
