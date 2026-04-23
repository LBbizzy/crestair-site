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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.aggregateRating.ratingValue,
      reviewCount: site.aggregateRating.reviewCount,
      bestRating: site.aggregateRating.bestRating,
    },
    termsOfService: absoluteUrl('/contact'),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url,
    },
  };
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
