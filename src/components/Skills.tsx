
const Skills = () => {
  const skills = [
    { 
      category: "Technology Expertise", 
      items: [
        "Cloud Architecture", 
        "AWS", 
        "Enterprise Architecture", 
        "Digital Transformation", 
        "High Performance Engineering Teams",
        "Agile and Scrum"
      ],
      bgColor: "bg-blue-100/80" 
    },
    { 
      category: "Blockchain and P2P Systems", 
      items: [
        "DAO : Decentralised Autonomous Organisations",
        "Smart Contracts : Script, Solidity",
        "Tokens and Tokenomics",
        "P2P Payments",
        "KYC/AML and SSI",
        "Lightweight SPV/User Nodes",
        "Blockchain Core Infrastructure and Economics"
      ],
      bgColor: "bg-rose-100/80"
    },
    { 
      category: "AI & ML", 
      items: [
        "AI Agents",
        "LLMs and Small Models",
        "Usages for AI/ML And AI Agents"
      ],
      bgColor: "bg-rose-100/80"
    },
    { 
      category: "Architecture", 
      items: [
        "Microservices", 
        "API Design", 
        "Event-driven Architecture", 
        "System Integration", 
        "Serverless", 
        "P2P Architecture"
      ],
      bgColor: "bg-green-100/80"
    },
    { 
      category: "Leadership", 
      items: [
        "Team Leadership", 
        "Solution Design", 
        "Technical Strategy", 
        "Stakeholder Management", 
        "Mentoring"
      ],
      bgColor: "bg-purple-100/80"
    },
    { 
      category: "Management Skills", 
      items: [
        "Agile Product & Program Management",
        "Agile transformation & Scaling",
        "Building high-performance teams",
        "Business development & P&L",
        "KPI definition & tracking"
      ],
      bgColor: "bg-amber-100/80"
    },
    { 
      category: "Domain Expertise", 
      items: [
        "Transaction Banking",
        "Cash Management",
        "Corporate Payments",
        "Mutual Funds & Brokerage",
        "Blockchain Applications",
        "Digital Identity",
        "Supply Chain & Trade Finance"
      ],
      bgColor: "bg-rose-100/80"
    },
    
  ];

  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-secondary">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className={`p-6 rounded-xl ${skillGroup.bgColor} border border-gray-200 animate-fade-up shadow-lg`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-secondary pb-2 border-b border-secondary/30">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/80 rounded-lg px-3 py-2 hover:bg-white/90 transition-colors flex items-center shadow-sm"
                  >
                    <span className="text-sm md:text-base">{skill}</span>
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
