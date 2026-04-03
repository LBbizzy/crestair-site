import { CommercialServicePage } from '@/components/CommercialServicePage';

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
