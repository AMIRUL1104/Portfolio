import Image from 'next/image';
import carromImg from "@/public/assets/carrom-pro.png";
import notioImg from "@/public/assets/notio.png";
import keenImg from "@/public/assets/keen.png";

export default function Projects() {
  const projects = [
    {
      title: "Notio – Smart Task Dashboard",
      desc: "A productivity-focused task management application where users can create, update, and manage tasks with status, priority, and categories. Includes real-time UI updates and local storage persistence for seamless user experience.",
      tags: ["Productivity", "Dashboard"],
      tech: ["React", "LocalStorage", "Tailwind CSS"],
      img: notioImg,
      live: "https://notio-three.vercel.app/",
      github: "https://github.com/AMIRUL1104/SmartTasKDashboard",
      reverse: false
    },
    {
      title: "Carrom Scoreboard Pro",
      desc: "A dynamic scoreboard application designed for tracking carrom matches. Features real-time score updates, player management, and a clean UI for smooth gameplay experience.",
      tags: ["Game Tool", "Interactive UI"],
      tech: ["JavaScript", "React", "CSS"],
      img: carromImg,
      live: "https://carrom-scoreboard-pro.netlify.app/",
      github: "https://github.com/AMIRUL1104/Carrom-Scoreboard-Pro",
      reverse: true
    },
    {
      title: "Keen Keeper",
      desc: "A web-based utility application focused on managing and organizing user data efficiently. Built with modern frontend tools and structured for scalability and clean UI experience.",
      tags: ["Utility", "Web App"],
      tech: ["Next.js", "React", "Tailwind CSS"],
      img: keenImg,
      live: "https://keen-keeper-web-app.vercel.app/",
      github: "https://github.com/AMIRUL1104/Keen-Keeper",
      reverse: false
    }
  ];

  return (
    <section
      className="bg-surface dark:bg-[#1E293B] py-10 sm:py-14 md:py-20 transition-colors duration-300"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-[#3B82F6] mb-8 sm:mb-10 md:mb-14">
          Selected Projects
        </h2>

        <div className="space-y-10 sm:space-y-14 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center group`}
            >
              {/* Project Image */}
              <div className="w-full md:flex-1 overflow-hidden rounded-xl shadow-lg border border-outline-variant dark:border-gray-700 aspect-video relative">
                <Image
                  className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full"
                  alt={project.title}
                  src={project.img}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Project Info */}
              <div className="w-full md:flex-1 space-y-3 sm:space-y-4">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-tertiary/10 text-tertiary text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-on-surface dark:text-white group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-[15px] text-on-surface/80 dark:text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs bg-background dark:bg-gray-800 px-2.5 py-1 rounded border border-outline-variant dark:border-gray-700 text-on-surface/80 dark:text-gray-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4 pt-1">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-[#3B82F6] hover:underline underline-offset-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">open_in_new</span>
                    Live
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-[#3B82F6] hover:underline underline-offset-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">code</span>
                    Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}