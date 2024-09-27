import { Metadata } from 'next';
import ServicesHero from '@/components/sections/services/services-hero';
import ServicesList from '@/components/sections/services/services-list';
import ServicesPricing from '@/components/sections/services/services-pricing';
import ServicesFAQ from '@/components/sections/services/services-faq';
import ServicesCTA from '@/components/sections/services/services-cta';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;

export const metadata: Metadata = {
  title: 'AI and Automation Services | Raleigh AI Solutions',
  description: 'Explore our comprehensive AI and automation services including AI integration, cloud infrastructure setup, data analytics, technical training, and 508 compliance consulting.',
  openGraph: {
    title: 'AI and Automation Services | Raleigh AI Solutions',
    description: 'Discover how our AI and automation services can transform your business operations and drive growth.',
    images: [
      {
        url: '/images/raleigh-ai-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Raleigh AI Solutions Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI and Automation Services | Raleigh AI Solutions',
    description: 'Explore our AI integration, cloud infrastructure, data analytics, and technical training services.',
    images: ['/images/raleigh-ai-services-twitter.jpg'],
  },
};