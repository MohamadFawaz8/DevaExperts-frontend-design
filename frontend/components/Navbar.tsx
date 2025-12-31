'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSessionsOpen, setIsSessionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSessionsOpen, setIsMobileSessionsOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSessionsOpen(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="flex items-center py-2">
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <div className="relative w-36 h-12 sm:w-44 sm:h-14 md:w-56 md:h-16">
                  <Image 
                    src="/logo.jpeg" 
                    alt="DevaExperts MENTORING Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                About Us
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsSessionsOpen(!isSessionsOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center"
                >
                  Sessions
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${isSessionsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isSessionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/sessions/ml-ai"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsSessionsOpen(false)}
                    >
                      ML/AI Sessions
                    </Link>
                    <Link
                      href="/sessions/frontend-backend"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsSessionsOpen(false)}
                    >
                      Frontend/Backend Sessions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/reservation"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
              >
                Reservation
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
              >
                Sign Up
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl overflow-y-auto">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setIsMobileSessionsOpen(!isMobileSessionsOpen)}
                className="w-full px-4 py-3 rounded-lg text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center justify-between"
              >
                <span>Sessions</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isMobileSessionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileSessionsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pt-2 space-y-2">
                  <Link
                    href="/sessions/ml-ai"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    ML/AI Sessions
                  </Link>
                  <Link
                    href="/sessions/frontend-backend"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Frontend/Backend Sessions
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/reservation"
              onClick={closeMobileMenu}
              className="block px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-center transition-colors font-medium"
            >
              Reservation
            </Link>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-center"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-center transition-colors font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

