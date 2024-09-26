'use client';

import React from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';

const MissionVision = () => {
  return (
    <BlurFade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary/40 backdrop-blur-lg rounded-lg p-6 shadow-lg">
          <AnimatedShinyText as="h2" className="text-2xl font-semibold text-background">Our Mission</AnimatedShinyText>
          <p className="mt-2 text-background">
            At Raleigh AI Solutions, we empower businesses through scalable AI solutions, advanced
            technical training, and data-driven insights that drive operational efficiency and
            business growth.
          </p>
        </div>
        <div className="bg-primary/40 backdrop-blur-lg rounded-lg p-6 shadow-lg">
          <AnimatedShinyText as="h2" className="text-2xl font-semibold text-background">Our Vision</AnimatedShinyText>
          <p className="mt-2 text-background">
            To become the trusted AI and automation partner for businesses looking to innovate and
            thrive in an increasingly digital world.
          </p>
        </div>
      </div>
    </BlurFade>
  );
};

export default MissionVision;
