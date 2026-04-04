import { ImageAsset } from '@/lib/types';

const allowedRootDirectories = ['home', 'services', 'locations', 'logos', 'blog'] as const;
const filenamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)+\.(?:jpg|jpeg|png|webp|avif)$/;

type AllowedRoot = (typeof allowedRootDirectories)[number];

const ensureValue = (value: string, field: keyof ImageAsset) => {
  if (!value || !value.trim()) {
    throw new Error(`SiteImage asset missing required field: ${field}`);
  }
};

const normalizePage = (page: string): AllowedRoot => {
  const trimmed = (page || '').trim().replace(/^\/+/, '');
  if (!trimmed || trimmed === 'home') return 'home';
  if (trimmed.startsWith('logos')) return 'logos';
  if (trimmed.startsWith('services') || trimmed.startsWith('commercial')) return 'services';
  if (trimmed.startsWith('locations')) return 'locations';
  if (trimmed.startsWith('blog') || trimmed === '/blog') return 'blog';
  return 'home';
};

const ensureFilenameMatchesContext = (filename: string, root: AllowedRoot, page: string, src: string) => {
  const normalizedPage = page.replace(/^\/+/, '');
  if (root === 'logos') {
    if (!src.includes('/logos/approved/')) {
      throw new Error(`Logo assets must live under /images/logos/approved. Received: ${src}`);
    }
    return;
  }
  if (root === 'services') {
    const slug = normalizedPage.replace(/^(services|commercial)\/?/, '').split('/')[0];
    if (slug && !filename.includes(slug)) {
      throw new Error(`Service image filename must include service slug "${slug}". Received: ${filename}`);
    }
  } else if (root === 'locations') {
    const slug = normalizedPage.replace(/^locations\/?/, '').split('/')[0];
    if (slug && !filename.includes(slug)) {
      throw new Error(`Location image filename must include location slug "${slug}". Received: ${filename}`);
    }
  } else if (root === 'blog') {
    if (!filename.includes('blog')) {
      throw new Error(`Blog image filenames must include "blog". Received: ${filename}`);
    }
  } else if (!filename.includes('home')) {
    throw new Error(`Homepage image filenames must include "home" to document context. Received: ${filename}`);
  }
};

export const validateImageAsset = (asset: ImageAsset) => {
  ensureValue(asset.src, 'src');
  ensureValue(asset.alt, 'alt');
  ensureValue(asset.title, 'title');
  ensureValue(asset.description, 'description');
  ensureValue(asset.page, 'page');
  ensureValue(asset.section, 'section');

  const src = asset.src.trim();
  if (src !== src.toLowerCase()) {
    throw new Error(`Image src must be lowercase. Received: ${asset.src}`);
  }
  if (!src.startsWith('/images/')) {
    throw new Error(`Image src must live under /public/images. Received: ${asset.src}`);
  }

  const parts = src.replace(/^\/+/, '').split('/');
  const rootDirectory = parts[1];
  if (!allowedRootDirectories.includes(rootDirectory as AllowedRoot)) {
    throw new Error(`Image must be placed inside /images/{home|services|locations}. Received: ${asset.src}`);
  }

  const filename = parts.at(-1) ?? '';
  if (!filenamePattern.test(filename)) {
    throw new Error(`Image filename must be lowercase, hyphenated, descriptive, and end with .jpg|.jpeg|.png|.webp|.avif. Received: ${filename}`);
  }

  const expectedRoot = normalizePage(asset.page);
  if (rootDirectory !== expectedRoot) {
    throw new Error(`Image stored in /images/${rootDirectory} but page context "${asset.page}" expects /images/${expectedRoot}.`);
  }

  ensureFilenameMatchesContext(filename, expectedRoot, asset.page, asset.src);
};
