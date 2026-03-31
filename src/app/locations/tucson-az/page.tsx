import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';

const location = getLocationBySlug('tucson-az')!;
export const metadata = buildMetadata(location.meta, '/locations/tucson-az');

export default function TucsonLocationPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection eyebrow="Location Page" title={location.title} body={location.intro} primaryLabel={location.cta.primaryLabel} primaryHref={location.cta.primaryHref} secondaryLabel={location.cta.secondaryLabel} secondaryHref={location.cta.secondaryHref} />
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Services Available in Tucson</h2>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
          {location.services.map((service) => (
            <li key={service.href}><Link className="underline" href={service.href}>{service.label}</Link></li>
          ))}
        </ul>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Why Tucson homeowners choose Crest Air</h2><ul className="mt-4 space-y-3 text-slate-700">{location.whyChooseUs.map((item) => <li key={item}>• {item}</li>)}</ul></div>
        <div className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Local HVAC challenges</h2><ul className="mt-4 space-y-3 text-slate-700">{location.localChallenges.map((item) => <li key={item}>• {item}</li>)}</ul></div>
      </section>
      <FAQSection faqs={location.faqs} />
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Internal service links</h2>
        <p className="mt-4 text-slate-700">This Tucson location hub connects users into AC repair, AC installation, and heating pages so the multi-location service structure stays clean and scalable.</p>
      </section>
      <CTASection {...location.cta} />
    </div>
  );
}
