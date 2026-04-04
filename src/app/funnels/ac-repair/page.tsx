import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Same-Day AC Repair in Tucson | Crest Air',
  description: 'Fast, reliable AC repair in Tucson, AZ. Same-day service available. Licensed technicians, upfront pricing. Call (520) 751-8888 now.',
  robots: { index: false, follow: false },
};

export default function FunnelAcRepairPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/ac-repair',
        serviceType: 'funnel-ac-repair',
        funnelIdentifier: 'funnel-ac-repair',
        headline: 'AC Broken? Get Same-Day Repair in Tucson',
        subheadline: "Don't sweat through another Arizona night. Crest Air's licensed technicians diagnose and fix your AC fast — most repairs completed the same day you call.",
        trustBadges: [
          { icon: '⚡', label: 'Same-Day Service' },
          { icon: '💲', label: 'Upfront Pricing' },
          { icon: '🛡️', label: 'Licensed & Insured' },
        ],
        description: [
          "When your AC goes out in Tucson, every minute counts. Temperatures can reach 110°F+ in the summer, making a working air conditioner essential — not optional. Crest Air provides fast, dependable AC repair service across Tucson, Oro Valley, Marana, Vail, and surrounding areas.",
          "Our experienced technicians arrive with fully stocked trucks, meaning most repairs are completed in a single visit. We work on all major brands — Trane, Carrier, Lennox, Goodman, Rheem, and more. Whether it's a blown capacitor, refrigerant leak, compressor failure, or a thermostat issue, we'll find the problem and fix it right.",
          "Every repair comes with upfront pricing — you'll know exactly what it costs before we start. No surprise charges, no pressure to replace when a repair will do."
        ],
        bulletHeading: 'Our AC Repair Service Includes',
        bulletPoints: [
          'Complete system diagnostic & inspection',
          'Refrigerant leak detection & recharge',
          'Compressor, capacitor & fan motor repair',
          'Thermostat troubleshooting & replacement',
          'Electrical connection & wiring repair',
          'Air filter inspection & replacement',
          'Drain line clearing & condensate pump repair',
          'All major brands serviced',
        ],
        formSubmitLabel: 'Get Same-Day AC Repair',
      }}
    />
  );
}
