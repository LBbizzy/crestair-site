import { ServiceConversionSection } from '@/components/ServiceConversionSection';

type FunnelPageProps = {
  title: string;
  offer: string;
  urgency: string;
  trustPoints: string[];
  sourcePage: string;
  serviceType: string;
  funnelIdentifier: string;
};

export function FunnelPage({ title, offer, urgency, trustPoints, sourcePage, serviceType, funnelIdentifier }: FunnelPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-[#041B34] px-6 py-14 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Limited-Distraction Funnel</p>
            <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{offer}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4">Fast response path</div>
              <div className="rounded-2xl bg-white/10 p-4">Phone-first CTA priority</div>
              <div className="rounded-2xl bg-white/10 p-4">Clear next-step request</div>
            </div>
          </div>
          <ServiceConversionSection
            sourcePage={sourcePage}
            serviceType={serviceType}
            location="tucson-az"
            pageType="funnel"
            funnelIdentifier={funnelIdentifier}
            title={title}
            callCtaId={`${funnelIdentifier}-hero-call`}
            formCtaId={`${funnelIdentifier}-hero-form`}
            contextLabel="landing page"
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Urgency</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">Why people convert here</h2>
          <p className="mt-4 text-slate-700">{urgency}</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm md:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Trust Stack</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">Reduce hesitation fast</h2>
          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </article>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pb-10">
        <ServiceConversionSection
          sourcePage={sourcePage}
          serviceType={serviceType}
          location="tucson-az"
          pageType="funnel"
          funnelIdentifier={funnelIdentifier}
          title={title}
          callCtaId={`${funnelIdentifier}-mid-call`}
          formCtaId={`${funnelIdentifier}-mid-form`}
          contextLabel="landing page"
        />
      </div>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-10 md:grid-cols-3">
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Reviews</h2>
          <p className="mt-4 text-slate-700">★★★★★ Trusted local service presentation focused on quick decision support.</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Guarantee Framing</h2>
          <p className="mt-4 text-slate-700">Clear next-step help, faster response language, and reduced conversion friction.</p>
        </article>
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Phone-First</h2>
          <p className="mt-4 text-slate-700">Direct call CTA remains visible while the form path captures campaign-ready leads.</p>
        </article>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16">
        <ServiceConversionSection
          sourcePage={sourcePage}
          serviceType={serviceType}
          location="tucson-az"
          pageType="funnel"
          funnelIdentifier={funnelIdentifier}
          title={title}
          callCtaId={`${funnelIdentifier}-final-call`}
          formCtaId={`${funnelIdentifier}-final-form`}
          contextLabel="landing page"
        />
      </div>
    </div>
  );
}
