import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import './globals.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { SpeedInsights } from "@vercel/speed-insights/next"

const acuminPro = localFont({
  src: './fonts/Acumin-RPro.otf',
  variable: '--font-acumin-pro',
})

const acuminProItalic = localFont({
  src: './fonts/Acumin-ItPro.otf',
  variable: '--font-acumin-pro-italic',
})

const acuminProBold = localFont({
  src: './fonts/Acumin-BdPro.otf',
  variable: '--font-acumin-pro-bold',
})

const acuminProBoldItalic = localFont({
  src: './fonts/Acumin-BdItPro.otf',
  variable: '--font-acumin-pro-bold-italic',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '300', '200', '100'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kevinsutandi.com'),
  title: {
    default:
      'Kevin Sutandi - Sydney Graduation Photographer | Professional Photography Services',
    template: '%s | Kevin Sutandi Photography',
  },
  description:
    'Professional Sydney-based photographer specializing in graduation photography, pre-weddings, events, and stunning landscape photography. Capturing your most precious moments with warmth, authenticity, and artistic vision.',
  keywords: [
    'graduation photographer Sydney',
    'Sydney photographer',
    'professional photography Sydney',
    'graduation photos',
    'wedding photographer',
    'event photographer',
    'landscape photography',
    'Kevin Sutandi',
    'portrait photography',
    'photography services Australia',
    'Sydney photographer',
    'professional photography Sydney',
    'graduation photos',
    'graduation',
    'graduation photography Sydney',
    'graduation photos Sydney',
    'pre-wedding photographer',
    'pre-wedding photos',
    'pre-wedding',
    'pre-wedding photography Sydney',
    'pre-wedding photographer Sydney',
    'pre-wedding photos Sydney',
    'pre-wedding photography Sydney',
    'event photographer',
    'landscape photography',
    'Kevin Sutandi',
    'portrait photography',
    'photography services Australia',
    'UNSW Graduation Photography',
    'UNSW Graduation Photographer',
    'UNSW Graduation Photos',
    'UNSW Graduation',
    'UNSW Graduation Photography Sydney',
    'UNSW Graduation Photographer Sydney',
    'UNSW Graduation Photos Sydney',
    'UTS Graduation Photography',
    'UTS Graduation Photographer',
    'UTS Graduation Photos',
    'UTS Graduation',
    'UTS Graduation Photography Sydney',
    'UTS Graduation Photographer Sydney',
    'UTS Graduation Photos Sydney',
    'USYD Graduation Photography',
    'USYD Graduation Photographer',
    'USYD Graduation Photos',
    'USYD Graduation',
    'USYD Graduation Photography Sydney',
    'USYD Graduation Photographer Sydney',
    'USYD Graduation Photos Sydney',
    'Macquarie University Graduation Photography',
    'Macquarie University Graduation Photographer',
    'Macquarie University Graduation Photos',
    'Macquarie University Graduation',
    'Macquarie University Graduation Photography Sydney',
    'Macquarie University Graduation Photographer Sydney',
    'Macquarie University Graduation Photos Sydney',
    'University of Sydney Graduation Photography',
    'University of Sydney Graduation Photographer',
    'University of Sydney Graduation Photos',
    'University of Sydney Graduation',
    'University of Sydney Graduation Photography Sydney',
    'University of Sydney Graduation Photographer Sydney',
    'University of Sydney Graduation Photos Sydney',
    'University of Technology Sydney Graduation Photography',
    'University of Technology Sydney Graduation Photographer',
    'University of Technology Sydney Graduation Photos',
    'University of Technology Sydney Graduation',
    'University of Technology Sydney Graduation Photography Sydney',
    'University of Technology Sydney Graduation Photographer Sydney',
    'University of Technology Sydney Graduation Photos Sydney',
    'University of New South Wales Graduation Photography',
    'University of New South Wales Graduation Photographer',
    'University of New South Wales Graduation Photos',
    'University of New South Wales Graduation',
    'University of New South Wales Graduation Photography Sydney',
    'University of New South Wales Graduation Photographer Sydney',
    'University of New South Wales Graduation Photos Sydney',
  ],
  authors: [{ name: 'Kevin Sutandi' }],
  creator: 'Kevin Sutandi',
  publisher: 'Kevin Sutandi Photography',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://kevinsutandi.com',
    siteName: 'Kevin Sutandi Photography',
    title:
      'Kevin Sutandi - Sydney Graduation Photographer | Professional Photography Services',
    description:
      'Professional Sydney-based photographer specializing in graduation photography, pre-weddings, events, and stunning landscape photography. Capturing your most precious moments with warmth, authenticity, and artistic vision.',
    images: [
      {
        url: '/about-me.jpg',
        width: 370,
        height: 555,
        alt: 'Kevin Sutandi - Professional Photographer in Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Sutandi - Sydney Graduation Photographer',
    description:
      'Professional Sydney-based photographer specializing in graduation photography, pre-weddings, events, and stunning landscape photography.',
    images: ['/about-me.jpg'],
    creator: '@kevinesutandi',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://kevinsutandi.com',
  },
  category: 'Photography',
  classification: 'Professional Photography Services',
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Sydney',
    'geo.position': '-33.8688;151.2093',
    ICBM: '-33.8688, 151.2093',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#8b6f47',
    'msapplication-TileColor': '#8b6f47',
  },
}

const customTheme = createTheme({
  primaryColor: 'coffee',
  colors: {
    coffee: [
      '#f5f1eb', // warm-cream
      '#ede5d5', // soft-beige
      '#e3d5bf', // lighter coffee
      '#d4c4a9', // mid coffee
      '#c5b394', // coffee tone
      '#8b6f47', // coffee (main)
      '#6b4e2e', // dark-coffee
      '#5a3f24', // darker
      '#4a321c', // darkest
      '#3a2614', // deepest
    ],
    accent: [
      '#f9f5e8', // soft gold background
      '#f2e6b6', // soft-gold
      '#ebd89a', // light gold
      '#e4ca7e', // medium gold
      '#ddbc62', // warm gold
      '#d4af37', // accent-gold (main)
      '#c19b2a', // darker gold
      '#ae871d', // deep gold
      '#9b7310', // darker
      '#885f03', // darkest
    ],
  },
  fontFamily: 'var(--font-acumin-pro), var(--font-poppins), sans-serif',
  headings: {
    fontFamily:
      'var(--font-acumin-pro-bold), var(--font-acumin-pro), var(--font-poppins), sans-serif',
  },
  components: {
    Button: {
      styles: {
        root: {
          fontWeight: 500,
          borderRadius: '8px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: '#faf8f5', // cream
          borderColor: '#ede5d5', // soft-beige
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          '&:focus': {
            borderColor: '#8b6f47', // coffee
            boxShadow: '0 0 0 2px rgba(139, 111, 71, 0.2)',
          },
        },
        label: {
          color: '#8b6f47', // coffee
          fontWeight: 500,
          marginBottom: '8px',
        },
      },
    },
    Textarea: {
      styles: {
        input: {
          backgroundColor: '#faf8f5', // cream
          borderColor: '#ede5d5', // soft-beige
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          '&:focus': {
            borderColor: '#8b6f47', // coffee
            boxShadow: '0 0 0 2px rgba(139, 111, 71, 0.2)',
          },
        },
        label: {
          color: '#8b6f47', // coffee
          fontWeight: 500,
          marginBottom: '8px',
        },
      },
    },
    Select: {
      styles: {
        input: {
          backgroundColor: '#faf8f5', // cream
          borderColor: '#ede5d5', // soft-beige
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          '&:focus': {
            borderColor: '#8b6f47', // coffee
            boxShadow: '0 0 0 2px rgba(139, 111, 71, 0.2)',
          },
        },
        label: {
          color: '#8b6f47', // coffee
          fontWeight: 500,
          marginBottom: '8px',
        },
      },
    },
    DateTimePicker: {
      styles: {
        input: {
          backgroundColor: '#faf8f5', // cream
          borderColor: '#ede5d5', // soft-beige
          borderRadius: '8px',
          padding: '0px 16px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          '&:focus': {
            borderColor: '#8b6f47', // coffee
            boxShadow: '0 0 0 2px rgba(139, 111, 71, 0.2)',
          },
        },
        label: {
          color: '#8b6f47', // coffee
          fontWeight: 500,
          marginBottom: '8px',
        },
      },
    },
    DateInput: {
      styles: {
        input: {
          backgroundColor: '#faf8f5', // cream
          borderColor: '#ede5d5', // soft-beige
          borderRadius: '8px',
          padding: '12px 16px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          '&:focus': {
            borderColor: '#8b6f47', // coffee
            boxShadow: '0 0 0 2px rgba(139, 111, 71, 0.2)',
          },
        },
        label: {
          color: '#8b6f47', // coffee
          fontWeight: 500,
          marginBottom: '8px',
        },
      },
    },
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Kevin Sutandi Photography"
        />
        <StructuredData />
      </head>
      <body
        className={`${acuminPro.variable} ${acuminProItalic.variable} ${acuminProBold.variable} ${acuminProBoldItalic.variable} ${poppins.variable} antialiased`}
      >
        <MantineProvider theme={customTheme}>
          <Notifications />
          <Topbar />
          {children}
          <Footer />
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  )
}
