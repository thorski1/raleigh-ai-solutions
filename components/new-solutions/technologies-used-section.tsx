'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { MagicCard } from '@/components/magicui/magic-card';

interface Technology {
  name: string;
  icon: string;
}

interface TechnologiesUsedSectionProps {
  technologiesUsedTitle: string;
  technologies: Technology[];
}

export default function TechnologiesUsedSection({
  technologiesUsedTitle,
  technologies,
}: TechnologiesUsedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative z-10 py-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent py-2">
            {technologiesUsedTitle}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {technologies.map((tech) => (
              <MagicCard
                key={tech.name}
                className="w-32 h-32 flex flex-col items-center justify-center p-4"
                gradientSize={100}
                gradientColor="hsl(var(--accent))"
                neonFirstColor="hsl(var(--accent))"
                neonSecondColor="hsl(var(--primary))"
              >
                <div className="w-16 h-16 relative mb-2">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-primary-dark text-sm font-semibold text-center">
                  {tech.name}
                </p>
              </MagicCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
