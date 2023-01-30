import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
} from 'react-icons/si';

const TechStackSection = () => {
  return (
    <section className="min-w-full sm:min-w-0 sm:w-1/2 mt-12 sm:mt-0">
      <div>
        <h4 className="text-right font-bold text-2xl tracking-wide mb-4">
          Ich nutze..
        </h4>
      </div>
      <div className="p-4 grid grid-cols-4 sm:grid-cols-6 gap-y-8 sm:gap-0 place-items-center sm:h-1/2">
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <AiFillHtml5 size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <FaCss3Alt size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <IoLogoJavascript size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <FaReact size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <FaNode size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <SiTailwindcss size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <SiNextdotjs size="2rem" />
        </div>

        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <SiMongodb size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <SiExpress size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <SiPostman size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <AiFillGithub size="2rem" />
        </div>
        <div className="scale-90 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-500">
          <SiVisualstudiocode size="2rem" />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
