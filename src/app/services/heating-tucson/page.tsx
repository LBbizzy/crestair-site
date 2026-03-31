import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('heating-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/heating-tucson');

export default function HeatingPage() {
  return <ServicePageTemplate service={service} />;
}
