'use client';

import React from 'react';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from 'next/link';
import { Solution, solutionIcons } from '@/lib/solutions-data'; 
import { trpc } from '@/trpc/client';
import { Skeleton } from '@/components/ui/skeleton';

const SolutionsOverview: React.FC = () => {
  const { data: solutions, isLoading, error } = trpc.getAllSolutions.useQuery();

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[...Array(4)].map((_, index) => (
        <Skeleton key={index} className="h-[400px] rounded-xl" />
      ))}
    </div>
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="relative py-16 overflow-hidden">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <AnimatedShinyText
          as="h2"
          className="text-3xl font-bold text-center mb-8 text-primary-dark/80"
        >
          Our AI-Powered Solutions
        </AnimatedShinyText>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-primary-dark/80">
          We offer key solutions designed to tackle core business needs. Whether you're looking
          to automate workflows, gain deeper insights from your data, cut costs, or scale your
          infrastructure, we have the right solution for you.
        </p>
        {isLoading ? (
          renderSkeletons()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions?.map((solution: Solution) => {
              const Icon = solutionIcons[solution.icon as keyof typeof solutionIcons];
              return (
                <Link key={solution.slug.current} href={`/solutions/${solution.slug.current}`} className="block h-full">
                  <MagicCard className="bg-primary-dark p-6 flex flex-col h-full transition-transform duration-300 hover:scale-105">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-secondary text-xl mb-2">
                        {Icon && <Icon className="mr-3 h-10 w-10" />}
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-primary-light text-base">{solution.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex-grow">
                        <h4 className="text-base font-semibold text-secondary mb-2">Key Benefits:</h4>
                        <ul className="list-disc list-inside mb-6 text-primary-light text-sm">
                          {solution.benefits.map((benefit: string, idx: number) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <RainbowButton className="w-full sm:w-auto">
                        <p className="text-secondary-dark font-semibold">Learn More</p>
                      </RainbowButton>
                    </CardFooter>
                  </MagicCard>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsOverview;
