"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Fade from 'embla-carousel-fade'
import AnimatedScribble from './AnimatedScribble'

export default function Hero() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 30 // Slower transition for background effect
    },
    [
      Autoplay({
        delay: 7000, // Auto-slide every 7 seconds
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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <div className="embla absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {images.map((src, index) => (
            <div key={index} className="embla__slide flex-none w-full h-full relative">
              <Image
                src={src}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40" />
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