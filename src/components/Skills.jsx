import React from 'react';
import { motion } from 'framer-motion';
import { StarDoodle, AsteriskDoodle } from './Doodles';

const skillCategories = [
  {
    title: 'UI/UX & Design',
    color: 'bg-pinky',
    textColor: 'text-ink',
    skills: ['Figma', 'Wireframing', 'Information Architecture', 'Prototyping', 'Visual Design', 'User Research']
  },
  {
    title: 'Web Dev & Languages',
    color: 'bg-lilac',
    textColor: 'text-ink',
    skills: ['React.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Java', 'RESTful APIs']
  },
  {
    title: 'Tools & AI',
    color: 'bg-yellowy',
    textColor: 'text-ink',
    skills: ['Git & GitHub', 'VS Code', 'Claude / ChatGPT', 'Prompt Engineering', 'Canva Pro', 'Framer']
  },
  {
    title: 'Databases & Ops',
    color: 'bg-mint',
    textColor: 'text-ink',
    skills: ['MySQL', 'Node.js', 'PostgreSQL', 'REST API Integration', 'JSON']
  }
];

// Helper arrays for card rotations and pin positions
const cardRotations = ['-rotate-2', 'rotate-2', 'rotate-1', '-rotate-2'];
const pinPositions = ['left-[48%]', 'left-[53%]', 'left-[46%]', 'left-[51%]'];

// Helper to get random tilt angles to keep positions consistent on re-renders
const getRotationClass = (index) => {
  const rotations = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-4', '-rotate-4', 'rotate-1'];
  return rotations[index % rotations.length];
};

const SwirlLoopDoodle = ({ className = '', stroke = '#FF5C39' }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M10 30c10-25 20-25 20 0s-20 10-10-15" />
  </svg>
);

const LightBulbDoodle = ({ className = '', fill = '#FFF5B8' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M9 18h6m-6 3h6m-3-18a6 6 0 016 6c0 2.2-1 3.5-2 5a3.5 3.5 0 00-1 3v1H10v-1a3.5 3.5 0 00-1-3c-1-1.5-2-2.8-2-5a6 6 0 016-6z" fill={fill} />
  </svg>
);

export default function Skills() {
  return (
    <section id="skills" className="pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Subtle dashed section divider */}
      <div className="max-w-5xl mx-auto w-full border-t-2 border-dashed border-ink/40 mb-8" />

      <div className="text-center mb-10 relative">
        {/* Star Doodle (replaces orange doodle art) */}
        <StarDoodle className="absolute top-2 left-[22%] w-9 h-9 rotate-[-15deg] hidden md:block text-yellowy animate-float-slow hover:scale-120 transition-all duration-300 cursor-pointer" fill="#FFE066" />
        {/* Light Bulb Doodle */}
        <LightBulbDoodle className="absolute -bottom-4 right-[20%] w-8 h-8 rotate-[12deg] hidden md:block animate-float-slow hover:scale-120 hover:rotate-[25deg] transition-all duration-300 ease-out cursor-pointer text-yellowy hover:text-yellow-400" fill="#FFE066" />
        
        {/* Section title */}
        <h2 className="font-display text-5xl md:text-6xl font-bold text-ink inline-block rotate-[-2deg] mb-4">
          My Skill Wall
        </h2>
        <p className="font-mono text-xs md:text-sm text-charcoal/80 max-w-xl mx-auto block leading-relaxed mt-2 select-none">
          Every pinned note tells a little story about what I love building. Click or hover to explore!
        </p>
      </div>

      {/* Corkboard Container */}
      <div className="bg-[#EEDCB9] border-4 border-ink p-6 md:p-10 shadow-brutal relative rounded-sm overflow-hidden">
        {/* Corkboard texture patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#c8b28b_1.2px,transparent_1.2px)] [background-size:8px_8px] opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#b08f60_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {skillCategories.map((category, catIdx) => {
            const cardRotation = cardRotations[catIdx % cardRotations.length];
            
            return (
              <div 
                key={category.title} 
                className={`bg-[#F8EADA]/90 border-2 border-ink p-6 shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] relative rounded-sm h-full flex flex-col justify-between ${cardRotation}`}
              >
                {/* Wooden Board Header */}
                <div className="flex items-center gap-2 mb-6 border-b-2 border-ink pb-2">
                  <h3 className="font-mono text-base font-extrabold uppercase text-ink">
                    {category.title}
                  </h3>
                </div>

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center items-center flex-1">
                  {category.skills.map((skill, skillIdx) => {
                    const rotation = getRotationClass(skillIdx + catIdx);
                    return (
                      <motion.div
                        key={skill}
                        whileHover={{ 
                          scale: 1.03, 
                          y: -4, 
                          rotate: 0, 
                          zIndex: 50,
                          boxShadow: "4px 4px 6px rgba(20,20,20,0.2)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
                        className={`h-10 px-4 flex items-center justify-center border-2 border-ink shadow-[2px_2px_3px_rgba(20,20,20,0.15)] font-body font-bold text-sm ${category.color} ${category.textColor} ${rotation} cursor-pointer relative select-none`}
                      >
                        {/* Push Pin Circle Doodle for tag */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600 border border-ink shadow-sm flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-white/60 absolute top-0.5 left-0.5" />
                        </div>
                        
                        {skill}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Torn Paper Motivational Note on Corkboard */}
        <div className="mt-12 flex justify-center select-none">
          <motion.div 
            whileHover={{ 
              scale: 1.02, 
              y: -4, 
              rotate: 0,
              filter: "drop-shadow-[4px_8px_12px_rgba(20,20,20,0.18)]"
            }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            className="relative w-full max-w-2xl min-h-[56px] flex items-center justify-center px-16 py-4 filter drop-shadow-[2px_4px_6px_rgba(20,20,20,0.12)] rotate-[1.5deg]"
          >
            {/* Torn Paper Jagged Edge SVG Wrapper */}
            <svg
              viewBox="0 0 500 60"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <path
                d="M 4 8 L 22 6 L 45 7 L 63 6 L 85 9 L 102 7 L 125 8 L 148 6 L 170 7 L 195 6 L 212 9 L 235 7 L 258 8 L 280 6 L 305 8 L 322 7 L 345 9 L 368 6 L 390 8 L 415 6 L 432 9 L 455 7 L 478 8 L 496 6 L 495 20 L 497 32 L 494 45 L 496 54 L 478 52 L 460 55 L 442 53 L 420 54 L 398 52 L 380 55 L 358 53 L 335 55 L 312 52 L 290 54 L 272 52 L 250 55 L 228 53 L 205 54 L 188 52 L 170 55 L 152 53 L 130 54 L 112 52 L 95 55 L 78 53 L 55 54 L 38 52 L 20 55 L 4 53 L 5 42 L 3 30 L 5 18 L 4 8 Z"
                fill="#FAF8F0"
                stroke="#141414"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:3px_3px] rounded-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/3 to-transparent pointer-events-none" />

            {/* Beige Masking Tape on Top-Left */}
            <div className="absolute -top-2 left-6 w-12 h-4.5 bg-[#E5D3B3]/60 border border-ink/10 rotate-[-10deg] backdrop-blur-[0.5px] shadow-sm z-20">
              <div className="absolute top-0 bottom-0 left-0 w-1 border-r border-dashed border-ink/10" />
              <div className="absolute top-0 bottom-0 right-0 w-1 border-l border-dashed border-ink/10" />
            </div>

            {/* Note Content */}
            <div className="relative z-10 flex items-center justify-center w-full">
              <div className="flex items-center gap-3 font-mono text-xs md:text-sm font-extrabold text-ink leading-relaxed text-center">
                {/* Hand-drawn Sparkle on Left */}
                <svg className="w-5 h-5 text-[#FF5C39] shrink-0 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 Q12 12, 2 12 Q12 12, 12 22 Q12 12, 22 12 Q12 12, 12 2" />
                </svg>
                <span>Always learning and experimenting with new stacks & models.</span>
              </div>
            </div>
            
            {/* Hand-drawn Ink Doodles on Right */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none flex items-center gap-2">
              <svg className="w-8 h-5 text-ink/40" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 15 L15 5 M10 17 L20 7" />
                <path d="M28 8 L34 14 M34 8 L28 14 M31 7 L31 15 M27 11 L35 11" strokeWidth="1.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
