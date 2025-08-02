"use client";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { ContactUs } from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Dock from "@/Reactbits/Dock/Dock";
import { VscHome, VscAccount, VscProject, VscTools, VscMail, VscFilePdf } from "react-icons/vsc";

const iconProps = { size: 22, color: "#fff" };

const items = [
  { icon: <VscHome {...iconProps} />, label: 'Home', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscAccount {...iconProps} />, label: 'About', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscProject {...iconProps} />, label: 'Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscTools {...iconProps} />, label: 'Skills', onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscMail {...iconProps} />, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscFilePdf {...iconProps} />, label: 'Resume', onClick: () => window.open('https://drive.google.com/file/d/1Zc3pPql1UDJbWZnJ0EPlxm3uJfL-TEbH/view?usp=sharing', '_blank') },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black overflow-hidden">
      {/* Sticky left Dock */}
      <div className="sticky top-0 h-screen flex items-center z-50">
        <Dock 
          items={items}
          panelHeight={420}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      {/* Main content */}
      <div className="flex-1">
        <section id="hero">
          <Hero/>
        </section>
        <section id="about">
          <AboutMe/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="contact">
          <ContactUs/>
        </section>
        <Footer/>
      </div>
    </div>
  );
}
