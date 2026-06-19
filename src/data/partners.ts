// Partner / certification trust signals shown on the site ("Trots om te werken
// met …"). Logos live in public/images/partners/ — drop the files there with
// the filenames below and they appear; until then a clean text badge shows, so
// nothing looks broken. Add/adjust entries freely.
export type Partner = {
  name: string;
  /** Logo in public/images/partners/ (svg/png/webp). */
  logo: string;
  alt: string;
  url?: string;
};

export const partnersIntro =
  "Trots om te werken met de oplossingen van toonaangevende partners — bewezen technologie, professioneel voor u ingericht.";

export const partners: Partner[] = [
  {
    name: "Microsoft Cloud Partner",
    logo: "/images/partners/microsoft.svg",
    alt: "Microsoft Cloud Partner",
    url: "https://www.microsoft.com/",
  },
  {
    name: "Pax8",
    logo: "/images/partners/pax8.svg",
    alt: "Pax8 partner",
    url: "https://www.pax8.com/",
  },
];
