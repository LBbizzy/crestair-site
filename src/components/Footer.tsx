import Link from 'next/link';
import { footerGroups, site } from '@/lib/site';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { SiteImage } from '@/components/SiteImage';
import { ImageAsset } from '@/lib/types';

const crestAirFooterLogo: ImageAsset = {
  src: '/images/logos/approved/crest-air-logo-primary-horizontal.png',
  alt: 'Crest Air Heating and Cooling Tucson logo',
  title: 'Crest Air Heating and Cooling Tucson',
  description: 'Footer logo reinforcing Crest Air brand trust across the site.',
  page: 'logos/footer',
  section: 'brand',
};

export function Footer() {
  return (
    <footer className="mt-16 bg-[#041B34] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <SiteImage asset={crestAirFooterLogo} width={180} height={60} className="h-14 w-auto" />
          <p className="mt-4 text-sm leading-7 text-slate-200">
            Fast heating and cooling support for Tucson-area homes and businesses with clear service options, local coverage, and dependable help when comfort problems need attention.
          </p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">
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
            {footerGroups.locations.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66CFEF]">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {footerGroups.company.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
          <CallTrackedLink className="mt-5 inline-flex text-sm text-slate-200" sourcePage="global-footer" serviceType="general-hvac" location="tucson-az" pageType="sitewide" dataCtaId="footer-call">
            {site.phone}
          </CallTrackedLink>
          <p className="text-sm text-slate-200">{site.email}</p>
        </div>
      </div>
    </footer>
  );
}
