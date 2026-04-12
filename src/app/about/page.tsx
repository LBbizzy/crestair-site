import { AnimatedPage } from '@/components/AnimatedPage';
import Link from 'next/link';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { buildMetadata } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata = buildMetadata(
  {
    title: 'About Crest Air',
    description:
      'Learn about Crest Air, a Tucson HVAC company serving homeowners and businesses with licensed service, Arizona ROC #343786, and technicians trained for repair, replacement, and maintenance.',
    keywords: ['about crest air', 'crest air tucson', 'tucson hvac company', 'arizona roc 343786'],
    image: '/images/home/home-hero-crest-air-team-tucson.webp',
  },
  '/about',
);

const serviceAreaLinks = [
  { href: '/locations/tucson-az', label: 'Tucson' },
  { href: '/locations/oro-valley-az', label: 'Oro Valley' },
  { href: '/locations/marana-az', label: 'Marana' },
  { href: '/locations/vail-az', label: 'Vail' },
  { href: '/locations/green-valley-az', label: 'Green Valley' },
  { href: '/locations/sahuarita-az', label: 'Sahuarita' },
];

const teamPoints = [
  'Crest Air routes Tucson homeowners and businesses into the right repair, installation, maintenance, and commercial service path instead of forcing every job through the same message.',
  'The site copy consistently describes licensed, insured, background-checked Crest Air employees, not anonymous subcontractor filler.',
  'Homepage trust proof calls out NATE-trained technicians, and maintenance content references NATE-certified technicians who understand desert system stress, airflow, and year-round performance in Southern Arizona.',
  'The company covers residential service, commercial HVAC work, emergency response, financing conversations, and location-based service pages across the Tucson area.',
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
                Tucson HVAC support built around licensed service, clear communication, and real local coverage
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Crest Air serves Tucson-area homeowners and businesses with HVAC repair, installation, maintenance, indoor air quality work, and commercial support. The company operates from Tucson, covers surrounding communities, and presents a cleaner path for customers who need fast answers instead of generic HVAC marketing fluff.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Company snapshot</p>
              <dl className="mt-4 space-y-4 text-sm text-slate-200">
                <div>
                  <dt className="font-semibold text-white">Business name</dt>
                  <dd>{site.legalName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Phone</dt>
                  <dd>{site.phone}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Arizona ROC license</dt>
                  <dd>ROC #{site.rocNumber}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Primary service area</dt>
                  <dd>Tucson and surrounding communities in Southern Arizona</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">What the repo confirms today</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">A real Tucson HVAC company with trust signals tied to service delivery</h2>
            <div className="mt-5 space-y-4 text-slate-700">
              <p>
                Crest Air is positioned in the site as a Tucson HVAC company focused on same-day repair conversations, replacement planning, maintenance, and commercial coordination. Instead of thin brochure copy, the strongest pages emphasize routing customers to the right next step, documenting service options clearly, and covering the broader Tucson area with dedicated service and location pages.
              </p>
              <p>
                The repo also supports meaningful trust language. Homepage and service content reference licensed and insured technicians, background-checked Crest Air employees, and NATE-trained or NATE-certified technical staff. That gives the About page enough verified substance to describe how the team works without inventing awards, fake bios, or filler claims.
              </p>
            </div>
          </article>
          <aside className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Need service now?</p>
            <p className="mt-3 text-slate-700">
              If your AC is down, airflow is weak, or you need help deciding between repair and replacement, call Crest Air directly.
            </p>
            <CallTrackedLink
              className="mt-6 inline-flex rounded-full bg-[#041B34] px-6 py-3 font-semibold text-white transition hover:bg-[#0B3158]"
              sourcePage="/about"
              serviceType="about-page"
              location="tucson-az"
              pageType="about"
              dataCtaId="about-call"
            >
              Call {site.phone}
            </CallTrackedLink>
          </aside>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Team and training</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">How Crest Air presents its team</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {teamPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Service area summary</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Coverage across Tucson and nearby communities</h2>
            <p className="mt-5 text-slate-700">
              Crest Air’s service-area footprint in the repo includes Tucson, Oro Valley, Marana, Vail, Green Valley, Sahuarita, Catalina Foothills, South Tucson, Drexel Heights, and Flowing Wells. That local coverage supports homeowners, property managers, and commercial clients who need a Tucson-first HVAC company with nearby reach.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {serviceAreaLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#041B34] transition hover:border-[#66CFEF] hover:text-[#F4911D]">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Explore Crest Air</p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Helpful next steps</h2>
            <div className="mt-5 grid gap-3">
              <Link href="/services/ac-repair-tucson" className="rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-[#041B34] transition hover:border-[#66CFEF] hover:text-[#F4911D]">AC Repair in Tucson</Link>
              <Link href="/services/ac-installation-tucson" className="rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-[#041B34] transition hover:border-[#66CFEF] hover:text-[#F4911D]">AC Installation in Tucson</Link>
              <Link href="/services/hvac-maintenance-tucson" className="rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-[#041B34] transition hover:border-[#66CFEF] hover:text-[#F4911D]">HVAC Maintenance</Link>
              <Link href="/commercial" className="rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-[#041B34] transition hover:border-[#66CFEF] hover:text-[#F4911D]">Commercial HVAC</Link>
            </div>
          </article>
        </section>
      </div>
    </AnimatedPage>
  );
}
