import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { trpc } from '@/trpc/server';
import ServiceHero from '@/components/new-services/service-hero';
import KeyFeaturesSection from '@/components/shared/key-features-section';
import StepsSection from '@/components/new-services/steps-section';
import SolutionsSection from '@/components/new-services/solutions-section';
import TechnologiesUsedSection from '@/components/shared/technologies-used-section';
import WhyChooseUsSection from '@/components/shared/why-choose-us-section';
import CtaSection from '@/components/shared/cta-section';
import Divider from '@/components/ui/divider';
import VideoContentSection from '@/components/shared/video-content-section';

interface NewServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: NewServicePageProps): Promise<Metadata> {
  const service = await trpc.getNewServiceBySlug({ slug: params.slug });

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Raleigh AI Services`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Raleigh AI Services`,
      description: service.description,
      images: [{ url: '/thumbnail-4.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Raleigh AI Services`,
      description: service.description,
      images: ['/thumbnail-4.png'],
    },
  };
}

export default async function NewServicePage({ params }: NewServicePageProps) {
  const service = await trpc.getNewServiceBySlug({ slug: params.slug });

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen relative">
      <div className="relative">
        <ServiceHero
          title={service.title}
          subtitle={service.heroSubtitle}
          ctaButton={service.ctaButton}
        />
        <VideoContentSection
          title={service.introductionTitle}
          description={service.introductionDescription}
          videoUrl={service.introductionVideo}
        />
        <StepsSection
          stepsTitle={service.stepsTitle}
          stepsDescription={service.stepsDescription}
          steps={service.steps.map((step: any) => ({
            title: step.title,
            description: step.description,
          }))}
        />
        <SolutionsSection serviceName={service.title} solutions={service.solutions} />
        <KeyFeaturesSection keyFeatures={service.keyFeatures} serviceName={service.title} />
        <Divider />
        <TechnologiesUsedSection
          technologiesUsedTitle={service.technologiesUsedTitle || 'Technologies We Use'}
          technologies={service.technologiesUsed}
        />
        <Divider />
        <WhyChooseUsSection title="Why Choose Us" description={service.whyChooseUs}  />
        <CtaSection
          ctaTitle={service.ctaTitle || 'Ready to Get Started?'}
          ctaButton={service.ctaButton || 'Schedule a Consultation'}
        />
      </div>
    </main>
  );
}
