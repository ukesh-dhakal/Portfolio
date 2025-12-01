"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mt-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="font-semibold text-gray-300 text-center md:text-left">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-white">Ukesh Dhakal</span>
        </h2>
        <p className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Ukesh Dhakal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
