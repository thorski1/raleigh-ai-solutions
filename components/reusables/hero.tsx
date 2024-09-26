'use client';

import { useRef } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam';
import { FadeText } from '@/components/magicui/fade-text';

import FlickeringGrid from '../magicui/flickering-grid';
import SparklesText from '../magicui/sparkles-text';
import TypingAnimation from '../magicui/typing-animation';
import ShinyButton from '../magicui/shiny-button';
import { AnimatedBeam } from '../magicui/animated-beam';
import Particles from '../magicui/particles';
import { RainbowButton } from '../magicui/rainbow-button';
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative py-8 md:py-16 lg:py-24 pt-32 md:pt-32 lg:pt-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-secondary-foreground to-primary"
    >
      <FlickeringGrid className="absolute inset-0 z-0 opacity-30" />
      <BorderBeam className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <FadeText className="text-indigo-200 text-xl" text="Welcome to Raleigh AI Solutions" />

        <h1 ref={headlineRef} className="mb-6">
          <SparklesText
            text="Revolutionize Your Business with AI"
            className="text-4xl md:text-7xl font-extrabold text-white"
            sparklesCount={4}
          />
        </h1>

        <div>
          <TypingAnimation
            text="Boost Productivity"
            className="text-xl md:text-2xl text-indigo-200"
          />
          <TypingAnimation
            text="Enhance Decision Making"
            className="text-xl md:text-2xl text-indigo-200"
          />
        </div>

        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
          Harness the power of cutting-edge AI solutions to transform your operations and drive
          unprecedented growth.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
        >
          <ShinyButton variant="primary" className="w-full sm:w-auto">
            <p className="text-secondary-foreground font-semibold">Get Started</p>
          </ShinyButton>
          <ShinyButton variant="secondary" className="w-full sm:w-auto">
            <p className="text-secondary-foreground font-semibold">Learn More</p>
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
