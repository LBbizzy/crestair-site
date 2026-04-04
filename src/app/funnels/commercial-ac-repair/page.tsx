import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Commercial AC Repair in Tucson | Crest Air',
  description: 'Fast commercial AC repair for Tucson businesses. Rooftop units, split systems, package units. Minimize downtime. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelCommercialAcRepairPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/commercial-ac-repair',
        serviceType: 'funnel-commercial-ac-repair',
        funnelIdentifier: 'funnel-commercial-ac-repair',
        headline: 'Commercial AC Down? We Get Your Business Cool Fast',
        subheadline: "When your commercial AC fails, it costs you money — lost productivity, unhappy customers, and potential inventory damage. Crest Air provides fast, expert commercial HVAC repair across Tucson.",
        trustBadges: [
          { icon: '🏢', label: 'Commercial Experts' },
          { icon: '⚡', label: 'Minimize Downtime' },
          { icon: '📋', label: 'All Systems Serviced' },
        ],
        description: [
          "A broken AC in your Tucson business isn't just uncomfortable — it's a revenue problem. Employees can't work effectively, customers leave, and sensitive equipment or inventory can be damaged. Crest Air understands that commercial HVAC issues demand urgent, professional attention.",
          "Our commercial team has experience with all types of commercial HVAC systems: rooftop package units (RTUs), split systems, VRF/VRV systems, and more. We service offices, retail spaces, restaurants, warehouses, medical facilities, and multi-tenant buildings throughout the Tucson area.",
          "We prioritize getting your system back online with minimal disruption to your operations. Our technicians carry common commercial parts and can diagnose most issues on the first visit."
        ],
        bulletHeading: 'Commercial HVAC Systems We Repair',
        bulletPoints: [
          'Rooftop package units (RTUs)',
          'Commercial split systems',
          'VRF/VRV systems',
          'Chiller systems',
          'Make-up air units (MAUs)',
          'Exhaust & ventilation systems',
          'Building automation & controls',
          'Refrigerant leak detection & repair',
        ],
        formSubmitLabel: 'Request Commercial Repair',
      }}
    />
  );
}
