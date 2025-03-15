
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-secondary">
      <Navigation />
      <Hero />
      <WorkExperience />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
