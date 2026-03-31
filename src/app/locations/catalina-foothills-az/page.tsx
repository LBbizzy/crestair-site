import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';

const location = getLocationBySlug('catalina-foothills-az')!;
export const metadata = buildMetadata(location.meta, '/locations/catalina-foothills-az');

export default function Page() {
  return <LocationPageTemplate location={location} />;
}
