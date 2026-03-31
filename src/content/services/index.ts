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
    signs: ['Warm air coming from the vents', 'Weak airflow in one or more rooms', 'Frequent cycling or shutdowns', 'Unusual noises or burning smells'],
    benefits: ['Restore indoor comfort faster', 'Reduce system strain and energy waste', 'Catch larger issues before they become replacements', 'Improve confidence in summer peak performance'],
    process: ['Call or request service', 'Diagnostic visit', 'Repair recommendation', 'Approved repair', 'Performance verification'],
    relatedServices: [
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
      { href: '/services/emergency-hvac-repair-tucson', label: 'Emergency HVAC Repair Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/green-valley-az', label: 'Green Valley, AZ' }],
    faqs: [
      { question: 'How quickly should I schedule AC repair?', answer: 'As soon as cooling performance drops, because Tucson heat can turn a manageable issue into a full system failure quickly.' },
      { question: 'Do you repair older AC systems?', answer: 'Yes. We assess equipment condition first and explain whether repair or replacement is the better long-term move.' },
    ],
    cta: { heading: 'Need fast AC repair in Tucson?', body: 'Talk to Crest Air for diagnostics, repair recommendations, and reliable scheduling.', primaryLabel: 'Request Service', primaryHref: '/locations/tucson-az', secondaryLabel: 'Explore AC Installation', secondaryHref: '/services/ac-installation-tucson' },
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
    signs: ['Current system is breaking down repeatedly', 'High utility bills during cooling season', 'Uneven cooling between rooms', 'Aging equipment with unreliable performance'],
    benefits: ['Improve energy efficiency', 'Reduce repeat repair costs', 'Increase cooling consistency', 'Get a clearer long-term comfort plan'],
    process: ['Assessment', 'System recommendation', 'Installation planning', 'Install day', 'Testing and walkthrough'],
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
      { href: '/services/heating-tucson', label: 'Heating Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' }],
    faqs: [
      { question: 'How do I know when replacement makes sense?', answer: 'Replacement becomes worth considering when repair frequency, utility costs, and cooling inconsistency all start compounding together.' },
      { question: 'Do you help compare system options?', answer: 'Yes. We structure recommendations around size, usage patterns, and efficiency goals instead of generic installs.' },
    ],
    cta: { heading: 'Planning a Tucson AC installation?', body: 'Get a system recommendation built around your home, comfort needs, and budget.', primaryLabel: 'Request Installation Help', primaryHref: '/locations/tucson-az', secondaryLabel: 'Compare Repair Options', secondaryHref: '/services/ac-repair-tucson' },
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
      { href: '/services/emergency-hvac-repair-tucson', label: 'Emergency HVAC Repair Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/sahuarita-az', label: 'Sahuarita, AZ' }],
    faqs: [
      { question: 'Do Tucson homes really need heating service pages?', answer: 'Yes. Heating demand still exists, and search intent supports winter comfort, repair, and replacement topics in the local market.' },
      { question: 'Do you service multiple heating system types?', answer: 'Yes. We support common residential heating configurations and explain the best next step clearly.' },
    ],
    cta: { heading: 'Need heating help in Tucson?', body: 'Talk to Crest Air about repair, diagnostics, and practical system recommendations.', primaryLabel: 'Request Heating Service', primaryHref: '/locations/tucson-az' },
  },
  {
    slug: 'indoor-air-quality-tucson',
    title: 'Indoor Air Quality in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'Indoor Air Quality Tucson | Crest Air',
      description: 'Indoor air quality services in Tucson for filtration, cleaner breathing air, and healthier home comfort.',
      keywords: ['indoor air quality tucson', 'air purifier tucson', 'home air quality tucson'],
    },
    intro: 'Crest Air helps Tucson households improve indoor air quality with cleaner-air strategies built around dust, airflow, filtration, and comfort concerns.',
    overview: [
      'Indoor air quality issues often show up as dust buildup, stale indoor air, allergy aggravation, and uneven airflow across the home.',
      'Our Tucson IAQ service path helps homeowners compare filtration, purification, and airflow-focused upgrades in a practical order.',
    ],
    signs: ['Persistent dust indoors', 'Musty or stale air', 'Allergy aggravation at home', 'Uneven ventilation and airflow'],
    benefits: ['Cleaner indoor breathing conditions', 'Reduced dust and irritants', 'Better airflow confidence', 'More complete comfort strategy'],
    process: ['Indoor comfort review', 'Airflow and filtration assessment', 'Option review', 'Approved improvements', 'Performance check'],
    relatedServices: [
      { href: '/services/duct-cleaning-tucson', label: 'Duct Cleaning Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/catalina-foothills-az', label: 'Catalina Foothills, AZ' }],
    faqs: [
      { question: 'What affects indoor air quality in Tucson homes?', answer: 'Dust, filtration quality, airflow imbalance, and equipment condition all affect indoor air quality in desert-climate homes.' },
      { question: 'Can HVAC upgrades improve indoor air quality?', answer: 'Yes. Better filtration, airflow balancing, and purification options can improve comfort and indoor air conditions significantly.' },
    ],
    cta: { heading: 'Need cleaner indoor air in Tucson?', body: 'Use Crest Air to compare filtration, airflow, and indoor comfort improvements.', primaryLabel: 'Request IAQ Help', primaryHref: '/locations/tucson-az', secondaryLabel: 'See Duct Cleaning', secondaryHref: '/services/duct-cleaning-tucson' },
  },
  {
    slug: 'duct-cleaning-tucson',
    title: 'Duct Cleaning in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'Duct Cleaning Tucson | Crest Air',
      description: 'Duct cleaning and airflow-focused service in Tucson for cleaner circulation and better comfort performance.',
      keywords: ['duct cleaning tucson', 'airflow tucson', 'duct service tucson'],
    },
    intro: 'Crest Air supports Tucson homes with duct cleaning and airflow-focused service for properties dealing with dust, uneven rooms, and circulation problems.',
    overview: [
      'Duct problems often show up as hot and cold rooms, heavy dust, weak airflow, and HVAC systems that seem to run too hard for the comfort they provide.',
      'Our duct-cleaning and airflow service path is designed to identify whether the issue is contamination, leakage, imbalance, or a broader comfort-system problem.',
    ],
    signs: ['Heavy dust around vents', 'Uneven room temperatures', 'Weak airflow', 'Long runtime with uneven comfort'],
    benefits: ['Cleaner circulation pathways', 'Better airflow balance', 'More consistent room comfort', 'Stronger support for overall HVAC efficiency'],
    process: ['Airflow review', 'Duct inspection', 'Cleaning or corrective plan', 'Approved work', 'Performance check'],
    relatedServices: [
      { href: '/services/indoor-air-quality-tucson', label: 'Indoor Air Quality Tucson' },
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/vail-az', label: 'Vail, AZ' }],
    faqs: [
      { question: 'How do I know if duct cleaning is worth it?', answer: 'If airflow is poor, dust is excessive, and room comfort is inconsistent, duct-focused service is often worth evaluating.' },
      { question: 'Can duct issues affect system efficiency?', answer: 'Yes. Airflow restrictions and duct-related imbalance can force the system to run longer while delivering worse comfort.' },
    ],
    cta: { heading: 'Need better airflow in Tucson?', body: 'Use Crest Air to review duct condition, circulation quality, and comfort consistency.', primaryLabel: 'Request Duct Service', primaryHref: '/locations/tucson-az', secondaryLabel: 'See IAQ Services', secondaryHref: '/services/indoor-air-quality-tucson' },
  },
  {
    slug: 'hvac-maintenance-tucson',
    title: 'HVAC Maintenance in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'HVAC Maintenance Tucson | Crest Air',
      description: 'HVAC maintenance in Tucson for tune-ups, efficiency, and fewer peak-season breakdowns.',
      keywords: ['hvac maintenance tucson', 'ac tune up tucson', 'hvac service plan tucson'],
    },
    intro: 'Crest Air provides HVAC maintenance in Tucson for homeowners who want fewer breakdowns, better efficiency, and stronger system readiness before summer heat peaks.',
    overview: [
      'Maintenance is the best path for catching wear, airflow issues, and efficiency loss before they turn into expensive repairs during peak cooling season.',
      'Our Tucson maintenance service supports homeowners who want more confidence in how their system will perform under sustained demand.',
    ],
    signs: ['System has not been serviced recently', 'Cooling performance is slipping', 'Bills are creeping up', 'You want fewer emergency calls'],
    benefits: ['Fewer peak-season surprises', 'Better efficiency over time', 'More predictable system performance', 'Clearer equipment-condition insight'],
    process: ['Seasonal review', 'Cleaning and inspection', 'Performance checks', 'Recommendations', 'Ongoing service planning'],
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
      { href: '/services/duct-cleaning-tucson', label: 'Duct Cleaning Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' }],
    faqs: [
      { question: 'Why is maintenance important in Tucson?', answer: 'Long cooling seasons put more strain on HVAC systems, so maintenance helps reduce failures and preserve efficiency.' },
      { question: 'Can maintenance reduce the chance of emergency service?', answer: 'Yes. Maintenance often catches smaller issues before they become no-cool calls during extreme heat.' },
    ],
    cta: { heading: 'Need HVAC maintenance in Tucson?', body: 'Get ahead of seasonal stress with tune-ups, system checks, and clearer performance planning.', primaryLabel: 'Request Maintenance', primaryHref: '/locations/tucson-az', secondaryLabel: 'See AC Repair', secondaryHref: '/services/ac-repair-tucson' },
  },
  {
    slug: 'emergency-hvac-repair-tucson',
    title: 'Emergency HVAC Repair in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'Emergency HVAC Repair Tucson | Crest Air',
      description: 'Emergency HVAC repair in Tucson for urgent no-cool, no-heat, and system failure situations.',
      keywords: ['emergency hvac repair tucson', 'emergency ac repair tucson', 'urgent hvac service tucson'],
    },
    intro: 'Crest Air provides emergency HVAC repair routing for Tucson property owners who need fast support when cooling or heating issues become urgent.',
    overview: [
      'Emergency HVAC repair is for no-cool, no-heat, or severe performance issues that create immediate comfort and safety pressure.',
      'This service page is built to move high-intent visitors quickly into scheduling and next-step guidance with stronger urgency language.',
    ],
    signs: ['No cooling during extreme heat', 'No heating during cold weather', 'Electrical or shutdown concerns', 'System failure that disrupts occupancy'],
    benefits: ['Faster response path', 'Urgency-first conversion flow', 'Clear service escalation language', 'Direct routing into local support'],
    process: ['Contact Crest Air immediately', 'Urgency triage', 'Diagnostic visit', 'Approved repair path', 'Restore operation'],
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/heating-tucson', label: 'Heating Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
    ],
    serviceAreas: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }, { href: '/locations/marana-az', label: 'Marana, AZ' }],
    faqs: [
      { question: 'What counts as emergency HVAC repair?', answer: 'Complete loss of heating or cooling, shutdowns during extreme weather, and system failures affecting safety or occupancy all justify urgent service.' },
      { question: 'Should I wait if the system is still running a little?', answer: 'If comfort is dropping fast or the system is behaving erratically in extreme heat, urgent diagnosis is still the safer path.' },
    ],
    cta: { heading: 'Need emergency HVAC repair in Tucson?', body: 'Use the urgent service path now before the problem escalates into a full comfort-system failure.', primaryLabel: 'Request Emergency Service', primaryHref: '/locations/tucson-az', secondaryLabel: 'Call Now', secondaryHref: '/locations/tucson-az' },
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
