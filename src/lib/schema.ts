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
  ].filter(Boolean);

  return candidates.length ? candidates : undefined;
}

export function buildGlobalSchemas() {
  const sameAs = buildSameAs();

  const business = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    image: site.imagePaths.map(absoluteUrl),
    logo: absoluteUrl(site.logoPath),
    priceRange: '$$',
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
    areaServed: site.serviceAreas.map((name) => ({
      '@type': 'City',
      name,
    })),
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
    mainEntityOfPage: url,
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
