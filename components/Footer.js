export default function Footer() {
  return (
    <footer className="bg-background dark:bg-[#0F172A] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-container-max mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-xs">
          <span className="font-bold text-lg text-primary dark:text-white font-headline-md">Portfolio</span>
          <p className="font-manrope text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Professional Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex gap-lg items-center font-manrope text-sm">
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-[#3B82F6] underline underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-[#3B82F6] underline underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">GitHub</a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-[#3B82F6] underline underline-offset-4 transition-all opacity-80 hover:opacity-100" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
