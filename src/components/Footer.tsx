import Link from 'next/link';
import { footerGroups, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-16 bg-[#041B34] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold">{site.name}</p>
          <p className="mt-4 text-sm text-slate-200">Heating, cooling, and comfort services built for Tucson-area homes.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#66CFEF]">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {footerGroups.services.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66CFEF]">Locations</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {footerGroups.locations.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66CFEF]">Contact</h3>
          <p className="mt-4 text-sm text-slate-200">{site.phone}</p>
          <p className="text-sm text-slate-200">{site.email}</p>
          <Link href="/locations/tucson-az" className="mt-5 inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">Request Service</Link>
        </div>
      </div>
    </footer>
  );
}
