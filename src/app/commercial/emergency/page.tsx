import { CommercialServicePage } from '@/components/CommercialServicePage';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'Commercial Emergency HVAC Tucson | Crest Air',
    description: 'Commercial emergency HVAC service in Tucson for after-hours no-cool calls, critical rooftop failures, and urgent business downtime that needs rapid dispatch.',
    keywords: ['commercial emergency hvac tucson', 'emergency commercial ac repair tucson', 'after hours commercial hvac tucson'],
  },
  '/commercial/emergency',
);

export default function CommercialEmergencyPage() {
  return (
    <CommercialServicePage
      slug="emergency"
      title="Commercial Emergency HVAC Response in Tucson"
      description="After-hours and rapid-response HVAC service for Tucson restaurants, offices, retail spaces, and warehouses when downtime threatens revenue."
      intro="This path keeps emergency calls separate so operations teams can reach Crest Air fast, share critical context, and stabilize rooftop or packaged units before business halts."
      audience={[
        'Restaurant owners facing no-cool conditions during service hours',
        'Property managers who need vendor updates for tenants immediately',
        'Warehouse and logistics teams protecting inventory from heat swings',
      ]}
      needs={[
        '24/7 communication with clear ETAs',
        'Temporary cooling or staged repairs to keep doors open',
        'Documentation for insurance, landlord, or corporate reporting',
      ]}
      sourcePage="/commercial/emergency"
      serviceType="commercial-emergency-hvac"
      callCtaId="commercial-emergency-call"
      formCtaId="commercial-emergency-form"
    />
  );
}
