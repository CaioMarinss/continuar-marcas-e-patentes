import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, VIDEOS } from '../../core/site-content';
import { Reveal } from '../../shared/reveal';
import { Icon } from '../../shared/ui/icon';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-contents',
  imports: [Reveal, Icon, SectionHeading],
  templateUrl: './contents.html',
  styleUrl: './contents.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contents {
  protected readonly videos = VIDEOS;
  protected readonly instagramUrl = INSTAGRAM_URL;
  protected readonly instagramHandle = INSTAGRAM_HANDLE;

  private readonly rail = viewChild.required<ElementRef<HTMLElement>>('rail');
  private playing: HTMLVideoElement | null = null;

  scroll(direction: -1 | 1): void {
    const rail = this.rail().nativeElement;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    rail.scrollBy({ left: direction * rail.clientWidth * 0.8, behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  /** Only one video plays at a time. */
  onPlay(event: Event): void {
    const video = event.target as HTMLVideoElement;
    if (this.playing && this.playing !== video) this.playing.pause();
    this.playing = video;
  }
}
