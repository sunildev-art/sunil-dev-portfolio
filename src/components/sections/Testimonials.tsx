import React from 'react';
import SectionHeader from '../SectionHeader';
import TestimonialCard from '../TestimonialCard';
import { testimonials } from '../../data/portfolioData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-band-alt py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
          badge="Reviews"
          title="Client Testimonials"
          description="Hear from tech directors, startup founders, and project leads I've worked with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
            <TestimonialCard
              key={test.id}
              testimonial={test}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
