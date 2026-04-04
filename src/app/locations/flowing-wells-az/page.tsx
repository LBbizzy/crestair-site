import { getLocationBySlug } from '@/content/locations';
import { buildMetadata } from '@/lib/metadata';
import { LocationPageTemplate } from '@/components/LocationPageTemplate';

const location = getLocationBySlug('flowing-wells-az')!;
export const metadata = buildMetadata(location.meta, '/locations/flowing-wells-az');

export default function Page() {
  return <LocationPageTemplate location={location} />;
}
