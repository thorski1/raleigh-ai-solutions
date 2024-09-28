'use client';

import React from 'react';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';

interface ServicesCTAProps {
  headline?: string;
  description?: string;
  buttonText?: string;
}

const ServicesCTA: React.FC<ServicesCTAProps> = ({
  headline = 'Ready to Transform Your Business with AI?',
  description = 'Take the first step towards operational efficiency and business growth with Raleigh AI Solutions—the expert AI consultants in Raleigh NC.',
  buttonText = 'Get Started Now',
}) => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center">
          <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center mb-6">
            {headline}
          </AnimatedShinyText>
          <p className="text-lg mb-8 text-primary-light">
            {description}
          </p>
          <RainbowButton onClick={() => console.log('Get Started clicked')}>
            <span className="text-primary-dark font-semibold">{buttonText}</span>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;