'use client';

import React from 'react';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { FadeText } from '@/components/magicui/fade-text';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import AnimatedShinyText from '../magicui/animated-shiny-text';
import { Modal, ModalBody, ModalTrigger } from '../ui/animated-modal';
import CalendarModal from '../reusables/calendar-modal';

export function CTASections({gradientBackground = true}) {
  return (
    <section className={`relative py-8 md:py-12 lg:py-16 overflow-hidden ${gradientBackground ? 'bg-gradient-to-br from-secondary via-secondary-foreground to-primary' : ''}`}>
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />

      <div className="relative z-20 space-y-12 md:space-y-24 mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        {/* Primary CTA */}
        <div className="text-center">
          <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center text-background mb-6">
            Ready to Transform Your Business with AI?
          </AnimatedShinyText>
          <p className="text-lg mb-6 text-indigo-100">
            Take the first step towards operational efficiency and business growth with Raleigh AI
            Solutions—the expert AI consultants in Raleigh NC.
          </p>
          <Modal>
            <ModalTrigger>
              <RainbowButton onClick={() => console.log('Primary CTA clicked')}>
                <p className="text-primary font-semibold">Get a Free Consultation</p>
              </RainbowButton>
            </ModalTrigger>
            <ModalBody>
              <CalendarModal />
            </ModalBody>
          </Modal>
        </div>

        {/* Secondary CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center flex flex-col items-center justify-center">
            <AnimatedShinyText as="h2" className="text-2xl text-center text-background">
              Explore Our AI Services
            </AnimatedShinyText>
            <p className="mb-4 text-indigo-100">
              Discover how our AI and automation services can revolutionize your business
              operations.
            </p>
            <ShimmerButton
              borderRadius="12px"
              background="hsl(var(--primary))"
              className="text-center w-full md:w-2/3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 py-2"
              as="a"
              href="/services"
            >
              View Services
            </ShimmerButton>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
            <AnimatedShinyText as="h2" className="text-2xl text-center text-background">
              Calculate Your AI Advantage
            </AnimatedShinyText>
            <p className="mb-4 text-indigo-100">
              Use our AI ROI calculator to see how much you can save with our solutions.
            </p>
            <ShimmerButton
              borderRadius="12px"
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
