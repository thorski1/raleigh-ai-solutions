'use client';

import React from 'react';
import { FaRobot, FaCloud, FaChartBar, FaGraduationCap, FaUniversalAccess } from 'react-icons/fa';
import SectionHeadline from '@/components/reusables/section-headline';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import { cn } from '@/lib/utils';
import { getAllServices } from '@/lib/services';
import { useEffect, useState } from 'react';
import { Service } from '@/lib/services';

const iconMap = {
  'ai-integration-automation': FaRobot,
  'cloud-infrastructure-setup': FaCloud,
  'data-analytics-business-intelligence': FaChartBar,
  'technical-training-ai-education': FaGraduationCap,
  '508-compliance-consulting': FaUniversalAccess,
};

const classMap = {
  'ai-integration-automation': 'md:col-span-2 md:row-span-1',
  'cloud-infrastructure-setup': 'md:col-span-1 md:row-span-1',
  'data-analytics-business-intelligence': 'md:col-span-1 md:row-span-1',
  'technical-training-ai-education': 'md:col-span-1 md:row-span-1',
  '508-compliance-consulting': 'md:col-span-1 md:row-span-1',
};

const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getAllServices().then(setServices);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeadline text="Our Services" />
        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6 mt-8">
          {services.map((service) => (
            <BentoCard
              key={service.slug}
              name={service.title}
              description={service.hoverDescription}
              className={cn(
                classMap[service.slug as keyof typeof classMap],
                'group relative overflow-hidden rounded-2xl border border-transparent dark:border-white/[0.2] bg-secondary-foreground dark:bg-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-primary',
              )}
              background={<BorderBeam duration={20} colorFrom="#4F46E5" colorTo="#9333EA" />}
              Icon={iconMap[service.slug as keyof typeof iconMap]}
              href={`/services/${service.slug}`}
              cta="Learn More"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ServicesList;