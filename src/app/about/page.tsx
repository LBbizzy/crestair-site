import { MarketingPageTemplate } from '@/components/MarketingPageTemplate';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata(
  {
    title: 'About Crest Air',
    description: 'Learn about Crest Air, the Tucson HVAC company focused on faster routing, clearer service options, and trusted local support.',
    keywords: ['about crest air', 'tucson hvac company', 'crest air tucson'],
  },
  '/about',
);

export default function AboutPage() {
  return (
    <MarketingPageTemplate
      eyebrow="About Crest Air"
      title="A Tucson HVAC company built around clearer service decisions"
      description="Crest Air supports Tucson-area homeowners and businesses with HVAC repair, replacement planning, heating service, and a cleaner path into local help when timing matters."
      trustHeading="Why Tucson customers choose Crest Air"
      trustPoints={[
        'Phone-first support for urgent repair or replacement decisions',
        'Residential and commercial routing instead of one-size-fits-all messaging',
        'Local Tucson-area coverage with stronger links into service and location pages',
      ]}
      serviceLinks={[
        { href: '/services/ac-repair-tucson', label: 'AC Repair' },
        { href: '/services/ac-installation-tucson', label: 'AC Installation' },
        { href: '/services/heating-tucson', label: 'Heating Services' },
      ]}
      locationLinks={[
        { href: '/locations/tucson-az', label: 'Tucson, AZ' },
        { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
      ]}
      primaryLabel="Contact Crest Air"
      primaryHref="/contact"
      secondaryLabel="Explore Commercial HVAC"
      secondaryHref="/commercial"
      sourcePage="/about"
      serviceType="about-page"
      pageType="about"
      callCtaId="about-call"
      formCtaId="about-form"
    />
  );
}
