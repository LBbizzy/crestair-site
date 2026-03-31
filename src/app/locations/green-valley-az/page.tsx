import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';

const location = getLocationBySlug('green-valley-az')!;
export const metadata = buildMetadata(location.meta, '/locations/green-valley-az');

export default function GreenValleyLocationPage() {
  return <LocationPageTemplate location={location} />;
}
