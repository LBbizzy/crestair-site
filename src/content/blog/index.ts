import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-is-my-ac-blowing-warm-air-in-tucson',
    title: 'Why Is My AC Blowing Warm Air in Tucson?',
    query: 'why is my ac blowing warm air tucson',
    meta: {
      title: 'Why Is My AC Blowing Warm Air in Tucson? | Crest Air Blog',
      description:
        'Learn the most common reasons AC systems blow warm air in Tucson and when to schedule professional service.',
      keywords: ['warm air from ac tucson', 'ac blowing warm air tucson', 'tucson ac problems'],
    },
    intro:
      'Warm air from the vents usually signals a real cooling-system issue, not just a thermostat mistake, especially during peak Tucson heat.',
    sections: [
      {
        heading: 'Common causes of warm air',
        body: 'Low airflow, thermostat errors, electrical faults, frozen coils, and condenser-side issues can all interrupt cooling output.',
      },
      {
        heading: 'When to call for service',
        body: 'If the issue persists after a filter and thermostat check, a diagnostic visit is the fastest path to a real fix.',
      },
    ],
    serviceLink: { href: '/services/ac-repair-tucson', label: 'AC Repair Tucson' },
    locationLink: { href: '/locations/tucson-az', label: 'Tucson HVAC Services' },
  },
  {
    slug: 'repair-vs-replace-ac-in-tucson',
    title: 'Should You Repair or Replace Your AC in Tucson?',
    query: 'repair vs replace ac tucson',
    meta: {
      title: 'Repair or Replace Your AC in Tucson? | Crest Air Blog',
      description: 'A practical guide to deciding when AC repair still makes sense and when installation is the better move.',
      keywords: ['repair or replace ac tucson', 'ac replacement tucson', 'ac repair tucson'],
    },
    intro: 'The best repair-versus-replace decision comes down to system age, repeat failures, and cooling performance under Tucson heat.',
    sections: [
      { heading: 'When repair still makes sense', body: 'If the problem is isolated and the system is otherwise stable, repair can still be the best value.' },
      { heading: 'When replacement becomes smarter', body: 'Repeated failures, rising utility bills, and uneven cooling are strong signals that installation may be the better long-term move.' },
    ],
    serviceLink: { href: '/services/ac-installation-tucson', label: 'AC Installation Tucson' },
    locationLink: { href: '/locations/tucson-az', label: 'Tucson HVAC Services' },
  },
];
