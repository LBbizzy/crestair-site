import Link from 'next/link';
import { SiteImage } from '@/components/SiteImage';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { ImageAsset } from '@/lib/types';
import { site } from '@/lib/site';

type CommercialServicePageProps = {
  slug: 'ac-repair' | 'ac-installation' | 'maintenance' | 'emergency';
  title: string;
  description: string;
  intro: string;
  audience: string[];
  needs: string[];
  sourcePage: string;
  serviceType: string;
  callCtaId: string;
  formCtaId: string;
};

const industries = ['Restaurants', 'Offices', 'Retail', 'Warehouses'];

const caseStudies = [
  {
    title: 'Downtown restaurant RTU failure',
    body: 'A Tucson restaurant on 4th Avenue lost cooling an hour before dinner service when its rooftop unit fan motor seized. Crest Air dispatched within 90 minutes, swapped the motor, and recalibrated airflow so tables stayed seated and the kitchen never shut down. Result: zero revenue loss and a preventive maintenance plan scheduled for the off day.',
  },
  {
    title: 'Midtown office hot-floor complaints',
    body: 'A three-story office near Broadway experienced rising temperatures after an aging VFD kept tripping. We delivered a same-day repair, cleaned contactors, and staged a retrofit plan so the property manager could brief corporate on a permanent solution. Result: employees stayed onsite and the replacement budget was approved without emergency rent credits.',
  },
  {
    title: 'Warehouse inventory at risk',
    body: 'A logistics warehouse off I-10 saw interior temps spike above 90°F when a packaged unit coil failed during a weekend shift. Crest Air provided temporary spot cooling, sourced the coil first thing Monday, and had the RTU back online before heat damaged stored goods. Result: shipping commitments stayed on schedule and the facility avoided spoilage claims.',
  },
];

const commercialImageAssets: Record<string, ImageAsset> = {
  'ac-repair': {
    src: '/images/services/commercial-ac-repair-rooftop-team.png',
    alt: 'Crest Air commercial technicians servicing a rooftop unit in Tucson',
    title: 'Commercial AC repair rooftop service',
    description: 'Technicians working on a rooftop HVAC unit above a Tucson business.',
    page: '/commercial/ac-repair',
    section: 'hero',
  },
  'ac-installation': {
    src: '/images/services/commercial-ac-installation-crane-lift.png',
    alt: 'Crest Air crew guiding a rooftop unit into place with a crane',
    title: 'Commercial AC installation crane lift',
    description: 'Crest Air installs a new rooftop unit for a Tucson office building.',
    page: '/commercial/ac-installation',
    section: 'hero',
  },
  maintenance: {
    src: '/images/services/commercial-maintenance-rtu-inspection.png',
    alt: 'Technician inspecting a rooftop unit for a Tucson retail property',
    title: 'Commercial maintenance RTU inspection',
    description: 'Preventive maintenance on a rooftop HVAC unit serving Tucson shops.',
    page: '/commercial/maintenance',
    section: 'hero',
  },
  emergency: {
    src: '/images/services/commercial-emergency-night-response.png',
    alt: 'Emergency Crest Air crew arriving at a Tucson warehouse at night',
    title: 'Commercial emergency HVAC response',
    description: 'After-hours dispatch for a Tucson warehouse rooftop system.',
    page: '/commercial/emergency',
    section: 'hero',
  },
};

export function CommercialServicePage({
  slug,
  title,
  description,
  intro,
  audience,
  needs,
  sourcePage,
  serviceType,
  callCtaId,
  formCtaId,
}: CommercialServicePageProps) {
  const heroImage = commercialImageAssets[slug];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-16 md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Commercial HVAC</p>
            <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
          </div>
          <div className="flex min-h-[320px] items-end bg-[linear-gradient(135deg,#041B34,#0B3158)] p-8 text-slate-200">
            <p className="max-w-sm text-base leading-7">Separate commercial service track for restaurants, offices, retail, and warehouse facilities that need uptime, faster decision-making, and clearer coordination.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-4 rounded-3xl bg-white p-6 shadow-sm">
        <a
          href={`tel:${site.phone}`}
          className="inline-flex flex-1 min-w-[220px] items-center justify-center rounded-full bg-[#F4911D] px-6 py-3 text-center text-lg font-semibold text-white transition hover:bg-[#D97F16]"
          data-cta-id={callCtaId}
        >
          Call Now for Commercial Dispatch
        </a>
        <Link
          href="/contact"
          className="inline-flex flex-1 min-w-[220px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-center text-lg font-semibold text-[#041B34] transition hover:border-[#041B34]"
        >
          Priority Service for Tucson Businesses
        </Link>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-2xl border border-slate-200 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Case Study</p>
            <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">{study.title}</h3>
            <p className="mt-3 text-slate-700">{study.body}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Industries we support</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Restaurants, offices, retail, and warehouses run on uptime</h2>
          <p className="mt-4 text-slate-700">Downtime equals lost revenue and unhappy occupants—especially when rooftop units (RTUs) serve entire dining rooms, open office floors, shopping aisles, or storage bays. Crest Air keeps dispatch, diagnostics, and approvals tight so you can reopen, seat guests, or resume production without guessing.</p>
          <ul className="mt-4 space-y-2 text-slate-700">{industries.map((industry) => (<li key={industry}>• {industry}</li>))}</ul>
        </div>
        <div className="rounded-2xl bg-slate-100 p-3">
          <SiteImage asset={heroImage} width={960} height={720} className="h-full w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Commercial Focus</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Built for facility needs, not residential messaging</h2>
          <p className="mt-4 text-slate-700">{intro}</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">What matters here</p>
          <ul className="mt-4 space-y-3 text-slate-200">{needs.map((item) => (<li key={item}>• {item}</li>))}</ul>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Who this page is for</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{audience.map((item) => (<li key={item}>• {item}</li>))}</ul>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Rooftop unit (RTU) expertise</h2>
          <p className="mt-4 text-slate-700">Most Tucson commercial sites rely on RTUs to condition entire suites. We service, replace, and stage lifts for multi-ton equipment, coordinate crane days, and protect roofing systems while the cabinet is open. Whether you operate a restaurant on Campbell Avenue or a warehouse off I-10, we plan around your business hours so RTU downtime doesn’t eat into revenue.</p>
        </div>
      </section>


      <ServiceConversionSection
        sourcePage={sourcePage}
        serviceType={serviceType}
        location="tucson-az"
        pageType="commercial-service"
        title={title}
        callCtaId={callCtaId}
        formCtaId={formCtaId}
      />
    </div>
  );
}
