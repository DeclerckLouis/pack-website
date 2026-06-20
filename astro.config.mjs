// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` and `base` are overridable via env. Production and Cloudflare Pages
// preview deploys both serve at the domain root, so `base` is always "/"; the
// deploy workflow pins SITE_URL to production so previews carry a canonical
// pointing at packetflow.be (and won't get indexed as duplicates).
const site = process.env.SITE_URL ?? "https://www.packetflow.be";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
