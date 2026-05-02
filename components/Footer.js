import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-[#0F172A] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-lg text-primary dark:text-white">Amirul</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Amirul Islam. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 items-center">
          <a 
            href="#" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-all hover:scale-110" 
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-all hover:scale-110" 
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-all hover:scale-110" 
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
