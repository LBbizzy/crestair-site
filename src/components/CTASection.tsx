import Link from 'next/link';
import { CTA } from '@/lib/types';
import { CallTrackedLink } from '@/components/CallTrackedLink';

type CTASectionProps = CTA & {
  subline?: string;
  secondaryCallTracking?: {
    sourcePage: string;
    serviceType: string;
    location: string;
    pageType: string;
    funnelIdentifier?: string;
  };
};

export function CTASection({ heading, body, primaryLabel, primaryHref, primaryId, secondaryLabel, secondaryHref, secondaryId, secondaryCallTracking, subline }: CTASectionProps) {
  return (
    <section className="rounded-3xl bg-[#041B34] px-6 py-12 text-white md:px-10">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">{heading}</h2>
      <p className="mt-4 max-w-2xl text-slate-200">{body}</p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Link data-cta-id={primaryId} href={primaryHref} className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]">{primaryLabel}</Link>
        {secondaryLabel && secondaryHref ? (
          secondaryHref.startsWith('tel:') && secondaryCallTracking ? (
            <CallTrackedLink
              className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
              sourcePage={secondaryCallTracking.sourcePage}
              serviceType={secondaryCallTracking.serviceType}
              location={secondaryCallTracking.location}
              pageType={secondaryCallTracking.pageType}
              funnelIdentifier={secondaryCallTracking.funnelIdentifier}
              dataCtaId={secondaryId}
            >
              {secondaryLabel}
            </CallTrackedLink>
          ) : (
            <Link data-cta-id={secondaryId} href={secondaryHref} className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white">{secondaryLabel}</Link>
          )
        ) : null}
      </div>
      <p className="mt-2 text-sm font-semibold text-[#66CFEF]">{subline ?? "Same-day service available in Tucson."}</p>
    </section>
  );
}
