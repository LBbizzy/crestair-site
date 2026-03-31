import { site } from '@/lib/site';

export function StickyMobileCall() {
  return (
    <a
      href={`tel:${site.phone}`}
      className="fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[#F4911D] px-6 py-4 text-base font-bold text-white shadow-2xl transition hover:bg-[#D97F16] md:hidden"
    >
      Call Now — {site.phone}
    </a>
  );
}
