# Personal Portfolio (Astro + Tailwind)

Sitio estático bilingüe (ES/EN) orientado a performance, SEO técnico, accesibilidad y conversión. Stack: Astro (SSG) con Tailwind v4, TypeScript, colecciones de contenido y JSON-LD.

## Comandos
- `npm install` — instala dependencias.
- `npm run dev` — dev server en `localhost:4321`.
- `npm run build` — genera producción en `dist/`.
- `npm run preview` — sirve el build estático.
- `npm run check` — typecheck de Astro/TS.

## Configuración clave
- `SITE_URL` (opcional): define la URL canónica del sitio. Por defecto `https://maycolljaramillo.com`. Úsalo en despliegue para canónicos/sitemap/robots/RSS.
  - Ejemplo: crear `.env` con `SITE_URL=https://tu-dominio.com`.
- Rutas principales:
  - Home: `/es`, `/en` (redirect desde `/` a `/es`).
  - About: `/es/about`, `/en/about`.
  - Services: `/es/services`, `/en/services`.
  - Contact: `/es/contact`, `/en/contact` (alias `/contact` redirige).
  - Work (casos): `/work`, `/work/[slug]`.
  - Blog: `/blog`, `/blog/[slug]`.
  - Legales: `/privacy`, `/terms`, `/404`.

## Contenido (Content Collections)
- Casos: `src/content/case-studies/*.md`
  - Campos: `title, client?, industry, role, stack[], highlights[], results[], situation, task, action, outcome, status, date, links?, seo{title,description}`.
- Blog: `src/content/blog/*.md`
  - Campos: `title, excerpt, tags[], date, updated?, lang, seo{title,description}`.
- Agrega nuevos archivos en esas carpetas; el esquema valida en build.

## Componentes reutilizables
- `src/components/Seo.astro` — metatags, OG/Twitter, JSON-LD.
- `Header`, `Footer`, `Hero`, `StackGroup`, `CaseStudyCard`, `PostCard`.
- Layout base: `src/layouts/BaseLayout.astro` (incluye skip-link, hreflang, Person/WebSite/ProfilePage JSON-LD).

## SEO / Accesibilidad / Performance
- Sitemaps y robots: auto con `@astrojs/sitemap` + `src/pages/robots.txt.ts`.
- RSS: `src/pages/rss.xml.ts`.
- Hreflang ES/EN en home/about/services/contact via props `alternates` en los layouts.
- Imágenes: no hay hero pesado; OG estático en `public/og-default.png` (1200x630). Si añades imágenes, declara `width/height` o `aspect-ratio` para evitar CLS.
- Accesibilidad: navegación por teclado en header, foco visible, semántica (un `h1` por página), `prefers-reduced-motion` respetado.
- Tracking: no hay scripts de analítica por defecto; añade solo si es necesario y en modo diferido.

## Despliegue
- Vercel: configuración en `vercel.json` (cabeceras de seguridad básicas). Comando: `npm run build`, publish `dist`.
- Netlify: `netlify.toml` ya apunta a `dist` y define cabeceras (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`). Añade `SITE_URL` en variables del proyecto.

## Checklist rápida (pre-release)
- [ ] `npm run build` sin errores.
- [ ] `SITE_URL` configurado en entorno productivo.
- [ ] Lighthouse: validar 100/100/100/100 (especialmente LCP/CLS y contraste).
- [ ] Revisión de foco por teclado en header/nav/contact.
- [ ] Metadatos por página: title/description/canonical/og/twitter OK.
- [ ] JSON-LD válido (Person, ProfilePage, WebSite; breadcrumbs en páginas internas).
- [ ] Sin scripts pesados ni assets sin `width/height`.

## Editar/añadir contenido
- Casos de estudio: crea un `.md` en `src/content/case-studies/` con la estructura STAR y `results` claros. Si no hay números públicos, usa “Disponible bajo solicitud”.
- Blog: añade `.md` en `src/content/blog/` con `tags` y `seo` completos. `lang` por defecto `es`.

## Estilo y colores
- Tailwind v4 con tokens en `src/styles/global.css`. Paleta: fondo charcoal (`--color-surface`), acentos dorado tenue y rojo suave. Tipografía: system stack. Focus visible global.

## Seguridad recomendada
- Cabeceras incluidas en configs (ajusta según dominio): `X-Content-Type-Options=nosniff`, `Referrer-Policy=strict-origin-when-cross-origin`, `Permissions-Policy=geolocation=(), microphone=(), camera=()`.
- HSTS solo si sirve siempre sobre HTTPS (añadir manualmente según plataforma).
