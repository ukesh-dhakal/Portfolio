import React from 'react';
import Image from 'next/image';
import Photo from '../../public/Photo.jpg'; // Adjust the path as necessary

const AboutMe = () => {
  return (
   
    <div className="max-w-4xl mx-auto my-12 p-8  ">
      
      
      <h1 className="text-4xl font-bold text-center text-white underline underline-offset-4 mb-8 md:text-5xl">
        About Me
      </h1>

     <div className='flex flex-row justify-center items-center'>
      <p className="text-lg text-white m-5 leading-relaxed break-words">
        👋 Hey there! I'm Ukesh Dhakal, a passionate and driven individual from Kathmandu 🇳🇵, always eager to learn new things and gain fresh experiences. I'm currently pursuing my BIT at the International American University (IAU) 📚. <br/>
<br/>
I have a strong foundation in both front-end and back-end development, with expertise in technologies like HTML/CSS 🎨 , JavaScript , React , Node.js , MongoDB , and MySQL. My skills also include responsive design , Figma , Git , Linux , and Firebase. <br/>
<br/>
I've brought ideas to life through projects like a Live Code Editor for HTML, CSS, and JS , an Event Management System , a Front-end Food Delivery Site 🍔 , and an E-commerce Site for a hackathon. I'm proud to have placed 3rd in the Saral Hackathon 2023 🥉 and 1st in Tech Trix Nepal 2023 🥇!
      </p>
<Image
        src={Photo}
        alt="Ukesh Dhakal"
        width={320}
        height={320}
        className=" mx-auto m-5 mt-8 mb-4"
      />
      </div>
      
    </div>
  );
};

export default AboutMe;
