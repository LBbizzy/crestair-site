import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { HeroSection } from '@/components/HeroSection';
import { LocationGrid } from '@/components/LocationGrid';
import { ServiceCard } from '@/components/ServiceCard';
import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { BlogCard } from '@/components/BlogCard';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { SiteImage } from '@/components/SiteImage';
import { site } from '@/lib/site';
import { services } from '@/content/services';
import { blogPosts } from '@/content/blog';
import { locations } from '@/content/locations';
import { ImageAsset } from '@/lib/types';

const homeHeroImage: ImageAsset = {
  src: '/images/home/ac-repair-tucson-az-crest-air-hvac-service.webp',
  alt: 'Crest Air technician providing air conditioning repair service in Tucson, Arizona',
  title: 'AC repair technician serving Tucson home',
  description: 'Homepage hero image showing a Crest Air technician servicing an AC system for the Tucson offer.',
  page: 'home',
  section: 'hero',
};

const homeWorkflowImages: ImageAsset[] = [
  {
    src: '/images/home/home-team-prep.png',
    alt: 'Crest Air commercial team prepping vans and gear outside a Tucson home',
    title: 'Team preparing for split-route dispatch',
    description: 'Crew preparing vans with gauges, hoses, and safety gear for multiple Tucson calls.',
    page: 'home',
    section: 'gallery-workflow',
  },
  {
    src: '/images/home/home-services-team-install.png',
    alt: 'Technicians installing a new condenser for a Tucson homeowner',
    title: 'Installation and retrofit workflow',
    description: 'Two Crest Air installers setting a new outdoor unit and aligning refrigerant lines.',
    page: 'home',
    section: 'gallery-workflow',
  },
  {
    src: '/images/home/home-cta-tech-homeowner-plan.png',
    alt: 'Technician reviewing repair options with a Tucson homeowner at the kitchen table',
    title: 'Consultation and documentation',
    description: 'Technician showing photos and repair options to a homeowner before work begins.',
    page: 'home',
    section: 'gallery-workflow',
  },
];

const homeEmergencyImages: ImageAsset[] = [
  {
    src: '/images/home/home-emergency-night-response.png',
    alt: 'Emergency HVAC crew arriving at night with a service van',
    title: 'Night emergency response',
    description: 'Crest Air night crew responding to a no-cool alert after sunset.',
    page: 'home',
    section: 'gallery-emergency',
  },
  {
    src: '/images/home/home-rooftop-crew-tuneup.png',
    alt: 'Technicians tuning a rooftop unit above a Tucson shopping center',
    title: 'Rooftop maintenance crew',
    description: 'Field team stabilizing a rooftop package unit before peak afternoon heat.',
    page: 'home',
    section: 'gallery-emergency',
  },
  {
    src: '/images/home/home-trust-crew-meeting.png',
    alt: 'Crest Air supervisors reviewing schedules with technicians',
    title: 'Daily trust huddle',
    description: 'Supervisors reviewing project timelines and technician assignments for the day.',
    page: 'home',
    section: 'gallery-emergency',
  },
];

const homepageReviews = [
  { quote: 'Crest Air had a technician at our Oro Valley home in under two hours and the AC was cooling again that afternoon.', name: 'Jenna R.', city: 'Oro Valley' },
  { quote: 'They explained my repair options, gave honest pricing, and even followed up that evening to make sure the house stayed cool.', name: 'Marcus L.', city: 'Tucson' },
  { quote: 'Same-day service during a 108° day saved us. The tech was professional, tidy, and respected our budget.', name: 'Elena P.', city: 'Vail' },
];

const homepageBadges = [
  { title: '4.9 ★ Google Rating', body: '240+ Tucson homeowner reviews' },
  { title: 'Financing Available', body: 'Flexible plans for repairs or installs' },
  { title: 'Background-Checked Techs', body: 'NATE-trained & Crest Air employees' },
];

const expandedServices = [
  ...services.map((service) => ({ title: service.title, description: service.intro, href: `/services/${service.slug}` })),
  {
    title: 'Indoor Air Quality',
    description: 'Cut dust and allergy triggers with better filtration, purification, and cleaner indoor airflow.',
    href: '/blog',
  },
  {
    title: 'Maintenance Plans',
    description: 'Protect your system with seasonal tune-ups, full inspections, and reminders before the desert heat arrives.',
    href: '/blog',
  },
  {
    title: 'Duct Cleaning & Airflow',
    description: 'Balance room temperatures and airflow with professional duct cleaning and sealing.',
    href: '/blog',
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10">
      <HeroSection
        eyebrow="Tucson HVAC Company"
        title="Tucson AC Not Cooling? We Fix It Today."
        body="Same-day Tucson technicians restore cold air fast with honest pricing, clear repair options, and dependable follow-up communication."
        primaryLabel="Book Now (Same-Day Service)"
        primaryHref="/contact"
        secondaryLabel="Call Now for Priority Dispatch"
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/', serviceType: 'general-hvac', location: 'tucson-az', pageType: 'home' }}
        image={homeHeroImage}
        imagePriority
        imageSizes="(min-width: 1024px) 45vw, 100vw"
        ctaSubline="Same-day service available in Tucson"
      />

      <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trusted in Tucson</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Neighbors see same-day results</h2>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-2" role="region" aria-label="Customer reviews">
          {homepageReviews.map((review) => (
            <article key={review.quote} className="min-w-[260px] snap-start rounded-2xl border border-slate-200 p-5 shadow-sm">
              <p className="text-lg font-semibold text-[#041B34]">“{review.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">{review.name} · {review.city}</p>
            </article>
          ))}
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center text-sm font-semibold text-slate-700">
          Licensed • Insured • Same-Day Service • Tucson Local Experts
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {homepageBadges.map((badge) => (
            <article key={badge.title} className="rounded-2xl border border-slate-200 p-5">
              <p className="text-base font-semibold text-[#041B34]">{badge.title}</p>
              <p className="mt-2 text-sm text-slate-600">{badge.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl bg-white p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
        {homeWorkflowImages.map((asset) => (
          <figure key={asset.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:shadow-lg">
            <SiteImage asset={asset} width={640} height={420} className="h-64 w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
            <figcaption className="px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-[#041B34]">{asset.title}</p>
              <p className="text-slate-600">{asset.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Immediate Help</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Need cooling help before the Tucson heat gets worse?</h2>
          <p className="mt-4 text-slate-700">
            Crest Air dispatches same-day repair first, then routes you into installation, maintenance, or location-specific help so Tucson homeowners never guess who to call.
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
        heading="Stop a no-cool emergency before tonight"
        body="Reserve a Crest Air technician now before the schedule fills. Same-day appointments keep Tucson homes cool when the desert heat spikes."
        primaryLabel="Book Now – Hold My Slot"
        primaryHref="/contact"
        secondaryLabel="Call Now for Priority Dispatch"
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/', serviceType: 'general-hvac', location: 'tucson-az', pageType: 'home' }}
      />

      <section className="grid gap-6 rounded-3xl bg-[#041B34] p-8 text-white shadow-sm md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Trust Signal</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">Trusted by Tucson homeowners</h2>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="text-2xl font-bold text-[#F4911D]">4.9 ★</p>
          <p className="mt-2 text-slate-200">Average Google rating with same-day response praised across Tucson.</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-5">
          <p className="font-semibold">Licensed, insured, and Tucson local</p>
          <p className="mt-2 text-slate-200">Every technician arrives uniformed, background-checked, and ready for same-day repair.</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3">
        {homeEmergencyImages.map((asset) => (
          <figure key={asset.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <SiteImage asset={asset} width={640} height={420} className="h-64 w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
            <figcaption className="px-4 py-3 text-sm text-slate-700">
              <p className="font-semibold text-[#041B34]">{asset.title}</p>
              <p className="text-slate-600">{asset.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust & Proof</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Why Tucson homeowners trust Crest Air</h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>Same-day AC repair appointments with real-time status updates</li>
            <li>Transparent pricing before any work starts</li>
            <li>Local team that covers Tucson, Oro Valley, Vail, Sahuarita, and more</li>
            <li>Licensed, insured technicians who respect your home</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Fast response and clear communication.”</p>
            <p className="mt-2 text-sm text-slate-600">“They texted when the technician was on the way and finished the repair in one visit.”</p>
          </article>
          <article className="rounded-2xl border border-slate-200 p-5">
            <p className="font-semibold text-[#041B34]">“Helpful recommendations without pressure.”</p>
            <p className="mt-2 text-sm text-slate-600">“The tech explained repair vs. replace options so we could choose what fit our budget.”</p>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Area Coverage</p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Serving Tucson and surrounding communities</h2>
        <p className="max-w-3xl text-slate-700">
          From Catalina Foothills to Sahuarita, Crest Air covers every major Tucson neighborhood with the same pricing transparency and same-day response.
        </p>
        <LocationGrid locations={locations.map((location) => ({ href: `/locations/${location.slug}`, label: location.title }))} />
      </section>

      <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Blog Updates</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Latest insights from the Crest Air blog</h2>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 md:inline-flex">View all posts</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 6).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Link href="/blog" className="inline-flex text-sm font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4 md:hidden">View all posts</Link>
      </section>

      <CTASection
        heading="Need HVAC support in Tucson right now?"
        body="Jump straight into Crest Air’s Tucson hub to book online or tap the AC repair path for immediate dispatch help."
        primaryLabel="Book Now – Tucson HVAC"
        primaryHref="/locations/tucson-az"
        secondaryLabel="Call Now for AC Repair"
        secondaryHref={`tel:${site.phone}`}
        secondaryCallTracking={{ sourcePage: '/', serviceType: 'general-hvac', location: 'tucson-az', pageType: 'home' }}
      />

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Contact Crest Air</p>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Talk to Crest Air today</h2>
        <p className="mt-4 text-slate-700">Phone: {site.phone} · Email: {site.email}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <CallTrackedLink className="inline-flex rounded-full bg-[#041B34] px-6 py-3 font-semibold text-white" sourcePage="home-contact" serviceType="general-hvac" location="tucson-az" pageType="home" dataCtaId="home-contact-call">
            Call Now
          </CallTrackedLink>
          <Link href="/contact" className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#041B34]">
            Call Now or Book Online
          </Link>
        </div>
        <p className="mt-3 text-sm font-semibold text-[#66CFEF]">Same-day service available in Tucson.</p>
      </section>
    </div>
  );
}
