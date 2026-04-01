import { FunnelPage } from '@/components/FunnelPage';

export default function FunnelTuneUpPage() {
  return (
    <FunnelPage
      title="Book a Tucson HVAC Tune-Up"
      offer="Conversion-focused tune-up funnel for paid traffic that needs a simple maintenance offer, quick request flow, and strong phone-first fallback."
      urgency="Use this path for seasonal maintenance campaigns, tune-up specials, and homeowners responding to preventive-service offers."
      trustPoints={[
        'Single maintenance offer with reduced navigation friction',
        'Repeated CTA blocks for low-intent scroll traffic',
        'Urgency + savings framing without SEO-site distractions',
        'Funnel-specific tracking IDs for campaign optimization',
      ]}
      sourcePage="/funnels/tune-up"
      serviceType="funnel-tune-up"
      funnelIdentifier="funnel-tune-up"
    />
  );
}
