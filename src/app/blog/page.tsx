import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { BlogCard } from '@/components/BlogCard';
import { HeroSection } from '@/components/HeroSection';
import { blogPosts } from '@/content/blog';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'HVAC Tips & Guides for Tucson Homeowners | Crest Air Blog',
    description: 'Expert HVAC tips, maintenance guides, and cost-saving advice for Tucson homeowners from the Crest Air team.',
    keywords: ['hvac blog tucson', 'ac repair tips tucson', 'crest air blog', 'tucson cooling tips'],
  },
  '/blog',
);

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10">
      <AnimatedPage>
      <HeroSection
        eyebrow="Crest Air Blog"
        title="HVAC Tips & Guides for Tucson Homeowners"
        body="Get expert advice on AC repair, maintenance, energy savings, and when to replace your system — straight from the Crest Air team serving Tucson and surrounding areas."
        primaryLabel="Browse Tucson HVAC Services"
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
              <Link className="underline transition hover:text-[#F4911D]" href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      </AnimatedPage>
    </div>
  );
}
