"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const menuRef = useRef(null);

  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 50], ["80px", "64px"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"],
  );
  const darkBackgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(15, 23, 42, 0.8)", "rgba(15, 23, 42, 0.95)"],
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(12px)", "blur(20px)"],
  );

  /* ── Theme logic ── */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (saved === "dark" || (!saved && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  /* ── Interaction logic ── */
  // useEffect(() => {
  //   const handler = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target))
  //       setMenuOpen(!menuOpen);
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => document.removeEventListener("mousedown", handler);
  // }, []);

  // mobile nav click handler
  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    // Small delay so menu closes before scroll fires
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <motion.nav
      style={{
        height,
        backgroundColor: isDark ? darkBackgroundColor : backgroundColor,
        backdropBlur,
      }}
      className="sticky top-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight"
          href="/"
        >
          Amirul
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-semibold h-full">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onMouseEnter={() => setHoveredLink(href)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors py-2"
            >
              {label}
              {hoveredLink === href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Buttons Group */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {/* <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined block text-blue-600 dark:text-blue-400">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </motion.button> */}

          {/* Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined block text-blue-600 dark:text-blue-400">
              {menuOpen ? "close" : "menu"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            ref={menuRef}
            className="md:hidden overflow-hidden bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800"
          >
            <ul className="flex flex-col gap-1 px-4 pb-6 pt-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button // ← changed from <a> to <button>
                    onClick={(e) => handleMobileNavClick(e, href)}
                    className="block w-full text-left px-4 py-3 text-sm font-bold
                      text-slate-800 dark:text-slate-200 hover:bg-blue-50
                      dark:hover:bg-blue-900/20 hover:text-blue-600
                      dark:hover:text-white rounded-lg transition-all"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
