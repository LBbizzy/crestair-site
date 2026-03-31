import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('duct-cleaning-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/duct-cleaning-tucson');

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
