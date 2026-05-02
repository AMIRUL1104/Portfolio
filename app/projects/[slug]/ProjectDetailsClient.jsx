'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] },
  }),
};

export default function ProjectDetailsClient({ project }) {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300">

      {/* Hero Banner */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[55vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

        {/* Back Button */}
        <div className="absolute top-5 left-4 sm:left-8 z-10">
          <Link href="/#projects">
            <motion.span
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-semibold cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back to Projects
            </motion.span>
          </Link>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8 sm:pb-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-amber-400/90 text-amber-900 text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {project.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 space-y-10 sm:space-y-14">

        {/* Description + Links row */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">

          {/* Description */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="md:col-span-2 space-y-3"
          >
            <h2 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">info</span>
              About This Project
            </h2>
            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* CTA Links */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 justify-start"
          >
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              View Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:scale-95 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow-lg"
            >
              <FaGithub className="text-[18px]" />
              View on GitHub
            </a>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">stacks</span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-800/80 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">

          {/* Challenges */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 rounded-2xl p-6 sm:p-7 space-y-4"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-orange-500">warning</span>
              Challenges Faced
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                  <span className="material-symbols-outlined text-[18px] text-orange-400 mt-0.5 shrink-0">chevron_right</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Improvements */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 rounded-2xl p-6 sm:p-7 space-y-4"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-green-500">rocket_launch</span>
              Future Improvements
            </h2>
            <ul className="space-y-3">
              {project.improvements.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                  <span className="material-symbols-outlined text-[18px] text-green-400 mt-0.5 shrink-0">check_circle</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center pt-4 pb-2"
        >
          <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">Want to see more of my work?</p>
          <Link href="/#projects">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-200 font-semibold text-sm px-6 py-2.5 rounded-xl shadow hover:shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
              View All Projects
            </motion.span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
