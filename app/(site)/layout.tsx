import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import { cn } from '@/lib/utils';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { TRPCProvider } from '@/trpc/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raleigh AI Solutions',
  description: 'AI-powered digital marketing solutions',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-black.png" type="image/png" />
        <GoogleTagManager gtmId="GTM-MGXD95K8" />
      </head>
      <body className={cn(inter.className, 'overflow-x-hidden max-w-full')}>
        <TRPCProvider>
          <Header />
          {children}
          <Footer />
        </TRPCProvider>
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-9KL88EYGE4" />
    </html>
  );
}
