'use client';

import React from 'react';
import { FaCogs, FaExpandArrowsAlt, FaUsersCog, FaChartLine } from 'react-icons/fa';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { BorderBeam } from '@/components/magicui/border-beam';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { Solution } from '@/lib/solutions-data';

const reasons = [
  {
    title: 'Custom AI Models',
    description: 'Our AI solutions are tailored to fit the unique workflows and processes of your business.',
        icon: FaCogs,
    className: 'md:col-span-2 bg-primary-dark text-secondary-light',
  },
  {
    title: 'Scalable Solutions',
    description: 'We design systems that grow with your business, ensuring scalability and adaptability.',
    icon: FaExpandArrowsAlt,
    className: 'md:col-span-1 bg-primary-dark',
  },
  {
    title: 'Expert Support',
    description: 'Our team of experts works closely with you to deliver the best results, from consultation to implementation.',
    icon: FaUsersCog,
    className: 'md:col-span-1 bg-primary-dark',
  },
  {
    title: 'Proven Results',
    description: 'From cutting costs to improving decision-making, our solutions help drive real, tangible outcomes.',
    icon: FaChartLine,
    className: 'md:col-span-2 bg-primary-dark',
  },
];

const SolutionsWhyChooseUs = ({ solutions }: { solutions: Solution[] }) => {
  return (
    <section className="relative py-16 bg-secondary/10 overflow-hidden">
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <AnimatedShinyText as="h2" className="text-3xl font-bold text-center mb-8 text-primary-dark/80">
          Why Choose Raleigh AI Solutions?
        </AnimatedShinyText>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-primary-dark/80">
          At Raleigh AI Solutions, we are committed to delivering measurable results that help your business thrive in today's digital world. Our solutions are customized to meet your specific needs and drive operational excellence through AI integration, automation, data insights, and cloud technologies.
        </p>
        <BentoGrid className="auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <BentoCard
              key={index}
              name={reason.title}
              description={reason.description}
              className={reason.className}
              background={<BorderBeam duration={20} colorFrom="#4F46E5" colorTo="#9333EA" />}
              Icon={reason.icon}
              href="#"
              cta="Learn More"
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default SolutionsWhyChooseUs;