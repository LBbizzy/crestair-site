import Link from 'next/link';
import { BlogPost } from '@/lib/types';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">{post.query}</p>
      <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold text-slate-950">{post.title}</h3>
      <p className="mt-3 text-slate-700">{post.intro}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
        <Link href={post.serviceLink.href} className="underline">{post.serviceLink.label}</Link>
        <Link href={post.locationLink.href} className="underline">{post.locationLink.label}</Link>
      </div>
      <Link href={`/blog#${post.slug}`} className="mt-6 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">Read article outline</Link>
    </article>
  );
}
