import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import MiniGallery from '@/components/MiniGallery'
import Contact from '@/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevin Sutandi - Sydney Graduation Photographer',
  description:
    'Kevin Sutandi - Sydney-based photographer specializing in graduation photography, pre-weddings, events, and stunning landscape photography. Capturing your most precious moments with warmth, authenticity, and artistic vision. Book your session today!',
  keywords: [
    'graduation photographer Sydney',
    'Sydney graduation photos',
    'professional graduation photography',
    'pre-wedding photographer Sydney',
    'event photographer Sydney',
    'portrait photographer Sydney',
    'landscape photography Sydney',
    'graduation ceremony photography',
    'university graduation photos',
    'Sydney photographer booking',
    'unsw graduation photos',
    'unsw graduation photographer',
    'unsw graduation photography',
    'unsw graduation ceremony photography',
    'unsw graduation ceremony photos',
    'unsw graduation ceremony photographer',
    'unsw graduation ceremony photography',
    'usyd graduation photos',
    'usyd graduation photographer',
    'usyd graduation photography',
    'usyd graduation ceremony photography',
    'usyd graduation ceremony photos',
    'usyd graduation ceremony photographer',
    'usyd graduation ceremony photography',
    'uts graduation photos',
    'uts graduation photographer',
    'uts graduation photography',
    'uts graduation ceremony photography',
    'uts graduation ceremony photos',
    'uts graduation ceremony photographer',
    'uts graduation ceremony photography',
    'University of Sydney',
    'University of Technology Sydney',
    'University of New South Wales',
    'University of Western Sydney',
    'University of Sydney',
    'University of Technology Sydney',
    'University of New South Wales',
    'University of Sydney Graduation Photographer',
    'University of Technology Sydney Graduation Photographer',
    'University of New South Wales Graduation Photographer',
    'University of Sydney Graduation Photos',
    'University of Technology Sydney Graduation Photos',
    'University of New South Wales Graduation Photos',
    'University of Sydney Graduation Ceremony Photographer',
    'Sydney Graduation Photographer',
  ],
  openGraph: {
    title: 'Sydney Graduation Photographer | Professional Photography Services',
    description:
      'Kevin Sutandi - Sydney-based photographer specializing in graduation photography, pre-weddings, events, and stunning landscape photography. Capturing your most precious moments with warmth, authenticity, and artistic vision.',
    url: 'https://kevinsutandi.com',
    images: [
      {
        url: '/about-me.jpg',
        width: 370,
        height: 555,
        alt: 'Kevin Sutandi - Professional Graduation Photographer in Sydney',
      },
    ],
  },
  twitter: {
    title: 'Sydney Graduation Photographer | Professional Photography Services',
    description:
      'Kevin Sutandi - Sydney-based photographer specializing in graduation photography, pre-weddings, events, and stunning landscape photography.',
  },
  alternates: {
    canonical: 'https://kevinsutandi.com',
  },
}

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">
      <Hero />
      <AboutMe />
      <MiniGallery />
      <Contact />
    </div>
  )
}
