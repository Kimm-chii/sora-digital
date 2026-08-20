import { motion } from 'motion/react';

interface BrandBlobProps {
  isLight?: boolean;
  className?: string;
}

export function BrandBlob({ isLight = false, className = '' }: BrandBlobProps) {
  return (
    <div className={`relative flex items-center justify-center ${className} w-5 h-5`}>
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className={`w-full h-full transition-colors duration-300 ${
          isLight ? 'text-[#81708F]' : 'text-[#A391AF]'
        }`}
      >
        <path
          d="M12 0C12 5.5 16.5 10 22 10V14C16.5 14 12 18.5 12 24H10C10 18.5 5.5 14 0 14V10C5.5 10 10 5.5 10 0H12Z"
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
}
