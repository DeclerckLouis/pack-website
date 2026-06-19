// Structured-data (JSON-LD) helpers. Centralised so every page references the
// same LocalBusiness via a shared @id, and breadcrumbs are consistent.
import { site, geo } from "@/data/site";

const SITE_URL = "https://www.packetflow.be";
export const ORG_ID = `${SITE_URL}/#business`;

/** The canonical LocalBusiness node. Reference it by @id elsewhere. */
export function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.legalName,
    description: site.description,
    url: SITE_URL,
    telephone: site.phoneIntl,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    priceRange: "€€",
    areaServed: { "@type": "AdministrativeArea", name: site.serviceArea },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: "8490",
      addressCountry: "BE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    // Explicitly encodes the brand's "'s avonds en in het weekend" promise.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };
}

/** A Service node tied to the shared LocalBusiness provider. */
export function service(opts: {
  name: string;
  description: string;
  serviceType?: string;
  areaName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: opts.areaName ?? site.serviceArea },
  };
}

/** BreadcrumbList from [label, path] pairs (path relative, leading slash). */
export function breadcrumbs(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}
