import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('hvac-maintenance-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/hvac-maintenance-tucson');

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
