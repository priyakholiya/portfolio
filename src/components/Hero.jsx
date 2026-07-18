import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  StarDoodle, 
  AsteriskDoodle, 
  HeartDoodle, 
  SmileyDoodle, 
  AvailableBadge,
  SparkleDoodle,
  ShortDiagonalArrow
} from './Doodles';

const ROLES = ["UI/UX Designer", "Frontend Developer"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = ROLES[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(300); // Brief pause before starting next word
          return;
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <section id="about" className="relative min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Hand-drawn Scrapbook Elements */}
      <StarDoodle className="absolute top-10 left-[10%] animate-slow-bounce text-yellowy" />
      <AsteriskDoodle className="absolute bottom-[15%] left-[5%] animate-wiggle-slow text-coral" />
      <SparkleDoodle className="absolute top-[20%] right-[35%] animate-pulse text-lilac" fill="#C9B6F2" />
      
      <StarDoodle className="absolute top-[10%] right-[25%] animate-slow-bounce text-yellowy w-8 h-8 hidden md:block" fill="#FFE066" />

      {/* Hero Left: Text Content */}
      <div className="flex-1 text-left z-10 relative">
        
        {/* Available for work badge */}
        <div className="mb-6 block">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <AvailableBadge />
          </motion.div>
        </div>

        {/* Tilted Marker Greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.15 }}
          className="relative inline-block origin-left mb-4 mt-8"
        >
          <h1 className="font-display text-7xl md:text-8xl font-extrabold text-ink tracking-wide leading-none select-none drop-shadow-sm pt-2">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="text-coral underline decoration-ink decoration-wavy decoration-3 underline-offset-8">
                Priya!
              </span>
              
              {/* Nice to meet you! Speech/Thought Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: [-3, 1, -3],
                  y: [0, -3, 0]
                }}
                transition={{ 
                  default: { type: "spring", stiffness: 100, delay: 0.1 },
                  rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
                }}
                className="absolute bottom-full mb-[-6px] right-2 bg-[#FCF5D8] border-2 border-ink py-1 px-3 shadow-brutal-sm font-mono text-[10px] md:text-xs font-bold text-ink hover:rotate-1 hover:scale-105 transition-all duration-300 select-none rounded-2xl z-20 whitespace-nowrap"
              >
                <span className="relative z-10 text-[10px] md:text-xs">Nice to meet you! 👋</span>
                {/* Speech Bubble Tail pointing to exclamation mark */}
                <div className="absolute -bottom-2 right-4 -translate-x-1/2 w-0 h-0 border-t-[8px] border-t-ink border-x-[6px] border-x-transparent">
                  <div className="absolute -top-[10px] -left-[4px] w-0 h-0 border-t-[6px] border-t-[#FCF5D8] border-x-[4px] border-x-transparent" />
                </div>
              </motion.div>
            </span>
          </h1>
        </motion.div>

        {/* Monospace Subhead */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm md:text-base font-bold bg-lilac/30 border-2 border-ink py-1.5 px-8 shadow-brutal inline-block rotate-1 mb-6 text-ink relative whitespace-nowrap"
        >
          {/* Invisible placeholder of the longest word to keep width/height fixed */}
          <span className="invisible select-none whitespace-nowrap" aria-hidden="true">
            Frontend Developer
          </span>
          {/* Absolutely positioned visible text */}
          <div className="absolute inset-0 flex items-center px-8 whitespace-nowrap">
            <span>{currentText || "\u200B"}</span>
            <span className="text-coral animate-pulse ml-0.5 font-extrabold">|</span>
          </div>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="block font-mono text-xs md:text-sm text-charcoal mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellowy/20 rounded-md border border-ink/40">
            📍 Uttarakhand, India
          </span>
        </motion.div>

        {/* Personality Sentence */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-charcoal max-w-xl leading-[1.8] tracking-wide mb-10 font-medium"
        >
          I design intuitive user experiences and build responsive web applications that combine creativity with functionality. Passionate about solving real-world problems through thoughtful design, clean code, and user-centered solutions.
        </motion.p>

        {/* Call to Action with Doodle Arrow */}
        <div className="flex flex-wrap gap-x-9 gap-y-6 items-center mt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, translateY: 2, translateX: 2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-coral text-cream font-bold text-lg rounded-none border-3 border-ink shadow-brutal transition-shadow hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            See my work{' '}
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </motion.a>

          <div className="relative inline-block">
            <motion.a
              href="/Priya_Kholiya_Resume.pdf"
              download="Priya_Kholiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, translateY: 2, translateX: 2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-cream hover:bg-[#F3EAD8] text-ink font-bold text-lg rounded-none border-3 border-ink shadow-brutal transition-shadow hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Download Resume 📄
            </motion.a>
            
            {/* Small Looping Arrow pointing to Download Resume */}
            <div className="hidden lg:block absolute right-1/2 -bottom-16 w-[170px] pointer-events-none">
              <div className="relative flex items-end justify-between">
                <span className="font-display text-lg text-coral select-none transform -rotate-[8deg] whitespace-nowrap mb-1">
                  click!
                </span>
                <ShortDiagonalArrow className="w-[120px] h-[40px] text-coral animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Composition Doodles between description and polaroid */}
        <HeartDoodle className="absolute right-[8%] top-[50%] w-6 h-6 text-pinky opacity-75 hidden xl:block animate-slow-bounce" fill="#FFB3C6" />
        <SparkleDoodle className="absolute left-[92%] top-[15%] w-6 h-6 text-yellowy opacity-70 hidden lg:block animate-pulse" fill="#FFE066" />

      </div>

      {/* Hero Right: Polaroid/Scrapbook Portrait Frame */}
      <div className="flex-1 flex justify-center items-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
          className="relative"
        >
          {/* Organic SVG Blob Shape Behind Polaroid */}
          <div className="absolute inset-0 -m-8 z-0 opacity-80 pointer-events-none">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-pinky">
              <path d="M30,10 C45,5 75,10 85,25 C95,40 90,70 75,85 C60,100 20,95 10,75 C0,55 15,15 30,10 Z" />
            </svg>
          </div>

          {/* Polaroid Card Frame */}
          <div className="relative bg-cream border-3 border-ink p-4 pb-12 w-72 md:w-80 shadow-brutal rotate-3 hover:rotate-[-1deg] hover:scale-[1.03] hover:shadow-xl hover:shadow-ink/10 transition-all duration-300 z-10">
            {/* Washi Tape Corner at top-left */}
            <div className="absolute -top-6 -left-8 washi-tape px-6 py-2 rotate-[-25deg] z-20 font-mono text-[10px] text-ink select-none font-bold">
              PRIYA KHOLIYA
            </div>
            
            {/* Washi Tape Corner at top-right */}
            <div className="absolute -top-5 -right-6 washi-tape-yellow px-5 py-1.5 rotate-[35deg] z-20 font-mono text-[10px] text-ink select-none font-bold">
              ✦ HELLO ✦
            </div>

            {/* Photo slot */}
            <div className="w-full aspect-square border-2 border-ink overflow-hidden bg-cream relative">
              <img 
                src="/piyu_img.png" 
                alt="Priya Kholiya Avatar" 
                className="w-full h-full object-cover grayscale-[10%] contrast-[105%]"
              />
              <div className="absolute inset-0 bg-coral/5 mix-blend-overlay" />
            </div>

            {/* Polaroid handwritten caption */}
            <div className="mt-4 text-center font-display text-2xl font-bold text-ink select-none leading-tight">
              creating experiences with code & creativity :)
            </div>
          </div>

          {/* Scattered mini stickers around polaroid */}
          <HeartDoodle className="absolute -bottom-6 -left-8 animate-slow-bounce text-pinky z-20" />
          <SmileyDoodle className="absolute -top-12 right-12 animate-wiggle-fast text-yellowy z-20" />
        </motion.div>
      </div>
    </section>
  );
}
