import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';

const location = getLocationBySlug('sahuarita-az')!;
export const metadata = buildMetadata(location.meta, '/locations/sahuarita-az');

export default function Page() {
  return <LocationPageTemplate location={location} />;
}
