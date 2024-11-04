import Hero from '@/components/reusables/hero';
import { ServiceOverview } from '@/components/sections/service-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CaseStudies } from '@/components/sections/case-studies';
import { CTASections } from '@/components/sections/cta-sections';
import { Metadata } from 'next';
import ServicesTabsSection from '@/components/shared/services-tabs-section';
import { trpc } from '@/trpc/server';

export default async function Home() {
  const newServices = await trpc.getAllNewServices();
  return (
    <main>
      <Hero
        eyebrow="Welcome to Raleigh Ai Solutions"
        headline="Revolutionize Your Business with AI"
        subheadline="Boost Productivity"
        subheadline2="Enhance Decision Making"
        mainSubheadline="Harness the power of cutting-edge AI solutions to transform your operations and drive
          unprecedented growth."
        cta1="Get Started"
        cta2="Learn More"
      />
      <ServicesTabsSection newServices={newServices} />
      {/* <CaseStudies /> */}
      <CTASections />
      {/* Add other sections of your home page here */}
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home | Raleigh AI Solutions',
    description: 'Welcome to Raleigh AI Solutions, your partner in AI-powered innovation.',
    openGraph: {
      title: 'Home | Raleigh AI Solutions',
      description: 'Welcome to Raleigh AI Solutions, your partner in AI-powered innovation.',
      images: [{ url: '/thumbnail-4.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Home | Raleigh AI Solutions',
      description: 'Welcome to Raleigh AI Solutions, your partner in AI-powered innovation.',
      images: ['/thumbnail-4.png'],
    },
  };
}

