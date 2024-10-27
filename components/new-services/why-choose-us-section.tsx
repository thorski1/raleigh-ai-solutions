'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { MagicCard } from '@/components/magicui/magic-card';
import BlurFade from '@/components/magicui/blur-fade';

interface WhyChooseUsSectionProps {
  whyChooseUs: string;
}

export default function WhyChooseUsSection({ whyChooseUs }: WhyChooseUsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      quote: "Their expertise in AI and cloud technologies is unmatched.",
      name: "John Doe",
      title: "CTO, Tech Innovators Inc."
    },
    {
      quote: "The training programs were tailored perfectly to our needs.",
      name: "Jane Smith",
      title: "Head of IT, Global Solutions Ltd."
    },
    {
      quote: "We saw immediate improvements in our team's productivity.",
      name: "Alex Johnson",
      title: "Director of Operations, Future Systems"
    },
  ];

  return (
    <section ref={ref} className="relative z-10 py-10 overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4">
            Why Choose Us
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <MagicCard className="w-full h-full">
            <CardContent className="p-6 md:p-10">
              <BlurFade delay={0.2} duration={0.8}>
                <p className="text-base xl:text-lg text-secondary-dark font-light leading-relaxed">
                  {whyChooseUs}
                </p>
              </BlurFade>
            </CardContent>
          </MagicCard>
          <div className="w-full overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
