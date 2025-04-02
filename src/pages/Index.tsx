
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/AboutSection";
import FeaturedContent from "@/components/FeaturedContent";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedContent />
      <Contact />
    </div>
  );
};

export default Index;
