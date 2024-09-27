'use client';

import React from 'react';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import { RainbowButton } from '@/components/magicui/rainbow-button';

const ServicesHero = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary pt-28">
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            <AnimatedShinyText>Our AI and Automation Services</AnimatedShinyText>
          </h1>
          <p className="mt-2 md:mt-4 text-lg text-white/80">
            Transforming businesses with cutting-edge AI solutions and automation tools
          </p>
        </div>
        <div className="mt-8 text-center">
          <RainbowButton onClick={() => console.log('Get Started clicked')}>
            <span className="text-primary font-semibold">Get Started</span>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;