import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';

const location = getLocationBySlug('south-tucson-az')!;
export const metadata = buildMetadata(location.meta, '/locations/south-tucson-az');

export default function Page() {
  return <LocationPageTemplate location={location} />;
}
