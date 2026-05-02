'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';

export default function GlobalAnimations() {
  const cursorRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    const moveCursor = (e) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    };

    const handleHover = () => {
      gsap.to(cursor, { scale: 4, backgroundColor: 'rgba(59, 130, 246, 0.2)', duration: 0.3 });
    };

    const handleUnhover = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'rgba(59, 130, 246, 1)', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverables = document.querySelectorAll('a, button, .hover-target');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
