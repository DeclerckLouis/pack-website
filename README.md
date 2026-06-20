# Packetflow website

Marketing site for **Packetflow** — Louis Declerck's one-person managed-service
practice (MSP) for small offices in West-Vlaanderen. Rebuilt on
[Astro](https://astro.build) to replace the previous Odoo site, styled with the
**Packetflow Design System** (warm orange-on-cream editorial brand, Lora +
Poppins, blue accent, Lucide icons).

## Stack

- **Astro 5** — static site generation, zero client JS (except Lucide icons)
- **Design tokens** — the Packetflow DS tokens live in `src/styles/global.css`
  (colors, type, spacing, radii, shadows, motion). Re-skin there.
- **@astrojs/sitemap** — automatic sitemap

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview
```

## Deployment & branch flow

Two environments, two branches:

| Environment           | Branch | Workflow             | Target                          |
| --------------------- | ------ | -------------------- | ------------------------------- |
| Staging / acceptance  | `acc`  | `github-pages.yml`   | GitHub Pages (project sub-path) |
| Production            | `main` | `deploy.yml`         | Cloudflare Pages (www.packetflow.be) |

**Flow:** open a feature-branch PR **into `acc`** → merge → review the live
result on GitHub Pages → open a promotion PR **`acc` → `main`** → merge → it
goes live on Cloudflare.

`promote-guard.yml` fails any PR into `main` that doesn't come from `acc`, so
production can only be reached through staging. Cloudflare's deploy step skips
until the `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` repo secrets are set
(see the comments in `deploy.yml`).

To make the guard binding, protect `main` (Settings → Branches): require a PR
before merging, require the **Build & deploy** and **Only promote from acc**
checks, and don't allow direct pushes.

## Information architecture

Two cross-linked layers, both generated from data files:

- **Diensten** (service-led) — `src/data/services.ts`
  - 3 hubs: IT-beheer & support, Zakelijke WiFi & netwerken, Cloud/backup/beveiliging
  - Local SEO pages at flat slugs (e.g. `/it-support-oudenburg`)
- **Voor wie?** (audience-led) — `src/data/sectors.ts`
  - 3 sectors: Vrije beroepen & praktijken (recurring engine), Horeca & B&B's,
    Verenigingen & VZW's
- Plus: Home, **KMO-Pakket**, **Over mij** (founder story), Contact, Privacy, 404

```
src/
  data/
    site.ts        # business info (NAP), nav, geo  ← edit before launch
    services.ts    # 3 service hubs + their local pages
    sectors.ts     # 3 audience hubs ("Voor wie?")
  lib/
    schema.ts      # JSON-LD: shared LocalBusiness @id, Service, BreadcrumbList
  layouts/BaseLayout.astro
  components/       # Logo, Button, Card, Badge, Kicker, Icon, Header, Footer, CtaSection
  pages/            # index, pakket, over-mij, contact, privacy, 404,
                    # diensten/[index,[hub]], sectoren/[index,[sector]], [local]
  styles/global.css # design tokens + shared classes
public/
  _redirects        # 301 map (Odoo → Astro)  ← LAUNCH BLOCKER, complete it
  robots.txt, favicon.svg
```

**Anti-doorway note:** each local page carries a unique `context` paragraph and
distinct `highlights` — keep them genuinely different (or remove) rather than
scaling near-identical city templates.

## Before launch — TODO

- [ ] **301 redirects** (`public/_redirects`): add a line for *every* indexed
      Odoo URL (check Search Console → Pages). This is a launch blocker.
- [ ] Confirm canonical host (currently **www.packetflow.be**, matching Odoo)
      in `astro.config.mjs` + `robots.txt` + `_redirects`.
- [ ] **Confirm KMO-Pakket pricing** — currently `€99 / maand` (flat) in
      `src/pages/pakket.astro`, matching the live site. Adjust if the model differs.
- [ ] Add a **real photo of Louis** → `public/louis.jpg` and swap the portrait
      placeholder in `src/pages/over-mij.astro`.
- [ ] Wire the contact form (`src/pages/contact.astro`) to a handler.
- [ ] Replace the placeholder privacy policy.
- [ ] Verify NAP / geo coordinates in `src/data/site.ts`.

## Possible next steps (backlog)

- `/kennisbank` via Astro content collections for the long tail.
- Differentiate or trim local pages further as real references/cases land.
- Self-host the webfonts and Lucide for full offline/independent shipping.
