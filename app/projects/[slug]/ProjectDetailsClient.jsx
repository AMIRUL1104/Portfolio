"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
    },
  }),
};

export default function ProjectDetailsClient({ project }) {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0F172A] transition-colors">
      {/* ================= Hero ================= */}

      <section className="relative h-[45vh] md:h-[60vh] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0F172A]" />

        {/* Back Button */}

        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link href="/#projects">
            <motion.span
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Projects
            </motion.span>
          </Link>
        </div>

        {/* Hero Content */}

        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* badges */}

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {project.category}
                </span>

                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {project.status}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {project.title}
              </h1>

              <p className="mt-3 text-blue-100 text-lg">
                {project.role} • {project.team} • {project.year}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Body ================= */}

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {/* About + CTA */}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-5">
              About Project
            </h2>

            <p className="leading-8 text-slate-700 dark:text-slate-300">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="space-y-4"
          >
            <a
              href={project.liveLink}
              target="_blank"
              className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
            >
              <span className="material-symbols-outlined">open_in_new</span>
              Live Demo
            </a>

            <a
              href={project.github.frontend}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-xl py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              <FaGithub />
              Frontend Repository
            </a>

            <a
              href={project.github.backend}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-xl py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              <FaGithub />
              Backend Repository
            </a>
          </motion.div>
        </div>

        {/* ================= Tech Stack ================= */}

        <motion.section variants={fadeUp} initial="hidden" animate="visible">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* ================= Project Overview ================= */}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Key Features */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-5">
              Key Features
            </h2>

            <ul className="space-y-3">
              {project.keyFeatures.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-blue-500">
                    check_circle
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Core Features */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-5">
              Core Features
            </h2>

            <ul className="space-y-3">
              {project.backendFeatures.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-blue-500">
                    settings
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* ================= Security & Database ================= */}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Authentication */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-5">
              Authentication & Security
            </h2>

            <ul className="space-y-3">
              {project.authentication.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-green-500">
                    shield
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Database */}

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-5">
              Database Design
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.database.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-blue-50 dark:bg-slate-700 border border-blue-200 dark:border-slate-600 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* ================= AI Features ================= */}

        {project.aiFeatures?.length > 0 && (
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-5">
              AI Features
            </h2>

            <ul className="space-y-3">
              {project.aiFeatures.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-purple-500">
                    smart_toy
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* ================= Challenges ================= */}

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={7}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-orange-500 mb-5">
              Challenges Faced
            </h2>

            <ul className="space-y-3">
              {project.challenges.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-orange-400">
                    warning
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={8}
            className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <h2 className="text-xl font-bold text-emerald-500 mb-5">
              Future Improvements
            </h2>

            <ul className="space-y-3">
              {project.improvements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="material-symbols-outlined text-emerald-500">
                    rocket_launch
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* ================= Footer CTA ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={9}
          className="text-center pt-6"
        >
          <p className="text-slate-500 dark:text-slate-400 mb-5">
            Interested in exploring more full-stack projects?
          </p>

          <Link href="/#projects">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer transition"
            >
              <span className="material-symbols-outlined">grid_view</span>
              View All Projects
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
