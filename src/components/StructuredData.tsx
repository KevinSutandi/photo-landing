export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Sutandi',
    jobTitle: 'Professional Photographer',
    description:
      'Sydney-based photographer specializing in graduation photography, pre-weddings, events, and landscape photography',
    url: 'https://kevinsutandi.com',
    sameAs: [
      'https://instagram.com/kevinesutandi',
      'https://gallery.kevinsutandi.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    email: 'kevinesutandi@gmail.com',
    telephone: '+61412123138',
    knowsAbout: [
      'Graduation Photography',
      'Wedding Photography',
      'Event Photography',
      'Portrait Photography',
      'Landscape Photography',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Kevin Sutandi Photography',
    description:
      'Professional photography services in Sydney specializing in graduation photography, pre-weddings, events, and stunning landscape photography',
    url: 'https://kevinsutandi.com',
    logo: 'https://kevinsutandi.com/web-app-manifest-512x512.png',
    image: 'https://kevinsutandi.com/web-app-manifest-512x512.png',
    telephone: '+61412123138',
    email: 'kevinesutandi@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093,
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    serviceType: [
      'Graduation Photography',
      'Wedding Photography',
      'Event Photography',
      'Portrait Photography',
      'Landscape Photography',
    ],
    priceRange: '$$',
    sameAs: [
      'https://instagram.com/kevinesutandi',
      'https://gallery.kevinsutandi.com',
    ],
    founder: {
      '@type': 'Person',
      name: 'Kevin Sutandi',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61412123138',
      contactType: 'customer service',
      email: 'kevinesutandi@gmail.com',
      availableLanguage: ['English', 'Indonesian'],
    },
  }

  const photographerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Photographer',
    name: 'Kevin Sutandi',
    description:
      'Professional Sydney-based photographer capturing graduation moments, pre-weddings, events, and breathtaking landscapes with warmth, authenticity, and artistic vision',
    url: 'https://kevinsutandi.com',
    image: 'https://kevinsutandi.com/about-me.jpg',
    telephone: '+61412123138',
    email: 'kevinesutandi@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Sydney',
      },
      {
        '@type': 'State',
        name: 'New South Wales',
      },
    ],
    hasCredential: 'Professional Photography Services',
    workExample: {
      '@type': 'CreativeWork',
      name: 'Graduation Photography Portfolio',
      url: 'https://gallery.kevinsutandi.com',
      description:
        'Collection of graduation photography showcasing moments of achievement, joy, and new beginnings',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(photographerSchema),
        }}
      />
    </>
  )
}
