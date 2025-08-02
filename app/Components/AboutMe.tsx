import React from 'react';
import Image from 'next/image';
import Photo from '../../public/Photo.jpg'; 

const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto my-16 mb-32  p-4 md:p-10">
      <h1 className="text-4xl md:text-5xl f ont-extrabold text-center text-white underline underline-offset-8 mb-10 tracking-tight leading-tight drop-shadow-lg">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-12">
        <div className="flex-shrink-0 flex justify-center items-center mb-8 md:mb-0 md:w-1/2 w-full">
          <div className="w-full h-full max-w-[420px] max-h-[420px] md:max-w-full md:max-h-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-800 bg-neutral-900">
            <Image
              src={Photo}
              alt="Ukesh Dhakal"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <p className="text-xl md:text-2xl text-white leading-relaxed tracking-wide font-light text-center md:text-left md:w-1/2">
          👋 Hey there! I'm Ukesh Dhakal, a passionate and driven BIT student at Model Institute of Technology (affiliated with IAU) in Kathmandu 🇳🇵. I have a strong foundation in both front-end and back-end development, with expertise in technologies like HTML/CSS 🎨, JavaScript, React, Node.js, MongoDB, and MySQL, alongside skills in responsive design, Figma, Git, Linux, and Firebase. I've brought ideas to life through projects like a Live Code Editor, an Event Management System, a Front-end Food Delivery Site 🍔, and an E-commerce Site, proudly placing 3rd in Saral Hackathon 2023 🥉 and 1st in Tech Trix Nepal 2023 🥇.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
