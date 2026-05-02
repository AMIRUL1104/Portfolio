'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Parallax effect for images
    const images = gsap.utils.toArray('.project-image-inner');
    images.forEach((img) => {
      gsap.to(img, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Staggered reveal
    const projectItems = gsap.utils.toArray('.project-item');
    projectItems.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="bg-slate-50 dark:bg-[#1E293B] py-10 sm:py-14 md:py-20 transition-colors duration-300 overflow-hidden"
      id="projects"
    >
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8 sm:mb-10 md:mb-14"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}