"use client";
import React from 'react';
import { motion } from 'framer-motion';
import TechStackIcons from './Techstack';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl mb-12 text-center"
        >
          My <span className="text-gradient-blue">Skills</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full glass-dark rounded-3xl p-8 md:p-12 border border-white/5"
        >
          <TechStackIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;