'use client';

import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';
import CalendarModal from '@/components/reusables/calendar-modal';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import MagicButton from '@/components/magicui/magic-button';

export function CTASection() {
  return (
    <section className="py-10 relative">
      {/* Gradient background similar to services-integration cards */}
      <div className="absolute inset-0 bg-secondary/5" />
      
     
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 backdrop-blur-sm">
          {/* Title with text generation effect */}
          <TextGenerateEffect
            words="Find the Solution That Fits Your Business Needs"
            className="text-4xl md:text-5xl font-bold text-primary-dark"
          />

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-dark/90 leading-relaxed">
            Our solutions are designed to tackle the unique challenges faced by your business.
            Whether you need to automate workflows, train your team, or improve accessibility, we
            have the expertise and tools to help. Explore our solutions today and take the first
            step toward transforming your business.
          </p>

          {/* CTA Button with Modal - Matching Hero style */}
          <div>
            <Modal>
              <ModalTrigger className="w-full sm:w-auto px-4">
                <MagicButton className="w-full sm:w-auto text-white">
                  <p className="text-white font-medium">Schedule a Consultation</p>
                </MagicButton>
              </ModalTrigger>
              <ModalBody>
                <CalendarModal />
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}
