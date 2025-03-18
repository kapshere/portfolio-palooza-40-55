
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarClock, Lightbulb, Briefcase, FileText, Cpu } from 'lucide-react';

const EntrepreneurshipTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Stealth Startup - Super App",
      role: "India CTO & Chief Architect",
      period: "March 2025 - Present",
      description: "Leading a stealth startup building a super app to change the way we use mobile and day to day functionality. Responsible for technology strategy, architecture design, and product development roadmap.",
      skills: ["Mobile Architecture", "Super App", "Blockchain", "LLMs, AI&ML, AI Agents", "Engineering Head"],
      icon: <Cpu className="h-5 w-5 text-primary" />
    },
    {
      id: 2,
      title: "Alan Scott Ominis",
      role: "Architecture Consultant",
      period: "Feb 2025 - Present",
      description: "Architecture Consultant to Alan Scott Ominis – A funded AI agent and startup studio. Providing strategic guidance on AI integration, scalable system design, and technical implementation.",
      skills: ["AI Architecture", "LLM Integration", "Agent Systems", "Technical Strategy"],
      icon: <Briefcase className="h-5 w-5 text-primary" />
    },
    {
      id: 3,
      title: "Verusa",
      role: "Director & Chief Architect",
      period: "Jan 2025 - Present",
      description: "Served as Director and Chief Architect for Verusa (https://verusa.ai/), an incubated startup. Led the technical team in designing and implementing innovative solutions, establishing technical direction, and ensuring architectural integrity.",
      skills: ["AI/ML", "Technical Leadership", "Architecture Design", "Strategic Planning"],
      icon: <Briefcase className="h-5 w-5 text-primary" />
    },
    {
      id: 4,
      title: "DAO Governance for Cooperatives",
      role: "Research Author",
      period: "April 2024 - June 2024 ",
      description: "Published a comprehensive paper on implementing a DAO (Decentralized Autonomous Organization) as a governance system for cooperatives. The research explored how blockchain-based governance could enhance transparency and efficiency in cooperative organizations.",
      skills: ["Blockchain", "DAO", "Governance", "Research"],
      icon: <FileText className="h-5 w-5 text-primary" />
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
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <CalendarClock className="h-3 w-3" />
                      {experience.period}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-3">{experience.role}</p>
                  <p className="text-gray-700 mb-4">{experience.description}</p>
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
