import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MiniGallery from "@/components/MiniGallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <AboutMe />
      <MiniGallery />
      <Contact />
    </div>
  );
}
