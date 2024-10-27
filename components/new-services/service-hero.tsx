'use client';

import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import MagicButton from '@/components/magicui/magic-button';
import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';
import CalendarModal from '@/components/reusables/calendar-modal';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  ctaButton: string;
}

export default function ServiceHero({ title, subtitle, ctaButton }: ServiceHeroProps) {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-dark">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full opacity-50"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          <Modal>
            <ModalTrigger className="w-full sm:w-auto px-4">
              <MagicButton className="w-full sm:w-auto text-white">
                <p className="text-white font-medium">{ctaButton}</p>
              </MagicButton>
            </ModalTrigger>
            <ModalBody>
              <CalendarModal />
            </ModalBody>
          </Modal>
        </motion.div>
      </div>
    </div>
  );
}
