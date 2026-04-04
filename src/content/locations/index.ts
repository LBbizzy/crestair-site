import { LocationContent } from '@/lib/types';

const sharedServices = [
  { href: '/services/ac-repair-tucson', label: 'AC Repair' },
  { href: '/services/ac-installation-tucson', label: 'AC Installation' },
  { href: '/services/heating-tucson', label: 'Heating' },
  { href: '/services/hvac-maintenance-tucson', label: 'HVAC Maintenance' },
];

export const locations: LocationContent[] = [
  {
    slug: 'tucson-az',
    city: 'Tucson',
    title: 'HVAC Services in Tucson, AZ',
    meta: {
      title: 'Tucson HVAC Services | Crest Air',
      description: 'Same-day HVAC repair, installation, and maintenance across Tucson, from the University corridor to the foothills.',
      keywords: ['hvac tucson az', 'tucson ac repair', 'air conditioning tucson'],
    },
    intro:
      'Downtown adobe bungalows, Sam Hughes casitas, and foothills view homes all battle triple-digit highs, monsoon humidity, and dusty spring winds. Crest Air keeps Tucson systems tuned with nearby technicians, text updates, and honest guidance when repair vs. replacement decisions get complicated.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Dispatch hub on Grant Road keeps technicians minutes from I-10 and Aviation Parkway',
      'Rooftop unit specialists who know University-area historic roofs',
      'Monsoon-readiness checklists protecting electrical and drainage systems',
    ],
    localChallenges: [
      'Rooftop package units baking in full sun along Broadway and Speedway',
      'Dust and pollen blowing off the Santa Cruz riverbed clogging filters',
      'High humidity spikes during July monsoon bursts stressing drain pans',
      'Older swamp-cooler conversions near 4th Avenue needing airflow balancing',
    ],
    testimonial: {
      quote: 'They stabilized our historic Armory Park home after a monsoon surge knocked the rooftop unit offline.',
      name: 'Marisol V.',
      neighborhood: 'Armory Park',
    },
    nearbyAreas: [
      { href: '/locations/south-tucson-az', label: 'South Tucson, AZ' },
      { href: '/locations/flowing-wells-az', label: 'Flowing Wells, AZ' },
    ],
    faqs: [
      {
        question: 'Do you service both historic and new Tucson homes?',
        answer: 'Yes. We handle adobe bungalows near the University, high-rise condos downtown, and newer foothills builds with zoning and smart controls.',
      },
      {
        question: 'How fast can you respond during monsoon outages?',
        answer: 'We stage technicians along I-10, Kolb, and Oracle to reach most Tucson addresses the same day, even when streets flood or lights flicker.',
      },
      {
        question: 'Can you help me decide between repair and replacement?',
        answer: 'Every visit includes a diagnostic summary, photos, and honest ROI comparisons so you can decide whether another repair or a full install makes sense.',
      },
    ],
    cta: {
      heading: 'Book Tucson HVAC service',
      body: 'Reserve a same-day visit or start a replacement consult before the next heat wave hits the Old Pueblo.',
      primaryLabel: 'Schedule Tucson Service',
      primaryHref: '#request-service',
      secondaryLabel: 'Explore AC Repair',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
  {
    slug: 'green-valley-az',
    city: 'Green Valley',
    title: 'HVAC Services in Green Valley, AZ',
    meta: {
      title: 'Green Valley HVAC Services | Crest Air',
      description: 'Trusted HVAC repair and installation for Green Valley golf communities and Santa Cruz Valley retirees.',
      keywords: ['green valley hvac', 'ac repair green valley', 'santa cruz valley air conditioning'],
    },
    intro:
      'Homes along Camino del Sol, Quail Creek villas, and Santa Rita foothill properties all face long cooling seasons and older ductwork. Crest Air provides same-day repair, installation guidance, and maintenance plans tailored to Green Valley’s retirement lifestyle and HOA requirements.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Technicians familiar with golf-course HOA guidelines and access gates',
      'Clear communication for seasonal residents managing homes from out of state',
      'Experience modernizing older duct systems and heat pumps found along Continental Road',
    ],
    localChallenges: [
      'Aging heat pumps losing efficiency on the Santa Cruz Valley floor',
      'Dust from desert washes clogging filters and indoor coils',
      'Seasonal residents needing remote updates when issues arise',
      'Power surges along I-19 corridor stressing capacitors and boards',
    ],
    testimonial: {
      quote: 'Crest Air keeps our Esperanza Estates casita cooling all summer while we travel—updates hit my phone each visit.',
      name: 'Gordon L.',
      neighborhood: 'Esperanza Estates',
    },
    nearbyAreas: [
      { href: '/locations/sahuarita-az', label: 'Sahuarita, AZ' },
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
    ],
    faqs: [
      {
        question: 'Can you coordinate with my HOA or property manager?',
        answer: 'Absolutely. We secure approvals, meet gate guards, and provide documentation for Esperanza Estates, The Villages, Quail Creek, and more.',
      },
      {
        question: 'Do you help with snowbird home readiness?',
        answer: 'Yes. We offer seasonal inspections before you arrive and text/email summaries when you’re away so surprises don’t derail your stay.',
      },
      {
        question: 'Are financing options available for retirees on fixed incomes?',
        answer: 'We provide low-payment plans for major repairs or replacements so budgeting stays predictable.',
      },
    ],
    cta: {
      heading: 'Schedule Green Valley HVAC service',
      body: 'Keep your desert retreat comfortable year-round with trusted local technicians.',
      primaryLabel: 'Book Green Valley Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'See Maintenance Plans',
      secondaryHref: '/services/hvac-maintenance-tucson',
    },
  },
  {
    slug: 'oro-valley-az',
    city: 'Oro Valley',
    title: 'HVAC Services in Oro Valley, AZ',
    meta: {
      title: 'Oro Valley HVAC Services | Crest Air',
      description: 'Premium HVAC care for Oro Valley neighborhoods near the Catalina Mountains and Innovation Park.',
      keywords: ['oro valley hvac', 'ac repair oro valley', 'catalina foothills air conditioning'],
    },
    intro:
      'From Rancho Vistoso to La Canada foothill estates, Oro Valley homes juggle high solar gain, larger floorplans, and strict architectural guidelines. Crest Air delivers zoning expertise, smart thermostat setup, and dust-control strategies for neighborhoods hugging the Catalinas.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Zoning and airflow experts for multi-story Oro Valley homes',
      'Technicians experienced with flat-roof and parapet-mounted equipment common off Tangerine Road',
      'Smart thermostat and monitoring support for Innovation Park commuters',
    ],
    localChallenges: [
      'Afternoon sun blasting west-facing living rooms near La Canada Drive',
      'Wildfire smoke and desert dust settling into rooftop units',
      'Long duct runs causing temperature swings between upstairs/downstairs',
      'Golf-community noise rules requiring quiet, efficient equipment swaps',
    ],
    testimonial: {
      quote: 'Our Rancho Vistoso home finally cools evenly after Crest Air balanced the zones and swapped a failing blower.',
      name: 'Troy & Melissa P.',
      neighborhood: 'Rancho Vistoso',
    },
    nearbyAreas: [
      { href: '/locations/catalina-foothills-az', label: 'Catalina Foothills, AZ' },
      { href: '/locations/marana-az', label: 'Marana, AZ' },
    ],
    faqs: [
      {
        question: 'Do you install and service zoning systems?',
        answer: 'Yes. We design new zones, repair dampers, and program thermostats for large Oro Valley residences.',
      },
      {
        question: 'Can you work around HOA aesthetic rules?',
        answer: 'We coordinate crane lifts, screens, and color requirements with your HOA or ARC committee.',
      },
      {
        question: 'How do you handle dust from the Catalinas?',
        answer: 'We use higher-MERV filtration, coil cleanings, and maintenance schedules tuned for the windy foothills.',
      },
    ],
    cta: {
      heading: 'Book Oro Valley HVAC support',
      body: 'Keep your foothills home comfortable with technicians who know the terrain.',
      primaryLabel: 'Schedule Oro Valley Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Review AC Repair',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
  {
    slug: 'marana-az',
    city: 'Marana',
    title: 'HVAC Services in Marana, AZ',
    meta: {
      title: 'Marana HVAC Services | Crest Air',
      description: 'Fast HVAC repair and installation for Marana communities from Gladden Farms to Dove Mountain.',
      keywords: ['marana hvac', 'ac repair marana', 'dove mountain air conditioning'],
    },
    intro:
      'New Gladden Farms builds, Dove Mountain luxury homes, and older farmhouses along Sandario Road all deal with harsh sun, dust, and rapid growth. Crest Air services both subdivision heat pumps and higher-tonnage systems serving desert lots west of I-10.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Technicians stationed near Tangerine Road for rapid access to Gladden Farms',
      'Experience integrating smart thermostats for commuters splitting time between Tucson and Phoenix',
      'Flexible scheduling for construction punch-lists and new build warranty work',
    ],
    localChallenges: [
      'Fine desert dust blowing off Avra Valley fields into outdoor coils',
      'Power fluctuations on rural feeders causing capacitor failures',
      'Rapid development meaning HVAC loads change as additions are built',
      'Monsoon microbursts pushing water into garage air handlers',
    ],
    testimonial: {
      quote: 'Crest Air balanced our new Gladden Farms home after the builder left half the rooms roasting.',
      name: 'The McGraths',
      neighborhood: 'Gladden Farms',
    },
    nearbyAreas: [
      { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
      { href: '/locations/vail-az', label: 'Vail, AZ' },
    ],
    faqs: [
      {
        question: 'Do you work with builders and warranty departments?',
        answer: 'Yes. We partner with builders for punch-list repairs and help homeowners document warranty claims.',
      },
      {
        question: 'Can you service rural properties west of I-10?',
        answer: 'Our dispatch covers Avra Valley, Red Rock, and other rural routes with properly equipped trucks.',
      },
      {
        question: 'How do you handle dust infiltration?',
        answer: 'We recommend upgraded filtration, coil cleanings, and sealed returns tailored to Marana’s dusty environment.',
      },
    ],
    cta: {
      heading: 'Schedule Marana HVAC service',
      body: 'Beat desert heat with technicians who know Gladden Farms, Dove Mountain, and Avra Valley.',
      primaryLabel: 'Book Marana Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Plan AC Installation',
      secondaryHref: '/services/ac-installation-tucson',
    },
  },
  {
    slug: 'vail-az',
    city: 'Vail',
    title: 'HVAC Services in Vail, AZ',
    meta: {
      title: 'Vail HVAC Services | Crest Air',
      description: 'Reliable HVAC repair and maintenance for Vail and Rincon Valley homes facing southeast winds.',
      keywords: ['vail az hvac', 'rincon valley ac repair', 'cienega high school hvac'],
    },
    intro:
      'Haciendas near Cienega High, Rincon Valley ranchettes, and Del Lago Golf community homes all fight relentless southeast winds and big day/night swings. Crest Air reinforces insulation, drainage, and control systems so Vail families stay comfortable year-round.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Technicians familiar with septic and well-house HVAC layouts east of I-10',
      'Drainage and condensation pros for elevated air handlers common in Vail',
      'Flexible scheduling for commuters headed toward Tucson or Sierra Vista',
    ],
    localChallenges: [
      'Dust devils sweeping through Rincon Valley clogging filters weekly',
      'High winds shaking rooftop units near Mary Ann Cleveland Way',
      'Large diurnal swings stressing heat pump defrost cycles',
      'Limited city gas requiring efficient heat pumps or dual-fuel systems',
    ],
    testimonial: {
      quote: 'Our Del Lago home finally stopped sweating after Crest Air reworked the drains and sealed the attic ductwork.',
      name: 'Heather P.',
      neighborhood: 'Del Lago',
    },
    nearbyAreas: [
      { href: '/locations/drexel-heights-az', label: 'Drexel Heights, AZ' },
      { href: '/locations/sahuarita-az', label: 'Sahuarita, AZ' },
    ],
    faqs: [
      {
        question: 'Do you service homes on private roads east of Civano?',
        answer: 'Yes. Our trucks are equipped for dirt roads and longer runs out toward Mescal and Sonoita turnoffs.',
      },
      {
        question: 'How do you protect systems from Vail’s winds?',
        answer: 'We secure rooftop equipment, install hail guards, and offer maintenance plans that include frequent filter swaps.',
      },
      {
        question: 'Can you recommend efficient heating options without natural gas?',
        answer: 'We specialize in cold-climate heat pumps and dual-fuel systems perfect for Vail’s winter mornings.',
      },
    ],
    cta: {
      heading: 'Book Vail HVAC service',
      body: 'Stay ahead of Rincon Valley winds with technicians who live nearby.',
      primaryLabel: 'Schedule Vail Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Talk Heat Pumps',
      secondaryHref: '/services/heating-tucson',
    },
  },
  {
    slug: 'sahuarita-az',
    city: 'Sahuarita',
    title: 'HVAC Services in Sahuarita, AZ',
    meta: {
      title: 'Sahuarita HVAC Services | Crest Air',
      description: 'Prompt HVAC repair and maintenance for Rancho Sahuarita, Madera Highlands, and I-19 corridor homes.',
      keywords: ['sahuarita hvac', 'rancho sahuarita ac repair', 'i19 hvac service'],
    },
    intro:
      'Lakeside paths at Rancho Sahuarita, pecan groves west of I-19, and Madera Highlands hillside homes all depend on steady cooling. Crest Air offers family-friendly scheduling, texting, and bilingual technicians for Sahuarita households.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Bilingual office team supporting 12th Avenue and Nogales Highway families',
      'Technicians experienced with dual-story stucco homes off Paseo del Bac',
      'Rapid dispatch along I-19 to cover Sahuarita, Green Valley, and Amado',
    ],
    localChallenges: [
      'High humidity coming off the man-made lake causing drain clogs',
      'Pecan dust and cotton from Green Valley orchards clogging coils',
      'Heavy family schedules needing evening or Saturday service windows',
      'Voltage dips along older feeder lines damaging capacitors',
    ],
    testimonial: {
      quote: 'Our Rancho Sahuarita home stayed livable thanks to Crest Air’s evening visit after soccer practice.',
      name: 'Jose & Elena M.',
      neighborhood: 'Rancho Sahuarita',
    },
    nearbyAreas: [
      { href: '/locations/green-valley-az', label: 'Green Valley, AZ' },
      { href: '/locations/south-tucson-az', label: 'South Tucson, AZ' },
    ],
    faqs: [
      {
        question: 'Do you offer bilingual service?',
        answer: 'Yes. Our coordinators and several technicians speak Spanish to keep communication clear.',
      },
      {
        question: 'How do you handle busy family schedules?',
        answer: 'We provide late-afternoon, Saturday, and text-notification appointments to work around school and sports.',
      },
      {
        question: 'Can you help with HOA approvals for new equipment?',
        answer: 'We supply spec sheets and handle common-area access for Rancho Sahuarita and Madera Highlands HOAs.',
      },
    ],
    cta: {
      heading: 'Schedule Sahuarita HVAC service',
      body: 'Keep Rancho Sahuarita and Madera Highlands homes cool with flexible local scheduling.',
      primaryLabel: 'Book Sahuarita Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Explore AC Repair',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
  {
    slug: 'catalina-foothills-az',
    city: 'Catalina Foothills',
    title: 'HVAC Services in Catalina Foothills, AZ',
    meta: {
      title: 'Catalina Foothills HVAC Services | Crest Air',
      description: 'Discreet HVAC care for Skyline, Sabino Canyon, and Ventana Canyon residences.',
      keywords: ['catalina foothills hvac', 'sabino canyon ac repair', 'ventana canyon air conditioning'],
    },
    intro:
      'Terraced homes along Skyline Drive, Sabino Canyon estates, and Ventana Canyon golf villas require whisper-quiet, efficient HVAC systems. Crest Air specializes in custom ducting, zoning, and low-profile equipment that preserves views and HOA aesthetics.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Low-noise equipment swaps that preserve luxury outdoor living',
      'Custom duct and zoning solutions for multi-level hillside homes',
      'Experienced crews navigating steep driveways and narrow ridge roads',
    ],
    localChallenges: [
      'Steep grade driveways complicating equipment access and crane placement',
      'Wildlife and pack rats chewing wiring near desert landscaping',
      'Large glass walls increasing solar gain along Sabino and Skyline corridors',
      'HOA restrictions requiring painted linesets and screened units',
    ],
    testimonial: {
      quote: 'Crest Air replaced our Ventana Canyon system without blocking the view or violating HOA rules.',
      name: 'Dana F.',
      neighborhood: 'Ventana Canyon',
    },
    nearbyAreas: [
      { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
      { href: '/locations/flowing-wells-az', label: 'Flowing Wells, AZ' },
    ],
    faqs: [
      {
        question: 'Can you coordinate crane lifts on steep lots?',
        answer: 'Yes. We schedule cranes during approved hours and protect landscaping and paver driveways.',
      },
      {
        question: 'Do you offer low-profile equipment solutions?',
        answer: 'We recommend slim condensers, remote line sets, and painted covers that blend into foothills architecture.',
      },
      {
        question: 'How do you manage rodent damage?',
        answer: 'We install rodent-resistant wire, seal penetrations, and incorporate maintenance checks focused on wildlife hotspots.',
      },
    ],
    cta: {
      heading: 'Schedule Catalina Foothills HVAC care',
      body: 'Protect your foothills investment with discreet, trustworthy technicians.',
      primaryLabel: 'Book Foothills Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Discuss Zoning Upgrades',
      secondaryHref: '/services/ac-installation-tucson',
    },
  },
  {
    slug: 'south-tucson-az',
    city: 'South Tucson',
    title: 'HVAC Services in South Tucson, AZ',
    meta: {
      title: 'South Tucson HVAC Services | Crest Air',
      description: 'Same-day HVAC repair for 12th Avenue restaurants, Barrio homes, and adobe rentals south of downtown.',
      keywords: ['south tucson hvac', '12th avenue ac repair', 'barrio hvac service'],
    },
    intro:
      'Adobe homes off South 6th Avenue, 12th Avenue eateries, and legacy rentals near Mission Manor rely on hardworking HVAC systems that battle kitchen heat, traffic soot, and aging electrical panels. Crest Air provides bilingual communication and same-day dispatch throughout the 1-square-mile city.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Bilingual technicians familiar with Barrio Libre and Mission Manor homes',
      'Experience converting swamp coolers to high-efficiency heat pumps',
      'Quick response to restaurant rooftop units along 12th Avenue',
    ],
    localChallenges: [
      'Older adobe walls trapping heat overnight, stressing systems at dawn',
      'Grease and soot buildup on restaurant rooftop coils near 12th Avenue',
      'Mixed electric panels requiring careful load management for add-on units',
      'Tight alley access making equipment swaps challenging',
    ],
    testimonial: {
      quote: 'Crest Air swapped our swamp cooler for a heat pump and kept the mural-lined alley spotless.',
      name: 'Lucia R.',
      neighborhood: 'Barrio Libre',
    },
    nearbyAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/drexel-heights-az', label: 'Drexel Heights, AZ' },
    ],
    faqs: [
      {
        question: 'Do you offer bilingual service calls?',
        answer: 'Yes. Our coordinators and field techs can explain diagnostics and pricing in Spanish or English.',
      },
      {
        question: 'Can you work around restaurant hours?',
        answer: 'We schedule off-hour rooftop service so 12th Avenue kitchens keep serving tamales and tacos.',
      },
      {
        question: 'Do you convert swamp coolers?',
        answer: 'We replace aging coolers with modern heat pumps, including electrical and duct adjustments.',
      },
    ],
    cta: {
      heading: 'Book South Tucson HVAC service',
      body: 'Keep Barrio kitchens, storefronts, and rentals comfortable with trusted local techs.',
      primaryLabel: 'Schedule South Tucson Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Explore AC Repair',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
  {
    slug: 'drexel-heights-az',
    city: 'Drexel Heights',
    title: 'HVAC Services in Drexel Heights, AZ',
    meta: {
      title: 'Drexel Heights HVAC Services | Crest Air',
      description: 'Desert-ready HVAC repair for Drexel Heights, Ajo Way, and Valencia West homes on the Tucson Mountain foothills.',
      keywords: ['drexel heights hvac', 'ajo way ac repair', 'valencia west air conditioning'],
    },
    intro:
      'Desert mesa homes near Ajo Way, Valencia West subdivisions, and rural lots off San Joaquin Road endure fierce sun, dust, and limited city infrastructure. Crest Air outfits Drexel Heights with rugged equipment, sealed ducts, and maintenance plans that account for well-water and septic closets.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Technicians comfortable navigating unpaved washes and ridgelines',
      'Experience hardening condensers against wildlife and flash floods',
      'Water heater and HVAC combos for utility closets tied to wells and septics',
    ],
    localChallenges: [
      'Dust devils scouring the Tucson Mountains clogging outdoor coils',
      'Limited shade meaning condensers need hail guards and UV protection',
      'Voltage fluctuations west of Mission Road stressing electronics',
      'Well-house utility closets trapping heat around air handlers',
    ],
    testimonial: {
      quote: 'They armored our condenser near San Joaquin Ridge so coyotes and debris stop wrecking it.',
      name: 'Eddie K.',
      neighborhood: 'San Joaquin Ridge',
    },
    nearbyAreas: [
      { href: '/locations/south-tucson-az', label: 'South Tucson, AZ' },
      { href: '/locations/vail-az', label: 'Vail, AZ' },
    ],
    faqs: [
      {
        question: 'Do you service homes on dirt roads?',
        answer: 'Yes. Our trucks are equipped for unpaved access heading toward Spanish Trail or Valencia West.',
      },
      {
        question: 'How do you protect outdoor units from wildlife?',
        answer: 'We add critter guards, elevated pads, and wiring armor to deter pack rats and javelina.',
      },
      {
        question: 'Can you help with well-house ventilation?',
        answer: 'We install louvered doors, fans, and insulation upgrades to keep utility closets safe.',
      },
    ],
    cta: {
      heading: 'Schedule Drexel Heights HVAC care',
      body: 'Harden your desert HVAC system with technicians who live on the west side.',
      primaryLabel: 'Book Drexel Heights Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'Ask About Maintenance',
      secondaryHref: '/services/hvac-maintenance-tucson',
    },
  },
  {
    slug: 'flowing-wells-az',
    city: 'Flowing Wells',
    title: 'HVAC Services in Flowing Wells, AZ',
    meta: {
      title: 'Flowing Wells HVAC Services | Crest Air',
      description: 'Reliable HVAC repair for Flowing Wells District neighborhoods, mobile-home parks, and central Tucson infill.',
      keywords: ['flowing wells hvac', 'flowing wells ac repair', 'central tucson hvac'],
    },
    intro:
      'Block homes off River Road, Winterhaven mobile-home communities, and infill rentals along Flowing Wells Road see years of retrofits and heavy rental turnover. Crest Air delivers budget-conscious repairs, safety upgrades, and communication with property managers throughout the district.',
    services: [...sharedServices, { href: '/contact', label: 'Contact Crest Air' }],
    whyChooseUs: [
      'Property-manager portal for central Tucson rentals',
      'Mobile-home friendly technicians who understand smaller duct trunks',
      'Load calculations for additions and garage conversions common in the district',
    ],
    localChallenges: [
      'Direct west sun on block walls pushing evening indoor temps higher',
      'Older aluminum wiring in rentals needing careful load balancing',
      'Mobile-home tie-down limitations requiring compact condensers',
      'Iron-rich municipal water clogging humidifiers and drains',
    ],
    testimonial: {
      quote: 'Our Flowing Wells duplex tenants finally stopped calling after Crest Air replumbed the condensate and swapped the blower motor.',
      name: 'Shelley T.',
      neighborhood: 'Flowing Wells',
    },
    nearbyAreas: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/catalina-foothills-az', label: 'Catalina Foothills, AZ' },
    ],
    faqs: [
      {
        question: 'Do you work with property managers?',
        answer: 'Yes. We communicate estimates, photos, and approvals through your preferred system.',
      },
      {
        question: 'Can you service mobile homes?',
        answer: 'We repair and replace packaged and split systems serving manufactured homes along Flowing Wells Road.',
      },
      {
        question: 'How do you handle older electrical panels?',
        answer: 'We evaluate load, coordinate electricians when needed, and install soft-start or surge protection devices.',
      },
    ],
    cta: {
      heading: 'Schedule Flowing Wells HVAC service',
      body: 'Give your central Tucson home dependable cooling with technicians who understand the district.',
      primaryLabel: 'Book Flowing Wells Visit',
      primaryHref: '#request-service',
      secondaryLabel: 'See AC Repair',
      secondaryHref: '/services/ac-repair-tucson',
    },
  },
];

export const getLocationBySlug = (slug: string) => locations.find((location) => location.slug === slug);
