'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StickyMobileCall } from '@/components/StickyMobileCall';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFunnel = pathname?.startsWith('/funnels');

  if (isFunnel) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyMobileCall />
    </div>
  );
}
