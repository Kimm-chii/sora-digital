import { siteContent } from '../data/content';
import { scrollToSection } from '../utils/scroll';
import { ArrowUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BrandBlob } from './BrandBlob';
import type { MouseEvent } from 'react';

export function Footer() {
  const { footer, global } = siteContent;

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="bg-[#0A0A0C] text-white pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-2.5 text-center md:text-left">
            <a
              id="footer-brand-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 rounded-xl p-1 -m-1"
            >
              <div className="relative flex items-center justify-center shrink-0">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-xl bg-zinc-800/25 blur-xs pointer-events-none"
                />
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-700/40 text-zinc-300 group-hover:border-zinc-500/80 transition-all shadow-inner">
                  <BrandBlob isLight={false} />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span 
                    className="text-2xl font-light tracking-wide text-white group-hover:text-zinc-200 transition-colors uppercase"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {global.siteName}
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block w-1 h-1 rounded-full bg-[#81708F] shadow-xs"
                  />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-[#81708F] transition-colors mt-0.5">
                  Digital Agency
                </span>
              </div>
            </a>
            <p className="text-zinc-500 text-sm max-w-xs">
              {footer.text}
            </p>
          </div>

          {/* Quick nav links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {global.navLinks.map((link) => (
              <a
                key={link.label}
                id={`footer-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              id="footer-back-to-top"
              type="button"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center space-x-2 text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-500 hover:text-white transition-all focus:outline-none"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-zinc-600 group-hover:text-[#81708F] group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>

        {/* Subtle Animated Satire / Disclaimer Notice */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center text-zinc-500">
          <span className="uppercase tracking-[0.2em] font-mono text-[9px]">
            © {new Date().getFullYear()} {global.siteName}
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#81708F]">
            {footer.disclaimer}
          </span>
        </div>
      </div>
    </footer>
  );
}


