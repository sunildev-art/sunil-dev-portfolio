import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaNodeJs,
  FaAws,
  FaAndroid,
  FaApple,
  FaBell,
  FaMapMarkedAlt,
  FaLink,
  FaEthereum,
  FaWallet,
  FaFileContract,
} from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGithubactions,
  SiWalletconnect,
  SiFramer,
  SiGreensock,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { MdOutlineSpeed } from 'react-icons/md';
import type { SkillCategory } from '../types';

interface SkillsCardProps {
  skillGroup: SkillCategory;
  index: number;
}

// Icon mapper helper with custom styling
const renderIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 transition-transform duration-350 group-hover:scale-115' };
  switch (iconName) {
    case 'FaReact': return <FaReact {...props} className={`${props.className} text-sky-400`} />;
    case 'TbBrandReactNative': return <TbBrandReactNative {...props} className={`${props.className} text-cyan-400`} />;
    case 'SiTypescript': return <SiTypescript {...props} className={`${props.className} text-blue-500`} />;
    case 'FaJsSquare': return <FaJsSquare {...props} className={`${props.className} text-yellow-400`} />;
    case 'SiRedux': return <SiRedux {...props} className={`${props.className} text-purple-500`} />;
    case 'FaCode': return <FaCode {...props} className={`${props.className} text-indigo-400`} />;
    case 'FaHtml5': return <FaHtml5 {...props} className={`${props.className} text-orange-500`} />;
    case 'FaCss3Alt': return <FaCss3Alt {...props} className={`${props.className} text-blue-400`} />;
    case 'SiTailwindcss': return <SiTailwindcss {...props} className={`${props.className} text-teal-500`} />;
    case 'SiMaterialui': return <SiMui {...props} className={`${props.className} text-blue-500`} />;
    case 'FaNodeJs': return <FaNodeJs {...props} className={`${props.className} text-green-500`} />;
    case 'SiExpress': return <SiExpress {...props} className={`${props.className} text-slate-400 dark:text-slate-200`} />;
    case 'SiMongodb': return <SiMongodb {...props} className={`${props.className} text-emerald-500`} />;
    case 'SiFirebase': return <SiFirebase {...props} className={`${props.className} text-amber-500`} />;
    case 'AiOutlineApi': return <AiOutlineApi {...props} className={`${props.className} text-rose-500`} />;
    case 'FaAws': return <FaAws {...props} className={`${props.className} text-orange-400`} />;
    case 'SiGithubactions': return <SiGithubactions {...props} className={`${props.className} text-blue-400`} />;
    case 'FaAndroid': return <FaAndroid {...props} className={`${props.className} text-lime-500`} />;
    case 'FaApple': return <FaApple {...props} className={`${props.className} text-zinc-400 dark:text-zinc-200`} />;
    case 'FaBell': return <FaBell {...props} className={`${props.className} text-yellow-500`} />;
    case 'FaMapMarkedAlt': return <FaMapMarkedAlt {...props} className={`${props.className} text-emerald-500`} />;
    case 'FaLink': return <FaLink {...props} className={`${props.className} text-purple-400`} />;
    case 'MdOutlineSpeed': return <MdOutlineSpeed {...props} className={`${props.className} text-amber-400`} />;
    case 'FaEthereum': return <FaEthereum {...props} className={`${props.className} text-indigo-400`} />;
    case 'FaWallet': return <FaWallet {...props} className={`${props.className} text-yellow-600`} />;
    case 'SiWalletconnect': return <SiWalletconnect {...props} className={`${props.className} text-sky-500`} />;
    case 'FaFileContract': return <FaFileContract {...props} className={`${props.className} text-teal-500`} />;
    case 'SiMetamask': return <FaWallet {...props} className={`${props.className} text-orange-500`} />;
    case 'SiFramer': return <SiFramer {...props} className={`${props.className} text-pink-500`} />;
    case 'SiGreenock': return <SiGreensock {...props} className={`${props.className} text-emerald-400`} />;
    default: return <FaCode {...props} className={`${props.className} text-slate-400`} />;
  }
};

const SkillsCard: React.FC<SkillsCardProps> = ({ skillGroup, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 hover:border-primary/20 hover:shadow-primary/10 hover:shadow-xl group"
    >
      <h3 className="font-display font-extrabold text-xl md:text-2xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent border-b border-slate-200/50 dark:border-slate-800/80 pb-3 text-left">
        {skillGroup.category}
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {skillGroup.items.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="group flex items-center space-x-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/30 border border-slate-200/70 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-300 hover:scale-[1.03] cursor-pointer hover:shadow-sm min-w-0"
          >
            {/* Glowing Icon Container */}
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/20 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-slate-950 transition-colors shadow-sm flex items-center justify-center shrink-0">
              {renderIcon(item.iconName)}
            </div>
            <span className="min-w-0 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-left leading-snug break-words">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
