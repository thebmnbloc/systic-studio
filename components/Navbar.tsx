'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const navLinks = [
  { id: '/', label: 'Home' },
  { id: '/our-services', label: 'Services' },
  { id: '/about', label: 'About' },
  { id: '/pricing', label: 'Pricing' },
  { id: '/testimonials', label: 'Testimonials' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Handle hydration mismatch
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
  if (theme === 'system') {
    // If system, check current effective theme
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemDark ? 'light' : 'dark');
  } else {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
};

  // Determine if dark mode is active
  const isDark = theme === 'dark';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Systic<span className="text-emerald-500">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.id}
              className={`text-sm font-medium transition-colors ${
                pathname === link.id
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <Link href="/contact">
            <Button className="text-sm py-2 px-5">
              Contact Us
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left text-lg font-medium py-2 ${
                    pathname === link.id
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-lg font-medium text-slate-700 dark:text-slate-200 py-2"
              >
                Contact
              </Link>
              <hr className="border-slate-100 dark:border-slate-800 my-2" />
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">Theme</span>
                {mounted && (
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}