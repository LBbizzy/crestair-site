import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

const service = getServiceBySlug('mini-split-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/mini-split-tucson');

export default function MiniSplitPage() {
  return <ServicePageTemplate service={service} />;
}
