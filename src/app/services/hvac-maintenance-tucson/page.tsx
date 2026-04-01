import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('hvac-maintenance-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/hvac-maintenance-tucson');

export default function Page() {
  return (
    <>
      <ServicePageTemplate service={service} />
      <div className="mx-auto w-full max-w-5xl px-6 pb-10">
        <ServiceConversionSection
          sourcePage="/services/hvac-maintenance-tucson"
          serviceType="hvac-maintenance"
          location="tucson-az"
          pageType="service"
          title="HVAC Maintenance Tucson"
          callCtaId="hvac-maintenance-tucson-call"
          formCtaId="hvac-maintenance-tucson-form"
        />
      </div>
    </>
  );
}
