'use client';

import { useRef } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { FadeText } from '@/components/magicui/fade-text';
import FlickeringGrid from '../magicui/flickering-grid';
import SparklesText from '../magicui/sparkles-text';
import ShinyButton from '../magicui/shiny-button';
import { Modal, ModalBody, ModalTrigger } from '../ui/animated-modal';
import Link from 'next/link';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import RetroGrid from '../magicui/retro-grid';
import AnimatedGridPattern from '../magicui/animated-grid-pattern';

export default function BlogHero({
  headline,
  subheadline,
  cta1,
  cta2,
}: {
  headline: string;
  subheadline?: string;
  cta1?: string;
  cta2?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative py-16 lg:py-20 pt-28 md:pt-32 lg:pt-36 flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary"
    >
          <AnimatedGridPattern className="absolute inset-0 z-0 opacity-40" />
      <BorderBeam className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 ref={headlineRef} className="mb-6">
          <SparklesText
            text={headline}
            className="text-4xl md:text-5xl font-extrabold text-white"
            sparklesCount={4}
          />
        </h1>

        {subheadline && (
          <TextGenerateEffect words={subheadline} className="text-xl md:text-2xl text-primary-light" />
        )}

        {(cta1 || cta2) && (
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
          >
            {cta1 && (
              <Modal>
                <ModalTrigger className="w-full sm:w-auto px-0">
                  <ShinyButton variant="primary" className="w-full sm:w-auto">
                    <p className="text-secondary-foreground font-semibold">{cta1}</p>
                  </ShinyButton>
                </ModalTrigger>
                <ModalBody>
                  {/* Add your subscription form or content here */}
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Subscribe to Our Blog</h2>
                    {/* Add your subscription form components here */}
                  </div>
                </ModalBody>
              </Modal>
            )}
            {cta2 && (
              <Link href="#blog-posts" className="w-full sm:w-auto">
                <ShinyButton variant="secondary" className="w-full sm:w-auto">
                  <p className="text-secondary-foreground font-semibold">{cta2}</p>
                </ShinyButton>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}