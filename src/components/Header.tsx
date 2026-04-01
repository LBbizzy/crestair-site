import Link from 'next/link';
import { primaryNav, site } from '@/lib/site';
import { CallTrackedLink } from '@/components/CallTrackedLink';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="border-b bg-[#041B34] px-6 py-2 text-center text-sm font-semibold text-white">
        Call now for Tucson HVAC service:{' '}
        <CallTrackedLink className="text-[#66CFEF]" sourcePage="global-header" serviceType="general-hvac" location="tucson-az" pageType="sitewide" dataCtaId="header-top-call">
          {site.phone}
        </CallTrackedLink>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="https://crestairaz.com/wp-content/uploads/2026/02/crest-air-heating-cooling-tucson-logo.png" alt="Crest Air Heating and Cooling Tucson logo" className="h-12 w-auto" />
          </Link>
          <CallTrackedLink className="text-sm font-semibold text-[#041B34] md:hidden" sourcePage="global-header" serviceType="general-hvac" location="tucson-az" pageType="sitewide" dataCtaId="header-mobile-call">
            {site.phone}
          </CallTrackedLink>
        </div>

        <nav className="flex flex-wrap items-center gap-3 md:gap-6">
          {primaryNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-[#041B34]"
              >
                {item.label}
                {item.children?.length ? <span className="text-xs text-slate-400">▾</span> : null}
              </Link>

              {item.children?.length ? (
                <div className="md:pointer-events-none md:absolute md:left-0 md:top-full md:z-20 md:mt-3 md:w-64 md:rounded-2xl md:border md:border-slate-200 md:bg-white md:p-3 md:opacity-0 md:shadow-xl md:transition md:group-hover:pointer-events-auto md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:opacity-100">
                  <div className="flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#041B34]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CallTrackedLink className="hidden text-sm font-semibold text-[#041B34] lg:inline-flex" sourcePage="global-header" serviceType="general-hvac" location="tucson-az" pageType="sitewide" dataCtaId="header-desktop-call">
            {site.phone}
          </CallTrackedLink>
          <Link href="/contact" className="inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">
            Request Service
          </Link>
        </div>
      </div>
    </header>
  );
}
