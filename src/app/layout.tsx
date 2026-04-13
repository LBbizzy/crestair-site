import type { Metadata } from 'next';
import Script from 'next/script';
import { Chivo, Public_Sans } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';
import { JsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';
import { buildGlobalSchemas } from '@/lib/schema';

const headingFont = Chivo({
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: {
    google: 'rqMpx7xOWI9rC4e8-cgGHjKkhGCsuF_YWWHiSD2EEis',
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Tucson HVAC Services`,
    description: site.description,
    type: 'website',
    images: [
      {
        url: site.defaultSocialImagePath,
        width: 1200,
        height: 630,
        alt: `${site.name} Tucson HVAC team`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Tucson HVAC Services`,
    description: site.description,
    images: [site.defaultSocialImagePath],
  },
  title: {
    default: `${site.name} | Tucson HVAC Services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const globalSchemas = buildGlobalSchemas();

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-slate-50 font-[family-name:var(--font-body)] text-slate-900">
        <JsonLd data={globalSchemas} />
        <SiteShell>{children}</SiteShell>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="690ce51fd69ee829fc02fe74"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
