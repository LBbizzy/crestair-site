import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

const service = getServiceBySlug('ac-installation-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/ac-installation-tucson');

export default function AcInstallationPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection eyebrow={service.location} title={service.title} body={service.intro} primaryLabel={service.cta.primaryLabel} primaryHref={service.cta.primaryHref} secondaryLabel={service.cta.secondaryLabel} secondaryHref={service.cta.secondaryHref} />
      <section className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Installation Overview</h2>
        {service.overview.map((paragraph) => <p key={paragraph} className="text-slate-700">{paragraph}</p>)}
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Replacement Signals</h2><ul className="mt-4 space-y-3 text-slate-700">{service.signs.map((item) => <li key={item}>• {item}</li>)}</ul></div>
        <div className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Installation Benefits</h2><ul className="mt-4 space-y-3 text-slate-700">{service.benefits.map((item) => <li key={item}>• {item}</li>)}</ul></div>
      </section>
      <section className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Process</h2><ol className="mt-4 space-y-3 text-slate-700">{service.process.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}</ol></section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Related Services</h2><ul className="mt-4 space-y-3 text-slate-700">{service.relatedServices.map((link) => <li key={link.href}><Link className="underline" href={link.href}>{link.label}</Link></li>)}</ul></div>
        <div className="rounded-3xl bg-white p-8 shadow-sm"><h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Areas</h2><ul className="mt-4 space-y-3 text-slate-700">{service.serviceAreas.map((link) => <li key={link.href}><Link className="underline" href={link.href}>{link.label}</Link></li>)}</ul></div>
      </section>
      <FAQSection faqs={service.faqs} />
      <CTASection {...service.cta} />
    </div>
  );
}
