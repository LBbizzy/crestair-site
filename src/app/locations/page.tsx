import Link from 'next/link';
import { locations } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'HVAC Service Areas Tucson | Crest Air',
    description: 'Browse Crest Air service areas around Tucson, including Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley, and nearby communities.',
    keywords: ['hvac service areas tucson', 'tucson hvac locations', 'crest air service areas'],
  },
  '/locations',
);

export default function LocationsIndexPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10">
      <section className="rounded-3xl bg-slate-950 px-6 py-14 text-white shadow-xl md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Service Areas</p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">Where Crest Air provides HVAC service across the Tucson area</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
          Browse Tucson-area location pages to find local HVAC coverage, nearby communities, and links to the most relevant Crest Air services.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">All Locations</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Browse every Tucson-area service page</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <article key={location.slug} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#041B34] hover:shadow-md">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-slate-950">{location.city}, AZ</h3>
              <p className="mt-3 text-slate-700">{location.meta.description}</p>
              <Link
                href={`/locations/${location.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#041B34] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B3158]"
              >
                Explore Location
                <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Need service outside Tucson city limits?</h2>
        <p className="mt-4 max-w-2xl text-slate-700">
          If your community is nearby and not listed yet, contact Crest Air. We can confirm coverage and route you to the right technician.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F4911D] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#D97F16]"
          >
            Check Availability
          </Link>
          <a
            href="tel:(520) 751-8888"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-semibold text-[#041B34] transition hover:border-[#041B34]"
          >
            Call (520) 751-8888
          </a>
        </div>
      </section>
    </div>
  );
}
