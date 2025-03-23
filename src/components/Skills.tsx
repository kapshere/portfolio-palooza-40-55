
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
      gradientClass: "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30"
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
      gradientClass: "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/30"
    },
    { 
      category: "AI & ML", 
      items: [
        "AI Agents",
        "LLMs and Small Models",
        "Usages for AI/ML And AI Agents"
      ],
      icon: <Rocket className="h-6 w-6" />,
      gradientClass: "from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/30"
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
      gradientClass: "from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/30"
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
      gradientClass: "from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/30"
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
      gradientClass: "from-cyan-50 to-cyan-100 dark:from-cyan-950/40 dark:to-cyan-900/30"
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
      gradientClass: "from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/30"
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white text-black">
      <div className="section-container">
        <h2 className="heading-primary">
          <span className="inline-block border-b-2 border-primary pb-2">Skills & Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                "h-full overflow-hidden backdrop-blur-sm bg-gradient-to-br shadow-md border border-gray-50",
                category.gradientClass
              )}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-white/80 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium text-primary">{category.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="bg-white/70 hover:bg-white/90 backdrop-blur-sm text-gray-700 border-gray-100 px-3 py-1.5 text-xs font-normal"
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
