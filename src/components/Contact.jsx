import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ArrowDoodle } from './Doodles';

// Custom minimal hand-drawn doodles with soft pastel colors
const PaperPlaneDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" fill="#BDE0FE" /> {/* Pastel Blue */}
  </svg>
);

const SparkleStarsDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M12 3c.1 3 .9 3.9 3.9 4.1-3 .1-3.9.9-4.1 3.9-.1-3-.9-3.9-3.9-4.1 3-.1 3.9-.9 4.1-3.9z" fill="#FFF5C4" /> {/* Pastel Yellow */}
    <path d="M5 16c.05 1.5.45 1.95 1.95 2.05-1.5.05-1.95.45-2.05 1.95-.05-1.5-.45-1.95-1.95-2.05 1.5-.05 1.95-.45 2.05-1.95z" fill="#FFD8BE" /> {/* Pastel Orange */}
  </svg>
);

const TinyHeartDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M12 21c-2-2-7-5.5-7-10.5C5 7 7.5 5 10 5c1.5 0 2.5 1 2 2 .5-1 1.5-2 3-2 2.5 0 5 2 5 5.5 0 5-5 8.5-7 10.5z" fill="#FFD8BE" /> {/* Pastel Orange */}
  </svg>
);

const SmileyDoodleLocal = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <circle cx="12" cy="12" r="9" fill="#FFF5B8" /> {/* Pastel Yellow */}
    <circle cx="9" cy="10" r="1.2" fill="#141414" />
    <circle cx="15" cy="10" r="1.2" fill="#141414" />
    <path d="M8 14c1.5 2 6.5 2 8 0" />
  </svg>
);

const EnvelopeDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="#E2D4F0" /> {/* Pastel Purple */}
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const LocationPinDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" fill="#D2F6C5" /> {/* Pastel Green */}
    <circle cx="12" cy="10" r="2.5" fill="#FAF6EE" stroke="#141414" strokeWidth="2" />
  </svg>
);

const CursorDoodle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="#C6DEF1" /> {/* Pastel Blue */}
    <path d="M13 13l6 6" />
  </svg>
);

const SquiggleDoodleLocal = ({ className = '', color = '#FFD8BE' }) => (
  <svg viewBox="0 0 40 20" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M2 10c4-4 8-4 12 0s8 4 12 0 8-4 12 0" />
  </svg>
);

const CursorArrowDoodle = ({ className = '' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`select-none ${className}`}
  >
    <path d="M3 4 L21 12 L3 20 L10 12 Z" />
  </svg>
);

// Sparkle particle config for success animation
const generateParticles = () => {
  return Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 300 - 150,
    y: Math.random() * -300 - 50,
    size: Math.random() * 20 + 10,
    type: ['star', 'heart', 'smiley'][i % 3],
    color: ['#FF5C39', '#FFB3C6', '#FFE066', '#C9B6F2'][i % 4],
    rotation: Math.random() * 360
  }));
};

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setParticles(generateParticles());
      setFormData({ name: '', email: '', message: '' });
      // Hide success notification after 5s
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background doodles */}
      <PaperPlaneWithLoopDoodle className="absolute top-16 left-8 w-14 h-10 rotate-[-12deg] opacity-70 hidden md:block" />
      <SunDoodle className="absolute top-12 right-12 w-8 h-8 opacity-70 hidden md:block" />
      <CloudDoodle className="absolute top-[40%] left-8 w-9 h-6 opacity-75 hidden lg:block" />
      <SwirlArrowDoodle className="absolute top-[50%] right-8 w-10 h-10 rotate-[-20deg] opacity-70 hidden lg:block" />
      <SparkleClusterDoodle className="absolute bottom-[25%] left-10 w-6 h-6 opacity-70 hidden md:block" />

      {/* Clean dashed divider line */}
      <div className="max-w-5xl mx-auto w-full border-t-2 border-dashed border-ink/40 mb-8" />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Sticker buttons & info */}
          <div className="space-y-8 text-left">
            
            <div className="relative inline-block">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-ink rotate-[-2deg] mb-4">
                Let's build something cool!
              </h2>
            </div>

            <p className="font-body text-base font-semibold text-charcoal leading-relaxed max-w-md text-left whitespace-pre-line">
              {`Whether you're looking for a thoughtful UI,
a responsive website, or a creative collaborator,
I'd love to hear about your project.`}
            </p>

            {/* Custom Contact Info Stickers */}
            <div className="flex flex-col gap-4 max-w-md w-full">
              
              {/* Email Card */}
              <motion.a 
                href="mailto:piya.kholiya6@gmail.com"
                whileHover={{ scale: 1.03, rotate: -1 }}
                className="flex items-center gap-4 p-4 bg-[#FCF5D8] border-2 border-ink shadow-brutal-sm rounded-none font-mono text-ink hover:bg-[#FDF9E7] transition-colors w-full"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm leading-none select-none">📧</span>
                  <span className="text-xs font-black text-coral uppercase tracking-wider">Email</span>
                </div>
                <div className="text-sm font-bold truncate">
                  piya.kholiya6@gmail.com
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a 
                href="https://www.linkedin.com/in/priyakholiya" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="flex items-center gap-4 p-4 bg-[#EAF6F0] border-2 border-ink shadow-brutal-sm rounded-none font-mono text-ink hover:bg-[#F1FAF6] transition-colors w-full"
              >
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm leading-none select-none">💼</span>
                  <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">LinkedIn</span>
                </div>
                <div className="text-sm font-bold truncate">
                  linkedin.com/in/priyakholiya
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div 
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                className="flex items-center justify-center gap-3 p-4 bg-[#EBF5FC] border-2 border-ink shadow-brutal-sm rounded-none font-mono text-ink select-none w-full"
              >
                <span className="text-xl leading-none shrink-0">📍</span>
                <div className="text-center">
                  <div className="text-sm font-bold">
                    India
                  </div>
                  <div className="text-[10px] text-charcoal/70 font-bold uppercase tracking-wider">
                    Available for Remote Work
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Retro sticky note status badge */}
            <div className="pt-2 flex justify-center w-full max-w-md">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ rotate: -2 }}
                className="bg-[#FFFDB5] border-2 border-ink p-4.5 shadow-brutal-sm w-full max-w-[240px] font-mono text-xs text-ink flex flex-col gap-1.5 text-center"
              >
                <div className="flex items-center justify-center gap-1.5 border-b border-ink/20 pb-1 mb-1">
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
                    className="w-2 h-2 rounded-full bg-emerald-500"
                  />
                  <span className="font-black uppercase tracking-wider text-[10px]">STATUS</span>
                </div>
                <div className="font-black text-sm text-ink leading-tight">
                  Available for<br />New Opportunities
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Side: Visual Form Sheet */}
          <div className="relative">
            <div className="bg-white border-3 border-ink p-6 md:p-8 shadow-brutal relative z-10 text-left rotate-[1.5deg]">
              
              {/* Torn notepad paper details */}
              <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-red-300 pointer-events-none" />
              
              <h3 className="font-mono text-base font-extrabold uppercase text-ink border-b-2 border-ink pb-2 mb-6">
                ✉ Drop Me A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10 font-mono text-xs font-bold text-ink">
                <div>
                  <label className="block mb-1.5 uppercase text-charcoal/80">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#FAF6EE] border-2 border-ink p-3 rounded-none focus:outline-none focus:bg-white text-sm font-bold text-ink placeholder:font-normal placeholder:text-charcoal/40"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 uppercase text-charcoal/80">Email / Contact</label>
                  <input 
                    type="text" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Where can I reply?"
                    className="w-full bg-[#FAF6EE] border-2 border-ink p-3 rounded-none focus:outline-none focus:bg-white text-sm font-bold text-ink placeholder:font-normal placeholder:text-charcoal/40"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 uppercase text-charcoal/80">Message</label>
                  <textarea 
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={`Tell me about your idea,
project goals,
timeline or anything
you'd like to build together.`}
                    className="w-full bg-[#FAF6EE] border-2 border-ink p-3 rounded-none focus:outline-none focus:bg-white text-sm font-bold text-ink resize-none placeholder:font-normal placeholder:text-charcoal/40"
                  />
                </div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-coral text-cream border-2 border-ink shadow-brutal text-sm font-extrabold uppercase flex items-center justify-center gap-2 hover:bg-[#FF6D4E] transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center gap-2">
                      Let's Connect
                      <CursorArrowDoodle className="w-4 h-4" />
                    </span>
                  )}
                </motion.button>
              </form>

              {/* Success Sparkle Particles */}
              <AnimatePresence>
                {submitted && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                    {particles.map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 1, scale: 0.2, x: 0, y: 0 }}
                        animate={{ opacity: 0, scale: 1.5, x: p.x, y: p.y }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="absolute text-yellowy text-lg select-none"
                        style={{ fontSize: p.size }}
                      >
                        ✦
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ scale: 0, rotate: 10 }}
                      animate={{ scale: 1, rotate: -2 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-36 left-4 right-4 bg-mint border-2 border-ink p-4 shadow-brutal font-mono text-xs font-bold text-ink text-center z-30"
                    >
                      <div className="flex justify-center mb-1">
                        <Sparkles className="w-5 h-5 text-emerald-800 animate-pulse" />
                      </div>
                      ✦ MESSAGE SENT SUCCESSFULLY! ✦ <br />
                      Priya will reach back shortly :)
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

              {/* Small Note Below Form */}
              <p className="text-center font-display text-base text-charcoal/60 mt-4 leading-normal select-none">
                Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

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
