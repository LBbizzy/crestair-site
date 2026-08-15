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
    // Ship 494 — Bing Webmaster verification.
    // Get this code at https://www.bing.com/webmasters → add crestairaz.com → Meta tag method
    // Drop the value in BING_VERIFICATION env var on Vercel.
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION ?? '',
    },
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
          src="https://api.warroom.lmbhub.com/web-chat/widget.js?co=crestair"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 — property "Crest Air" (549936907) in the
            "Bizzy Cube" account (404685884), owned by DJ@bizzycube.com.
            Measurement ID G-K44WLVFGH5.

            This REPLACES G-QYPHP3H1FG, which lived in an older account under a
            different login. That property had recorded nothing until earlier
            today, so there is no history worth preserving — and all three
            companies now report into one account that one role address owns,
            which is the whole point of the move. Do not re-add the old ID; two
            tags on one page double-counts every session.

            Hard-coded rather than read from env because a missing env var fails
            silently and that is the failure mode that produced the empty
            property in the first place. */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K44WLVFGH5"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-K44WLVFGH5');`}
        </Script>
      </body>
    </html>
  );
}
