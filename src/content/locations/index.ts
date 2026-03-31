import { LocationContent } from '@/lib/types';

type LocationSeed = {
  slug: string;
  city: string;
  title: string;
  keywords: string[];
  intro: string;
  whyChooseUs: string[];
  localChallenges: string[];
};

const baseServices = [
  { href: '/services/ac-repair-tucson', label: 'AC Repair' },
  { href: '/services/ac-installation-tucson', label: 'AC Installation' },
  { href: '/services/heating-tucson', label: 'Heating' },
];

const seeds: LocationSeed[] = [
  {
    slug: 'tucson-az',
    city: 'Tucson',
    title: 'HVAC Services in Tucson, AZ',
    keywords: ['hvac tucson az', 'tucson hvac company', 'air conditioning tucson'],
    intro:
      'Crest Air serves Tucson homeowners with HVAC repair, replacement, and seasonal comfort support built around the realities of desert heat and long cooling cycles.',
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
  },
  {
    slug: 'green-valley-az',
    city: 'Green Valley',
    title: 'HVAC Services in Green Valley, AZ',
    keywords: ['hvac green valley az', 'ac repair green valley az', 'air conditioning green valley az'],
    intro:
      'Crest Air serves Green Valley homeowners with HVAC repair, replacement planning, and local comfort support designed for desert heat, long cooling cycles, and year-round system stress.',
    whyChooseUs: [
      'Local support for Green Valley cooling demands',
      'Clear next-step guidance for repair versus replacement',
      'Structured routing into service and location pages',
    ],
    localChallenges: [
      'Heavy summer cooling demand',
      'Long system runtime in desert heat',
      'Airflow and efficiency issues in aging systems',
      'Need for fast repair decisions during peak heat',
    ],
  },
  {
    slug: 'oro-valley-az',
    city: 'Oro Valley',
    title: 'HVAC Services in Oro Valley, AZ',
    keywords: ['hvac oro valley az', 'ac repair oro valley az', 'air conditioning oro valley az'],
    intro:
      'Crest Air supports Oro Valley homes with repair, installation, and heating guidance built around long cooling seasons, energy efficiency, and dependable response time.',
    whyChooseUs: [
      'Local response aligned with Oro Valley residential service needs',
      'Clear guidance into repair and replacement decisions',
      'Stronger local routing into core service pages',
    ],
    localChallenges: [
      'High summer cooling runtime',
      'System efficiency pressure in extreme heat',
      'Airflow inconsistency across larger homes',
      'Rising utility bills from overworked systems',
    ],
  },
  {
    slug: 'marana-az',
    city: 'Marana',
    title: 'HVAC Services in Marana, AZ',
    keywords: ['hvac marana az', 'ac repair marana az', 'air conditioning marana az'],
    intro:
      'Crest Air provides Marana HVAC support with local repair, installation, and heating service paths built for desert climate stress and fast cooling response.',
    whyChooseUs: [
      'Marana-focused service routing with stronger conversion flow',
      'Diagnostic-first repair guidance',
      'Clear links into installation and heating support',
    ],
    localChallenges: [
      'High cooling demand during peak heat',
      'Wear from long runtime cycles',
      'Need for fast no-cool service response',
      'Balancing efficiency and comfort in larger properties',
    ],
  },
  {
    slug: 'vail-az',
    city: 'Vail',
    title: 'HVAC Services in Vail, AZ',
    keywords: ['hvac vail az', 'ac repair vail az', 'air conditioning vail az'],
    intro:
      'Crest Air helps Vail homeowners with HVAC repair, installation planning, and local comfort support designed for heavy cooling use and system reliability.',
    whyChooseUs: [
      'Vail-specific service routing into core HVAC pages',
      'Straightforward next-step guidance',
      'Structured local support for urgent cooling issues',
    ],
    localChallenges: [
      'Long cooling-season runtime',
      'Hot-weather strain on aging equipment',
      'Airflow and comfort balance issues',
      'Need for reliable replacement planning',
    ],
  },
  {
    slug: 'sahuarita-az',
    city: 'Sahuarita',
    title: 'HVAC Services in Sahuarita, AZ',
    keywords: ['hvac sahuarita az', 'ac repair sahuarita az', 'air conditioning sahuarita az'],
    intro:
      'Crest Air supports Sahuarita homeowners with HVAC repair, cooling system planning, and heating guidance tied to local climate stress and service urgency.',
    whyChooseUs: [
      'Sahuarita-first local service framing',
      'Repair and installation guidance without clutter',
      'Cleaner conversion paths into service pages',
    ],
    localChallenges: [
      'Desert heat pressure on cooling systems',
      'High summer energy use from inefficient equipment',
      'Need for stronger preventive service decisions',
      'Fast troubleshooting when cooling drops off suddenly',
    ],
  },
  {
    slug: 'catalina-foothills-az',
    city: 'Catalina Foothills',
    title: 'HVAC Services in Catalina Foothills, AZ',
    keywords: ['hvac catalina foothills az', 'ac repair catalina foothills az', 'air conditioning catalina foothills az'],
    intro:
      'Crest Air provides Catalina Foothills HVAC support with repair, installation, and heating routing built for comfort consistency, efficiency, and fast local response.',
    whyChooseUs: [
      'Catalina Foothills local framing with stronger service routing',
      'Clear repair-versus-installation guidance',
      'Heavier conversion pattern consistent with the upgraded live pass',
    ],
    localChallenges: [
      'Cooling consistency across larger floorplans',
      'Long summer runtime windows',
      'Efficiency loss in older systems',
      'Need for faster repair decisions under desert heat pressure',
    ],
  },
];

export const locations: LocationContent[] = seeds.map((seed) => ({
  slug: seed.slug,
  title: seed.title,
  meta: {
    title: `${seed.city} HVAC Services | Crest Air`,
    description: `Explore Crest Air HVAC services in ${seed.city}, including AC repair, AC installation, heating, and stronger local service routing.`,
    keywords: seed.keywords,
  },
  intro: seed.intro,
  services: [...baseServices, { href: `/locations/${seed.slug}`, label: 'Contact' }],
  whyChooseUs: seed.whyChooseUs,
  localChallenges: seed.localChallenges,
  nearbyAreas: seeds
    .filter((candidate) => candidate.slug !== seed.slug)
    .slice(0, 2)
    .map((candidate) => ({ href: `/locations/${candidate.slug}`, label: `${candidate.city}, AZ` })),
  faqs: [
    {
      question: `What HVAC services are available in ${seed.city}?`,
      answer: `Crest Air supports AC repair, AC installation, heating, and clearer service routing for ${seed.city} homeowners who need dependable cooling performance and practical next steps.`,
    },
    {
      question: `Why is local HVAC support important in ${seed.city}?`,
      answer: `${seed.city} properties still face long cooling seasons, system strain, and repair-versus-replacement decisions that benefit from faster local service routing and stronger HVAC planning.`,
    },
  ],
  cta: {
    heading: `Need HVAC help in ${seed.city}?`,
    body: `Use the local service links below to move directly into AC repair, installation, or heating support with the heavier conversion pattern already proven in the upgraded location template.`,
    primaryLabel: 'See AC Repair',
    primaryHref: '/services/ac-repair-tucson',
    secondaryLabel: 'See AC Installation',
    secondaryHref: '/services/ac-installation-tucson',
  },
}));

export const getLocationBySlug = (slug: string) => locations.find((location) => location.slug === slug);
