import { ServiceContent } from '@/lib/types';

export const services: ServiceContent[] = [
  {
    slug: 'ac-repair-tucson',
    title: 'AC Repair in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'AC Repair Tucson | Crest Air',
      description:
        'Fast AC repair in Tucson with clear diagnostics, reliable cooling fixes, and local service coverage.',
      keywords: ['ac repair tucson', 'air conditioning repair tucson', 'hvac repair tucson'],
    },
    intro:
      'Crest Air provides AC repair in Tucson for homeowners who need dependable cooling restored quickly, clearly, and without high-pressure upsells.',
    overview: [
      'Our AC repair service focuses on identifying the real cause of no-cool calls, weak airflow, short cycling, frozen coils, and thermostat-related cooling problems.',
      'Each repair visit is structured around diagnosis first so you can understand what failed, why it failed, and whether repair or replacement makes more financial sense.',
    ],
    signs: [
      'Warm air coming from the vents',
      'Weak airflow in one or more rooms',
      'Frequent cycling or shutdowns',
      'Unusual noises or burning smells',
    ],
    benefits: [
      'Restore indoor comfort faster',
      'Reduce system strain and energy waste',
      'Catch larger issues before they become replacements',
      'Improve confidence in summer peak performance',
    ],
    process: ['Call or request service', 'Diagnostic visit', 'Repair recommendation', 'Approved repair', 'Performance verification'],
    relatedServices: [
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
      { href: '/services/heating-tucson', label: 'Heating Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }],
    faqs: [
      {
        question: 'How quickly should I schedule AC repair?',
        answer:
          'As soon as cooling performance drops, because Tucson heat can turn a manageable issue into a full system failure quickly.',
      },
      {
        question: 'Do you repair older AC systems?',
        answer:
          'Yes. We assess equipment condition first and explain whether repair or replacement is the better long-term move.',
      },
    ],
    cta: {
      heading: 'Need fast AC repair in Tucson?',
      body: 'Talk to Crest Air for diagnostics, repair recommendations, and reliable scheduling.',
      primaryLabel: 'Request Service',
      primaryHref: '/locations/tucson-az',
      secondaryLabel: 'Explore AC Installation',
      secondaryHref: '/services/ac-installation-tucson',
    },
  },
  {
    slug: 'ac-installation-tucson',
    title: 'AC Installation in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'AC Installation Tucson | Crest Air',
      description:
        'Professional AC installation in Tucson with sizing guidance, replacement planning, and efficient system recommendations.',
      keywords: ['ac installation tucson', 'air conditioner replacement tucson', 'new ac system tucson'],
    },
    intro:
      'Crest Air helps Tucson property owners replace aging or underperforming systems with AC installation guidance built around comfort, efficiency, and long-term value.',
    overview: [
      'Installation projects start with load considerations, layout review, and usage goals so the replacement system actually fits the home instead of just matching the old equipment.',
      'We explain timeline, scope, and practical tradeoffs between upfront cost, efficiency, and expected long-term performance.',
    ],
    signs: [
      'Current system is breaking down repeatedly',
      'High utility bills during cooling season',
      'Uneven cooling between rooms',
      'Aging equipment with unreliable performance',
    ],
    benefits: [
      'Improve energy efficiency',
      'Reduce repeat repair costs',
      'Increase cooling consistency',
      'Get a clearer long-term comfort plan',
    ],
    process: ['Assessment', 'System recommendation', 'Installation planning', 'Install day', 'Testing and walkthrough'],
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/heating-tucson', label: 'Heating Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }],
    faqs: [
      {
        question: 'How do I know when replacement makes sense?',
        answer:
          'Replacement becomes worth considering when repair frequency, utility costs, and cooling inconsistency all start compounding together.',
      },
      {
        question: 'Do you help compare system options?',
        answer:
          'Yes. We structure recommendations around size, usage patterns, and efficiency goals instead of generic installs.',
      },
    ],
    cta: {
      heading: 'Planning a Tucson AC installation?',
      body: 'Get a system recommendation built around your home, comfort needs, and budget.',
      primaryLabel: 'Request Installation Help',
      primaryHref: '/locations/tucson-az',
      secondaryLabel: 'Compare Repair Options',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
  {
    slug: 'heating-tucson',
    title: 'Heating Services in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'Heating Tucson | Crest Air',
      description: 'Heating repair and replacement support for Tucson homes that need reliable cold-season comfort.',
      keywords: ['heating tucson', 'furnace repair tucson', 'heat pump service tucson'],
    },
    intro:
      'Crest Air supports Tucson heating systems with repair, replacement planning, and practical cold-season comfort guidance.',
    overview: [
      'Even in a cooling-dominant market like Tucson, dependable heating matters when cold snaps expose weak components, airflow issues, or thermostat problems.',
      'Our heating service work covers common comfort and performance issues while helping homeowners decide whether service or replacement is the better path.',
    ],
    signs: ['Cold air from vents', 'Uneven heating', 'System won’t start', 'Short cycling'],
    benefits: ['Improve comfort', 'Reduce cold-weather reliability issues', 'Support better system efficiency', 'Protect equipment lifespan'],
    process: ['Inspection', 'Diagnosis', 'Recommendation', 'Approved service', 'Testing'],
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }],
    faqs: [
      {
        question: 'Do Tucson homes really need heating service pages?',
        answer:
          'Yes. Heating demand still exists, and search intent supports winter comfort, repair, and replacement topics in the local market.',
      },
      {
        question: 'Do you service multiple heating system types?',
        answer:
          'Yes. We support common residential heating configurations and explain the best next step clearly.',
      },
    ],
    cta: {
      heading: 'Need heating help in Tucson?',
      body: 'Talk to Crest Air about repair, diagnostics, and practical system recommendations.',
      primaryLabel: 'Request Heating Service',
      primaryHref: '/locations/tucson-az',
    },
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
