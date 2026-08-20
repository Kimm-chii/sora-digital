import { motion } from 'motion/react';
import { siteContent } from '../data/content';
import { SafeImage } from './SafeImage';
import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const { portfolio } = siteContent;

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0E0E10] border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5">
            {portfolio.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
            {portfolio.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {portfolio.timeline.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-20 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl bg-[#161618] shadow-md border border-zinc-800">
                  <SafeImage 
                    src={item.image} 
                    alt={item.title} 
                    className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover"
                    aspectLabel={item.year}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 flex flex-col justify-center items-start"
              >
                <span className="inline-block text-[#81708F] font-bold tracking-widest text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                  {item.year}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-5">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
                  {item.description}
                </p>
                {/* Optional Project Link */}
                {item.link && (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-300 hover:text-white transition-colors"
                  >
                    <span className="border-b border-transparent group-hover:border-[#81708F] transition-colors pb-0.5">
                      View Project
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#81708F] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Marker */}
        <div className="mt-16 pt-8 border-t border-zinc-900/80 flex items-center justify-between text-xs text-zinc-500">
          <span className="uppercase tracking-widest font-mono text-[10px]">
            SORA DIGITAL
          </span>
          <span className="font-mono text-[11px] text-[#81708F]">
            {portfolio.timeline.length} FEATURED WORKS
          </span>
        </div>
      </div>
    </section>
  );
}

