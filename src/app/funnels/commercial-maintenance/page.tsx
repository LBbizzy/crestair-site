import { FunnelPage } from '@/components/FunnelPage';

export default function FunnelCommercialMaintenancePage() {
  return (
    <FunnelPage
      title="Commercial HVAC Maintenance for Tucson Properties"
      offer="Separate commercial paid funnel for owners, property managers, and facility leads who need maintenance planning without residential messaging noise."
      urgency="Use this path for commercial maintenance campaigns where uptime, occupant comfort, and budget predictability are the primary decision drivers."
      trustPoints={[
        'Commercial-specific messaging separated from residential site hierarchy',
        'Phone-first conversion for managers who want immediate coordination',
        'Repeated CTA blocks built for longer-scroll paid traffic',
        'Funnel identifier preserved for campaign/source attribution later',
      ]}
      sourcePage="/funnels/commercial-maintenance"
      serviceType="funnel-commercial-maintenance"
      funnelIdentifier="funnel-commercial-maintenance"
    />
  );
}
