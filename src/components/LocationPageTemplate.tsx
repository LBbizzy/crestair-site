import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { LocationContent } from '@/lib/types';
import { site } from '@/lib/site';

type LocationPageTemplateProps = {
  location: LocationContent;
};

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const sourcePage = `/locations/${location.slug}`;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow="Service Area"
        title={location.title}
        body={location.intro}
        primaryLabel={location.cta.primaryLabel}
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Local Coverage</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Location-first HVAC routing with stronger conversion flow</h2>
          <p className="mt-4 text-slate-700">This reusable location template keeps the same stronger CTA density, proof treatment, and service-routing structure used in the upgraded Tucson page.</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first local help</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Call now for local HVAC service routing, repair help, and installation planning.</p>
        </div>
      </section>

      <ServiceConversionSection
        sourcePage={sourcePage}
        serviceType="general-hvac"
        location={location.slug}
        pageType="location"
        title={location.title}
        callCtaId={`${location.slug}-call`}
        formCtaId={`${location.slug}-form`}
        contextLabel="location page"
      />

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Services available in this area</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">{location.services.map((service) => <li key={service.href}><Link className="underline" href={service.href}>{service.label}</Link></li>)}</ul>
      </section>

      <CTASection
        heading="Need local HVAC help right now?"
        body="Move directly into the most relevant service path for repair, installation, or general local support."
        primaryLabel={location.cta.primaryLabel}
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why local homeowners trust Crest Air</h2>
          <ul className="mt-5 space-y-3 text-slate-700">{location.whyChooseUs.map((item) => <li key={item}>• {item}</li>)}</ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Fast local response with clearer next steps.”</p>
            <p className="mt-2 text-sm text-slate-600">Reusable testimonial-style proof block for location pages.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Helpful routing into repair and installation options.”</p>
            <p className="mt-2 text-sm text-slate-600">Second local credibility block to keep consistency across service areas.</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Local HVAC challenges</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{location.localChallenges.map((item) => <li key={item}>• {item}</li>)}</ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Nearby areas</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{location.nearbyAreas.length ? location.nearbyAreas.map((item) => <li key={item.href}><Link className="underline" href={item.href}>{item.label}</Link></li>) : <li>Additional area pages can be generated from the same schema.</li>}</ul>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-[#041B34] p-8 text-white shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Local Trust Layer</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">Need help before the local issue gets worse?</h2>
          <p className="mt-3 text-slate-200">This trust-and-urgency section increases conversion pressure on every location page without changing the template system.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-2xl font-bold text-[#F4911D]">★★★★★</p>
          <p className="mt-2 text-slate-200">Review-style proof block positioned near the next local CTA.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="font-semibold">Experience + insured messaging</p>
          <p className="mt-2 text-slate-200">Structured trust support for local homeowners evaluating urgency and next-step confidence.</p>
        </div>
      </section>

      <CTASection
        heading="Need local HVAC service right now?"
        body="Use the service links above or call Crest Air directly so the problem gets routed into the right repair or installation path faster."
        primaryLabel={location.cta.primaryLabel}
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
      />

      <FAQSection faqs={location.faqs} />

      <CTASection {...location.cta} />
    </div>
  );
}
