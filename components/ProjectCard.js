'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`project-item flex flex-col ${
        project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center group relative`}
    >
      {/* Project Image */}
      <div className="w-full md:flex-1 overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-gray-700 aspect-video relative">
        <div className="project-image-inner absolute inset-[-20%] w-[140%] h-[140%]">
          <Image
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            alt={project.name}
            src={project.image}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Project Info */}
      <div className="w-full md:flex-1 space-y-3 sm:space-y-4">

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 dark:text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.techStack.map((t, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs bg-white dark:bg-gray-800 px-2.5 py-1 rounded border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-300 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-1 items-center">
          {/* View Details CTA */}
          <Link href={`/projects/${project.slug}`}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              View Details
            </motion.span>
          </Link>

          {/* Live Link */}
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 5 }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 transition-all"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">open_in_new</span>
            Live
          </motion.a>

          {/* Code Link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 5 }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 transition-all"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">code</span>
            Code
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
}
