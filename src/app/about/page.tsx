import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = buildMetadata(
  {
    title: 'About Crest Air',
    description:
      'Crest Air is a Marine Corps veteran-owned Tucson HVAC company founded in 2016, locally owned and operated, licensed and insured, and serving residential and light commercial customers across the Tucson area.',
    keywords: [
      'about crest air',
      'marine corps veteran owned hvac tucson',
      'tucson hvac company',
      'arizona roc 343786',
      'same-day hvac service tucson',
    ],
    image: '/images/home/home-hero-crest-air-team-tucson.webp',
  },
  '/about',
);

const credentials = [
  'Arizona ROC License #343786',
  'BBB rated A+',
  'Licensed and insured',
  'NATE-certified technicians',
  'EPA-certified technicians',
  'Authorized York dealer',
];

const brands = ['York', 'Trane', 'Lennox', 'Goodman', 'Daikin', 'Day & Night'];

const serviceAreas = [
  'Tucson',
  'Oro Valley',
  'Marana',
  'Sahuarita',
  'Green Valley',
  'Vail',
  'Catalina Foothills',
  'South Tucson',
  'Drexel Heights',
  'Flowing Wells',
];

const trustSignals = [
  'Marine Corps veteran-owned',
  'Licensed and insured',
  'Background-checked technicians',
  'Same-day service available',
  '4.9 stars and 240+ Google reviews',
  'Residential and light commercial HVAC service',
];

export default function AboutPage() {
  return (
    <AnimatedPage>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10">
        <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
          <div className="grid gap-8 px-6 py-14 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">About Crest Air</p>
              <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">
                Marine Corps veteran-owned HVAC service for Tucson homes and light commercial properties
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Crest Air is a Marine Corps veteran-owned Tucson HVAC company founded in 2016, locally owned and operated, and focused on residential and light commercial service across Southern Arizona. The company provides same-day service, licensed and insured support, and installation options for homeowners and businesses that need dependable heating and cooling help.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Quick facts</p>
              <dl className="mt-4 space-y-4 text-sm text-slate-200">
                <div>
                  <dt className="font-semibold text-white">Founded</dt>
                  <dd>2016 in Tucson, Arizona</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Service focus</dt>
                  <dd>Residential and light commercial HVAC</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Google reviews</dt>
                  <dd>4.9 stars and 240+ reviews</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Availability</dt>
                  <dd>Same-day service available</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Credentials</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Licensed, certified, and trusted in Tucson</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {credentials.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Brands installed</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Systems Crest Air installs</h2>
            <p className="mt-5 text-slate-700">
              Crest Air is an authorized York dealer and also installs Trane, Lennox, Goodman, Daikin, and Day & Night systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span key={brand} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#041B34]">
                  {brand}
                </span>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Service area</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Serving Tucson and surrounding communities</h2>
          <p className="mt-5 text-slate-700">
            Crest Air serves Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Catalina Foothills, South Tucson, Drexel Heights, and Flowing Wells.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#041B34]">
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Why homeowners choose Crest Air</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Trust signals that matter before you schedule service</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {trustSignals.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <aside className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Need service now?</p>
            <p className="mt-3 text-slate-700">
              Contact Crest Air to request same-day HVAC service, schedule an estimate, or talk through repair and replacement options.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]">
                Schedule Service
              </Link>
              <CallTrackedLink
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#041B34] transition hover:border-[#66CFEF] hover:text-[#F4911D]"
                sourcePage="/about"
                serviceType="about-page"
                location="tucson-az"
                pageType="about"
                dataCtaId="about-call"
              >
                Call {site.phone}
              </CallTrackedLink>
            </div>
          </aside>
        </section>
      </div>
    </AnimatedPage>
  );
}
