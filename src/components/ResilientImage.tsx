import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#111111] via-[#1f1f1f] to-[#E31E24]/80 text-white p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Globe className="w-10 h-10 text-[#E31E24] mb-3 opacity-90" />
        <span className="font-display font-bold text-sm tracking-tight max-w-xs">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
