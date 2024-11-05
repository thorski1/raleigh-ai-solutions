import Hero from '@/components/reusables/hero';
import { ServiceOverview } from '@/components/sections/service-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CaseStudies } from '@/components/sections/case-studies';
import { CTASections } from '@/components/sections/cta-sections';
import { Metadata } from 'next';
import ServicesTabsSection from '@/components/shared/services-tabs-section';
import { trpc } from '@/trpc/server';
import { ServicesIntegrationSection } from '@/components/new-solutions/services-integration';
import { AboutSection } from '@/components/sections/about-section';

export default async function Home() {
  const newServices = await trpc.getAllNewServices();
  return (
    <main>
      <Hero
        eyebrow="Welcome to Raleigh Ai Solutions"
        headline="Revolutionize Your Business with AI"
        // subheadline="Boost Productivity"
        // subheadline2="Enhance Decision Making"
        mainSubheadline="Harness the power of cutting-edge AI solutions to transform your operations and drive
          unprecedented growth."
        cta1="Get Started"
        cta2="Learn More"
      />
      <AboutSection
        title="Innovating Business through Technology and Expertise"
        description="At Raleigh AI Solutions, we are committed to helping businesses thrive in the digital age. We leverage cutting-edge AI technologies, cloud infrastructure, and a human-centered approach to create solutions that transform operations and elevate customer experiences. Our expertise allows us to address complex challenges with precision, providing impactful, scalable, and sustainable outcomes."
      />
      <ServicesIntegrationSection
        services={newServices}
        title="Empower Your Business with Our Expertise"
        description="Our services define the core of what we do. From AI integration and cloud infrastructure setup to advanced training and accessibility consulting, each service is designed to meet your unique business challenges. We combine expertise, technology, and practical application to drive growth and innovation. Explore our services to understand how they lay the foundation for tailored solutions that solve your specific business problems and elevate your operations to the next level."
      />
      <CTASections />
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
