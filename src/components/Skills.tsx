
import { Badge } from "./ui/badge";

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
      bgColor: "bg-primary/90" 
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
      bgColor: "bg-primary/80"
    },
    { 
      category: "AI & ML", 
      items: [
        "AI Agents",
        "LLMs and Small Models",
        "Usages for AI/ML And AI Agents"
      ],
      bgColor: "bg-primary/90"
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
      bgColor: "bg-primary/80"
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
      bgColor: "bg-primary/90"
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
      bgColor: "bg-primary/80"
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
      bgColor: "bg-primary/90"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-secondary">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className={`p-6 rounded-xl ${skillGroup.bgColor} shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-white/40 pb-2">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/30 transition-colors flex items-center"
                  >
                    <span className="text-sm md:text-base text-white font-medium">{skill}</span>
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
