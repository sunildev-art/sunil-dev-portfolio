import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../data/portfolioData';

const Stats: React.FC = () => {
  return (
    <section className="section-band-alt py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Blur blob behind stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 blur-[80px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-stretch text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-center min-h-[120px] space-y-2 p-5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:border-primary/30 dark:hover:border-primary-light/20 transition-all hover:scale-[1.03]"
            >
              {/* Animated Counter */}
              <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary dark:text-primary-light tracking-tight drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                {stat.value}
                {stat.suffix}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
