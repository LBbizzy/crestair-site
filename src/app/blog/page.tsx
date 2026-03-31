import { BlogCard } from '@/components/BlogCard';
import { HeroSection } from '@/components/HeroSection';
import { blogPosts } from '@/content/blog';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'HVAC Blog Tucson',
    description: 'SEO-ready HVAC blog structure with internal links into service and location pages.',
    keywords: ['hvac blog tucson', 'ac repair tips tucson', 'crest air blog'],
  },
  '/blog',
);

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow="Crest Air Blog"
        title="Structured HVAC content built for service and location SEO"
        body="Each article outline routes readers into a service page and a location page so the blog supports crawl depth and conversion intent."
        primaryLabel="See Tucson HVAC"
        primaryHref="/locations/tucson-az"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
