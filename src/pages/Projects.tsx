
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
