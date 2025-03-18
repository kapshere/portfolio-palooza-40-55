
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="bg-gradient-to-b from-secondary to-secondary/90 min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
