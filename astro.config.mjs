// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// `site` and `base` are overridable via env. Production and Cloudflare Pages
// preview deploys both serve at the domain root, so `base` is always "/"; the
// deploy workflow pins SITE_URL to production so previews carry a canonical
// pointing at packetflow.be (and won't get indexed as duplicates).
const site = process.env.SITE_URL ?? "https://www.packetflow.be";
const base = process.env.BASE_PATH ?? "/";

// Build timestamp, reused as the sitemap `lastmod` for every URL. A single
// build-time value keeps it honest (a deploy did touch the output) without
// pretending individual pages changed on dates they didn't.
const buildDate = new Date().toISOString();

export default defineConfig({
  site,
  base,
  // Canonical URLs carry no trailing slash; Cloudflare Pages still serves the
  // directory-format output at the slashless path. Keeps canonicals, internal
  // links and the redirect map consistent (no /pakket vs /pakket/ split).
  trailingSlash: "never",
  integrations: [
    sitemap({
      // Stamp every entry with a lastmod so crawlers get a recrawl signal.
      serialize(item) {
        item.lastmod = buildDate;
        return item;
      },
    }),
  ],
});
