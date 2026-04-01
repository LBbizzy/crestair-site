import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';

const service = getServiceBySlug('ac-repair-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/ac-repair-tucson');

export default function AcRepairPage() {
  return (
    <>
      <ServicePageTemplate service={service} />
      <div className="mx-auto w-full max-w-5xl px-6 pb-10">
        <ServiceConversionSection
          sourcePage="/services/ac-repair-tucson"
          serviceType="ac-repair"
          location="tucson-az"
          pageType="service"
          title="AC Repair Tucson"
          callCtaId="ac-repair-tucson-call"
          formCtaId="ac-repair-tucson-form"
        />
      </div>
    </>
  );
}
