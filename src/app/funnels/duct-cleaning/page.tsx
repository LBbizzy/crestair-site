import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Professional Duct Cleaning in Tucson | Crest Air',
  description: 'Tucson duct cleaning by licensed HVAC pros. Remove dust, allergens, and debris from your ducts. Improve airflow and efficiency. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelDuctCleaningPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/duct-cleaning',
        serviceType: 'funnel-duct-cleaning',
        funnelIdentifier: 'funnel-duct-cleaning',
        headline: 'Professional Duct Cleaning for Your Tucson Home',
        subheadline: "Tucson's dust doesn't just stay outside — it builds up in your ductwork, reducing efficiency and air quality. Crest Air's professional duct cleaning removes years of buildup.",
        trustBadges: [
          { icon: '💨', label: 'Better Airflow' },
          { icon: '🧹', label: 'Thorough Cleaning' },
          { icon: '📉', label: 'Lower Energy Bills' },
        ],
        description: [
          "In the Tucson desert, dust is a way of life — and it's silently filling your home's ductwork. Over time, dust, pet dander, pollen, and even mold can accumulate in your ducts, getting blown into every room of your house every time your AC runs.",
          "Crest Air provides professional duct cleaning using industry-standard equipment. We don't just blow air through your ducts — we use specialized brushes, vacuums, and negative-pressure systems to thoroughly remove buildup from supply and return ducts, registers, and plenums.",
          "Clean ducts mean better airflow, improved indoor air quality, and a more efficient HVAC system. Many homeowners notice an immediate difference in air quality and a reduction in dust buildup after a professional cleaning."
        ],
        bulletHeading: 'Our Duct Cleaning Process',
        bulletPoints: [
          'Pre-cleaning inspection & camera assessment',
          'Supply & return duct cleaning',
          'Register & grille cleaning',
          'Negative-pressure vacuum system',
          'Rotary brush agitation',
          'Sanitization treatment available',
          'Before & after photos provided',
          'HVAC system performance check included',
        ],
        formSubmitLabel: 'Schedule Duct Cleaning',
      }}
    />
  );
}
