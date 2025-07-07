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
      <div className="relative h-screen w-full overflow-hidden bg-stone-600">
        {/* Loading state with same text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl font-medium text-white text-center px-4 drop-shadow-lg opacity-50">
            Sydney Based Graduation Photographer
          </h1>
          <p className="text-white text-center px-4 drop-shadow-lg mt-4 text-2xl opacity-50">
            Capturing the moments that{' '}
            <span className="font-bold relative inline-block">
              matter
            </span>
          </p>
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
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-4xl font-medium text-white text-center px-4 drop-shadow-lg animate-fade-in-up">
          Sydney Based Graduation Photographer
        </h1>
        <p className="text-white text-center px-4 drop-shadow-lg mt-4 animate-fade-in-up-delay text-2xl">
          Capturing the moments that{' '}
          <span className="font-bold relative inline-block">
            matter
            <AnimatedScribble />
          </span>
        </p>
      </div>
    </div>
  )
}