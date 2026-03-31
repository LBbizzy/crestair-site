import { Metadata } from 'next';
import { site } from './site';
import { SeoMeta } from './types';

export function buildMetadata(meta: SeoMeta, path: string): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${site.url}${path}`,
      siteName: site.name,
      type: 'website',
    },
  };
}
