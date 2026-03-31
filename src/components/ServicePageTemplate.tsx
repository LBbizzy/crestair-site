import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { ServiceContent } from '@/lib/types';
import { site } from '@/lib/site';

type ServicePageTemplateProps = {
  service: ServiceContent;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow={service.location}
        title={service.title}
        body={`Fast diagnostics, reliable service guidance, and clearer next steps for ${service.location} property owners who need comfort restored quickly.`}
        primaryLabel={service.cta.primaryLabel}
        primaryHref={service.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Immediate Response</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Service built around urgent HVAC decision points</h2>
          <p className="mt-4 text-slate-700">This reusable service template keeps the heavier conversion style from the current live pass: stronger hero weight, clearer urgency, richer trust, and more routing into related pages.</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first option</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Call now for diagnostics, service planning, and fast scheduling help.</p>
          <a href={`tel:${site.phone}`} className="mt-5 inline-flex rounded-full bg-[#F4911D] px-5 py-3 font-semibold text-white transition hover:bg-[#D97F16]">Call Now</a>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Overview</h2>
        {service.overview.map((paragraph) => <p key={paragraph} className="text-slate-700">{paragraph}</p>)}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Signs you need this service</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.signs.map((item) => <li key={item}>• {item}</li>)}</ul>
          <Link href={service.serviceAreas[0]?.href || '/'} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">See local service coverage</Link>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Benefits</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.benefits.map((item) => <li key={item}>• {item}</li>)}</ul>
          {service.relatedServices[0] ? (
            <Link href={service.relatedServices[0].href} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">
              Explore related service
            </Link>
          ) : null}
        </div>
      </section>

      <CTASection
        heading={service.cta.heading}
        body={service.cta.body}
        primaryLabel={service.cta.primaryLabel}
        primaryHref={service.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
      />

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Process</h2>
        <ol className="mt-4 space-y-3 text-slate-700">{service.process.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}</ol>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why customers trust Crest Air</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>Diagnostic-first service process</li>
            <li>Clear next-step guidance</li>
            <li>Local routing into service and location pages</li>
            <li>Stronger conversion treatment without builder lock-in</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Clear diagnosis and helpful recommendations.”</p>
            <p className="mt-2 text-sm text-slate-600">Reusable trust block for service-page credibility.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Fast communication and stronger next steps.”</p>
            <p className="mt-2 text-sm text-slate-600">Second proof layer that can stay consistent across future service pages.</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Related Services</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.relatedServices.map((link) => <li key={link.href}><Link className="underline" href={link.href}>{link.label}</Link></li>)}</ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Areas</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.serviceAreas.map((link) => <li key={link.href}><Link className="underline" href={link.href}>{link.label}</Link></li>)}</ul>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />

      <CTASection {...service.cta} />
    </div>
  );
}
