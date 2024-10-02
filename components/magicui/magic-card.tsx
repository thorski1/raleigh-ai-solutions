'use client';

import React, { useCallback, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  neonFirstColor?: string;
  neonSecondColor?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = 'hsl(var(--primary))',
  gradientOpacity = 0.4,
  neonFirstColor = '#ff00aa',
  neonSecondColor = '#00FFF1',
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div className="group h-full">
      <div
        className="relative p-[2px] rounded-xl transition-all duration-300 ease-in-out group-hover:scale-105 h-full"
        style={{
          '--neon-first-color': neonFirstColor,
          '--neon-second-color': neonSecondColor,
        } as React.CSSProperties}
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'relative z-10 flex size-full h-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white',
            className
          )}
          {...props}
        >
          <div className="relative z-10 h-full">{children}</div>
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`
                radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
              `,
              opacity: gradientOpacity,
            }}
          />
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-first-color)] to-[var(--neon-second-color)] opacity-75 blur-xl transition-opacity duration-300 group-hover:opacity-100"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientShift 5s ease infinite',
          }}
        />
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-first-color)] to-[var(--neon-second-color)] opacity-0 group-hover:opacity-20"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientShift 5s ease infinite',
          }}
        />
      </div>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
