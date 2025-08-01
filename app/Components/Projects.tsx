import React from 'react';
import type { JSX } from 'react';
// Import specific icons from the react-icons library.
// We are using icons from the 'Si' (Simple Icons) collection.
// Import SiFirebase here.
import { SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiMysql, SiFirebase ,SiNextdotjs} from 'react-icons/si';

/**
 * A mapping of technology names to their corresponding icon components.
 * This makes it easy to add or change icons later.
 */
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
    Nextjs: <SiNextdotjs className="text-white" />,
};

/**
 * ProjectCard component displays individual project details with technology icons.
 * It also includes hover effects and links for both GitHub and a live demo.
 */
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string; // Made optional
  liveLink?: string; // Made optional
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    // Card container with enhanced padding, shadow, rounded corners, and hover effects.
    <div className=" rounded-lg shadow-xl p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-white  mb-3">{title}</h3>
      <p className="text-white mb-4 flex-grow leading-relaxed">{description}</p>

      {/* Container for technology icons, with consistent spacing */}
      <div className="flex flex-wrap items-center gap-4 mb-6"> {/* Increased mb-5 to mb-6 */}
        {technologies.map((tech, index) => (
          <div key={index} className="text-4xl" title={tech}>
            {techIcons[tech.toLowerCase()] || <span className="text-sm font-medium text-gray-500">{tech}</span>}
          </div>
        ))}
      </div>

      {/* Buttons for GitHub and Live Demo, with flexible layout */}
      <div className="flex flex-col sm:flex-row gap-4 mt-auto"> {/* Changed to flex-col on small screens, flex-row on larger */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-green-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 text-center text-lg" // Increased padding and font size
          >
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-block bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 text-center text-lg ${!liveLink ? 'w-full' : ''}`} // Increased padding and font size
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
      id: 4,
      title: 'E-commerce Site Made for a Hackathon',
      description: 'An e-commerce site developed for a hackathon using vanilla HTML, JavaScript, and MySQL.',
      technologies: ['HTML', 'JavaScript', 'MySQL'],
      githubLink: 'https://github.com/ukesh-dhakal/Saral-Hackathon',
      liveLink: 'https://ecomart-hackathon.netlify.app/'
    },
    {
      id: 5,
      title: 'Kathmandu Review (Work in progrss)',
      description: 'A site made for addingg review and rate stuffs',
      technologies: ['Next', 'Firebase'], 
      liveLink: 'https://www.kathmandureview.com/'
    },
    {
      id: 6,
      title: 'Portfolio made for MP Gyanendra Shahi (Work in progrss)',
      description: 'A site made for MP of Nepal Gyanendra Shahi with a backend in firebase and content management.It is a work in progress and site is yet to be deployed',
      technologies: ['Next', 'tailwind', 'Firebase'], 
      liveLink: 'https://gyanendra-shahi-portfolio.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto my-20 px-4 sm:px-6 lg:px-8"> {/* Increased my-16 to my-20 for more vertical spacing */}
      <h2 className="text-4xl underline-offset-4 underline font-extrabold text-center text-white mb-12 sm:text-5xl tracking-wide"> {/* Added tracking-wide */}
        My Projects
      </h2>

      {/* Grid container for project cards, responsive layout */}
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
