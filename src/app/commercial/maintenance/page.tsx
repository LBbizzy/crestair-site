import { CommercialServicePage } from '@/components/CommercialServicePage';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'Commercial HVAC Maintenance Tucson | Crest Air',
    description: 'Commercial HVAC maintenance in Tucson for property managers and facilities teams that want fewer breakdowns, longer equipment life, and dependable rooftop unit performance.',
    keywords: ['commercial hvac maintenance tucson', 'commercial ac maintenance tucson', 'commercial rooftop unit maintenance tucson'],
  },
  '/commercial/maintenance',
);

export default function CommercialMaintenancePage() {
  return (
    <CommercialServicePage
      slug="maintenance"
      title="Commercial HVAC Maintenance in Tucson"
      description="Commercial maintenance for owners and managers who want fewer breakdowns, more predictable performance, and better seasonal readiness."
      intro="This page targets preventive planning for commercial properties where missed maintenance can turn into occupant complaints, emergency calls, and avoidable downtime."
      audience={[
        'Property managers with recurring service issues across occupied buildings',
        'Business owners who need fewer peak-season surprises',
        'Facilities teams looking for more predictable HVAC performance',
      ]}
      needs={[
        'Reduce emergency calls during heavy demand periods',
        'Protect equipment life and budget planning',
        'Support better comfort consistency for occupants and staff',
      ]}
      sourcePage="/commercial/maintenance"
      serviceType="commercial-hvac-maintenance"
      callCtaId="commercial-maintenance-call"
      formCtaId="commercial-maintenance-form"
    />
  );
}
