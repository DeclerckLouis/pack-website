// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Update `site` to the production domain before deploying so canonical URLs,
// the sitemap and structured data resolve to absolute URLs.
export default defineConfig({
  site: "https://www.packetflow.be",
  integrations: [sitemap()],
});
