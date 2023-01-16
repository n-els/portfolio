import React from 'react';
import Image from 'next/image';

const NewestProject = ({ title, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="w-80 bg-slate-100 p-6 mt-6 rounded-lg hover:bg-slate-300 transition-colors duration-1000"
    >
      <Image src={image} width="300" height="200" />
      <h3 className="mt-2 font-medium tracking-wider text-lg">{title}</h3>
    </a>
  );
};

export default NewestProject;
