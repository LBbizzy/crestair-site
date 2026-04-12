import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

const service = getServiceBySlug('heat-pump-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/heat-pump-tucson');

export default function HeatPumpPage() {
  return <ServicePageTemplate service={service} />;
}
