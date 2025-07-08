
const { heroui } = require("@heroui/theme");

 @type {import('tailwindcss').Config} *
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js", // Merged content paths
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        display: ["var(--font-concert-one)"],
      },
    },
  },
  darkMode: "class", 
  plugins: [heroui()], 
};
