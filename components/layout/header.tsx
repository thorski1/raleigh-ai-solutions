'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/50 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isMenuOpen && (<div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="RaleighAI Logo" width={75} height={75} />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-background/50 rounded-md p-2 inline-flex items-center justify-center text-foreground hover:text-primary hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/about" className="text-base font-medium text-background hover:text-primary">
              About
            </Link>
            <Link
              href="/services"
              className="text-base font-medium text-background hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-background hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>)}
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed top-0 right-0 bottom-0 w-full md:hidden bg-foreground/50 backdrop-blur-md z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="pt-5 pb-6 px-5 bg-foreground/70 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <Image src="/logo.png" alt="RaleighAI Logo" width={75} height={75} />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <Link
                href="/about"
                className="text-base font-medium text-gray-300 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-gray-300 hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-300 hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
