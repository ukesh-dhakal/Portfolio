"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs } from 'react-icons/si';

const TechStackIcons = () => {
  const icons = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-400" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-8 p-6"
    >
      {icons.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={item}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="relative group flex flex-col items-center"
        >
          <div className="text-6xl md:text-7xl drop-shadow-lg filter hover:drop-shadow-2xl transition-all duration-300">
            {tech.icon}
          </div>
          {/* Glass Tooltip */}
          <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
            <span className="glass-dark px-3 py-1 rounded-lg text-sm font-bold text-white whitespace-nowrap border border-white/10">
              {tech.name}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStackIcons;