import type { Metadata } from 'next';
import { FunnelLayout } from '@/components/FunnelLayout';

export const metadata: Metadata = {
  title: 'Heating Repair & Installation in Tucson | Crest Air',
  description: 'Tucson heating repair and installation. Furnace, heat pump, and heater service. Licensed technicians, fast response. Call (520) 751-8888.',
  robots: { index: false, follow: false },
};

export default function FunnelHeatingPage() {
  return (
    <FunnelLayout
      config={{
        sourcePage: '/funnels/heating',
        serviceType: 'funnel-heating',
        funnelIdentifier: 'funnel-heating',
        headline: 'Heating Not Working? We Fix It Fast in Tucson',
        subheadline: "Tucson winters get colder than people think. When your heater stops working, Crest Air provides fast, affordable heating repair and installation for furnaces, heat pumps, and more.",
        trustBadges: [
          { icon: '🔥', label: 'Fast Heating Repair' },
          { icon: '💲', label: 'Affordable Pricing' },
          { icon: '✅', label: 'All Systems Serviced' },
        ],
        description: [
          "Desert nights get cold — sometimes below freezing in the Tucson area. A broken heater isn't just uncomfortable, it can be dangerous for families with young children or elderly members. Crest Air provides expert heating repair and installation to keep your home warm all winter.",
          "We service all types of heating systems: gas furnaces, electric furnaces, heat pumps, mini-splits, and dual-fuel systems. Our technicians arrive quickly, diagnose the problem accurately, and get your heat running again — often in the same visit.",
          "Need a new heating system? We'll help you choose the right one for your home and budget. From high-efficiency furnaces to heat pump upgrades, we handle everything from selection to installation."
        ],
        bulletHeading: 'Heating Services We Provide',
        bulletPoints: [
          'Gas & electric furnace repair',
          'Heat pump repair & installation',
          'Heating system replacement & upgrades',
          'Thermostat repair & smart thermostat install',
          'Heat exchanger inspection',
          'Pilot light & ignition system repair',
          'Ductwork inspection for heat loss',
          'Seasonal heating tune-ups',
        ],
        formSubmitLabel: 'Schedule Heating Service',
      }}
    />
  );
}
