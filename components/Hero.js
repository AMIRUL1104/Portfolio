
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import heroImg from "@/public/assets/hero.png"; 

export default function Hero() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
      
      {/* Text Content */}
      <div className="flex-1 w-full space-y-4 sm:space-y-5 animate-fade-in text-center md:text-left">
        <h1 className="text-primary dark:text-[#3B82F6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Hi, I'm Amirul Islam
        </h1>
        <h2 className="text-secondary dark:text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Frontend Developer
        </h2>
        <p className="text-on-surface/80 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-[550px] mx-auto md:mx-0">
          I build fast, responsive, and user-focused web applications using modern technologies like React.
          Focused on clean UI, performance, and real-world problem solving.
        </p>

        {/* Buttons & Social Links */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center md:items-start gap-3 sm:gap-4 pt-2">
          <button className="  w-full sm:w-auto bg-primary text-white px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95 text-sm sm:text-base">
            <span className="material-symbols-outlined text-[20px]">download</span>
            Download Resume
          </button>

          <div className="flex gap-2 items-center justify-center">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-primary dark:text-[#3B82F6] hover:opacity-80 transition-opacity p-2 hover:bg-primary/5 rounded-full">
              <FaLinkedin className="text-[22px]" />
            </a>
            
            {/* GitHub */}
            <a href="#" aria-label="GitHub" className="text-primary dark:text-[#3B82F6] hover:opacity-80 transition-opacity p-2 hover:bg-primary/5 rounded-full">
              <FaGithub className="text-[22px]" />
            </a>
            
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-primary dark:text-[#3B82F6] hover:opacity-80 transition-opacity p-2 hover:bg-primary/5 rounded-full">
              <FaFacebook className="text-[22px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 group mx-auto md:mx-0">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity" />
        
        {/* Image container */}
        <div className="relative w-full h-full rounded-full border-4 border-blue-400 p-1.5 overflow-hidden bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <Image
            className="object-cover object-center rounded-full"
            alt="Professional portrait of Amirul Islam"
            src={heroImg}
            fill
            sizes="(max-width: 768px) 176px, (max-width: 1024px) 288px, 384px"
            priority
          />
        </div>
        {/* <div className="relative w-full h-full rounded-full border-4 border-blue-400 p-1.5 overflow-hidden bg-white dark:bg-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105">
  <Image
    className="object-contain rounded-full"
    alt="Professional portrait of Amirul Islam"
    src={heroImg}
    fill
    sizes="(max-width: 768px) 176px, (max-width: 1024px) 288px, 384px"
    priority
  />
</div> */}

      </div>

    </section>
  );
}