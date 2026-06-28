import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200/60 dark:border-slate-800/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-1.5 font-display font-black text-xl md:text-2xl text-slate-900 dark:text-white group">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
            Sunil
          </span>
          <span className="text-slate-700 dark:text-slate-200">Bairwa</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/80 dark:bg-slate-900/45 border border-slate-200/60 dark:border-slate-800/50 p-1.5 rounded-full backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-full hover:text-primary dark:hover:text-primary-light ${
                  isActive ? 'text-primary dark:text-primary-light font-extrabold' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white dark:bg-slate-950 rounded-full border border-slate-200/50 dark:border-slate-800 -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="flex items-center space-x-1.5 text-xs font-extrabold tracking-widest uppercase bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-slate-950 px-6 py-3 rounded-full transition-all shadow-md hover:scale-[1.02] shrink-0"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-white/85 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-800/80 cursor-pointer shadow-sm backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-4 sm:px-6 py-6 max-h-[calc(100vh-5.5rem)] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`px-4 py-3.5 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="flex items-center justify-center space-x-1.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold py-4 rounded-2xl shadow-md mt-4 uppercase tracking-wider"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
