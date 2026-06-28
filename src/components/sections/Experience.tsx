import React from 'react';
import SectionHeader from '../SectionHeader';
import Timeline from '../Timeline';
import { experiences } from '../../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-band py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
          badge="History"
          title="Work Experience"
          description="A practical timeline of my React Native, React, blockchain, wallet, and production app delivery experience."
        />

        <Timeline experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;
      
