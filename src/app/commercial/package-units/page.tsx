import { CommercialServicePage } from '@/components/CommercialServicePage';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'Commercial Package Units Tucson | Crest Air',
    description: 'Commercial package unit service in Tucson for rooftop packaged systems that need expert repair, preventive maintenance, and replacement planning for occupied properties.',
    keywords: ['commercial package units tucson', 'rooftop package unit service tucson', 'commercial packaged hvac tucson'],
  },
  '/commercial/package-units',
);

export default function CommercialPackageUnitsPage() {
  return (
    <CommercialServicePage
      slug="package-units"
      title="Commercial Package Units in Tucson"
      description="Commercial package unit service for rooftop and packaged systems that need reliable repair, maintenance, or replacement planning."
      intro="This commercial route focuses on package-unit workloads and messaging for properties that depend on rooftop equipment performance, access coordination, and uptime."
      audience={[
        'Property managers responsible for rooftop package units',
        'Business owners dealing with repeated cooling complaints',
        'Facility teams evaluating service, maintenance, or replacement paths',
      ]}
      needs={[
        'Protect uptime in heat-sensitive occupied buildings',
        'Address rooftop system issues with less delay',
        'Clarify maintenance and replacement planning for packaged equipment',
      ]}
      sourcePage="/commercial/package-units"
      serviceType="commercial-package-units"
      callCtaId="commercial-package-units-call"
      formCtaId="commercial-package-units-form"
    />
  );
}
