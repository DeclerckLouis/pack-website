# Pack website

New marketing site for **Pack**, rebuilt on [Astro](https://astro.build) to
replace the previous Odoo site. Static-first and SEO-focused, with a lean top
navigation and local landing pages for local search.

## Stack

- **Astro 5** — static site generation
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`)
- **@astrojs/sitemap** — automatic sitemap

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Structure

```
src/
  data/
    site.ts        # business info (NAP), top navigation  ← edit before launch
    services.ts    # the 3 service hubs + their local pages (single source of truth)
  layouts/
    BaseLayout.astro
  components/
    Header.astro   # lean top nav: Home, Pakket, Diensten, Contact
    Footer.astro   # service hubs + all local pages
    CtaSection.astro
  pages/
    index.astro            # Home
    pakket.astro           # KMO-Pakket
    diensten/index.astro   # Diensten overview
    diensten/[hub].astro   # one page per service hub
    [local].astro          # one page per local SEO landing page (flat slug)
    contact.astro
    privacy.astro
  styles/
    global.css     # design tokens (colors/fonts) — re-skin here
```

### Information architecture

The top menu stays limited to **Home, KMO-Pakket, Diensten, Contact**. The three
service hubs live under `/diensten`, and the local pages sit underneath them —
linked from hub content and the footer, not the top nav.

| Service hub | Local pages |
| --- | --- |
| IT-Beheer & Support | Jabbeke, Oudenburg, Brugge, Oostende, West-Vlaanderen |
| Zakelijke WiFi & Netwerken | Horeca Jabbeke, B&B Brugse Ommeland, KMO Oostende |
| Cloud, Backup & Beveiliging | (geen lokale pagina's — lage lokale zoekintentie) |

**Adding a location:** add an entry to the relevant hub's `locals` array in
`src/data/services.ts`. A page, footer link and sitemap entry are generated
automatically.

## Before launch — TODO

- [ ] Replace placeholder NAP details in `src/data/site.ts` (name, address, phone, email).
- [ ] Set the production domain in `astro.config.mjs` (`site`) and `public/robots.txt`.
- [ ] Apply the final visual design (colors/fonts in `src/styles/global.css`).
- [ ] Wire the contact form (`src/pages/contact.astro`) to a real handler.
- [ ] Replace the placeholder privacy policy.
- [ ] Add real logo / favicon.
```
