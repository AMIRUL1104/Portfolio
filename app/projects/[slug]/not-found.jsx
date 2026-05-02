'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0F172A] flex flex-col items-center justify-center px-4 text-center transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="space-y-6 max-w-md"
      >
        <span className="material-symbols-outlined text-[80px] text-blue-400 dark:text-blue-500 opacity-80">
          search_off
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
          Project Not Found
        </h1>
        <p className="text-slate-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          The project you&apos;re looking for doesn&apos;t exist or may have been moved.
          Head back to see all my work.
        </p>
        <Link href="/#projects">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Projects
          </motion.span>
        </Link>
      </motion.div>
    </main>
  );
}
