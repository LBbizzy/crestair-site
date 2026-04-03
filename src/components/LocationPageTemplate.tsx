import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { SiteImage } from '@/components/SiteImage';
import { ImageAsset, LocationContent } from '@/lib/types';
import { site } from '@/lib/site';

type LocationPageTemplateProps = {
  location: LocationContent;
};

type LocationImageSet = {
  hero: ImageAsset;
  gallery: ImageAsset[];
};

const locationImageSets: Record<string, LocationImageSet> = {
  'tucson-az': {
    hero: {
      src: '/images/locations/tucson-az/tucson-desert-driveway-visit.png',
      alt: 'Crest Air van pulling into a Tucson driveway with desert landscaping',
      title: 'Tucson technician arrival',
      description: 'Service van arriving at a Tucson neighborhood driveway during peak heat.',
      page: '/locations/tucson-az',
      section: 'hero',
    },
    gallery: [
      {
        src: '/images/locations/tucson-az/tucson-rooftop-skyline-service.png',
        alt: 'Technicians working on a rooftop unit with the Tucson skyline behind them',
        title: 'Rooftop skyline service',
        description: 'Crew stabilizing a rooftop package unit overlooking downtown Tucson.',
        page: '/locations/tucson-az',
        section: 'gallery',
      },
      {
        src: '/images/locations/tucson-az/tucson-backyard-evening-check.png',
        alt: 'Technician inspecting a condenser in a Tucson backyard at dusk',
        title: 'Evening backyard check',
        description: 'Evening follow-up visit after monsoon outages in central Tucson.',
        page: '/locations/tucson-az',
        section: 'gallery',
      },
    ],
  },
  'oro-valley-az': {
    hero: {
      src: '/images/locations/oro-valley-az/oro-valley-culdesac-arrival.png',
      alt: 'Crest Air truck arriving in an Oro Valley cul-de-sac',
      title: 'Oro Valley arrival',
      description: 'Crew parking near foothills cul-de-sacs before morning appointments.',
      page: '/locations/oro-valley-az',
      section: 'hero',
    },
    gallery: [
      {
        src: '/images/locations/oro-valley-az/oro-valley-terrace-service.png',
        alt: 'Technician servicing equipment on a shaded patio in Oro Valley',
        title: 'Terrace service visit',
        description: 'Servicing equipment on shaded patios common in Oro Valley.',
        page: '/locations/oro-valley-az',
        section: 'gallery',
      },
      {
        src: '/images/locations/oro-valley-az/oro-valley-sunrise-street.png',
        alt: 'Sunrise view over Oro Valley with service vans staged',
        title: 'Sunrise staging',
        description: 'Team staging vans before sunrise dispatch with Pusch Ridge views.',
        page: '/locations/oro-valley-az',
        section: 'gallery',
      },
    ],
  'marana-az': {
    hero: {
      src: '/images/locations/marana-az/marana-rooftop-package-service.png',
      alt: 'Technician checking a rooftop package unit in Marana',
      title: 'Marana rooftop package service',
      description: 'Marana rooftop package unit service with desert backdrop.',
      page: '/locations/marana-az',
      section: 'hero',
    },
    gallery: [
      {
        src: '/images/locations/marana-az/marana-wide-street-context.png',
        alt: 'Crest Air van parked on a wide Marana residential street',
        title: 'Wide street coverage',
        description: 'Showing access to wide Marana residential streets.',
        page: '/locations/marana-az',
        section: 'gallery',
      },
      {
        src: '/images/locations/marana-az/marana-farmhouse-sideyard.png',
        alt: 'Technician walking along a Marana farmhouse side yard',
        title: 'Farmhouse service visit',
        description: 'Service visit covering Marana farmhouse-style properties.',
        page: '/locations/marana-az',
        section: 'gallery',
      },
    ],
  },
  },
};

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const sourcePage = `/locations/${location.slug}`;
  const imageSet = locationImageSets[location.slug];
  const heroImage = imageSet?.hero;
  const galleryImages = imageSet?.gallery || [];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <HeroSection
        eyebrow={`${location.city} Service Area`}
        title={`AC Repair & HVAC Service in ${location.city}, AZ`}
        body={location.intro}
        primaryLabel="Call Now or Book Online"
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
        image={heroImage}
        imageSizes="(min-width: 1024px) 45vw, 100vw"
        ctaSubline={`Same-day service available in ${location.city}`}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Local Coverage</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">HVAC support tailored to {location.city}</h2>
          <p className="mt-4 text-slate-700">From monsoon humidity to dusty afternoon winds, Crest Air keeps {location.city} homes on schedule with same-day dispatch, status texts, and nearby technicians.</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first local help</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Call now to route a {location.city} technician for repair, installation, or maintenance planning.</p>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="grid gap-4 rounded-3xl bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((asset) => (
            <figure key={asset.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <SiteImage asset={asset} width={640} height={420} className="h-64 w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
              <figcaption className="px-4 py-3 text-sm text-slate-700">
                <p className="font-semibold text-[#041B34]">{asset.title}</p>
                <p className="text-slate-600">{asset.description}</p>
              </figcaption>
            </figure>
          ))}
        </section>
      ) : null}

      <ServiceConversionSection
        sourcePage={sourcePage}
        serviceType="general-hvac"
        location={location.slug}
        pageType="location"
        title={`AC Repair & HVAC Service in ${location.city}, AZ`}
        callCtaId={`${location.slug}-call`}
        formCtaId={`${location.slug}-form`}
        contextLabel="location page"
      />

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Services available in this area</h2>
        <p className="mt-4 text-slate-700">If your comfort drops, our <Link className="underline" href="/services/ac-repair-tucson">AC repair team</Link> can respond quickly in {location.city}. When a replacement is smarter, explore <Link className="underline" href="/services/ac-installation-tucson">AC installation options</Link>, and keep everything tuned with routine <Link className="underline" href="/services/hvac-maintenance-tucson">HVAC maintenance visits</Link>.</p>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">{location.services.map((service) => <li key={service.href}><Link className="underline" href={service.href}>{service.label}</Link></li>)}</ul>
      </section>

      <CTASection
        heading={`Need HVAC help in ${location.city} right now?`}
        body={`Choose the service link that fits your ${location.city} home or book a same-day visit now.`}
        primaryLabel="Call Now or Book Online"
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
        subline={`Same-day service available in ${location.city}`}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why local homeowners trust Crest Air</h2>
          <ul className="mt-5 space-y-3 text-slate-700">{location.whyChooseUs.map((item) => <li key={item}>• {item}</li>)}</ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“{location.testimonial.quote}”</p>
            <p className="mt-2 text-sm text-slate-600">— {location.testimonial.name}, {location.testimonial.neighborhood}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">Licensed, insured, and Tucson-based</p>
            <p className="mt-2 text-sm text-slate-600">Every Crest Air technician serving {location.city} is background-checked, uniformed, and equipped for desert HVAC systems.</p>
          </article>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">{`Common HVAC Issues in ${location.city}`}</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{location.localChallenges.map((item) => <li key={item}>• {item}</li>)}</ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Nearby areas</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{location.nearbyAreas.length ? location.nearbyAreas.map((item) => <li key={item.href}><Link className="underline" href={item.href}>{item.label}</Link></li>) : <li>Additional area pages can be generated from the same schema.</li>}</ul>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-[#041B34] p-8 text-white shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Local Trust Layer</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">Need help in {location.city} before the heat wins?</h2>
          <p className="mt-3 text-slate-200">We keep crews stationed near {location.city} arterial roads so a technician can reach you quickly even when traffic builds along I-10 or Kolb.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-2xl font-bold text-[#F4911D]">★★★★★</p>
          <p className="mt-2 text-slate-200">Same-day reviews from neighbors prove how fast we restore cooling across {location.city} neighborhoods.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="font-semibold">Licensed · Insured · Tucson based</p>
          <p className="mt-2 text-slate-200">Crest Air crews arrive uniformed, background-checked, and ready for Sonoran heat loads.</p>
        </div>
      </section>

      <CTASection
        heading={`Need HVAC service in ${location.city} right now?`}
        body={`Use the service links above or call Crest Air to route a ${location.city} technician before conditions worsen.`}
        primaryLabel="Call Now or Book Online"
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
        subline={`Same-day service available in ${location.city}`}
      />

      <FAQSection faqs={location.faqs} />

      <CTASection
        heading={`Book trusted HVAC care in ${location.city}`}
        body={`Call now or book online to secure a same-day ${location.city} visit.`}
        primaryLabel="Call Now or Book Online"
        primaryHref={location.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: 'general-hvac', location: location.slug, pageType: 'location' }}
        subline={`Same-day service available in ${location.city}`}
      />
    </div>
  );
}
