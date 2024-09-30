'use client';

import { useRef } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { FadeText } from '@/components/magicui/fade-text';

import FlickeringGrid from '../magicui/flickering-grid';
import SparklesText from '../magicui/sparkles-text';
import TypingAnimation from '../magicui/typing-animation';
import ShinyButton from '../magicui/shiny-button';

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  subheadline2,
  mainSubheadline,
  cta1,
  cta2,
}: {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  subheadline2?: string;
  mainSubheadline?: string;
  cta1?: string;
  cta2?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative  py-8 md:py-16 lg:py-20 pt-24 md:pt-24 lg:pt-28 flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary"
    >
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {eyebrow && <FadeText className="text-indigo-200 text-xl" text={eyebrow} />}

        <h1 ref={headlineRef} className="mb-6">
          <SparklesText
            text={headline}
            className="text-4xl md:text-5xl font-extrabold text-white"
            sparklesCount={4}
          />
        </h1>

        {subheadline || subheadline2 ? (
          <div>
            {subheadline && (
              <TypingAnimation text={subheadline} className="text-xl md:text-2xl text-indigo-200" />
            )}
            {subheadline2 && (
              <TypingAnimation text={subheadline2} className="text-xl md:text-2xl text-indigo-200" />
            )}
          </div>
        ) : null}

        {mainSubheadline && (
          <p className="text-lg md:text-xl text-indigo-100 max-w-5xl mx-auto">{mainSubheadline}</p>
        )}

        {cta1 || cta2 ? (
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
        >
          {cta1 && (
            <ShinyButton variant="primary" className="w-full sm:w-auto">
              <p className="text-secondary-foreground font-semibold">{cta1}</p>
            </ShinyButton>
          )}
          {cta2 && (
            <ShinyButton variant="secondary" className="w-full sm:w-auto">
              <p className="text-secondary-foreground font-semibold">{cta2}</p>
            </ShinyButton>
          )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
