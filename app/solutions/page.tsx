import { Metadata } from 'next';
import Hero from '@/components/reusables/hero';
import { CTASections } from '@/components/sections/cta-sections';
import SolutionsOverview from '@/components/sections/solutions/solutions-overview';
import SolutionsWhyChooseUs from '@/components/sections/solutions/solutions-why-choose-us';

export const metadata: Metadata = {
  title: 'AI Solutions | Raleigh AI Solutions',
  description:
    'Explore our AI-powered solutions tailored to optimize workflows, enhance decision-making, and help your business grow.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        eyebrow="Raleigh AI Solutions - Tailored AI-Powered Solutions for Your Business"
        headline="Empower Your Business with Cutting-Edge AI Solutions"
        mainSubheadline="At Raleigh AI Solutions, we provide a range of AI-driven services tailored to optimize workflows, enhance decision-making, and help your business grow. Our innovative solutions are designed to address the unique challenges of your business by leveraging artificial intelligence and cloud technologies. Explore our AI-powered solutions and discover how we can help streamline operations, reduce costs, and unlock new opportunities."
      />
      <SolutionsOverview />
      <SolutionsWhyChooseUs />
      <CTASections />
    </main>
  );
}
