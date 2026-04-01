import { CTASection } from '@/components/CTASection';
import { HeroSection } from '@/components/HeroSection';
import { LocationGrid } from '@/components/LocationGrid';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { site } from '@/lib/site';
import { services } from '@/content/services';
import { locations } from '@/content/locations';

const expandedServices = [
  ...services.map((service) => ({ title: service.title, description: service.intro, href: `/services/${service.slug}` })),
  {
    title: 'Indoor Air Quality',
    description: 'Structured routing placeholder for filtration, air purification, and healthier indoor comfort topics.',
    href: '/blog',
  },
  {
    title: 'Maintenance Plans',
    description: 'Supportive conversion path for tune-ups, seasonal preparation, and long-term system performance.',
    href: '/blog',
  },
  {
    title: 'Duct Cleaning & Airflow',
    description: 'Content-first pathway for airflow issues, duct condition, and room-to-room comfort balance.',
    href: '/blog',
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10">
      <HeroSection
        eyebrow="Tucson HVAC Company"
        title="Fast AC repair, installation, and heating support built for Tucson homes"
        body="This custom rebuild now pushes much harder on conversion: stronger hero weight, phone-first urgency, deeper service routing, richer trust layers, and fuller area coverage modeled after crestairaz.com without carrying over the legacy implementation."
        primaryLabel="Request Service"
        primaryHref="/locations/tucson-az"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/', serviceType: 'general-hvac', location: 'tucson-az', pageType: 'home' }}
        imageSrc="https://crestairaz.com/wp-content/uploads/2026/03/ac-repair-tucson-az-crest-air-hvac-service.webp"
        imageAlt="Crest Air technician providing air conditioning repair service in Tucson, Arizona"
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Immediate Help</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Need cooling help before the Tucson heat gets worse?</h2>
          <p className="mt-4 text-slate-700">
            Crest Air is structured around the same local service logic as the source site: urgent repair intent first, stronger installation routing second, and clear local service-area entry points throughout the page.
          </p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first CTA</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Talk to Crest Air now for AC repair, replacement planning, or Tucson-area heating support.</p>
        </div>
      </section>

      <ServiceConversionSection
        sourcePage="/"
        serviceType="general-hvac"
        location="tucson-az"
        pageType="home"
        title="Crest Air Homepage"
        callCtaId="home-call"
        formCtaId="home-form"
        contextLabel="homepage"
      />

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Fuller Service Hierarchy</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Residential and commercial HVAC paths with stronger routing</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expandedServices.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} href={service.href} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Schedule service before a small issue becomes a system failure"
        body="This repeat CTA band increases conversion density and mirrors the stronger urgency pattern from the source site’s homepage flow."
        primaryLabel="Request Service"
        primaryHref="/locations/tucson-az"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/', serviceType: 'general-hvac', location: 'tucson-az', pageType: 'home' }}
      />

      <section className="grid gap-6 rounded-3xl bg-[#041B34] p-8 text-white shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Trust Signal</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">Trusted by Tucson homeowners</h2>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-2xl font-bold text-[#F4911D]">★★★★★</p>
          <p className="mt-2 text-slate-200">Review-style proof block placed directly beside a conversion band.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="font-semibold">Licensed / Insured messaging</p>
          <p className="mt-2 text-slate-200">Use this layer to reinforce trust, local service confidence, and response credibility.</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why Tucson homeowners trust Crest Air</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Fast AC repair routing for urgent cooling issues</li>
            <li>Installation paths tied to replacement decisions, not generic sales copy</li>
            <li>Local Tucson-first structure with linked service and location SEO paths</li>
            <li>Cleaner custom stack built for speed and multi-location growth</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Fast response and clear communication.”</p>
            <p className="mt-2 text-sm text-slate-600">Homeowners trust Crest Air for clear communication, reliable recommendations, and fast response when comfort matters most.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Helpful recommendations without pressure.”</p>
            <p className="mt-2 text-sm text-slate-600">Second review card to strengthen the proof section before later expansion.</p>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Area Coverage</p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Serving Tucson and surrounding communities</h2>
        <p className="max-w-3xl text-slate-700">
          The homepage now carries stronger area-coverage presence so users can move from broad Tucson intent into local service routing more like the source site’s conversion flow.
        </p>
        <LocationGrid locations={locations.map((location) => ({ href: `/locations/${location.slug}`, label: location.title }))} />
      </section>

      <CTASection
        heading="Need HVAC support in Tucson right now?"
        body="Use the service cards above or jump straight into the Tucson location hub for the fastest route to Crest Air’s core conversion paths."
        primaryLabel="See Tucson HVAC"
        primaryHref="/locations/tucson-az"
        secondaryLabel="Explore AC Repair"
        secondaryHref="/services/ac-repair-tucson"
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Contact Crest Air</p>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Talk to Crest Air today</h2>
        <p className="mt-4 text-slate-700">Phone: {site.phone} · Email: {site.email}</p>
        <p className="mt-4 text-slate-700">Need a dedicated contact page? Use the live form at <strong>/contact</strong>.</p>
      </section>
    </div>
  );
}
