import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { BlogPost } from '@/lib/types';
import { site } from '@/lib/site';

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-10">
      <header className="rounded-3xl bg-[#041B34] px-8 py-14 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">{post.query}</p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-200">{post.intro}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href={post.serviceLink.href} className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]">Explore {post.serviceLink.label}</Link>
          <CallTrackedLink className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white" sourcePage={`/blog/${post.slug}`} serviceType="blog-reader" location="tucson-az" pageType="blog" dataCtaId={`${post.slug}-call`}>
            Call {site.phone}
          </CallTrackedLink>
        </div>
      </header>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Start with the right next step</h2>
        <p className="mt-4 text-slate-700">This article is designed to route high-intent readers into the most relevant service page and the Tucson service-area hub without breaking the content flow.</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-[#041B34]">
          <Link className="underline" href={post.serviceLink.href}>{post.serviceLink.label}</Link>
          <Link className="underline" href={post.locationLink.href}>{post.locationLink.label}</Link>
        </div>
      </section>

      {post.sections.map((section, index) => (
        <section key={section.heading} id={post.slug + '-' + index} className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">{section.heading}</h2>
          <p className="mt-4 text-slate-700">{section.body}</p>
          {index === 1 ? (
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Mid-article CTA</p>
              <p className="mt-2 text-slate-700">If this issue sounds familiar in your Tucson home, move directly into the related service path before the problem becomes more expensive.</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-[#041B34]">
                <Link className="underline" href={post.serviceLink.href}>{post.serviceLink.label}</Link>
                <Link className="underline" href={post.locationLink.href}>{post.locationLink.label}</Link>
              </div>
            </div>
          ) : null}
        </section>
      ))}

      <CTASection
        heading="Need help with this issue in Tucson?"
        body="Use the related service page or the Tucson location hub to move directly into the next step that fits your system best."
        primaryLabel={post.serviceLink.label}
        primaryHref={post.serviceLink.href}
        secondaryLabel={post.locationLink.label}
        secondaryHref={post.locationLink.href}
      />
    </article>
  );
}
