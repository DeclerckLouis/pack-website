// Central business / NAP (Name-Address-Phone) configuration for Packetflow.
export const site = {
  name: "Packetflow",
  legalName: "Packetflow",
  owner: "Louis Declerck",
  tagline: "Uw partner in IT",
  pillars: "Lokaal · Persoonlijk · Scherp geprijsd",
  description:
    "Packetflow is uw lokale IT-partner in West-Vlaanderen. In bijberoep help ik advocaten, architecten en makelaars met Microsoft 365, veilige backup, Peppol en cybersecurity — één aanspreekpunt, proactief en scherp geprijsd.",
  email: "louis@packetflow.be",
  phone: "0468 22 72 12",
  phoneIntl: "+32 468 22 72 12",
  phoneHref: "tel:+32468227212",
  address: {
    city: "Jabbeke",
    region: "West-Vlaanderen",
    country: "België",
  },
  serviceArea: "West-Vlaanderen",
} as const;

// Top navigation. Lean by design: the service hubs live under /diensten, the
// audience hubs under /sectoren, and the local pages sit underneath the
// service hubs (linked from content + footer).
export const mainNav = [
  { label: "Voor wie?", href: "/sectoren" },
  { label: "Diensten", href: "/diensten" },
  { label: "KMO-Pakket", href: "/pakket" },
  { label: "Over mij", href: "/over-mij" },
] as const;

// Geo coordinates for Jabbeke (approx. town centre) — used in LocalBusiness
// structured data. Adjust to the exact business location if desired.
export const geo = { latitude: 51.1786, longitude: 3.0961 } as const;
