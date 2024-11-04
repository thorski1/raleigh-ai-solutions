'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CalendarModal from '@/components/reusables/calendar-modal';
import { Modal, ModalBody, ModalTrigger } from '@/components/ui/animated-modal';
import MagicButton from '../magicui/magic-button';

interface CtaSectionProps {
  ctaTitle: string;
  ctaButton: string;
  className?: string;
  ctaDescription?: string;
}

export default function CtaSection({ ctaTitle, ctaButton, ctaDescription, className = '' }: CtaSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`relative z-10 pt-10 pb-20 overflow-visible ${className}`}>
      <div className="container mx-auto text-center overflow-visible">
        <motion.h2
          className="text-4xl font-bold text-primary-dark mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {ctaTitle}
        </motion.h2>
        {ctaDescription && <p className="text-primary-dark/70 mb-6">{ctaDescription}</p>}
        <Modal>
          <ModalTrigger className="px-4">
            <MagicButton className="w-full text-white font-medium">
              {ctaButton}
            </MagicButton>
          </ModalTrigger>
          <ModalBody>
            <CalendarModal />
          </ModalBody>
        </Modal>
      </div>
    </section>
  );
}
