"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const lines = textRef.current.querySelectorAll(".reveal-line");

      lines.forEach((line) => {
        gsap.from(line, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: containerRef },
  );

  // আপডেটেড হাই-ইমপ্যাক্ট ৪টি টেকনিক্যাল ফিচার কার্ডস
  const cards = [
    {
      icon: "layers",
      title: "Full Stack Development",
      desc: "Building scalable, end-to-end web applications seamlessly handling both frontend and backend.",
    },
    {
      icon: "api",
      title: "REST API Development",
      desc: "Designing robust, secure, and performant RESTful APIs using Express.js and MongoDB.",
    },
    {
      icon: "smart_toy",
      title: "AI Integration",
      desc: "Integrating Google Gemini API, building chatbots, and implementing function calling workflows.",
    },
    {
      icon: "shield_person",
      title: "Auth & Security",
      desc: "Implementing JWT, Better Auth, secure cookies, and strict role-based dashboard access controls.",
    },
  ];

  const stats = [
    {
      number: "7+",
      title: "Full Stack Projects",
      icon: "deployed_code",
    },
    {
      number: "30+",
      title: "Backend Features",
      icon: "database",
    },
    {
      number: "3+",
      title: "AI Integrations",
      icon: "smart_toy",
    },
    {
      number: "10+",
      title: "Authentication Systems",
      icon: "shield_lock",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-surface py-10 sm:py-14 md:py-20 transition-colors duration-300 overflow-hidden"
      id="about"
    >
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
          {/* Bio Text - রিক্রুটারদের ইমপ্যাক্ট দেখানোর জন্য পারফেক্ট কপি */}
          <div ref={textRef} className="space-y-4 sm:space-y-5">
            <p className="reveal-line text-sm sm:text-base md:text-[15px] lg:text-base text-slate-800 dark:text-slate-300 leading-relaxed sm:leading-loose">
              {` I'm`}{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Amirul Islam
              </span>
              , a Full Stack Web Developer focused on building modern, scalable,
              and user-centric web applications. I specialize in React, Next.js,
              TypeScript, Express.js, MongoDB, authentication systems, payment
              integration, and AI-powered features.
            </p>
            <p className="reveal-line text-sm sm:text-base md:text-[15px] lg:text-base text-slate-800 dark:text-slate-300 leading-relaxed sm:leading-loose">
              {`Alongside full stack development, I'm actively exploring advanced
              AI integration, conversational interfaces, and workflow automation
              to build smarter products. I enjoy turning complex business
              requirements into clean, maintainable, and production-ready code.`}
            </p>
            <p className="reveal-line text-sm sm:text-base md:text-[15px] lg:text-base text-slate-800 dark:text-slate-300 leading-relaxed sm:leading-loose">
              My core goal is to contribute to high-impact software engineering
              teams while continuously sharpening my architecture, system
              design, and problem-solving skills.
            </p>
          </div>

          {/* Skill Cards (Features) */}
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
                {/* Google Material Symbols Font-এর আইকন */}
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[22px] sm:text-[26px] mb-2 group-hover:scale-110 transition-transform block">
                  {card.icon}
                </span>
                <h3 className="text-sm sm:text-[15px] font-bold mb-1.5 text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="md:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md p-5 shadow-sm hover:shadow-2xl hover:border-blue-400/40 transition-all duration-300"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10">
                  <span className="material-symbols-outlined text-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </span>
                </div>

                {/* Number */}
                <h3 className="relative text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                  {stat.number}
                </h3>

                {/* Title */}
                <p className="relative mt-2 text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stat.title}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Currently Building / Working on Section (অতিরিক্ত প্রফেশনাল ভাইব দেওয়ার জন্য) */}
          {/* Featured Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 mt-4 p-5 rounded-xl bg-blue-50/50 dark:bg-slate-800/40 border border-blue-100 dark:border-slate-700"
          >
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Featured Projects
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-400">
              <li className="flex items-center gap-2">
                📚
                <a
                  href="https://bookbridgebd.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  BookBridge
                </a>
                – Used Academic Book Marketplace
              </li>

              <li className="flex items-center gap-2">
                🏆
                <a
                  href="https://sportnest-rho.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  SportNest
                </a>
                – Sports Facility Booking Platform
              </li>

              <li className="flex items-center gap-2">
                🏥
                <a
                  href="https://medicare-connect-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  MediCare Connect
                </a>
                – Healthcare Management Platform
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
