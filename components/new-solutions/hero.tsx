'use client';

import { BorderBeam } from '@/components/magicui/border-beam';
import SparklesText from '@/components/magicui/sparkles-text';
import MagicButton from '@/components/magicui/magic-button';
import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';
import CalendarModal from '@/components/reusables/calendar-modal';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import BlurFade from '@/components/magicui/blur-fade';

interface NewSolutionHeroProps {
  heroTitle: string;
  heroSubtitle: string;
  ctaButton: string;
}

export default function NewSolutionHero({
  heroTitle,
  heroSubtitle,
  ctaButton,
}: NewSolutionHeroProps) {
  return (
    <div className="relative py-20 md:py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary">
      <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />
      <BorderBeam className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <SparklesText
          text={heroTitle}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          sparklesCount={4}
        />

        <BlurFade
          duration={0.8}
          delay={0.4}
          className="text-xl md:text-2xl lg:text-3xl text-primary-light max-w-3xl mx-auto"
        >
          {heroSubtitle}
        </BlurFade>

        <BlurFade duration={0.8} delay={0.6}>
          <Modal>
            <ModalTrigger className="w-full sm:w-auto px-4">
              <MagicButton className="w-full sm:w-auto text-white">
                <p className="text-white font-medium">{ctaButton}</p>
              </MagicButton>
            </ModalTrigger>
            <ModalBody>
              <CalendarModal />
            </ModalBody>
          </Modal>
        </BlurFade>
      </div>
    </div>
  );
}
