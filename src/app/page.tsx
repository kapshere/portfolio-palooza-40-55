import Hero from "@/components/Hero";
import AiLeadership from "@/components/AiLeadership";
import Ventures from "@/components/Ventures";
import AboutSection from "@/components/AboutSection";
import FeaturedContent from "@/components/FeaturedContent";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AiLeadership />
      <Ventures />
      <AboutSection />
      <FeaturedContent />
      <Contact />
    </main>
  );
}
