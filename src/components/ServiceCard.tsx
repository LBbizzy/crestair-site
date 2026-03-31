import Link from 'next/link';

export function ServiceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-slate-700">{description}</p>
      <Link href={href} className="mt-5 inline-flex font-semibold text-[#041B34] underline decoration-[#66CFEF] underline-offset-4">Explore service</Link>
    </article>
  );
}
