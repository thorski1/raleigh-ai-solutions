'use client';

import { BorderBeam } from '@/components/magicui/border-beam';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';
import CalendarModal from '@/components/reusables/calendar-modal';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';

export default function AboutSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />
      <BorderBeam className="absolute inset-0 z-10" />
      <div className="relative z-20 text-center">
        <AnimatedShinyText as="h2" className="text-2xl md:text-3xl text-center mb-6">
          About Raleigh AI Solutions
        </AnimatedShinyText>
        <p className="text-lg mb-8 text-primary-light max-w-2xl mx-auto">
          At Raleigh AI Solutions, we are dedicated to empowering businesses in Raleigh with
          cutting-edge AI technologies. Our blog shares expert insights, industry trends, and
          practical guides to help you navigate the evolving landscape of artificial intelligence.
        </p>
        <Modal>
          <ModalTrigger className="w-full sm:w-auto px-0">
            <RainbowButton className="w-full md:w-auto">
              <span className="text-primary-dark font-semibold">Learn More About Us</span>
            </RainbowButton>
          </ModalTrigger>
          <ModalBody>
            <CalendarModal />
          </ModalBody>
        </Modal>
      </div>
    </section>
  );
} 