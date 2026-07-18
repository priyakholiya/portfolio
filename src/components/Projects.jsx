import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarDoodle, HeartDoodle, SmileyDoodle, AsteriskDoodle, MagnifyingGlassDoodle, FolderDoodle } from './Doodles';
import { X, ExternalLink, Compass, Code, Settings } from 'lucide-react';

const projectsData = [
  {
    id: 'sanskriti',
    title: 'Sanskriti',
    caseFileLabel: 'CASE FILE : SANSKRITI',
    sub: 'Full Stack E-Commerce & Inventory Management Platform',
    image: '/sanskriti_project_new.jpg',
    badges: ['Solo Project', '3 Weeks', 'Responsive'],
    description: 'A premium full-stack e-commerce platform for handcrafted ethnic fashion, featuring a seamless shopping experience with an integrated inventory and admin management system.',
    overview: 'Designed and developed a full-stack e-commerce platform for premium ethnic fashion brands. The platform combines a modern shopping experience with a powerful inventory management system, allowing customers to browse products, place orders, and complete purchases while administrators manage inventory, products, orders, and customer inquiries from one centralized dashboard.',
    tech: ['Full Stack', 'E-Commerce', 'Responsive'],
    techStackTags: ['React', 'Vite', 'Java', 'Spring Boot', 'REST API', 'PostgreSQL', 'Cloudinary', 'Context API', 'GitHub'],
    link: 'https://sanskriti-frontend.vercel.app',
    rotation: '-rotate-2',
    color: 'bg-pinky',
    problemCard: {
      title: 'Problem',
      content: 'Traditional boutique businesses often rely on manual inventory tracking and disconnected systems, leading to stock mismatches, inefficient order management, and a poor online shopping experience.',
      color: 'bg-pinky'
    },
    solutionCard: {
      title: 'Solution',
      content: 'Built a responsive full-stack web application featuring a customer storefront, secure admin dashboard, real-time inventory management, dynamic product catalog, shopping cart, checkout workflow, and order management system.',
      color: 'bg-lilac'
    },
    impactCard: {
      title: 'Impact',
      content: [
        'Real-time inventory tracking',
        'Secure Admin Dashboard',
        'Variant-wise Stock Management',
        'Responsive Shopping Experience',
        'Cloud Image Storage',
        'Faster Product Management'
      ],
      color: 'bg-mint'
    },
    keyFeatures: {
      customer: [
        'Browse Products',
        'Product Details',
        'Variant Selection',
        'Shopping Cart',
        'Checkout',
        'Contact Form'
      ],
      admin: [
        'Dashboard Analytics',
        'Product Catalog',
        'Inventory Ledger',
        'Orders Management',
        'Customer Messages'
      ]
    },
    highlights: [
      'UI/UX Design',
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'Responsive Development'
    ],
    footerTech: 'React • Spring Boot • PostgreSQL • Cloudinary'
  },
  {
    id: 'restaurant',
    title: 'Restaurant Website',
    caseFileLabel: 'CASE FILE : RESTAURANT',
    sub: 'Trendy Street-Food Menu & Reservation Platform',
    image: '/restaurant_project.png',
    badges: ['Solo Project', '2 Weeks', 'Responsive'],
    description: 'A vibrant brutalist website for a street-food diner. The platform integrates interactive table bookings, live dish customizations, and smooth animations that make food ordering feel tactile and responsive.',
    overview: 'Designed and developed a vibrant brutalist website for a street-food diner. The platform integrates interactive table bookings, live dish customizations, and smooth animations that make food ordering feel tactile and responsive.',
    tech: ['Frontend', 'Interactive', 'Responsive'],
    techStackTags: ['React', 'Vite', 'Tailwind CSS', 'CSS Variables', 'Framer Motion', 'Firebase', 'GitHub'],
    link: 'https://chill-and-grill.vercel.app',
    rotation: 'rotate-3',
    color: 'bg-lilac',
    problemCard: {
      title: 'Problem',
      content: 'Local street diners struggle to capture reservation requests and showcase their daily specials interactively, losing tech-savvy customers to larger chains.',
      color: 'bg-pinky'
    },
    solutionCard: {
      title: 'Solution',
      content: 'Developed a custom brutalist web application with a live digital menu, variant customization flow, interactive booking system, and admin dashboard queue.',
      color: 'bg-lilac'
    },
    impactCard: {
      title: 'Impact',
      content: [
        'Tactile menu animations',
        'Real-time table reservation',
        'Custom dish variations picker',
        'Integrated Firebase database',
        'Brutalist brand identity',
        'Optimized page response times'
      ],
      color: 'bg-mint'
    },
    keyFeatures: {
      customer: [
        'Interactive Menu',
        'Live Customization',
        'Table Reservation',
        'Tactile Animations',
        'Mobile First Design',
        'Fast Load Speeds'
      ],
      admin: [
        'Reservation Queue',
        'Menu Item Management',
        'Customizer Variables',
        'Kitchen Printer Dashboard',
        'Inquiry Messages'
      ]
    },
    highlights: [
      'UI/UX Design',
      'Tactile Interactive Dev',
      'Real-time DB Integration',
      'Brutalist Brand Strategy',
      'Responsive Design'
    ],
    footerTech: 'React • Tailwind CSS • Framer Motion • Firebase'
  }
];

const PaperClip = ({ className = "" }) => (
  <svg 
    viewBox="0 0 24 48" 
    className={`w-7 h-14 stroke-[2.5] fill-none stroke-zinc-700 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.15)] pointer-events-none select-none z-30 ${className}`}
  >
    <path d="M8 32V12a6 6 0 0 1 12 0v22a10 10 0 0 1-20 0V16a4 4 0 0 1 8 0v16" />
  </svg>
);

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section id="projects" className="pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative">
      
      {/* Torn Edge Line Divider */}
      <div className="max-w-5xl mx-auto w-full border-t-2 border-dashed border-ink/40 mb-8" />

      {/* Different Doodles in Project Section */}
      <MagnifyingGlassDoodle className="absolute top-20 left-[16%] rotate-[-15deg] hidden lg:block animate-slow-bounce hover:scale-115 transition-transform duration-300 cursor-pointer" fill="#E2D4F0" />
      <FolderDoodle className="absolute top-14 right-[12%] rotate-[18deg] hidden lg:block animate-pulse hover:scale-115 hover:rotate-[24deg] transition-all duration-300 cursor-pointer" fill="#FFE066" />

      <div className="text-center mb-16 relative">
        
        <h2 className="font-display text-5xl md:text-6xl font-bold text-ink inline-block rotate-[-2deg] mb-4">
          Interactive Case Studies
        </h2>
        <p className="font-mono text-xs md:text-sm text-charcoal">
          A curated collection of UI/UX designs and full-stack web applications.
        </p>
      </div>

      {/* Projects Polaroid Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className={`bg-cream border-3 border-ink p-5 pb-8 w-full max-w-md shadow-brutal hover:shadow-brutal-lg transition-all duration-300 relative ${project.rotation}`}
          >
            {/* Washi Tape Accent */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 washi-tape px-8 py-1.5 border border-ink/30 rotate-[-1deg] text-xs font-mono font-bold text-ink z-10">
              {project.sub}
            </div>

            {/* Polaroid Photo Frame */}
            <div className="w-full border-2 border-ink overflow-hidden bg-white mb-6 aspect-[4/3] relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-cream border border-ink text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm">
                NEW ✦
              </div>
            </div>

            {/* Polaroid Description Block */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl font-extrabold text-ink rotate-[-1deg]">
                  {project.title}
                </h3>
              </div>

              <p className="font-body text-xs md:text-sm font-semibold text-charcoal leading-relaxed min-h-[60px]">
                {project.description}
              </p>

              {/* Tech Tag Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 bg-cream border-2 border-ink text-xs font-mono font-bold text-ink rounded-none shadow-brutal-sm select-none"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-ink/20">
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="flex-1 px-4 py-2.5 bg-yellowy text-ink font-mono font-bold text-xs border-2 border-ink shadow-brutal active:shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] text-center"
                >
                  Read Case Study 📖
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-coral text-cream font-mono font-bold text-xs border-2 border-ink shadow-brutal active:shadow-brutal-sm hover:translate-x-[1px] hover:translate-y-[1px] flex items-center justify-center gap-1.5"
                >
                  Live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scrapbook Case Study Modal (AnimatePresence) */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotate: -1.5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: 50, rotate: -1.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-[#FAF8F0] border-3 border-ink w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-[10px_10px_0px_rgba(20,20,20,1)] relative text-left my-8 select-none"
            >
              {/* Paperclip on top-left */}
              <PaperClip className="absolute top-[-24px] left-[28px] rotate-[12deg] z-30" />

              {/* Close Button as circular doodle sticker */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-coral text-cream border-2 border-ink shadow-brutal-sm flex items-center justify-center hover:scale-105 active:scale-95 z-20"
              >
                <X className="w-5 h-5 stroke-[3px]" />
              </button>

              {/* Binder Holes & Confidential Stamp */}
              <div className="w-full flex justify-between items-center mb-6 border-b-4 border-dashed border-ink/30 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-charcoal/20 border-2 border-ink shadow-inner" />
                  <div className="w-4.5 h-4.5 rounded-full bg-charcoal/20 border-2 border-ink shadow-inner" />
                  <div className="w-4.5 h-4.5 rounded-full bg-charcoal/20 border-2 border-ink shadow-inner" />
                  <span className="font-mono text-xs font-black text-coral bg-coral/10 border border-coral/30 px-2 py-0.5 ml-2 uppercase tracking-wider">
                    {activeCaseStudy.caseFileLabel}
                  </span>
                </div>
                <div className="font-display text-xs font-black border-2 border-red-500 text-red-500 px-3 py-1 rotate-[-8deg] tracking-widest uppercase">
                  CLASSIFIED
                </div>
              </div>

              {/* Modal Content */}
              <div className="space-y-8">
                
                {/* Title & Subtitle & Badges */}
                <div className="relative z-10">
                  <h3 className="font-display text-3xl md:text-4.5xl font-black text-ink">
                    {activeCaseStudy.title}
                  </h3>
                  <p className="font-mono text-xs md:text-sm text-charcoal/80 font-bold mt-1 max-w-xl">
                    {activeCaseStudy.sub}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeCaseStudy.badges.map((badge) => (
                      <span key={badge} className="px-2.5 py-1 bg-white border-2 border-ink rounded-full text-[10px] font-mono font-bold text-ink shadow-[1.5px_1.5px_0px_rgba(20,20,20,1)] select-none">
                        ✦ {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section: Project Overview */}
                <div className="space-y-4 relative z-10">
                  <h4 className="font-mono text-xs font-black text-ink bg-yellowy border border-ink/40 px-2.5 py-0.5 uppercase tracking-wider inline-block rotate-[-1deg]">
                    ✦ Project Overview
                  </h4>
                  
                  <div className="flex flex-col md:flex-row gap-6 bg-white border-2 border-ink p-4 shadow-brutal-sm relative">
                    <div className="w-full md:w-[42%] shrink-0 aspect-[4/3] overflow-hidden border-2 border-ink relative bg-neutral-100 shadow-inner">
                      <img 
                        src={activeCaseStudy.image} 
                        alt={activeCaseStudy.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-yellowy border border-ink text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm">
                        ACTIVE CASE FILE
                      </div>
                    </div>
                    <div className="flex-1 font-body text-sm font-semibold text-charcoal leading-relaxed pt-1">
                      {activeCaseStudy.overview}
                    </div>
                  </div>
                </div>

                {/* Section: Three Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  
                  {/* Card 1: Problem */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-[#FFF0F2] border-2 border-ink p-5 shadow-brutal-sm relative"
                  >
                    {/* Tape strip */}
                    <div className="absolute -top-2.5 left-6 w-12 h-4.5 bg-[#FFB3C6]/60 border border-ink/10 rotate-[-5deg] shadow-sm z-20" />
                    <h5 className="font-display text-[16px] font-black text-ink mb-2 border-b border-ink/20 pb-1">
                      {activeCaseStudy.problemCard.title}
                    </h5>
                    <p className="font-body text-xs font-semibold text-charcoal leading-relaxed">
                      {activeCaseStudy.problemCard.content}
                    </p>
                  </motion.div>

                  {/* Card 2: Solution */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-[#F3EBFD] border-2 border-ink p-5 shadow-brutal-sm relative"
                  >
                    {/* Tape strip */}
                    <div className="absolute -top-2.5 left-6 w-12 h-4.5 bg-[#C9B6F2]/60 border border-ink/10 rotate-[3deg] shadow-sm z-20" />
                    <h5 className="font-display text-[16px] font-black text-ink mb-2 border-b border-ink/20 pb-1">
                      {activeCaseStudy.solutionCard.title}
                    </h5>
                    <p className="font-body text-xs font-semibold text-charcoal leading-relaxed">
                      {activeCaseStudy.solutionCard.content}
                    </p>
                  </motion.div>

                  {/* Card 3: Impact */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-[#EBF7F2] border-2 border-ink p-5 shadow-brutal-sm relative"
                  >
                    {/* Tape strip */}
                    <div className="absolute -top-2.5 left-6 w-12 h-4.5 bg-[#A1E3C9]/50 border border-ink/10 rotate-[-2deg] shadow-sm z-20" />
                    <h5 className="font-display text-[16px] font-black text-ink mb-2 border-b border-ink/20 pb-1">
                      {activeCaseStudy.impactCard.title}
                    </h5>
                    <ul className="space-y-1">
                      {activeCaseStudy.impactCard.content.map((point) => (
                        <li key={point} className="font-body text-xs font-semibold text-charcoal flex items-start gap-1">
                          <span className="text-emerald-600 shrink-0">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                </div>

                {/* Section: Tech Stack */}
                <div className="space-y-3 relative z-10">
                  <h4 className="font-mono text-xs font-black text-ink bg-lilac border border-ink/40 px-2.5 py-0.5 uppercase tracking-wider inline-block rotate-[1deg]">
                    ✦ Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 bg-white border-2 border-ink p-3.5 shadow-brutal-sm">
                    {activeCaseStudy.techStackTags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-cream border border-ink text-xs font-mono font-bold text-ink hover:-translate-y-0.5 transition-transform duration-200 shadow-[1.5px_1.5px_0px_rgba(20,20,20,1)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section: Key Features */}
                <div className="space-y-3 relative z-10">
                  <h4 className="font-mono text-xs font-black text-ink bg-mint border border-ink/40 px-2.5 py-0.5 uppercase tracking-wider inline-block rotate-[-1.5deg]">
                    ✦ Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border-2 border-ink p-6 shadow-brutal-sm">
                    {/* Customer Facing */}
                    <div className="space-y-3">
                      <div className="border-b-2 border-dashed border-ink/20 pb-1 flex items-center gap-1.5">
                        <span className="text-sm">👤</span>
                        <span className="font-display text-base font-bold text-ink">Customer</span>
                      </div>
                      <ul className="space-y-2">
                        {activeCaseStudy.keyFeatures.customer.map((feat) => (
                          <li key={feat} className="font-mono text-xs font-semibold text-charcoal flex items-center gap-2 pl-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Admin Dashboard */}
                    <div className="space-y-3">
                      <div className="border-b-2 border-dashed border-ink/20 pb-1 flex items-center gap-1.5">
                        <span className="text-sm">🛡️</span>
                        <span className="font-display text-base font-bold text-ink">Admin</span>
                      </div>
                      <ul className="space-y-2">
                        {activeCaseStudy.keyFeatures.admin.map((feat) => (
                          <li key={feat} className="font-mono text-xs font-semibold text-charcoal flex items-center gap-2 pl-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Project Highlights */}
                <div className="space-y-3 relative z-10">
                  <h4 className="font-mono text-xs font-black text-ink bg-[#FFF3E0] border border-ink/40 px-2.5 py-0.5 uppercase tracking-wider inline-block rotate-[2deg]">
                    ✦ Project Highlights
                  </h4>
                  <div className="bg-[#FFF9C4]/80 border-2 border-ink p-5 shadow-brutal-sm rotate-[-0.5deg]">
                    <div className="font-display text-sm font-black text-ink mb-2 pb-1 border-b border-dashed border-ink/30">
                      Role
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {activeCaseStudy.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 p-1 px-2.5 bg-white border border-ink/45 text-[11px] font-mono font-bold text-ink shadow-[1px_1px_0px_rgba(20,20,20,1)] select-none">
                          <span className="text-coral">✦</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section: Modal Footer */}
                <div className="pt-5 flex flex-col sm:flex-row justify-between items-center border-t-2 border-dashed border-ink/40 gap-4 mt-6 relative z-10 select-none">
                  <div className="text-center sm:text-left space-y-1">
                    <div className="font-display text-sm font-black text-ink">
                      Designed & Developed by Priya Kholiya
                    </div>
                    <div className="font-mono text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                      {activeCaseStudy.footerTech}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <SmileyDoodle className="w-8 h-8 text-yellowy rotate-[12deg] hover:scale-110 transition-transform cursor-pointer" />
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
