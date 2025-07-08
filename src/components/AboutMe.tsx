import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="warm-gradient-vertical px-6 py-20">
      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
        {/* Main heading with animation */}
        <h1 className="text-charcoal animate-reveal-up font-acumin-pro-bold mb-16 max-w-4xl text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-4xl xl:text-5xl">
          LIGHTING UP YOUR LIFE - CAPTURING MEMORIES TO LAST
        </h1>

        {/* Content section with animations */}
        <div className="flex w-full flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-20">
          {/* Image with warm styling */}
          <div className="animate-reveal-left">
            <div className="relative">
              <Image
                src="/about-me.jpg"
                alt="About Me"
                width={370}
                height={555}
                className="warm-shadow-lg warm-hover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              {/* Decorative elements */}
              <div className="bg-accent-gold/20 animate-float absolute -top-4 -right-4 h-8 w-8 rounded-full"></div>
              <div className="bg-soft-gold/30 animate-float-delayed absolute -bottom-4 -left-4 h-6 w-6 rounded-full"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="animate-reveal-right max-w-xl md:max-w-2xl">
            <h2 className="text-coffee font-acumin-pro-bold-italic mb-8 max-w-3xl text-center text-3xl sm:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
              Hiya! I&apos;m Kevin
            </h2>

            <div className="text-charcoal space-y-6">
              <div className="animate-reveal-up-delay-1">
                <p className="text-dark-coffee text-lg leading-relaxed font-light tracking-wide">
                  Sydney-based photographer specialising in capturing
                  pre-weddings, graduations, events, and the breathtaking
                  landscapes that I fell in love with growing up in Indonesia.
                </p>
              </div>

              <div className="animate-reveal-up-delay-2">
                <p className="text-dark-coffee text-lg leading-relaxed font-light tracking-wide">
                  I&apos;m passionate about making sure that each of my clients
                  gets the best service and the best images possible. I always
                  take the time to listen to what you want and to get to know
                  you before your big day. My goal is to make sure that you have
                  a stress-free moment and that your photos reflect your unique
                  story.
                </p>
              </div>

              <div className="animate-reveal-up-delay-3">
                <p className="text-coffee text-lg leading-relaxed font-medium tracking-wide">
                  If you&apos;re looking for someone who&apos;s shooting style
                  is candid, fun, and artistic, I&apos;d love to chat!
                </p>
              </div>
            </div>

            {/* Contact button */}
            <div className="animate-reveal-up-delay-3 mt-8">
              <a
                href="#contact"
                className="bg-coffee hover:bg-dark-coffee text-warm-white warm-shadow inline-flex transform items-center rounded-full px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">Get In Touch</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
