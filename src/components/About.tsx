import { motion } from 'motion/react';
import { siteContent } from '../data/content';
import { SafeImage } from './SafeImage';

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#0A0A0C] overflow-hidden">
      {/* Elegant Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-[#81708F]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <span className="w-8 h-[1px] bg-[#81708F]" />
              <h2 className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#81708F] uppercase">
                About // Vision
              </h2>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-8 leading-[1.1]"
                style={{ fontFamily: "'Outfit', sans-serif" }}>
              {about.title}
            </h3>

            <div className="flex flex-col gap-6">
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed tracking-wide">
                {about.description}
              </p>
              
              {/* Approach List */}
              <div className="mt-8 flex flex-col gap-4 border-l border-zinc-800 pl-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono tracking-[0.2em] text-white uppercase">Discovery</span>
                  <span className="text-zinc-500 text-sm font-light">Deep understanding of your narrative.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono tracking-[0.2em] text-white uppercase">Design</span>
                  <span className="text-zinc-500 text-sm font-light">Editorial aesthetics and high-end visual systems.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono tracking-[0.2em] text-white uppercase">Development</span>
                  <span className="text-zinc-500 text-sm font-light">Cutting-edge web technologies and performance.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-zinc-900 overflow-hidden group border border-zinc-800">
              <div className="absolute inset-0 bg-[#81708F]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              
              <SafeImage 
                src={about.image} 
                alt="About Us" 
                className="opacity-70 group-hover:opacity-100 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
              />
              
              {/* Elegant Inner Frame (Matte effect) */}
              <div className="absolute inset-4 sm:inset-6 border border-[#81708F]/20 z-20 pointer-events-none transition-colors duration-700 group-hover:border-[#81708F]/40" />
            </div>
            
            <div className="mt-4 flex justify-between items-center text-zinc-500 font-mono text-[9px] tracking-[0.2em] uppercase">
              <span>FIG 01. VISION</span>
              <span>SORA DIGITAL</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Marker */}
        <div className="mt-20 pt-8 border-t border-zinc-900 flex items-center justify-between text-zinc-500">
          <span className="uppercase tracking-[0.2em] font-mono text-[9px]">
            SORA DIGITAL
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#81708F]">
            BESPOKE WEB EXPERIENCES
          </span>
        </div>
      </div>
    </section>
  );
}


