import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IMAGES } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { ScrollProgress } from '../../shared/scroll-progress';

const QUOTE = '“Sua marca é mais que um nome.”';
const TEXT = 'Ela reúne sua identidade, o que você construiu e o legado que deseja deixar.';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, Reveal, ScrollProgress],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly photo = IMAGES.standing;
  protected readonly quote = QUOTE;
  protected readonly text = TEXT;
  protected readonly quoteWords = QUOTE.split(' ');
  protected readonly textWords = TEXT.split(' ');
  protected readonly wordCount = this.quoteWords.length + this.textWords.length;
}
