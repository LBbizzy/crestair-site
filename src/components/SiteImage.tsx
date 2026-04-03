import Image, { ImageProps } from 'next/image';
import { ImageAsset } from '@/lib/types';
import { validateImageAsset } from '@/lib/image-asset';

type SiteImageProps = {
  asset: ImageAsset;
} & Omit<ImageProps, 'src' | 'alt' | 'title'>;

export function SiteImage({ asset, ...imageProps }: SiteImageProps) {
  validateImageAsset(asset);

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      title={asset.title}
      data-page={asset.page}
      data-section={asset.section}
      data-description={asset.description}
      {...imageProps}
    />
  );
}
