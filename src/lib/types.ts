export type SeoMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export type CTA = {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  location: string;
  meta: SeoMeta;
  intro: string;
  overview: string[];
  signs: string[];
  benefits: string[];
  process: string[];
  relatedServices: { href: string; label: string }[];
  serviceAreas: { href: string; label: string }[];
  faqs: FAQ[];
  cta: CTA;
};

export type LocationContent = {
  slug: string;
  title: string;
  meta: SeoMeta;
  intro: string;
  services: { href: string; label: string }[];
  whyChooseUs: string[];
  localChallenges: string[];
  nearbyAreas: { href: string; label: string }[];
  faqs: FAQ[];
  cta: CTA;
};

export type BlogPost = {
  slug: string;
  title: string;
  query: string;
  meta: SeoMeta;
  intro: string;
  sections: { heading: string; body: string }[];
  serviceLink: { href: string; label: string };
  locationLink: { href: string; label: string };
};
