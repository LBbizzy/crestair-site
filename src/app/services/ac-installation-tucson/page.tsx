import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('ac-installation-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/ac-installation-tucson');

export default function AcInstallationPage() {
  return (
    <>
      <ServicePageTemplate service={service} />
      <div className="mx-auto w-full max-w-5xl px-6 pb-10">
        <ServiceConversionSection
          sourcePage="/services/ac-installation-tucson"
          serviceType="ac-installation"
          location="tucson-az"
          pageType="service"
          title="AC Installation Tucson"
          callCtaId="ac-installation-tucson-call"
          formCtaId="ac-installation-tucson-form"
        />
      </div>
    </>
  );
}
