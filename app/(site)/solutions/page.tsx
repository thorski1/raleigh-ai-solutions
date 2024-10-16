import { Metadata } from 'next';
import Hero from '@/components/reusables/hero';
import { CTASections } from '@/components/sections/cta-sections';
import SolutionsOverview from '@/components/sections/solutions/solutions-overview';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { client } from '@/sanity/lib/client';

export const metadata: Metadata = {
  title: 'AI Solutions | Raleigh AI Solutions',
  description:
    'Explore our AI-powered solutions tailored to optimize workflows, enhance decision-making, and help your business grow.',
  openGraph: {
    title: 'AI Solutions | Raleigh AI Solutions',
    description:
      'Explore our AI-powered solutions tailored to optimize workflows, enhance decision-making, and help your business grow.',
    images: [{ url: '/thumbnail-4.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions | Raleigh AI Solutions',
    description:
      'Explore our AI-powered solutions tailored to optimize workflows, enhance decision-making, and help your business grow.',
    images: ['/thumbnail-4.png'],
  },
};

export default async function SolutionsPage() {
  let solutions;
  try {
    solutions = await client.fetch(`*[_type == "solution"] {
      title,
      "slug": slug.current,
      shortDescription,
      benefits,
      contentHeader,
      content,
      icon,
      statValue,
      statLabel,
      traditional,
      aiPowered
    }`);
  } catch (error) {
    console.error('Error fetching solutions:', error);
    solutions = [];
  }

  if (!solutions || solutions.length === 0) {
    console.warn('No solutions found or error occurred');
  }

  return (
    <main className="min-h-screen">
      <Hero
        eyebrow="Raleigh AI Solutions - Tailored AI-Powered Solutions for Your Business"
        headline="Empower Your Business with Cutting-Edge AI Solutions"
        mainSubheadline="At Raleigh AI Solutions, we provide a range of AI-driven services tailored to optimize workflows, enhance decision-making, and help your business grow. Our innovative solutions are designed to address the unique challenges of your business by leveraging artificial intelligence and cloud technologies. Explore our AI-powered solutions and discover how we can help streamline operations, reduce costs, and unlock new opportunities."
      />
      <SolutionsOverview />
      <WhyChooseUs />
      <CTASections />
    </main>
  );
}
