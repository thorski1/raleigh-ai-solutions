import { Metadata } from 'next';
import ServicesHero from '@/components/sections/services/services-hero';
import ServicesList from '@/components/sections/services/services-list';
import ServicesWhyChooseUs from '@/components/sections/services/services-why-choose-us';
import ServicesCTA from '@/components/sections/services/services-cta';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ServicesWhyChooseUs />
      <ServicesCTA />
    </div>
  );
};

export const metadata: Metadata = {
  title: 'AI Solutions and Services | Raleigh AI Solutions',
  description: 'Explore our comprehensive AI solutions including data analytics, process automation, cloud infrastructure, AI integration, and 508 compliance consulting.',
  openGraph: {
    title: 'AI Solutions and Services | Raleigh AI Solutions',
    description: 'Discover how our AI solutions can transform your business operations, drive data-driven decision-making, and automate workflows.',
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
    title: 'AI Solutions and Services | Raleigh AI Solutions',
    description: 'Explore our AI-powered data analytics, process automation, cloud infrastructure, and AI integration services.',
    images: ['/images/raleigh-ai-services-twitter.jpg'],
  },
};

export default ServicesPage;