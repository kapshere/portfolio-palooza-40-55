
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Digital Transformation Initiative for Corporate Payments",
      description: "Led India chapter for a major digital transformation program for Core banking and Payments system working at a global financial institution, modernizing legacy systems and implementing cloud-native architecture.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["FIS Clear to Pay", "Microservices", "API Gateway", "Event-driven Architecture"]
    },
    {
      title: "Pre-Sales Solution Architecture for Enterprise Blockchain",
      description: "Actively engaged with neumorous customers in consulting and advisory for Enterprise blockchain solutions using the product platform nChain developed",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["Blockchain", "Cloud Architecture", "Decentralised Applications", "Triple-Entry Accounting"]
    },
    {
      title: "P2P Payments Protocol and Infrastructure",
      description: "Designed and executed a comprehensive Implementation of a light-client to Blockchain aka user node supporting a P2P Payment protocol aided by Paymail (Payment to email) finctionality /n URL : https://www.prnewswire.com/news-releases/bitcoin-association-launches-liteclient-toolbox-to-enable-efficient-scaling-301539742.html",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      technologies: ["BSV Blockchain", "Azure", "Containerization", "Infrastructure as Code"],
    },
    {
      title: "Digital Identity using W3C specifications",
      description: "Designed and Implemented a Digital Identity and Document signing product using Blockchain for trusted and open implementation /n URL : https://nchain.com/nchain-identity/ & https://nchain.com/nchain-sign/",
      image: "https://unsplash.com/photos/a-picture-of-a-fingerprint-on-a-wall-wQZC_ohsrwo",
      technologies: ["BSV Blockchain", "Azure", "Containerization", "Infrastructure as Code"],
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
