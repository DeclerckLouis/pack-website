// Base-aware URL helper. When the site is served under a sub-path (e.g. GitHub
// Pages project sites at /pack-website/), internal links must include that
// base. Astro exposes it as import.meta.env.BASE_URL (always trailing-slashed,
// "/" by default). External links, anchors, tel:/mailto: pass through unchanged.
const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) {
    return path;
  }
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  return base + path;
}
