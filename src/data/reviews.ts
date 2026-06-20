// Static Google reviews for the "Wat klanten zeggen" section. Kept static on
// purpose: no third-party widget (Elfsight / Places API) — that would add a JS
// dependency, a third-party request and a cost for marginal gain, against the
// site's clean static ethos. The durable SEO value of reviews lives on the
// Google Business Profile itself, which `googleReviewsUrl` links to.

// TODO (Louis): paste the GBP reviews / "write a review" URL.
export const googleReviewsUrl = "";

export type Review = { author: string; rating: number; text: string; date?: string };

// Real reviews only — copy them verbatim from the Google Business Profile,
// attribute by first name/initial, keep accurate. Never invent or edit a review.
// The Reviews section renders nothing while this array is empty (graceful
// fallback, like the sector proof strip), so it's safe to ship empty.
export const reviews: Review[] = [
  // { author: "…", rating: 5, text: "…", date: "2026-05" },
];
