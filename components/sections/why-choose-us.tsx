'use client';

import React from 'react';
import { FaRobot, FaChartLine, FaCloud, FaPiggyBank } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { FadeText } from '@/components/magicui/fade-text';
import { BorderBeam } from '@/components/magicui/border-beam';
import NumberTicker from '../magicui/number-ticker';

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
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <FadeText className="text-white" text="Why Choose RaleighAI Solutions?" />
        </h2>
        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6">
          {comparisonData.map((item, index) => (
            <BentoCard
              key={index}
              name={item.aiPowered}
              className={cn(
                item.className,
                'group relative overflow-hidden rounded-2xl border border-transparent dark:border-white/[0.2] bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-primary',
              )}
              background={<BorderBeam duration={20} colorFrom="#4F46E5" colorTo="#9333EA" />}
              Icon={item.Icon}
              description={
                <div className="space-y-3">
                  {/* <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Traditional</p>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">{item.traditional}</p>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">AI-Powered</p>
                  <p className="font-semibold text-indigo-700 dark:text-indigo-300">{item.aiPowered}</p> */}
                  <div className="mt-4 bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg inline-block">
                    <NumberTicker
                      className="text-3xl font-bold text-indigo-600 dark:text-indigo-400"
                      value={item.stat}
                    />
                    <span className="text-sm font-medium text-indigo-800 dark:text-indigo-200">
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
