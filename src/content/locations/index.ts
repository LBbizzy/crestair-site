import { LocationContent } from '@/lib/types';

export const locations: LocationContent[] = [
  {
    slug: 'tucson-az',
    title: 'HVAC Services in Tucson, AZ',
    meta: {
      title: 'HVAC Tucson AZ | Crest Air',
      description:
        'Explore Crest Air HVAC services in Tucson, including AC repair, AC installation, and heating support.',
      keywords: ['hvac tucson az', 'tucson hvac company', 'air conditioning tucson'],
    },
    intro:
      'Crest Air serves Tucson homeowners with HVAC repair, replacement, and seasonal comfort support built around the realities of desert heat and long cooling cycles.',
    services: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair' },
      { href: '/services/ac-installation-tucson', label: 'AC Installation' },
      { href: '/services/heating-tucson', label: 'Heating' },
    ],
    whyChooseUs: [
      'Local understanding of Tucson cooling demand',
      'Clear recommendations without pressure',
      'Structured diagnostics and installation planning',
    ],
    localChallenges: [
      'Extreme summer heat loads',
      'Long system runtime windows',
      'Dust and airflow performance concerns',
      'Aging rooftop and split-system equipment',
    ],
    nearbyAreas: [],
    faqs: [
      {
        question: 'What services are available in Tucson?',
        answer:
          'Crest Air supports AC repair, AC installation, heating, and related comfort-system service work for Tucson properties.',
      },
      {
        question: 'How should Tucson homeowners plan for cooling season?',
        answer:
          'The best approach is to address airflow, efficiency, and small repair issues early so the system is not overstressed during peak heat.',
      },
    ],
    cta: {
      heading: 'Need HVAC help in Tucson?',
      body: 'Use the service pages below to compare repair, installation, and heating support options.',
      primaryLabel: 'See AC Repair',
      primaryHref: '/services/ac-repair-tucson',
      secondaryLabel: 'See AC Installation',
      secondaryHref: '/services/ac-installation-tucson',
    },
  },
];

export const getLocationBySlug = (slug: string) => locations.find((location) => location.slug === slug);
