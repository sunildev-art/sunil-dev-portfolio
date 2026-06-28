import React from 'react';
import SectionHeader from '../SectionHeader';
import SkillsCard from '../SkillsCard';
import { skills } from '../../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-band-alt py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
          badge="My Skills"
          title="What I Bring to the Table"
          description="A curated overview of languages, frameworks, blockchain tooling, and deployment pipelines I use."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-start">
          {skills.map((skillGroup, index) => (
            <SkillsCard
              key={skillGroup.category}
              skillGroup={skillGroup}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
