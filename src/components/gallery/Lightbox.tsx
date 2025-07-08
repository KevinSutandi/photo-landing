'use client'

import { useEffect } from 'react'

interface LightboxProps {
  imageSrc: string
  currentIndex: number
  totalImages: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export default function Lightbox({
  imageSrc,
  currentIndex,
  totalImages,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrevious()
      if (e.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('menu-open') // Prevent body scroll

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('menu-open')
    }
  }, [onClose, onPrevious, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <div className="relative flex h-full w-full items-center justify-center p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrevious}
          className="absolute top-1/2 left-6 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute top-1/2 right-6 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Main Image */}
        <div className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt="Graduation photo"
            className="warm-shadow-2xl h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
            style={{ maxWidth: '100%', maxHeight: '90vh' }}
          />
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>
      </div>
    </div>
  )
}
