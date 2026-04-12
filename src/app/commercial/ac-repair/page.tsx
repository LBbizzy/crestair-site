import { CommercialServicePage } from '@/components/CommercialServicePage';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'Commercial AC Repair Tucson | Crest Air',
    description: 'Commercial AC repair in Tucson for restaurants, offices, retail spaces, and warehouses that need fast diagnostics, rooftop unit expertise, and minimal downtime.',
    keywords: ['commercial ac repair tucson', 'commercial hvac repair tucson', 'rooftop unit repair tucson'],
  },
  '/commercial/ac-repair',
);

export default function CommercialAcRepairPage() {
  return (
    <CommercialServicePage
      slug="ac-repair"
      title="Commercial AC Repair in Tucson"
      description="Commercial AC repair for business owners and property managers who need faster response, clearer diagnostics, and less operational disruption."
      intro="This commercial service path is separated from residential messaging and focused on uptime, occupant comfort, tenant expectations, and facility coordination."
      audience={[
        'Business owners managing comfort complaints or downtime risk',
        'Property managers balancing tenant expectations and service speed',
        'Facility operators who need clearer repair triage and next steps',
      ]}
      needs={[
        'Minimize disruption during business hours',
        'Restore cooling performance fast in occupied spaces',
        'Make repair-vs-replacement decisions with less guesswork',
      ]}
      sourcePage="/commercial/ac-repair"
      serviceType="commercial-ac-repair"
      callCtaId="commercial-ac-repair-call"
      formCtaId="commercial-ac-repair-form"
    />
  );
}
