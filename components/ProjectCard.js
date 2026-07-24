"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`flex flex-col ${
        project.reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-12 items-center group`}
    >
      {/* Image */}
      <div className="relative w-full md:flex-1 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg aspect-video">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

        {/* Category */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1">
            {project.category}
          </span>

          <span className="rounded-full bg-emerald-600 text-white text-xs font-semibold px-3 py-1">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:flex-1">
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* Role */}
        <p className="mt-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
          {project.role} • {project.team}
        </p>

        {/* Description */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}

          {project.techStack.length > 6 && (
            <span className="rounded-md bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-semibold">
              +{project.techStack.length - 6}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-7">
          <Link href={`/projects/${project.slug}`}>
            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">
              View Details
            </button>
          </Link>

          <a
            href={project.liveLink}
            target="_blank"
            className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 text-sm font-semibold transition"
          >
            Live Demo
          </a>

          <a
            href={project.github.frontend}
            target="_blank"
            className="px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Frontend
          </a>

          <a
            href={project.github.backend}
            target="_blank"
            className="px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-semibold transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Backend
          </a>
        </div>
      </div>
    </motion.div>
  );
}
