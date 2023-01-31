import React from 'react';
import NewestProjectSection from './NewestProjectSection';
import TechStackSection from './TechStackSection';

const InfoSection = () => {
  return (
    <section className="my-20 flex min-w-full flex-col sm:flex-row sm:justify-between">
      <NewestProjectSection />
      <TechStackSection />
    </section>
  );
};

export default InfoSection;
