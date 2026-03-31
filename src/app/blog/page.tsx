import Link from 'next/link';
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
        body="Each article routes readers into a service page and a location page so the blog supports crawl depth, local relevance, and conversion intent."
        primaryLabel="See Tucson HVAC"
        primaryHref="/locations/tucson-az"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">All Posts</h2>
        <ul className="mt-6 space-y-3 text-slate-700">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link className="underline" href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
