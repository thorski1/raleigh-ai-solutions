import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raleigh AI Solutions',
  description: 'AI-powered digital marketing solutions',
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'overflow-x-hidden max-w-full')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
