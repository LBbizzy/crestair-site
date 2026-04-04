import type { Metadata } from 'next';
import { Chivo, Public_Sans } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';
import { site } from '@/lib/site';

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
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    url: site.url,
    siteName: site.name,
    description: site.description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  title: {
    default: `${site.name} | Tucson HVAC Services`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-slate-50 font-[family-name:var(--font-body)] text-slate-900">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
