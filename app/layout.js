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
  title: "Amirul | Frontend Web Developer Portfolio",
  description: "I build fast, responsive, and user-focused web applications using modern technologies like React. Focused on clean UI, performance, and real-world problem solving.",
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
