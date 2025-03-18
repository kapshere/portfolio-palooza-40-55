
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="bg-gradient-to-b from-secondary to-secondary/90 min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
