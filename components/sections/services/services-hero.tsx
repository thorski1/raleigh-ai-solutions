'use client';

import React from 'react';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import FlickeringGrid from '@/components/magicui/flickering-grid';
import { BorderBeam } from '@/components/magicui/border-beam';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import CalendarModal from '@/components/reusables/calendar-modal';
import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';

const ServicesHero = () => {
  return (
    <section className="relative  py-8 md:py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            <AnimatedShinyText>Our AI and Automation Services</AnimatedShinyText>
          </h1>
          <p className="mt-2 md:mt-4 text-lg text-secondary-light">
            Transforming businesses with cutting-edge AI solutions and automation tools
          </p>
        </div>
        <div className="mt-8 text-center">
          <Modal>
            <ModalTrigger className="w-full sm:w-auto px-0">
              <RainbowButton className="w-full sm:w-auto">
                <span className="text-primary-dark font-semibold">Get Started</span>
              </RainbowButton>
            </ModalTrigger>
            <ModalBody>
              <CalendarModal />
            </ModalBody>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;