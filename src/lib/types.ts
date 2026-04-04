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
  primaryId?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryId?: string;
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
  problemHeadline: string;
  problemDescription: string;
  intro: string;
  overview: string[];
  signs: string[];
  whatsIncluded: string[];
  benefits: string[];
  process: string[];
  testimonial: { quote: string; name: string; area: string };
  trustLine: string;
  financingNote: string;
  maintenanceNote: string;
  financingLink: { href: string; label: string };
  maintenanceLink: { href: string; label: string };
  relatedServices: { href: string; label: string }[];
  serviceAreas: { href: string; label: string }[];
  faqs: FAQ[];
  cta: CTA;
};

export type LocationContent = {
  slug: string;
  city: string;
  title: string;
  meta: SeoMeta;
  intro: string;
  services: { href: string; label: string }[];
  whyChooseUs: string[];
  localChallenges: string[];
  testimonial: { quote: string; name: string; neighborhood: string };
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
  image?: ImageAsset;
  sections: { heading: string; body: string }[];
  serviceLinks: { href: string; label: string }[];
  locationLink: { href: string; label: string };
  faqs: FAQ[];
};

export type ImageAsset = {
  src: string;
  alt: string;
  title: string;
  description: string;
  page: string;
  section: string;
  href?: string;
};
