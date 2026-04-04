import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Emergency HVAC Service 24/7 in Tucson | Crest Air',
  description: 'AC emergency in Tucson? Crest Air offers 24/7 emergency HVAC service. Fast response, licensed technicians. Call (520) 751-8888 now.',
  robots: { index: false, follow: false },
};

export default function FunnelEmergencyPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/emergency',
        serviceType: 'funnel-emergency',
        funnelIdentifier: 'funnel-emergency',
        headline: "HVAC Emergency? We're Available 24/7 in Tucson",
        subheadline: "When your AC or heater fails at the worst possible time, Crest Air is here. Our emergency HVAC team responds fast — day or night, weekends and holidays included.",
        trustBadges: [
          { icon: '🚨', label: '24/7 Availability' },
          { icon: '⚡', label: 'Fast Response' },
          { icon: '🔒', label: 'No Hidden Fees' },
        ],
        description: [
          "AC failure in Tucson during summer isn't just uncomfortable — it can be a health emergency, especially for children, elderly residents, and pets. When temperatures soar past 110°F, you need an HVAC company that answers the phone and shows up fast.",
          "Crest Air provides 24/7 emergency HVAC service across the Tucson metro area. Our technicians carry common parts on their trucks so many emergencies can be resolved in a single visit. Whether it's a complete system failure, a refrigerant leak, or a heating emergency during a cold snap, we're ready.",
          "Emergency service doesn't mean surprise pricing. We provide upfront quotes before starting any work, even on nights and weekends. You'll never be pressured into unnecessary repairs."
        ],
        bulletHeading: 'Emergency Situations We Handle',
        bulletPoints: [
          'Complete AC failure in extreme heat',
          'No cooling or warm air blowing from vents',
          'Refrigerant leaks & frozen coils',
          'Electrical failures & burning smells',
          'Heater failure during cold nights',
          'Carbon monoxide detector alerts',
          'Flooding from condensate line failures',
          'Strange noises indicating imminent failure',
        ],
        formSubmitLabel: 'Request Emergency Service',
      }}
    />
  );
}
