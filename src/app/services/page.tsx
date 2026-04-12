import Link from 'next/link';
import { services } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServiceCard } from '@/components/ServiceCard';

export const metadata = buildMetadata(
  {
    title: 'HVAC Services Tucson | Crest Air',
    description: 'Browse Crest Air HVAC services in Tucson, including AC repair, installation, heating, maintenance, indoor air quality, duct cleaning, and emergency service.',
    keywords: ['hvac services tucson', 'ac repair tucson', 'crest air services'],
  },
  '/services',
);

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10">
      <section className="rounded-3xl bg-slate-950 px-6 py-14 text-white shadow-xl md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Crest Air Services</p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">Tucson HVAC services for repair, replacement, and year-round comfort</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
          Explore Crest Air service pages for cooling, heating, indoor air quality, and maintenance across Tucson-area homes.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">All Services</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Browse every HVAC service page</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.meta.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Need help choosing the right service?</h2>
        <p className="mt-4 max-w-2xl text-slate-700">
          If you are dealing with a no-cool emergency, planning a replacement, or comparing maintenance options, Crest Air can point you to the right next step fast.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#F4911D] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#D97F16]"
          >
            Request Service
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
