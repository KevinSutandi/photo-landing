'use client'

import React from 'react'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="from-warm-cream via-cream to-soft-beige border-soft-beige/30 relative border-t bg-gradient-to-br">
      {/* Decorative top border */}
      <div className="via-accent-gold absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent to-transparent opacity-60"></div>

      {/* Floating decorative elements */}
      <div className="bg-accent-gold/20 animate-gentle-pulse absolute top-4 left-8 h-2 w-2 rounded-full"></div>
      <div
        className="bg-coffee/20 animate-gentle-pulse absolute top-12 right-12 h-1.5 w-1.5 rounded-full"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="bg-accent-gold/30 animate-gentle-pulse absolute bottom-8 left-1/4 h-1 w-1 rounded-full"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row lg:gap-12">
          {/* Brand Section */}
          <div className="animate-reveal-up space-y-6">
            <div>
              <h3 className="text-dark-coffee mb-2 text-2xl font-bold tracking-wide">
                Kevin Sutandi
              </h3>
              <p className="text-coffee/80 text-sm leading-relaxed">
                Capturing life&apos;s most precious moments with warmth,
                authenticity, and artistic vision.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <div className="text-coffee/70 hover:text-coffee group flex items-center gap-3 transition-colors">
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                <a
                  href="mailto:kevinesutandi@gmail.com"
                  className="text-sm hover:underline"
                >
                  kevinesutandi@gmail.com
                </a>
              </div>
              <div className="text-coffee/70 hover:text-coffee group flex items-center gap-3 transition-colors">
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                <a href="tel:+61412123138" className="text-sm hover:underline">
                  +61 412 123 138
                </a>
              </div>
              <div className="text-coffee/70 flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Sydney, Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-reveal-up space-y-6"
            style={{ animationDelay: '0.4s' }}
          >
            <h4 className="text-dark-coffee text-lg font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: 'Recent Work',
                  href: 'https://gallery.kevinsutandi.com',
                },
                { name: 'About Me', href: '#about-me' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-coffee/70 hover:text-coffee group inline-block transform text-sm transition-colors duration-300 hover:translate-x-1"
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Subtle consulting link (Enable once we have that up and running) */}
            {/* <div className="pt-4 border-t border-soft-beige/50">
              <a
                href="https://gloom.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-coffee/60 hover:text-coffee text-xs transition-colors group"
              >
                <Globe className="w-3 h-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">Like the website? Check out my web consulting and development services</span>
              </a>
            </div> */}
          </div>

          {/* Social & Connect */}
          <div
            className="animate-reveal-up space-y-6"
            style={{ animationDelay: '0.6s' }}
          >
            <h4 className="text-dark-coffee text-lg font-semibold">
              Let&apos;s Connect
            </h4>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/kevinesutandi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee group-hover:text-dark-coffee from-accent-gold/20 to-coffee/10 hover:from-accent-gold/30 hover:to-coffee/20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="mailto:kevinesutandi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee group-hover:text-dark-coffee from-accent-gold/20 to-coffee/10 hover:from-accent-gold/30 hover:to-coffee/20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="text-coffee group-hover:text-dark-coffee h-5 w-5 transition-colors" />
              </Link>
              <Link
                href="https://wa.me/+61412123138"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coffee group-hover:text-dark-coffee from-accent-gold/20 to-coffee/10 hover:from-accent-gold/30 hover:to-coffee/20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                </svg>
              </Link>
            </div>

            {/* Call to Action */}
            <div className="space-y-3">
              <p className="text-coffee/70 text-sm leading-relaxed">
                Ready to create something magical together?
              </p>
              <a
                href="#contact"
                className="bg-coffee hover:bg-dark-coffee text-warm-white warm-shadow inline-flex transform items-center rounded-xl px-6 py-2 font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">Let&apos;s Chat</span>
                <Heart className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-soft-beige/30 mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-coffee/60 text-sm">
              © {currentYear} Kevin Sutandi Photography. Made with{' '}
              <Heart className="text-accent-gold animate-gentle-pulse inline h-4 w-4" />{' '}
              in Sydney, Australia.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
