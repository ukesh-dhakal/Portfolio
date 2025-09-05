import React from 'react';
import type { JSX } from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMysql, SiFirebase, SiNextdotjs } from 'react-icons/si';

const techIcons: { [key: string]: JSX.Element } = {
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className=" rounded-lg shadow-xl p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-white  mb-3">{title}</h3>
      <p className="text-white mb-4 flex-grow leading-relaxed">{description}</p>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {technologies.map((tech, index) => (
          <div key={index} className="text-4xl" title={tech}>
            {techIcons[tech.toLowerCase()] || <span className="text-sm font-medium text-gray-500">{tech}</span>}
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-green-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 text-center text-lg"
          >
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-block bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 text-center text-lg ${!liveLink ? 'w-full' : ''}`}
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'HTML CSS and JS Live Code Editor',
      description: 'A live code editor built using Vanilla HTML, JavaScript, and Tailwind CSS, allowing real-time preview of web development code.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      githubLink: 'https://github.com/ukesh-dhakal/LivecodeEditor-For-HTML-CSS-and-JS',
      liveLink: 'https://ukesh-dhakal.github.io/LivecodeEditor-For-HTML-CSS-and-JS/'
    },
    {
      id: 2,
      title: 'Event Management System',
      description: 'A full-stack web application for event management, developed with React, Tailwind CSS, Node.js, and MongoDB.',
      technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/ukesh-dhakal/EDULearner',
      liveLink: ''
    },
    {
      id: 3,
      title: 'E-commerce Frontend',
      description: 'A modern e-commerce front-end application built for learning about and consuming RESTful APIs. This project focuses on building a responsive UI and managing data flow.',
      technologies: ['Next', 'Tailwind'],
      githubLink: 'https://github.com/ukesh-dhakal/E-com-Site',
      liveLink: 'https://e-com-site-six.vercel.app/'
    },
    {
      id: 4,
      title: 'E-commerce Site Made for a Hackathon',
      description: 'An e-commerce site developed for a hackathon using vanilla HTML, JavaScript, and MySQL.',
      technologies: ['HTML', 'JavaScript', 'MySQL'],
      githubLink: 'https://github.com/ukesh-dhakal/Saral-Hackathon',
      liveLink: 'https://ecomart-hackathon.netlify.app/'
    },
    {
      id: 5,
      title: 'Kathmandu Review (Work in progress)',
      description: 'A site made for addingg review and rate stuffs with admin panel for managing reviews and ratings. It is a work in progress and site is yet to be deployed',
      technologies: ['Next', 'Firebase'],
      liveLink: 'https://www.kathmandureview.com/'
    },
    {
      id: 6,
      title: 'Portfolio made for MP Gyanendra Shahi (Work in progress)',
      description: 'A site made for MP of Nepal Gyanendra Shahi with a backend in firebase and content management.It is a work in progress and site is yet to be deployed',
      technologies: ['Next', 'tailwind', 'Firebase'],
      liveLink: 'https://gyanendra-port-ukst.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl underline-offset-4 underline font-extrabold text-center text-white mb-12 sm:text-5xl tracking-wide">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
