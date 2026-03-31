import Link from 'next/link';

export function LocationGrid({ locations }: { locations: { href: string; label: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <Link key={location.href} href={location.href} className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold text-slate-950 shadow-sm transition hover:border-[#66CFEF] hover:text-[#041B34]">
          {location.label}
        </Link>
      ))}
    </div>
  );
}
