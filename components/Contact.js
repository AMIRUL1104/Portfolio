'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  const containerRef = useRef(null);
  const watermarkRef = useRef(null);

  useGSAP(() => {
    // Watermark parallax
    gsap.to(watermarkRef.current, {
      xPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-10 sm:py-14 md:py-20 relative bg-linear-to-br from-primary to-secondary text-white transition-all duration-500 overflow-hidden"
      id="contact"
    >
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">

        {/* Background watermark title */}
        <h2 
          ref={watermarkRef}
          className="absolute -top-10 left-[-10%] text-7xl sm:text-9xl md:text-[12rem] font-bold opacity-5 select-none pointer-events-none whitespace-nowrap"
        >
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start relative z-10">

          {/* Left — Info */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Drop me a message
              </h3>
              <p className="text-xs sm:text-sm md:text-base opacity-80 max-w-[450px] leading-relaxed sm:leading-loose">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                Let's build something amazing together.
              </p>
            </motion.div>

            {/* Contact Items */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: 'call',        label: '+8801315399059' },
                { icon: 'mail',        label: 'amirulislam9.e@gmail.com' },
                { icon: 'location_on', label: 'Osmaninagar, Sylhet, Bangladesh' },
              ].map(({ icon, label }, index) => (
                <motion.div 
                  key={icon}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 group cursor-default"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white/10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{icon}</span>
                  </motion.div>
                  <span className="text-xs sm:text-sm md:text-base opacity-90 break-all sm:break-normal">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 opacity-60">
                  Name
                </label>
                <input
                  className="w-full bg-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/30 transition-all"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 opacity-60">
                  Email
                </label>
                <input
                  className="w-full bg-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/30 transition-all"
                  placeholder="email@example.com"
                  type="email"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 opacity-60">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/30 transition-all resize-none"
                  placeholder="How can I help?"
                  rows={4}
                  required
                />
              </motion.div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#2563EB' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#3B82F6] text-white text-sm sm:text-base font-bold py-2.5 sm:py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 mt-1"
                type="submit"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}