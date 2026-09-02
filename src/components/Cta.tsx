import { scrollToSection } from '../utils/scroll';
import type { MouseEvent } from 'react';

export function Cta() {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = '#contact';
    if (window.location.hash !== href) {
      window.location.hash = href;
    } else {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <section className="py-20 border-t border-zinc-900/80 bg-[#0A0A0C] text-center px-6">
      <div className="max-w-xl mx-auto space-y-5">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#81708F] uppercase">
          Start a Conversation
        </span>
        <h2 
          className="text-2xl sm:text-3xl font-light text-white tracking-wide leading-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Ready to bring your vision to life?
        </h2>
        <div className="pt-2">
          <a
            href="#contact"
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-[#81708F]/10 border border-[#81708F]/40 text-[#81708F] hover:bg-[#81708F] hover:text-white text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase py-3 px-7 transition-all rounded-sm"
          >
            <span>Start Your Project</span>
            <span className="text-current">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
