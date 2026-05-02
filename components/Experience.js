export default function Experience() {
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

  const TimelineItem = ({ period, title, subtitle, desc, dotColor, ringColor }) => (
    <div className="pl-6 sm:pl-8 relative group">
      {/* Timeline dot */}
      <div
        className={`absolute left-[-7px] sm:left-[-8px] top-[3px] w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${dotColor} ${ringColor} ring-4 group-hover:scale-125 transition-transform`}
      />

      {/* Period */}
      <span className="text-[10px] sm:text-xs font-bold text-tertiary uppercase tracking-widest">
        {period}
      </span>

      {/* Role / Degree */}
      <h3 className="text-sm sm:text-base md:text-[15px] font-bold text-on-surface dark:text-white mt-0.5 leading-snug">
        {title}
      </h3>

      {/* Company / School */}
      <p className="text-xs sm:text-sm text-secondary dark:text-[#3B82F6] font-semibold mb-2 mt-0.5">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-xs sm:text-[13px] md:text-sm text-on-surface/70 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );

  return (
    <section
      className="py-10 sm:py-14 md:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8"
      id="experience"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-10 lg:gap-16">

        {/* Experience */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-[#3B82F6] mb-6 sm:mb-8 md:mb-10">
            Experience
          </h2>

          <div className="relative border-l-2 border-primary/20 dark:border-gray-700 ml-3 sm:ml-4 space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                period={exp.period}
                title={exp.role}
                subtitle={exp.company}
                desc={exp.desc}
                dotColor="bg-primary"
                ringColor="ring-background dark:ring-[#0F172A]"
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-[#3B82F6] mb-6 sm:mb-8 md:mb-10">
            Education
          </h2>

          <div className="relative border-l-2 border-secondary/20 dark:border-gray-700 ml-3 sm:ml-4 space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                period={edu.period}
                title={edu.degree}
                subtitle={edu.school}
                desc={edu.desc}
                dotColor="bg-tertiary"
                ringColor="ring-background dark:ring-[#0F172A]"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}