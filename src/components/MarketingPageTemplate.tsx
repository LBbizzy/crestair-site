import Link from 'next/link';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { site } from '@/lib/site';

type LinkItem = {
  href: string;
  label: string;
};

type MarketingPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  trustHeading: string;
  trustPoints: string[];
  serviceLinks: LinkItem[];
  locationLinks: LinkItem[];
  contactHref?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  sourcePage: string;
  serviceType: string;
  pageType: string;
  callCtaId: string;
  formCtaId: string;
};

export function MarketingPageTemplate({
  eyebrow,
  title,
  description,
  trustHeading,
  trustPoints,
  serviceLinks,
  locationLinks,
  contactHref = '/contact',
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  sourcePage,
  serviceType,
  pageType,
  callCtaId,
  formCtaId,
}: MarketingPageTemplateProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-16 md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">{eyebrow}</p>
            <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]">
                {primaryLabel}
              </Link>
              <Link href={secondaryHref} className="inline-flex rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                {secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="flex min-h-[320px] flex-col justify-end bg-[linear-gradient(135deg,#041B34,#0B3158)] p-8 text-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Direct Contact</p>
            <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-white">{site.phone}</p>
            <p className="mt-3 max-w-sm text-base leading-7">Talk to Crest Air now if you need faster HVAC guidance, a service quote, or the right next step for your property.</p>
            <CallTrackedLink className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-3 font-semibold text-[#041B34] transition hover:bg-slate-100" sourcePage={sourcePage} serviceType={serviceType} location="tucson-az" pageType={pageType} dataCtaId={callCtaId}>
              Call Now
            </CallTrackedLink>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">{trustHeading}</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {trustPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Why act now</p>
          <p className="mt-3 text-slate-200">Get phone-first support, a cleaner service path, and a form submission route that sends leads server-side.</p>
          <div className="mt-6 grid gap-3">
            <article className="rounded-2xl bg-white/10 p-4">
              <p className="text-2xl font-bold text-[#F4911D]">★★★★★</p>
              <p className="mt-2 text-sm text-slate-200">Trust-focused proof block positioned next to the main CTA.</p>
            </article>
            <article className="rounded-2xl bg-white/10 p-4">
              <p className="font-semibold">Local Tucson coverage</p>
              <p className="mt-2 text-sm text-slate-200">Structured routing into service pages, location pages, and direct contact.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:col-span-2">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Explore core HVAC services</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 md:grid-cols-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link className="font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Need contact info?</h2>
          <p className="mt-4 text-slate-700">Use the direct contact page for service requests, general questions, financing conversations, or commercial HVAC coordination.</p>
          <Link href={contactHref} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">
            Visit Contact Page
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Service areas</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {locationLinks.map((link) => (
              <li key={link.href}>
                <Link className="font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Quick next step</p>
          <p className="mt-3 text-slate-700">Choose a location, compare at least two services, or jump straight to contact to keep the conversion path obvious on every top-level page.</p>
        </div>
      </section>

      <ServiceConversionSection
        sourcePage={sourcePage}
        serviceType={serviceType}
        location="tucson-az"
        pageType={pageType}
        title={title}
        callCtaId={callCtaId}
        formCtaId={formCtaId}
        contextLabel="marketing page"
      />
    </div>
  );
}
