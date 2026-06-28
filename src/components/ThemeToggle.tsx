import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-11 h-11 rounded-full cursor-pointer bg-white/70 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors border border-slate-200/60 dark:border-slate-700/60 shadow-sm backdrop-blur-md focus:outline-none"
      aria-label="Toggle Theme"
      aria-pressed={theme === 'dark'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0 : 1,
          opacity: theme === 'dark' ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        <Sun size={20} className="text-amber-500 fill-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : -180,
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        <Moon size={20} className="text-indigo-400 fill-indigo-400" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
