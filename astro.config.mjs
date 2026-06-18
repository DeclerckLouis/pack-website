// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` and `base` are overridable via env so the same code can ship to:
//   - production (root of www.packetflow.be)            -> defaults below
//   - a GitHub Pages preview (project sub-path)         -> SITE_URL + BASE_PATH
// The GitHub Pages workflow sets SITE_URL/BASE_PATH; locally they're unset.
const site = process.env.SITE_URL ?? "https://www.packetflow.be";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
