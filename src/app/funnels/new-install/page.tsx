import { FunnelPage } from '@/components/FunnelPage';

export default function FunnelNewInstallPage() {
  return (
    <FunnelPage
      title="Request a New AC Installation Quote"
      offer="Paid-traffic installation funnel built around replacement intent, quote requests, and clearer next-step planning for Tucson homeowners."
      urgency="Use this path when prospects are already comparing replacement options and need a faster quote request path than the full SEO site."
      trustPoints={[
        'Quote-first framing for installation buyers',
        'Phone-first CTA for warmer leads ready to talk now',
        'Repeated trust + CTA blocks to reduce abandonment',
        'Server-side GHL capture with funnel identifier included',
      ]}
      sourcePage="/funnels/new-install"
      serviceType="funnel-new-install"
      funnelIdentifier="funnel-new-install"
    />
  );
}
