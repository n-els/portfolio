import React from 'react';
import PrimaryButton from './PrimaryButton';

const NewestProjectSection = () => {
  return (
    <section className="-z-10 min-w-full sm:w-1/2 sm:min-w-0">
      <div>
        <h4 className="mb-4 text-2xl font-bold tracking-wide">
          Aktuelles Projekt
        </h4>
      </div>
      <div className="">
        <img
          className="opacity-50 transition-all duration-300 hover:opacity-100"
          src="./images/screenshot-einkaufsgenie.png"
          alt="Einkaufsgenie"
        />
        <h5 className="mt-2 text-xl font-semibold">Einkaufsgenie</h5>
        <p>
          Eine Einkaufsliste, die dich beim Schnäppchenjagen in Supermärkten
          unterstützen soll. Funktioniert am besten mit dem Smartphone.
        </p>
        <div className="mt-8">
          <PrimaryButton
            url="http://einkaufsgenie.vercel.app"
            text="Live Demo"
            extern
          />
        </div>
      </div>
    </section>
  );
};

export default NewestProjectSection;
