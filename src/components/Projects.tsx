
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Digital Transformation Initiative for Corporate Payments",
      description: "Led India chapter for a major digital transformation program working at a global financial institution, modernizing legacy systems and implementing cloud-native architecture.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["AWS", "Microservices", "API Gateway", "Event-driven Architecture"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Enterprise Architecture Framework",
      description: "Developed and implemented an enterprise architecture framework for a Fortune 500 company, enabling strategic technology decisions aligned with business goals.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["TOGAF", "Cloud Architecture", "Integration Patterns", "Governance"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Cloud Migration Strategy",
      description: "Designed and executed a comprehensive cloud migration strategy for a large healthcare provider, resulting in improved scalability and significant cost savings.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      technologies: ["AWS", "Azure", "Containerization", "Infrastructure as Code"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
