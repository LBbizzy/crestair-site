import { ServiceConversionSection } from '@/components/ServiceConversionSection';

type CommercialServicePageProps = {
  title: string;
  description: string;
  intro: string;
  audience: string[];
  needs: string[];
  sourcePage: string;
  serviceType: string;
  callCtaId: string;
  formCtaId: string;
};

export function CommercialServicePage({
  title,
  description,
  intro,
  audience,
  needs,
  sourcePage,
  serviceType,
  callCtaId,
  formCtaId,
}: CommercialServicePageProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10">
      <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-16 md:px-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">Commercial HVAC</p>
            <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
          </div>
          <div className="flex min-h-[320px] items-end bg-[linear-gradient(135deg,#041B34,#0B3158)] p-8 text-slate-200">
            <p className="max-w-sm text-base leading-7">Separate commercial service track for business owners, property managers, and facility operators who need uptime, faster decision-making, and clearer service coordination.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4911D]">Commercial Focus</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-950">Built for facility needs, not residential messaging</h2>
          <p className="mt-4 text-slate-700">{intro}</p>
        </div>
        <div className="rounded-2xl bg-[#041B34] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">What matters here</p>
          <ul className="mt-4 space-y-3 text-slate-200">
            {needs.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Who this page is for</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">Operational priorities</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Faster diagnosis and dispatch communication</li>
            <li>• Clearer planning around downtime and tenant impact</li>
            <li>• Service paths that respect business continuity</li>
            <li>• Conversion tracking separated from residential campaigns</li>
          </ul>
        </div>
      </section>

      <ServiceConversionSection
        sourcePage={sourcePage}
        serviceType={serviceType}
        location="tucson-az"
        pageType="commercial-service"
        title={title}
        callCtaId={callCtaId}
        formCtaId={formCtaId}
      />
    </div>
  );
}
