import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

const service = getServiceBySlug('thermostat-repair-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/thermostat-repair-tucson');

export default function ThermostatRepairPage() {
  return <ServicePageTemplate service={service} />;
}
