import React from 'react';
import { motion } from 'framer-motion';

interface MagicButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({ children, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default MagicButton;
