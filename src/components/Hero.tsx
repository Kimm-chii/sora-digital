import { useState } from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/content';
import { scrollToSection } from '../utils/scroll';
import type { MouseEvent } from 'react';

function HeroSlideImage({ src, index, total }: { src: string; index: number; total: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="h-full w-[100vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] shrink-0 overflow-hidden relative bg-[#0A0A0C]">
      {!failed ? (
        <img
          src={src}
          alt={`Hero Slide ${(index % total) + 1}`}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover opacity-60 grayscale-[15%] contrast-110"
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#16161a] via-[#0A0A0C] to-[#121216] opacity-80 flex items-center justify-center">
          <div className="w-full h-full border border-zinc-900/40 bg-radial from-[#1a1820]/30 to-transparent" />
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const { hero, services } = siteContent;
  
  const memberCount = services?.list?.length || 20;

  const heroImages = hero.backgroundImages && hero.backgroundImages.length > 0 
    ? hero.backgroundImages 
    : [hero.backgroundImage];
    
  // Duplicate images for seamless continuous sliding loop
  const carouselImages = [...heroImages, ...heroImages];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen min-h-[100dvh] h-screen h-[100dvh] flex flex-col overflow-hidden bg-[#0A0A0C]"
    >
      {/* Background Image Moving Carousel / Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="hero-carousel-track h-full">
          {carouselImages.map((src, index) => (
            <HeroSlideImage 
              key={`hero-slide-${index}`}
              src={src}
              index={index}
              total={heroImages.length}
            />
          ))}
        </div>
        {/* Editorial overlay gradient: heavier at edges for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/90 via-transparent to-[#0A0A0C]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/60 via-transparent to-[#0A0A0C]/60" />
      </div>

      {/* Editorial Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 sm:px-12 py-24 sm:py-28">
        
        {/* Top Edge Metadata */}
        <div className="flex justify-between items-start w-full">
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1.5 text-zinc-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase"
          >
            <span className="text-zinc-300">SORA DIGITAL</span>
            <span>PORTFOLIO</span>
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-1.5"
          >
            <div className="inline-flex items-center gap-2 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#81708F] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#81708F]" />
              </span>
              <span className="text-[10px] sm:text-xs font-light tracking-[0.22em] text-[#81708F] uppercase font-mono">
                {hero.statusBadge || "STATUS: ACTIVE"}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Edge */}
        <div className="flex flex-col sm:flex-row justify-between items-end w-full gap-8">
          
          {/* Bottom Left: Huge Asymmetric Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col mb-2 sm:mb-0"
          >
            <h1 
              className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-medium text-white tracking-tighter leading-[0.8] uppercase ml-[-0.05em]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {hero.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            {(hero.subtitle || hero.credit) && (
              <div className="flex flex-col gap-2.5 mt-6 sm:mt-10 max-w-[280px] sm:max-w-sm border-l border-[#81708F]/30 pl-4">
                {hero.subtitle && (
                  <p className="text-zinc-300 text-[11px] sm:text-xs font-light leading-relaxed tracking-wide">
                    {hero.subtitle}
                  </p>
                )}
                {hero.credit && (
                  <span className="text-[#81708F] font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-4">
                    {hero.credit}
                  </span>
                )}
                <a
                  href="#contact"
                  onClick={(e) => {
                    const href = '#contact';
                    if (window.location.hash !== href) {
                      window.location.hash = href;
                    } else {
                      e.preventDefault();
                      scrollToSection(href);
                    }
                  }}
                  className="inline-flex items-center justify-center bg-[#81708F]/10 border border-[#81708F]/40 text-[#81708F] px-6 py-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] hover:bg-[#81708F] hover:text-white transition-all w-fit"
                >
                  Get Started
                </a>
              </div>
            )}
          </motion.div>

          {/* Bottom Right: Metadata block & Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-row sm:flex-col justify-between sm:justify-end items-end sm:items-end text-right w-full sm:w-auto gap-8 sm:gap-16 pb-2 sm:pb-8"
          >
            {/* Metadata list */}
            <div className="flex flex-col gap-2 text-zinc-500 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-left sm:text-right">
              <span className="text-zinc-300">EST. {new Date().getFullYear()}</span>
              <span>{memberCount} SERVICES</span>
              <span>DIGITAL AGENCY</span>
            </div>

            {/* Subtle Scroll Indicator */}
            <a 
              href="#about"
              onClick={(e) => handleNavClick(e as any, '#about')}
              className="group flex flex-col items-end gap-4 cursor-pointer"
            >
              <span className="text-zinc-500 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase group-hover:text-zinc-300 transition-colors hidden sm:block">
                Scroll to Explore
              </span>
              <div className="w-[1px] h-12 sm:h-16 bg-zinc-800 relative overflow-hidden">
                <motion.div 
                  className="w-full h-1/2 bg-[#81708F]"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}