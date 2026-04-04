import { Metadata } from 'next';
import { site } from './site';
import { SeoMeta } from './types';

export function buildMetadata(meta: SeoMeta, path: string): Metadata {
  const canonicalUrl = new URL(path, site.url).toString();

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: site.name,
      type: 'website',
    },
  };
}
