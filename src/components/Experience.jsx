import React from 'react';
import { motion } from 'framer-motion';
import { Check, Briefcase } from 'lucide-react';
import { StarDoodle, AsteriskDoodle, SparkleDoodle, HeartDoodle, ScribbleUnderline } from './Doodles';

export default function Experience() {
  const bulletPoints = [
    'Developed and maintained responsive websites, implemented frontend enhancements, and managed content updates using WordPress and React.js.',
    'Designed wireframes, user flows, and intuitive interface layouts in Figma, translating business requirements into user-centered digital experiences.',
    'Executed LinkedIn outreach, email marketing campaigns, and lead generation strategies to support business development initiatives.',
    'Performed market research, competitor analysis, and operational reporting to assist strategic decision-making and business growth.',
    'Supported recruitment activities, cross-functional collaboration, and day-to-day business operations while contributing to digital product improvements.'
  ];

  return (
    <section id="experience" className="pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Very subtle background speckles / textures scattered */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-10">
        <svg className="w-full h-full text-charcoal/30" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12%" cy="18%" r="1" />
          <circle cx="14%" cy="20%" r="1.5" />
          <circle cx="88%" cy="72%" r="1" />
          <circle cx="86%" cy="75%" r="1.5" />
          <circle cx="48%" cy="8%" r="1" />
          <circle cx="52%" cy="92%" r="1" />
          <circle cx="22%" cy="85%" r="1.2" />
          <circle cx="78%" cy="15%" r="1.2" />
        </svg>
      </div>

      {/* Top-left Section Corner: Paper airplane with dotted path */}
      <div className="absolute top-24 left-10 md:left-20 w-24 h-24 pointer-events-none select-none hidden lg:block z-10 opacity-70">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path
            d="M10,80 C30,65 20,40 50,30 C65,25 75,35 80,45"
            stroke="#FF5C39"
            strokeWidth="1.5"
            strokeDasharray="4,4"
            strokeLinecap="round"
          />
          <g transform="translate(73, 40) rotate(-15)">
            <path
              d="M0,0 L20,-5 L15,10 L10,6 L6,8 L7,4 Z"
              fill="none"
              stroke="#FF5C39"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M15,-3.5 L6,8" stroke="#FF5C39" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Top-right Section Corner: Cluster of small stars and sparkles */}
      <div className="absolute top-10 right-10 md:right-20 pointer-events-none select-none hidden lg:block z-10 opacity-60 text-ink">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M10,20 L15,22 L10,24 L8,19 Z" fill="currentColor" />
          <circle cx="35" cy="15" r="1.5" fill="currentColor" />
          <circle cx="45" cy="25" r="2.5" fill="currentColor" />
          <path d="M30,40 C30,40 31,45 35,45 C31,45 30,50 30,50 C30,50 29,45 25,45 C29,45 30,40 30,40 Z" fill="#FFE066" stroke="#1C1A17" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Clean dashed divider line */}
      <div className="max-w-5xl mx-auto w-full border-t-2 border-dashed border-ink/40 mb-8 relative z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title & subtitle with doodles */}
        <div className="text-center mb-16 relative">

          <h2 className="font-display text-5xl md:text-6xl font-bold text-ink inline-block rotate-[1deg] mb-4">
            Experience Journal
          </h2>
          
          <div className="block">
            <p className="font-mono text-xs md:text-sm text-charcoal relative inline-block">
              My professional journey of transforming ideas into impactful digital experiences.
              {/* Small sparkle near subtitle */}
              <SparkleDoodle className="absolute -right-6 -top-2 w-4 h-4 text-yellowy/80 animate-pulse hidden md:inline-block" />
            </p>
          </div>
        </div>

        {/* Timeline Column Container */}
        <div className="relative pb-16">
          
          {/* Hand-drawn Dotted SVG Path running vertically behind entries */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-8 w-1 -translate-x-1/2 pointer-events-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line 
                x1="50%" y1="0%" x2="50%" y2="100%" 
                stroke="#141414" strokeWidth="3" 
                strokeDasharray="8,8" strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Single Entry row */}
          <div className="space-y-16">
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
              
              {/* Timeline Center Node Icon */}
              <div className="absolute left-6 md:left-1/2 w-10 h-10 -translate-x-1/2 bg-cream border-2 border-ink rounded-full flex items-center justify-center shadow-brutal-sm z-20">
                <div className="w-8 h-8 rounded-full bg-pinky flex items-center justify-center border border-ink/40 relative">
                  <Briefcase className="w-5 h-5 text-ink" />
                </div>
              </div>

              {/* Left Side: Main Diary Notepad Sheet Entry */}
              <div className="relative w-full md:w-[45%] pl-16 md:pl-0 md:text-left">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  className="bg-white border-2 border-ink shadow-brutal px-6 pt-10 pb-16 relative rotate-[-1deg] text-left"
                  style={{
                    backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px)',
                    backgroundSize: '100% 32px',
                    lineHeight: '32px'
                  }}
                >
                  {/* Notebook punch holes along the left edge */}
                  <div className="absolute left-2.5 top-0 bottom-0 flex flex-col justify-around py-4 w-3 pointer-events-none select-none">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-cream border border-ink/30 shadow-inner" />
                    ))}
                  </div>

                  {/* Corner Washi Tape (top-left) */}
                  <div className="absolute -top-3.5 -left-3.5 w-12 h-4 bg-pinky/30 border border-ink/10 rotate-[-30deg] backdrop-blur-[0.5px] z-10 hidden sm:block" />
                  
                  {/* Corner Washi Tape (bottom-right) */}
                  <div className="absolute -bottom-3.5 -right-3.5 w-12 h-4 bg-mint/30 border border-ink/10 rotate-[-15deg] backdrop-blur-[0.5px] z-10 hidden sm:block" />

                  {/* Torn Washi Tape Header */}
                  <div className="absolute -top-4 left-10 washi-tape-yellow px-4 py-1 border border-ink/30 rotate-[-2deg] text-xs font-mono font-bold text-ink z-10">
                    📌 Rajyn — Remote · January 2026 – June 2026
                  </div>

                  {/* Header Title spacing to match notepad lines */}
                  <div className="pt-6 pb-4 relative inline-block w-full">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-ink leading-tight relative z-10 whitespace-nowrap">
                      Web Developer & Business Development Associate
                    </h3>
                    {/* Hand-drawn underline strokes */}
                    <ScribbleUnderline />
                  </div>

                  {/* Bullet Checklist Stickers */}
                  <ul className="space-y-3 mt-4">
                    {bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                        {/* Hand-checked Sticker Look Checkbox */}
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-none border-2 border-ink bg-mint flex items-center justify-center shadow-brutal-sm rotate-[-4deg]">
                          <Check className="w-2.5 h-2.5 text-ink stroke-[3px]" />
                        </span>
                        <span className="text-xs sm:text-[13px] font-body text-charcoal font-medium">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Ink dots near card bottom-left */}
                  <div className="absolute bottom-1.5 left-8 pointer-events-none select-none text-ink/20 hidden md:block">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <circle cx="3" cy="5" r="1" />
                      <circle cx="8" cy="3" r="0.8" />
                      <circle cx="5" cy="12" r="0.8" />
                      <circle cx="12" cy="8" r="1.2" />
                    </svg>
                  </div>

                  {/* Tiny heart sticker in notepad margin */}
                  <span className="absolute bottom-2 right-4 text-xs font-mono text-coral/60 select-none flex items-center gap-1">
                    ❤ Rajyn team diary
                  </span>
                </motion.div>

                {/* Bottom-left doodle shifted adjacent to Rajyn card bottom-left corner */}
                <div className="absolute bottom-16 -left-20 w-20 h-20 pointer-events-none select-none hidden lg:block z-10 opacity-70 text-ink">
                  <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                    <path d="M15,25 C15,25 22,20 25,27 C28,20 35,25 35,25 C35,32 25,38 25,38 C25,38 15,32 15,25 Z" fill="#FFB3C6" stroke="#1C1A17" strokeWidth="1.5" />
                    <path d="M25,50 C40,55 50,45 55,30" stroke="#FF5C39" strokeWidth="2" strokeDasharray="3,3" strokeLinecap="round" />
                    <path d="M50,33 L55,30 L57,36" stroke="#FF5C39" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="5" cy="50" r="1" fill="currentColor" />
                    <circle cx="10" cy="55" r="1" fill="currentColor" />
                    <circle cx="8" cy="62" r="1" fill="currentColor" />
                    <circle cx="15" cy="58" r="1" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Right Side: Tech Stack & Key Achievement Column */}
              <div className="w-full md:w-[45%] pl-16 md:pl-0 mt-8 md:mt-0 flex flex-col gap-10 md:gap-14 relative z-20">
                
                {/* Tech Stack Pinned Sticky Note */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  className="bg-[#EBF3E8] border-2 border-ink p-5 shadow-brutal relative rotate-[-1.5deg] text-left w-full max-w-[240px] md:self-start md:-mt-6"
                >
                  {/* Push Pin + Tape Piece replaces plain tape */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
                    {/* Tiny tape piece under pin */}
                    <div className="absolute -top-1 -left-3 w-8 h-3.5 bg-white/30 border border-ink/10 rotate-[12deg] backdrop-blur-[0.5px]" />
                    {/* Pin SVG */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm rotate-[8deg]">
                      <circle cx="10" cy="10" r="5" fill="#FF5C39" stroke="#1C1A17" strokeWidth="2" />
                      <circle cx="8" cy="8" r="1.5" fill="white" fillOpacity="0.7" />
                      <path d="M10 15L7 21" stroke="#1C1A17" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Folded bottom-right corner effect */}
                  <div className="absolute -bottom-[2px] -right-[2px] w-5 h-5 pointer-events-none z-10">
                    <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                      <path d="M0,20 L20,0 L20,20 Z" fill="#FDF6EC" />
                      <path d="M0,20 L20,0 L0,0 Z" fill="#D2E3CD" stroke="#1C1A17" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  
                  <h4 className="font-mono text-base font-extrabold uppercase text-ink border-b-2 border-ink pb-1.5 mb-4 text-center relative">
                    {/* Tiny highlights near title */}
                    <svg className="absolute -top-1.5 left-2 w-5 h-2.5 text-coral/80" viewBox="0 0 24 12" fill="none">
                      <path d="M2,10 C8,4 16,4 22,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg className="absolute -top-1.5 right-2 w-5 h-2.5 text-coral/80 rotate-180" viewBox="0 0 24 12" fill="none">
                      <path d="M2,10 C8,4 16,4 22,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Tech Stack
                  </h4>
                  
                  <ul className="space-y-2 font-mono text-xs font-bold text-charcoal">
                    <li className="flex items-center gap-2"><span>🎨</span> Figma</li>
                    <li className="flex items-center gap-2"><span>⚛</span> React.js</li>
                    <li className="flex items-center gap-2"><span>🌐</span> WordPress</li>
                    <li className="flex items-center gap-2"><span>💻</span> JavaScript</li>
                    <li className="flex items-center gap-2"><span>🎯</span> HTML & CSS</li>
                    <li className="flex items-center gap-2"><span>📊</span> Market Research</li>
                    <li className="flex items-center gap-2"><span>📧</span> Email Marketing</li>
                    <li className="flex items-center gap-2"><span>🤝</span> Lead Generation</li>
                  </ul>

                  {/* Tiny sparkle near the top */}
                  <SparkleDoodle className="absolute -left-4 -top-3 w-4 h-4 text-lilac/80 animate-pulse pointer-events-none" />

                  {/* Tiny dots in bottom corner */}
                  <div className="absolute bottom-2 left-2 pointer-events-none select-none text-ink/15">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <circle cx="2" cy="3" r="0.8" />
                      <circle cx="6" cy="2" r="0.6" />
                      <circle cx="4" cy="8" r="0.8" />
                    </svg>
                  </div>

                  {/* Shifted doodle: star + dotted swirl at the right side of tech stack note in the middle of blank space */}
                  <div className="absolute top-[40%] right-[-130px] w-20 h-20 pointer-events-none select-none hidden lg:block z-10 opacity-70 text-ink rotate-[-15deg]">
                    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                      <path d="M50,20 L53,26 L60,26 L55,30 L57,36 L50,32 L43,36 L45,30 L40,26 L47,26 Z" fill="#FFE066" stroke="#1C1A17" strokeWidth="1.5" />
                      <path d="M30,60 C45,65 55,55 50,45 C45,35 30,40 35,50 C40,60 60,50 65,40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>

                {/* Key Achievement Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  className="bg-[#FFFDB5] border-2 border-ink p-4 shadow-brutal relative rotate-[3deg] text-left w-full max-w-[240px] rounded-sm md:self-end"
                >
                  {/* Decorative striped Tape overlay */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/40 border border-ink/20 rotate-[-5deg] backdrop-blur-[1px] flex justify-around items-center px-1">
                    <div className="w-0.5 h-full bg-ink/10 rotate-12" />
                    <div className="w-0.5 h-full bg-ink/10 rotate-12" />
                    <div className="w-0.5 h-full bg-ink/10 rotate-12" />
                    <div className="w-0.5 h-full bg-ink/10 rotate-12" />
                  </div>

                  {/* Circular Stamp-style Badge overlapping top-right corner */}
                  <div className="absolute -top-6 -right-6 w-14 h-14 pointer-events-none select-none z-10 rotate-[12deg] hidden sm:block">
                    <svg viewBox="0 0 60 60" fill="none" className="w-full h-full opacity-90">
                      <circle cx="30" cy="30" r="26" stroke="#FF5C39" strokeWidth="2" strokeDasharray="3,3" />
                      <circle cx="30" cy="30" r="22" stroke="#FF5C39" strokeWidth="1" />
                      <path id="stamp-path" d="M12,30 A18,18 0 0,1 48,30" fill="none" />
                      <text fill="#FF5C39" className="font-mono text-[6.5px] font-extrabold uppercase tracking-widest">
                        <textPath href="#stamp-path" startOffset="50%" textAnchor="middle">
                          ★ APPROVED ★
                        </textPath>
                      </text>
                      <polygon points="30,22 32,26 37,26 33,29 35,34 30,31 25,34 27,29 23,26 28,26" fill="#FF5C39" />
                    </svg>
                  </div>
                  
                  {/* Dotted connection line to timeline on mobile */}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-10 border-t-2 border-dotted border-ink/40 block md:hidden" />

                  <h4 className="font-mono text-xs md:text-sm font-extrabold uppercase text-coral tracking-wide border-b border-ink/20 pb-1.5 mb-2.5 text-center relative">
                    {/* Celebration/burst lines left & right */}
                    <svg className="absolute top-0 left-2 w-3.5 h-3.5 text-coral/60" viewBox="0 0 16 16" fill="none">
                      <path d="M3,8 L1,8 M4,4 L2.5,2.5 M8,3 L8,1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <svg className="absolute top-0 right-2 w-3.5 h-3.5 text-coral/60" viewBox="0 0 16 16" fill="none">
                      <path d="M13,8 L15,8 M12,4 L13.5,2.5 M8,3 L8,1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    ★ Key Achievement
                  </h4>
                  <p className="font-mono text-xs md:text-sm font-bold text-ink leading-relaxed text-center">
                    Worked across UI/UX Design,<br />
                    Frontend Development,<br />
                    Business Operations,<br />
                    and Marketing<br />
                    within a single role.
                  </p>

                  {/* Sketched star near top-left edge */}
                  <StarDoodle className="absolute -left-6 top-6 w-4 h-4 text-yellowy/80 pointer-events-none select-none" />

                  {/* Small hand-drawn corner strokes at bottom-right corner of card */}
                  <div className="absolute -bottom-3 -right-2 w-6 h-6 pointer-events-none select-none text-ink/45 hidden sm:block">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M4,18 L18,18 L18,4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M8,22 L22,22 L22,8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Subtle heart doodle on the side */}
                  <HeartDoodle className="absolute -left-3 -bottom-3 text-pinky/70 animate-wiggle-slow hidden md:block" />
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
