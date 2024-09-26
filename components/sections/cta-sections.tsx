'use client';

import React from 'react';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { FadeText } from '@/components/magicui/fade-text';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';

export function CTASections() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />
      
      <div className="relative z-20 space-y-12 md:space-y-24 mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Primary CTA */}
        <div className="text-center">
          <FadeText
            text="Ready to Transform Your Business with AI?"
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          />
          <p className="text-lg mb-6 text-indigo-100">
            Take the first step towards operational efficiency and business growth with RaleighAI Solutions—the expert AI consultants in Raleigh NC.
          </p>
          <RainbowButton onClick={() => console.log('Primary CTA clicked')} >
            <p className="text-primary font-semibold">Get a Free Consultation</p>
          </RainbowButton>
        </div>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center flex flex-col items-center justify-center">
            <FadeText
              text="Explore Our AI Services"
              className="text-2xl font-semibold mb-4 text-white"
            />
            <p className="mb-4 text-indigo-100">
              Discover how our AI and automation services can revolutionize your business operations.
            </p>
            <ShimmerButton
              borderRadius='12px'
              background="hsl(var(--primary))"
              className="text-center w-full md:w-2/3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2"
              onClick={() => console.log('Services CTA clicked')}
            >
              View Services
            </ShimmerButton>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <FadeText
              text="Calculate Your AI Advantage"
              className="text-2xl font-semibold mb-4 text-white"
            />
            <p className="mb-4 text-indigo-100">
              Use our AI ROI calculator to see how much you can save with our solutions.
            </p>
            <ShimmerButton
              borderRadius='12px'
              background="hsl(var(--secondary))"
              className="text-center w-full md:w-2/3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2"
              onClick={() => console.log('Calculator CTA clicked')}
            >
              Start Calculation
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}