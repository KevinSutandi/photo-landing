"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

const graduationPhotos = [
  'graduation-1.jpg',
  'graduation-3.jpg',
  'graduation-4.jpg',
  'graduation-5.jpg',
  'graduation-6.jpg',
  'graduation-7.jpg',
  'graduation-12.jpg',
  'graduation-8.jpg',
  'graduation-9.jpg',
  'graduation-10.jpg',
  'graduation-11.jpg',
  'graduation-15.jpg',
  'graduation-13.jpg',
  'graduation-14.jpg',
  'graduation-16.jpg',
  'graduation-2.jpg',
  'graduation-17.jpg',
  'graduation-18.jpg',
  'graduation-19.jpg',
  'graduation-20.jpg',
]

// Masonry breakpoints
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}

interface ImageState {
  loaded: boolean;
  error: boolean;
  retryCount: number;
}

export default function MiniGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [imageStates, setImageStates] = useState<Map<string, ImageState>>(new Map())

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setSelectedIndex(index)
    document.body.classList.add('menu-open') // Prevent body scroll
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedIndex(0)
    document.body.classList.remove('menu-open')
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (selectedIndex - 1 + graduationPhotos.length) % graduationPhotos.length
      : (selectedIndex + 1) % graduationPhotos.length

    setSelectedIndex(newIndex)
    setSelectedImage(`https://kevin-photos.fly.storage.tigris.dev/grad/${graduationPhotos[newIndex]}`)
  }

  const handleImageLoad = useCallback((imageSrc: string) => {
    setImageStates(prev => {
      const newMap = new Map(prev)
      newMap.set(imageSrc, { loaded: true, error: false, retryCount: 0 })
      return newMap
    })
  }, [])

  const handleImageError = useCallback((imageSrc: string) => {
    setImageStates(prev => {
      const newMap = new Map(prev)
      const currentState = newMap.get(imageSrc) || { loaded: false, error: false, retryCount: 0 }

      // Retry up to 3 times
      if (currentState.retryCount < 3) {
        newMap.set(imageSrc, {
          loaded: false,
          error: false,
          retryCount: currentState.retryCount + 1
        })

        // Retry after a delay
        setTimeout(() => {
          const img = document.querySelector(`img[src*="${imageSrc}"]`) as HTMLImageElement
          if (img) {
            img.src = imageSrc + `?retry=${currentState.retryCount + 1}`
          }
        }, 1000 * (currentState.retryCount + 1)) // Exponential backoff
      } else {
        newMap.set(imageSrc, { loaded: false, error: true, retryCount: currentState.retryCount })
      }

      return newMap
    })
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeLightbox()
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev')
        } else if (e.key === 'ArrowRight') {
          navigateImage('next')
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, selectedIndex])

  const OptimizedImage = ({ src, alt }: { src: string; alt: string }) => {
    const imageState = imageStates.get(src) || { loaded: false, error: false, retryCount: 0 }
    const [useUnoptimized, setUseUnoptimized] = useState(false)

    // If we've had errors, try unoptimized version
    useEffect(() => {
      if (imageState.error && imageState.retryCount >= 2) {
        setUseUnoptimized(true)
      }
    }, [imageState.error, imageState.retryCount])

    if (useUnoptimized) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto object-cover transition-all duration-300 ${imageState.loaded ? 'opacity-100' : 'opacity-0'
            }`}
          onLoad={() => handleImageLoad(src)}
          onError={() => handleImageError(src)}
          loading="lazy"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={400}
        height={600}
        className={`w-full h-auto object-cover transition-all duration-300 ${imageState.loaded ? 'opacity-100' : 'opacity-0'
          }`}
        onLoad={() => handleImageLoad(src)}
        onError={() => handleImageError(src)}
        loading="lazy"
        unoptimized={imageState.retryCount > 0} // Skip optimization on retry
        quality={imageState.retryCount === 0 ? 85 : 75} // Lower quality on retry
        sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
      />
    )
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-soft-beige rounded-full animate-spin border-t-coffee"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-2 h-2 bg-coffee rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}

        {/* Masonry Grid */}
        {!isLoading && (
          <div className="animate-reveal-up-delay-1">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid-column"
            >
              {graduationPhotos.map((photo, index) => {
                const imageSrc = `https://kevin-photos.fly.storage.tigris.dev/grad/${photo}`
                const imageState = imageStates.get(imageSrc) || { loaded: false, error: false, retryCount: 0 }

                return (
                  <div
                    key={photo}
                    className="masonry-item group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onClick={() => openLightbox(imageSrc, index)}
                  >
                    <div className="relative overflow-hidden rounded-lg warm-shadow-lg hover:warm-shadow-xl">
                      {/* Loading placeholder */}
                      {!imageState.loaded && !imageState.error && (
                        <div className="absolute inset-0 bg-soft-beige animate-pulse flex items-center justify-center z-10">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-8 h-8 border-2 border-coffee/30 rounded-full animate-spin border-t-coffee"></div>
                            {imageState.retryCount > 0 && (
                              <span className="text-xs text-coffee/60">
                                Retry {imageState.retryCount}/3
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Error state */}
                      {imageState.error && (
                        <div className="absolute inset-0 bg-soft-beige flex items-center justify-center z-10">
                          <div className="flex flex-col items-center space-y-2 text-coffee/60">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs text-center">
                              Failed to load<br />Click to retry
                            </span>
                          </div>
                        </div>
                      )}

                      <OptimizedImage
                        src={imageSrc}
                        alt={`Graduation photo ${index + 1}`}
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
                )
              })}
            </Masonry>
          </div>
        )}

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
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image - Use unoptimized for lightbox to avoid timeouts */}
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Graduation photo"
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg warm-shadow-2xl"
                style={{ maxWidth: '100%', maxHeight: '90vh' }}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {selectedIndex + 1} / {graduationPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}