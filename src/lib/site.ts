export const site = {
  name: 'Crest Air',
  url: 'https://crestair-site.vercel.app',
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
  { href: '/services/ac-repair-tucson', label: 'AC Repair' },
  { href: '/services/ac-installation-tucson', label: 'AC Installation' },
  { href: '/services/heating-tucson', label: 'Heating' },
  { href: '/locations/tucson-az', label: 'Tucson' },
  { href: '/blog', label: 'Blog' },
];

export const footerGroups = {
  services: [
    { href: '/services/ac-repair-tucson', label: 'AC Repair' },
    { href: '/services/ac-installation-tucson', label: 'AC Installation' },
    { href: '/services/heating-tucson', label: 'Heating' },
  ],
  locations: [{ href: '/locations/tucson-az', label: 'Tucson, AZ' }],
};
