import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { SparkleDoodle, ScribbleUnderline } from './components/Doodles';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience'];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // triggers when the section is in the middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navItems = [
    { id: 'about', label: '01. ABOUT', href: '#about' },
    { id: 'skills', label: '02. SKILLS', href: '#skills' },
    { id: 'projects', label: '03. PROJECTS', href: '#projects' },
    { id: 'experience', label: '04. EXPERIENCE', href: '#experience' },
    { id: 'resume', label: '05. RESUME 📄', href: '/Priya_Kholiya_Resume.pdf', download: true },
  ];

  return (
    <div className="relative min-h-screen selection:bg-pinky selection:text-ink">

      {/* Vintage grain paper texture layer */}
      <div className="grain-overlay" />

      {/* Retro Navigation Header */}
      <header className={`sticky top-0 z-40 px-6 py-4 md:px-12 transition-all duration-300 ${scrolled
          ? 'bg-[#FDF6EC]/85 backdrop-blur-md border-b-3 border-ink shadow-md shadow-ink/5'
          : 'bg-[#FDF6EC]/95 border-b-3 border-ink'
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo brand */}
          <a href="#" className="font-display text-3xl font-black text-ink select-none flex items-center gap-1.5 hover:scale-102 transition-transform group">
            <span>priya.kholiya</span>
            <motion.span
              className="text-coral inline-block origin-center"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.2, 0.9, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              whileHover={{
                rotate: 360,
                scale: 1.3,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
            >
              ✦
            </motion.span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-bold text-ink">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  download={item.download ? "Priya_Kholiya_Resume.pdf" : undefined}
                  target={item.download ? "_blank" : undefined}
                  rel={item.download ? "noopener noreferrer" : undefined}
                  className="relative py-2 text-ink font-mono text-xs font-bold transition-all duration-200 hover:-translate-y-[2px] hover:text-coral"
                >
                  <span>{item.label}</span>

                  {/* Hand-drawn active highlight underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute inset-x-0 -bottom-2 h-3"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <ScribbleUnderline />
                    </motion.div>
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-4 py-2 bg-coral text-cream border-2 border-ink shadow-brutal hover:shadow-brutal-sm hover:scale-102 hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] transition-all font-mono text-xs font-bold whitespace-nowrap"
            >
              LET'S TALK 💌
            </a>
          </nav>

          {/* Mobile Nav Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border-2 border-ink bg-yellowy shadow-brutal-sm active:translate-x-[1px] active:translate-y-[1px] hover:bg-yellowy/90"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
          </button>

        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-ink mt-3 pt-4 pb-4 flex flex-col gap-3 font-mono text-xs font-bold text-ink bg-cream">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 border border-ink/10 hover:bg-lilac/25 transition-colors ${activeSection === 'about' ? 'bg-lilac/10 text-coral border-ink/20 font-extrabold' : ''}`}
            >
              01. ABOUT
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 border border-ink/10 hover:bg-pinky/25 transition-colors ${activeSection === 'skills' ? 'bg-pinky/10 text-coral border-ink/20 font-extrabold' : ''}`}
            >
              02. SKILLS
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 border border-ink/10 hover:bg-yellowy/25 transition-colors ${activeSection === 'projects' ? 'bg-yellowy/10 text-coral border-ink/20 font-extrabold' : ''}`}
            >
              03. PROJECTS
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 border border-ink/10 hover:bg-mint/25 transition-colors ${activeSection === 'experience' ? 'bg-mint/10 text-coral border-ink/20 font-extrabold' : ''}`}
            >
              04. EXPERIENCE
            </a>
            <a
              href="/Priya_Kholiya_Resume.pdf"
              download="Priya_Kholiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 border border-ink/10 text-coral hover:bg-coral/10 transition-colors"
            >
              05. RESUME 📄
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 bg-coral text-cream border-2 border-ink text-center shadow-brutal-sm hover:bg-coral/95 transition-colors mt-2"
            >
              LET'S TALK 💌
            </a>
          </div>
        )}
      </header>

      {/* Main Sections Content */}
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

    </div>
  );
}

export default App;
