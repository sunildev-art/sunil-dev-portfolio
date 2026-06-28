import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/portfolioData';

type FilterCategory = 'all' | 'mobile' | 'blockchain';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="section-band-alt py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
          badge="Portfolio"
          title="Featured Projects"
          description="A selection of production-grade mobile and blockchain applications built from concept to launch."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12">
          {(['all', 'mobile', 'blockchain'] as FilterCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col space-y-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
