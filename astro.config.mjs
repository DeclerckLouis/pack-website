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
  // Canonical URLs carry no trailing slash. `format: "file"` emits /blog.html
  // (not /blog/index.html) so Cloudflare Pages serves it at the slashless path
  // with no 308 redirect — directory output forces /blog → /blog/, which breaks
  // the self-referencing canonical and adds a hop to every internal link. Keeps
  // canonicals, internal links, sitemap and the redirect map consistent on one
  // slashless form (no /pakket vs /pakket/ split).
  trailingSlash: "never",
  build: { format: "file" },
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
