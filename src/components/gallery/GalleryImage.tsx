'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryImageProps {
  src: string
  alt: string
  onClick: () => void
}

export default function GalleryImage({ src, alt, onClick }: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div
      className="masonry-item group transform cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="warm-shadow-lg hover:warm-shadow-xl relative overflow-hidden rounded-lg">
        {/* Loading placeholder */}
        {!isLoaded && !hasError && (
          <div className="bg-soft-beige absolute inset-0 z-10 flex animate-pulse items-center justify-center">
            <div className="border-coffee/30 border-t-coffee h-8 w-8 animate-spin rounded-full border-2"></div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="bg-soft-beige absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-coffee/60 flex flex-col items-center space-y-2">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs">Failed to load</span>
            </div>
          </div>
        )}

        <Image
          src={src}
          alt={alt}
          width={400}
          height={600}
          className={`h-auto w-full object-cover transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
        />

        {/* Overlay */}
        <div className="from-coffee/20 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        {/* Hover icon */}
        <div className="absolute top-4 right-4 flex h-8 w-8 scale-90 transform items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <svg
            className="text-coffee h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
