import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import type { Experience } from '../types';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative max-w-5xl mx-auto px-1 sm:px-4 py-8">
      {/* Centralized Timeline Axis */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-40 dark:opacity-25" />

      {/* Nodes list */}
      <div className="space-y-12">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-stretch ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Glowing Indicator Node */}
              <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-primary shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.28)] dark:shadow-[0_0_15px_rgba(var(--theme-primary-rgb),0.5)] transform -translate-x-1/2 z-10 flex items-center justify-center">
                <Briefcase size={10} className="text-primary" />
              </div>

              {/* Spacing alignment for layout grid */}
              <div className="hidden md:block w-1/2" />

              {/* Experience Info Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 45 : -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
              >
                <div className="glass-card p-6 md:p-8 relative hover:border-primary/40 dark:hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group text-left">
                  
                  {/* Decorative side accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Date Period Tag */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-light mb-3">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    {idx === 0 && (
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Role Title */}
                  <h3 className="font-display font-black text-xl md:text-2xl text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <h4 className="font-bold text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {exp.company}
                  </h4>

                  {/* Description text */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed italic border-l-2 border-slate-200 dark:border-slate-800 pl-3">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <ChevronRight size={14} className="text-secondary mt-1 shrink-0 mr-1.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
