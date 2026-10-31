import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScrollProgress } from './scroll-progress';

@Component({
  imports: [ScrollProgress],
  template: `<div appScrollProgress="view" style="height: 500px"></div>`,
})
class Host {}

function mockEnvironment(reducedMotion: boolean): void {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({ matches: reducedMotion } as MediaQueryList),
  );
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn();
      disconnect = vi.fn();
    },
  );
}

async function render(): Promise<HTMLElement> {
  const fixture = TestBed.createComponent(Host);
  await fixture.whenStable();
  return (fixture.nativeElement as HTMLElement).querySelector('div')!;
}

describe('ScrollProgress', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('activates the scene and exposes a clamped --p progress', async () => {
    mockEnvironment(false);
    const el = await render();

    expect(el.classList).toContain('is-scrolly');
    const progress = Number(el.style.getPropertyValue('--p'));
    expect(progress).toBeGreaterThanOrEqual(0);
    expect(progress).toBeLessThanOrEqual(1);
  });

  it('keeps the static layout when the visitor prefers reduced motion', async () => {
    mockEnvironment(true);
    const el = await render();

    expect(el.classList).not.toContain('is-scrolly');
    expect(el.style.getPropertyValue('--p')).toBe('');
  });
});
