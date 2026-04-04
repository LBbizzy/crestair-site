import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Commercial HVAC Maintenance Plans in Tucson | Crest Air',
  description: 'Protect your Tucson business with a commercial HVAC maintenance agreement. Prevent breakdowns, reduce costs. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelCommercialMaintenancePage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/commercial-maintenance',
        serviceType: 'funnel-commercial-maintenance',
        funnelIdentifier: 'funnel-commercial-maintenance',
        headline: 'Protect Your Business With a Commercial HVAC Maintenance Plan',
        subheadline: "Commercial HVAC breakdowns cost Tucson businesses thousands in lost revenue and emergency repairs. Crest Air's maintenance agreements keep your systems running reliably year-round.",
        trustBadges: [
          { icon: '📅', label: 'Scheduled Service' },
          { icon: '🔧', label: 'Priority Repairs' },
          { icon: '📉', label: 'Reduced Costs' },
        ],
        description: [
          "For Tucson businesses, a commercial HVAC failure means more than discomfort — it means lost revenue, unhappy employees, and potential damage to inventory or equipment. Preventive maintenance is the most cost-effective way to avoid these costly surprises.",
          "Crest Air's commercial maintenance agreements are designed for businesses of all sizes — from single-location retail shops to multi-building facilities. We create a customized maintenance schedule based on your equipment type, age, and usage patterns to maximize system life and efficiency.",
          "Maintenance agreement clients receive priority scheduling for repairs, discounted parts and labor, and detailed service reports for your records. It's the smartest investment you can make for your commercial HVAC equipment."
        ],
        bulletHeading: 'Maintenance Agreement Benefits',
        bulletPoints: [
          'Customized maintenance schedule for your equipment',
          'Bi-annual or quarterly inspections',
          'Priority scheduling for emergency repairs',
          'Discounted parts & labor rates',
          'Detailed service reports & documentation',
          'Refrigerant management & compliance',
          'Filter change programs',
          'Equipment life extension & efficiency optimization',
        ],
        formSubmitLabel: 'Get a Maintenance Quote',
      }}
    />
  );
}
