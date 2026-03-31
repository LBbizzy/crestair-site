import Link from 'next/link';
import { primaryNav, site } from '@/lib/site';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="border-b bg-[#041B34] px-6 py-2 text-center text-sm font-semibold text-white">
        Call now for Tucson HVAC service: <a className="text-[#66CFEF]" href={`tel:${site.phone}`}>{site.phone}</a>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <img src="https://crestairaz.com/wp-content/uploads/2026/02/crest-air-heating-cooling-tucson-logo.png" alt="Crest Air Heating and Cooling Tucson logo" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-[#041B34]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone}`} className="hidden text-sm font-semibold text-[#041B34] lg:inline-flex">
            {site.phone}
          </a>
          <Link href="/locations/tucson-az" className="inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">
            Request Service
          </Link>
        </div>
      </div>
    </header>
  );
}
