"use client"

import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export default function GalleryImage({ src, alt, onClick }: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      className="masonry-item group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg warm-shadow-lg hover:warm-shadow-xl">
        {/* Loading placeholder */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-soft-beige animate-pulse flex items-center justify-center z-10">
            <div className="w-8 h-8 border-2 border-coffee/30 rounded-full animate-spin border-t-coffee"></div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 bg-soft-beige flex items-center justify-center z-10">
            <div className="flex flex-col items-center space-y-2 text-coffee/60">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">Failed to load</span>
            </div>
          </div>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={400}
          height={600}
          className={`w-full h-auto object-cover transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Hover icon */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <svg className="w-4 h-4 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}