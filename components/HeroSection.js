import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="mt-12 sm:mt-24">
      <div className="sm:mt-12 flex flex-col-reverse items-center md:flex-row md:justify-between w-full">
        <div>
          <p className="text-xl mt-12">Moin,</p>
          <h2 className="text-2xl font-medium sm:text-4xl  tracking-wider">
            Ich bin <span className="font-extrabold">Nader el Sayed</span>
          </h2>
          <p className="text-xl sm:text-2xl sm:my-2 sm:tracking-widest">
            Webentwickler aus dem Norden
          </p>
          <p className="mt-6 max-w-sm">
            Ich liebe es Ideen für's Web unter Berücksichtigung der
            Responsiveness und Benutzerfreundlichkeit umzusetzen.
          </p>
          <div className="flex mt-8 items-center gap-8">
            <a
              href="mailto:nader.elsayed@aol.de"
              className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              Lass' quatschen!
            </a>
            <div className="flex gap-4">
              <a
                className="opacity-100 hover:opacity-50 transition-opacity duration-500"
                href="https://www.linkedin.com/in/nader-elsayed/"
                target="_blank"
              >
                <FaLinkedinIn size="1.4rem" />
              </a>
              <a
                className="opacity-100 hover:opacity-50 transition-opacity duration-500"
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
