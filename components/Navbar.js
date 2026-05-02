

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

  /* ── Theme logic ── */
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  /* ── Interaction logic ── */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <a className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-white tracking-tight" href="#">
          Amirul
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Buttons Group */}
        <div className="flex items-center gap-2">
          
          {/* 1. Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all">
            <span className="material-symbols-outlined block text-blue-600 dark:text-blue-400">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* 2. Menu Button (Right side of toggle) */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined block text-blue-600 dark:text-blue-400">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Dropdown (Column Layout) */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-6 pt-2 bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-gray-800">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a 
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block w-full px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-white rounded-lg transition-all"
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