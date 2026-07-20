import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Digital Transformation Initiative for Corporate Payments",
      description: "Led India chapter for a major digital transformation program for Core banking and Payments system working at a global financial institution, modernizing legacy systems and implementing cloud-native architecture.",
      image: "/Images/Digital Transformation.jpg",
      technologies: ["FIS Clear to Pay", "Microservices", "API Gateway", "Event-driven Architecture"]
    },
    {
      title: "Pre-Sales Solution Architecture for Enterprise Blockchain",
      description: "Actively engaged with neumorous customers in consulting and advisory for Enterprise blockchain solutions using the product platform nChain developed",
      image: "/Images/Solution Architecture.PNG",
      technologies: ["Blockchain", "Cloud Architecture", "Decentralised Applications", "Triple-Entry Accounting"]
    },
    {
      title: "P2P Payments Protocol and Infrastructure",
      description: "Designed and executed a comprehensive Implementation of a light-client to Blockchain aka user node supporting a P2P Payment protocol aided by Paymail (Payment to email) finctionality",
      image: "/Images/P2P Payments.jpg",
      liveUrl: "https://coingeek.com/spv-liteclient-toolbox-release-makes-scalable-bitcoin-easy-cheap-useful-for-everyone/",
      githubUrl: "https://github.com/bitcoin-sv/spv-wallet.git",
      technologies: ["BSV Blockchain", "SPV Wallet", "User Node", "P2P Payment BIP70 Protocol"],
    },
    {
      title: "Digital Identity using W3C specifications",
      description: "Designed and Implemented a Digital Identity and Document signing product using Blockchain for trusted and open implementation",
      image: "/Images/Digital Identity.jpg",
      liveUrl: "https://nchain.com/nchain-identity/",
      technologies: ["BSV Blockchain", "W3C DID", "Document Signing", "Digital Identity"],
    },
  ];

  return (
    <div className="page-wrapper pt-10">
      <div className="section-container">
        <h1 className="heading-primary animate-fade-up">Key Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
