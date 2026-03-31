import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

const service = getServiceBySlug('ac-repair-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/ac-repair-tucson');

export default function AcRepairPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow={service.location}
        title={service.title}
        body="Fast diagnostics, reliable cooling repairs, and clearer next steps for Tucson homeowners who need comfort restored before a small issue becomes a no-cool emergency."
        primaryLabel="Request AC Repair"
        primaryHref={service.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Immediate Response</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">When Tucson heat hits, AC problems get urgent fast</h2>
          <p className="mt-4 text-slate-700">This upgraded service page increases the conversion weight with stronger language, richer proof, more service detail, and faster routes into the Tucson location hub and related service pages.</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first AC repair</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Call now for AC repair diagnostics, no-cool troubleshooting, and Tucson service scheduling.</p>
          <a href={`tel:${site.phone}`} className="mt-5 inline-flex rounded-full bg-[#F4911D] px-5 py-3 font-semibold text-white transition hover:bg-[#D97F16]">Call Now</a>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Overview</h2>
        {service.overview.map((paragraph) => <p key={paragraph} className="text-slate-700">{paragraph}</p>)}
        <p className="text-slate-700">Tucson systems run hard for long stretches, so AC failures often show up as weak cooling, airflow inconsistency, short cycling, or steadily rising energy use before they become complete breakdowns.</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Signs you need AC repair</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.signs.map((item) => <li key={item}>• {item}</li>)}</ul>
          <p className="mt-5 text-slate-700">If the issue shows up during extreme Tucson heat, delaying service can turn a small repair into a system-wide failure.</p>
          <Link href="/locations/tucson-az" className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">See Tucson service coverage</Link>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Benefits of acting quickly</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.benefits.map((item) => <li key={item}>• {item}</li>)}</ul>
          <p className="mt-5 text-slate-700">Fast repair protects comfort, helps prevent larger failures, and gives you more control over whether repair or replacement is the right path.</p>
          <Link href="/services/ac-installation-tucson" className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">Compare AC installation options</Link>
        </div>
      </section>

      <CTASection
        heading="Need AC repair before the next hot stretch?"
        body="Book service now or call Crest Air directly to move faster on diagnostics and repair scheduling."
        primaryLabel="Request AC Repair"
        primaryHref="/locations/tucson-az"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
      />

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">What the repair process looks like</h2>
        <ol className="mt-4 space-y-3 text-slate-700">{service.process.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}</ol>
        <p className="mt-5 text-slate-700">That process is built to keep communication clear so Tucson homeowners understand the issue, the fix, and the practical next step before work begins.</p>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why Crest Air is trusted for AC repair in Tucson</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>Clear diagnostic-first repair approach</li>
            <li>Strong Tucson-first routing and service coverage</li>
            <li>Related paths into installation and heating support</li>
            <li>Cleaner custom stack with stronger conversion framing</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Fast diagnosis and clear next steps.”</p>
            <p className="mt-2 text-sm text-slate-600">Review-style trust block to strengthen proof before the final service CTA.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Helpful repair guidance without pressure.”</p>
            <p className="mt-2 text-sm text-slate-600">Second credibility layer that mirrors the stronger trust pattern added on the homepage.</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Related Services</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.relatedServices.map((link) => <li key={link.href}><Link className="underline" href={link.href}>{link.label}</Link></li>)}</ul>
          <p className="mt-5 text-slate-700">Use these links if your current repair issue turns into a replacement conversation or a broader comfort-system problem.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Areas</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.serviceAreas.map((link) => <li key={link.href}><Link className="underline" href={link.href}>{link.label}</Link></li>)}</ul>
          <p className="mt-5 text-slate-700">The Tucson location page works as the local routing hub for this service and helps keep service intent tied to area intent.</p>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />

      <CTASection
        heading="Still not sure whether to repair or replace your AC?"
        body="Use the Tucson location hub, compare installation guidance, or call now to move directly into the next step that fits your system best."
        primaryLabel="See Tucson HVAC"
        primaryHref="/locations/tucson-az"
        secondaryLabel="Explore AC Installation"
        secondaryHref="/services/ac-installation-tucson"
      />
    </div>
  );
}
