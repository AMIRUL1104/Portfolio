export default function About() {
  const cards = [
    { icon: 'code', title: 'Frontend Development', desc: 'Building responsive web apps using React, JavaScript, HTML & CSS.' },
    { icon: 'devices', title: 'Responsive Design', desc: 'Creating mobile-first layouts that work across all devices.' },
    { icon: 'bolt', title: 'Performance', desc: 'Optimizing UI for speed, smooth interactions, and better user experience.' },
    { icon: 'psychology', title: 'Problem Solving', desc: 'Breaking down real-world problems and turning them into working solutions.' },
  ];

  return (
    <section className="bg-surface dark:bg-[#1E293B] py-10 sm:py-14 md:py-20 transition-colors duration-300" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-[#3B82F6] mb-6 sm:mb-8 md:mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">

          {/* Bio Text */}
          <div className="space-y-4 sm:space-y-5">
            <p className="text-sm sm:text-base md:text-[15px] lg:text-base text-on-surface/80 dark:text-gray-300 leading-relaxed sm:leading-loose">
              I'm Amirul Islam, a frontend developer focused on building clean, responsive, and user-friendly web applications.
              I mainly work with React and modern JavaScript to create real-world projects that solve practical problems.
            </p>
            <p className="text-sm sm:text-base md:text-[15px] lg:text-base text-on-surface/80 dark:text-gray-300 leading-relaxed sm:leading-loose">
              Currently, I'm continuously improving my skills by building projects, exploring better UI patterns, and
              strengthening my core fundamentals. My goal is to become a job-ready frontend developer and contribute
              to real production-level applications.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-background dark:bg-secondary/20 p-4 sm:p-5 rounded-xl border border-outline-variant dark:border-gray-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <span className="material-symbols-outlined text-tertiary text-[22px] sm:text-[26px] mb-2 group-hover:scale-110 transition-transform block">
                  {card.icon}
                </span>
                <h3 className="text-sm sm:text-[15px] font-bold mb-1.5 text-on-surface dark:text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-on-surface/60 dark:text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}