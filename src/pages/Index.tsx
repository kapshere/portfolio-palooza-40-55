
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/AboutSection";
import FeaturedContent from "@/components/FeaturedContent";
import { AiLeadership } from "@/components/AiLeadership";
import { SelectedAiProjects } from "@/components/SelectedAiProjects";
import { Ventures } from "@/components/Ventures";

const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
            <AiLeadership />
      <SelectedAiProjects />
      <Ventures />
      <About />
      <FeaturedContent />
      <Contact />
    </div>
  );
};

export default Index;
