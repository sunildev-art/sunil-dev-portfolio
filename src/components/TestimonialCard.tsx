import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
    >
      <div className="text-left">
        <div className="flex justify-between items-center mb-6">
          {/* Animated stars */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} className="text-amber-500 fill-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
            ))}
          </div>
          <Quote className="text-primary/15 dark:text-primary-light/10 w-10 h-10 group-hover:text-primary/30 dark:group-hover:text-primary-light/20 transition-colors duration-300" />
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8 font-normal">
          "{testimonial.content}"
        </p>
      </div>

      {/* Avatar details */}
      <div className="flex items-center space-x-4 border-t border-slate-200/50 dark:border-slate-800/80 pt-4 text-left">
        <div className="relative">
          {/* Glowing Ring around Avatar */}
          <div className="absolute inset-[-3px] rounded-full bg-gradient-to-tr from-primary to-secondary opacity-60 dark:opacity-40 blur-[1px]" />
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-900 relative z-10"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
            {testimonial.name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {testimonial.role} at <span className="font-semibold text-slate-700 dark:text-slate-300">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
