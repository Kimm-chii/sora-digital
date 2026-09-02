import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { siteContent } from '../data/content';
import { SafeImage } from './SafeImage';

export function Services() {
  const { services } = siteContent;
  const servicesList = services.list || [];

  // Open the first item by default, or null if collapsed
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-[#0E0E10] text-white border-b border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-16">
        
        {/* Header Layout Matching Reference: Left Title Block, Right Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start lg:items-end pb-6 sm:pb-8 border-b border-zinc-900/80"
        >
          <div className="lg:col-span-7 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#81708F] uppercase block">
              WHAT WE DO
            </span>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-white leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {services.subtitle}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-zinc-400 font-light text-xs sm:text-sm md:text-base leading-relaxed">
              Our boutique studio crafts custom web solutions tailored to your specific needs and goals. Every site is built with modern tech and refined through editorial aesthetics.
            </p>
          </div>
        </motion.div>

        {/* Clean Accordion List */}
        <div className="divide-y divide-zinc-900/80 border-t border-b border-zinc-900/80">
          {servicesList.map((service, index) => {
            const isOpen = openId === service.id;
            const numberStr = String(index + 1).padStart(2, '0');

            return (
              <div 
                key={service.id} 
                className="group py-4 sm:py-6 transition-colors"
              >
                {/* Trigger Row */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer select-none group/btn py-1"
                >
                  <div className="flex items-center gap-3 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-zinc-500 tracking-wider">
                      {numberStr}.
                    </span>
                    <h3 
                      className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white group-hover/btn:text-[#81708F] transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {service.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-400 group-hover/btn:text-white transition-colors shrink-0 pl-2">
                    <span>{isOpen ? 'READ LESS' : 'READ MORE'}</span>
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 sm:pt-6 pb-2 pl-4 sm:pl-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                        <div className="md:col-span-8 space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#81708F] uppercase border border-[#81708F]/30 bg-[#81708F]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                              {service.role}
                            </span>
                          </div>
                          
                          <p className="text-zinc-300 font-light text-xs sm:text-sm leading-relaxed max-w-2xl">
                            {service.bio}
                          </p>

                          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                            {service.tags && service.tags.map((tag: string) => (
                              <span 
                                key={tag} 
                                className="text-[10px] sm:text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Subtle Right Preview Thumbnail */}
                        <div className="md:col-span-4 h-28 sm:h-32 rounded-lg overflow-hidden border border-zinc-800/60 relative group/img mt-2 md:mt-0">
                          <SafeImage 
                            src={service.image} 
                            alt={service.name} 
                            className="w-full h-full object-cover grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
