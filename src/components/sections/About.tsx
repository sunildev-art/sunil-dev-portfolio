import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../SectionHeader';

const skillTags = [
  'React Native', 'React.js', 'Node.js', 'Express.js', 'TypeScript',
  'JavaScript', 'Redux Toolkit', 'Firebase', 'REST APIs', 'GraphQL',
  'WebSockets', 'Blockchain', 'Crypto Wallets', 'Payment Gateway',
  'Push Notifications', 'Maps', 'Authentication', 'CI/CD', 'Git',
  'App Store Deployment', 'Google Play Deployment'
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-band py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
          badge="About Me"
          title="My Professional Journey"
          description="A look into my background, core competencies, and development values."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 dark:text-white leading-snug">
                I build high-end cross-platform apps & modern web solutions from scratch.
              </h3>

              <div className="text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a Lead Developer with <span className="font-bold text-primary dark:text-primary-light">4+ years of professional experience</span> specializing in React Native, React, Node.js, and multi-chain blockchain integration.
                </p>
                <p>
                  I construct robust, secure systems with complex animations, deep-linking, high performance rendering, and automated store publication pipelines (CI/CD).
                </p>
              </div>
            </div>

            {/* Workflow / values list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200/50 dark:border-slate-800/80">
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/20 border border-slate-200/70 dark:border-slate-800/20">
                <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Google Play & Apple App Store publishing expert
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/20 border border-slate-200/70 dark:border-slate-800/20">
                <CheckCircle2 className="text-secondary w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  High-security non-custodial crypto wallet setups
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/20 border border-slate-200/70 dark:border-slate-800/20">
                <CheckCircle2 className="text-accent w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Collaborative agile development & clean architecture
                </span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/20 border border-slate-200/70 dark:border-slate-800/20">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  High-fidelity 60fps animations (GSAP & Framer)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Technical Expertise tags side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-6 md:p-8 flex flex-col justify-center text-left"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/20">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Technical Stack tags
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/50 transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white dark:hover:text-slate-950 hover:scale-[1.06] hover:shadow-md duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
