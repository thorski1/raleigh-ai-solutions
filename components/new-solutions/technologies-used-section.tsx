'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import OrbitingCircles from '@/components/magicui/orbiting-circles';
import Image from 'next/image';

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
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(100); // Smaller radius for mobile
      } else {
        setRadius(200); // Default radius for desktop
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);

    return () => {
      window.removeEventListener('resize', updateRadius);
    };
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
        </motion.div>
        <div className="relative flex h-[300px] md:h-[500px] lg:h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
          <div className="py-8 z-10">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400 bg-clip-text text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent">
              {technologiesUsedTitle}
            </span>
          </div>
          {technologies.map((tech, index) => (
            <OrbitingCircles
              key={tech.name}
              className="size-[60px] sm:size-[100px] border-none bg-transparent flex flex-col items-center justify-center"
              radius={radius}
              duration={30}
              delay={index * 8}
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={80}
                height={80}
                className="rounded-full p-2"
              />
              <p className="text-primary-dark text-base font-semibold">{tech.name}</p>
            </OrbitingCircles>
          ))}
        </div>
      </div>
    </section>
  );
}
