import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import { ImageCard } from '@/components/ImageCard';
import { SiteImage } from '@/components/SiteImage';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';
import { ImageAsset } from '@/lib/types';

const commercialRoutes = [
  {
    href: '/commercial/ac-repair',
    title: 'Commercial AC Repair',
    body: 'Rapid-response diagnostics for restaurants, offices, retail suites, and warehouses when rooftop units fail.',
  },
  {
    href: '/commercial/ac-installation',
    title: 'Commercial AC Installation',
    body: 'Planned replacements, crane-day coordination, and ROI planning for multi-tenant buildings.',
  },
  {
    href: '/commercial/maintenance',
    title: 'Commercial Maintenance',
    body: 'Preventive maintenance programs that keep RTUs and packaged units ready before peak season.',
  },
  {
    href: '/commercial/emergency',
    title: 'Commercial Emergency',
    body: 'After-hours dispatch when downtime equals lost revenue or inventory risk.',
  },
];

const commercialGalleryImages: ImageAsset[] = [
  {
    src: '/images/services/commercial-hub-overview-building.png',
    alt: 'Crest Air van parked outside a Tucson commercial building',
    title: 'Commercial service overview',
    description: 'Crest Air service van outside a Tucson office building ready for commercial HVAC work.',
    page: '/commercial',
    section: 'gallery',
    href: '/commercial',
  },
  {
    src: '/images/services/commercial-hub-team-rooftop.png',
    alt: 'Crest Air commercial team gathered on a rooftop with Tucson skyline',
    title: 'Commercial team on rooftop',
    description: 'Crest Air commercial division crew on a Tucson rooftop ready for the day\'s work.',
    page: '/commercial',
    section: 'gallery',
    href: '/commercial',
  },
  {
    src: '/images/services/commercial-hub-loading-equipment.png',
    alt: 'Crew loading commercial HVAC equipment into a Crest Air truck',
    title: 'Equipment loading',
    description: 'Loading heavy commercial HVAC components for a Tucson installation job.',
    page: '/commercial',
    section: 'gallery',
    href: '/commercial',
  },
];

const commercialOverviewImage: ImageAsset = {
  src: '/images/services/commercial-package-units-overview-campus.png',
  alt: 'Crest Air van outside a Tucson business park with rooftop HVAC units',
  title: 'Commercial HVAC overview hero image',
  description: 'Business park scene showing Crest Air supporting rooftop HVAC units across restaurants, offices, retail, and warehouses.',
  page: '/commercial',
  section: 'hero',
};

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
      <AnimatedPage>
      <HeroSection
        eyebrow="Commercial HVAC"
        title="RTU-focused HVAC support for Tucson restaurants, offices, retail, and warehouses"
        body="Downtime equals lost revenue. Crest Air routes business calls into a dedicated commercial desk so rooftop and packaged units get priority dispatch, transparent updates, and clear next steps."
        primaryLabel="Call Now for Commercial Dispatch"
        primaryHref={`tel:${site.phone}`}
        secondaryLabel="Priority Service for Tucson Businesses"
        secondaryHref="/contact"
        secondaryCallTracking={{ sourcePage: '/commercial', serviceType: 'commercial-hvac', location: 'tucson-az', pageType: 'commercial-overview' }}
        image={commercialOverviewImage}
        imageSizes="(min-width: 1024px) 45vw, 100vw"
        ctaSubline="Dedicated commercial dispatch across the Tucson metro"
      />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {commercialRoutes.map((route) => (
          <article key={route.href} className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-950">{route.title}</h2>
            <p className="mt-4 text-slate-700">{route.body}</p>
            <Link href={route.href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#041B34] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B3158]">
              Learn More
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
              </svg>
            </Link>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Why uptime matters</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Restaurants, offices, retail, and warehouses can’t afford RTU downtime</h2>
          <p className="mt-4 text-slate-700">When a rooftop unit stalls, tables empty, office productivity drops, retail traffic thins, and warehouse inventory bakes. Crest Air tracks every dispatch like an incident ticket—clear ETAs, technician updates, and post-service reporting so you can reassure tenants, staff, or franchise partners.</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Restaurants & kitchens</li>
            <li>• Offices & medical suites</li>
            <li>• Retail & hospitality</li>
            <li>• Warehouses & logistics centers</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-slate-100 p-3">
          <SiteImage asset={commercialOverviewImage} width={960} height={720} className="h-full w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
        {commercialGalleryImages.map((asset) => (
          <ImageCard key={asset.src} asset={asset} />
        ))}
      </section>

      <CTASection
        heading="Need commercial HVAC help in Tucson right now?"
        body="Call Crest Air for the fastest next step, or move directly into the specific commercial page that fits the property and system issue."
        primaryLabel="Call Now for Commercial Dispatch"
        primaryHref={`tel:${site.phone}`}
        secondaryLabel="Priority Service for Tucson Businesses"
        secondaryHref="/contact"
        secondaryCallTracking={{ sourcePage: '/commercial', serviceType: 'commercial-hvac', location: 'tucson-az', pageType: 'commercial-overview' }}
      />
      </AnimatedPage>
    </div>
  );
}
