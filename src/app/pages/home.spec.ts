import { TestBed } from '@angular/core/testing';
import { BENEFITS, IDENTITY_QUESTIONS, NAV_ITEMS, VIDEOS } from '../core/site-content';
import { Home } from './home';

describe('Home', () => {
  let el: HTMLElement;

  beforeEach(async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    el = fixture.nativeElement as HTMLElement;
  });

  it('has a single h1 with the original headline', () => {
    const h1s = el.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].textContent).toContain('Sua marca carrega uma história.');
    expect(h1s[0].textContent).toContain('Ela merece continuar.');
  });

  it('keeps the manifesto readable as plain text for screen readers', () => {
    const hidden = Array.from(el.querySelectorAll('app-about .visually-hidden')).map(
      (n) => n.textContent,
    );
    expect(hidden).toContain('“Sua marca é mais que um nome.”');
    expect(hidden).toContain(
      'Ela reúne sua identidade, o que você construiu e o legado que deseja deixar.',
    );
  });

  it('renders a target section for every navigation anchor', () => {
    for (const item of NAV_ITEMS) {
      expect(el.querySelector(`section#${item.fragment}`), item.fragment).toBeTruthy();
    }
  });

  it('renders all benefits, questions and video captions from the content source', () => {
    expect(el.querySelectorAll('.benefit').length).toBe(BENEFITS.length);
    expect(el.querySelectorAll('app-questions li').length).toBe(IDENTITY_QUESTIONS.length);
    expect(el.querySelectorAll('.rail figcaption').length).toBe(VIDEOS.length);
  });

  it('gives every image a non-empty alt text', () => {
    const images = Array.from(el.querySelectorAll('img'));
    expect(images.length).toBeGreaterThan(0);
    for (const img of images) {
      expect(img.getAttribute('alt')?.trim(), img.getAttribute('src') ?? '').toBeTruthy();
    }
  });

  it('opens external links safely', () => {
    for (const link of Array.from(el.querySelectorAll('a[target="_blank"]'))) {
      expect(link.getAttribute('rel')).toContain('noopener');
    }
  });
});
