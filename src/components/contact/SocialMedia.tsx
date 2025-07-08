export default function SocialMedia() {
  return (
    <div className="bg-warm-white rounded-2xl p-8 warm-shadow-lg">
      <h3 className="text-2xl font-bold text-coffee mb-6 font-acumin-pro-bold">
        Follow My Work
      </h3>

      <div className="flex space-x-4">
        <a
          href="https://instagram.com/kevinesutandi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-cream hover:bg-soft-beige p-4 rounded-lg transition-all duration-300 transform hover:scale-105 warm-hover text-center group"
        >
          <div className="w-12 h-12 bg-coffee/10 group-hover:bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300">
            <svg className="w-6 h-6 text-coffee" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <p className="font-medium text-coffee text-sm">@kevinesutandi</p>
        </a>

        <a
          href="https://gallery.kevinsutandi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-cream hover:bg-soft-beige p-4 rounded-lg transition-all duration-300 transform hover:scale-105 warm-hover text-center group"
        >
          <div className="w-12 h-12 bg-coffee/10 group-hover:bg-coffee/20 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300">
            <svg className="w-6 h-6 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-medium text-coffee text-sm">Full Gallery</p>
        </a>
      </div>
    </div>
  )
} 