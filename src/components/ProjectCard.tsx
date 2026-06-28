import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Smartphone, BookOpen, Check } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card group flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 items-stretch hover:shadow-primary/5 hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
    >
      {/* Visual / Image section */}
      <div className="relative w-full md:w-2/5 min-h-[220px] sm:min-h-[260px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/20 dark:border-slate-800/20 shrink-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Color gradients overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-350 group-hover:opacity-60" />
        
        {/* App Category Label */}
        <span className="absolute top-4 left-4 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-widest bg-slate-950/80 backdrop-blur-md text-white rounded-full border border-white/10 shadow-md">
          {project.category}
        </span>
      </div>

      {/* Info / details column */}
      <div className="flex flex-col justify-between flex-1 text-left">
        <div>
          {/* Header Title */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h3 className="font-display font-black text-2xl text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Features Checklist */}
          <div className="mb-6">
            <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              Key Features & Functions
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="p-0.5 rounded bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light mt-0.5 shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </span>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-bold bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200/50 dark:border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Button triggers */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary-light text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-primary/10 hover:scale-[1.02] w-full sm:w-auto"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider border border-slate-200/55 dark:border-slate-800 transition-all hover:scale-[1.02] w-full sm:w-auto"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] w-full sm:w-auto"
            >
              <Play size={12} className="fill-white" />
              <span>Play Store</span>
            </a>
          )}

          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] w-full sm:w-auto"
            >
              <Smartphone size={12} />
              <span>App Store</span>
            </a>
          )}

          <button
            onClick={() => alert(`Detailed Case Study is currently under compilation.`)}
            className="flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-800 w-full sm:w-auto"
          >
            <BookOpen size={14} />
            <span>Case Study</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
