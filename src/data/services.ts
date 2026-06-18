// Single source of truth for the three Service Hubs and their local SEO
// landing pages. Pages are generated from this data:
//   - /diensten                       -> overview of all hubs
//   - /diensten/[hub]                 -> a service hub
//   - /[local]                        -> a local landing page (flat slug, best
//                                        for local search e.g. /it-support-oudenburg)
//
// To add a new local page, add an entry to the relevant hub's `locals` array.
// To add a new hub, add an entry to `services`.

export type LocalPage = {
  slug: string; // flat, root-level slug -> /<slug>
  title: string; // <title> + H1
  city: string;
  region: string;
  /** Short value proposition shown in the hero. */
  intro: string;
  /** Bullet points tailored to this location / audience. */
  highlights: string[];
  /** SEO meta description. */
  description: string;
};

export type ServiceHub = {
  slug: string; // -> /diensten/<slug>
  navTitle: string;
  title: string;
  audience: string;
  tagline: string;
  description: string;
  /** What's included in this service hub. */
  features: { title: string; body: string }[];
  locals: LocalPage[];
};

export const services: ServiceHub[] = [
  {
    slug: "it-beheer-support",
    navTitle: "IT-Beheer & Support",
    title: "IT-Beheer & Support",
    audience: "KMO's & praktijken",
    tagline: "Eén vast aanspreekpunt voor al je IT — proactief beheerd.",
    description:
      "Volledig beheer en support van je IT-omgeving voor KMO's en (medische) praktijken. Wij houden je systemen draaiend, beveiligd en up-to-date, zodat jij verder kan met ondernemen.",
    features: [
      {
        title: "Proactief monitoring & onderhoud",
        body: "We detecteren en lossen problemen op vóór ze je werking verstoren — geen verrassingen, geen stilstand.",
      },
      {
        title: "Helpdesk met een vast gezicht",
        body: "Eén lokaal aanspreekpunt dat jouw omgeving kent. Snel bereikbaar via telefoon, mail of op locatie.",
      },
      {
        title: "Beheer van werkplekken & servers",
        body: "Installatie, updates, beveiliging en beheer van laptops, desktops en servers — centraal opgevolgd.",
      },
      {
        title: "Vaste maandprijs",
        body: "Voorspelbare kosten zonder uurtje-factuurtje. Volledige ontzorging via het KMO-Pakket.",
      },
    ],
    locals: [
      {
        slug: "it-partner-jabbeke",
        title: "IT-partner Jabbeke",
        city: "Jabbeke",
        region: "West-Vlaanderen",
        intro:
          "Je IT-partner letterlijk om de hoek in Jabbeke. Lokaal, snel ter plaatse en met een vast aanspreekpunt voor jouw KMO of praktijk.",
        highlights: [
          "Lokaal aanwezig in Jabbeke en omstreken",
          "Snel ter plaatse bij problemen",
          "Vast aanspreekpunt dat je zaak kent",
          "Volledige ontzorging via het KMO-Pakket",
        ],
        description:
          "Lokale IT-partner in Jabbeke voor KMO's en praktijken. Proactief IT-beheer, support en cybersecurity met een vast aanspreekpunt om de hoek.",
      },
      {
        slug: "it-support-oudenburg",
        title: "IT-support Oudenburg",
        city: "Oudenburg",
        region: "West-Vlaanderen",
        intro:
          "Betrouwbare IT-support voor ondernemers en praktijken in Oudenburg. Eén lokaal aanspreekpunt voor beheer, support en beveiliging.",
        highlights: [
          "IT-support voor KMO's en praktijken in Oudenburg",
          "Proactief beheer en snelle interventie",
          "Lokaal, persoonlijk en bereikbaar",
          "Vaste maandprijs zonder verrassingen",
        ],
        description:
          "IT-support in Oudenburg voor KMO's en praktijken. Lokale IT-partner voor proactief beheer, support, Microsoft 365 en cybersecurity.",
      },
      {
        slug: "managed-it-west-vlaanderen",
        title: "Managed IT West-Vlaanderen",
        city: "West-Vlaanderen",
        region: "West-Vlaanderen",
        intro:
          "Managed IT-services voor KMO's in heel West-Vlaanderen. Wij nemen het volledige beheer van je IT-omgeving uit handen.",
        highlights: [
          "Volledig beheerde IT voor West-Vlaamse KMO's",
          "Proactieve monitoring & cybersecurity",
          "Microsoft 365, backup en Peppol inbegrepen",
          "Eén partner, één vaste maandprijs",
        ],
        description:
          "Managed IT in West-Vlaanderen voor KMO's. Volledig beheerde IT-omgeving met proactieve monitoring, support, backup en beveiliging.",
      },
      {
        slug: "it-beheer-brugge",
        title: "IT-beheer Brugge",
        city: "Brugge",
        region: "West-Vlaanderen",
        intro:
          "IT-beheer en support voor KMO's en professionele praktijken in en rond Brugge — proactief, lokaal en met een vast aanspreekpunt.",
        highlights: [
          "IT-beheer voor KMO's en praktijken in Brugge",
          "Proactief onderhoud en snelle support",
          "Microsoft 365, backup en beveiliging",
          "Volledige ontzorging via het KMO-Pakket",
        ],
        description:
          "IT-beheer in Brugge voor KMO's en praktijken. Lokale IT-partner voor proactief beheer, support, Microsoft 365 en cybersecurity.",
      },
      {
        slug: "it-beheer-oostende",
        title: "IT-beheer Oostende",
        city: "Oostende",
        region: "West-Vlaanderen",
        intro:
          "IT-beheer en support voor ondernemers en praktijken in Oostende. Eén lokale partner voor beheer, beveiliging en ondersteuning.",
        highlights: [
          "IT-beheer voor KMO's en praktijken in Oostende",
          "Proactieve monitoring en snelle interventie",
          "Microsoft 365, backup en cybersecurity",
          "Vaste maandprijs, geen verrassingen",
        ],
        description:
          "IT-beheer in Oostende voor KMO's en praktijken. Lokale IT-partner voor proactief beheer, support, Microsoft 365 en beveiliging.",
      },
    ],
  },
  {
    slug: "zakelijke-wifi-netwerken",
    navTitle: "Zakelijke WiFi & Netwerken",
    title: "Zakelijke WiFi & Netwerken",
    audience: "Horeca, B&B's & kantoren",
    tagline: "Stabiele, snelle en veilige netwerken die altijd werken.",
    description:
      "Professionele WiFi en netwerkinstallaties voor horeca, B&B's en kantoren. Van een betrouwbaar gastennetwerk tot een gescheiden kassanetwerk dat altijd online blijft, ook tijdens de drukste momenten.",
    features: [
      {
        title: "Naadloze WiFi-dekking",
        body: "Volledige dekking zonder dode zones — van terras tot tot in de verste kamer, met access points die naadloos overschakelen.",
      },
      {
        title: "Gescheiden gasten- & bedrijfsnetwerk",
        body: "Gasten online zonder risico voor je kassa, boekhouding of camerasysteem. Veilig opgesplitst per gebruik.",
      },
      {
        title: "Betrouwbaar tijdens piekmomenten",
        body: "Netwerken die overeind blijven wanneer het druk is — cruciaal voor horeca en seizoenspieken aan de kust.",
      },
      {
        title: "Beheer & opvolging op afstand",
        body: "We monitoren je netwerk op afstand en grijpen in voor jij merkt dat er iets mis is.",
      },
    ],
    locals: [
      {
        slug: "wifi-installatie-horeca-jabbeke",
        title: "WiFi-installatie horeca Jabbeke",
        city: "Jabbeke",
        region: "West-Vlaanderen",
        intro:
          "Professionele WiFi-installatie voor horeca in Jabbeke. Stabiel gastennetwerk en een gescheiden kassanetwerk dat altijd werkt.",
        highlights: [
          "WiFi op maat van horeca in Jabbeke",
          "Gescheiden gasten- en kassanetwerk",
          "Volledige dekking, ook op het terras",
          "Lokale installatie en opvolging",
        ],
        description:
          "WiFi-installatie voor horeca in Jabbeke. Stabiel gastennetwerk, gescheiden kassanetwerk en volledige dekking, lokaal geïnstalleerd en beheerd.",
      },
      {
        slug: "gastennetwerk-bnb-brugse-ommeland",
        title: "Gastennetwerk B&B Brugse Ommeland",
        city: "Brugse Ommeland",
        region: "West-Vlaanderen",
        intro:
          "Een betrouwbaar gastennetwerk voor B&B's en boutique hotels in het Brugse Ommeland. Tevreden gasten, veilig gescheiden van je eigen systemen.",
        highlights: [
          "Gastennetwerk voor B&B's in het Brugse Ommeland",
          "Veilig gescheiden van je privénetwerk",
          "Volledige dekking in alle kamers",
          "Eenvoudig voor gasten, veilig voor jou",
        ],
        description:
          "Gastennetwerk voor B&B's en boutique hotels in het Brugse Ommeland. Betrouwbare WiFi in alle kamers, veilig gescheiden van je eigen systemen.",
      },
      {
        slug: "stabiel-netwerk-kmo-oostende",
        title: "Stabiel netwerk KMO Oostende",
        city: "Oostende",
        region: "West-Vlaanderen",
        intro:
          "Een stabiel en veilig bedrijfsnetwerk voor KMO's en kantoren in Oostende. Betrouwbare bekabeling, WiFi en beheer onder één dak.",
        highlights: [
          "Bedrijfsnetwerken voor KMO's in Oostende",
          "Stabiele bekabeling en WiFi",
          "Veilig en gescheiden per toepassing",
          "Beheer en opvolging op afstand",
        ],
        description:
          "Stabiel bedrijfsnetwerk voor KMO's en kantoren in Oostende. Betrouwbare bekabeling, zakelijke WiFi en netwerkbeheer onder één dak.",
      },
    ],
  },
  {
    slug: "cloud-backup-beveiliging",
    navTitle: "Cloud, Backup & Beveiliging",
    title: "Cloud, Backup & Beveiliging",
    audience: "Elke onderneming",
    tagline: "Je data veilig, beschikbaar en beschermd — altijd.",
    description:
      "Microsoft 365, betrouwbare backups en cybersecurity voor je hele organisatie. We zorgen dat je data veilig in de cloud staat, dat alles automatisch wordt gebackupt en dat je beschermd bent tegen verlies, ransomware en menselijke fouten.",
    features: [
      {
        title: "Microsoft 365 beheer",
        body: "Volledig beheer van e-mail, Teams, SharePoint en gebruikers — correct ingesteld en beveiligd.",
      },
      {
        title: "Automatische backups",
        body: "Betrouwbare back-ups van je bestanden én je Microsoft 365-omgeving, automatisch en getest.",
      },
      {
        title: "Cybersecurity",
        body: "Bescherming tegen ransomware, phishing en datalekken met meerlaagse beveiliging en monitoring.",
      },
      {
        title: "Peppol & e-facturatie",
        body: "Klaar voor de verplichte e-facturatie via Peppol — correct opgezet en geïntegreerd.",
      },
    ],
    // No local sub-pages yet — local intent for cloud/security is low.
    locals: [],
  },
];

export function getHub(slug: string): ServiceHub | undefined {
  return services.find((s) => s.slug === slug);
}

export function allLocals(): (LocalPage & { hub: ServiceHub })[] {
  return services.flatMap((hub) => hub.locals.map((local) => ({ ...local, hub })));
}
