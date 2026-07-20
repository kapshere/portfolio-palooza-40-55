import { CalendarClock, Lightbulb, Briefcase, FileText, Cpu, ExternalLink } from 'lucide-react';

export default function EntrepreneurshipPage() {
  const experiences = [
    {
      id: 1,
      title: "aCausal Labs Private Limited",
      role: "Founder",
      period: "Dec 2025 - Present",
      description: "Building Freedom Wise: A game changing product for personal finance to help people in achieving financial freedom.",
      skills: ["Mobile Architecture", "Fintech", "Blockchain", "LLMs, AI Agents"],
      icon: <Cpu size={20} className="text-primary-foreground" />
    },
    {
      id: 2,
      title: "Verusa",
      role: "Co-founder & Chief Architect",
      period: "Nov 2024 - Present",
      description: "Co-founded an AI-first platform focused on cryptocurrency compliance, identity, and risk analytics. Architecting LLM-based agents for KYC/AML workflows, document intelligence, and ongoing monitoring — combining RAG with policy-aware guardrails and domain-specific evaluation pipelines. Supporting GTM, solutioning, proof-of-value designs, and executive briefings.",
      skills: ["AI/ML", "LLM Agents", "KYC/AML", "RAG", "Architecture Design"],
      icon: <Briefcase size={20} className="text-primary-foreground" />,
      externalLink: {
        url: "https://verusa.ai/",
        label: "Visit Verusa.AI"
      }
    },
    {
      id: 3,
      title: "ZYND Protocol & Alan Scott Enterprises",
      role: "Strategic Advisor & Protocol Co-designer",
      period: "2024 - 2025",
      description: "Co-designed protocol and reference architecture for ZYND, an AI-driven on-chain/off-chain orchestration layer under the Alan Scott/Omnis umbrella, focusing on data integrity, identity, and agent coordination. Strategic advisor to an AI startup hub incubating B2B AI products; defined reusable technical patterns across portfolio companies.",
      skills: ["AI Architecture", "Protocol Design", "Agent Systems", "Technical Strategy"],
      icon: <Briefcase size={20} className="text-primary-foreground" />
    },
    {
      id: 4,
      title: "Independent Technology Consultant & Startup Advisor",
      role: "Consultant & Advisor",
      period: "Jan 2024 - Dec 2025",
      description: "Advising and mentoring multiple early-stage AI/blockchain startups on product strategy, architecture, and GTM — often acting as an extended co-founder for design, hiring, and fundraising narratives. Designed and implemented AI agents and LLM-backed features for AML/fraud detection, stock market analysis, and enterprise search.",
      skills: ["AI Agents", "Blockchain", "Product Strategy", "GTM", "RAG"],
      icon: <Lightbulb size={20} className="text-primary-foreground" />
    },
    {
      id: 5,
      title: "DAO Governance for Cooperatives",
      role: "Research Author",
      period: "April 2024 - June 2024",
      description: "Published a comprehensive paper on implementing a DAO (Decentralized Autonomous Organization) as a governance system for cooperatives. The research explored how blockchain-based governance could enhance transparency and efficiency in cooperative organizations.",
      skills: ["Blockchain", "DAO", "Governance", "Research"],
      icon: <FileText size={20} className="text-primary-foreground" />,
      documentLink: {
        url: "https://drive.google.com/file/d/1CePBG3fKMTNw99k5UTGe0daLZ42G17Bf/view?usp=drive_link",
        label: "View Research Paper"
      }
    },
    {
      id: 6,
      title: "Digital Degree System for Universities",
      role: "Lead Architect & Proposal Lead",
      period: "June - August 2024",
      description: "Worked on a client proposal for building a system for all Indian government universities to issue digital degrees to their students using blockchain technology. The proposed solution aimed to address certificate forgery issues while providing verifiable credentials.",
      skills: ["Blockchain", "Digital Credentials", "Education Technology", "Government Projects"],
      icon: <Lightbulb size={20} className="text-primary-foreground" />
    }
  ];

  return (
    <div className="page-wrapper pt-10">
      <div className="section-container max-w-5xl">
        <h1 className="heading-primary animate-fade-up">Entrepreneurial Journey & Recent Work</h1>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline entries */}
          <div className="space-y-12 pb-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Time marker */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-6 md:-mt-2">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background z-10 relative">
                    {experience.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12 ml-12 md:ml-0'}`}>
                  <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border group relative">
                    {/* Connecting line for mobile */}
                    <div className="md:hidden absolute top-10 -left-12 w-12 h-0.5 bg-border"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                      <h3 className="text-xl font-bold text-secondary">{experience.title}</h3>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/5 text-primary text-xs font-medium border border-primary/10 whitespace-nowrap">
                        <CalendarClock size={14} />
                        {experience.period}
                      </div>
                    </div>
                    
                    <p className="text-primary font-semibold mb-4 text-sm">{experience.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>
                    
                    {experience.externalLink && (
                      <div className="mb-6">
                        <a 
                          href={experience.externalLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1.5" />
                          {experience.externalLink.label}
                        </a>
                      </div>
                    )}
                    
                    {experience.documentLink && (
                      <div className="mb-6">
                        <a 
                          href={experience.documentLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 border border-border text-sm font-medium rounded-md text-secondary bg-transparent hover:bg-secondary/5 transition-colors"
                        >
                          <FileText size={16} className="mr-1.5" />
                          {experience.documentLink.label}
                        </a>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                      {experience.skills.map((skill) => (
                        <span key={skill} className="bg-secondary/5 text-secondary text-xs font-medium px-2.5 py-1 rounded-md">
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
      </div>
    </div>
  );
}
