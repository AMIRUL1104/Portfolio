"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Skills() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  // চ্যাটজিপিটির ৪ ও ৫ নম্বর রিকমেন্ডেশন অনুযায়ী সম্পূর্ণ নতুন ৪টি ক্যাটাগরি গ্রুপিং
  const skillGroups = [
    {
      title: "Frontend Architecture",
      icon: "code",
      iconBg: "bg-blue-100 dark:bg-[#004a77]/30",
      iconColor: "text-blue-700 dark:text-blue-300",
      desc: "Building responsive, fast, and scalable user interfaces with high-performance frameworks.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Security",
      icon: "dns",
      iconBg: "bg-emerald-100 dark:bg-[#004d30]/30",
      iconColor: "text-emerald-700 dark:text-emerald-300",
      desc: "Developing scalable servers, secure REST APIs, and bulletproof multi-role authorization.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Auth",
        "Better Auth",
        "Stripe",
      ],
    },
    {
      title: "Database Management",
      icon: "database",
      iconBg: "bg-amber-100 dark:bg-[#5c4100]/30",
      iconColor: "text-amber-700 dark:text-amber-300",
      desc: "Designing efficient schemas, complex data pipelines, and optimized storage systems.",
      skills: ["MongoDB", "MongoDB Atlas"],
    },
    {
      title: "AI Integration",
      icon: "smart_toy",
      iconBg: "bg-purple-100 dark:bg-[#3b0066]/30",
      iconColor: "text-purple-700 dark:text-purple-300",
      desc: "Supercharging web applications with intelligent conversational LLMs and automated tools.",
      skills: [
        "Gemini API",
        "Function Calling",
        "AI Chatbots",
        "Context Engineering",
      ],
    },
  ];

  // মার্কি অ্যানিমেশনের জন্য ডুপ্লিকেট রিমুভ করে হাই-ডিমান্ড গ্লোবাল টেক স্ট্যাক লিস্ট
  const arsenal = [
    { name: "Next.js", icon: "language" },
    { name: "React", icon: "code" },
    { name: "Node.js", icon: "token" },
    { name: "Express.js", icon: "terminal" },
    { name: "MongoDB", icon: "database" },
    { name: "Gemini AI", icon: "smart_toy" },
    { name: "Stripe", icon: "payments" },
    { name: "JWT", icon: "shield_person" },
    { name: "Tailwind", icon: "css" },
    { name: "GitHub", icon: "hub" },
    { name: "Vercel", icon: "cloud_upload" },
    { name: "Postman", icon: "api" },
  ];

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const w = marquee.scrollWidth;
        gsap.to(marquee, {
          x: `-${w / 2}`,
          duration: 25, // টেক্সট বাড়ায় স্পিড ব্যালেন্স করার জন্য ২৫ সেকেন্ড করা হয়েছে
          repeat: -1,
          ease: "none",
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id="skills"
      className="bg-background transition-colors duration-300 overflow-hidden"
    >
      {/* Skills Overview */}
      <section className="py-10 sm:py-14 md:py-20 max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            The professional technologies, architectural frameworks, and
            intelligent tools I use to build robust full-stack products.
          </p>
        </motion.div>

        {/* ৩ কলাম থেকে ৪টি কার্ডের জন্য ওয়ান-অফ-গ্রিড রেসপন্সিভনেস */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-surface p-5 sm:p-6 rounded-3xl shadow-sm border border-outline-variant transition-all flex flex-col items-start"
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 ${group.iconBg} ${group.iconColor} rounded-2xl flex items-center justify-center mb-4`}
              >
                <span className="material-symbols-outlined text-[24px] sm:text-[28px] md:text-[32px]">
                  {group.icon}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-900 dark:text-white">
                {group.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-400 mb-5 grow leading-relaxed">
                {group.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 dark:border-gray-700 text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-gray-300 bg-white dark:bg-white/5"
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-10 text-center"
        >
          Core Tech Stack
        </motion.h2>

        <div className="relative flex overflow-hidden">
          <div ref={marqueeRef} className="flex gap-4 py-4 whitespace-nowrap">
            {[...arsenal, ...arsenal].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-surface px-6 py-4 min-w-35 rounded-xl border border-outline-variant flex flex-col items-center gap-2 shrink-0 transition-shadow hover:shadow-lg cursor-default"
              >
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[28px]">
                  {item.icon}
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-white">
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
