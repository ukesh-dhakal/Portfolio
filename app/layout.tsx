import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Concert_One } from "next/font/google"; // Import Concert_One
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const concertOne = Concert_One({
  weight: "400", 
  variable: "--font-concert-one",
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Ukesh Dhakal",
  description: "portfolio of Ukesh Dhakal, a Front-End Developer and UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${concertOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
