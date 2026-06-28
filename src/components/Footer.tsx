import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-white/60 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800 py-12 md:py-16 transition-colors duration-300">
      
      {/* Decorative top border gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary/10 via-secondary/40 to-accent/10 dark:from-primary/5 dark:via-secondary/20 dark:to-accent/5" />

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {['home', 'about', 'skills', 'experience', 'projects', 'services', 'testimonials', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light cursor-pointer transition-colors"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 hover:text-primary hover:border-primary/20 dark:text-slate-300 dark:hover:text-primary-light transition-all duration-300 hover:scale-105"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 hover:text-primary hover:border-primary/20 dark:text-slate-300 dark:hover:text-primary-light transition-all duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 hover:text-primary hover:border-primary/20 dark:text-slate-300 dark:hover:text-primary-light transition-all duration-300 hover:scale-105"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright Text Details */}
        <p className="text-center text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-center text-xs md:text-sm text-slate-400 dark:text-slate-500 mt-3.5 flex items-center justify-center gap-1.5 font-semibold">
          <span>Made with</span>
          <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" />
          <span>using React + TypeScript + Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
