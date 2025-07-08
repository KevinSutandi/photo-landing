import Image from "next/image"

export default function AboutMe() {
  return (
    <div className="warm-gradient-vertical py-20 px-6">
      <div className="container flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        {/* Main heading with animation */}
        <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-center max-w-4xl mb-16 text-charcoal leading-tight animate-reveal-up font-acumin-pro-bold">
          LIGHTING UP YOUR LIFE - CAPTURING MEMORIES TO LAST
        </h1>

        {/* Content section with animations */}
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-20 gap-y-10 w-full">
          {/* Image with warm styling */}
          <div className="animate-reveal-left">
            <div className="relative">
              <Image
                src="/about-me.jpg"
                alt="About Me"
                width={370}
                height={555}
                className="rounded-lg warm-shadow-lg hover:scale-105 transition-transform duration-500 warm-hover"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-gold/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-soft-gold/30 rounded-full animate-float-delayed"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="md:max-w-2xl max-w-xl animate-reveal-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left max-w-3xl mb-8 text-coffee font-acumin-pro-bold-italic">
              Hiya! I&apos;m Kevin
            </h2>

            <div className="space-y-6 text-charcoal">
              <div className="animate-reveal-up-delay-1">
                <p className="tracking-wide text-lg font-light leading-relaxed text-dark-coffee">
                  Sydney-based photographer specialising in capturing pre-weddings, graduations, events, and the breathtaking landscapes that I fell in love with growing up in Indonesia.
                </p>
              </div>

              <div className="animate-reveal-up-delay-2">
                <p className="tracking-wide text-lg font-light leading-relaxed text-dark-coffee">
                  I&apos;m passionate about making sure that each of my clients gets the best service and the best images possible. I always take the time to listen to what you want and to get to know you before your big day. My goal is to make sure that you have a stress-free moment and that your photos reflect your unique story.
                </p>
              </div>

              <div className="animate-reveal-up-delay-3">
                <p className="tracking-wide text-lg font-medium leading-relaxed text-coffee">
                  If you&apos;re looking for someone who&apos;s shooting style is candid, fun, and artistic, I&apos;d love to chat!
                </p>
              </div>
            </div>

            {/* Contact button */}
            <div className="mt-8 animate-reveal-up-delay-3">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-coffee hover:bg-dark-coffee text-warm-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 warm-shadow"
              >
                <span className="mr-2">Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}