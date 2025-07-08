'use client'

import { useState, useEffect } from 'react'
import Masonry from 'react-masonry-css'
import {
  GRADUATION_PHOTOS,
  BASE_URL,
  MASONRY_BREAKPOINTS,
} from '@/constants/gallery'
import { useLightbox } from '@/hooks/useLightbox'
import GalleryImage from '@/components/gallery/GalleryImage'
import Lightbox from '@/components/gallery/Lightbox'

export default function MiniGallery() {
  const [isLoading, setIsLoading] = useState(true)

  // Create full image URLs
  const imageUrls = GRADUATION_PHOTOS.map((photo) => `${BASE_URL}${photo}`)

  const {
    selectedImage,
    selectedIndex,
    isOpen,
    openLightbox,
    closeLightbox,
    navigateToPrevious,
    navigateToNext,
  } = useLightbox(imageUrls)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="from-cream to-warm-cream bg-gradient-to-b px-6 py-20">
        <div className="flex items-center justify-center py-20">
          <div className="relative">
            <div className="border-soft-beige border-t-coffee h-16 w-16 animate-spin rounded-full border-4"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="bg-coffee h-2 w-2 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="from-cream to-warm-cream bg-gradient-to-b px-6 py-20" id="curated-gallery">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-reveal-up mb-16 text-center">
          <h2 className="text-charcoal font-acumin-pro-bold mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Moments That Matter
          </h2>
          <p className="text-dark-coffee mx-auto max-w-3xl text-xl leading-relaxed">
            A curated collection of my finest graduation photography work. Each
            image tells a story of achievement, joy, and new beginnings.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="animate-reveal-up-delay-1">
          <Masonry
            breakpointCols={MASONRY_BREAKPOINTS}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {imageUrls.map((imageSrc, index) => (
              <GalleryImage
                key={GRADUATION_PHOTOS[index]}
                src={imageSrc}
                alt={`Graduation photo ${index + 1}`}
                onClick={() => openLightbox(imageSrc, index)}
              />
            ))}
          </Masonry>
        </div>

        {/* View More Button */}
        <div className="animate-reveal-up-delay-2 mt-16 text-center">
          <a
            href="https://gallery.kevinsutandi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coffee hover:bg-dark-coffee text-warm-white warm-shadow-lg inline-flex transform items-center rounded-full px-8 py-4 font-medium transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">View Full Gallery</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && selectedImage && (
        <Lightbox
          imageSrc={selectedImage}
          currentIndex={selectedIndex}
          totalImages={imageUrls.length}
          onClose={closeLightbox}
          onPrevious={navigateToPrevious}
          onNext={navigateToNext}
        />
      )}
    </div>
  )
}
