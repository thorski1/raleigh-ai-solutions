'use client';
import React, { useId, useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'framer-motion';

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  id,
  className,
  background = "#0d47a1",
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = "#ffffff",
  particleDensity = 120,
}: ParticlesProps) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const generatedId = useId();

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim();
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = async () => {
    controls.start({
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  };

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background,
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: particleDensity,
              },
              size: {
                value: { min: minSize, max: maxSize },
                animation: {
                  enable: true,
                  speed: speed,
                  startValue: "random",
                  destroy: "none",
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "out",
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
