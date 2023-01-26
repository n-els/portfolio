import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu
          className={`${
            isOpen
              ? 'rotate-90 transition-all duration-500'
              : 'rotate-0 transition-all duration-500'
          }`}
        />
      </div>

      <ul
        className={`flex flex-col items-center ${
          isOpen ? 'h-full' : 'h-0'
        } absolute top-14 left-0 bg-black text-white transition-all duration-500 overflow-hidden w-full`}
      >
        <li className="mt-8 mb-4 w-8/12 border-white text-center">
          <a href="/" className="text-2xl font-semibold">
            Start
          </a>
        </li>
        <li className="my-4 w-8/12 border-white text-center">
          <a href="/" className="text-2xl font-semibold">
            Projekte
          </a>
        </li>
        <li className="my-4 w-8/12 border-white text-center">
          <a href="/" className="text-2xl font-semibold">
            Fotos
          </a>
        </li>
        <li className="my-4 w-8/12 border-white text-center">
          <a href="/" className="text-2xl font-semibold">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
