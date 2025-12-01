"use client";
import React from "react";
import DarkVeil from "@/Reactbits/DarkVeil/DarkVeil";
import { HyperText } from "@/components/magicui/hyper-text";
import SpotifyNowPlaying from "./Spotify";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaDiscord, FaGithub, FaSpotify, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { icon: <FaInstagram size={24} />, href: "https://instagram.com/why.is.ukesh", color: "hover:text-pink-500", label: "Instagram" },
    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/ukesh-dhakal/", color: "hover:text-blue-600", label: "LinkedIn" },
    { icon: <FaDiscord size={24} />, href: "https://discord.gg/ut2GSDwx", color: "hover:text-indigo-500", label: "Discord" },
    { icon: <FaEnvelope size={24} />, href: "mailto:dhakalukesh890@proton.me", color: "hover:text-red-500", label: "Email" },
    { icon: <FaGithub size={24} />, href: "https://github.com/ukesh-dhakal", color: "hover:text-gray-400", label: "GitHub" },
    { icon: <FaSpotify size={24} />, href: "https://open.spotify.com/user/317dtavgsxwwm5jvkviexkhityay", color: "hover:text-green-500", label: "Spotify" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white" id="hero">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60">
        <DarkVeil />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20 max-w-7xl mx-auto">

        {/* Main Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2"
        >
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
            <span className="text-gradient">Ukesh</span> <br />
            <span className="text-white">Dhakal</span>
          </h1>
        </motion.div>

        {/* Subtitle / Role */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6"
        >
          <HyperText className="text-2xl md:text-4xl font-light text-gray-300" duration={800}>
            Freelance Full-Stack Developer
          </HyperText>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Helping businesses and startups build high-performance web applications. Available for freelance projects and long-term collaboration.
        </motion.p>

        {/* Social Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`glass-dark p-4 rounded-full transition-all duration-300 hover:scale-110 ${link.color} border border-white/10 hover:border-white/30`}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-6"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Let's Connect</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1Zc3pPql1UDJbWZnJ0EPlxm3uJfL-TEbH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 glass-dark border border-white/10 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-white/10 hover:scale-105"
          >
            <span>Download Resume</span>
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </a>
        </motion.div>

        {/* Spotify Floating Pill */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 right-6 md:right-10 hidden lg:block"
        >
          <div className="glass-dark p-4 rounded-2xl flex items-center gap-4 max-w-xs border border-white/10 hover:border-green-500/50 transition-colors">
            <div className="p-2 bg-green-500/20 rounded-full text-green-500 animate-pulse">
              <FaSpotify size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Now Listening</p>
              <div className="truncate">
                <SpotifyNowPlaying />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
