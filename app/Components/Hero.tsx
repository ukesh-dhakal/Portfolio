import React from "react";
import DarkVeil from "@/Reactbits/DarkVeil/DarkVeil";
import { HyperText } from "@/components/magicui/hyper-text";
import { FaInstagram, FaLinkedin, FaDiscord, FaEnvelope, FaGithub, FaSpotify } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero min-h-screen text-white relative" id="hero">
      <DarkVeil />

      <div className="z-10 m-10 max-w-3xl">
        <h1 className="text-7xl font-bold leading-tight">
          Ukesh <br /> Dhakal
        </h1>

        <HyperText className="py-6 text-xl tracking-wider">
          FONT-END DEVELOPER | UI/UX DESIGNER |
        </HyperText>

        <div className="flex gap-5 mb-8 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://open.spotify.com/user/317dtavgsxwwm5jvkviexkhityay" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
        </div>

        <p className="text-xl mb-8 leading-relaxed">
          Passionate for developing modern responsive web applications and technology.
        </p>

        <a
          href="https://open.spotify.com/user/317dtavgsxwwm5jvkviexkhityay"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl bg-[#181818] shadow-lg shadow-black/50 hover:scale-[1.02] hover:shadow-green-500/40 transition-transform duration-200"
        >
          <img
            src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=317dtavgsxwwm5jvkviexkhityay&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true"
            alt="Now Playing on Spotify"
            className="rounded-xl w-full"
          />
        </a>

        <a
          className="btn btn-accent mt-8 p-7 text-xl"
          href="https://drive.google.com/file/d/1Zc3pPql1UDJbWZnJ0EPlxm3uJfL-TEbH/view?usp=sharing"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
