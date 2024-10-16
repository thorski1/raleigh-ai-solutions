'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import NumberTicker from '../magicui/number-ticker';
import SectionHeadline from '../reusables/section-headline';
import { Solution, solutionIcons } from '@/lib/solutions-data';
import { trpc } from '@/trpc/client';
import { Skeleton } from '../ui/skeleton';

export function WhyChooseUs() {
  const { data: solutions, isLoading, error } = trpc.getAllSolutions.useQuery();

  const solutionGridLayout = ["md:col-span-1 md:row-span-1", "md:col-span-2 md:row-span-1", "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-1"];

  const renderSkeletons = () => (
    <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6">
      {[...Array(4)].map((_, index) => (
        <Skeleton
          key={index}
          className={cn(
            'rounded-2xl',
            solutionGridLayout[index % solutionGridLayout.length]
          )}
        />
      ))}
    </BentoGrid>
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Why Choose Raleigh AI Solutions?" />
        {isLoading ? (
          renderSkeletons()
        ) : (
          <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6">
            {solutions?.map((solution: Solution, index: number) => (
              <BentoCard
                key={solution.slug.current}
                name={solution.aiPowered}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-transparent dark:border-white/[0.2] bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300 text-background',
                  solutionGridLayout[index % solutionGridLayout.length]
                )}
                background={<BorderBeam duration={20} colorFrom="#4F46E5" colorTo="#9333EA" />}
                Icon={solutionIcons[solution.icon as keyof typeof solutionIcons]}
                description={
                  <div className="space-y-3">
                    <div className="mt-4 bg-primary/20 dark:bg-primary/20 p-3 rounded-lg inline-block">
                      <NumberTicker
                        className="text-3xl font-bold text-background dark:text-background"
                        value={solution.statValue}
                      />
                      <span className="text-sm font-medium text-background/80 dark:text-background/80">
                        % {solution.statLabel}
                      </span>
                    </div>
                  </div>
                }
                href={`/solutions/${solution.slug.current}`}
                cta="Learn More"
              />
            ))}
          </BentoGrid>
        )}
      </div>
    </section>
  );
}
