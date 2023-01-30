import React from 'react';
import NewestProjectSection from './NewestProjectSection';
import TechStackSection from './TechStackSection';

const InfoSection = () => {
  return (
    <section className="flex flex-col min-w-full sm:flex-row sm:justify-between my-20">
      <NewestProjectSection />
      <TechStackSection />
    </section>
  );
};

export default InfoSection;
