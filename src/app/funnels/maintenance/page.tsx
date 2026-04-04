import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'HVAC Maintenance Plans & Tune-Ups in Tucson | Crest Air',
  description: 'Keep your AC running all summer with Crest Air maintenance plans. Annual tune-ups, priority scheduling, and discounts. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelMaintenancePage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/maintenance',
        serviceType: 'funnel-maintenance',
        funnelIdentifier: 'funnel-maintenance',
        headline: 'Prevent Costly Breakdowns With an HVAC Tune-Up',
        subheadline: "Annual HVAC maintenance saves Tucson homeowners hundreds in repair costs and keeps your system running at peak efficiency through Arizona's brutal summers.",
        trustBadges: [
          { icon: '🔧', label: 'Annual Tune-Ups' },
          { icon: '⏰', label: 'Priority Scheduling' },
          { icon: '💲', label: 'Member Discounts' },
        ],
        description: [
          "The #1 reason AC systems break down in Tucson? Lack of maintenance. Arizona's extreme heat pushes your HVAC system to its limits — and without regular tune-ups, small issues become expensive emergencies. A well-maintained system lasts years longer and uses less energy.",
          "Crest Air's maintenance plans include comprehensive system inspections, cleaning, and tune-ups for both cooling and heating. Our technicians check refrigerant levels, clean coils, inspect electrical connections, test safety controls, and make sure everything is running efficiently.",
          "Maintenance plan members get priority scheduling (skip the wait during peak summer), discounts on repairs, and peace of mind knowing their system is ready for whatever Tucson weather throws at it."
        ],
        bulletHeading: "What's Included in a Tune-Up",
        bulletPoints: [
          'Complete system inspection & performance test',
          'Condenser & evaporator coil cleaning',
          'Refrigerant level check & adjustment',
          'Electrical connection tightening & testing',
          'Thermostat calibration',
          'Drain line flushing & inspection',
          'Air filter replacement',
          'Safety control & operational testing',
        ],
        formSubmitLabel: 'Schedule My Tune-Up',
      }}
    />
  );
}
