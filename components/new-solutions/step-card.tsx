'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MagicCard } from '@/components/magicui/magic-card';

interface StepCardProps {
  children: ReactNode;
  index: number;
  isInView: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ children, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
    >
      <MagicCard
        gradientSize={300}
        gradientColor="hsl(var(--primary))"
        gradientOpacity={0.15}
        neonFirstColor="#ffaa40"
        neonSecondColor="#9c40ff"
        className="h-full"
      >
        <div className="p-6 flex flex-col h-full">{children}</div>
      </MagicCard>
    </motion.div>
  );
};
