'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Skills() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  const skillGroups = [
    {
      title: 'Frontend',
      icon: 'code',
      iconBg: 'bg-[#c2e4fc] dark:bg-[#004a77]/30',
      iconColor: 'text-[#001e2d] dark:text-[#c2e4fc]',
      desc: 'Building modern, responsive, and scalable web applications using React and Next.js.',
      skills: ['React', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'UI & Libraries',
      icon: 'widgets',
      iconBg: 'bg-[#ffd6e0] dark:bg-[#7a0030]/30',
      iconColor: 'text-[#2d0014] dark:text-[#ffd6e0]',
      desc: 'Using modern UI libraries and tools to enhance user experience and speed up development.',
      skills: ['React Toastify', 'Recharts', 'DaisyUI', 'HeroUI', 'Figma']
    },
    {
      title: 'Tools & Workflow',
      icon: 'build',
      iconBg: 'bg-[#d4e3ff] dark:bg-[#27548a]/30',
      iconColor: 'text-[#001c3a] dark:text-[#d4e3ff]',
      desc: 'Managing code, version control, and authentication systems for real-world projects.',
      skills: ['Git', 'GitHub', 'VS Code', 'Better Auth', 'Authentication (Email/Password)']
    }
  ];

  const arsenal = [
    { name: 'React', icon: 'code' },
    { name: 'Next.js', icon: 'language' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Tailwind CSS', icon: 'css' },
    { name: 'Figma', icon: 'design_services' },
    { name: 'GitHub', icon: 'hub' },
    { name: 'Recharts', icon: 'bar_chart' },
    { name: 'React Toastify', icon: 'notifications' },
  ];

  useGSAP(() => {
    // Infinite marquee
    const marquee = marqueeRef.current;
    if (marquee) {
      const w = marquee.scrollWidth;
      gsap.to(marquee, {
        x: `-${w / 2}`,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="skills" className="bg-background transition-colors duration-300 overflow-hidden">

      {/* Skills Overview */}
      <section className="py-10 sm:py-14 md:py-20 max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-[#3B82F6] mb-2 sm:mb-3">
            Skills & Tools
          </h2>
          <p className="text-sm sm:text-base text-on-surface/60 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            Technologies and tools I use to build fast, responsive, and real-world web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-surface dark:bg-[#1E293B] p-5 sm:p-6 rounded-3xl shadow-sm border border-outline-variant/30 dark:border-gray-800 transition-all flex flex-col items-start"
            >
              <div className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 ${group.iconBg} ${group.iconColor} rounded-2xl flex items-center justify-center mb-4`}>
                <span className="material-symbols-outlined text-[24px] sm:text-[28px] md:text-[32px]">
                  {group.icon}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2 text-on-surface dark:text-white">
                {group.title}
              </h3>

              <p className="text-xs sm:text-sm text-on-surface/60 dark:text-gray-400 mb-5 grow leading-relaxed">
                {group.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                    className="px-2.5 sm:px-3 py-1 rounded-full border border-outline-variant/50 dark:border-gray-700 text-[11px] sm:text-xs font-semibold text-on-surface/80 dark:text-gray-300 bg-surface-container-low/50 dark:bg-white/5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="pb-10 sm:pb-14 md:pb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-[#3B82F6] mb-10 text-center"
        >
          Tech Stack
        </motion.h2>

        <div className="relative flex overflow-hidden group">
          <div ref={marqueeRef} className="flex gap-4 py-4 whitespace-nowrap">
            {[...arsenal, ...arsenal].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-surface dark:bg-[#1E293B] px-6 py-4 min-w-[140px] rounded-xl border border-outline-variant dark:border-gray-700 flex flex-col items-center gap-2 shrink-0 transition-shadow hover:shadow-lg cursor-default"
              >
                <span className="material-symbols-outlined text-primary dark:text-blue-400 text-[28px]">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-on-surface dark:text-white">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}