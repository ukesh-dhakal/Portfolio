import React from 'react';
import Image from 'next/image';
import Photo from '../../public/Photo.jpg'; 

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-white underline underline-offset-4 mb-8 md:text-5xl">
        About Me
      </h1>

  
      <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-8">
        {/* Paragraph */}
        <p className="text-lg text-white mt-6 md:mt-0 leading-relaxed break-words text-center md:text-left md:w-1/2">
          👋 Hey there! I'm Ukesh Dhakal, a passionate and driven individual from Kathmandu 🇳🇵, always eager to learn new things and gain fresh experiences. I'm currently pursuing my BIT at Model Institute of Technology which is affilated to the International American University (IAU) 📚. <br/>
          <br/>
          I have a strong foundation in both front-end and back-end development, with expertise in technologies like HTML/CSS 🎨, JavaScript, React, Node.js, MongoDB, and MySQL. My skills also include responsive design, Figma, Git, Linux, and Firebase. <br/>
          <br/>
          I've brought ideas to life through projects like a Live Code Editor for HTML, CSS, and JS, an Event Management System, a Front-end Food Delivery Site 🍔, and an E-commerce Site for a hackathon. I'm proud to have placed 3rd in the Saral Hackathon 2023 🥉 and 1st in Tech Trix Nepal 2023 🥇!
        </p>

    
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <Image
            src={Photo}
            alt="Ukesh Dhakal"
            width={320}
            height={320}
            className="rounded-lg shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
