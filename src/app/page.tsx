import Hero from "@/components/Hero";
import AboutMe from "@/components/about-me";
import MiniGallery from "@/components/mini-gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <AboutMe />
      <MiniGallery />
    </div>
  );
}
