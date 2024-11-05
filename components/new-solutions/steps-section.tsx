'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { StepCard } from './step-card';

interface Step {
  title: string;
  description: string;
}

interface StepsSectionProps {
  stepsTitle: string;
  steps: Step[];
}

export default function StepsSection({ stepsTitle, steps }: StepsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative z-10 py-10">
      <div className="container mx-auto">
        <h2>
          <TextGenerateEffect
            words={stepsTitle}
            color="text-slate-600"
            className="text-4xl font-bold text-center text-slate-600 mb-12"
          />
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} index={index} isInView={isInView}>
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-600">{step.title}</h3>
                </div>
                <p className="text-slate-700 flex-grow">{step.description}</p>
              </div>
            </StepCard>
          ))}
        </div>
      </div>
    </section>
  );
}
