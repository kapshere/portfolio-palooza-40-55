
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";

const Index = () => {
  return (
    <div className="bg-secondary">
      <Navigation />
      <Hero />
      <Projects />
      <Publications />
      <Skills />
    </div>
  );
};

export default Index;
