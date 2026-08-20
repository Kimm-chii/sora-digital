import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectLabel?: string;
}

export function SafeImage({ src, alt, className = '', priority = false, aspectLabel }: SafeImageProps) {
  const [error, setError] = useState(false);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#141416]">
      {!error && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`w-full h-full object-cover ${className}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#18181c] to-[#0d0d0f] text-zinc-400 select-none">
          <span className="text-2xl sm:text-3xl font-bold tracking-widest text-zinc-600 uppercase font-mono">
            {aspectLabel || alt.slice(0, 2).toUpperCase()}
          </span>
          <span className="text-[10px] sm:text-[11px] text-zinc-600 font-medium uppercase tracking-widest mt-1.5 font-mono">
            Photo Pending
          </span>
        </div>
      )}
    </div>
  );
}
