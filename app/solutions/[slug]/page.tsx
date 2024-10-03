import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import ShimmerButton from '@/components/magicui/shimmer-button';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { CTASections } from '@/components/sections/cta-sections';
import { BenefitList } from '@/components/ui/benefit-list';
import { Separator } from '@/components/ui/separator';
import { solutionsData, SolutionSlug } from '@/lib/solutions-data';
import { FaRobot, FaChartLine, FaPiggyBank, FaCloud } from 'react-icons/fa';
import { LampContainer } from '@/components/ui/lamp';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const solutionIcons = {
  'automated-workflows-ai-integration-services': FaRobot,
  'data-driven-insights': FaChartLine,
  'reduced-costs-business-process-automation': FaPiggyBank,
  'seamless-expansion-scalable-cloud-infrastructure': FaCloud,
};

interface SolutionPageProps {
  params: {
    slug: SolutionSlug;
  };
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const solution = solutionsData[params.slug];

  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: `${solution.title} | Raleigh AI Solutions`,
    description: solution.shortDescription,
    openGraph: {
      title: `${solution.title} | Raleigh AI Solutions`,
      description: solution.shortDescription,
      images: [{ url: '/thumbnail-3.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${solution.title} | Raleigh AI Solutions`,
      description: solution.shortDescription,
      images: ['/thumbnail-3.png'],
    },
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = solutionsData[params.slug];
  const Icon = solutionIcons[params.slug as keyof typeof solutionIcons];

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen relative bg-secondary-light/10">
      <LampContainer>
        <div className="flex flex-col items-center text-white">
          <Icon className="text-6xl text-secondary-dark md:text-secondary-light mb-4" />
          <h1 className="text-4xl font-bold mb-4 text-center">{solution.title}</h1>
          <p className="text-xl mb-8 text-center max-w-2xl text-primary-light">
            {solution.shortDescription}
          </p>
        </div>
      </LampContainer>

      <div className="container md:max-w-4xl lg:max-w-6xl mx-auto py-8">
        <Breadcrumb className="container mx-auto px-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-secondary-dark hover:text-secondary"
                href="/solutions"
              >
                Solutions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary-dark">{solution.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container md:max-w-4xl lg:max-w-6xl mx-auto relative z-20 px-4">
        {solution.content.map((item, i) => (
          <p className="text-primary-dark mb-4" key={i}>
            {item}
          </p>
        ))}
        <h2 className="text-2xl font-semibold mb-4 text-primary-dark text-center mt-8">
          Key Benefits
        </h2>
        <BenefitList benefits={solution.benefits} />
      </div>
      <CTASections />
    </main>
  );
}
