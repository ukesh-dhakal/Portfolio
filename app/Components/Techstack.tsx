// src/components/TechStackIcons.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs } from 'react-icons/si';

const TechStackIcons = () => {
  const icons = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> }, // Next.js icon is often white on dark backgrounds
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-400" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6  rounded-lg ">
      {icons.map((tech) => (
        <div key={tech.name} className="relative group flex flex-col items-center">
          <div className="text-6xl transition-transform duration-300 ease-in-out transform hover:scale-110">
            {tech.icon}
          </div>
          {/* Tooltip */}
          <span className="absolute bottom-[-2.5rem] w-auto p-2 min-w-max rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStackIcons;