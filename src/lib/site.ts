function normalizeSiteUrl(value: string | undefined) {
  if (!value) return undefined;
  return value.trim().replace(/\/$/, '');
}

const envSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.SITE_URL);

if (!envSiteUrl && process.env.NODE_ENV === 'production') {
  throw new Error('Site URL env vars are required in production.');
}

const resolvedSiteUrl = envSiteUrl ?? 'http://localhost:3000';

export const site = {
  name: 'Crest Air',
  legalName: 'Crest Air LLC',
  url: resolvedSiteUrl,
  description:
    'Marine Corps veteran-owned HVAC company serving Tucson and Southern Arizona since 2016. NATE-certified and EPA-certified technicians deliver same-day AC repair, installation, heating service, maintenance, duct cleaning, indoor air quality, heat pumps, thermostats, and mini-splits for homes and light commercial properties.',
  tagline: "Tucson's veteran-owned HVAC team",
  phone: '(520) 751-8888',
  phoneE164: '+1-520-751-8888',
  email: 'support@crestairaz.com',
  bookingUrl: 'https://crestairaz.com/contact',
  primaryColor: '#F4911D',
  secondaryColor: '#041B34',
  accentColor: '#66CFEF',
  address: {
    streetAddress: '129 E Plata St',
    addressLocality: 'Tucson',
    addressRegion: 'AZ',
    postalCode: '85705',
    addressCountry: 'US',
  },
  geo: {
    latitude: 32.2217,
    longitude: -110.9694,
  },
  serviceAreas: [
    'Tucson, AZ',
    'Oro Valley, AZ',
    'Marana, AZ',
    'Vail, AZ',
    'Green Valley, AZ',
    'Sahuarita, AZ',
    'Catalina Foothills, AZ',
    'South Tucson, AZ',
    'Drexel Heights, AZ',
    'Flowing Wells, AZ',
  ],
  hours: [
    { dayOfWeek: 'Monday', opens: '08:00', closes: '18:00' },
    { dayOfWeek: 'Tuesday', opens: '08:00', closes: '18:00' },
    { dayOfWeek: 'Wednesday', opens: '08:00', closes: '18:00' },
    { dayOfWeek: 'Thursday', opens: '08:00', closes: '18:00' },
    { dayOfWeek: 'Friday', opens: '08:00', closes: '18:00' },
    { dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
  ],
  emergencyHoursNote: 'Emergency service available 24/7.',
  logoPath: '/images/logos/approved/crest-air-logo-primary-horizontal.png',
  imagePaths: [
    '/images/logos/approved/crest-air-logo-primary-horizontal.png',
    '/images/home/home-hero-crest-air-team-tucson.webp',
    '/images/home/home-hero-crest-air-truck-visit.webp',
  ],
  defaultSocialImagePath: '/images/home/home-hero-crest-air-team-tucson.webp',
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 240,
    bestRating: 5,
  },
  googleBusinessProfileUrl: 'https://maps.google.com/?cid=8101179222525854489',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61574390079722',
  instagramUrl: 'https://www.instagram.com/crest_air/',
  tiktokUrl: 'https://www.tiktok.com/@crest.air',
  linkedinUrl: undefined,
  youtubeUrl: undefined,
  twitterUrl: undefined,
  rocNumber: '343786',
};

export const primaryNav = [
  { href: '/', label: 'Home' },
  {
    href: '/services/ac-repair-tucson',
    label: 'Services',
    children: [
      { href: '/services/ac-repair-tucson', label: 'AC Repair' },
      { href: '/services/ac-installation-tucson', label: 'AC Installation' },
      { href: '/services/heating-tucson', label: 'Heating' },
      { href: '/services/hvac-maintenance-tucson', label: 'Maintenance' },
      { href: '/services/indoor-air-quality-tucson', label: 'Indoor Air Quality' },
    ],
  },
  {
    href: '/commercial',
    label: 'Commercial',
    children: [
      { href: '/commercial', label: 'Commercial HVAC Overview' },
      { href: '/commercial/ac-repair', label: 'Commercial AC Repair' },
      { href: '/commercial/ac-installation', label: 'Commercial Installations' },
      { href: '/commercial/maintenance', label: 'Commercial Maintenance' },
      { href: '/commercial/package-units', label: 'Rooftop & Package Units' },
    ],
  },
  {
    href: '/locations/tucson-az',
    label: 'Locations',
    children: [
      { href: '/locations/tucson-az', label: 'Tucson, AZ' },
      { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
      { href: '/locations/marana-az', label: 'Marana, AZ' },
      { href: '/locations/vail-az', label: 'Vail, AZ' },
      { href: '/locations/green-valley-az', label: 'Green Valley, AZ' },
    ],
  },
  { href: '/financing', label: 'Financing' },
  {
    href: '/blog',
    label: 'Blog',
    children: [
      { href: '/blog', label: 'All Posts' },
      { href: '/blog/signs-your-ac-is-about-to-fail-in-arizona-heat', label: 'Signs Your AC Is Failing' },
      { href: '/blog/how-to-lower-cooling-costs-in-tucson-summer', label: 'Lower Cooling Costs' },
      { href: '/blog/repair-vs-replace-ac-in-tucson-cost-comparison', label: 'Repair vs Replace' },
      { href: '/blog/tucson-emergency-hvac-response-guide', label: 'Emergency HVAC Guide' },
    ],
  },
  {
    href: '/contact',
    label: 'Contact',
    children: [
      { href: '/contact', label: 'Contact Crest Air' },
      { href: '/about', label: 'About Crest Air' },
      { href: '/financing', label: 'Financing Options' },
    ],
  },
];

export const footerGroups = {
  services: [
    { href: '/services/ac-repair-tucson', label: 'AC Repair' },
    { href: '/services/ac-installation-tucson', label: 'AC Installation' },
    { href: '/services/heating-tucson', label: 'Heating' },
    { href: '/commercial', label: 'Commercial HVAC' },
  ],
  locations: [
    { href: '/locations/tucson-az', label: 'Tucson, AZ' },
    { href: '/locations/green-valley-az', label: 'Green Valley, AZ' },
    { href: '/locations/oro-valley-az', label: 'Oro Valley, AZ' },
    { href: '/locations/marana-az', label: 'Marana, AZ' },
    { href: '/locations/vail-az', label: 'Vail, AZ' },
    { href: '/locations/sahuarita-az', label: 'Sahuarita, AZ' },
    { href: '/locations/catalina-foothills-az', label: 'Catalina Foothills, AZ' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/financing', label: 'Financing' },
    { href: '/blog', label: 'Blog' },
  ],
};
