const fallbackSiteUrl = 'https://crestair-site.vercel.app';

function normalizeSiteUrl(value: string | undefined) {
  if (!value) return fallbackSiteUrl;
  return value.replace(/\/$/, '');
}

export const site = {
  name: 'Crest Air',
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL),
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
      { href: '/commercial/installations', label: 'Commercial Installations' },
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
  { href: '/about', label: 'About' },
  { href: '/financing', label: 'Financing' },
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
