import React from 'react';
import PrimaryButton from './PrimaryButton';

const NewestProjectSection = () => {
  return (
    <section className="min-w-full sm:min-w-0 sm:w-1/2">
      <div>
        <h4 className="font-bold text-2xl tracking-wide mb-4">
          Aktuelles Projekt
        </h4>
      </div>
      <div className="">
        <img
          className="opacity-50 hover:opacity-100 transition-all duration-300"
          src="./images/screenshot-einkaufsgenie.png"
          alt="Einkaufsgenie"
        />
        <h5 className="text-xl mt-2 font-semibold">Einkaufsgenie</h5>
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
