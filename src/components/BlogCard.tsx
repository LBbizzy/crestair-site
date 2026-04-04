import Link from 'next/link';
import { SiteImage } from '@/components/SiteImage';
import { BlogPost } from '@/lib/types';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#041B34] hover:shadow-md">
      {post.image ? (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <SiteImage
            asset={post.image}
            width={640}
            height={360}
            className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Link>
      ) : null}
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">{post.query}</p>
        <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-slate-950">{post.title}</h3>
        <p className="mt-3 text-slate-700">{post.intro}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
          {post.serviceLinks.map((service) => (
            <Link key={`${post.slug}-${service.label}`} href={service.href} className="underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">{service.label}</Link>
          ))}
          <Link href={post.locationLink.href} className="underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">{post.locationLink.label}</Link>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#041B34] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B3158]"
        >
          Read Article
          <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
