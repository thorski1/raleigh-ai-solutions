import Hero from '@/components/reusables/hero';
import { ServiceOverview } from '@/components/sections/service-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CaseStudies } from '@/components/sections/case-studies';
import { CTASections } from '@/components/sections/cta-sections';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceOverview />
      <WhyChooseUs />
      <CaseStudies />
      <CTASections />
      {/* Add other sections of your home page here */}
    </main>
  );
}
