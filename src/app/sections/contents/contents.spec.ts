import { TestBed } from '@angular/core/testing';
import { Contents } from './contents';

describe('Contents', () => {
  it('pauses the previously playing video when another one starts', () => {
    const component = TestBed.createComponent(Contents).componentInstance;
    const first = document.createElement('video');
    const second = document.createElement('video');
    const pause = vi.spyOn(first, 'pause').mockImplementation(() => undefined);

    component.onPlay({ target: first } as unknown as Event);
    component.onPlay({ target: second } as unknown as Event);

    expect(pause).toHaveBeenCalledTimes(1);
  });

  it('does not pause a video that is resumed', () => {
    const component = TestBed.createComponent(Contents).componentInstance;
    const video = document.createElement('video');
    const pause = vi.spyOn(video, 'pause').mockImplementation(() => undefined);

    component.onPlay({ target: video } as unknown as Event);
    component.onPlay({ target: video } as unknown as Event);

    expect(pause).not.toHaveBeenCalled();
  });
});
