import { CommercialServicePage } from '@/components/CommercialServicePage';

export default function CommercialInstallationsPage() {
  return (
    <CommercialServicePage
      slug="ac-installation"
      title="Commercial HVAC Installations in Tucson"
      description="Commercial installation planning for replacement projects, new system rollouts, and property upgrades that need clearer scope and less disruption."
      intro="This route is built for commercial replacement and installation conversations where planning, staging, and business impact matter more than residential comfort framing."
      audience={[
        'Owners planning replacements for aging rooftop or split systems',
        'Property managers coordinating tenant-facing upgrades',
        'Facilities leads comparing installation scope and timing',
      ]}
      needs={[
        'Plan installs around occupancy and operating schedules',
        'Reduce project uncertainty and timeline friction',
        'Align system decisions with long-term property needs',
      ]}
      sourcePage="/commercial/ac-installation"
      serviceType="commercial-ac-installation"
      callCtaId="commercial-ac-installation-call"
      formCtaId="commercial-ac-installation-form"
    />
  );
}
