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
  {
    author: "Stefaan V.H.",
    rating: 5,
    text: `Enorm content, Louis heeft de wifi in ons kantoor in Brugge volledig vernieuwd. Stabiele en snelle verbinding in elke kamer, gescheiden gastenwifi.
Op het einde kregen we een handig documentje met alle info over het netwerk en enkele dingen die we zelf kunnen proberen bij problemen.
Bereikbaar op zaterdagochtend, meteen het hele weekend doorgewerkt. Een absolute aanrader!`,
  },
  {
    author: "Charlotte C.",
    rating: 5,
    text: `Sinds enkele maanden kunnen we bij Packetflow terecht voor het IT beheer van onze apotheek.
Goedkoper dan de "grote" spelers en altijd vlotte, duidelijke communicatie.
Doe zo voort!`,
  },
  {
    author: "Alex K.",
    rating: 5,
    text: `Zeer correct, vriendelijk, hulpvaardig en met kennis van zaken. Ik kan Louis met veel vertrouwen aanbevelen voor al uw IT-bekommernissen!`,
  },
];
