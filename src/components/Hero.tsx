'use client'

import { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import AnimatedScribble from './hero/AnimatedScribble'

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
      duration: 30, // Slower transition for background effect
    },
    [
      Autoplay({
        delay: 5000, // Auto-slide every 5 seconds
        stopOnInteraction: false, // Keep sliding even when user interacts
      }),
      Fade(),
    ],
  )

  const images = [
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-2.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-1.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-3.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-4.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-5.jpg`,
  ]

  const verticalImages = [
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-1-Vertical.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-2-Vertical.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-3-Vertical.jpg`,
    `${process.env.NEXT_PUBLIC_CDN_URL}/Hero-4-Vertical.jpg`,
  ]

  // Choose images based on screen size
  const currentImages = isMobile ? verticalImages : images

  // Don't render until we know the viewport size to prevent flickering
  if (isMobile === null) {
    return (
      <div className="bg-warm-cream relative h-screen w-full overflow-hidden">
        {/* Loading state with warm overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <div className="mx-auto max-w-6xl px-4 text-center">
            {/* Main heading with warm styling */}
            <h1 className="animate-reveal-up mb-6 text-center text-4xl leading-tight font-medium text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
              Sydney Based Graduation Photographer
            </h1>

            {/* Subtitle with enhanced styling */}
            <div className="animate-reveal-up-delay-1">
              <p className="mb-8 text-center text-xl leading-relaxed font-light text-white/95 drop-shadow-xl md:text-2xl lg:text-3xl">
                Capturing the moments that{' '}
                <span className="text-warm-white relative inline-block font-bold">
                  matter
                  <AnimatedScribble />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {currentImages.map((src, index) => (
            <div
              key={index}
              className="embla__slide relative h-full w-full flex-none"
            >
              <Image
                src={src}
                alt={`Hero background ${index + 1}`}
                className="h-full w-full object-cover"
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
      <div className="bg-accent-gold/30 animate-float absolute top-1/4 left-1/4 h-2 w-2 rounded-full"></div>
      <div className="bg-soft-gold/40 animate-float-delayed absolute top-1/3 right-1/3 h-1 w-1 rounded-full"></div>
      <div className="bg-accent-gold/20 animate-float absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="mx-auto max-w-6xl px-4 text-center">
          {/* Main heading with warm styling */}
          <h1 className="animate-reveal-up mb-6 text-center text-4xl leading-tight font-medium text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
            Sydney Based Graduation Photographer
          </h1>

          {/* Subtitle with enhanced styling */}
          <div className="animate-reveal-up-delay-1">
            <p className="mb-8 text-center text-xl leading-relaxed font-light text-white/95 drop-shadow-xl md:text-2xl lg:text-3xl">
              Capturing the moments that{' '}
              <span className="text-warm-white relative inline-block font-bold">
                matter
                <AnimatedScribble />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-reveal-up-delay-3 absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-light text-white/80">
            Scroll to explore
          </span>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/60">
            <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/60"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
