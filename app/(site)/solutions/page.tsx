import { Metadata } from 'next';
import { trpc } from '@/trpc/server';
import NewSolutionHero from '@/components/new-solutions/hero';
import VideoContentSection from '@/components/shared/video-content-section';
import SolutionsGrid from '@/components/new-solutions/solutions-grid';
import { ServicesIntegrationSection } from '@/components/new-solutions/services-integration';
import { CTASection } from '@/components/new-solutions/cta-section';
import WhyChooseUsSection from '@/components/shared/why-choose-us-section';

export const metadata: Metadata = {
  title: 'AI Solutions | Raleigh AI Services',
  description:
    'Discover our targeted solutions powered by cutting-edge AI, cloud, and automation services.',
  openGraph: {
    title: 'AI Solutions | Raleigh AI Services',
    description:
      'Discover our targeted solutions powered by cutting-edge AI, cloud, and automation services.',
    images: [{ url: '/thumbnail-4.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions | Raleigh AI Services',
    description:
      'Discover our targeted solutions powered by cutting-edge AI, cloud, and automation services.',
    images: ['/thumbnail-4.png'],
  },
};

export default async function NewSolutionsPage() {
  const services = await trpc.getAllNewServices();

  return (
    <main className="min-h-screen relative">
      <div className="relative">
        <NewSolutionHero
          heroTitle="Our Solutions"
          heroSubtitle="Targeted Solutions Powered by Cutting-Edge AI, Cloud, and Automation Services"
          ctaButton="Schedule a Consultation"
        />
        <VideoContentSection
          title="How Our Solutions Work"
          description="The solutions we provide are tailored applications of our core services. Our services define our expertise, while the solutions represent how we utilize that expertise to solve specific business challenges. Whether it's enhancing team skills with AI training or optimizing performance with edge computing, each solution is crafted with a clear focus on delivering measurable outcomes. Explore our solutions to see how we can help address your business needs."
          videoUrl="https://mbbrauqirbosaodnbpff.supabase.co/storage/v1/object/public/videos/solutions-main-page.mp4?t=2024-10-30T02%3A34%3A05.325Z"
        />
        <SolutionsGrid services={services} />
        <CTASection />
        <ServicesIntegrationSection services={services} />
        <WhyChooseUsSection
          title="Why Choose Our Solutions?"
          description="We provide tailored, actionable solutions that leverage cutting-edge technologies to meet your business's specific needs. Our AI-first approach ensures that every solution is optimized for efficiency, scalability, and personalization. We work closely with your team, offering support and training to ensure successful adoption and continuous improvement."
        />
      </div>
    </main>
  );
}
