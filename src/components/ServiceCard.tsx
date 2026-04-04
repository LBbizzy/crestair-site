import Link from 'next/link';

export function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#041B34] hover:shadow-md">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-slate-700">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#041B34] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B3158]"
      >
        Explore Service
        <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
        </svg>
      </Link>
    </article>
  );
}
