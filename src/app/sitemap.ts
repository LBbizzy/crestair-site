import type { MetadataRoute } from 'next';
import { blogPosts } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crestairaz.com';
  const now = new Date().toISOString();

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/financing`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/commercial`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const servicePages = [
    'ac-repair-tucson',
    'ac-installation-tucson',
    'heating-tucson',
    'hvac-maintenance-tucson',
    'indoor-air-quality-tucson',
    'duct-cleaning-tucson',
    'emergency-hvac-repair-tucson',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const commercialPages = [
    'ac-repair',
    'ac-installation',
    'maintenance',
    'emergency',
    'package-units',
  ].map((slug) => ({
    url: `${baseUrl}/commercial/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationPages = [
    'tucson-az',
    'oro-valley-az',
    'marana-az',
    'vail-az',
    'sahuarita-az',
    'green-valley-az',
    'catalina-foothills-az',
    'south-tucson-az',
    'drexel-heights-az',
    'flowing-wells-az',
  ].map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...commercialPages,
    ...locationPages,
    ...blogPages,
  ].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
