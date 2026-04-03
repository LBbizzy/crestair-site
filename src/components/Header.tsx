'use client';

import Link from 'next/link';
import { useState } from 'react';
import { primaryNav, site } from '@/lib/site';
import { CallTrackedLink } from '@/components/CallTrackedLink';
import { SiteImage } from '@/components/SiteImage';
import { ImageAsset } from '@/lib/types';

const crestAirLogo: ImageAsset = {
  src: '/images/home/crest-air-heating-cooling-tucson-logo.png',
  alt: 'Crest Air Heating and Cooling Tucson logo',
  title: 'Crest Air Heating and Cooling Tucson',
  description: 'Sitewide Crest Air logo used in the primary navigation and masthead.',
  page: 'home',
  section: 'header',
};

const mobileExpandableLabels = new Set(['Services', 'Commercial', 'Locations', 'Service Areas', 'Blog', 'Blogs']);
const hasBlogNav = primaryNav.some((item) => item.label.toLowerCase().includes('blog'));
const mobileNavItems = hasBlogNav ? primaryNav : [...primaryNav, { href: '/blog', label: 'Blogs' }];
const mobileLabelOverrides: Record<string, string> = {
  Locations: 'Service Areas',
  Contact: 'Contact Us',
  About: 'About Us',
};

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <>
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="border-b bg-[#041B34] px-6 py-2 text-center text-sm font-semibold text-white">
          Call now for Tucson HVAC service:{' '}
          <CallTrackedLink className="text-[#66CFEF]" sourcePage="global-header" serviceType="general-hvac" location="tucson-az" pageType="sitewide" dataCtaId="header-top-call">
            {site.phone}
          </CallTrackedLink>
        </div>
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <SiteImage asset={crestAirLogo} width={160} height={56} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-[#041B34] md:hidden"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-6 rounded-full bg-current transition ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-6 rounded-full bg-current transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 rounded-full bg-current transition ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>

          <nav className="hidden flex-1 items-center gap-3 md:flex md:gap-6">
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
                  <div className="pointer-events-none absolute left-0 top-full z-20 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition group-hover:pointer-events-auto group-hover:opacity-100">
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

          <div className="hidden items-center gap-3 md:flex">
            <CallTrackedLink className="hidden text-sm font-semibold text-[#041B34] lg:inline-flex" sourcePage="global-header" serviceType="general-hvac" location="tucson-az" pageType="sitewide" dataCtaId="header-desktop-call">
              {site.phone}
            </CallTrackedLink>
            <Link href="/contact" className="inline-flex rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]">
              Request Service
            </Link>
          </div>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <>
          <div className="fixed inset-0 z-40 bg-slate-900/60" aria-hidden="true" onClick={closeMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white p-6 shadow-2xl" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between">
              <SiteImage asset={crestAirLogo} width={140} height={48} className="h-10 w-auto" />
              <button type="button" onClick={closeMobileMenu} aria-label="Close menu" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700">
                <span className="sr-only">Close menu</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>
            <nav className="mt-6 divide-y divide-slate-200 text-base font-semibold text-[#041B34]">
              {mobileNavItems.map((item) => {
                const displayLabel = mobileLabelOverrides[item.label] ?? item.label;
                const isExpandable = (mobileExpandableLabels.has(displayLabel) || mobileExpandableLabels.has(item.label)) && item.children?.length;
                const isOpen = openDropdown === displayLabel;

                if (isExpandable) {
                  return (
                    <div key={displayLabel}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4"
                        onClick={() => handleDropdownToggle(displayLabel)}
                      >
                        <span className="text-left text-base font-semibold uppercase tracking-wide">{displayLabel}</span>
                        <svg
                          className={`h-5 w-5 transition ${isOpen ? 'rotate-180 text-[#F4911D]' : 'text-slate-500'}`}
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
                        </svg>
                      </button>
                      {isOpen ? (
                        <div className="pb-4">
                          {item.children!.map((child) => (
                            <Link key={child.href} href={child.href} className="block py-2 pl-4 text-sm font-medium text-slate-700" onClick={closeMobileMenu}>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={displayLabel}
                    href={item.href}
                    className={`flex items-center justify-between py-4 ${item.href === '/' ? 'text-[#F4911D]' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="text-base font-semibold uppercase tracking-wide">{displayLabel}</span>
                    <svg className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l6 5-6 5" />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#F4911D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D97F16]"
                onClick={closeMobileMenu}
              >
                Request Service
              </Link>
              <div onClick={closeMobileMenu}>
                <CallTrackedLink
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-[#041B34]"
                  sourcePage="global-header"
                  serviceType="general-hvac"
                  location="tucson-az"
                  pageType="sitewide"
                  dataCtaId="mobile-nav-call"
                >
                  Call {site.phone}
                </CallTrackedLink>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
