import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});

export const metadata = {
  title: "Meriem | Full Stack Developer Portfolio",
  description: "Crafting robust digital experiences with a focus on performance, scalability, and user-centric design.",
};

import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/BackToTop";
import GlobalAnimations from "@/components/GlobalAnimations";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <GlobalAnimations />
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
