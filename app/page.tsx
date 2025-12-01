"use client";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { ContactUs } from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Dock from "@/Reactbits/Dock/Dock";
import { VscHome, VscBriefcase, VscProject, VscTools, VscMail, VscFilePdf } from "react-icons/vsc";
import { BlurFade } from "@/components/magicui/blur-fade";

const iconProps = { size: 22, color: "#fff" };

const items = [
  { icon: <VscHome {...iconProps} />, label: 'Home', onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscBriefcase {...iconProps} />, label: 'Services', onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscProject {...iconProps} />, label: 'Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscTools {...iconProps} />, label: 'Skills', onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscMail {...iconProps} />, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { icon: <VscFilePdf {...iconProps} />, label: 'Resume', onClick: () => window.open('https://drive.google.com/file/d/1Zc3pPql1UDJbWZnJ0EPlxm3uJfL-TEbH/view?usp=sharing', '_blank') },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dock for desktop viewports */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50">
        <Dock
          items={items}
          panelHeight={420}
          baseItemSize={50}
          magnification={70}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 w-full">
        <section id="hero">
          <BlurFade delay={0.25}>
            <Hero />
          </BlurFade>
        </section>

        <section id="services">
          <BlurFade delay={0.25} inView>
            <Services />
          </BlurFade>
        </section>

        <section id="projects">
          <BlurFade delay={0.25} inView>
            <Projects />
          </BlurFade>
        </section>

        <section id="skills">
          <BlurFade delay={0.25} inView>
            <Skills />
          </BlurFade>
        </section>

        <section id="contact">
          <BlurFade delay={0.25} inView>
            <ContactUs />
          </BlurFade>
        </section>

        <Footer />
      </div>
    </div>
  );
}
