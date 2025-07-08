import ContactHeader from './contact/ContactHeader'
import ContactForm from './contact/ContactForm'
import ContactInfo from './contact/ContactInfo'
import SocialMedia from './contact/SocialMedia'

export default function Contact() {
  return (
    <div id="contact" className="py-5 px-6 bg-gradient-to-t from-cream to-warm-cream h-full">
      <div className="flex justify-center items-center space-x-4 mb-20">
        <div className="w-16 h-0.5 bg-accent-gold"></div>
        <div className="w-2 h-2 bg-accent-gold rounded-full animate-gentle-pulse"></div>
        <div className="w-16 h-0.5 bg-accent-gold"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactForm />

          <div className="animate-reveal-right flex flex-col justify-between gap-y-10 h-full">
            <ContactInfo />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  )
}