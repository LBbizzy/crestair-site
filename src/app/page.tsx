import { CTASection } from '@/components/CTASection';
import { HeroSection } from '@/components/HeroSection';
import { LocationGrid } from '@/components/LocationGrid';
import { ServiceCard } from '@/components/ServiceCard';
import { site } from '@/lib/site';
import { services } from '@/content/services';
import { locations } from '@/content/locations';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10">
      <HeroSection
        eyebrow="Tucson HVAC Services"
        title="Heating and cooling support built for Tucson homes"
        body="This custom rebuild keeps Crest Air’s existing service hierarchy, CTA flow, and Tucson-first positioning while moving to a cleaner Next.js content architecture."
        primaryLabel="Request Service"
        primaryHref="/locations/tucson-az"
        secondaryLabel="Explore AC Repair"
        secondaryHref="/services/ac-repair-tucson"
      />

      <section className="space-y-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Core Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} title={service.title} description={service.intro} href={`/services/${service.slug}`} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why homeowners choose Crest Air</h2>
          <p className="mt-4 text-slate-700">We are preserving the same service hierarchy and conversion flow from crestairaz.com while rebuilding it into a faster, easier-to-scale custom stack for service, location, and blog SEO growth.</p>
        </div>
        <ul className="space-y-3 text-slate-700">
          <li>Clear Tucson-first service hierarchy</li>
          <li>Service pages linked to location pages</li>
          <li>Reusable components instead of builder lock-in</li>
          <li>Structured metadata and internal linking</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Service Areas</h2>
        <LocationGrid locations={locations.map((location) => ({ href: `/locations/${location.slug}`, label: location.title }))} />
      </section>

      <CTASection
        heading={`Need local HVAC help?`}
        body={`Use the Tucson service hub or jump straight into AC repair and installation.`}
        primaryLabel="See Tucson HVAC"
        primaryHref="/locations/tucson-az"
        secondaryLabel="Read the blog"
        secondaryHref="/blog"
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Contact Crest Air</h2>
        <p className="mt-4 text-slate-700">Phone: {site.phone} · Email: {site.email}</p>
      </section>
    </div>
  );
}
