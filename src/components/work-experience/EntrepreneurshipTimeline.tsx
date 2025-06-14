
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, Lightbulb, Briefcase, FileText, Cpu, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EntrepreneurshipTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Stealth Startup",
      role: "Co-Founder",
      period: "June 2025 - Present",
      description: "Exploring some Ideas to change the way we work",
      skills: ["Architecture", "AI Agents & LLMs", "Blockchain", "Consulting & Training", "Co-Founder"],
      icon: <Cpu className="h-5 w-5 text-primary" />
    },
    {
      id: 2,
      title: "Alan Scott Enterprise",
      role: "Strategic Advisor",
      period: "May 2025 - Present",
      description: "Advising company leadership on their foray into scalable architecture, Blockchain and AI across their line of products. A public company with many subsidiaries which are focused on Agriculture, Retail, Healthcare and Financial Services domain and building solutions with emergigng technologies and innovations that are part of their R&D unit",
      skills: ["Architecture", "Regulatory Alignment", "AI/Blockchain/IOT", "Product Strategy"],
      icon: <Briefcase className="h-5 w-5 text-primary" />
      externalLink: {
        url: "https://thealanscott.com/"
      }
    },
    {
      id: 3,
      title: "Verusa",
      role: "Director & Chief Architect",
      period: "Jan 2025 - Present",
      description: "Advisor and Chief Architect for Verusa, an incubated startup. Led the technical team in designing and implementing innovative solutions, establishing technical direction, and ensuring architectural integrity.",
      skills: ["AI/ML", "Technical Leadership", "Architecture Design", "Strategic Planning"],
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      externalLink: {
        url: "https://verusa.ai/"
      }
    },
    {
      id: 4,
      title: "DAO Governance for Cooperatives",
      role: "Research Author",
      period: "April 2024 - June 2024 ",
      description: "Published a comprehensive paper on implementing a DAO (Decentralized Autonomous Organization) as a governance system for cooperatives. The research explored how blockchain-based governance could enhance transparency and efficiency in cooperative organizations.",
      skills: ["Blockchain", "DAO", "Governance", "Research"],
      icon: <FileText className="h-5 w-5 text-primary" />,
      documentLink: {
        url: "https://drive.google.com/file/d/1CePBG3fKMTNw99k5UTGe0daLZ42G17Bf/view?usp=drive_link",
        label: "View Research Paper"
      }
    },
    {
      id: 5,
      title: "Digital Degree System for Universities",
      role: "Lead Architect & Proposal Lead",
      period: "June - August 2024",
      description: "Worked on a client proposal for building a system for all Indian government universities to issue digital degrees to their students using blockchain technology. The proposed solution aimed to address certificate forgery issues while providing verifiable credentials.",
      skills: ["Blockchain", "Digital Credentials", "Education Technology", "Government Projects"],
      icon: <Lightbulb className="h-5 w-5 text-primary" />
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
                <div className="bg-white p-6 rounded-lg shadow-md hover-glow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <CalendarClock className="h-3 w-3" />
                      {experience.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{experience.role}</p>
                  <p className="text-gray-700 mb-4">{experience.description}</p>
                  
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
