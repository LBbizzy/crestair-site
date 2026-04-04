import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { ImageCard } from '@/components/ImageCard';
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
      src: '/images/locations/tucson-az/tucson-az-desert-driveway-visit.png',
      alt: 'Crest Air van pulling into a Tucson driveway with desert landscaping',
      title: 'Tucson technician arrival',
      description: 'Service van arriving at a Tucson neighborhood driveway during peak heat.',
      page: '/locations/tucson-az',
      section: 'hero',
      href: '/locations/tucson-az',
    },
    gallery: [
      {
        src: '/images/locations/tucson-az/tucson-az-rooftop-skyline-service.png',
        alt: 'Technicians working on a rooftop unit with the Tucson skyline behind them',
        title: 'Rooftop skyline service',
        description: 'Crew stabilizing a rooftop package unit overlooking downtown Tucson.',
        page: '/locations/tucson-az',
        section: 'gallery',
        href: '/locations/tucson-az',
      },
      {
        src: '/images/locations/tucson-az/tucson-az-backyard-evening-check.png',
        alt: 'Technician inspecting a condenser in a Tucson backyard at dusk',
        title: 'Evening backyard check',
        description: 'Evening follow-up visit after monsoon outages in central Tucson.',
        page: '/locations/tucson-az',
        section: 'gallery',
        href: '/locations/tucson-az',
      },
      {
        src: '/images/locations/tucson-az/tucson-az-midtown-apartment-service.png',
        alt: 'Crest Air technician servicing an AC unit at a Tucson midtown apartment complex',
        title: 'Midtown apartment service',
        description: 'Servicing a condenser at a midtown Tucson apartment building.',
        page: '/locations/tucson-az',
        section: 'gallery',
        href: '/locations/tucson-az',
      },
    ],
  },
  'oro-valley-az': {
    hero: {
      src: '/images/locations/oro-valley-az/oro-valley-az-culdesac-arrival.png',
      alt: 'Crest Air truck arriving in an Oro Valley cul-de-sac',
      title: 'Oro Valley arrival',
      description: 'Crew parking near foothills cul-de-sacs before morning appointments.',
      page: '/locations/oro-valley-az',
      section: 'hero',
      href: '/locations/oro-valley-az',
    },
    gallery: [
      {
        src: '/images/locations/oro-valley-az/oro-valley-az-terrace-service.png',
        alt: 'Technician servicing equipment on a shaded patio in Oro Valley',
        title: 'Terrace service visit',
        description: 'Servicing equipment on shaded patios common in Oro Valley.',
        page: '/locations/oro-valley-az',
        section: 'gallery',
        href: '/locations/oro-valley-az',
      },
      {
        src: '/images/locations/oro-valley-az/oro-valley-az-sunrise-street.png',
        alt: 'Sunrise view over Oro Valley with service vans staged',
        title: 'Sunrise staging',
        description: 'Team staging vans before sunrise dispatch with Pusch Ridge views.',
        page: '/locations/oro-valley-az',
        section: 'gallery',
        href: '/locations/oro-valley-az',
      },
      {
        src: '/images/locations/oro-valley-az/oro-valley-az-golf-community-visit.png',
        alt: 'Crest Air van at an Oro Valley golf community home',
        title: 'Golf community service',
        description: 'Service visit at a home in an Oro Valley golf course community with mountain views.',
        page: '/locations/oro-valley-az',
        section: 'gallery',
        href: '/locations/oro-valley-az',
      },
    ],
  },
  'marana-az': {
    hero: {
      src: '/images/locations/marana-az/marana-az-rooftop-package-service.png',
      alt: 'Technician checking a rooftop package unit in Marana',
      title: 'Marana rooftop package service',
      description: 'Marana rooftop package unit service with desert backdrop.',
      page: '/locations/marana-az',
      section: 'hero',
      href: '/locations/marana-az',
    },
    gallery: [
      {
        src: '/images/locations/marana-az/marana-az-wide-street-context.png',
        alt: 'Crest Air van parked on a wide Marana residential street',
        title: 'Wide street coverage',
        description: 'Showing access to wide Marana residential streets.',
        page: '/locations/marana-az',
        section: 'gallery',
        href: '/locations/marana-az',
      },
      {
        src: '/images/locations/marana-az/marana-az-farmhouse-sideyard.png',
        alt: 'Technician walking along a Marana farmhouse side yard',
        title: 'Farmhouse service visit',
        description: 'Service visit covering Marana farmhouse-style properties.',
        page: '/locations/marana-az',
        section: 'gallery',
        href: '/locations/marana-az',
      },
      {
        src: '/images/locations/marana-az/marana-az-new-construction-install.png',
        alt: 'Crest Air crew installing HVAC at a new construction site in Marana',
        title: 'New construction install',
        description: 'HVAC installation at a new construction home in Marana\'s growing developments.',
        page: '/locations/marana-az',
        section: 'gallery',
        href: '/locations/marana-az',
      },
    ],
  },
  'catalina-foothills-az': {
    hero: {
      src: '/images/locations/catalina-foothills-az/catalina-foothills-az-hillside-arrival.png',
      alt: 'Crest Air van arriving at a hillside home in Catalina Foothills',
      title: 'Catalina Foothills service arrival',
      description: 'Service van pulling up to a luxury hillside home in Catalina Foothills.',
      page: '/locations/catalina-foothills-az',
      section: 'hero',
      href: '/locations/catalina-foothills-az',
    },
    gallery: [
      {
        src: '/images/locations/catalina-foothills-az/catalina-foothills-az-patio-service.png',
        alt: 'Technician servicing an AC unit on a Catalina Foothills patio with mountain views',
        title: 'Foothills patio service',
        description: 'Servicing outdoor equipment with Catalina Mountain views in the background.',
        page: '/locations/catalina-foothills-az',
        section: 'gallery',
        href: '/locations/catalina-foothills-az',
      },
      {
        src: '/images/locations/catalina-foothills-az/catalina-foothills-az-luxury-home-visit.png',
        alt: 'Crest Air technician at the entrance of a luxury Catalina Foothills home',
        title: 'Luxury home visit',
        description: 'Professional service visit to a high-end Catalina Foothills residence.',
        page: '/locations/catalina-foothills-az',
        section: 'gallery',
        href: '/locations/catalina-foothills-az',
      },
    ],
  },
  'green-valley-az': {
    hero: {
      src: '/images/locations/green-valley-az/green-valley-az-retirement-community-visit.png',
      alt: 'Crest Air van parked at a Green Valley retirement community home',
      title: 'Green Valley community service',
      description: 'Service call at a well-maintained Green Valley retirement community home.',
      page: '/locations/green-valley-az',
      section: 'hero',
      href: '/locations/green-valley-az',
    },
    gallery: [
      {
        src: '/images/locations/green-valley-az/green-valley-az-desert-backyard-repair.png',
        alt: 'Technician repairing an AC unit in a Green Valley desert backyard',
        title: 'Desert backyard repair',
        description: 'Repairing an outdoor condenser in a Green Valley backyard with Santa Rita Mountain views.',
        page: '/locations/green-valley-az',
        section: 'gallery',
        href: '/locations/green-valley-az',
      },
      {
        src: '/images/locations/green-valley-az/green-valley-az-senior-consultation.png',
        alt: 'Crest Air tech explaining options to a Green Valley homeowner',
        title: 'Senior-friendly consultation',
        description: 'Patient, friendly consultation with a Green Valley homeowner about AC options.',
        page: '/locations/green-valley-az',
        section: 'gallery',
        href: '/locations/green-valley-az',
      },
    ],
  },
  'sahuarita-az': {
    hero: {
      src: '/images/locations/sahuarita-az/sahuarita-az-new-development-service.png',
      alt: 'Crest Air truck in a new Sahuarita housing development',
      title: 'Sahuarita new development',
      description: 'Servicing homes in one of Sahuarita\'s growing new residential developments.',
      page: '/locations/sahuarita-az',
      section: 'hero',
      href: '/locations/sahuarita-az',
    },
    gallery: [
      {
        src: '/images/locations/sahuarita-az/sahuarita-az-pecan-grove-visit.png',
        alt: 'Technician arriving at a Sahuarita home near pecan groves',
        title: 'Pecan grove area service',
        description: 'Service visit to a Sahuarita home with pecan orchards in the background.',
        page: '/locations/sahuarita-az',
        section: 'gallery',
        href: '/locations/sahuarita-az',
      },
      {
        src: '/images/locations/sahuarita-az/sahuarita-az-family-home-repair.png',
        alt: 'Crest Air tech working on an AC unit at a Sahuarita family home',
        title: 'Family home AC repair',
        description: 'Repairing an outdoor unit at a family home in Sahuarita with kids\' bikes in the driveway.',
        page: '/locations/sahuarita-az',
        section: 'gallery',
        href: '/locations/sahuarita-az',
      },
    ],
  },
  'south-tucson-az': {
    hero: {
      src: '/images/locations/south-tucson-az/south-tucson-az-neighborhood-arrival.png',
      alt: 'Crest Air van arriving in a South Tucson neighborhood',
      title: 'South Tucson service arrival',
      description: 'Service van pulling into a South Tucson residential street for an AC repair call.',
      page: '/locations/south-tucson-az',
      section: 'hero',
      href: '/locations/south-tucson-az',
    },
    gallery: [
      {
        src: '/images/locations/south-tucson-az/south-tucson-az-backyard-condenser.png',
        alt: 'Technician repairing a condenser in a South Tucson backyard',
        title: 'Backyard condenser repair',
        description: 'Working on an outdoor unit in a compact South Tucson backyard.',
        page: '/locations/south-tucson-az',
        section: 'gallery',
        href: '/locations/south-tucson-az',
      },
      {
        src: '/images/locations/south-tucson-az/south-tucson-az-homeowner-walkthrough.png',
        alt: 'Crest Air tech walking a South Tucson homeowner through repair options',
        title: 'Homeowner walkthrough',
        description: 'Explaining repair options to a South Tucson homeowner at their front porch.',
        page: '/locations/south-tucson-az',
        section: 'gallery',
        href: '/locations/south-tucson-az',
      },
    ],
  },
  'drexel-heights-az': {
    hero: {
      src: '/images/locations/drexel-heights-az/drexel-heights-az-subdivision-service.png',
      alt: 'Crest Air truck parked in a Drexel Heights subdivision',
      title: 'Drexel Heights subdivision service',
      description: 'Service truck ready for appointments in a Drexel Heights residential area.',
      page: '/locations/drexel-heights-az',
      section: 'hero',
      href: '/locations/drexel-heights-az',
    },
    gallery: [
      {
        src: '/images/locations/drexel-heights-az/drexel-heights-az-rooftop-repair.png',
        alt: 'Technician working on a rooftop unit in Drexel Heights',
        title: 'Rooftop unit repair',
        description: 'Servicing a rooftop package unit on a Drexel Heights home.',
        page: '/locations/drexel-heights-az',
        section: 'gallery',
        href: '/locations/drexel-heights-az',
      },
      {
        src: '/images/locations/drexel-heights-az/drexel-heights-az-driveway-greeting.png',
        alt: 'Crest Air technician greeting a homeowner in Drexel Heights',
        title: 'Driveway greeting',
        description: 'Arriving for a scheduled maintenance visit in Drexel Heights.',
        page: '/locations/drexel-heights-az',
        section: 'gallery',
        href: '/locations/drexel-heights-az',
      },
    ],
  },
  'flowing-wells-az': {
    hero: {
      src: '/images/locations/flowing-wells-az/flowing-wells-az-street-arrival.png',
      alt: 'Crest Air van on a Flowing Wells residential street',
      title: 'Flowing Wells service arrival',
      description: 'Service van arriving in the Flowing Wells neighborhood for an HVAC call.',
      page: '/locations/flowing-wells-az',
      section: 'hero',
      href: '/locations/flowing-wells-az',
    },
    gallery: [
      {
        src: '/images/locations/flowing-wells-az/flowing-wells-az-sideyard-unit.png',
        alt: 'Technician servicing an AC unit in a Flowing Wells side yard',
        title: 'Side yard AC service',
        description: 'Working on an outdoor condenser tucked in a Flowing Wells side yard.',
        page: '/locations/flowing-wells-az',
        section: 'gallery',
        href: '/locations/flowing-wells-az',
      },
      {
        src: '/images/locations/flowing-wells-az/flowing-wells-az-evening-followup.png',
        alt: 'Crest Air tech doing an evening follow-up in Flowing Wells',
        title: 'Evening follow-up visit',
        description: 'Returning for an evening check after a same-day repair in Flowing Wells.',
        page: '/locations/flowing-wells-az',
        section: 'gallery',
        href: '/locations/flowing-wells-az',
      },
    ],
  },
  'vail-az': {
    hero: {
      src: '/images/locations/vail-az/vail-az-ranch-style-arrival.png',
      alt: 'Crest Air van arriving at a ranch-style home in Vail',
      title: 'Vail ranch-style service',
      description: 'Service arrival at a ranch-style property in Vail with open desert views.',
      page: '/locations/vail-az',
      section: 'hero',
      href: '/locations/vail-az',
    },
    gallery: [
      {
        src: '/images/locations/vail-az/vail-az-desert-lot-condenser.png',
        alt: 'Technician working on a condenser at a Vail desert lot property',
        title: 'Desert lot condenser service',
        description: 'Working on an outdoor unit at a large-lot Vail property with desert vegetation.',
        page: '/locations/vail-az',
        section: 'gallery',
        href: '/locations/vail-az',
      },
      {
        src: '/images/locations/vail-az/vail-az-sunset-departure.png',
        alt: 'Crest Air van departing a Vail neighborhood at sunset',
        title: 'Sunset service completion',
        description: 'Finishing up a service call in Vail as the sun sets over the Rincon Mountains.',
        page: '/locations/vail-az',
        section: 'gallery',
        href: '/locations/vail-az',
      },
    ],
  },
};

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const sourcePage = `/locations/${location.slug}`;
  const imageSet = locationImageSets[location.slug];
  const heroImage = imageSet?.hero;
  const galleryImages = imageSet?.gallery || [];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <AnimatedPage>
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
            <ImageCard key={asset.src} asset={asset} />
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
        <p className="mt-4 text-slate-700">If your comfort drops, our <Link className="underline transition hover:text-[#F4911D]" href="/services/ac-repair-tucson">AC repair team</Link> can respond quickly in {location.city}. When a replacement is smarter, explore <Link className="underline transition hover:text-[#F4911D]" href="/services/ac-installation-tucson">AC installation options</Link>, and keep everything tuned with routine <Link className="underline transition hover:text-[#F4911D]" href="/services/hvac-maintenance-tucson">HVAC maintenance visits</Link>.</p>
        <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">{location.services.map((service) => <li key={service.href}><Link className="underline transition hover:text-[#F4911D]" href={service.href}>{service.label}</Link></li>)}</ul>
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
          <ul className="mt-4 space-y-3 text-slate-700">{location.nearbyAreas.length ? location.nearbyAreas.map((item) => <li key={item.href}><Link className="underline transition hover:text-[#F4911D]" href={item.href}>{item.label}</Link></li>) : <li>Additional area pages can be generated from the same schema.</li>}</ul>
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
      </AnimatedPage>
    </div>
  );
}
