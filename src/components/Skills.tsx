
import React from 'react';
import { 
  Lightbulb, 
  Code, 
  Rocket, 
  Shield, 
  Users, 
  TrendingUp, 
  Book 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

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
      icon: <Lightbulb className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
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
      icon: <Shield className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
    },
    { 
      category: "AI & ML", 
      items: [
        "AI Agents",
        "LLMs and Small Models",
        "Usages for AI/ML And AI Agents"
      ],
      icon: <Rocket className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
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
      icon: <Code className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
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
      icon: <Users className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
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
      icon: <TrendingUp className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
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
      icon: <Book className="h-6 w-6" />,
      gradientClass: "from-gray-600/20 to-gray-700/20"
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="heading-primary mb-16">
          <span className="inline-block border-b-2 border-current pb-2">Skills & Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="animate-fade-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0 
              }}
            >
              <Card className={cn(
                "h-full overflow-hidden shadow-sm border border-black/10 hover:shadow-md transition-shadow duration-300",
                "bg-gradient-to-br", category.gradientClass,
                "colored-page-card"
              )}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-black/10 shadow-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="bg-black/5 hover:bg-black/10 border-black/20 px-3 py-1.5 text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
