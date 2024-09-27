'use client';

import React from 'react';
import { FaRobot, FaCloud, FaChartBar, FaGraduationCap, FaUniversalAccess } from 'react-icons/fa';
import SectionHeadline from '@/components/reusables/section-headline';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: FaRobot,
    title: 'AI Integration & Automation',
    description: 'Enhance business processes with custom AI models and workflow automation tools.',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    icon: FaCloud,
    title: 'Cloud Infrastructure Setup',
    description: 'Secure scalable cloud infrastructure solutions for SMEs.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: FaChartBar,
    title: 'Data Analytics & Business Intelligence',
    description: 'Leverage AI-powered data analytics for data-driven decision-making.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: FaGraduationCap,
    title: 'Technical Training & AI Education',
    description: 'Empower your team with AI training programs and technical training services.',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    icon: FaUniversalAccess,
    title: '508 Compliance Consulting',
    description: 'Ensure your AI systems meet government accessibility standards.',
    className: 'md:col-span-1 md:row-span-1',
  },
];

const ServicesList = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Our Services" color="secondary" />
        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6 mt-8">
          {services.map((service, index) => (
            <BentoCard
              key={index}
              name={service.title}
              description={service.description}
              className={cn(
                service.className,
                'group relative overflow-hidden rounded-2xl border border-transparent dark:border-white/[0.2] bg-secondary-foreground dark:bg-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-primary',
              )}
              background={<BorderBeam duration={20} colorFrom="#4F46E5" colorTo="#9333EA" />}
              Icon={service.icon}
              href="#"
              cta="Learn More"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ServicesList;