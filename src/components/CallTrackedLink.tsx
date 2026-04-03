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
  async function handleClick() {
    try {
      await fetch('/api/ghl/conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Website Call Click',
          phone: site.phone,
          source_page: sourcePage,
          service_type: serviceType,
          location,
          action_type: 'call',
          page_type: pageType,
          funnel_identifier: funnelIdentifier,
          service_request: 'Phone call click',
        }),
        keepalive: true,
      });
    } catch {
      // Best-effort tracking only. Call flow should still continue.
    }
  }

  function onClick() {
    void handleClick();
  }

  return (
    <a href={`tel:${site.phone}`} className={className} data-cta-id={dataCtaId} onClick={onClick}>
      {children}
    </a>
  );
}
