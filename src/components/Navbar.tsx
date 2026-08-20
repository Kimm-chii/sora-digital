import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState, type MouseEvent } from 'react';
import { siteContent } from '../data/content';
import { scrollToSection } from '../utils/scroll';
import { Menu, X } from 'lucide-react';
import { BrandBlob } from './BrandBlob';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const isCurrentlyContact = window.location.hash === '#contact';
    window.location.hash = href;

    if (!isCurrentlyContact && href !== '#contact') {
      scrollToSection(href);
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
          isScrolled || mobileMenuOpen
            ? 'h-[60px] bg-[#0A0A0C]/80 backdrop-blur-lg border-b border-white/[0.04]'
            : 'h-[72px] bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          <a 
            id="nav-logo-link"
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group py-1 focus:outline-none"
          >
            {/* Minimal Editorial BrandBlob */}
            <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-sm border border-[#81708F]/20 bg-[#81708F]/[0.02]">
              <BrandBlob isLight={isScrolled || mobileMenuOpen} />
            </div>

            {/* Brand Name (Minimal Editorial) */}
            <div className="flex flex-col justify-center mt-0.5">
              <div className="flex items-center gap-1.5 leading-none mb-1">
                <span 
                  className={`text-xl sm:text-2xl font-medium tracking-tighter uppercase transition-colors ${
                    isScrolled || mobileMenuOpen ? 'text-white' : 'text-white drop-shadow-sm'
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {siteContent.global.siteName}
                </span>
              </div>
              <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] transition-colors leading-tight ${
                isScrolled || mobileMenuOpen ? 'text-[#81708F]' : 'text-[#81708F] drop-shadow-sm'
              }`}>
                DIGITAL AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {siteContent.global.navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] transition-colors duration-200 hover:text-white focus:outline-none ${
                  isScrolled
                    ? 'text-zinc-500'
                    : 'text-zinc-400 drop-shadow-sm'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Get Started Button Desktop */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 border border-[#81708F]/40 text-[#81708F] hover:bg-[#81708F] hover:text-white text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button - Minimalist */}
          <button
            id="mobile-menu-toggle-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`md:hidden flex items-center justify-center w-9 h-9 transition-colors duration-200 focus:outline-none ${
              isScrolled || mobileMenuOpen
                ? 'text-zinc-300 hover:text-white'
                : 'text-zinc-300 hover:text-white drop-shadow-sm'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer / Overlay - Compact & Sleek */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/20 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Dropdown Floating Card - Minimal Dark Scheme */}
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[66px] inset-x-3.5 z-50 md:hidden"
            >
              <div className="bg-[#0A0A0C]/98 backdrop-blur-2xl border border-zinc-900 rounded-none p-4 flex flex-col space-y-4 shadow-2xl">
                {siteContent.global.navLinks.map((link) => (
                  <a
                    key={link.label}
                    id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center justify-between py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all border-b border-zinc-900 last:border-0"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#81708F] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </a>
                ))}
                
                {/* Get Started Button Mobile */}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="mt-2 text-center bg-[#81708F]/10 border border-[#81708F]/20 text-[#81708F] py-3 text-[11px] font-mono uppercase tracking-[0.2em] hover:bg-[#81708F] hover:text-white transition-all"
                >
                  Get Started
                </a>

                <div className="pt-4 mt-2 border-t border-zinc-900 flex items-center justify-between text-[9px] text-zinc-600 font-mono tracking-[0.2em] uppercase">
                  <span>SORA DIGITAL</span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#81708F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81708F] animate-pulse" />
                    AVAILABLE
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

