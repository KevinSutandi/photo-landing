import ContactHeader from './contact/ContactHeader'
import ContactForm from './contact/ContactForm'
import ContactInfo from './contact/ContactInfo'
import SocialMedia from './contact/SocialMedia'

export default function Contact() {
  return (
    <div
      id="contact"
      className="from-cream to-warm-cream h-full bg-gradient-to-t px-6 py-5"
    >
      <div className="mb-20 flex items-center justify-center space-x-4">
        <div className="bg-accent-gold h-0.5 w-16"></div>
        <div className="bg-accent-gold animate-gentle-pulse h-2 w-2 rounded-full"></div>
        <div className="bg-accent-gold h-0.5 w-16"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <ContactHeader />

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ContactForm />

          <div className="animate-reveal-right flex h-full flex-col justify-between gap-y-10">
            <ContactInfo />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  )
}
