import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { trpc } from '@/trpc/server';
import NewSolutionHero from '@/components/new-solutions/hero';
import StepsSection from '@/components/new-solutions/steps-section';
import KeyFeaturesSection from '@/components/shared/key-features-section';
import TechnologiesUsedSection from '@/components/shared/technologies-used-section';
import CtaSection from '@/components/shared/cta-section';
import Divider from '@/components/ui/divider';
import VideoContentSection from '@/components/shared/video-content-section';

interface NewSolutionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: NewSolutionPageProps): Promise<Metadata> {
  const solution = await trpc.getNewSolutionBySlug({ slug: params.slug });

  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: `${solution.title} | Raleigh AI Solutions`,
    description: solution.heroSubtitle,
    openGraph: {
      title: `${solution.title} | Raleigh AI Solutions`,
      description: solution.heroSubtitle,
      images: [{ url: '/thumbnail-3.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${solution.title} | Raleigh AI Solutions`,
      description: solution.heroSubtitle,
      images: ['/thumbnail-3.png'],
    },
  };
}

export default async function NewSolutionPage({ params }: NewSolutionPageProps) {
  const solution = await trpc.getNewSolutionBySlug({ slug: params.slug });

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen relative">
      <div className="relative">
        <div className="relative z-10">
          <NewSolutionHero
            heroTitle={solution.heroTitle}
            heroSubtitle={solution.heroSubtitle}
            ctaButton={solution.ctaButton}
          />
          <VideoContentSection
            description={solution.problemDescription}
            title={solution.problemTitle}
            videoUrl={solution.problemVideo}
          />

          <StepsSection stepsTitle={solution.stepsTitle} steps={solution.steps} />
          <KeyFeaturesSection keyFeatures={solution.features} serviceName={solution.title} />
          <Divider />
          <TechnologiesUsedSection
            technologiesUsedTitle={solution.technologiesUsedTitle}
            technologies={solution.technologiesUsed}
          />
          <Divider />
          <CtaSection ctaTitle={solution.ctaTitle} ctaButton={solution.ctaButton} />
        </div>
      </div>
    </main>
  );
}
