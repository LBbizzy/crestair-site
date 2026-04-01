import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

const commercialRoutes = [
  {
    href: '/commercial/ac-repair',
    title: 'Commercial AC Repair',
    body: 'For business owners, property managers, and facilities teams dealing with downtime, comfort complaints, or urgent repair coordination.',
  },
  {
    href: '/commercial/installations',
    title: 'Commercial Installations',
    body: 'For replacement planning, staged upgrades, and clearer installation scope before work begins.',
  },
  {
    href: '/commercial/maintenance',
    title: 'Commercial Maintenance',
    body: 'For preventive planning, seasonal readiness, and fewer surprise calls during heavy demand periods.',
  },
  {
    href: '/commercial/package-units',
    title: 'Rooftop & Package Units',
    body: 'For packaged-system service, maintenance, and replacement conversations tied to rooftop equipment.',
  },
];

export const metadata = buildMetadata(
  {
    title: 'Commercial HVAC Tucson',
    description: 'Commercial HVAC routes for Tucson business owners, property managers, and facility teams.',
    keywords: ['commercial hvac tucson', 'commercial ac repair tucson', 'commercial hvac maintenance tucson'],
  },
  '/commercial',
);

export default function CommercialOverviewPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow="Commercial HVAC"
        title="Commercial HVAC paths built for Tucson properties, uptime, and faster coordination"
        body="This commercial hub keeps business and property-management traffic separate from residential messaging so owners and operators can move into the right service path quickly."
        primaryLabel="Contact Crest Air"
        primaryHref="/contact"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/commercial', serviceType: 'commercial-hvac', location: 'tucson-az', pageType: 'commercial-overview' }}
      />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {commercialRoutes.map((route) => (
          <article key={route.href} className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-950">{route.title}</h2>
            <p className="mt-4 text-slate-700">{route.body}</p>
            <Link href={route.href} className="mt-6 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">Open commercial page</Link>
          </article>
        ))}
      </section>

      <CTASection
        heading="Need commercial HVAC help in Tucson right now?"
        body="Call Crest Air for the fastest next step, or move directly into the specific commercial page that fits the property and system issue."
        primaryLabel="Open Contact Page"
        primaryHref="/contact"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/commercial', serviceType: 'commercial-hvac', location: 'tucson-az', pageType: 'commercial-overview' }}
      />
    </div>
  );
}
