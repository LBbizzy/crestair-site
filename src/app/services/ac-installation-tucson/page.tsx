import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('ac-installation-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/ac-installation-tucson');

export default function AcInstallationPage() {
  return <ServicePageTemplate service={service} />;
}
