import { Metadata } from 'next';
import { site } from './site';
import { SeoMeta } from './types';

export function buildMetadata(meta: SeoMeta, path: string): Metadata {
  const canonicalUrl = new URL(path, site.url).toString();
  const imageUrl = new URL(meta.image ?? site.defaultSocialImagePath, site.url).toString();

  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      siteName: site.name,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [imageUrl],
    },
  };
}
