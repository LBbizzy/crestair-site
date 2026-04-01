import { MarketingPageTemplate } from '@/components/MarketingPageTemplate';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'HVAC Financing | Crest Air',
    description: 'Explore Crest Air HVAC financing support for Tucson AC replacement, system upgrades, and larger comfort projects.',
    keywords: ['hvac financing tucson', 'ac financing tucson', 'crest air financing'],
  },
  '/financing',
);

export default function FinancingPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Financing Options"
      title="Financing support for HVAC replacements, upgrades, and larger comfort projects"
      description="Crest Air uses a financing page to help Tucson homeowners move from repair uncertainty into practical replacement or upgrade conversations without burying the contact path."
      trustHeading="Use financing as a conversion bridge, not a dead-end page"
      trustPoints={[
        'Keeps the contact form and phone CTA visible for higher-intent visitors',
        'Links directly into replacement, repair, and commercial service tracks',
        'Supports Tucson-area households comparing system cost, urgency, and timing',
      ]}
      serviceLinks={[
        { href: '/services/ac-installation-tucson', label: 'AC Installation' },
        { href: '/services/ac-repair-tucson', label: 'AC Repair' },
        { href: '/commercial/installations', label: 'Commercial Installations' },
      ]}
      locationLinks={[
        { href: '/locations/tucson-az', label: 'Tucson, AZ' },
        { href: '/locations/catalina-foothills-az', label: 'Catalina Foothills, AZ' },
      ]}
      primaryLabel="Contact Crest Air"
      primaryHref="/contact"
      secondaryLabel="See AC Installation"
      secondaryHref="/services/ac-installation-tucson"
      sourcePage="/financing"
      serviceType="financing-page"
      pageType="financing"
      callCtaId="financing-call"
      formCtaId="financing-form"
    />
  );
}
