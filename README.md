# JIWA Developments — website

Native rebuild of jiwadevelopment.com (previously WordPress/Elementor) as a fast static site built with [Astro](https://astro.build).
All images, logos, brochures and fonts are stored **in this repository** — nothing is loaded from the old WordPress site.

## What's inside

| Path | Contents |
| --- | --- |
| `public/images/` | Every image from the original site (same folder names as the WP uploads: `2024/07/…`, `2026/02/…`) |
| `public/files/` | Project brochures (Aiangle brochure, One Plaza sales kit) |
| `src/data/site.ts` | All English + Arabic copy, projects, services, contact details |
| `src/data/jobs.json` | Job posts (English + Arabic) |
| `src/views/` | Page templates (Home, About, Project, Careers, Contact, Job, Service) shared by both languages |
| `src/pages/` | URL routes — same URLs as the original site, incl. Arabic ones like `/ar/عن-jiwa/` |
| `src/styles/global.css` | All styling, light + dark themes, RTL |
| `src/scripts/main.ts` | Sliders, tabs, accordion, counters, light/dark toggle, forms |

Fonts (self-hosted via `@fontsource`): **Sora** (English), **Cairo** (Arabic), **Playfair Display** italic (accent words), **DM Sans** (counters) — the same fonts the original site used.

The light/dark toggle (floating button on the right) remembers the choice in `localStorage` (`mode`), like the original. As on the original, the Arabic site starts in dark mode and the English site in light mode.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Contact / job forms

The site is static, so forms need a form service. Set `PUBLIC_FORM_ENDPOINT` (e.g. a Formspree or Getform endpoint) as a repository **variable** (Settings → Secrets and variables → Actions → Variables) and the forms will post there.
Without it, submitting a form opens the visitor's e-mail app addressed to info@jiwadevelopment.com.

## Deploy

`.github/workflows/deploy.yml` publishes to GitHub Pages on every push to `main` (enable Pages → Source: GitHub Actions).
To serve it on jiwadevelopment.com, add the custom domain in the Pages settings and point DNS to GitHub Pages. The `dist/` folder also works on any static host (Vercel, Netlify, Cloudflare Pages…).
