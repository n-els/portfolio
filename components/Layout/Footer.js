import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mt-auto mb-4 flex justify-between">
      <p>Copyright 2023</p>
      <div className="flex gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
