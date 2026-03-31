import Link from 'next/link';
import { primaryNav, site } from '@/lib/site';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#041B34]">{site.name}</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-[#041B34]">{item.label}</Link>
          ))}
        </nav>
        <Link href="/locations/tucson-az" className="inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">Request Service</Link>
      </div>
    </header>
  );
}
