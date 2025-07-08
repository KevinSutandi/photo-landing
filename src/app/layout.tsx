import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import './globals.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

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
  title: 'Kevin Sutandi',
  description: 'Kevin Sutandi Photography',
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
      <body
        className={`${acuminPro.variable} ${acuminProItalic.variable} ${acuminProBold.variable} ${acuminProBoldItalic.variable} ${poppins.variable} antialiased`}
      >
        <MantineProvider theme={customTheme}>
          <Notifications />
          <Topbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
