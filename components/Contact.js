'use client';

export default function Contact() {
  return (
    <section
      className="py-10 sm:py-14 md:py-20 relative bg-gradient-to-br from-primary to-secondary text-white transition-all duration-500"
      id="contact"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Background watermark title */}
        <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold text-center mb-6 sm:mb-8 md:mb-12 opacity-10 select-none pointer-events-none">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">

          {/* Left — Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Drop me a message
              </h3>
              <p className="text-xs sm:text-sm md:text-base opacity-80 max-w-[450px] leading-relaxed sm:leading-loose">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                Let's build something amazing together.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: 'call',        label: '+8801315399059' },
                { icon: 'mail',        label: 'amirulislam9.e@gmail.com' },
                { icon: 'location_on', label: 'Osmaninagar, Sylhet, Bangladesh' },
              ].map(({ icon, label }) => (
                <div key={icon} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{icon}</span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base opacity-90 break-all sm:break-normal">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white/5 backdrop-blur-xl p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl animate-fade-in-up">
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>

              {/* Name */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 opacity-60">
                  Name
                </label>
                <input
                  className="w-full bg-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/30 transition-all"
                  placeholder="Your Name"
                  type="text"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 opacity-60">
                  Email
                </label>
                <input
                  className="w-full bg-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/30 transition-all"
                  placeholder="email@example.com"
                  type="email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 opacity-60">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/10 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:ring-2 focus:ring-white/30 outline-none text-white placeholder-white/30 transition-all resize-none"
                  placeholder="How can I help?"
                  rows={4}
                  required
                />
              </div>

              {/* Submit */}
              <button
                className="w-full bg-[#3B82F6] text-white text-sm sm:text-base font-bold py-2.5 sm:py-3 rounded-xl hover:bg-[#2563EB] transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20 mt-1"
                type="submit"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}