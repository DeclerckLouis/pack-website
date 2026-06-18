// Sector ("Voor wie?") hubs — restored from the live Odoo site, which segments
// the audience rather than only the services. The recurring-revenue engine is
// `vrije-beroepen-praktijken`; horeca/B&B is the project-based network work;
// verenigingen/VZW rounds out the local long tail.
//
// Same generator shape as services.ts:
//   - /sectoren                 -> overview of all sectors
//   - /sectoren/[sector]        -> a sector hub
//
// A sector links to the service hubs (and any relevant local pages) that serve
// it, so the audience- and service-led structures cross-link instead of
// competing.

export type Sector = {
  slug: string; // -> /sectoren/<slug>
  navTitle: string;
  title: string;
  icon: string; // Lucide icon name
  tagline: string;
  description: string;
  /** The pains this audience recognises — written in their words. */
  pains: { title: string; body: string; icon: string }[];
  /** How Packetflow answers each pain. */
  approach: string[];
  /** Service hub slugs most relevant to this sector. */
  serviceSlugs: string[];
  /** Local page slugs to surface for this sector (optional). */
  localSlugs: string[];
};

export const sectors: Sector[] = [
  {
    slug: "vrije-beroepen-praktijken",
    navTitle: "Vrije beroepen & praktijken",
    title: "IT voor advocaten, architecten & makelaars",
    icon: "scale",
    tagline:
      "Discrete, betrouwbare IT voor kleine kantoren waar vertrouwen en dossiers centraal staan.",
    description:
      "Een advocatenkantoor, architectenbureau of makelaarskantoor draait op vertrouwen en op dossiers die nooit verloren mogen gaan. Ik zorg dat uw Microsoft 365, uw backup en uw beveiliging kloppen — discreet, persoonlijk en zonder complexe contracten.",
    pains: [
      {
        icon: "lock",
        title: "Vertrouwelijke dossiers",
        body: "Cliëntgegevens en dossiers moeten privé blijven — ook nu AI in elk programma sluipt. Ik leg vast wie en wat erbij kan.",
      },
      {
        icon: "database",
        title: "Niets mag verloren gaan",
        body: "Een verloren dossier is een verloren zaak. Uw bestanden worden automatisch, versleuteld en getest gebackupt.",
      },
      {
        icon: "user-check",
        title: "Geen IT-afdeling",
        body: "U heeft geen tijd om 'de IT-er' te bellen die nooit opneemt. Eén vast aanspreekpunt dat uw kantoor kent.",
      },
    ],
    approach: [
      "Microsoft 365 correct ingericht: e-mail, agenda, dossiers en licenties.",
      "Versleutelde back-up van uw dossiers — getest, niet gehoopt.",
      "Peppol-e-facturatie klaar en gekoppeld aan uw boekhouding.",
      "AI en Copilot veilig ingericht, met heldere datagrenzen.",
    ],
    serviceSlugs: ["it-beheer-support", "cloud-backup-beveiliging"],
    localSlugs: ["it-partner-jabbeke", "it-support-oudenburg", "managed-it-west-vlaanderen"],
  },
  {
    slug: "horeca-bnb",
    navTitle: "Horeca & B&B's",
    title: "IT & WiFi voor horeca en B&B's",
    icon: "utensils",
    tagline:
      "Een kassa die niet uitvalt en gasten-WiFi die werkt — ook op het drukste moment.",
    description:
      "In de horeca en in een B&B telt elke minuut uptime. Een netwerk dat uitvalt tijdens de service of een gast die klaagt over trage WiFi kost u direct geld en reviews. Ik zorg voor stabiele, veilige netwerken die de piek aankunnen.",
    pains: [
      {
        icon: "activity",
        title: "Uitval op het drukste moment",
        body: "Een kassa of bestelsysteem dat plat ligt tijdens de service is onbetaalbaar. Uw netwerk blijft overeind als het druk is.",
      },
      {
        icon: "wifi",
        title: "Klagende gasten",
        body: "'De WiFi doet het niet' is een klassieke review-killer. Volledige dekking tot in de verste kamer en op het terras.",
      },
      {
        icon: "split",
        title: "Alles op één netwerk",
        body: "Gasten, kassa en camera's door elkaar is een risico. Ik scheid ze netjes, veilig per gebruik.",
      },
    ],
    approach: [
      "Gescheiden gasten- en kassanetwerk, veilig opgesplitst.",
      "Naadloze WiFi-dekking, ook buiten en in elke kamer.",
      "Netwerk dat seizoenspieken en volle zalen aankan.",
      "Beheer op afstand — ik grijp in vóór u het merkt.",
    ],
    serviceSlugs: ["zakelijke-wifi-netwerken", "cloud-backup-beveiliging"],
    localSlugs: ["wifi-installatie-horeca-jabbeke", "gastennetwerk-bnb-brugse-ommeland"],
  },
  {
    slug: "verenigingen-vzw",
    navTitle: "Verenigingen & VZW's",
    title: "IT voor verenigingen en VZW's",
    icon: "users",
    tagline:
      "Betaalbare, eenvoudige IT voor wie het met vrijwilligers en een klein budget moet doen.",
    description:
      "Een vereniging of VZW draait op vrijwilligers, niet op een IT-budget. Toch heeft u e-mail, gedeelde bestanden en een ledenadministratie nodig die werken — en die overdraagbaar zijn als het bestuur wisselt. Ik help u met eenvoudige, betaalbare oplossingen.",
    pains: [
      {
        icon: "wallet",
        title: "Klein budget",
        body: "Geen ruimte voor dure contracten. Ik kies betaalbare oplossingen en reken alleen het werk aan.",
      },
      {
        icon: "refresh-cw",
        title: "Wisselend bestuur",
        body: "Als de penningmeester of secretaris wisselt, mag de toegang niet meeverdwijnen. Alles netjes overdraagbaar.",
      },
      {
        icon: "folder",
        title: "Gedeelde bestanden",
        body: "Verslagen, ledenlijsten en foto's centraal en veilig — bereikbaar voor wie het nodig heeft, niet voor de rest.",
      },
    ],
    approach: [
      "Microsoft 365 (vaak met non-profitkorting) correct opgezet.",
      "Gedeelde mailboxen en bestanden die een bestuurswissel overleven.",
      "Eenvoudige back-up zodat niets verloren gaat.",
      "Uitleg in mensentaal — ook voor niet-technische vrijwilligers.",
    ],
    serviceSlugs: ["cloud-backup-beveiliging", "it-beheer-support"],
    localSlugs: [],
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
