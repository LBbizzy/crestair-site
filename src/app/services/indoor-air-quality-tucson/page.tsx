import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('indoor-air-quality-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/indoor-air-quality-tucson');

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
