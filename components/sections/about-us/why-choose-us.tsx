'use client';

import React from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <BlurFade>
          <div className="text-center">
            <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center pb-6">
              Why Choose Raleigh AI Solutions
            </AnimatedShinyText>
            <div className="bg-primary/40 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto shadow-2xl">
              <p className="text-background">
                Expert AI Consultants: Years of experience in AI consulting and automation services.
                Customized AI Solutions: Tailored to enhance business processes and operational
                efficiency. Proven Results: Helping clients across industries like government,
                healthcare, and retail to innovate and thrive.
              </p>
            </div>
            <div className="mt-8">
              <Link href={'/solutions'} className="w-full sm:w-2/3 md:w-auto px-0">
                <RainbowButton className="w-full sm:w-auto">
                  <span className="text-primary-dark font-semibold">Explore Our AI Solutions</span>
                </RainbowButton>
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default WhyChooseUs;