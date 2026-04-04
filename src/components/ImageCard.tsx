import Link from 'next/link';
import { SiteImage } from '@/components/SiteImage';
import { ImageAsset } from '@/lib/types';

type ImageCardProps = {
  asset: ImageAsset;
  width?: number;
  height?: number;
  sizes?: string;
};

export function ImageCard({ asset, width = 640, height = 420, sizes = '(min-width: 1024px) 30vw, 100vw' }: ImageCardProps) {
  const content = (
    <>
      <SiteImage asset={asset} width={width} height={height} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" sizes={sizes} />
      <figcaption className="px-4 py-3 text-sm text-slate-700">
        <p className="font-semibold text-[#041B34] transition group-hover:text-[#F4911D]">{asset.title}</p>
        <p className="text-slate-600">{asset.description}</p>
        {asset.href ? (
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#F4911D] opacity-0 transition group-hover:opacity-100">
            Learn more
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
            </svg>
          </span>
        ) : null}
      </figcaption>
    </>
  );

  if (asset.href) {
    return (
      <Link href={asset.href} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-[#041B34] hover:shadow-lg">
        <figure>{content}</figure>
      </Link>
    );
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      {content}
    </figure>
  );
}
