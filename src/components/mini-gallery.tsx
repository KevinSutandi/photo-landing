"use client"

import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { GRADUATION_PHOTOS, BASE_URL, MASONRY_BREAKPOINTS } from '@/constants/gallery';
import { useLightbox } from '@/hooks/useLightbox';
import GalleryImage from '@/components/gallery/GalleryImage';
import Lightbox from '@/components/gallery/Lightbox';

export default function MiniGallery() {
  const [isLoading, setIsLoading] = useState(true);

  // Create full image URLs
  const imageUrls = GRADUATION_PHOTOS.map(photo => `${BASE_URL}${photo}`);

  const {
    selectedImage,
    selectedIndex,
    isOpen,
    openLightbox,
    closeLightbox,
    navigateToPrevious,
    navigateToNext,
  } = useLightbox(imageUrls);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="py-20 px-6 bg-gradient-to-b from-cream to-warm-cream">
        <div className="flex justify-center items-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-soft-beige rounded-full animate-spin border-t-coffee"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-coffee rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-cream to-warm-cream">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-reveal-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 font-acumin-pro-bold">
            Moments That Matter
          </h2>
          <p className="text-xl text-dark-coffee max-w-3xl mx-auto leading-relaxed">
            A curated collection of my finest graduation photography work. Each image tells a story of achievement, joy, and new beginnings.
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
        <div className="text-center mt-16 animate-reveal-up-delay-2">
          <a
            href="https://gallery.kevinsutandi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-coffee hover:bg-dark-coffee text-warm-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 warm-shadow-lg"
          >
            <span className="mr-2">View Full Gallery</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
  );
}