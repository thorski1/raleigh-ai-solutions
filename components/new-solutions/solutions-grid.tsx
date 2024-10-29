import { NewService, NewSolution } from '@/sanity/types';
import { BentoCard } from '../magicui/bento-grid';
import { BentoGrid } from '../magicui/bento-grid';
import * as FaIcons from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import NumberTicker from '../magicui/number-ticker';
import Link from 'next/link';

// Function to get dynamic badge styles for a service
const getBadgeStyles = (index: number) => {
  // Vibrant color combinations using Tailwind's color palette
  const styles = [
    {
      bg: 'bg-violet-100 hover:bg-violet-700 dark:bg-violet-950/30 dark:hover:bg-violet-300',
      text: 'text-violet-700 hover:text-violet-100 dark:text-violet-300 dark:hover:text-violet-950',
    },
    {
      bg: 'bg-rose-100 hover:bg-rose-700 dark:bg-rose-950/30 dark:hover:bg-rose-300',
      text: 'text-rose-700 hover:text-rose-100 dark:text-rose-300 dark:hover:text-rose-950',
    },
    {
      bg: 'bg-cyan-100 hover:bg-cyan-700 dark:bg-cyan-950/30 dark:hover:bg-cyan-300',
      text: 'text-cyan-700 hover:text-cyan-100 dark:text-cyan-300 dark:hover:text-cyan-950',
    },
    {
      bg: 'bg-amber-100 hover:bg-amber-700 dark:bg-amber-950/30 dark:hover:bg-amber-300',
      text: 'text-amber-700 hover:text-amber-100 dark:text-amber-300 dark:hover:text-amber-950',
    },
    {
      bg: 'bg-emerald-100 hover:bg-emerald-700 dark:bg-emerald-950/30 dark:hover:bg-emerald-300',
      text: 'text-emerald-700 hover:text-emerald-100 dark:text-emerald-300 dark:hover:text-emerald-950',
    },
    {
      bg: 'bg-fuchsia-100 hover:bg-fuchsia-700 dark:bg-fuchsia-950/30 dark:hover:bg-fuchsia-300',
      text: 'text-fuchsia-700 hover:text-fuchsia-100 dark:text-fuchsia-300 dark:hover:text-fuchsia-950',
    },
  ];

  return styles[index % styles.length];
};

// Add a helper function to extract the percentage from KPI string
const extractPercentage = (kpi: string): number => {
  const match = kpi.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export default function SolutionsGrid({ services }: { services: NewService[] }) {
  // Updated grid layout pattern
  const gridLayouts = [
    // First row (tall + 2 small)
    'lg:col-span-1 lg:row-span-2', // Tall card
    'lg:col-span-1 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-1', // Small card
    // Second row (small + tall + small)
    'lg:col-span-1 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-2', // Tall card
    'lg:col-span-1 lg:row-span-1', // Small card
    // Third row (3 small)
    'lg:col-span-1 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-1', // Small card
    // Fourth row (tall + 2 small) - Pattern repeats
    'lg:col-span-1 lg:row-span-1', // Tall card
    'lg:col-span-2 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-1', // Small card
    // Fifth row (small + tall + small)
    'lg:col-span-2 lg:row-span-1', // Tall card
    'lg:col-span-1 lg:row-span-1', // Small card
    // Last row (always 3 small)
    'lg:col-span-1 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-1', // Small card
    'lg:col-span-1 lg:row-span-1', // Small card
  ];

  // Calculate total number of solutions
  const totalSolutions = services.reduce((acc, service) => acc + service.solutions.length, 0);

  // Function to get the correct layout index
  const getLayoutIndex = (serviceIndex: number, solutionIndex: number, totalIndex: number) => {
    // For the last row, always use the last three layouts
    if (totalIndex >= totalSolutions - 3) {
      return gridLayouts.length - (totalSolutions - totalIndex);
    }
    // For other rows, use the regular pattern
    return totalIndex % (gridLayouts.length - 3);
  };

  // Keep track of total index across all services
  let totalIndex = 0;

  const getIconComponent = (iconName: string): IconType => {
    return FaIcons[iconName as keyof typeof FaIcons] || FaIcons.FaQuestionCircle;
  };

  return (
    <section className="py-10 bg-secondary/5">
      <div className="container mx-auto px-4">
        <BentoGrid className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service: NewService, serviceIndex: number) =>
            service.solutions.map((solution: NewSolution, solutionIndex: number) => {
              const badgeStyles = getBadgeStyles(serviceIndex);
              const layoutIndex = getLayoutIndex(serviceIndex, solutionIndex, totalIndex++);

              return (
                <BentoCard
                  key={solution.slug.current}
                  name={solution.title}
                  className={cn(
                    'h-auto', // Allow height to adjust to content
                    gridLayouts[layoutIndex],
                  )}
                  Icon={getIconComponent(solution.icon)}
                  stats={
                    solution.kpi && (
                      <div className="bg-primary/20 dark:bg-primary/20 px-3 py-2 rounded-lg inline-flex items-center h-full">
                        <NumberTicker
                          className="text-2xl font-bold text-background dark:text-background"
                          value={extractPercentage(solution.kpi)}
                        />
                        <span className="text-sm font-medium text-background/80 dark:text-background/80 ml-1.5">
                          % {solution.kpi.replace(/^\d+%?\s*/, '')}
                        </span>
                      </div>
                    )
                  }
                  description={<p className="max-w-lg text-primary-light">{solution.summary}</p>}
                  badge={
                    <Link
                      href={`/new-services/${service.slug}`}
                      className={cn(
                        'absolute top-4 right-4 z-20',
                        'transition-colors duration-200',
                      )}
                    >
                      <Badge
                        className={cn(
                          'border-none font-medium cursor-pointer',
                          'px-2 xl:px-3 py-1 xl:py-1.5 text-xs xl:text-sm',
                          'shadow-lg backdrop-blur-sm',
                          'transition-colors duration-200',
                          badgeStyles.bg,
                          badgeStyles.text,
                        )}
                      >
                        {service.title}
                      </Badge>
                    </Link>
                  }
                  href={`/new-solutions/${solution.slug}`}
                  cta="Learn More"
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5" />
                  }
                />
              );
            }),
          )}
        </BentoGrid>
      </div>
    </section>
  );
}
