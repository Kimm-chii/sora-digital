import { motion } from 'motion/react';
import { useEffect } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export function Intro({ onComplete }: IntroProps) {
  useEffect(() => {
    // 3 seconds intro animation total duration
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0C]"
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-3"
        >
          {/* Rotating 4-point star */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            className="w-4 h-4 bg-[#81708F]"
            style={{ clipPath: "polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)" }}
          />
          <span
            className="text-[11px] sm:text-xs font-medium tracking-[0.25em] text-zinc-200 uppercase"
            style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif" }}
          >
            SORA DIGITAL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-wider"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Bespoke <span className="font-semibold text-white">Digital Experiences</span>
        </motion.h1>

        {/* Minimal Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#81708F] to-transparent origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          className="text-base sm:text-lg md:text-xl font-normal text-[#81708F] tracking-[0.3em] pl-[0.3em]"
        >
          Welcome.
        </motion.p>
      </div>
    </motion.div>
  );
}
