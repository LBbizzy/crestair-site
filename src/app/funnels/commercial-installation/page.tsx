import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Commercial HVAC Installation in Tucson | Crest Air',
  description: 'New commercial HVAC installation and replacement in Tucson. Free site assessments, energy-efficient systems. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelCommercialInstallationPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/commercial-installation',
        serviceType: 'funnel-commercial-installation',
        funnelIdentifier: 'funnel-commercial-installation',
        headline: 'New Commercial HVAC System for Your Tucson Business',
        subheadline: "Whether you're building out a new space or replacing an aging system, Crest Air designs and installs commercial HVAC solutions built for Tucson's extreme climate.",
        trustBadges: [
          { icon: '📐', label: 'Custom Design' },
          { icon: '💰', label: 'Competitive Pricing' },
          { icon: '🏗️', label: 'Full Installation' },
        ],
        description: [
          "A properly designed commercial HVAC system is critical for your Tucson business. Undersized equipment wastes energy trying to keep up with Arizona heat, while oversized systems short-cycle and wear out faster. Crest Air's commercial team designs systems that match your building's exact needs.",
          "We handle everything from initial load calculations and system design to installation, testing, and commissioning. Whether you need a rooftop package unit for a retail space, a VRF system for a multi-zone office, or a full HVAC system for a new construction project, we have the expertise.",
          "Our commercial installations include project management, coordination with general contractors, all necessary permits, and a thorough commissioning process to ensure everything runs correctly from day one. We also offer commercial financing options."
        ],
        bulletHeading: 'Commercial Installation Services',
        bulletPoints: [
          'Free site assessment & load calculation',
          'System design & engineering',
          'Rooftop unit (RTU) installation',
          'VRF/VRV multi-zone systems',
          'Split system installation',
          'Ductwork design & fabrication',
          'Controls & thermostat programming',
          'Project management & contractor coordination',
        ],
        formSubmitLabel: 'Get a Free Site Assessment',
      }}
    />
  );
}
