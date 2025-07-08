import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import MiniGallery from '@/components/MiniGallery'
import Contact from '@/components/Contact'

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
