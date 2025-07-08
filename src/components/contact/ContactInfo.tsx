export default function ContactInfo() {
  return (
    <div className="bg-warm-white warm-shadow-lg rounded-2xl p-8">
      <h3 className="text-coffee font-acumin-pro-bold mb-6 text-2xl font-bold">
        Quick Contact
      </h3>

      <div className="space-y-4">
        <a
          href="mailto:kevinesutandi@gmail.com"
          className="bg-cream hover:bg-soft-beige warm-hover group flex items-center space-x-4 rounded-lg p-4 transition-all duration-300"
        >
          <div className="bg-coffee/10 group-hover:bg-coffee/20 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300">
            <svg
              className="text-coffee h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-coffee font-medium">Email</p>
            <p className="text-dark-coffee">kevinesutandi@gmail.com</p>
          </div>
        </a>

        <a
          href="https://wa.me/+61412123138"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cream hover:bg-soft-beige warm-hover group flex items-center space-x-4 rounded-lg p-4 transition-all duration-300"
        >
          <div className="bg-coffee/10 group-hover:bg-coffee/20 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300">
            <svg
              className="text-coffee h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
            </svg>
          </div>
          <div>
            <p className="text-coffee font-medium">WhatsApp</p>
            <p className="text-dark-coffee">+61 412 123 138</p>
          </div>
        </a>

        <div className="bg-cream flex items-center space-x-4 rounded-lg p-4">
          <div className="bg-coffee/10 flex h-12 w-12 items-center justify-center rounded-full">
            <svg
              className="text-coffee h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-coffee font-medium">Location</p>
            <p className="text-dark-coffee">Sydney, Australia</p>
          </div>
        </div>
      </div>
    </div>
  )
}
