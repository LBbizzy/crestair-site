import Link from 'next/link';
import { footerGroups, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="mt-16 bg-[#041B34] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <img src="https://crestairaz.com/wp-content/uploads/2026/02/crest-air-heating-cooling-tucson-logo.png" alt="Crest Air Heating and Cooling Tucson logo" className="h-14 w-auto" />
          <p className="mt-4 text-sm leading-7 text-slate-200">
            Fast heating and cooling support for Tucson-area homes with clear service options, local coverage, and dependable help when comfort problems need attention.
          </p>
          <Link href="/locations/tucson-az" className="mt-5 inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">
            Request Service
          </Link>
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
            <li><Link href="/locations/tucson-az">Tucson, AZ</Link></li>
            <li>Oro Valley, AZ</li>
            <li>Marana, AZ</li>
            <li>Vail, AZ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66CFEF]">Contact</h3>
          <p className="mt-4 text-sm text-slate-200">{site.phone}</p>
          <p className="text-sm text-slate-200">{site.email}</p>
          <p className="mt-4 text-sm text-slate-200">Serving Tucson and surrounding communities with repair, installation, and heating support.</p>
        </div>
      </div>
    </footer>
  );
}
