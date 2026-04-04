import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'New AC Installation & Replacement in Tucson | Crest Air',
  description: 'Need a new AC system in Tucson? Free estimates, financing available. Energy-efficient installations by licensed pros. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelAcInstallationPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/ac-installation',
        serviceType: 'funnel-ac-installation',
        funnelIdentifier: 'funnel-ac-installation',
        headline: 'New AC System? Get a Free Installation Estimate',
        subheadline: "Upgrade to a high-efficiency AC system and cut your Tucson energy bills. Crest Air provides expert installation with financing options to fit your budget.",
        trustBadges: [
          { icon: '📋', label: 'Free Estimates' },
          { icon: '💰', label: 'Financing Available' },
          { icon: '🏆', label: 'Top-Rated Installers' },
        ],
        description: [
          "If your AC system is 10+ years old, constantly breaking down, or driving up your electric bills, it may be time for a replacement. Tucson's extreme heat demands a system that can keep up — and a properly sized, energy-efficient AC unit can save you hundreds per year on cooling costs.",
          "Crest Air's installation team does a full load calculation for your home to ensure you get the right system — not too big, not too small. We install top brands like Trane, Carrier, Lennox, and Goodman, and every installation comes with manufacturer warranties plus our workmanship guarantee.",
          "We also offer flexible financing options so you can get the comfort you need today and pay over time. Our team handles everything from permits to final inspection."
        ],
        bulletHeading: 'What You Get With Crest Air Installation',
        bulletPoints: [
          'Free in-home consultation & load calculation',
          'Energy-efficient systems (up to 20+ SEER)',
          'Professional installation by licensed technicians',
          'All permits & inspections handled',
          'Manufacturer warranty + workmanship guarantee',
          'Flexible financing with approved credit',
          'Old system removal & disposal included',
          'Post-install walkthrough & thermostat setup',
        ],
        formSubmitLabel: 'Get My Free AC Estimate',
      }}
    />
  );
}
