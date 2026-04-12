import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { HeroSection } from '@/components/HeroSection';
import { JsonLd } from '@/components/JsonLd';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { ImageCard } from '@/components/ImageCard';
import { SiteImage } from '@/components/SiteImage';
import { buildFaqSchema, buildServiceSchema } from '@/lib/schema';
import { ImageAsset, ServiceContent } from '@/lib/types';
import { site } from '@/lib/site';



type ServicePageTemplateProps = {
  service: ServiceContent;
};

const serviceHeroAssets: Record<string, ImageAsset> = {
  'ac-repair-tucson': {
    src: '/images/services/ac-repair-tucson-az-crest-air-technician-servicing-air-conditioner.webp',
    alt: 'Crest Air technician repairing an AC system in Tucson',
    title: 'AC Repair Tucson hero image',
    description: 'Hero image for the AC repair service page showing a Crest Air technician servicing outdoor equipment.',
    page: '/services/ac-repair-tucson',
    section: 'hero',
    href: '/services/ac-repair-tucson',
  },
  'ac-installation-tucson': {
    src: '/images/services/ac-installation-tucson-az-crane-lift-crest-air-hvac.webp',
    alt: 'Crest Air team performing an AC installation with a crane in Tucson',
    title: 'AC Installation Tucson hero image',
    description: 'Hero image for the AC installation service page showing equipment being lifted into place.',
    page: '/services/ac-installation-tucson',
    section: 'hero',
    href: '/services/ac-installation-tucson',
  },
  'heat-pump-tucson': {
    src: '/images/services/heat-pump-tucson-hero.webp',
    alt: 'Crest Air technician servicing a heat pump in Tucson',
    title: 'Heat pump service Tucson hero image',
    description: 'Hero image for the Tucson heat pump service page.',
    page: '/services/heat-pump-tucson',
    section: 'hero',
    href: '/services/heat-pump-tucson',
  },
  'thermostat-repair-tucson': {
    src: '/images/services/thermostat-repair-tucson-hero.webp',
    alt: 'Technician configuring a thermostat for a Tucson homeowner',
    title: 'Thermostat repair Tucson hero image',
    description: 'Hero image for the Tucson thermostat repair page.',
    page: '/services/thermostat-repair-tucson',
    section: 'hero',
    href: '/services/thermostat-repair-tucson',
  },
  'mini-split-tucson': {
    src: '/images/services/mini-split-tucson-hero.webp',
    alt: 'Crest Air technician discussing ductless comfort options in Tucson',
    title: 'Mini-split service Tucson hero image',
    description: 'Hero image for the Tucson mini-split and ductless service page.',
    page: '/services/mini-split-tucson',
    section: 'hero',
    href: '/services/mini-split-tucson',
  },

  'heating-tucson': {
    src: '/images/services/heating-tucson-az-crest-air-hvac.webp',
    alt: 'Crest Air technician inspecting heating equipment in Tucson',
    title: 'Heating service Tucson hero image',
    description: 'Hero image for the heating service page reinforcing winter support in Tucson.',
    page: '/services/heating-tucson',
    section: 'hero',
    href: '/services/heating-tucson',
  },
  'indoor-air-quality-tucson': {
    src: '/images/services/indoor-air-quality-tucson-hero.webp',
    alt: 'Homeowner reviewing indoor air quality solutions in Tucson',
    title: 'Indoor Air Quality Tucson hero image',
    description: 'Hero image for the indoor air quality service page focused on Tucson homes.',
    page: '/services/indoor-air-quality-tucson',
    section: 'hero',
    href: '/services/indoor-air-quality-tucson',
  },
  'duct-cleaning-tucson': {
    src: '/images/services/duct-cleaning-tucson/duct-cleaning-tucson-hero.webp',
    alt: 'Technician addressing ductwork airflow issues in Tucson',
    title: 'Duct cleaning Tucson hero image',
    description: 'Hero image for the duct cleaning and airflow page for Tucson service areas.',
    page: '/services/duct-cleaning-tucson',
    section: 'hero',
    href: '/services/duct-cleaning-tucson',
  },
  'hvac-maintenance-tucson': {
    src: '/images/services/hvac-maintenance-tucson/hvac-maintenance-tucson-hero.webp',
    alt: 'Crest Air technician performing HVAC maintenance in Tucson',
    title: 'HVAC maintenance Tucson hero image',
    description: 'Hero image supporting the HVAC maintenance service page for Tucson homeowners.',
    page: '/services/hvac-maintenance-tucson',
    section: 'hero',
    href: '/services/hvac-maintenance-tucson',
  },
  'emergency-hvac-repair-tucson': {
    src: '/images/services/emergency-hvac-repair-tucson-az-crest-air.webp',
    alt: 'Emergency HVAC repair response crew serving Tucson',
    title: 'Emergency HVAC repair Tucson hero image',
    description: 'Hero image for urgent HVAC repair requests across Tucson service areas.',
    page: '/services/emergency-hvac-repair-tucson',
    section: 'hero',
    href: '/services/emergency-hvac-repair-tucson',
  },
};

const serviceGalleryAssets: Record<string, ImageAsset[]> = {
  'ac-repair-tucson': [
    {
      src: '/images/services/ac-repair-tucson/ac-repair-tucson-customer-handoff.webp',
      alt: 'Technician handing off diagnostic notes to a Tucson homeowner',
      title: 'Customer briefing after diagnostics',
      description: 'Tech recaps refrigerant pressures and next steps for a Tucson homeowner.',
      page: '/services/ac-repair-tucson',
      section: 'gallery',
      href: '/services/ac-repair-tucson',
    },
    {
      src: '/images/services/ac-repair-tucson/ac-repair-tucson-multimeter-test.webp',
      alt: 'Close-up of a Crest Air technician testing components with a multimeter',
      title: 'Component testing',
      description: 'Metering out contactors and capacitors before ordering parts.',
      page: '/services/ac-repair-tucson',
      section: 'gallery',
      href: '/services/ac-repair-tucson',
    },
    {
      src: '/images/services/ac-repair-tucson/ac-repair-tucson-wiring-detail.webp',
      alt: 'Detailed wiring repair inside an outdoor condensing unit',
      title: 'Wiring detail repair',
      description: 'Tightening low-voltage wiring and replacing failing connectors.',
      page: '/services/ac-repair-tucson',
      section: 'gallery',
      href: '/services/ac-repair-tucson',
    },
    {
      src: '/images/services/ac-repair-tucson/ac-repair-tucson-homeowner-briefing.webp',
      alt: 'Technician reviewing options with a Tucson homeowner inside the living room',
      title: 'Repair options conversation',
      description: 'Homeowner reviews repair vs. replacement options before signing.',
      page: '/services/ac-repair-tucson',
      section: 'gallery',
      href: '/services/ac-repair-tucson',
    },
    {
      src: '/images/services/ac-repair-tucson/ac-repair-tucson-rooftop-package.webp',
      alt: 'Crew working on a rooftop package unit overlooking Tucson',
      title: 'Rooftop package unit repair',
      description: 'Team stabilizing a rooftop package unit near Broadway and Campbell.',
      page: '/services/ac-repair-tucson',
      section: 'gallery',
      href: '/services/ac-repair-tucson',
    },
  ],
  'ac-installation-tucson': [
    {
      src: '/images/services/ac-installation-tucson/ac-installation-tucson-hero-team.webp',
      alt: 'Crest Air installation crew unloading a new condenser',
      title: 'Installation crew arrival',
      description: 'Installers unloading equipment for a Tucson retrofit.',
      page: '/services/ac-installation-tucson',
      section: 'gallery',
      href: '/services/ac-installation-tucson',
    },
    {
      src: '/images/services/ac-installation-tucson/ac-installation-tucson-blueprint-review.webp',
      alt: 'Project manager reviewing load calculations and blueprints with a business owner',
      title: 'Load calculation review',
      description: 'Project manager reviewing duct and load calcs with stakeholders.',
      page: '/services/ac-installation-tucson',
      section: 'gallery',
      href: '/services/ac-installation-tucson',
    },
    {
      src: '/images/services/ac-installation-tucson/ac-installation-tucson-crane-rooftop.webp',
      alt: 'Crane lifting HVAC equipment onto a Tucson rooftop',
      title: 'Crane lift coordination',
      description: 'Coordinating crane lifts for rooftop replacements downtown.',
      page: '/services/ac-installation-tucson',
      section: 'gallery',
      href: '/services/ac-installation-tucson',
    },
    {
      src: '/images/services/ac-installation-tucson/ac-installation-tucson-attic-ductwork.webp',
      alt: 'Technician adjusting ductwork inside an attic',
      title: 'Ductwork adjustments',
      description: 'Attic adjustments to balance airflow before startup.',
      page: '/services/ac-installation-tucson',
      section: 'gallery',
      href: '/services/ac-installation-tucson',
    },
    {
      src: '/images/services/ac-installation-tucson/ac-installation-tucson-thermostat-setup.webp',
      alt: 'Installer setting up a smart thermostat after a system replacement',
      title: 'Thermostat commissioning',
      description: 'Technician programming comfort schedules post-install.',
      page: '/services/ac-installation-tucson',
      section: 'gallery',
      href: '/services/ac-installation-tucson',
    },
  ],
  'hvac-maintenance-tucson': [
    {
      src: '/images/services/hvac-maintenance-tucson/hvac-maintenance-tucson-checklist.webp',
      alt: 'Technician checking off a maintenance checklist',
      title: 'Seasonal maintenance checklist',
      description: 'Documenting each inspection point for Tucson tune-ups.',
      page: '/services/hvac-maintenance-tucson',
      section: 'gallery',
      href: '/services/hvac-maintenance-tucson',
    },
    {
      src: '/images/services/hvac-maintenance-tucson/hvac-maintenance-tucson-coil-cleaning.webp',
      alt: 'Technician cleaning condenser coils',
      title: 'Coil cleaning',
      description: 'Clearing dust and debris from coils before heat season.',
      page: '/services/hvac-maintenance-tucson',
      section: 'gallery',
      href: '/services/hvac-maintenance-tucson',
    },
    {
      src: '/images/services/hvac-maintenance-tucson/hvac-maintenance-tucson-attic-adjustment.webp',
      alt: 'Tech adjusting equipment inside an attic',
      title: 'Attic adjustments',
      description: 'Tightening panels and checking wiring in attic installs.',
      page: '/services/hvac-maintenance-tucson',
      section: 'gallery',
      href: '/services/hvac-maintenance-tucson',
    },
    {
      src: '/images/services/hvac-maintenance-tucson/hvac-maintenance-tucson-capacitor-swap.webp',
      alt: 'Replacing a failing capacitor during maintenance',
      title: 'Capacitor replacement',
      description: 'Preemptively swapping weak capacitors during tune-ups.',
      page: '/services/hvac-maintenance-tucson',
      section: 'gallery',
      href: '/services/hvac-maintenance-tucson',
    },
    {
      src: '/images/services/hvac-maintenance-tucson/hvac-maintenance-tucson-customer-log.webp',
      alt: 'Homeowner reviewing maintenance logs with technician',
      title: 'Maintenance log handoff',
      description: 'Sharing digital logs and photos with the homeowner.',
      page: '/services/hvac-maintenance-tucson',
      section: 'gallery',
      href: '/services/hvac-maintenance-tucson',
    },
  ],
  'duct-cleaning-tucson': [
    {
      src: '/images/services/duct-cleaning-tucson/duct-cleaning-tucson-vent-detail.webp',
      alt: 'Technician inspecting a supply vent for dust build-up',
      title: 'Vent detail inspection',
      description: 'Documenting dust build-up inside Tucson vents before cleaning.',
      page: '/services/duct-cleaning-tucson',
      section: 'gallery',
      href: '/services/duct-cleaning-tucson',
    },
    {
      src: '/images/services/duct-cleaning-tucson/duct-cleaning-tucson-vacuum-detail.webp',
      alt: 'Vacuum hose cleaning ductwork in an attic',
      title: 'Vacuum extraction',
      description: 'Sealed vacuum hoses clearing debris from attic duct runs.',
      page: '/services/duct-cleaning-tucson',
      section: 'gallery',
      href: '/services/duct-cleaning-tucson',
    },
    {
      src: '/images/services/duct-cleaning-tucson/duct-cleaning-tucson-duct-seal.webp',
      alt: 'Technician sealing duct joints with mastic',
      title: 'Duct sealing follow-up',
      description: 'Applying mastic to leaky joints after cleaning.',
      page: '/services/duct-cleaning-tucson',
      section: 'gallery',
      href: '/services/duct-cleaning-tucson',
    },
    {
      src: '/images/services/duct-cleaning-tucson/duct-cleaning-tucson-rooftop.webp',
      alt: 'Crew working on rooftop package unit duct connections',
      title: 'Rooftop duct support',
      description: 'Stabilizing rooftop duct transitions during cleaning.',
      page: '/services/duct-cleaning-tucson',
      section: 'gallery',
      href: '/services/duct-cleaning-tucson',
    },
    {
      src: '/images/services/duct-cleaning-tucson/duct-cleaning-tucson-vent-before-after.webp',
      alt: 'Before and after comparison of a cleaned supply vent',
      title: 'Before/after proof',
      description: 'Visual proof of dust removal shared with homeowners.',
      page: '/services/duct-cleaning-tucson',
      section: 'gallery',
      href: '/services/duct-cleaning-tucson',
    },
  ],
  'heat-pump-tucson': [
    {
      src: '/images/services/heat-pump-tucson-gallery-outdoor.webp',
      alt: 'Outdoor heat pump service in Tucson',
      title: 'Outdoor heat pump service',
      description: 'Technician servicing a Tucson heat pump outdoor unit.',
      page: '/services/heat-pump-tucson',
      section: 'gallery',
      href: '/services/heat-pump-tucson',
    },
    {
      src: '/images/services/heat-pump-tucson-gallery-thermostat.webp',
      alt: 'Thermostat adjustments for a Tucson heat pump system',
      title: 'Heat pump control adjustments',
      description: 'Fine-tuning thermostat settings on a Tucson heat pump system.',
      page: '/services/heat-pump-tucson',
      section: 'gallery',
      href: '/services/heat-pump-tucson',
    },
  ],
  'thermostat-repair-tucson': [
    {
      src: '/images/services/thermostat-repair-tucson-gallery-setup.webp',
      alt: 'Thermostat setup and testing in Tucson',
      title: 'Thermostat setup and testing',
      description: 'Technician testing thermostat operation and schedules.',
      page: '/services/thermostat-repair-tucson',
      section: 'gallery',
      href: '/services/thermostat-repair-tucson',
    },
    {
      src: '/images/services/thermostat-repair-tucson-gallery-adjust.webp',
      alt: 'Homeowner learning thermostat settings with a Crest Air technician',
      title: 'Comfort control walkthrough',
      description: 'Guided thermostat setup for better Tucson comfort control.',
      page: '/services/thermostat-repair-tucson',
      section: 'gallery',
      href: '/services/thermostat-repair-tucson',
    },
  ],
  'mini-split-tucson': [
    {
      src: '/images/services/mini-split-tucson-gallery-planning.webp',
      alt: 'Crest Air team handling equipment placement for new comfort systems',
      title: 'Ductless project planning',
      description: 'Planning a clean equipment layout for Tucson comfort upgrades.',
      page: '/services/mini-split-tucson',
      section: 'gallery',
      href: '/services/mini-split-tucson',
    },
    {
      src: '/images/services/mini-split-tucson-gallery-indoor.webp',
      alt: 'Indoor comfort consultation for a Tucson ductless system',
      title: 'Indoor zone comfort planning',
      description: 'Reviewing the best placement and airflow path for ductless comfort.',
      page: '/services/mini-split-tucson',
      section: 'gallery',
      href: '/services/mini-split-tucson',
    },
  ],
  'heating-tucson': [
    {
      src: '/images/services/heating-tucson/heating-tucson-furnace-inspection.webp',
      alt: 'Technician inspecting a gas furnace in a Tucson home',
      title: 'Furnace inspection',
      description: 'Checking heat exchanger and burner assembly during a winter tune-up.',
      page: '/services/heating-tucson',
      section: 'gallery',
      href: '/services/heating-tucson',
    },
    {
      src: '/images/services/heating-tucson/heating-tucson-heat-pump-outdoor.webp',
      alt: 'Crest Air tech servicing a heat pump outdoor unit in Tucson',
      title: 'Heat pump service',
      description: 'Servicing a heat pump outdoor unit for efficient winter heating in Tucson.',
      page: '/services/heating-tucson',
      section: 'gallery',
      href: '/services/heating-tucson',
    },
    {
      src: '/images/services/heating-tucson/heating-tucson-thermostat-adjust.webp',
      alt: 'Homeowner adjusting thermostat with technician guidance',
      title: 'Heating thermostat adjustment',
      description: 'Technician showing homeowner optimal heating settings for Tucson winters.',
      page: '/services/heating-tucson',
      section: 'gallery',
      href: '/services/heating-tucson',
    },
    {
      src: '/images/services/heating-tucson/heating-tucson-duct-insulation.webp',
      alt: 'Technician checking duct insulation in an attic for heat loss',
      title: 'Duct insulation check',
      description: 'Inspecting attic ductwork insulation to prevent heat loss during Tucson cold snaps.',
      page: '/services/heating-tucson',
      section: 'gallery',
      href: '/services/heating-tucson',
    },
  ],
  'indoor-air-quality-tucson': [
    {
      src: '/images/services/indoor-air-quality-tucson/indoor-air-quality-tucson-filter-upgrade.webp',
      alt: 'Technician installing a high-efficiency air filter in a Tucson home',
      title: 'Air filter upgrade',
      description: 'Upgrading to a MERV-13 filter for better dust and allergen control.',
      page: '/services/indoor-air-quality-tucson',
      section: 'gallery',
      href: '/services/indoor-air-quality-tucson',
    },
    {
      src: '/images/services/indoor-air-quality-tucson/indoor-air-quality-tucson-uv-light-install.webp',
      alt: 'Installing a UV air purification light inside an HVAC system',
      title: 'UV purification installation',
      description: 'Installing UV-C germicidal light inside the air handler for indoor air purification.',
      page: '/services/indoor-air-quality-tucson',
      section: 'gallery',
      href: '/services/indoor-air-quality-tucson',
    },
    {
      src: '/images/services/indoor-air-quality-tucson/indoor-air-quality-tucson-air-test.webp',
      alt: 'Technician testing indoor air quality with a particulate meter',
      title: 'Air quality testing',
      description: 'Using a particulate meter to measure dust and allergen levels before and after service.',
      page: '/services/indoor-air-quality-tucson',
      section: 'gallery',
      href: '/services/indoor-air-quality-tucson',
    },
    {
      src: '/images/services/indoor-air-quality-tucson/indoor-air-quality-tucson-whole-home-purifier.webp',
      alt: 'Crest Air tech installing a whole-home air purification system',
      title: 'Whole-home purifier install',
      description: 'Installing a whole-home air purification system in a Tucson residence.',
      page: '/services/indoor-air-quality-tucson',
      section: 'gallery',
      href: '/services/indoor-air-quality-tucson',
    },
  ],
  'emergency-hvac-repair-tucson': [
    {
      src: '/images/services/emergency-hvac-repair-tucson/emergency-hvac-repair-tucson-truck-arrival.webp',
      alt: 'Emergency HVAC truck arriving at night',
      title: 'Emergency truck arrival',
      description: 'Night dispatch arriving with headlamps and stocked truck.',
      page: '/services/emergency-hvac-repair-tucson',
      section: 'gallery',
      href: '/services/emergency-hvac-repair-tucson',
    },
    {
      src: '/images/services/emergency-hvac-repair-tucson/emergency-hvac-repair-tucson-homeowner-brief.webp',
      alt: 'Technician speaking with a homeowner during an emergency visit',
      title: 'Homeowner briefing',
      description: 'Explaining steps before emergency diagnostics start.',
      page: '/services/emergency-hvac-repair-tucson',
      section: 'gallery',
      href: '/services/emergency-hvac-repair-tucson',
    },
    {
      src: '/images/services/emergency-hvac-repair-tucson/emergency-hvac-repair-tucson-night-headlamp.webp',
      alt: 'Night repair with technician using a headlamp',
      title: 'Night repair in progress',
      description: 'Tech working through the night with headlamps and safety gear.',
      page: '/services/emergency-hvac-repair-tucson',
      section: 'gallery',
      href: '/services/emergency-hvac-repair-tucson',
    },
    {
      src: '/images/services/emergency-hvac-repair-tucson/emergency-hvac-repair-tucson-truck-prep.webp',
      alt: 'Crew prepping emergency gear at the truck',
      title: 'Gear prep',
      description: 'Crew prepping parts and tools at the truck before climbing ladders.',
      page: '/services/emergency-hvac-repair-tucson',
      section: 'gallery',
      href: '/services/emergency-hvac-repair-tucson',
    },
    {
      src: '/images/services/emergency-hvac-repair-tucson/emergency-hvac-repair-tucson-night-repair.webp',
      alt: 'Technician repairing rooftop unit at night',
      title: 'Rooftop emergency repair',
      description: 'Stabilizing a rooftop unit during a night outage.',
      page: '/services/emergency-hvac-repair-tucson',
      section: 'gallery',
      href: '/services/emergency-hvac-repair-tucson',
    },
  ],
};

const getServiceHeroAsset = (slug: string): ImageAsset => {
  const asset = serviceHeroAssets[slug];
  if (!asset) {
    throw new Error(`Missing hero image asset for service slug: ${slug}`);
  }
  return asset;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const sourcePage = `/services/${service.slug}`;
  const heroImage = getServiceHeroAsset(service.slug);
  const galleryImages = serviceGalleryAssets[service.slug] || [];
  const serviceSchema = buildServiceSchema(service);
  const faqSchema = buildFaqSchema(service.faqs);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <JsonLd data={serviceSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <AnimatedPage>
      <HeroSection
        eyebrow={`${service.location} · ${service.title}`}
        title={service.problemHeadline}
        body={service.problemDescription}
        primaryLabel="Book Now (Same-Day Service)"
        primaryHref="#request-service"
        secondaryLabel="Call Now for Priority Dispatch"
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: service.slug, location: 'tucson-az', pageType: 'service' }}
        image={heroImage}
        imageSizes="(min-width: 1024px) 45vw, 100vw"
        ctaSubline="Same-day service available in Tucson"
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Immediate Response</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Same-day {service.title}</h2>
          <p className="mt-4 text-slate-700">Our Tucson dispatch team confirms your arrival window, sends tech updates, and keeps communication tight from booking through follow-up so comfort comes back fast.</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Phone-first option</p>
          <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{site.phone}</p>
          <p className="mt-3 text-slate-200">Call now for diagnostics, service planning, and fast scheduling help.</p>
        </div>
      </section>

      <ServiceConversionSection
        sourcePage={sourcePage}
        serviceType={service.slug}
        location="tucson-az"
        pageType="service"
        title={service.title}
        callCtaId={`${service.slug}-top-call`}
        formCtaId={`${service.slug}-top-form`}
      />

      {galleryImages.length ? (
        <section className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((asset) => (
            <ImageCard key={asset.src} asset={asset} />
          ))}
        </section>
      ) : null}

      <section className="space-y-4 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Overview</h2>
        {service.overview.map((paragraph) => <p key={paragraph} className="text-slate-700">{paragraph}</p>)}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Signs you need this service</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.signs.map((item) => <li key={item}>• {item}</li>)}</ul>
          <Link href={service.serviceAreas[0]?.href || '/'} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">See local service coverage</Link>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Benefits</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.benefits.map((item) => <li key={item}>• {item}</li>)}</ul>
          {service.relatedServices[0] ? (
            <Link href={service.relatedServices[0].href} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">
              Explore related service
            </Link>
          ) : null}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">What We Do</p>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">What’s included with {service.title}</h2>
        <ul className="mt-4 space-y-3 text-slate-700">{service.whatsIncluded.map((item) => <li key={item}>• {item}</li>)}</ul>
      </section>

      <CTASection
        heading={service.cta.heading}
        body={service.cta.body}
        primaryLabel={service.cta.primaryLabel}
        primaryHref={service.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: service.slug, location: 'tucson-az', pageType: 'service' }}
      />

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Process</h2>
        <ol className="mt-4 space-y-3 text-slate-700">{service.process.map((step, index) => <li key={step}>{index + 1}. {step}</li>)}</ol>
      </section>

      <section className="grid gap-6 rounded-3xl bg-[#041B34] p-8 text-white shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Licensed · Insured · Local</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">{service.trustLine}</h2>
          <p className="mt-3 text-slate-200">Same-day scheduling across Tucson with technicians who respect your home and walk you through every decision.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Tucson testimonial</p>
          <p className="mt-3 text-xl font-semibold text-white">“{service.testimonial.quote}”</p>
          <p className="mt-4 text-sm text-slate-200">— {service.testimonial.name}, {service.testimonial.area}</p>
        </div>
      </section>

      <CTASection
        heading={`Need ${service.title} today?`}
        body="Call now or book online to lock in a same-day visit before schedules fill."
        primaryLabel={service.cta.primaryLabel}
        primaryHref={service.cta.primaryHref}
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: service.slug, location: 'tucson-az', pageType: 'service' }}
      />

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Financing Support</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Need a bigger fix? Ask about financing.</h2>
          <p className="mt-4 text-slate-700">{service.financingNote}</p>
          <Link href={service.financingLink.href} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">{service.financingLink.label}</Link>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Maintenance Plans</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Prevent future breakdowns with maintenance plans.</h2>
          <p className="mt-4 text-slate-700">{service.maintenanceNote}</p>
          <Link href={service.maintenanceLink.href} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 transition hover:text-[#F4911D] hover:decoration-[#F4911D]">{service.maintenanceLink.label}</Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Related Services</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.relatedServices.map((link) => <li key={link.href}><Link className="underline transition hover:text-[#F4911D]" href={link.href}>{link.label}</Link></li>)}</ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Service Areas</h2>
          <ul className="mt-4 space-y-3 text-slate-700">{service.serviceAreas.map((link) => <li key={link.href}><Link className="underline transition hover:text-[#F4911D]" href={link.href}>{link.label}</Link></li>)}</ul>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />

      <CTASection
        heading={`Call Now or Book Online for ${service.title}`}
        body="Same-day service available in Tucson—lock in your visit before the schedule fills."
        primaryLabel="Call Now or Book Online"
        primaryHref="#request-service"
        secondaryLabel={`Call ${site.phone}`}
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage, serviceType: service.slug, location: 'tucson-az', pageType: 'service' }}
      />
      </AnimatedPage>
    </div>
  );
}
