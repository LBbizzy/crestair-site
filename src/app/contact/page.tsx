import { HeroSection } from '@/components/HeroSection';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = buildMetadata(
  {
    title: 'Contact Crest Air | Tucson HVAC Help',
    description: 'Contact Crest Air for Tucson HVAC repair, installation, maintenance, and general service requests.',
    keywords: ['contact crest air', 'crest air phone number', 'tucson hvac contact'],
  },
  '/contact',
);

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow="Contact Crest Air"
        title="Talk to Crest Air about repair, installation, or general HVAC help"
        body="Use the contact form below to send a tracked request into GoHighLevel or call now for faster help."
        primaryLabel="Request Service"
        primaryHref="#contact-form"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/contact', serviceType: 'general-hvac', location: 'tucson-az', pageType: 'contact' }}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Direct Contact</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Fast routing for Tucson-area HVAC needs</h2>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="font-semibold text-[#041B34]">Phone</p>
          <p className="mt-2 text-slate-700">{site.phone}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-5">
          <p className="font-semibold text-[#041B34]">Email</p>
          <p className="mt-2 text-slate-700">{site.email}</p>
        </div>
      </section>

      <div id="contact-form">
        <ServiceConversionSection
          sourcePage="/contact"
          serviceType="general-hvac"
          location="tucson-az"
          pageType="contact"
          title="Contact Crest Air"
          callCtaId="contact-call"
          formCtaId="contact-form"
          contextLabel="contact page"
        />
      </div>
    </div>
  );
}
