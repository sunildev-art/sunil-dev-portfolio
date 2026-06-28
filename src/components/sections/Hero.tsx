import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { FaReact, FaJsSquare, FaNodeJs, FaEthereum, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % personalInfo.titles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center pt-28 md:pt-32 pb-16 overflow-hidden px-4 md:px-8"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Rich Typography & Pitch */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="self-start px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-primary/10 text-primary dark:bg-primary-light/15 dark:text-primary-light border border-primary/20 dark:border-primary-light/20 flex items-center space-x-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire & Projects</span>
          </motion.div>

          {/* Title Area */}
          <div className="space-y-3">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 font-display"
            >
              Creative Architect & Developer
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              Hi, I'm <br />
              <span className="text-gradient-neon dark:drop-shadow-[0_0_35px_rgba(99,102,241,0.2)]">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Rotating Subtitle with Neon Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-4xl font-extrabold tracking-tight min-h-[44px] sm:min-h-[55px] text-slate-700 dark:text-slate-200"
            >
              <span className="text-slate-400 dark:text-slate-500 mr-2 text-xl sm:text-2xl font-semibold">Specialist in</span>
              <motion.span
                key={personalInfo.titles[titleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="text-gradient inline-block"
              >
                {personalInfo.titles[titleIndex]}
              </motion.span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl space-y-4 leading-relaxed font-normal"
          >
            <p>
              I am a passionate <span className="font-semibold text-slate-900 dark:text-white">Full Stack Developer</span> with over <span className="text-primary dark:text-primary-light font-bold">4+ years</span> of professional experience crafting high-performance mobile and web solutions.
            </p>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              {personalInfo.blockchainExp}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-3"
          >
            <a
              href="#contact"
              className="glow-btn flex items-center justify-center space-x-2 text-sm sm:text-base font-bold shadow-primary/20 py-3.5 px-8 w-full sm:w-auto"
            >
              <span>Get In Touch</span>
              <Mail size={16} />
            </a>
            <button
              onClick={handleScrollToProjects}
              className="flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200/70 dark:border-slate-800 shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 max-w-xs"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-900 dark:hover:bg-primary-light dark:hover:text-slate-950 text-slate-500 dark:text-slate-400 transition-all border border-slate-200/50 dark:border-slate-800"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-900 dark:hover:bg-primary-light dark:hover:text-slate-950 text-slate-500 dark:text-slate-400 transition-all border border-slate-200/50 dark:border-slate-800"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-900 dark:hover:bg-primary-light dark:hover:text-slate-950 text-slate-500 dark:text-slate-400 transition-all border border-slate-200/50 dark:border-slate-800"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Mockup Editor / Interactive Visuals */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-4 sm:py-8 lg:py-0">
          
          {/* Main Visual Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-[min(20rem,84vw)] h-[min(20rem,84vw)] sm:w-96 sm:h-96 rounded-3xl flex items-center justify-center"
          >
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/15 to-accent/10 dark:from-primary/20 dark:via-secondary/10 dark:to-accent/5 rounded-full filter blur-[40px] animate-pulse-slow -z-10" />

            {/* Glowing Orb Ring */}
            <div className="absolute inset-[-15px] border border-dashed border-primary/20 dark:border-primary-light/10 rounded-full animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-[-30px] border border-dotted border-secondary/15 dark:border-secondary-light/5 rounded-full animate-[spin_80s_linear_infinite_reverse]" />

            {/* Developer Code Mockup Card */}
            <div className="w-full max-w-[340px] rounded-2xl glass border border-slate-200/50 dark:border-slate-800/80 shadow-2xl p-5 text-left relative z-10 overflow-hidden group">
              <div className="flex items-center justify-between mb-4 border-b border-slate-200/50 dark:border-slate-800/80 pb-3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 flex items-center space-x-1">
                  <Terminal size={10} />
                  <span>Developer.ts</span>
                </div>
              </div>

              <div className="font-mono text-xs sm:text-[13px] space-y-2 text-slate-700 dark:text-slate-300">
                <p className="text-purple-600 dark:text-purple-400"><span className="text-blue-600 dark:text-blue-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-amber-600 dark:text-amber-400">name</span>: <span className="text-green-600 dark:text-emerald-400">'Sunil Bairwa'</span>,</p>
                <p className="pl-4"><span className="text-amber-600 dark:text-amber-400">role</span>: <span className="text-green-600 dark:text-emerald-400">'Full Stack Lead'</span>,</p>
                <p className="pl-4"><span className="text-amber-600 dark:text-amber-400">experience</span>: <span className="text-rose-500 font-semibold">'4+ Years'</span>,</p>
                <p className="pl-4"><span className="text-amber-600 dark:text-amber-400">skills</span>: [</p>
                <p className="pl-8 text-sky-600 dark:text-sky-400">'React Native', 'React',</p>
                <p className="pl-8 text-sky-600 dark:text-sky-400">'Node.js', 'Web3.js'</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-amber-600 dark:text-amber-400">passion</span>: <span className="text-cyan-600 dark:text-cyan-400">'Pixel Perfect UI'</span></p>
                <p className="text-purple-600 dark:text-purple-400">&#125;;</p>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
            </div>

            {/* Orbiting Coding Badges */}
            {/* React */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 sm:-top-6 left-3 sm:left-6 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-lg border border-slate-200/50 dark:border-slate-800 text-sky-400 z-20 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaReact className="w-7 h-7 animate-[spin_12s_linear_infinite]" />
            </motion.div>

            {/* Javascript */}
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-2 sm:bottom-4 -right-2 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-lg border border-slate-200/50 dark:border-slate-800 text-yellow-500 z-20 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaJsSquare className="w-7 h-7" />
            </motion.div>

            {/* Node JS */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 sm:-bottom-6 left-10 sm:left-12 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-lg border border-slate-200/50 dark:border-slate-800 text-green-500 z-20 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaNodeJs className="w-7 h-7" />
            </motion.div>

            {/* Ethereum */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-14 sm:top-16 -right-5 sm:-right-6 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-lg border border-slate-200/50 dark:border-slate-800 text-indigo-400 z-20 hover:scale-110 transition-transform cursor-pointer"
            >
              <FaEthereum className="w-7 h-7" />
            </motion.div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
