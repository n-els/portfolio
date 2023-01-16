import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="flex justify-center gap-4 mb-4">
      <a
        className="opacity-50 hover:opacity-100 transition-opacity duration-500"
        href="https://www.linkedin.com/in/nader-elsayed/"
        target="_blank"
      >
        <FaLinkedinIn size="1.5rem" />
      </a>
      <a
        className="opacity-50 hover:opacity-100 transition-opacity duration-500"
        href="http://github.com/n-els"
        target="_blank"
      >
        <BsGithub size="1.5rem" />
      </a>
    </footer>
  );
};

export default Footer;
