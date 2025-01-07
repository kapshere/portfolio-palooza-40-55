import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that provides real-time weather data and forecasts for multiple locations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["React", "Weather API", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Featured Projects
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