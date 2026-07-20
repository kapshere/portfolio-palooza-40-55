import { 
  Lightbulb, 
  Code, 
  Rocket, 
  Shield, 
  Users, 
  TrendingUp, 
  Book 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
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
      icon: <Lightbulb className="h-6 w-6" />
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
      icon: <Shield className="h-6 w-6" />
    },
    { 
      category: "AI & ML", 
      items: [
        "AI Agents",
        "LLMs and Small Models",
        "Usages for AI/ML And AI Agents"
      ],
      icon: <Rocket className="h-6 w-6" />
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
      icon: <Code className="h-6 w-6" />
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
      icon: <Users className="h-6 w-6" />
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
      icon: <TrendingUp className="h-6 w-6" />
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
      icon: <Book className="h-6 w-6" />
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="section-container">
        <h2 className="heading-primary mb-16 text-center">
          <span className="inline-block border-b-2 border-primary pb-2">Skills & Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="animate-fade-up h-full"
              style={{ 
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="h-full overflow-hidden rounded-xl shadow-sm border border-border bg-card hover:shadow-md hover-glow transition-all duration-300 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-12 -mt-12 z-0"></div>
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-secondary/5 text-primary shadow-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-secondary">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-secondary/5 text-foreground border border-transparent hover:border-border transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
