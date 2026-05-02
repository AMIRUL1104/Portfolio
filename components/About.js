'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const lines = textRef.current.querySelectorAll('.reveal-line');
    
    lines.forEach((line) => {
      gsap.from(line, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: containerRef });

  const cards = [
    { icon: 'code', title: 'Frontend Development', desc: 'Building responsive web apps using React, JavaScript, HTML & CSS.' },
    { icon: 'devices', title: 'Responsive Design', desc: 'Creating mobile-first layouts that work across all devices.' },
    { icon: 'bolt', title: 'Performance', desc: 'Optimizing UI for speed, smooth interactions, and better user experience.' },
    { icon: 'psychology', title: 'Problem Solving', desc: 'Breaking down real-world problems and turning them into working solutions.' },
  ];

  return (
    <section ref={containerRef} className="bg-slate-50 dark:bg-[#1E293B] py-10 sm:py-14 md:py-20 transition-colors duration-300 overflow-hidden" id="about">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 sm:mb-8 md:mb-10"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">

          {/* Bio Text */}
          <div ref={textRef} className="space-y-4 sm:space-y-5">
            <p className="reveal-line text-sm sm:text-base md:text-[15px] lg:text-base text-slate-700 dark:text-gray-300 leading-relaxed sm:leading-loose">
              I'm Amirul Islam, a frontend developer focused on building clean, responsive, and user-friendly web applications.
              I mainly work with React and modern JavaScript to create real-world projects that solve practical problems.
            </p>
            <p className="reveal-line text-sm sm:text-base md:text-[15px] lg:text-base text-slate-700 dark:text-gray-300 leading-relaxed sm:leading-loose">
              Currently, I'm continuously improving my skills by building projects, exploring better UI patterns, and
              strengthening my core fundamentals. My goal is to become a job-ready frontend developer and contribute
              to real production-level applications.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-slate-700/30 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all cursor-default group"
              >
                <span className="material-symbols-outlined text-amber-500 dark:text-amber-400 text-[22px] sm:text-[26px] mb-2 group-hover:scale-110 transition-transform block">
                  {card.icon}
                </span>
                <h3 className="text-sm sm:text-[15px] font-bold mb-1.5 text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
