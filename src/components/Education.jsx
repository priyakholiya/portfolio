import React from 'react';
import { motion } from 'framer-motion';
import { HeartDoodle } from './Doodles';

// Decorative components
const PaperClip = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 48" 
    className={`w-7 h-14 stroke-[2.5] fill-none stroke-zinc-700 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.15)] pointer-events-none select-none z-30 ${className}`}
  >
    <path d="M8 32V12a6 6 0 0 1 12 0v22a10 10 0 0 1-20 0V16a4 4 0 0 1 8 0v16" />
  </svg>
);

const MaskingTape = ({ className = "" }) => (
  <div 
    className={`h-7 w-32 bg-[#EADCC2]/75 border-x-2 border-dashed border-ink/20 rotate-[-1.5deg] backdrop-blur-[0.5px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] relative z-20 flex items-center justify-center select-none ${className}`}
  >
    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:3px_3px]" />
  </div>
);

const SpiralRing = ({ className = "" }) => (
  <div className={`flex justify-around items-center w-full px-6 pointer-events-none select-none ${className}`}>
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-neutral-100 border-2 border-ink shadow-inner" />
        <div className="w-1.5 h-6 bg-zinc-400 border-x border-ink rounded-full -mt-2.5 z-20 shadow-sm" />
      </div>
    ))}
  </div>
);

// High-Fidelity Brand Icons inside official formats
const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0a9.5 9.5 0 0 0-9.5 9.5C9.5 14.75 13.75 19 19 19h9.5V9.5A9.5 9.5 0 0 0 19 0z" fill="#F24E1E"/>
    <path d="M19 19a9.5 9.5 0 0 0-9.5 9.5c0 5.25 4.25 9.5 9.5 9.5h9.5V28.5A9.5 9.5 0 0 0 19 19z" fill="#A259FF"/>
    <path d="M9.5 38a9.5 9.5 0 0 0 0 19H19V38H9.5z" fill="#0ACF83"/>
    <path d="M28.5 19a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 28.5 0v19z" fill="#FF7262"/>
    <path d="M28.5 38a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 28.5 19v19z" fill="#1ABC9C"/>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" className="w-full h-full" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const HTML5Icon = () => (
  <svg viewBox="0 0 512 512" className="w-full h-full">
    <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
    <path fill="#EF652A" d="M256 472l151-42 33-388H256z" />
    <path fill="#EBEBEB" d="M256 208H181l-5-58h80v-54H121l16 166h119zM256 355l-65-17-4-50h-54l8 87 115 32z" />
    <path fill="#FFF" d="M256 208v54h70l-7 81-63 17v54l65-17 9-101 3-34 6-54zM256 96v54h129l5-54z" />
  </svg>
);

const CSS3Icon = () => (
  <svg viewBox="0 0 512 512" className="w-full h-full">
    <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
    <path fill="#33A9DC" d="M256 472l151-42 33-388H256z" />
    <path fill="#EBEBEB" d="M256 208H187l-4-45h73v-54H128l11 153h117zM256 355l-65-17-4-50h-54l8 87 115 32z" />
    <path fill="#FFF" d="M256 208v54h70l-7 81-63 17v54l65-17 9-101 3-34 6-54zM256 109v54h123l5-54z" />
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 512 512" className="w-full h-full">
    <rect width="512" height="512" fill="#F7DF1E" rx="32" />
    <path d="M294 399c0 20-5.8 33.6-17.3 40.7-11.4 7-29.2 10.3-53.3 10.1-23.7-.2-42.5-4.8-56.3-13.8v-50.7c15.1 11.2 31.9 16.8 50.4 16.8 19.8 0 29.7-7.4 29.7-22.1V182h63.2v217zM416 450c-26.3 0-48-8.2-64.9-24.6l32-40c11.6 10.6 24.3 15.9 38 15.9 16.2 0 24.3-6.5 24.3-19.4 0-12.8-9.4-20.9-28.2-24.3l-20.3-3.6c-29.7-5.3-44.6-21.7-44.6-49.2 0-18 6.5-32 19.6-42.1 13-10.1 30.5-15.1 52.3-15.1 21 0 39.1 5.9 54.3 17.6l-26.6 42.6c-9.6-7-19.9-10.6-30.8-10.6-13.1 0-19.6 4.9-19.6 14.6 0 10 7.8 15.5 23.3 18.5l20.4 4c32.7 6.4 49 22.3 49 47.7.1 19.2-6.5 34.3-19.8 45.4C463.8 444.4 443 450 416 450z" fill="#000" />
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#336791" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1 2c-.6 0-1.2.2-1.7 5-.5-.3-1.1-.5-1.7-.5-2.2 0-3.9 1.8-3.9 4v.2C3.1 6.8 2 8.7 2 11c0 3.3 2.7 6 6 6h1v1.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5V17h1c3.3 0 6-2.7 6-6 0-2.3-1.1-4.2-2.8-4.8V6c0-2.2-1.7-4-3.9-4z" />
  </svg>
);

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#21759B" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .006c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.637c-2.457 0-4.73-.81-6.574-2.17l5.228-15.19 5.378 15.116A10.743 10.743 0 0 1 12 22.643zm7.396-3.87L13.882 4.152a10.8 10.8 0 0 1 5.518 14.778zM2.164 12.185a10.75 10.75 0 0 1 1.9-5.918l6.736 18.528A10.743 10.743 0 0 1 2.164 12.185zm9.994-7.585c.783 0 1.503.35 1.503.95 0 1.05-1.503 1.95-1.503 3.65 0 .85.65 1.55 1.5 1.55.85 0 1.55-.7 1.55-1.55 0-1.7-1.55-2.6-1.55-3.65 0-.6.72-1.35 1.55-1.35.83 0 1.55.75 1.55 1.35 0 1.7-1.55 2.6-1.55 3.65 0 .85.65 1.55 1.5 1.55" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#F05032" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.3 10.9L13.1.7C12.2-.2 10.8-.2 9.9.7L.7 9.9c-.9.9-.9 2.3 0 3.2l10.2 10.2c.9.9 2.3.9 3.2 0l9.2-9.2c.9-.9.9-2.3 0-3.2zM12 18.4c-.8 0-1.5-.7-1.5-1.5 0-.2 0-.3.1-.5l-2.6-2.6c-.2.1-.3.1-.5.1-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5.5.1.7.3l2.6-2.6c-.1-.2-.1-.3-.1-.5 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .5-.3.9-.7 1.2l2.6 2.6c.3-.2.8-.3 1.2-.3.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5c-.5 0-.9-.3-1.2-.7L13.1 16c-.2.5-.6.9-1.1.9z" />
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.385 6.078L6.877 1.22c.383-.34 1-.068 1 .452v20.656c0 .52-.617.793-1 .452L1.385 17.92c-.255-.226-.4-.543-.4-.878V6.956c0-.335.145-.652.4-.878z" fill="#007ACC" />
    <path d="M18.773 1.34L7.877 10.597v2.806l10.896 9.257c.504.428 1.294.07 1.294-.593V1.933c0-.663-.79-1.021-1.294-.593z" fill="#1F9CF0" opacity="0.8" />
    <path d="M19.067 1.933L7.877 12v3.74l11.19-10.076a.546.546 0 0 0 .193-.41V1.933z" fill="#0065A9" />
    <path d="M19.067 22.067V18.33L7.877 12v-3.74L19.067 18.33a.546.546 0 0 0 .193.41V22.067z" fill="#007ACC" />
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#10A37F" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3 10.3a5.4 5.4 0 0 0-2.4-4.2 5.6 5.6 0 0 0-6.1-.3 5.4 5.4 0 0 0-4.6-2.5 5.5 5.5 0 0 0-5.1 3.5 5.4 5.4 0 0 0-1.7 4.7 5.6 5.6 0 0 0 2.4 4.2 5.5 5.5 0 0 0 6.1.2 5.4 5.4 0 0 0 4.6 2.5 5.5 5.5 0 0 0 5.1-3.5 5.4 5.4 0 0 0 1.7-4.8zm-9.3 8.3l-3.2-1.8c-.3-.2-.5-.5-.5-.9v-3.6l4.6 2.7v3.6zm-1.8-6.1L7 10.7V7c0-.4.2-.7.5-.9l3.2-1.8v3.6l-3.5 2.1zm5.3-1.4l-3.2-1.8 3.5-2V3.7c.3-.2.7-.2.9 0l3.2 1.8c.3.2.5.5.5.9v3.6l-4.9 2.8zm-1.8 2.5l-3.2-1.9 3.2-1.8 3.2 1.8-3.2 1.9zm-4.7 2.1l-3.2-1.8V10.2l3.2 1.8v3.7zm8.3-4.9l-3.2 1.8v-3.6l3.5-2v3.8z" />
  </svg>
);

const PencilDoodle = ({ className = '', fill = '#FFD8BE' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" fill={fill} />
  </svg>
);

const SpeechBubbleDoodle = ({ className = '', fill = '#E2D4F0' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`select-none ${className}`}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill={fill} />
    <path d="M9 10l2 2 4-4" strokeWidth="2.5" />
  </svg>
);

export default function Education() {
  return (
    <section 
      id="education" 
      className="pt-8 pb-16 px-6 md:px-[60px] max-w-[1440px] mx-auto relative overflow-hidden"
    >
      {/* Clean dashed divider line */}
      <div className="max-w-5xl mx-auto w-full border-t-2 border-dashed border-ink/30 mb-8" />

      {/* Heading - exactly in center, 520px wide, 10px top margin, subtitle 12px below */}
      <div className="flex flex-col items-center mb-16 relative">
        {/* Pencil Doodle */}
        <PencilDoodle className="absolute top-2 left-[24%] w-9 h-9 rotate-[-20deg] hidden md:block animate-float-slow hover:scale-120 hover:rotate-[-5deg] transition-all duration-300 ease-out cursor-pointer" fill="#FFD8BE" />
        {/* Speech Bubble Doodle */}
        <SpeechBubbleDoodle className="absolute -bottom-4 right-[22%] w-8 h-8 rotate-[15deg] hidden md:block animate-float-slow hover:scale-120 hover:rotate-[5deg] transition-all duration-300 ease-out cursor-pointer" fill="#E2D4F0" />
        
        <div className="w-full max-w-[520px] text-center mt-[10px] px-4">
          <h2 className="font-display text-4xl md:text-5xl font-black text-ink inline-block rotate-[-1deg]">
            My Learning Journey
          </h2>
          <p className="font-mono text-xs md:text-sm text-charcoal/80 mt-[12px] tracking-wider whitespace-nowrap">
            A glimpse into my education, skills & creative journey.
          </p>
        </div>
      </div>

      {/* Main 3-Column Layout Container */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-[28px] w-full relative z-10">
        
        {/* ================= LEFT COLUMN ================= */}
        {/* Width: 310px, Gap: 16px, Stacked vertically (reduced size) */}
        <div className="w-full lg:w-[310px] flex flex-col gap-[16px] shrink-0">
          
          {/* Card 1: Student Profile (rotate -2°, paper clip top-left, reduced padding and text sizes) */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.01, rotate: 0 }}
            className="w-full min-h-[170px] bg-[#FAF8F0] border-3 border-ink p-4 shadow-brutal rotate-[-2deg] relative flex flex-col gap-2.5 select-none"
          >
            <PaperClip className="absolute top-[-24px] left-[16px] rotate-[10deg]" />

            <div className="flex flex-col items-end w-full">
              <h3 className="font-display text-xl font-black text-ink leading-tight">Priya Kholiya</h3>
              <p className="font-mono text-[9.5px] md:text-[10.5px] text-coral uppercase tracking-widest mt-1 font-bold whitespace-nowrap">
                UI/UX Designer & Frontend Developer
              </p>
            </div>

            {/* Hand-written-like scrapbook bullet points */}
            <div className="space-y-2 font-mono text-[10px] text-charcoal leading-relaxed text-left border-l-2 border-coral/30 pl-2">
              <p className="font-medium"><span className="text-coral font-bold">✨</span> Passionate about crafting intuitive digital experiences through thoughtful design and clean code.</p>
              <p className="font-medium"><span className="text-coral font-bold">🎯</span> Focused on creating user-centered interfaces that are both functional and visually engaging.</p>
              <p className="font-medium"><span className="text-coral font-bold">🌱</span> Always learning, always improving.</p>
            </div>
          </motion.div>

          {/* Card 2: Combined Education Card (Pastel color, compact, reduced size to complement right side cards) */}
          <div className="relative w-full">
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="w-full min-h-[340px] bg-[#EBF5FC] border-3 border-ink shadow-brutal relative flex flex-col justify-between select-none"
            >
              {/* Masking tape on top */}
              <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 z-20">
                <MaskingTape />
              </div>

              {/* Lined paper decoration */}
              <div className="absolute inset-0 pointer-events-none opacity-25" style={{
                backgroundImage: 'linear-gradient(#A1C4FD 1px, transparent 1px)',
                backgroundSize: '100% 22px',
                backgroundPosition: '0 28px'
              }} />
              <div className="absolute left-[34px] top-0 bottom-0 w-[2px] bg-red-400 opacity-40 pointer-events-none" />

              <div className="relative z-10 p-3.5 pl-10 pt-5 flex flex-col gap-2.5 h-full flex-1">
                <div className="mt-1">
                  <span className="font-mono text-[9px] bg-ink text-white px-2 py-0.5 border border-ink font-bold uppercase tracking-wider">
                    Education History 📚
                  </span>
                </div>

                {/* Postgraduate Entry with Spacing & Year Shifted Left */}
                <div className="flex flex-col gap-1 mt-2.5">
                  <div className="flex justify-between items-start gap-2 pr-4">
                    <span className="font-mono text-[9px] bg-coral text-white px-1.5 py-0.5 border border-ink font-bold uppercase tracking-wider">
                      Postgraduate
                    </span>
                    <span className="font-mono text-[11px] text-ink font-black shrink-0">
                      2024 – 2026
                    </span>
                  </div>
                  <h4 className="font-display text-[14px] md:text-[15px] font-black text-ink leading-tight">
                    M.Sc. — Information Technology
                  </h4>
                  <p className="font-mono text-[11px] font-bold text-zinc-600">
                    BFIT, H.N.B. Garhwal University
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {['Web Dev', 'DBMS', 'Software Eng', 'Modern Dev'].map((subj) => (
                      <span key={subj} className="font-mono text-[9px] bg-white/85 text-ink border border-ink px-1.5 py-0.5 rounded shadow-[1px_1px_0px_rgba(0,0,0,0.15)] font-bold">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lined paper Divider */}
                <div className="border-t-2 border-dashed border-ink/20 my-0.5" />

                {/* Undergraduate Entry with Year Shifted Left */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-2 pr-4">
                    <span className="font-mono text-[9px] bg-mint text-ink px-1.5 py-0.5 border border-ink font-bold uppercase tracking-wider">
                      Undergraduate
                    </span>
                    <span className="font-mono text-[11px] text-ink font-black shrink-0">
                      2020 – 2023
                    </span>
                  </div>
                  <h4 className="font-display text-[14px] md:text-[15px] font-black text-ink leading-tight">
                    B.Sc. — Physics, Chemistry & Maths
                  </h4>
                  <p className="font-mono text-[11px] font-bold text-zinc-600">
                    SAPKM, Kumaun University
                  </p>
                  <p className="font-mono text-[10.5px] text-zinc-600 leading-relaxed border-l-2 border-mint pl-2 italic mt-0.5 font-bold">
                    Analytical thinking & structured problem-solving.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ================= CENTER COLUMN ================= */}
        {/* Width: 540px, Dominant focus */}
        <div className="w-full lg:w-[540px] flex flex-col gap-[28px] shrink-0 items-center">
          
          {/* Card 3: Skills & Strengths (Reduced height: 385px) */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.01 }}
            className="w-full min-h-[385px] bg-[#FCFAF5] border-3 border-ink rounded-lg p-5 shadow-[8px_8px_0px_0px_rgba(20,20,20,1)] relative flex flex-col justify-between select-none"
          >
            {/* Red border index margin */}
            <div className="absolute left-6 top-0 bottom-0 w-[1.5px] bg-red-300 pointer-events-none" />
            
            <div className="pl-6 h-full flex flex-col justify-between flex-1">
              <div>
                <div className="flex justify-between items-center border-b-2 border-ink pb-1.5 mb-3">
                  <h3 className="font-mono text-xs md:text-sm font-extrabold uppercase text-ink">
                    Skills & Strengths Inventory
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-coral">RATING</span>
                </div>

                <div className="space-y-1.5 font-mono text-[11px] md:text-xs text-ink">
                  {[
                    { name: "UI/UX Design (Figma, Wireframe & Prototype)", rating: 4 },
                    { name: "Frontend Development (HTML, CSS, JS, React)", rating: 5 },
                    { name: "Responsive Web Design", rating: 5 },
                    { name: "Database (SQL & PostgreSQL)", rating: 3 },
                    { name: "User Research & Design Thinking", rating: 4 },
                    { name: "Business Operations & Lead Gen", rating: 4 },
                    { name: "Market Research & Strategy", rating: 4 },
                    { name: "Problem Solving & Logical Thinking", rating: 4 }
                  ].map((skill, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-dashed border-ink/10 py-1">
                      <span className="font-bold text-ink mr-2">{skill.name}</span>
                      <span className="font-extrabold text-[13px] tracking-widest shrink-0 select-none whitespace-nowrap">
                        <span className="text-amber-500">{"★".repeat(skill.rating)}</span>
                        <span className="text-zinc-300">{"★".repeat(5 - skill.rating)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stamp / Seal block */}
              <div className="flex justify-between items-center mt-3">
                <div className="font-display text-xs font-bold text-ink/65">
                  Updated: Spring 2026
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-red-500/80 flex items-center justify-center rotate-[-12deg] text-center p-0.5">
                    <div className="w-full h-full rounded-full border border-red-500/60 flex items-center justify-center font-display text-[7.5px] font-black text-red-500 uppercase leading-none">
                      VERIFIED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Certifications (Pins on the right, larger text size, no verification ID) */}
          <div className="relative w-full">
            <div className="flex items-center justify-center w-full h-[175px] relative select-none">
              
              {/* Left Card */}
              <motion.div 
                whileHover={{ y: -8, zIndex: 30 }}
                className="w-[215px] h-[145px] bg-white border-3 border-ink p-3.5 shadow-brutal absolute left-[25px] lg:left-[20px] top-[5px] z-10 flex flex-col justify-between"
              >
                <PaperClip className="absolute top-[-26px] right-[10px] rotate-[10deg]" />
                
                <div>
                  <span className="text-[8.5px] font-mono font-bold bg-[#E8F5E9] text-emerald-800 px-1.5 py-0.2 border border-ink/20 uppercase">
                    SOCH FOUNDATION
                  </span>
                  <h4 className="font-display text-[14px] font-black text-ink mt-2 leading-tight">
                    Computer Admin 🏅
                  </h4>
                  <p className="font-mono text-[10px] text-charcoal/70 mt-0.5">
                    Soch Foundation Society
                  </p>
                </div>
                <div className="flex justify-end items-center text-[9.5px] font-mono text-charcoal/60 border-t border-dashed border-ink/10 pt-1.5 w-full">
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 border border-emerald-700/30 rounded">✔ Certified</span>
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div 
                whileHover={{ y: -6, zIndex: 30 }}
                className="w-[215px] h-[145px] bg-white border-3 border-ink p-3.5 shadow-brutal absolute right-[25px] lg:right-[20px] top-[20px] z-20 flex flex-col justify-between"
              >
                <PaperClip className="absolute top-[-26px] right-[25px] rotate-[15deg]" />
                
                <div>
                  <span className="text-[8.5px] font-mono font-bold bg-[#FFF3E0] text-amber-800 px-1.5 py-0.2 border border-ink/20 uppercase">
                    ONLINE PORTAL
                  </span>
                  <h4 className="font-display text-[14px] font-black text-ink mt-2 leading-tight">
                    HTML & CSS Foundations 🏅
                  </h4>
                  <p className="font-mono text-[10px] text-charcoal/70 mt-0.5">
                    Online Certification
                  </p>
                </div>
                <div className="flex justify-end items-center text-[9.5px] font-mono text-charcoal/60 border-t border-dashed border-ink/10 pt-1.5 w-full">
                  <span className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 border border-amber-700/30 rounded">✔ Completed</span>
                </div>
              </motion.div>

            </div>
          </div>


        </div>

      </div>
    </section>
  );
}
