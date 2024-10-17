'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/about-us', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="px-4 lg:px-6 h-auto flex items-center absolute top-0 left-0 right-0 z-50 bg-gradient-to-br from-secondary-foreground/20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image src="/logo-white.png" alt="Raleigh AI Solutions" width={75} height={75} />
          <span className="sr-only">Raleigh AI Solutions</span>
        </Link>
      </motion.div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild className="ml-auto lg:hidden">
          <motion.button
            className="text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </motion.button>
        </Dialog.Trigger>

        <AnimatePresence>
          {isOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-50"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-gradient-to-br from-primary-dark via-secondary-dark to-secondary-light p-6 shadow-lg focus:outline-none z-50 overflow-auto"
                >
                  <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <Image src="/logo.png" alt="Raleigh AI Solutions" width={150} height={150} />
                      <span className="sr-only">Raleigh AI Solutions</span>
                    </Link>
                    <Dialog.Close asChild>
                      <button className="text-primary-foreground self-start">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </button>
                    </Dialog.Close>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-lg font-medium text-primary-foreground"
                        onClick={() => setIsOpen(false)}
                        prefetch={false}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>

      <nav className="ml-auto hidden lg:flex gap-6">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
              prefetch={false}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
};

function PawPrintIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}

export default Header;
