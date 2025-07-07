"use client"

import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import AnimatedScribble from './AnimatedScribble'

export default function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null) // null means not yet determined

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint is 768px
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 30 // Slower transition for background effect
    },
    [
      Autoplay({
        delay: 5000, // Auto-slide every 5 seconds
        stopOnInteraction: false // Keep sliding even when user interacts
      }),
      Fade()
    ]
  )

  const images = [
    'https://kevin-photos.fly.storage.tigris.dev/Hero-2.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-1.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-3.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-4.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-5.jpg',
  ]

  const verticalImages = [
    'https://kevin-photos.fly.storage.tigris.dev/Hero-1-Vertical.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-2-Vertical.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-3-Vertical.jpg',
    'https://kevin-photos.fly.storage.tigris.dev/Hero-4-Vertical.jpg',
  ]

  // Choose images based on screen size
  const currentImages = isMobile ? verticalImages : images

  // Don't render until we know the viewport size to prevent flickering
  if (isMobile === null) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-warm-cream">
        {/* Loading state with warm overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-4xl font-medium text-coffee text-center max-w-4xl mb-6 drop-shadow-lg opacity-60 animate-gentle-pulse">
              Sydney Based Graduation Photographer
            </h1>
            <p className="text-coffee/80 text-center max-w-2xl mx-auto text-2xl opacity-60 animate-gentle-pulse">
              Capturing the moments that{' '}
              <span className="font-bold relative inline-block">
                matter
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {currentImages.map((src, index) => (
            <div key={index} className="embla__slide flex-none w-full h-full relative">
              <Image
                src={src}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                priority={index === 0} // Prioritize loading the first image
              />
              {/* Warm overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-gold/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-soft-gold/40 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent-gold/20 rounded-full animate-float"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center px-4 max-w-6xl mx-auto">
          {/* Main heading with warm styling */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center mb-6 drop-shadow-2xl animate-reveal-up leading-tight">
            Sydney Based Graduation Photographer
          </h1>

          {/* Subtitle with enhanced styling */}
          <div className="animate-reveal-up-delay-1">
            <p className="text-white/95 text-center text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-xl font-light leading-relaxed">
              Capturing the moments that{' '}
              <span className="font-bold relative inline-block text-warm-white">
                matter
                <AnimatedScribble />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-reveal-up-delay-3">
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-light">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}