import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('indoor-air-quality-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/indoor-air-quality-tucson');

export default function Page() {
  return (
    <>
      <ServicePageTemplate service={service} />
      <div className="mx-auto w-full max-w-5xl px-6 pb-10">
        <ServiceConversionSection
          sourcePage="/services/indoor-air-quality-tucson"
          serviceType="indoor-air-quality"
          location="tucson-az"
          pageType="service"
          title="Indoor Air Quality Tucson"
          callCtaId="indoor-air-quality-tucson-call"
          formCtaId="indoor-air-quality-tucson-form"
        />
      </div>
    </>
  );
}
