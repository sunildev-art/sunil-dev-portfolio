import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Layout, Database, Layers, CloudLightning } from 'lucide-react';
import SectionHeader from '../SectionHeader';
import { services } from '../../data/portfolioData';

// Map iconName strings to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Cpu,
  Layout,
  Database,
  Layers,
  CloudLightning,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-band py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
          badge="What I Do"
          title="Professional Services"
          description="Premium digital engineering tailored to bring your mobile and full-stack ideas to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Cpu;
            const indexString = `0${idx + 1}`;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 flex flex-col items-start text-left border border-slate-200/50 dark:border-slate-800/50 hover:shadow-primary/5 hover:shadow-2xl transition-all duration-300 hover:border-primary/30 dark:hover:border-primary-light/20 group relative"
              >
                {/* Index marker code */}
                <span className="absolute top-6 right-8 font-display font-black text-3xl text-slate-200/60 dark:text-slate-800/40 select-none">
                  {indexString}
                </span>

                {/* Glowing Icon Wrapper */}
                <div className="p-4 rounded-2xl bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light mb-6 border border-primary/20 dark:border-primary-light/20 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                  {srv.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {srv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
