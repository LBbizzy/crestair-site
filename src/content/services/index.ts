import { ServiceContent } from '@/lib/types';

export const services: ServiceContent[] = [
  {
    slug: 'ac-repair-tucson',
    title: 'AC Repair in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'AC Repair Tucson | Crest Air',
      description: 'Fast AC repair in Tucson with clear diagnostics, reliable cooling fixes, and local service coverage.',
      keywords: ['ac repair tucson', 'air conditioning repair tucson', 'hvac repair tucson'],
    },
    problemHeadline: 'AC Not Cooling in Tucson?',
    problemDescription:
      'Warm air, breaker trips, or a system that just can’t keep up with the desert heat? Crest Air dispatches same-day Tucson technicians with honest pricing before any work begins.',
    intro:
      'Crest Air delivers same-day AC repair across Tucson for homeowners who want dependable cooling restored quickly without upsell pressure.',
    overview: [
      'We diagnose condenser, air handler, thermostat, and duct issues to find the real reason your AC is struggling.',
      'After testing refrigerant, electrical, and airflow components, we explain repair options with photos, parts availability, and clear pricing.',
    ],
    signs: [
      'Warm air or weak airflow from supply vents',
      'Breaker tripping or the outdoor unit shutting off unexpectedly',
      'System runs nonstop but the indoor temperature barely drops',
      'Ice forming on refrigerant lines or outdoor equipment',
      'Burning smells, buzzing, or rattling noises during operation',
      'Indoor humidity or hot-room complaints even with the AC on',
    ],
    whatsIncluded: [
      'Arrival updates plus protective floor coverings for your home',
      'Full diagnostic on condenser, air handler, thermostat, and airflow',
      'Electrical, refrigerant, and airflow testing with meter readings',
      'Clear repair plan with upfront parts and labor pricing before work',
      'Approved repairs, component replacement, and performance verification with photos',
    ],
    benefits: [
      'Restore indoor comfort faster',
      'Reduce system strain and energy waste',
      'Catch larger issues before they become replacements',
      'Improve confidence in summer peak performance',
    ],
    process: ['Call or request service', 'Diagnostic visit', 'Repair recommendation', 'Approved repair', 'Performance verification'],
    testimonial: {
      quote: 'They had our eastside AC blowing cold again within two hours of calling.',
      name: 'Lisa H.',
      area: 'East Tucson',
    },
    trustLine: 'Licensed, insured, and background-checked Tucson technicians who specialize in no-cool emergencies.',
    financingNote: 'Need a bigger fix? Ask about Crest Air financing for compressor, coil, or blower replacements so you can spread payments out.',
    maintenanceNote: 'Prevent surprise breakdowns with a Tucson-tuned maintenance plan that cleans coils, clears drains, and checks electrical components before summer peaks.',
    financingLink: { href: '/financing', label: 'See financing options' },
    maintenanceLink: { href: '/services/hvac-maintenance-tucson', label: 'Explore maintenance plans' },
    relatedServices: [
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
      { href: '/services/emergency-hvac-repair-tucson', label: 'Emergency HVAC Repair Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/green-valley-az', label: 'Green Valley, AZ' },
    ],
    faqs: [
      {
        question: 'How fast can you arrive for AC repair in Tucson?',
        answer: 'Most Tucson addresses qualify for same-day service. We send text/email updates with the technician’s ETA and keep you posted if traffic or weather shifts the arrival window.',
      },
      {
        question: 'What does AC repair typically cost?',
        answer: 'We diagnose first, then review repair options with parts and labor pricing before work begins. Minor fixes often range $189–$450; larger component replacements are quoted onsite with financing if needed.',
      },
      {
        question: 'What should I expect during the visit?',
        answer: 'Your technician inspects indoor/outdoor equipment, documents the issue, gets approval before work, tests the system afterward, and emails a summary with warranty details.',
      },
    ],
    cta: {
      heading: 'Restore cold air today',
      body: 'Book a same-day AC repair slot and get upfront pricing before work begins.',
      primaryLabel: 'Book Same-Day AC Repair',
      primaryHref: '/contact',
      secondaryLabel: 'Compare Installation Options',
      secondaryHref: '/services/ac-installation-tucson',
    },
  },
  {
    slug: 'ac-installation-tucson',
    title: 'AC Installation in Tucson',
    location: 'Tucson, AZ',
    meta: {
      title: 'AC Installation Tucson | Crest Air',
      description: 'Professional AC installation in Tucson with sizing guidance, replacement planning, and efficient system recommendations.',
      keywords: ['ac installation tucson', 'air conditioner replacement tucson', 'new ac system tucson'],
    },
    problemHeadline: 'Need Fast AC Installation in Tucson?',
    problemDescription:
      'If repairs keep stacking up or your system is 10+ years old, Crest Air designs a right-sized replacement with honest quotes and fast start dates once you approve.',
    intro:
      'Crest Air helps Tucson property owners replace aging or underperforming systems with installation guidance built around comfort, efficiency, and long-term value.',
    overview: [
      'Installation projects start with load calculations, duct review, and usage goals so the new system truly fits your home.',
      'We explain the timeline, scope, and tradeoffs between upfront cost, efficiency, and expected long-term performance before ordering equipment.',
    ],
    signs: [
      'Frequent or expensive AC repairs over the last two seasons',
      'Utility bills climbing even after maintenance',
      'Uneven cooling across rooms or floors',
      'System uses R-22 refrigerant or has outdated components',
      'Home never reaches the thermostat set point during peak heat',
      'You’re planning a remodel or addition that changes cooling loads',
    ],
    whatsIncluded: [
      'Manual J/S/D load calculations and duct evaluation',
      'Good/better/best equipment options with SEER2 and comfort add-ons',
      'Permitting, equipment ordering, and project scheduling',
      'Removal of old equipment, install, line set, and duct adjustments',
      'Startup verification, airflow balancing, and homeowner walkthrough',
    ],
    benefits: ['Improve energy efficiency', 'Reduce repeat repair costs', 'Increase cooling consistency', 'Get a clearer long-term comfort plan'],
    process: ['Assessment', 'System recommendation', 'Installation planning', 'Install day', 'Testing and walkthrough'],
    testimonial: {
      quote: 'Crest Air handled our whole-home replacement in two days and cleaned up better than they found it.',
      name: 'Angela M.',
      area: 'Oro Valley',
    },
    trustLine: 'Licensed ROC contractors with insured crews, crane partners, and Tucson permitting expertise.',
    financingNote: 'Need a bigger fix? Ask about low-payment financing for complete system installs, ductwork upgrades, and indoor air improvements.',
    maintenanceNote: 'Protect your new equipment with Crest Air maintenance to keep warranties valid and efficiency high.',
    financingLink: { href: '/financing', label: 'Review financing plans' },
    maintenanceLink: { href: '/services/hvac-maintenance-tucson', label: 'Schedule post-install maintenance' },
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
      { href: '/services/heating-tucson', label: 'Heating Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
    ],
    faqs: [
      {
        question: 'How long does an AC installation take?',
        answer: 'Most single-system installs finish in one day. Larger homes or duct upgrades may run into day two. We review the schedule with you before work begins.',
      },
      {
        question: 'What’s the cost range for a new system?',
        answer: 'We provide good/better/best quotes after sizing the home. Pricing depends on tonnage, SEER2 rating, and accessories. Financing is available for approved credit.',
      },
      {
        question: 'What should I expect on install day?',
        answer: 'Crews arrive on time, protect flooring, remove old equipment, install the new system, run tests, and show you how to operate everything before cleanup.',
      },
    ],
    cta: {
      heading: 'Plan your Tucson AC installation now',
      body: 'Lock in a design consultation and secure an install date before peak-season demand hits.',
      primaryLabel: 'Schedule Installation Consult',
      primaryHref: '/contact',
      secondaryLabel: 'See Maintenance Plans',
      secondaryHref: '/services/hvac-maintenance-tucson',
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
    problemHeadline: 'Heating Not Keeping Up During Tucson Nights?',
    problemDescription:
      'Cold air from the vents or a furnace that won’t stay on? Crest Air delivers same-day diagnostics for furnaces and heat pumps so you’re warm again before the temperature drops.',
    intro:
      'Crest Air supports Tucson heating systems with repair, replacement planning, and practical cold-season comfort guidance.',
    overview: [
      'Even desert markets need dependable heat when temperatures dip. We troubleshoot furnaces, heat pumps, and air handlers for fast resolutions.',
      'You get clear recommendations on repair versus replacement, including safety considerations and cost comparisons.',
    ],
    signs: [
      'Cold air or low airflow from supply vents',
      'Burning or electrical smells after startup',
      'System short cycling or shutting off before reaching temperature',
      'Thermostat errors or breaker trips',
      'Unusual noises, rattling, or banging from the furnace',
      'Carbon monoxide detector alerts or standing pilot issues',
    ],
    whatsIncluded: [
      'Same-day arrival window and safety check on gas and electrical components',
      'Combustion analysis, heat exchanger inspection, and airflow readings',
      'Thermostat calibration plus wiring and control tests',
      'Clear repair or replacement plan with upfront pricing',
      'Post-repair heating performance verification and homeowner tips',
    ],
    benefits: ['Improve comfort', 'Reduce cold-weather reliability issues', 'Support better system efficiency', 'Protect equipment lifespan'],
    process: ['Inspection', 'Diagnosis', 'Recommendation', 'Approved service', 'Testing'],
    testimonial: {
      quote: 'They fixed our heat pump on a 35° morning before the kids woke up for school.',
      name: 'Rafael D.',
      area: 'Sahuarita',
    },
    trustLine: 'Licensed technicians trained on furnaces, heat pumps, and dual-fuel systems for Southern Arizona homes.',
    financingNote: 'Need a bigger fix? Financing is available for major heat pump or furnace replacements so you can stay comfortable without delaying safety repairs.',
    maintenanceNote: 'Keep heating components ready for the next cold snap with Crest Air maintenance that inspects burners, safety switches, and airflow.',
    financingLink: { href: '/financing', label: 'Review heating financing' },
    maintenanceLink: { href: '/services/hvac-maintenance-tucson', label: 'Schedule seasonal tune-up' },
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
      { href: '/services/emergency-hvac-repair-tucson', label: 'Emergency HVAC Repair Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/sahuarita-az', label: 'Sahuarita, AZ' },
    ],
    faqs: [
      {
        question: 'Do you service both gas furnaces and heat pumps?',
        answer: 'Yes. We diagnose and repair electric, gas, and dual-fuel heating systems throughout Tucson and the surrounding communities.',
      },
      {
        question: 'How quickly can heating service be scheduled?',
        answer: 'Same-day visits are usually available when temperatures drop. We prioritize no-heat calls and carry common parts on the truck.',
      },
      {
        question: 'What should I expect during a heating repair?',
        answer: 'Expect combustion and electrical testing, clear explanations of the problem, upfront repair options, and a safety check before we leave.',
      },
    ],
    cta: {
      heading: 'Book heating service before tonight',
      body: 'Get a same-day furnace or heat pump visit so cold rooms don’t ruin the evening.',
      primaryLabel: 'Schedule Heating Service',
      primaryHref: '/contact',
      secondaryLabel: 'Call for Priority Dispatch',
      secondaryHref: '/services/emergency-hvac-repair-tucson',
    },
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
    problemHeadline: 'Dusty Tucson Air Making Breathing Tough?',
    problemDescription:
      'If dust, allergies, or stale air linger inside, Crest Air builds an IAQ plan with same-day assessments and clear upgrade options for Tucson homes.',
    intro:
      'Crest Air helps Tucson households improve indoor air quality with cleaner-air strategies built around dust, airflow, filtration, and comfort concerns.',
    overview: [
      'IAQ issues often show up as dust buildup, stale air, allergy flare-ups, and uneven ventilation.',
      'We evaluate filtration, duct condition, airflow, and humidity so you can choose the right combination of filters, purification, or duct improvements.',
    ],
    signs: [
      'Persistent dust on furniture shortly after cleaning',
      'Musty, stale, or smoky smells inside the home',
      'Family members experiencing allergy or asthma flare-ups indoors',
      'Uneven ventilation or closed rooms feeling stuffy',
      'Visible dust blowing from supply vents',
      'Recent construction, pets, or wildfire smoke introducing particles',
    ],
    whatsIncluded: [
      'Whole-home walkthrough focused on dust sources and ventilation',
      'Filter cabinet and return-air inspection with MERV upgrade options',
      'Duct condition review plus leakage and airflow testing',
      'Recommendations for purification, UV, or humidity control',
      'Written plan with product options, pricing, and maintenance tips',
    ],
    benefits: ['Cleaner indoor breathing conditions', 'Reduced dust and irritants', 'Better airflow confidence', 'More complete comfort strategy'],
    process: ['Indoor comfort review', 'Airflow and filtration assessment', 'Option review', 'Approved improvements', 'Performance check'],
    testimonial: {
      quote: 'Our allergy symptoms dropped within a week after Crest Air upgraded filtration and sealed the returns.',
      name: 'Priya S.',
      area: 'Catalina Foothills',
    },
    trustLine: 'Tucson specialists trained on filtration, purification, humidity, and airflow balancing for desert homes.',
    financingNote: 'Need a bigger fix? Financing can bundle duct sealing, purification, and filtration upgrades into affordable payments.',
    maintenanceNote: 'Pair IAQ upgrades with maintenance so filters, UV lamps, and drains stay on schedule.',
    financingLink: { href: '/financing', label: 'Finance IAQ upgrades' },
    maintenanceLink: { href: '/services/hvac-maintenance-tucson', label: 'Add maintenance coverage' },
    relatedServices: [
      { href: '/services/duct-cleaning-tucson', label: 'Duct Cleaning Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/catalina-foothills-az', label: 'Catalina Foothills, AZ' },
    ],
    faqs: [
      {
        question: 'How do you test indoor air quality?',
        answer: 'We inspect filters, ductwork, and ventilation, then measure airflow and particle sources to recommend the right mix of filtration and purification.',
      },
      {
        question: 'Do IAQ upgrades require system downtime?',
        answer: 'Most filter upgrades, UV lights, and purification installs happen same-day with minimal downtime. Larger duct projects are scheduled ahead of time.',
      },
      {
        question: 'How much do IAQ improvements cost?',
        answer: 'Solutions range from upgraded filters (under $250) to whole-home purification or duct sealing. We outline good/better/best options with financing if needed.',
      },
    ],
    cta: {
      heading: 'Get a Tucson IAQ plan now',
      body: 'Schedule an in-home assessment and breathe easier with upgrades sized for your home.',
      primaryLabel: 'Book IAQ Assessment',
      primaryHref: '/contact',
      secondaryLabel: 'See Duct Cleaning',
      secondaryHref: '/services/duct-cleaning-tucson',
    },
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
    problemHeadline: 'Dust Clouds or Uneven Rooms in Tucson?',
    problemDescription:
      'If vents blow dust every time the system starts or certain rooms never cool, Crest Air inspects and cleans ducts, registers, and plenums with Tucson-specific equipment.',
    intro:
      'Crest Air supports Tucson homes with duct cleaning and airflow-focused service for properties dealing with dust, uneven rooms, and circulation problems.',
    overview: [
      'Duct issues show up as hot/cold rooms, heavy dust, weak airflow, and longer runtimes.',
      'We determine whether the problem is contamination, leakage, imbalance, or a broader comfort-system issue before recommending fixes.',
    ],
    signs: [
      'Dust blowing from vents or collecting quickly on surfaces',
      'Uneven room temperatures even after thermostat adjustments',
      'Musty odors when the HVAC system turns on',
      'Visible debris inside registers or returns',
      'Rooms that never get enough airflow compared to others',
      'Higher energy bills with little comfort to show for it',
    ],
    whatsIncluded: [
      'Camera inspection of trunk lines, returns, and supply branches',
      'Sealed negative-air cleaning with HEPA containment',
      'Register, grille, and boot cleaning plus sanitizer when needed',
      'Airflow balancing recommendations and minor damper adjustments',
      'Post-cleaning report with photos and next-step options',
    ],
    benefits: ['Cleaner circulation pathways', 'Better airflow balance', 'More consistent room comfort', 'Stronger support for overall HVAC efficiency'],
    process: ['Airflow review', 'Duct inspection', 'Cleaning or corrective plan', 'Approved work', 'Performance check'],
    testimonial: {
      quote: 'Dust dropped dramatically and every room cools evenly after their duct cleaning and sealing.',
      name: 'Carmen W.',
      area: 'Marana',
    },
    trustLine: 'NADCA-style duct cleaning practices paired with licensed HVAC techs who can spot bigger system issues.',
    financingNote: 'Need a bigger fix? Bundle duct sealing or insulation upgrades with financing to tackle everything at once.',
    maintenanceNote: 'Pair duct cleaning with maintenance so filters, coils, and drains stay clean throughout the year.',
    financingLink: { href: '/financing', label: 'Bundle duct upgrades' },
    maintenanceLink: { href: '/services/hvac-maintenance-tucson', label: 'Schedule maintenance add-on' },
    relatedServices: [
      { href: '/services/indoor-air-quality-tucson', label: 'Indoor Air Quality Tucson' },
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/vail-az', label: 'Vail, AZ' },
    ],
    faqs: [
      {
        question: 'How often should ducts be cleaned in Tucson?',
        answer: 'Most homes benefit every 4–6 years, but homes with pets, remodel projects, or heavy dust may need it sooner. We evaluate and recommend a cadence.',
      },
      {
        question: 'Will duct cleaning disrupt the home?',
        answer: 'We protect floors, seal registers, and use negative-air equipment so dust stays contained. Most jobs finish the same day.',
      },
      {
        question: 'Does duct cleaning improve cooling performance?',
        answer: 'Yes. Removing debris and balancing airflow helps conditioned air reach every room, reducing runtime and improving comfort.',
      },
    ],
    cta: {
      heading: 'Clear out Tucson dust today',
      body: 'Schedule professional duct cleaning and airflow balancing before another heat wave hits.',
      primaryLabel: 'Book Duct Cleaning',
      primaryHref: '/contact',
      secondaryLabel: 'Discuss IAQ Upgrades',
      secondaryHref: '/services/indoor-air-quality-tucson',
    },
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
    problemHeadline: 'Want to Avoid Summer HVAC Breakdowns?',
    problemDescription:
      'Long Tucson cooling seasons punish neglected systems. A Crest Air maintenance visit catches airflow, electrical, and refrigerant issues before they become no-cool emergencies.',
    intro:
      'Crest Air provides HVAC maintenance in Tucson for homeowners who want fewer breakdowns, better efficiency, and stronger system readiness before summer heat peaks.',
    overview: [
      'Maintenance is the best path for catching wear, airflow issues, and efficiency loss before they turn into expensive repairs.',
      'Our Tucson maintenance service supports homeowners who want more confidence in how their system will perform under sustained demand.',
    ],
    signs: [
      'It’s been more than a year since the last professional tune-up',
      'Cooling performance is slipping or certain rooms feel warm',
      'Utility bills are rising despite similar usage',
      'You’ve had more than one repair call in the past year',
      'Water near the air handler or clogged drain lines',
      'You want to keep manufacturer warranties valid',
    ],
    whatsIncluded: [
      'Full cooling/heating inspection with a 25+ point checklist',
      'Coil, drain, filter, and blower cleaning as needed',
      'Electrical, refrigerant, and safety switch testing with meter readings',
      'Thermostat calibration plus performance documentation',
      'Priority scheduling, repair discounts, and service reminders',
    ],
    benefits: ['Fewer peak-season surprises', 'Better efficiency over time', 'More predictable system performance', 'Clearer equipment-condition insight'],
    process: ['Seasonal review', 'Cleaning and inspection', 'Performance checks', 'Recommendations', 'Ongoing service planning'],
    testimonial: {
      quote: 'Their maintenance plan caught a failing capacitor before it stranded us mid-July.',
      name: 'Darryl K.',
      area: 'Marana',
    },
    trustLine: 'Dedicated Tucson maintenance team with NATE-certified technicians who know desert HVAC stress points.',
    financingNote: 'Need a bigger fix? Financing is available if maintenance uncovers major repairs or equipment replacement.',
    maintenanceNote: 'Prevent future breakdowns with Crest Air’s seasonal maintenance membership—priority scheduling, discounts, and documented service history.',
    financingLink: { href: '/financing', label: 'Discuss repair financing' },
    maintenanceLink: { href: '/contact', label: 'Enroll in maintenance' },
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
      { href: '/services/duct-cleaning-tucson', label: 'Duct Cleaning Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
    ],
    faqs: [
      {
        question: 'How often should HVAC maintenance be performed in Tucson?',
        answer: 'We recommend twice per year—once before cooling season and once before heating—to handle the extreme runtime Tucson systems endure.',
      },
      {
        question: 'What does a maintenance visit cost?',
        answer: 'Individual tune-ups start around $159, or you can enroll in a maintenance membership that spreads cost out and adds member perks.',
      },
      {
        question: 'Does maintenance really prevent emergencies?',
        answer: 'Yes. We routinely catch weak capacitors, dirty coils, clogged drains, and airflow issues before they turn into expensive no-cool calls.',
      },
    ],
    cta: {
      heading: 'Schedule your seasonal tune-up',
      body: 'Reserve a maintenance visit before the next heat spike so your system is ready.',
      primaryLabel: 'Book Maintenance Visit',
      primaryHref: '/contact',
      secondaryLabel: 'Learn About AC Repair',
      secondaryHref: '/services/ac-repair-tucson',
    },
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
    problemHeadline: 'No Cooling or Heating Tonight?',
    problemDescription:
      'If your system fails after hours or during extreme weather, Crest Air routes emergency technicians immediately with honest pricing and next-step guidance.',
    intro:
      'Crest Air provides emergency HVAC repair routing for Tucson property owners who need fast support when cooling or heating issues become urgent.',
    overview: [
      'Emergency repair covers no-cool, no-heat, electrical concerns, and failures affecting safety or occupancy.',
      'We triage the call, dispatch the right technician, and communicate the timeline so you know when help arrives.',
    ],
    signs: [
      'Complete loss of cooling during triple-digit temperatures',
      'No heating during a cold snap or overnight freeze warning',
      'Burning smells, smoke, or electrical arcing at the HVAC equipment',
      'Breaker trips immediately when the system starts',
      'Flooding or major water leak from the air handler',
      'Elderly, medical, or childcare needs that can’t wait for business hours',
    ],
    whatsIncluded: [
      'Immediate phone triage with priority scheduling',
      'ETA updates and instructions to keep the home safe while we’re en route',
      'Comprehensive diagnostic focused on restoring operation quickly',
      'Temporary solutions when parts must be ordered',
      'Detailed repair plan, pricing, and path to permanent resolution',
    ],
    benefits: ['Faster response path', 'Urgency-first conversion flow', 'Clear service escalation language', 'Direct routing into local support'],
    process: ['Contact Crest Air immediately', 'Urgency triage', 'Diagnostic visit', 'Approved repair path', 'Restore operation'],
    testimonial: {
      quote: 'They arrived after hours, got us cooling again, and followed up the next morning with a permanent fix.',
      name: 'Brittany C.',
      area: 'Central Tucson',
    },
    trustLine: '24/7 on-call technicians who are licensed, insured, and trained for high-pressure HVAC failures.',
    financingNote: 'Need a bigger fix? Emergency repairs can be financed when major components fail unexpectedly.',
    maintenanceNote: 'After the emergency, enroll in maintenance so we can monitor the system and prevent repeat issues.',
    financingLink: { href: '/financing', label: 'Finance emergency repairs' },
    maintenanceLink: { href: '/services/hvac-maintenance-tucson', label: 'Schedule follow-up maintenance' },
    relatedServices: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
      { href: '/services/heating-tucson', label: 'Heating Tucson' },
      { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance Tucson' },
    ],
    serviceAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/marana-az', label: 'Marana, AZ' },
    ],
    faqs: [
      {
        question: 'Do you charge extra for emergency service?',
        answer: 'We have an emergency diagnostic fee that includes after-hours dispatch. All repair pricing is reviewed with you before work begins.',
      },
      {
        question: 'What if parts are unavailable overnight?',
        answer: 'We stabilize the system with temporary solutions when possible, then return the next day with the required parts.',
      },
      {
        question: 'Can I enroll in maintenance after an emergency?',
        answer: 'Yes. Many homeowners add maintenance immediately so we can monitor the system and prevent repeat failures.',
      },
    ],
    cta: {
      heading: 'Call for emergency HVAC help now',
      body: 'Get a Crest Air technician en route immediately to stabilize your home.',
      primaryLabel: 'Request Emergency Service',
      primaryHref: '/contact',
      secondaryLabel: 'Call Now',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
