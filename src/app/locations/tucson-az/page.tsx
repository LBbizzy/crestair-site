import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

const location = getLocationBySlug('tucson-az')!;
export const metadata = buildMetadata(location.meta, '/locations/tucson-az');

export default function TucsonLocationPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow="Tucson Service Area"
        title={location.title}
        body="Local AC repair, installation, and heating support built for Tucson homes dealing with heavy cooling demand, extreme summer heat, and year-round comfort pressure."
        primaryLabel="Request Tucson Service"
        primaryHref="/services/ac-repair-tucson"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Tucson-First Coverage</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">HVAC help built around Tucson’s desert climate</h2>
          <p className="mt-4 text-slate-700">This location page now carries more local weight, stronger urgency, and more conversion structure so Tucson visitors can move cleanly into AC repair, AC installation, or direct service contact without hunting for the next step.</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first Tucson help</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Call now for Tucson AC repair, installation guidance, or general HVAC service support.</p>
          <a href={`tel:${site.phone}`} className="mt-5 inline-flex rounded-full bg-[#F4911D] px-5 py-3 font-semibold text-white transition hover:bg-[#D97F16]">Call Now</a>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Services available in Tucson</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
          {location.services.map((service) => (
            <li key={service.href}><Link className="underline" href={service.href}>{service.label}</Link></li>
          ))}
          <li><Link className="underline" href="/services/ac-repair-tucson">Emergency-style AC repair routing</Link></li>
          <li><Link className="underline" href="/services/ac-installation-tucson">Replacement and installation planning</Link></li>
        </ul>
        <p className="mt-5 text-slate-700">The goal is to keep Tucson visitors inside a service-first path that mirrors the source site’s stronger HVAC hierarchy without recreating the older stack.</p>
      </section>

      <CTASection
        heading="Need local Tucson HVAC help right now?"
        body="Move directly into AC repair, installation guidance, or immediate service contact before the next heat spike puts more stress on the system."
        primaryLabel="See AC Repair"
        primaryHref="/services/ac-repair-tucson"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why Tucson homeowners trust Crest Air</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {location.whyChooseUs.map((item) => <li key={item}>• {item}</li>)}
            <li>Clear routing into repair and installation decisions</li>
            <li>Local-first structure with stronger CTA placement</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Fast help when the Tucson heat makes HVAC problems urgent.”</p>
            <p className="mt-2 text-sm text-slate-600">Review-style credibility block tied directly to local service urgency.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Clear recommendations and better next-step guidance.”</p>
            <p className="mt-2 text-sm text-slate-600">Second proof layer to match the heavier conversion style already added on homepage and service pages.</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Local Tucson HVAC challenges</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{location.localChallenges.map((item) => <li key={item}>• {item}</li>)}</ul>
          <p className="mt-5 text-slate-700">The long cooling season in Tucson makes system efficiency, airflow, and repair timing more important than in milder markets.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Best next steps</h2>
          <p className="text-slate-700">Use the AC Repair page for urgent cooling issues, the AC Installation page when replacement is becoming more likely, or contact Crest Air directly if you need help deciding which path makes sense.</p>
          <div className="mt-5 flex flex-col gap-3 text-slate-700">
            <Link className="underline" href="/services/ac-repair-tucson">Go to AC Repair</Link>
            <Link className="underline" href="/services/ac-installation-tucson">Go to AC Installation</Link>
            <Link className="underline" href="/services/heating-tucson">Go to Heating</Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={location.faqs} />

      <CTASection
        heading="Ready to schedule Tucson HVAC service?"
        body="Use the local service links above or contact Crest Air directly for the fastest path into repair, installation, or heating support."
        primaryLabel="Request Service"
        primaryHref="/services/ac-repair-tucson"
        secondaryLabel="Explore AC Installation"
        secondaryHref="/services/ac-installation-tucson"
      />
    </div>
  );
}
