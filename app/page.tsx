import Hero from '@/components/reusables/hero';
import { ServiceOverview } from '@/components/sections/service-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CaseStudies } from '@/components/sections/case-studies';
import { CTASections } from '@/components/sections/cta-sections';

export default function Home() {
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
      <ServiceOverview />
      <WhyChooseUs />
      <CaseStudies />
      <CTASections />
      {/* Add other sections of your home page here */}
    </main>
  );
}
