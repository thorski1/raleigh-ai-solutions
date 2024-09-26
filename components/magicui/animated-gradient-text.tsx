'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function AnimatedGradientText({
  children,
  className,
  colorOne = '#ffaa40',
  colorTwo = '#9c40ff',
}: {
  children: ReactNode;
  className?: string;
  colorOne?: string;
  colorTwo?: string;
}) {
  return (
    <div
      className={cn(
        'relative mx-auto flex max-w-fit flex-row items-center justify-center text-4xl font-bold',
        className,
      )}
    >
      <span
        className={cn(
          'animate-gradient bg-clip-text text-transparent',
          `bg-gradient-to-r from-[${colorOne}] via-[${colorTwo}] to-[${colorOne}]`
        )}
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease infinite',
        }}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
