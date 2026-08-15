import { BlogPost, FAQ, ServiceContent } from '@/lib/types';
import { site } from '@/lib/site';

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

const websiteId = `${site.url}#website`;
const businessId = `${site.url}#hvacbusiness`;

function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

function mapFaqsToEntities(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));
}

function buildSameAs() {
  const candidates = [
    site.googleBusinessProfileUrl,
    site.facebookUrl,
    site.instagramUrl,
    site.linkedinUrl,
    site.youtubeUrl,
    site.twitterUrl,
    site.tiktokUrl,
  ].filter(Boolean);

  return candidates.length ? candidates : undefined;
}

const canonicalTelephone = '+1-520-751-8888';

const offeredServices = [
  'AC Repair',
  'Air Conditioning Installation',
  'Heating Repair',
  'Heating Installation',
  'HVAC Maintenance',
  'Duct Cleaning',
  'Indoor Air Quality',
  'Heat Pump Installation and Service',
  'Thermostat Installation',
  'Ductless Mini-Split Service',
  'Emergency HVAC Repair',
  'Light Commercial HVAC',
];

const businessCredentials = [
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'Arizona ROC License',
    identifier: site.rocNumber,
    recognizedBy: {
      '@type': 'Organization',
      name: 'Arizona Registrar of Contractors',
    },
  },
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'NATE Certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'North American Technician Excellence',
    },
  },
  {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'certification',
    name: 'EPA 608 Certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'U.S. Environmental Protection Agency',
    },
  },
];

const businessDescription =
  'Marine Corps veteran-owned HVAC company serving Tucson and Southern Arizona since 2016. NATE-certified and EPA-certified technicians deliver same-day AC repair, air conditioning installation, heating service, HVAC maintenance, duct cleaning, indoor air quality, heat pump, thermostat, and mini-split service for homes and light commercial properties. Licensed, insured, background-checked. Transparent pricing. Arizona ROC #343786. 24/7 emergency service available.';

export function buildGlobalSchemas() {
  const sameAs = buildSameAs();

  const business = {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness'],
    '@id': businessId,
    name: site.name,
    alternateName: 'Crest Air LLC',
    legalName: 'Crest Air LLC',
    url: site.url,
    telephone: canonicalTelephone,
    email: site.email,
    description: businessDescription,
    image: site.imagePaths.map(absoluteUrl),
    logo: absoluteUrl(site.logoPath),
    slogan: "Licensed. Insured. Veteran-owned. Tucson's HVAC team.",
    foundingDate: '2016',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: ['Cash', 'Credit Card', 'Check', 'Financing'],
    knowsLanguage: ['en'],
    award: ['Marine Corps Veteran-Owned Business'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.aggregateRating.ratingValue,
      reviewCount: site.aggregateRating.reviewCount,
      bestRating: site.aggregateRating.bestRating,
    },
    address: {
      '@type': 'PostalAddress',
      ...site.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: 'https://maps.google.com/?cid=8101179222525854489',
    areaServed: site.serviceAreas.map((name) => ({
      '@type': 'City',
      name,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: '50000',
    },
    makesOffer: offeredServices.map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
    hasCredential: businessCredentials,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: canonicalTelephone,
        contactType: 'customer service',
        email: site.email,
        areaServed: 'US-AZ',
        availableLanguage: ['en'],
      },
      {
        '@type': 'ContactPoint',
        telephone: canonicalTelephone,
        contactType: 'emergency',
        hoursAvailable: 'Mo-Su 00:00-23:59',
      },
    ],
    openingHoursSpecification: site.hours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${hours.dayOfWeek}`,
      opens: hours.opens,
      closes: hours.closes,
    })),
    ...(sameAs ? { sameAs } : {}),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { '@id': businessId },
  };

  return [business, website];
}

export function buildServiceSchema(service: ServiceContent) {
  const url = absoluteUrl(`/services/${service.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.meta.description,
    url,
    areaServed: service.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area.label,
      url: absoluteUrl(area.href),
    })),
    provider: { '@id': businessId },
    brand: { '@id': businessId },
    // No aggregateRating here, deliberately.
    //
    // This used to stamp the business-wide 4.9/240 onto every single Service
    // node. Google's review-snippet policy requires that a rating on an item
    // be a rating OF that item, backed by reviews of it — there are no Review
    // objects for "AC Repair in Tucson" as a service, and the same ten pages
    // all claimed the identical number. That is a manual-action risk for
    // zero upside. The genuine business rating stays on the LocalBusiness
    // node, where it belongs and where Google actually reads it.
    termsOfService: absoluteUrl('/contact'),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url,
    },
  };
}

// Ship 494 — common Tucson HVAC questions for FAQPage rich result on the homepage.
// These target high-intent featured snippet queries that ChatGPT, Perplexity,
// Google AI Overviews, and Bing surface for "Tucson HVAC" intent.
export const homepageFaqs: FAQ[] = [
  {
    question: 'How much does AC repair cost in Tucson?',
    answer:
      'Most Tucson AC repairs at Crest Air run $129–$450 depending on the part (capacitor, contactor, fan motor, refrigerant top-off). A flat $89 diagnostic fee is waived when you approve the repair. Major repairs like compressor replacement run higher. We give a written quote before any work starts.',
  },
  {
    question: 'How fast can Crest Air get to my house in Tucson?',
    answer:
      "We dispatch same-day across Tucson, Oro Valley, Marana, Vail, Catalina Foothills, Green Valley, and Sahuarita. Most customers get a technician within 2–4 hours. Call (520) 751-8888 for true 24/7 emergency service when your AC dies in summer.",
  },
  {
    question: 'When should I get an AC tune-up in Tucson?',
    answer:
      "Spring (March–May) before peak summer load is the best time for an AC tune-up in Tucson. A $89 tune-up checks refrigerant, electrical connections, capacitor health, blower wheel, and condenser coil — catching the failures that turn into $400 August emergency calls.",
  },
  {
    question: 'How much does a new AC installation cost in Tucson?',
    answer:
      'A new central AC install in Tucson typically runs $5,500–$13,000 depending on tonnage (2.5–5 ton), SEER2 rating (14.3–20+), and whether you need new ductwork. Heat pump installs start around $7,500. Crest Air offers financing — same-day approval for qualified customers.',
  },
  {
    question: 'Is Crest Air licensed and insured?',
    answer:
      'Yes. Crest Air is fully licensed (Arizona ROC #343786), insured, and bonded. Our technicians are NATE-certified and EPA 608 certified, background-checked, and uniformed. We are a Marine Corps veteran-owned business serving Tucson since 2016.',
  },
  {
    question: 'Do you handle commercial HVAC in Tucson?',
    answer:
      "Yes — Crest Air services light commercial HVAC including rooftop package units, split systems, and maintenance contracts for offices, retail, restaurants, and small medical facilities. We handle 2-ton through 20-ton commercial systems across Tucson and Southern Arizona.",
  },
  {
    question: 'Do you service heat pumps and mini-splits?',
    answer:
      'Yes. Crest Air installs and repairs heat pumps and ductless mini-splits across Tucson. Mini-splits are popular for casitas, additions, garage conversions, and zoning single rooms in older Tucson homes without ductwork.',
  },
  {
    question: 'What hours does Crest Air operate?',
    answer:
      'Monday–Friday 8 AM–6 PM, Saturday 8 AM–5 PM. 24/7 true emergency service available at (520) 751-8888 — no answering services, real Crest Air technicians on call when your AC dies after-hours.',
  },
];

export function buildHomepageFaqSchema() {
  return buildFaqSchema(homepageFaqs);
}

export function buildFaqSchema(faqs: FAQ[]) {
  if (!faqs.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mapFaqsToEntities(faqs),
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    headline: post.title,
    description: post.meta.description,
    url,
    mainEntityOfPage: `${url}`,
    publisher: { '@id': businessId },
    author: { '@id': businessId },
    ...(post.image ? { image: [absoluteUrl(post.image.src)] } : {}),
    articleSection: post.serviceLinks.map((link) => link.label),
    about: post.serviceLinks.map((link) => ({
      '@type': 'Service',
      name: link.label,
      url: absoluteUrl(link.href),
      provider: { '@id': businessId },
    })),
  };
}

export function serializeJsonLd(data: JsonLdValue) {
  return JSON.stringify(data, null, 0).replace(/</g, '\\u003c');
}
