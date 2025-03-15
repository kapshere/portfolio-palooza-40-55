
const Skills = () => {
  const skills = [
    { 
      category: "Technology Expertise", 
      items: [
        "Cloud Architecture", 
        "AWS", 
        "Enterprise Architecture", 
        "Digital Transformation", 
        "Blockchain Technologies: Bitcoin, Ethereum, Hyperledger",
        "AI/ML - LLMs, AI Agents"
      ] 
    },
    { 
      category: "Architecture", 
      items: ["Microservices", "API Design", "Event-driven Architecture", "System Integration", "Serverless", "P2P Archicture"] 
    },
    { 
      category: "Leadership", 
      items: ["Team Leadership", "Solution Design", "Technical Strategy", "Stakeholder Management", "Mentoring"] 
    },
    { 
      category: "Management Skills", 
      items: [
        "Product and Program deliveries with Local & Virtual agile teams",
        "Agile transformation (including Scaling agile)",
        "Building high-performance teams",
        "Business development, P&L, CBA, success KPI definition & tracking",
        "Agile Product Management using JIRA and SAFe framework"
      ] 
    },
    { 
      category: "Domain Skills", 
      items: [
        "Transaction Banking",
        "Cash Management products ",
        "Corporate Payments (Domestic,SEPA and Cross Border)",
        "Mutual Funds Transfer Agent system", 
        "Brokerage Platform",
        "BLockchain : Payments and Smart Contracts",
        "Digital Identity, Managed, Custodial and Self-Sovergien",
        "Supply Chain Finance, Trade Finance and DeFi",
      ] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="animate-fade-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
