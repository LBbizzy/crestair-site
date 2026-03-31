import Link from 'next/link';
import { CTA } from '@/lib/types';

export function CTASection({ heading, body, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTA) {
  return (
    <section className="rounded-3xl bg-[#041B34] px-6 py-12 text-white md:px-10">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold">{heading}</h2>
      <p className="mt-4 max-w-2xl text-slate-200">{body}</p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Link href={primaryHref} className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]">{primaryLabel}</Link>
        {secondaryLabel && secondaryHref ? <Link href={secondaryHref} className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white">{secondaryLabel}</Link> : null}
      </div>
    </section>
  );
}
