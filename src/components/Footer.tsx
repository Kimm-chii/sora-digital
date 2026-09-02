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
    <footer className="bg-[#0A0A0C] text-white pt-16 pb-12 border-t border-zinc-900/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-10">
        
        {/* Top Row: Brand & Tagline on Left, Navigation Links on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-zinc-900/80">
          {/* Brand & Subtitle */}
          <div className="space-y-2 max-w-lg">
            <a
              id="footer-brand-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group inline-flex items-center gap-2.5 text-2xl sm:text-3xl font-light tracking-tight text-white hover:text-zinc-200 transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span>{global.siteName}.</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#81708F]"
              />
            </a>
            <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
              {footer.text}
            </p>
          </div>

          {/* Horizontal Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 md:pt-0">
            {global.navLinks.map((link) => (
              <a
                key={link.label}
                id={`footer-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm font-light text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Row: Copyright on Left, Back to top on Right */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-light text-zinc-500">
          <span>
            © {new Date().getFullYear()} {global.siteName}. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <span className="text-zinc-600 hidden sm:inline">{footer.disclaimer}</span>
            <button
              id="footer-back-to-top"
              type="button"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-xs focus:outline-none"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#81708F] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}


