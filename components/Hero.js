'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImg from "@/public/assets/hero.png"; 

export default function Hero() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Floating animation for image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Shifting gradient glow
    gsap.to(glowRef.current, {
      backgroundPosition: "200% 200%",
      duration: 10,
      repeat: -1,
      ease: "none"
    });
  }, { scope: containerRef });

  const headline = "Hi, I'm Amirul Islam";
  const words = headline.split(" ");

  return (
    <section ref={containerRef} className="relative w-full max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 overflow-hidden">
      
      {/* Background Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-tr from-primary/20 via-blue-500/10 to-transparent blur-[120px] rounded-full -z-10 bg-size-[200%_200%]"
      />

      {/* Text Content */}
      <div className="flex-1 w-full space-y-4 sm:space-y-5 text-center md:text-left z-10">
        <h1 className="flex flex-wrap justify-center md:justify-start gap-x-3 text-primary dark:text-[#3B82F6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-800 dark:text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
        >
          Frontend Developer
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-slate-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-[550px] mx-auto md:mx-0"
        >
          I build fast, responsive, and user-focused web applications using modern technologies like React.
          Focused on clean UI, performance, and real-world problem solving.
        </motion.p>

        {/* Buttons & Social Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-3 sm:gap-4 pt-2">
          <motion.button 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-primary text-white px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg transition-all text-sm sm:text-base"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            Download Resume
          </motion.button>

          <div className="flex gap-2 items-center justify-center">
            {[
              { icon: <FaLinkedin className="text-[22px]" />, label: "LinkedIn", href: "https://linkedin.com/in/amirulislamdev" },
              { icon: <FaGithub className="text-[22px]" />, label: "GitHub", href: "https://github.com/AMIRUL1104" },
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (i * 0.1) }}
                whileHover={{ y: -5, color: "#3B82F6" }}
                className="text-primary dark:text-[#3B82F6] p-2 hover:bg-primary/5 rounded-full transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div 
        ref={imageRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 group mx-auto md:mx-0"
      >
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-primary to-blue-500 blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity" />
        <div className="relative w-full h-full rounded-full border-4 border-blue-400 p-1.5 overflow-hidden bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <Image
            className="object-cover object-center rounded-full"
            alt="Professional portrait of Amirul Islam"
            src={heroImg}
            fill
            sizes="(max-width: 768px) 176px, (max-width: 1024px) 288px, 384px"
            priority
          />
        </div>
      </motion.div>

    </section>
  );
}