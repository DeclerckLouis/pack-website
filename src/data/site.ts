// Central business / NAP (Name-Address-Phone) configuration.
// EDIT THESE before launch — they feed the header, footer, contact page,
// and the LocalBusiness structured data used for local SEO.
export const site = {
  name: "Pack",
  legalName: "Pack BV",
  tagline: "Lokale, proactieve IT-partner voor KMO's en praktijken",
  description:
    "Pack is je lokale IT-partner in West-Vlaanderen. Eén vast aanspreekpunt voor IT-beheer, Microsoft 365, backup, Peppol, cybersecurity en zakelijke WiFi — proactief beheerd aan een vaste maandprijs.",
  // Contact / NAP — placeholders, replace with the real details.
  email: "info@example.be",
  phone: "+32 50 00 00 00",
  phoneHref: "tel:+3250000000",
  address: {
    street: "Voorbeeldstraat 1",
    postalCode: "8490",
    city: "Jabbeke",
    region: "West-Vlaanderen",
    country: "België",
  },
  // Primary service area (used in copy + structured data).
  serviceArea: "West-Vlaanderen",
  social: {
    linkedin: "",
  },
} as const;

// Top-level navigation. Per the agreed structure the top menu stays lean:
// Home, Pakket and the three service hubs. Local pages are linked from
// within hub content and the footer (not the top nav) to keep it clean.
export const mainNav = [
  { label: "Home", href: "/" },
  { label: "KMO-Pakket", href: "/pakket" },
  { label: "Diensten", href: "/diensten" },
  { label: "Contact", href: "/contact" },
] as const;
