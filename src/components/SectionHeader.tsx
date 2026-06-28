import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, description, center = true }) => {
  return (
    <div className={`mb-16 md:mb-20 flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'}`}>
      
      {/* Badge Pill with soft glow */}
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/20 mb-4 shadow-sm"
      >
        {badge}
      </motion.span>
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-tight"
      >
        {title}
      </motion.h2>

      {/* Decorative gradient underline */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-1.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mt-4"
      />

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
