import { ServiceConversionSection } from '@/components/ServiceConversionSection';
import { getServiceBySlug } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const service = getServiceBySlug('emergency-hvac-repair-tucson')!;
export const metadata = buildMetadata(service.meta, '/services/emergency-hvac-repair-tucson');

export default function Page() {
  return (
    <>
      <ServicePageTemplate service={service} />
      <div className="mx-auto w-full max-w-5xl px-6 pb-10">
        <ServiceConversionSection
          sourcePage="/services/emergency-hvac-repair-tucson"
          serviceType="emergency-hvac-repair"
          location="tucson-az"
          pageType="service"
          title="Emergency HVAC Repair Tucson"
          callCtaId="emergency-hvac-repair-tucson-call"
          formCtaId="emergency-hvac-repair-tucson-form"
        />
      </div>
    </>
  );
}
