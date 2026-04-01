import { FunnelPage } from '@/components/FunnelPage';

export default function FunnelEmergencyPage() {
  return (
    <FunnelPage
      title="Emergency HVAC Help in Tucson"
      offer="High-urgency emergency funnel for paid traffic that prioritizes immediate calls, fast request submission, and low-distraction decision support."
      urgency="Use this path for no-cool or no-heat traffic where hesitation kills conversion and direct-response language matters most."
      trustPoints={[
        'Emergency-specific urgency language and conversion framing',
        'Phone-first layout tuned for immediate contact behavior',
        'Minimal outbound leakage from paid clicks',
        'Campaign attribution preserved through funnel payload + CTA IDs',
      ]}
      sourcePage="/funnels/emergency"
      serviceType="funnel-emergency"
      funnelIdentifier="funnel-emergency"
    />
  );
}
