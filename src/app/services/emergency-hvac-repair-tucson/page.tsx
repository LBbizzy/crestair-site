import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('emergency-hvac-repair-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/emergency-hvac-repair-tucson');

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
