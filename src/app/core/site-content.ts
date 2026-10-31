/**
 * Single source of truth for the site copy.
 * All texts, links and media come from the original site (jaquelinesousa.conexaoalphaville.com.br)
 * and must not be changed without the client's confirmation.
 */

export const WHATSAPP_NUMBER = '5511916498730';
export const WHATSAPP_DISPLAY = '(11) 91649-8730';
export const INSTAGRAM_URL = 'https://www.instagram.com/continuarmarcasepatentes';
export const INSTAGRAM_HANDLE = '@continuarmarcasepatentes';

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WHATSAPP_MESSAGES = {
  header: 'Olá, Jaqueline. Quero conversar sobre a proteção da minha marca.',
  hero: 'Olá, Jaqueline. Quero proteger minha marca.',
  attendance: 'Olá, Jaqueline. Quero conversar sobre minha marca.',
  contact: 'Olá, Jaqueline. Quero iniciar o registro da minha marca.',
} as const;

export interface NavItem {
  readonly label: string;
  readonly fragment: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Sobre', fragment: 'sobre' },
  { label: 'Proteção', fragment: 'protecao' },
  { label: 'Conteúdos', fragment: 'conteudos' },
  { label: 'Presença', fragment: 'presenca' },
];

export interface SiteImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export const IMAGES = {
  logoLight: { src: 'images/logo-continuar-light.png', alt: 'Continuar Marcas e Patentes', width: 300, height: 178 },
  portrait: {
    src: 'images/jaqueline-retrato.webp',
    alt: 'Jaqueline Sousa, fundadora da Continuar Marcas e Patentes',
    width: 1066,
    height: 1600,
  },
  standing: { src: 'images/jaqueline-em-pe.webp', alt: 'Jaqueline Sousa em ambiente profissional', width: 1000, height: 1501 },
  office: { src: 'images/jaqueline-escritorio.webp', alt: 'Jaqueline Sousa em atendimento na Continuar', width: 1000, height: 1573 },
  manifesto: {
    src: 'images/manifesto-marca.webp',
    alt: 'Registrar sua marca é honrar quem você é, o que construiu e o legado que deixará. É proteger o presente, com os olhos no futuro.',
    width: 1048,
    height: 605,
  },
} satisfies Record<string, SiteImage>;

export const PRESENCE_PHOTOS: readonly SiteImage[] = [
  { src: 'images/jaqueline-evento.webp', alt: 'Jaqueline em evento', width: 900, height: 900 },
  {
    src: 'images/jaqueline-palestra.webp',
    alt: 'Jaqueline apresentando conteúdo sobre garantias de uma marca registrada',
    width: 900,
    height: 775,
  },
  { src: 'images/jaqueline-painel.webp', alt: 'Jaqueline em painel sobre marcas', width: 900, height: 900 },
  { src: 'images/jaqueline-apresentacao.webp', alt: 'Jaqueline em apresentação profissional', width: 899, height: 1599 },
  { src: 'images/jaqueline-encontro.webp', alt: 'Jaqueline em encontro profissional', width: 899, height: 1599 },
  { src: 'images/jaqueline-especialista.webp', alt: 'Jaqueline Sousa, especialista em marcas', width: 900, height: 900 },
];

export type BenefitIcon = 'territory' | 'shield' | 'value' | 'growth';

export interface Benefit {
  readonly icon: BenefitIcon;
  readonly title: string;
  readonly text: string;
}

export const BENEFITS: readonly Benefit[] = [
  {
    icon: 'territory',
    title: 'Exclusividade nacional de uso',
    text: 'Proteção para usar a marca no território nacional dentro da atividade registrada.',
  },
  {
    icon: 'shield',
    title: 'Proteção jurídica real',
    text: 'Um instrumento para defender a identidade construída pelo seu negócio.',
  },
  {
    icon: 'value',
    title: 'Valor agregado ao negócio',
    text: 'A marca registrada pode ser licenciada ou vendida como um ativo.',
  },
  {
    icon: 'growth',
    title: 'Segurança para expandir',
    text: 'Uma estrutura mais segura para crescer, escalar ou franquear.',
  },
];

export const IDENTITY_QUESTIONS: readonly string[] = [
  'O que levou você a criar esse nome?',
  'Sua identidade pessoal está refletida na sua marca?',
  'A imagem da sua marca comunica seu verdadeiro propósito?',
];

export interface SiteVideo {
  readonly src: string;
  readonly caption: string;
}

/** Same order as the original site. All videos are vertical (9:16). */
export const VIDEOS: readonly SiteVideo[] = [
  { src: 'videos/video-07.mp4', caption: 'Marca e proteção' },
  { src: 'videos/video-12.mp4', caption: 'Conversas sobre identidade' },
  { src: 'videos/video-11.mp4', caption: 'Participação especial' },
  { src: 'videos/video-10.mp4', caption: 'Bastidores e presença' },
  { src: 'videos/video-08.mp4', caption: 'Registro de marca' },
  { src: 'videos/video-09.mp4', caption: 'Conteúdo direto' },
  { src: 'videos/video-01.mp4', caption: 'Encontros da marca' },
  { src: 'videos/video-02.mp4', caption: 'Marca em movimento' },
  { src: 'videos/video-03.mp4', caption: 'Palco e conhecimento' },
  { src: 'videos/video-04.mp4', caption: 'Participação em evento' },
  { src: 'videos/video-05.mp4', caption: 'Presença da Continuar' },
  { src: 'videos/video-06.mp4', caption: 'Orientação em vídeo' },
  { src: 'videos/video-13.mp4', caption: 'Conexões e encontros' },
];
