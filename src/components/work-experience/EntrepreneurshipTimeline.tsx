
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Lightbulb, Briefcase, FileText, Cpu, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EntrepreneurshipTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Stealth Startup",
      role: "Co-founder and advisor for a stealth startup",
      period: "June 2025 - Present",
      description: "Building a game changing product for analysis and research on financial data for publicly listed companies.",
      skills: ["Mobile Architecture", "Super App", "Blockchain", "LLMs, AI&ML, AI Agents", "Engineering Head"],
      icon: <Cpu className="h-5 w-5 text-primary-foreground" />
    },
    {
      id: 2,
      title: "Stockscore.in",
      role: "Co-founder & Product Head",
      period: "Oct 2025 - Present",
      description: "Owning productisation (B2B) strategy for a custom-built AI model equity analytics platform, designing scoring models to quantify investor behavior, risk, and portfolio quality for retail and advisory users. Defining experimentation and evaluation frameworks (backtests, A/Bs, uplift vs benchmarks) and partnering with early users to tune thresholds, alerts, and UX for actionable insights.",
      skills: ["AI/ML", "Equity Analytics", "Product Strategy", "Scoring Models", "B2B"],
      icon: <Briefcase className="h-5 w-5 text-primary-foreground" />
    },
    {
      id: 3,
      title: "ZYND Protocol & Alan Scott Enterprises",
      role: "Strategic Advisor & Protocol Co-designer",
      period: "2025 - Present",
      description: "Co-designed protocol and reference architecture for ZYND, an AI-driven on-chain/off-chain orchestration layer under the Alan Scott/Omnis umbrella, focusing on data integrity, identity, and agent coordination. Strategic advisor to an AI startup hub incubating B2B AI products; defined reusable technical patterns across portfolio companies.",
      skills: ["AI Architecture", "Protocol Design", "Agent Systems", "Technical Strategy"],
      icon: <Briefcase className="h-5 w-5 text-primary-foreground" />
    },
    {
      id: 4,
      title: "Verusa",
      role: "Co-founder & Chief Architect",
      period: "Nov 2024 - Present",
      description: "Co-founded an AI-first platform focused on cryptocurrency compliance, identity, and risk analytics. Architecting LLM-based agents for KYC/AML workflows, document intelligence, and ongoing monitoring — combining RAG with policy-aware guardrails and domain-specific evaluation pipelines. Supporting GTM, solutioning, proof-of-value designs, and executive briefings.",
      skills: ["AI/ML", "LLM Agents", "KYC/AML", "RAG", "Architecture Design"],
      icon: <Briefcase className="h-5 w-5 text-primary-foreground" />,
      externalLink: {
        url: "https://verusa.ai/",
        label: "Visit Verusa.AI"
      }
    },
    {
      id: 5,
      title: "Independent Technology Consultant & Startup Advisor",
      role: "Consultant & Advisor",
      period: "Jan 2024 - Present",
      description: "Advising and mentoring multiple early-stage AI/blockchain startups on product strategy, architecture, and GTM — often acting as an extended co-founder for design, hiring, and fundraising narratives. Designed and implemented AI agents and LLM-backed features for AML/fraud detection, stock market analysis, and enterprise search.",
      skills: ["AI Agents", "Blockchain", "Product Strategy", "GTM", "RAG"],
      icon: <Lightbulb className="h-5 w-5 text-primary-foreground" />
    },
    {
      id: 6,
      title: "DAO Governance for Cooperatives",
      role: "Research Author",
      period: "April 2024 - June 2024",
      description: "Published a comprehensive paper on implementing a DAO (Decentralized Autonomous Organization) as a governance system for cooperatives. The research explored how blockchain-based governance could enhance transparency and efficiency in cooperative organizations.",
      skills: ["Blockchain", "DAO", "Governance", "Research"],
      icon: <FileText className="h-5 w-5 text-primary-foreground" />,
      documentLink: {
        url: "https://drive.google.com/file/d/1CePBG3fKMTNw99k5UTGe0daLZ42G17Bf/view?usp=drive_link",
        label: "View Research Paper"
      }
    },
    {
      id: 7,
      title: "Digital Degree System for Universities",
      role: "Lead Architect & Proposal Lead",
      period: "June - August 2024",
      description: "Worked on a client proposal for building a system for all Indian government universities to issue digital degrees to their students using blockchain technology. The proposed solution aimed to address certificate forgery issues while providing verifiable credentials.",
      skills: ["Blockchain", "Digital Credentials", "Education Technology", "Government Projects"],
      icon: <Lightbulb className="h-5 w-5 text-primary-foreground" />
    },
    {
      id: 8,
      title: "Freedom Wise",
      role: "Solopreneur",
      period: "In Development",
      description: "Personal productivity and financial freedom companion combining AI agents and behavioral insights. Self-developed with AI coding agents.",
      skills: ["AI Agents", "Fintech", "Productivity", "Solo Development"],
      icon: <Cpu className="h-5 w-5 text-primary-foreground" />
    }
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
      <h2 className="text-3xl font-bold text-primary mb-8">Entrepreneurial Journey & Recent Work</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
        
        {/* Timeline entries */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Time marker */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -mt-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  {experience.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                <div className="bg-card p-6 rounded-lg shadow-md hover-glow border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <CalendarClock className="h-3 w-3" />
                      {experience.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{experience.role}</p>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  
                  {experience.externalLink && (
                    <div className="mb-4">
                      <a 
                        href={experience.externalLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        {experience.externalLink.label}
                      </a>
                    </div>
                  )}
                  
                  {experience.documentLink && (
                    <div className="mb-4">
                      <Button asChild variant="outline" size="sm">
                        <a 
                          href={experience.documentLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <FileText size={16} className="mr-1" />
                          {experience.documentLink.label}
                        </a>
                      </Button>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurshipTimeline;
