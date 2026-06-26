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

// Normalise Astro.url.pathname to the clean, slashless route Cloudflare actually
// serves. With `build.format: "file"` the pathname carries a ".html" suffix
// (e.g. /blog.html, /index.html) — strip it so canonicals, og:url and the
// active-nav matching use /blog and / instead of the redirecting .html form.
// In `astro dev` the pathname is already clean, so this is a no-op there.
export function cleanPath(pathname: string): string {
  let p = pathname;
  if (p.endsWith("/index.html")) p = p.slice(0, -"index.html".length);
  else if (p.endsWith(".html")) p = p.slice(0, -".html".length);
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p === "" ? "/" : p;
}
