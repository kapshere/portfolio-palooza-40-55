import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="bg-secondary">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
};

export default Index;