'use client';

import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [isDark, setIsDark]       = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuRef                   = useRef(null);

  /* ── Theme init ── */
  useEffect(() => {
    const saved      = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  /* ── Close menu on outside click ── */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* ── Close menu on resize to desktop ── */
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-background/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20 shadow-sm transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 md:h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <a 
          className="text-xl sm:text-2xl font-extrabold text-primary dark:text-white tracking-tight shrink-0"
          href="#"
        >
          Amirul
        </a>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold tracking-tight">
          {navLinks.map(({ label, href }) => (
            <a 
              key={href}
              href={href}
              className="text-sm lg:text-base text-on-surface/60 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Right side: theme toggle + hamburger ── */}
        <div className="flex items-center gap-1 sm:gap-2">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md transition-all group"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px] text-primary dark:text-[#3B82F6] group-hover:scale-110 transition-transform block">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-md transition-all"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-[22px] text-primary dark:text-[#3B82F6] block">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>

        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-4 sm:px-6 pb-4 pt-1 gap-1 bg-background/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a 
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-on-surface/70 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-all"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}