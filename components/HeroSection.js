import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="mt-12 sm:mt-24">
      <div className="flex w-full flex-col-reverse items-center sm:mt-12 md:flex-row md:justify-between">
        <div>
          <p className="mt-12 text-xl">Moin,</p>
          <h2 className="text-2xl font-medium tracking-wider  sm:text-4xl">
            Ich bin <span className="font-extrabold">Nader el Sayed</span>
          </h2>
          <p className="text-xl sm:my-2 sm:text-2xl sm:tracking-widest">
            Webentwickler aus dem Norden
          </p>
          <p className="mt-6 max-w-sm">
            Ich liebe es Ideen für's Web unter Berücksichtigung der
            Responsiveness und Benutzerfreundlichkeit umzusetzen.
          </p>
          <div className="mt-8 flex items-center gap-8">
            <a
              href="mailto:nader.elsayed@aol.de"
              className="border-2 border-black p-2 transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Lass' quatschen!
            </a>
            <div className="flex gap-4">
              <a
                className="opacity-100 transition-opacity duration-500 hover:opacity-50"
                href="https://www.linkedin.com/in/nader-elsayed/"
                target="_blank"
              >
                <FaLinkedinIn size="1.4rem" />
              </a>
              <a
                className="opacity-100 transition-opacity duration-500 hover:opacity-50"
                href="http://github.com/n-els"
                target="_blank"
              >
                <BsGithub size="1.4rem" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/potrait-bw.png"
            width="250"
            height="250"
            alt="Potraitfoto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
