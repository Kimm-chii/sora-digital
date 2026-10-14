import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';

const COUNTRY_DATA = {
  '+1': { label: 'US/CA', max: 10 },
  '+44': { label: 'UK', max: 10 },
  '+61': { label: 'AU', max: 9 },
  '+63': { label: 'PH', max: 10 },
  '+91': { label: 'IN', max: 10 },
  '+81': { label: 'JP', max: 11 },
  '+33': { label: 'FR', max: 9 },
  '+49': { label: 'DE', max: 11 },
} as const;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState<keyof typeof COUNTRY_DATA>('+1');

  const handleSubmit = (e: FormEvent) => {
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
      <section className="pt-24 pb-12 min-h-[calc(var(--sh,1vh)*100)] flex items-center justify-center bg-[#0A0A0C]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#81708F]/20 bg-[#81708F]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#81708F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Inquiry Received
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Thank you for reaching out. We will review your project details and get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-[calc(var(--sh,1vh)*100)] flex items-center bg-[#0A0A0C] text-white">
      <div className="max-w-2xl w-full mx-auto px-4 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#81708F]" />
            <h2 className="text-[10px] font-mono tracking-[0.3em] text-[#81708F] uppercase">
              Start a Project
            </h2>
            <span className="w-6 h-[1px] bg-[#81708F]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Let's create something extraordinary.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
            Please fill out the form below to tell us more about your upcoming project or wedding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 bg-[#0E0E10] p-6 sm:p-8 rounded-xl border border-zinc-900 shadow-xl">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-[11px] font-mono tracking-widest text-zinc-400 uppercase">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="full_name"
                  required
                  pattern="[a-zA-Z.\s]+"
                  onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z.\s]/g, '') }}
                  className="w-full bg-transparent border-b border-zinc-800 pb-2 pt-1 text-base sm:text-sm text-white font-light focus:outline-none focus:border-[#81708F] transition-colors"
                  placeholder="e.g. Alex Morgan"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-[11px] font-mono tracking-widest text-zinc-400 uppercase">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-zinc-800 pb-2 pt-1 text-base sm:text-sm text-white font-light focus:outline-none focus:border-[#81708F] transition-colors"
                  placeholder="e.g. alex@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-[11px] font-mono tracking-widest text-zinc-400 uppercase">Phone</label>
                <div className="flex items-end gap-2">
                  <select 
                    value={countryCode} 
                    onChange={(e) => setCountryCode(e.target.value as keyof typeof COUNTRY_DATA)}
                    className="bg-transparent border-b border-zinc-800 pb-2 pt-1 text-base sm:text-sm text-white font-light focus:outline-none focus:border-[#81708F] transition-colors w-24 appearance-none"
                  >
                    {Object.entries(COUNTRY_DATA).map(([code, data]) => (
                      <option key={code} value={code} className="bg-[#0E0E10] text-white">
                        {code} {data.label}
                      </option>
                    ))}
                  </select>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    maxLength={COUNTRY_DATA[countryCode].max}
                    onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '') }}
                    className="w-full bg-transparent border-b border-zinc-800 pb-2 pt-1 text-base sm:text-sm text-white font-light focus:outline-none focus:border-[#81708F] transition-colors"
                    placeholder={`Max ${COUNTRY_DATA[countryCode].max} digits`}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="date" className="block text-[11px] font-mono tracking-widest text-zinc-400 uppercase">Wedding / Event Date</label>
                <input 
                  type="date" 
                  id="date"
                  name="wedding_date"
                  className="w-full bg-transparent border-b border-zinc-800 pb-2 pt-1 text-base sm:text-sm text-white font-light focus:outline-none focus:border-[#81708F] transition-colors [&::-webkit-calendar-picker-indicator]:invert-[0.8]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="project" className="block text-[11px] font-mono tracking-widest text-zinc-400 uppercase">Tell us about your project *</label>
              <textarea 
                id="project" 
                name="project_details"
                required
                rows={3}
                className="w-full bg-transparent border-b border-zinc-800 pb-2 pt-1 text-base sm:text-sm text-white font-light focus:outline-none focus:border-[#81708F] transition-colors resize-none"
                placeholder="Share your vision..."
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#81708F] text-white text-[10px] font-mono tracking-widest uppercase py-3 px-8 hover:bg-[#9c89ad] transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
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
