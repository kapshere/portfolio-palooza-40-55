
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
      bgColor: "bg-gradient-to-br from-blue-800 to-blue-900",
      textColor: "text-blue-100",
      headerColor: "text-white" 
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
      bgColor: "bg-gradient-to-br from-green-800 to-green-900",
      textColor: "text-green-100",
      headerColor: "text-white"
    },
    { 
      category: "AI & ML", 
      items: [
        "AI Agents",
        "LLMs and Small Models",
        "Usages for AI/ML And AI Agents"
      ],
      bgColor: "bg-gradient-to-br from-blue-800 to-blue-900",
      textColor: "text-blue-100",
      headerColor: "text-white"
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
      bgColor: "bg-gradient-to-br from-green-800 to-green-900",
      textColor: "text-green-100",
      headerColor: "text-white"
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
      bgColor: "bg-gradient-to-br from-blue-800 to-blue-900",
      textColor: "text-blue-100",
      headerColor: "text-white"
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
      bgColor: "bg-gradient-to-br from-green-800 to-green-900",
      textColor: "text-green-100",
      headerColor: "text-white"
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
      bgColor: "bg-gradient-to-br from-blue-800 to-blue-900",
      textColor: "text-blue-100",
      headerColor: "text-white"
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
              className={`p-6 rounded-xl ${skillGroup.bgColor} border-0 animate-fade-up shadow-lg`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <h3 className={`text-2xl font-semibold mb-4 ${skillGroup.headerColor} pb-2 border-b border-white/30`}>
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition-colors flex items-center shadow-sm"
                  >
                    <span className={`text-sm md:text-base ${skillGroup.textColor}`}>{skill}</span>
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
