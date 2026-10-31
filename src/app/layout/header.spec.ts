import { TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  async function setup() {
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const toggle = el.querySelector<HTMLButtonElement>('button.toggle')!;
    return { fixture, el, toggle };
  }

  it('toggles the mobile menu and updates aria-expanded', async () => {
    const { fixture, toggle } = await setup();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.textContent).toContain('Fechar menu');
  });

  it('closes the menu on Escape and on link click', async () => {
    const { fixture, el, toggle } = await setup();

    toggle.click();
    await fixture.whenStable();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    toggle.click();
    await fixture.whenStable();
    el.querySelector<HTMLAnchorElement>('.nav__link')!.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('links every nav item to an in-page section', async () => {
    const { el } = await setup();
    const hrefs = Array.from(el.querySelectorAll('.nav__link')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['#sobre', '#protecao', '#conteudos', '#presenca']);
  });

  it('returns focus to the toggle when closing with Escape', async () => {
    const { fixture, toggle } = await setup();
    document.body.appendChild(fixture.nativeElement);

    toggle.click();
    await fixture.whenStable();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(document.activeElement).toBe(toggle);
    fixture.nativeElement.remove();
  });

  it('closes the menu when focus leaves the header', async () => {
    const { fixture, el, toggle } = await setup();
    const outside = document.createElement('button');

    toggle.click();
    await fixture.whenStable();
    el.querySelector('.nav__cta')!.dispatchEvent(
      new FocusEvent('focusout', { bubbles: true, relatedTarget: outside }),
    );
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
