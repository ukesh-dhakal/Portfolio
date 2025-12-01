import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
        <meta name="google-site-verification" content="GScWdwaSpYwuwmD8xPTET3Xdol1-NRVzEdNWPweiGSo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${concertOne.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
