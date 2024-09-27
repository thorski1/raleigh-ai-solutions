'use client';

import React from 'react';
import { FaRobot, FaChartLine, FaCloud, FaPiggyBank } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { FadeText } from '@/components/magicui/fade-text';
import { BorderBeam } from '@/components/magicui/border-beam';
import NumberTicker from '../magicui/number-ticker';
import SectionHeadline from '../reusables/section-headline';
import AnimatedShinyText from '../magicui/animated-shiny-text';

const comparisonData = [
  {
    traditional: 'Manual tasks',
    aiPowered: 'Automated workflows with AI integration services',
    Icon: FaRobot,
    stat: 40,
    statLabel: 'Efficiency Increase',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    traditional: 'Gut feelings',
    aiPowered: 'Data-driven insights through AI-powered data analytics',
    Icon: FaChartLine,
    stat: 25,
    statLabel: 'Better Decision Making',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    traditional: 'Limited growth',
    aiPowered: 'Seamless expansion with scalable cloud infrastructure',
    Icon: FaCloud,
    stat: 50,
    statLabel: 'Scalability Improvement',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    traditional: 'Higher expenses',
    aiPowered: 'Reduced costs through business process automation',
    Icon: FaPiggyBank,
    stat: 30,
    statLabel: 'Cost Reduction',
    className: 'md:col-span-1 md:row-span-1',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Why Choose Raleigh AI Solutions?" color="secondary" />
        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6">
          {comparisonData.map((item, index) => (
            <BentoCard
              key={index}
              name={item.aiPowered}
              className={cn(
                item.className,
                'group relative overflow-hidden rounded-2xl border border-transparent dark:border-white/[0.2] bg-secondary-foreground dark:bg-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-background',
              )}
              background={<BorderBeam duration={20} colorFrom="#4F46E5" colorTo="#9333EA" />}
              Icon={item.Icon}
              description={
                <div className="space-y-3">
                  <div className="mt-4 bg-primary/20 dark:bg-primary/20 p-3 rounded-lg inline-block">
                    <NumberTicker
                      className="text-3xl font-bold text-background dark:text-background"
                      value={item.stat}
                    />
                    <span className="text-sm font-medium text-background/80 dark:text-background/80">
                      % {item.statLabel}
                    </span>
                  </div>
                </div>
              }
              href="#"
              cta="Learn More"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
