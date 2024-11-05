'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { cn } from '@/lib/utils';
import { useOutsideClick } from '@/hooks/use-outside-click';

interface Step {
  title: string;
  description: string;
  content: string;
}

interface StepsSectionProps {
  stepsTitle: string;
  stepsDescription: string;
  steps: Step[];
}

export default function StepsSection({
  stepsTitle,
  stepsDescription,
  steps,
}: StepsSectionProps) {
  const [activeStep, setActiveStep] = useState<Step | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useOutsideClick(ref, () => setActiveStep(null));

  return (
    <section ref={ref} className="relative z-10 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-600 mb-4">
            {stepsTitle}
          </h2>
          <TextGenerateEffect
            words={stepsDescription}
            className="text-lg text-slate-600/80 max-w-4xl mx-auto"
          />
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr justify-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onClick={() => setActiveStep(step)}
              className="w-full max-w-sm"
            >
              <Card className={cn(
                "h-full overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col",
                index % 3 === 0 && "border-primary/50 hover:border-primary",
                index % 3 === 1 && "border-secondary/50 hover:border-secondary",
                index % 3 === 2 && "border-accent/50 hover:border-accent",
              )}>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={cn(
                      "w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold mr-4",
                      index % 3 === 0 && "bg-primary",
                      index % 3 === 1 && "bg-secondary",
                      index % 3 === 2 && "bg-accent",
                    )}>
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-600">{step.title}</h3>
                  </div>
                  <p className="text-slate-600/80 flex-grow">{step.description.slice(0, 100)}...</p>
                  <button className="text-primary font-semibold hover:underline self-start">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setActiveStep(null)}
          >
            <motion.div
              layoutId={`card-${steps.indexOf(activeStep)}`}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg max-w-lg w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-2 text-secondary-dark dark:text-secondary-light">
                {activeStep.title}
              </h3>
              <p className="text-secondary-dark/80 dark:text-secondary-light/80 mb-4">
                {activeStep.description}
              </p>
              <button
                className="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                onClick={() => setActiveStep(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
