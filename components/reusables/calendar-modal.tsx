import React from 'react';
import { ModalContent } from '../ui/animated-modal';
import CalendarSection from './calendar-section';

const CalendarModal: React.FC = () => {
  return (
    <ModalContent className="w-full max-w-4xl bg-primary-light">
        <h2 className="text-2xl font-bold mb-4 text-slate-600">Schedule a Free Consultation</h2>
        <CalendarSection />
    </ModalContent>
  );
};

export default CalendarModal;