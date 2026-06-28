import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary text-white shadow-lg shadow-primary/20 cursor-pointer hover:shadow-xl transition-all duration-300 focus:outline-none hover:-translate-y-1"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} className="stroke-[3]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
