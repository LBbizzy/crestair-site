function normalizeSiteUrl(value: string | undefined) {
  if (!value) return undefined;
  return value.replace(/\/$/, '');
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
  url: resolvedSiteUrl,
  description:
    'Crest Air delivers HVAC repair, installation, and heating services across Tucson-area communities.',
  phone: '(520) 751-8888',
  email: 'support@crestairaz.com',
  primaryColor: '#F4911D',
  secondaryColor: '#041B34',
  accentColor: '#66CFEF',
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
