import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Indoor Air Quality & Filtration in Tucson | Crest Air',
  description: "Improve your Tucson home's air quality with professional filtration, purifiers, and whole-home solutions. Free consultation. Call (520) 751-8888.",
  robots: { index: false, follow: false },
};

export default function FunnelIndoorAirQualityPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/indoor-air-quality',
        serviceType: 'funnel-indoor-air-quality',
        funnelIdentifier: 'funnel-indoor-air-quality',
        headline: 'Breathe Cleaner Air in Your Tucson Home',
        subheadline: "Tucson's dust, allergens, and dry air affect your family's health. Crest Air installs whole-home air purification, filtration, and humidity solutions that make a real difference.",
        trustBadges: [
          { icon: '🌬️', label: 'Air Purification' },
          { icon: '🏠', label: 'Whole-Home Solutions' },
          { icon: '🤧', label: 'Allergy Relief' },
        ],
        description: [
          "Living in the Sonoran Desert means dealing with dust, pollen, and some of the driest air in the country. If you're noticing more allergies, dry skin, respiratory issues, or excessive dust buildup inside your home, your indoor air quality may be the problem.",
          "Crest Air provides complete indoor air quality solutions for Tucson homes. From high-efficiency air filtration systems and UV air purifiers to whole-home humidifiers and ventilation upgrades, we'll help you find the right solution for your family's needs and budget.",
          "Poor indoor air quality isn't just uncomfortable — the EPA says indoor air can be 2-5x more polluted than outdoor air. Our IAQ assessment identifies exactly what your home needs, and our solutions integrate seamlessly with your existing HVAC system."
        ],
        bulletHeading: 'Indoor Air Quality Solutions',
        bulletPoints: [
          'Whole-home air purification systems',
          'HEPA & high-efficiency filtration upgrades',
          'UV germicidal light installation',
          'Whole-home humidifier & dehumidifier',
          'Air quality testing & assessment',
          'Ventilation system improvements',
          'Duct sealing to prevent dust infiltration',
          'Allergy & asthma-friendly solutions',
        ],
        formSubmitLabel: 'Get a Free IAQ Consultation',
      }}
    />
  );
}
