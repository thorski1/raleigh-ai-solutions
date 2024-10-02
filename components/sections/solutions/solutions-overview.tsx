'use client';

import React from 'react';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FaRobot, FaChartLine, FaPiggyBank, FaCloud } from 'react-icons/fa';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { BorderBeam } from '@/components/magicui/border-beam';
import { MagicCard } from '@/components/magicui/magic-card';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import Link from 'next/link';
import { solutionsData } from '@/lib/solutions-data';

const solutionIcons = {
  'automated-workflows-ai-integration-services': FaRobot,
  'data-driven-insights': FaChartLine,
  'reduced-costs-business-process-automation': FaPiggyBank,
  'seamless-expansion-scalable-cloud-infrastructure': FaCloud,
};

const SolutionsOverview = () => {
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
          We offer four key solutions designed to tackle core business needs. Whether you're looking
          to automate workflows, gain deeper insights from your data, cut costs, or scale your
          infrastructure, we have the right solution for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(solutionsData).map(([slug, solution]) => {
            const Icon = solutionIcons[slug as keyof typeof solutionIcons];
            return (
              <Link key={slug} href={`/solutions/${slug}`} className="block h-full">
                <MagicCard className="bg-primary-dark p-6 flex flex-col h-full transition-transform duration-300 hover:scale-105">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-secondary text-xl mb-2">
                      <Icon className="mr-3 h-10 w-10" />
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-primary-light text-base">{solution.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex-grow">
                      <h4 className="text-base font-semibold text-secondary mb-2">Key Benefits:</h4>
                      <ul className="list-disc list-inside mb-6 text-primary-light text-sm">
                        {solution.benefits.map((benefit, idx) => (
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
      </div>
    </section>
  );
};

export default SolutionsOverview;
