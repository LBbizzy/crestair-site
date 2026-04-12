import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { JsonLd } from '@/components/JsonLd';
import { SiteImage } from '@/components/SiteImage';
import { buildBlogPostingSchema, buildFaqSchema } from '@/lib/schema';
import { BlogPost } from '@/lib/types';
import { site } from '@/lib/site';

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const primaryService = post.serviceLinks[0];
  const serviceButtons = post.serviceLinks.length ? post.serviceLinks : [post.locationLink];
  const blogSchema = buildBlogPostingSchema(post);
  const faqSchema = buildFaqSchema(post.faqs ?? []);

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-10">
      <JsonLd data={blogSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <header className="overflow-hidden rounded-3xl bg-[#041B34] text-white shadow-xl">
        {post.image ? (
          <div className="relative h-64 md:h-80">
            <SiteImage asset={post.image} width={960} height={400} className="h-full w-full object-cover" sizes="(min-width: 768px) 60vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041B34] via-[#041B34]/40 to-transparent" />
          </div>
        ) : null}
        <div className="px-8 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">{post.query}</p>
        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-200">{post.intro}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryService?.href ?? post.locationLink.href}
            className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]"
          >
            Explore {primaryService?.label ?? post.locationLink.label}
          </Link>
          <CallTrackedLink
            className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
            sourcePage={`/blog/${post.slug}`}
            serviceType="blog-reader"
            location="tucson-az"
            pageType="blog"
            dataCtaId={`${post.slug}-call`}
          >
            Call {site.phone}
          </CallTrackedLink>
        </div>
        </div>
      </header>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Start with the right next step</h2>
        <p className="mt-4 text-slate-700">This article is designed to route high-intent readers into the most relevant service page and the Tucson service-area hub without breaking the content flow.</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-[#041B34]">
          {serviceButtons.map((service) => (
            <Link key={`${post.slug}-${service.href}`} className="underline transition hover:text-[#F4911D]" href={service.href}>
              {service.label}
            </Link>
          ))}
          <Link className="underline transition hover:text-[#F4911D]" href={post.locationLink.href}>{post.locationLink.label}</Link>
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
                {serviceButtons.map((service) => (
                  <Link key={`${post.slug}-mid-${service.href}`} className="underline transition hover:text-[#F4911D]" href={service.href}>
                    {service.label}
                  </Link>
                ))}
                <Link className="underline transition hover:text-[#F4911D]" href={post.locationLink.href}>{post.locationLink.label}</Link>
              </div>
            </div>
          ) : null}
        </section>
      ))}

      {post.faqs?.length ? (
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {post.faqs.map((faq) => (
              <article key={`${post.slug}-${faq.question}`} className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#041B34]">{faq.question}</h3>
                <p className="mt-3 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <CTASection
        heading="Need help with this issue in Tucson?"
        body="Use the related service page or the Tucson location hub to move directly into the next step that fits your system best."
        primaryLabel={primaryService?.label ?? 'Book Service'}
        primaryHref={primaryService?.href ?? '/contact'}
        secondaryLabel={post.locationLink.label}
        secondaryHref={post.locationLink.href}
      />
    </article>
  );
}
