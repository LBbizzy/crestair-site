import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

const service = getServiceBySlug('ac-repair-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/ac-repair-tucson');

export default function AcRepairPage() {
  return <ServicePageTemplate service={service} />;
}
