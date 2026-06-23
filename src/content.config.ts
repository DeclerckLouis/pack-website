// Content collections (Astro content layer). The blog is the "endpoint" that
// new articles plug into: drop a Markdown file in src/content/blog/ with the
// frontmatter below and it gets its own /blog/<slug> page, a card on /blog and
// a sitemap entry — no per-article wiring.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { site } from "@/data/site";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Planned publication date. Articles dated in the future are never built
    // into the live site (see src/lib/blog.ts) — so a post can be merged ahead
    // of time and it stays hidden until its date arrives and the site rebuilds.
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default(site.owner),
    // Short category-style labels shown on the article and index.
    tags: z.array(z.string()).default([]),
    // Social/share image relative to the site root. Falls back to the site OG.
    image: z.string().optional(),
    // Keep an article out of production even if its date has passed.
    draft: z.boolean().default(false),
    // Whether to render the lead-capture form at the foot of the article.
    leadForm: z.boolean().default(true),
    // UTM-style campaign label attached to leads from this article's form, so
    // submissions can be told apart in the CRM. Defaults to the slug.
    leadCampaign: z.string().optional(),
    // Optional FAQ block, rendered visibly and emitted as FAQPage structured
    // data. Answers must match the on-page text (they're the same source).
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .optional(),
  }),
});

export const collections = { blog };
