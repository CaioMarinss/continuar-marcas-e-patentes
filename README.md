# Jaqueline Sousa | Continuar Marcas e Patentes

Site institucional (página única) em Angular 22 + SCSS, pré-renderizado como HTML estático.

## Comandos

```bash
npm install        # .npmrc usa legacy-peer-deps (contorna bug do npm 10 com peers do vitest)
npm start          # servidor de desenvolvimento em http://localhost:4200
npm run build      # gera dist/jaqueline-site/browser (HTML estático, pronto para qualquer hospedagem)
npm test -- --watch=false
```

## Estrutura

```
src/app/
  core/site-content.ts   textos, links, imagens e vídeos (fonte única do conteúdo)
  shared/                Reveal (fade-in) e ui/ (ButtonLink, Icon, SectionHeading)
  layout/                Header e Footer
  sections/              Hero, About, Questions, Protection, Attendance, Contents, Presence, Contact
  pages/home.ts          composição da página
src/styles.scss          tokens (cores, tipografia, espaçamentos) e estilos base
src/styles/_mixins.scss  breakpoints, container, tons de seção (claro/escuro)
public/images, videos    mídia original do site anterior (fotos convertidas para WebP)
```

O conteúdo foi extraído de https://jaquelinesousa.conexaoalphaville.com.br/. Alterações de texto devem ser feitas
apenas em `site-content.ts` (ou nos templates das seções) e validadas com a cliente.

## Pendências

- Definir o domínio final para incluir `canonical`, `og:url`, `og:image` (URL absoluta) e `url` no JSON-LD em `src/index.html`.
- Vídeos somam ~61 MB; carregam sob demanda, mas comprimi-los (ou hospedá-los em CDN/YouTube) reduziria o custo de banda.
