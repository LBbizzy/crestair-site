'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { FunnelForm } from '@/components/FunnelForm';

export type TrustBadge = {
  icon: string;
  label: string;
};

export type FunnelPageConfig = {
  /** URL path for this funnel page */
  sourcePage: string;
  /** Service type identifier for GHL tracking */
  serviceType: string;
  /** Unique funnel identifier */
  funnelIdentifier: string;
  /** Main headline — conversion-focused */
  headline: string;
  /** Supporting subheadline */
  subheadline: string;
  /** 3 trust badges */
  trustBadges: [TrustBadge, TrustBadge, TrustBadge];
  /** Service description paragraphs */
  description: string[];
  /** Bullet points for what's included / what we do */
  bulletPoints: string[];
  /** Section heading for bullet points */
  bulletHeading: string;
  /** Form submit button label */
  formSubmitLabel?: string;
};

export function FunnelLayout({ config }: { config: FunnelPageConfig }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar — Logo + Phone */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Image
            src="/images/logos/approved/crest-air-logo-primary-horizontal.png"
            alt="Crest Air — Tucson HVAC"
            title="Crest Air"
            width={180}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
          <a
            href="tel:+15207518888"
            className="flex items-center gap-2 rounded-lg bg-[#041B34] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#06284d] sm:text-base"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z" />
            </svg>
            (520) 751-8888
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#041B34] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            {/* Left — Copy */}
            <div className="flex flex-col justify-center">
              <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {config.headline}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
                {config.subheadline}
              </p>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {config.trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center rounded-xl bg-white/10 px-3 py-4 text-center backdrop-blur-sm"
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <span className="mt-1.5 text-xs font-semibold leading-tight sm:text-sm">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile phone CTA */}
              <a
                href="tel:+15207518888"
                className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-[#F4911D] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#D97F16] lg:hidden"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now — (520) 751-8888
              </a>
            </div>

            {/* Right — Form */}
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
              <h2 className="mb-1 font-[family-name:var(--font-heading)] text-xl font-bold text-slate-900 sm:text-2xl">
                Schedule Your Service
              </h2>
              <p className="mb-5 text-sm text-slate-600">
                Fill out this quick form and we&apos;ll get back to you ASAP.
              </p>
              <Suspense fallback={<div className="h-80 animate-pulse rounded-lg bg-slate-100" />}>
                <FunnelForm
                  sourcePage={config.sourcePage}
                  serviceType={config.serviceType}
                  funnelIdentifier={config.funnelIdentifier}
                  formCtaId={`${config.funnelIdentifier}-hero-form`}
                  submitLabel={config.formSubmitLabel}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div>
              {config.description.map((paragraph, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-slate-700 first:mt-0 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-900">
                {config.bulletHeading}
              </h2>
              <ul className="mt-4 space-y-3">
                {config.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-[#F4911D]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Why Crest Air */}
      <section className="border-t border-slate-100 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-900 sm:text-3xl">
            Why Tucson Homeowners Choose Crest Air
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4911D]/10 text-2xl">
                ⭐
              </div>
              <h3 className="font-semibold text-slate-900">5-Star Rated</h3>
              <p className="mt-2 text-sm text-slate-600">
                Hundreds of satisfied customers across the Tucson metro area.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4911D]/10 text-2xl">
                🛡️
              </div>
              <h3 className="font-semibold text-slate-900">Licensed &amp; Insured</h3>
              <p className="mt-2 text-sm text-slate-600">
                Fully licensed Arizona ROC contractor. Your home is protected.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4911D]/10 text-2xl">
                💰
              </div>
              <h3 className="font-semibold text-slate-900">Upfront Pricing</h3>
              <p className="mt-2 text-sm text-slate-600">
                No hidden fees. You know the cost before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#041B34] px-4 py-12 text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Call us right now or fill out the form above. Crest Air is here for Tucson.
          </p>
          <a
            href="tel:+15207518888"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F4911D] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#D97F16]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z" />
            </svg>
            Call (520) 751-8888
          </a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-100 bg-white px-4 py-6 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Crest Air | 129 E Plata St, Tucson, AZ 85705 |{' '}
          <a href="tel:+15207518888" className="font-semibold text-slate-700 hover:underline">
            (520) 751-8888
          </a>
        </p>
        <p className="mt-1">Licensed Arizona ROC Contractor | ROC #343786</p>
      </footer>

      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D97F16] bg-[#F4911D] p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] sm:hidden">
        <a
          href="tel:+15207518888"
          className="flex items-center justify-center gap-2 text-lg font-bold text-white"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z" />
          </svg>
          Tap to Call — (520) 751-8888
        </a>
      </div>
    </div>
  );
}
