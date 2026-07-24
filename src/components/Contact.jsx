import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const PaperPlaneWithLoopDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 60 40" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M5 25c15-15 30-5 25 10s-15 5-5-15l15-5" strokeDasharray="3,3" />
    <path d="M40 15l12-3-7 15-3-6-4 2z" fill="#BDE0FE" />
  </svg>
);

const SunDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <circle cx="12" cy="12" r="5" fill="#FFF5B8" />
    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.72-12.72l-1.41 1.41" />
  </svg>
);

const CloudDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 8.58A4 4 0 109 22h10a5 5 0 000-10.1z" fill="#FFF" />
  </svg>
);

const SwirlArrowDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="#141414" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M10 10c10 5 15 15 5 20s-10-5 5-15l15-5" />
    <path d="M30 10l5 5-5 5" />
  </svg>
);

const SparkleClusterDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 30 30" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M15 5v20M5 15h20M8 8l14 14M8 22l14-14" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background doodles */}
      <PaperPlaneWithLoopDoodle className="absolute top-16 left-8 w-14 h-10 rotate-[-12deg] opacity-70 hidden md:block" />
      <SunDoodle className="absolute top-12 right-12 w-8 h-8 opacity-70 hidden md:block" />
      <CloudDoodle className="absolute top-[40%] left-8 w-9 h-6 opacity-75 hidden lg:block" />
      <SwirlArrowDoodle className="absolute top-[50%] right-8 w-10 h-10 rotate-[-20deg] opacity-70 hidden lg:block" />
      <SparkleClusterDoodle className="absolute bottom-[25%] left-10 w-6 h-6 opacity-70 hidden md:block" />

      {/* Clean dashed divider line */}
      <div className="max-w-5xl mx-auto w-full border-t-2 border-dashed border-ink/40 mb-12" />

      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title & Paragraph */}
        <div className="space-y-6 max-w-2xl mx-auto mb-12">
          <div className="relative inline-block">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-ink rotate-[-1.5deg] mb-2">
              Let's build something cool!
            </h2>
          </div>

          <p className="font-body text-base font-semibold text-charcoal leading-relaxed whitespace-pre-line">
            {`Whether you're looking for a thoughtful UI,
a responsive website, or a creative collaborator,
I'd love to hear about your project.`}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center max-w-2xl mx-auto mb-12">
          
          {/* Primary: Get in Touch */}
          <motion.a 
            href="mailto:piyakholiya6@gmail.com"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-coral text-cream font-mono text-sm font-extrabold border-2 border-ink shadow-brutal rounded-2xl hover:shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all w-full sm:w-auto min-w-[220px]"
          >
            <Mail className="w-4 h-4 stroke-[2.5]" />
            <span>Get in Touch</span>
          </motion.a>

          {/* Secondary: LinkedIn Profile */}
          <motion.a 
            href="https://www.linkedin.com/in/priyakholiya" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#EAF6F0] text-ink font-mono text-sm font-extrabold border-2 border-ink shadow-brutal rounded-2xl hover:bg-[#F1FAF6] hover:shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all w-full sm:w-auto min-w-[220px]"
          >
            <span>💼</span>
            <span>View LinkedIn</span>
          </motion.a>

        </div>

        {/* Info Row (Location & Status) */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-mono text-xs font-bold text-ink mt-10 bg-[#FFFDB5]/30 border border-dashed border-ink/40 px-6 py-3.5 rounded-2xl max-w-xl mx-auto select-none shadow-brutal-sm"
        >
          
          {/* Location Info */}
          <div className="flex items-center gap-2 hover:scale-[1.02] transition-transform duration-200 cursor-default">
            <span className="text-base select-none">📍</span>
            <span className="text-ink">India</span>
          </div>

          {/* Separator */}
          <span className="hidden sm:inline text-ink/30 select-none">•</span>

          {/* Status Info */}
          <div className="flex items-center gap-2.5 hover:scale-[1.02] transition-transform duration-200 cursor-default">
            <motion.span
              animate={{ 
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  "0 0 4px rgba(16, 185, 129, 0.4)",
                  "0 0 10px rgba(16, 185, 129, 0.8)",
                  "0 0 4px rgba(16, 185, 129, 0.4)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-emerald-500 inline-block"
            />
            <span className="text-ink">Open to New Opportunities</span>
          </div>

        </motion.div>

        {/* Footer Branding Sign Off */}
        <footer className="mt-24 border-t-2 border-ink pt-8 flex flex-col md:flex-row items-center justify-between gap-6 pb-6 text-center md:text-left">
          <div>
            <span className="font-display text-3xl font-bold text-ink select-none rotate-[-1deg] inline-block">
              priya kholiya
            </span>
            <p className="font-mono text-[10px] text-charcoal/80 mt-1">
              Designed with curiosity • Built with React • Crafted pixel by pixel.
            </p>
          </div>
          
          {/* Hand drawn signoff signature */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-coral">keep creating ✦</span>
            <div className="w-8 h-8 rounded-full border border-ink bg-yellowy flex items-center justify-center rotate-6">
              <span className="text-xs font-mono select-none">PK</span>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}
