import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center bg-[#0A0A0C]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-[#81708F]/20 bg-[#81708F]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#81708F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Inquiry Received
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Thank you for reaching out. We will review your project details and get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen bg-[#0A0A0C] text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-[#81708F]" />
            <h2 className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#81708F] uppercase">
              Start a Project
            </h2>
            <span className="w-8 h-[1px] bg-[#81708F]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Let's create something extraordinary.
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Please fill out the form below to tell us more about your upcoming project or wedding. We tailor every experience to your unique narrative.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 bg-[#0E0E10] p-8 sm:p-10 rounded-2xl border border-zinc-900 shadow-2xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="full_name"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 pt-2 text-white font-light focus:outline-none focus:border-[#81708F] transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 pt-2 text-white font-light focus:outline-none focus:border-[#81708F] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 pt-2 text-white font-light focus:outline-none focus:border-[#81708F] transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase">Wedding / Event Date</label>
                <input 
                  type="date" 
                  id="date"
                  name="wedding_date"
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 pt-2 text-white font-light focus:outline-none focus:border-[#81708F] transition-colors [&::-webkit-calendar-picker-indicator]:invert-[0.8]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="block text-xs font-mono tracking-widest text-zinc-400 uppercase">Tell us about your wedding / project *</label>
              <textarea 
                id="project" 
                name="project_details"
                required
                rows={4}
                className="w-full bg-transparent border-b border-zinc-800 pb-3 pt-2 text-white font-light focus:outline-none focus:border-[#81708F] transition-colors resize-none"
                placeholder="Share your vision, specific requirements, and any questions..."
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#81708F] text-white text-xs font-mono tracking-widest uppercase py-4 px-10 hover:bg-[#9c89ad] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Started'}
              </button>
            </div>
            
          </form>
        </motion.div>

      </div>
    </section>
  );
}
