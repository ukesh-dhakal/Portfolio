"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMysql, SiFirebase, SiNextdotjs } from 'react-icons/si';

const techIcons: { [key: string]: React.ReactNode } = {
  react: <SiReact className="text-cyan-400" />,
  nodejs: <SiNodedotjs className="text-green-500" />,
  mongodb: <SiMongodb className="text-green-600" />,
  html: <SiHtml5 className="text-orange-500" />,
  css: <SiCss3 className="text-blue-500" />,
  javascript: <SiJavascript className="text-yellow-400" />,
  tailwind: <SiTailwindcss className="text-cyan-500" />,
  mysql: <SiMysql className="text-blue-600" />,
  firebase: <SiFirebase className="text-yellow-500" />,
  next: <SiNextdotjs className="text-white" />,
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, liveLink, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-dark rounded-2xl p-8 flex flex-col justify-between group hover:border-white/30 transition-all duration-300"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {technologies.map((tech, i) => (
            <div key={i} className="text-3xl hover:scale-110 transition-transform" title={tech}>
              {techIcons[tech.toLowerCase()] || <span className="text-sm font-medium text-gray-500">{tech}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold text-center hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3 px-4 rounded-xl bg-white/10 text-white font-semibold text-center hover:bg-white/20 transition-all duration-300 ${!liveLink ? 'w-full' : ''}`}
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    
    {
      id:1,
      title: 'Event Management System',
      description: 'A full-stack web application for event management, developed with React, Tailwind CSS, Node.js, and MongoDB.',
      technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/ukesh-dhakal/EDULearner',
      liveLink: ''
    },
    {
      id: 2,
      title: 'E-commerce Frontend',
      description: 'A modern e-commerce front-end application built for learning about and consuming RESTful APIs.',
      technologies: ['Next', 'Tailwind'],
      githubLink: 'https://github.com/ukesh-dhakal/E-com-Site',
      liveLink: 'https://e-com-site-six.vercel.app/'
    },
    {
      id: 3,
      title: 'Ecomart-Ecommerce Store',
      description: 'An e-commerce site developed for a hackathon using vanilla HTML, JavaScript, and MySQL.',
      technologies: ['HTML', 'JavaScript', 'MySQL'],
      githubLink: 'https://github.com/ukesh-dhakal/Saral-Hackathon',
      liveLink: 'https://ecomart-hackathon.netlify.app/'
    },
    {
      id: 4,
      title: 'Kathmandu Review',
      description: 'A site made for adding reviews and ratings with an admin panel. (Work in progress)',
      technologies: ['Next', 'Firebase'],
      liveLink: 'https://www.kathmandureview.com/'
    },
    {
      id: 5,
      title: 'MP Gyanendra Shahi Portfolio',
      description: 'A portfolio site with a Firebase backend and content management. (Work in progress)',
      technologies: ['Next', 'Tailwind', 'Firebase'],
      liveLink: 'https://gyanendra-port-ukst.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
