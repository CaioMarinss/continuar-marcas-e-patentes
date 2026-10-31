import { NAV_ITEMS, WHATSAPP_MESSAGES, WHATSAPP_NUMBER, whatsappUrl } from './site-content';

describe('site content', () => {
  it('builds a plain WhatsApp link without message', () => {
    expect(whatsappUrl()).toBe(`https://wa.me/${WHATSAPP_NUMBER}`);
  });

  it('encodes the prefilled message', () => {
    const url = new URL(whatsappUrl(WHATSAPP_MESSAGES.hero));
    expect(url.origin + url.pathname).toBe('https://wa.me/5511916498730');
    expect(url.searchParams.get('text')).toBe('Olá, Jaqueline. Quero proteger minha marca.');
  });

  it('uses unique navigation fragments', () => {
    const fragments = NAV_ITEMS.map((item) => item.fragment);
    expect(new Set(fragments).size).toBe(fragments.length);
  });
});
