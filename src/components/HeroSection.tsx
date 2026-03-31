import Link from 'next/link';

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function HeroSection({ eyebrow, title, body, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: HeroSectionProps) {
  return (
    <section className="rounded-3xl bg-slate-950 px-6 py-16 text-white shadow-xl md:px-10">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#66CFEF]">{eyebrow}</p> : null}
      <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{body}</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link className="inline-flex rounded-full bg-[#F4911D] px-6 py-3 font-semibold text-white transition hover:bg-[#D97F16]" href={primaryHref}>{primaryLabel}</Link>
        {secondaryLabel && secondaryHref ? (
          <Link className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-[#66CFEF] hover:text-[#66CFEF]" href={secondaryHref}>{secondaryLabel}</Link>
        ) : null}
      </div>
    </section>
  );
}
