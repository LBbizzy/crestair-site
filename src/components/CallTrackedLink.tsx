'use client';

import { ReactNode } from 'react';
import { site } from '@/lib/site';

type CallTrackedLinkProps = {
  className?: string;
  children: ReactNode;
  sourcePage: string;
  serviceType: string;
  location: string;
  pageType: string;
  funnelIdentifier?: string;
  dataCtaId?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function CallTrackedLink({
  className,
  children,
  sourcePage,
  serviceType,
  location,
  pageType,
  funnelIdentifier,
  dataCtaId,
}: CallTrackedLinkProps) {
  // A call click is a MEASUREMENT event, not a lead.
  //
  // This used to POST to /api/ghl/conversion with `phone: site.phone` — Crest
  // Air's own number. GoHighLevel upserts contacts by phone, so every single
  // call click in the site's history collapsed into one contact record keyed on
  // (520) 751-8888. That record is junk, and worse, it made real inbound leads
  // harder to see. Nobody who clicks "Call" has given us their number yet; there
  // is nothing to put in a CRM.
  //
  // So: send the click to GA4, where call-click volume by page and service is
  // exactly the kind of thing GA4 exists to measure, and leave the CRM for
  // people who actually filled something in. Fire-and-forget — the dial must
  // never wait on analytics, and must still work if GA4 is blocked.
  function onClick() {
    try {
      window.gtag?.('event', 'call_click', {
        source_page: sourcePage,
        service_type: serviceType,
        location,
        page_type: pageType,
        funnel_identifier: funnelIdentifier,
        cta_id: dataCtaId,
      });
    } catch {
      // Analytics is best-effort. The call goes through regardless.
    }
  }

  return (
    <a href={`tel:${site.phone}`} className={className} data-cta-id={dataCtaId} onClick={onClick}>
      {children}
    </a>
  );
}
