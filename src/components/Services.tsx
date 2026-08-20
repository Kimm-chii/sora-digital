import { motion } from 'motion/react';
import { siteContent } from '../data/content';
import { SafeImage } from './SafeImage';

export function Services() {
  const { services } = siteContent;
  const servicesList = services.items || services.list || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0E0E10] text-white border-b border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <h2 
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-5 sm:mb-6 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {services.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto">
            {services.subtitle}
          </p>
        </motion.div>

        {/* Member Cards with Transparent Text Overlay */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={`service-card-${service.id}-${service.name}-${index}`}
              variants={itemVariants}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#161618] border border-zinc-800/80 hover:border-zinc-500 transition-all duration-300 shadow-lg flex flex-col justify-end"
            >
              {/* Full Background Photo */}
              <div className="absolute inset-0 z-0">
                <SafeImage 
                  src={service.image} 
                  alt={service.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Multi-Stop Transparent Gradient Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/80" />

              {/* Text Content Overlay */}
              <div className="relative z-20 p-5 flex flex-col justify-end h-full pointer-events-none">
                <div className="mt-auto">
                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-zinc-300 transition-colors">
                    {service.name}
                  </h3>

                  {/* Role */}
                  <p className="text-xs sm:text-sm font-medium text-zinc-300 mt-0.5 drop-shadow-md">
                    {service.role}
                  </p>

                  {/* Bio */}
                  {service.bio && (
                    <p className="text-xs text-zinc-400 font-normal mt-2 leading-relaxed italic border-t border-white/10 pt-2 drop-shadow-md">
                      {service.bio}
                    </p>
                  )}

                  {/* Tags Pill */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {service.tags.slice(0, 2).map((tag: string, tagIdx: number) => (
                        <span 
                          key={tagIdx}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md text-zinc-200 border border-white/10 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Marker */}
        <div className="mt-16 pt-8 border-t border-zinc-900/80 flex items-center justify-between text-xs text-zinc-500">
          <span className="uppercase tracking-widest font-mono text-[10px]">
            SORA DIGITAL
          </span>
          <span className="font-mono text-[11px] text-[#81708F]">
            {servicesList.length} OFFERINGS
          </span>
        </div>
      </div>
    </section>
  );
}
