// Blog helpers. Centralises the one rule that matters most: an article is only
// "published" once its pubDate has arrived. Future-dated posts are filtered out
// of every public surface (index, routes, sitemap) in production builds, so a
// planned article can sit in the repo without leaking early. Drafts are hidden
// in production too, but still previewable in `astro dev`.
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const now = Date.now();
  const posts = await getCollection("blog", ({ data }) => {
    // In dev we show drafts + future posts so they can be previewed locally.
    if (import.meta.env.DEV) return true;
    return !data.draft && data.pubDate.getTime() <= now;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

/** Format a date for display in nl-BE (e.g. "23 juni 2026"). */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("nl-BE", { dateStyle: "long" }).format(date);
}
