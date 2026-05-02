'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Experience() {
  const containerRef = useRef(null);

  const experiences = [
    {
      period: "2025 — PRESENT",
      role: "Frontend Developer (Self-Learning)",
      company: "Personal Projects",
      desc: "Building real-world web applications using React and Next.js. Implemented features like authentication (Better Auth), task dashboards, and interactive UI components. Actively improving performance, clean code practices, and pushing projects to GitHub regularly."
    },
    {
      period: "2024 — 2025",
      role: "Frontend Practice & Fundamentals",
      company: "Self-Driven Learning",
      desc: "Focused on mastering JavaScript fundamentals, DOM manipulation, and responsive design. Built multiple small to medium projects to strengthen core problem-solving and UI development skills."
    },
    {
      period: "2026 — PRESENT",
      role: "Advanced Web Development Learning",
      company: "Programming Hero",
      desc: "Learning advanced frontend technologies, real-world project architecture, and modern development practices to become a job-ready frontend developer."
    }
  ];

  const education = [
    {
      period: "2026 — PRESENT",
      degree: "BSS in Economics (Honours)",
      school: "Murari Chand (MC) College, Sylhet",
      desc: "Currently pursuing Honours (1st Year) while continuing frontend development and building real-world projects alongside academic studies."
    },
    {
      period: "2023 — 2025",
      degree: "Higher Secondary Certificate (Science)",
      school: "Dakshin Sharma Government College",
      desc: "Completed HSC in Science background with GPA 3.75."
    },
    {
      period: "2023",
      degree: "Secondary School Certificate (Science)",
      school: "K A Janata High School",
      desc: "Completed SSC in Science background with GPA 5.00."
    }
  ];

  useGSAP(() => {
    const lines = gsap.utils.toArray('.timeline-line');
    lines.forEach((line) => {
      gsap.from(line, {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: line,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  const TimelineItem = ({ period, title, subtitle, desc, dotColor, ringColor, index, side }) => (
    <motion.div 
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="pl-6 sm:pl-8 relative group"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-[-7px] sm:left-[-8px] top-[3px] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${dotColor} ${ringColor} ring-4 group-hover:scale-125 transition-transform z-10`}
      />

      {/* Period */}
      <span className="text-[10px] sm:text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
        {period}
      </span>

      {/* Role / Degree */}
      <h3 className="text-sm sm:text-base md:text-[15px] font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
        {title}
      </h3>

      {/* Company / School */}
      <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2 mt-0.5">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-[13px] md:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );

  return (
    <section
      ref={containerRef}
      className="bg-white dark:bg-[#0F172A] py-10 sm:py-14 md:py-20 max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="experience"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-10 lg:gap-16">

        {/* Experience */}
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 md:mb-10"
          >
            Experience
          </motion.h2>

          <div className="relative ml-3 sm:ml-4 space-y-6 sm:space-y-8">
            <div className="timeline-line absolute left-0 top-2 bottom-0 w-0.5 bg-blue-200 dark:bg-gray-700" />
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                index={index}
                side="left"
                period={exp.period}
                title={exp.role}
                subtitle={exp.company}
                desc={exp.desc}
                dotColor="bg-blue-600 dark:bg-blue-500"
                ringColor="ring-white dark:ring-[#0F172A]"
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 md:mb-10"
          >
            Education
          </motion.h2>

          <div className="relative ml-3 sm:ml-4 space-y-6 sm:space-y-8">
            <div className="timeline-line absolute left-0 top-2 bottom-0 w-0.5 bg-amber-200 dark:bg-gray-700" />
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                index={index}
                side="right"
                period={edu.period}
                title={edu.degree}
                subtitle={edu.school}
                desc={edu.desc}
                dotColor="bg-amber-500 dark:bg-amber-400"
                ringColor="ring-white dark:ring-[#0F172A]"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}