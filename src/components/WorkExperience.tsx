"use client";

import { ReactNode, useState } from 'react';
import { Briefcase, ChevronDown, Book, Monitor, Code, Calendar } from 'lucide-react';

interface JobPositionProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: ReactNode;
  icon: ReactNode;
  skills?: string[];
  animationDelay?: string;
}

const JobPosition = ({ 
  title, 
  company, 
  location, 
  duration, 
  description, 
  icon,
  skills = [],
  animationDelay = "0s"
}: JobPositionProps) => {
  return (
    <div className="mb-16 relative animate-fade-up" style={{ animationDelay }}>
      <div className="absolute -left-10 md:-left-12 p-2 bg-card rounded-full border-4 border-background shadow-sm z-10">
        {icon}
      </div>
      <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow hover-glow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 z-0"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-secondary">{title}</h3>
              <div className="mt-1">
                <span className="font-semibold text-primary">{company}</span> 
                <span className="mx-2 text-muted-foreground">•</span> 
                <span className="text-muted-foreground">{location}</span>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground text-sm font-medium bg-secondary/5 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
              <Calendar size={14} className="mr-1.5" />
              <span>{duration}</span>
            </div>
          </div>
          
          <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/80 mt-6">
            {description}
          </div>
          
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
              {skills.map((skill) => (
                <span key={skill} className="bg-secondary/5 text-secondary text-xs font-medium px-2.5 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface JobExperienceProps {
  companyName: string;
  initialOpen?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const JobExperienceItem = ({ 
  companyName, 
  initialOpen = true, 
  icon = <Briefcase size={24} className="text-primary" />,
  children 
}: JobExperienceProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="max-w-4xl mx-auto mb-10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-card p-5 md:p-6 rounded-2xl shadow-sm border border-border mb-8 cursor-pointer hover:shadow-md hover-glow transition-all group"
      >
        <div className="flex items-center">
          <div className="bg-secondary/5 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-secondary">{companyName}</h3>
        </div>
        <div className="bg-secondary/5 p-2 rounded-full">
          <ChevronDown className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="relative border-l-2 border-border ml-8 md:ml-10 pl-8 md:pl-12 pb-6 mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WorkExperience() {
  return (
    <div className="py-10 bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-primary text-center mb-16 animate-fade-up">
          Work Experiences
        </h2>
         
        {/* Ai4ICPS, IIT Kharagpur */}
        <JobExperienceItem companyName="Ai4ICPS, IIT Kharagpur" icon={<Briefcase size={24} className="text-primary" />}>
          <JobPosition
            title="Chief Technology Officer (CTO)"
            company="Ai4ICPS, IIT Kharagpur"
            location="Kharagpur, West Bengal, India"
            duration="2025 - Present"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["AI/ML", "Technical Leadership", "Research & Development", "Deep Tech Innovation"]}
            description={
              <p className="leading-relaxed">
                Full-time Chief Technology Officer at the AI4ICPS Hub, IIT Kharagpur, driving innovation and technological strategy in Artificial Intelligence and Cyber-Physical Systems.
              </p>
            }
          />
        </JobExperienceItem>
         
        {/* nChain */}
        <JobExperienceItem companyName="nChain" icon={<Code size={24} className="text-primary" />} initialOpen={false}>
          <JobPosition
            title="Solutions Architect"
            company="nChain"
            location="London, England, United Kingdom"
            duration="Feb 2021 - Sep 2023 · 2 yrs 8 mos"
            icon={<Code size={20} className="text-primary" />}
            skills={["Bitcoin", "Blockchain", "Smart Contracts", "Digital Identity", "Payment Systems", "PKI", "Analytical Skills"]}
            description={
              <>
                <p className="mb-4 leading-relaxed">
                  Solutions Architect for various projects related to blockchain infrastructure development, digital identity (SSI) and p2p payments with light clients for blockchain.
                </p>
                <p className="mb-4 leading-relaxed">
                  Worked for an year with pre-sales customer engagements and consultation enabling blockchain use cases. Integration of customer systems with nChain blockchain product suite. Creating RFPs and creating bespoke solutions for specific customer needs.
                </p>
                <p className="leading-relaxed">
                  I have also developed large amount of blockchain education material that exists for BSV blockchain.
                </p>
              </>
            }
          />
        </JobExperienceItem>
        
        {/* BSV Association */}
        <JobExperienceItem companyName="BSV Association" icon={<Book size={24} className="text-primary" />} initialOpen={false}>
          <JobPosition
            title="Curriculum Writer"
            company="BSV Association"
            location="Bengaluru, Karnataka, India"
            duration="Sep 2020 - Sep 2021 · 1 yr 1 mo"
            icon={<Book size={20} className="text-primary" />}
            description={
              <>
                <p className="mb-4 leading-relaxed">
                  Conceived and created the first developer course for academy. 
                </p>
                <p className="leading-relaxed">
                  Contributed to content reviews and webinars, teaching sessions etc.
                </p>
              </>
            }
          />
        </JobExperienceItem>
        
        {/* Book Author */}
        <JobExperienceItem companyName="Bitcoin Blockchain: Protocol for Micropayment" icon={<Book size={24} className="text-primary" />} initialOpen={false}>
          <JobPosition
            title="Author"
            company="Bitcoin Blockchain: Protocol for Micropayment"
            location="Bengaluru, Karnataka, India"
            duration="Oct 2019 - Aug 2020 · 11 mos"
            icon={<Book size={20} className="text-primary" />}
            description={
              <p className="leading-relaxed">
                Authored and published "Bitcoin Blockchain: Protocol for Micropayments (English Edition)". Available on Amazon.
              </p>
            }
          />
        </JobExperienceItem>
        
        {/* Societe Generale */}
        <JobExperienceItem companyName="Société Générale" initialOpen={false}>
          <JobPosition
            title="Program Manager"
            company="Société Générale"
            location="Bengaluru Area, India"
            duration="Jan 2020 - Jan 2021 · 1 yr 1 mo"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Analytical Skills"]}
            description={
              <>
                <p className="mb-4 leading-relaxed">
                  Program Manager for banks transaction banking department heading the program for the migration of Bank's core corporate payment infrastructure from existing to a new Payment engine, Account and liquidity management solutions.
                </p>
                <p className="leading-relaxed">
                  Building team from scratch, in one year I created full portfolio of teams to address various projects in the larger program which was at the level of about 50 in headcount.
                </p>
              </>
            }
          />
        </JobExperienceItem>
        
        {/* Zorang */}
        <JobExperienceItem companyName="Zorang, Inc" initialOpen={false}>
          <JobPosition
            title="Technical Director"
            company="Zorang, Inc"
            location="Gurgaon, Haryana, India"
            duration="Dec 2018 - Dec 2019 · 1 yr 1 mo"
            icon={<Monitor size={20} className="text-primary" />}
            skills={["Analytical Skills"]}
            description={
              <>
                <p className="mb-4 leading-relaxed">
                  Technology director for various verticals for Zorang Inc heading their India operations.
                </p>
                <p className="mb-4 leading-relaxed">
                  I managed the SFCC/Demandware/Salesforce unit, the In-House Product development unit and a QA Testing and Automation unit among other engineering teams operating at Gurgaon, Bangalore and Pune locations.
                </p>
                <p className="leading-relaxed">
                  I manage multiple client engagements, and closely involved with an In-House AI/ML based Product developed with Zorang.
                </p>
              </>
            }
          />
        </JobExperienceItem>
        
        {/* Danske IT */}
        <JobExperienceItem companyName="Danske IT" initialOpen={false}>
          <JobPosition
            title="Senior Manager"
            company="Danske IT and Support Services India Pvt Ltd"
            location="Bangalore"
            duration="Aug 2015 - Nov 2018 · 3 yrs 4 mos"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Program Management", "Product Ownership", "Team and People Management", "Agile, Scrum and Kanban"]}
            description={
              <>
                <p className="mb-4 leading-relaxed">
                  Product Owner and Manager for various Cash Management and Supply Chain Financing products for 
                  Business, Corporate and Institutional customers.
                </p>
                <p className="mb-6 leading-relaxed">
                  Owner of a portfolio of systems and in day to day, develop, maintain and innovate along as equal 
                  partners with Business and Cash Managers to stay ahead in quality, user experience and customer 
                  satisfaction for the Bank.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-secondary/5 p-6 rounded-xl border border-border">
                  <div>
                    <h4 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wider">Domain</h4>
                    <p className="text-sm">
                      Cash management and transaction banking, Domestic, SEPA and cross border payments, Liquidity management products, Supply chain financing products.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2 text-sm uppercase tracking-wider">Tech Stack</h4>
                    <p className="text-sm">
                      PL1, Cobol, CICS, MQ, C#, SAS, R, js, Rest & Soap APIs, Microservices, DB2, Cassandra, BFF.
                    </p>
                  </div>
                </div>
              </>
            }
          />
        </JobExperienceItem>
        
        {/* ITC Infotech */}
        <JobExperienceItem companyName="ITC Infotech" initialOpen={false}>
          {/* Client and Service Provider Box */}
          <div className="bg-card rounded-2xl shadow-sm p-6 mb-12 border border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Client</h3>
              <p className="text-xl font-bold text-secondary">Danske Bank</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Service Provider</h3>
              <p className="text-xl font-bold text-secondary">ITC Infotech</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
              <p className="text-xl font-bold text-secondary">Bangalore, Copenhagen & Aarhus</p>
            </div>
          </div>
          
          <JobPosition
            title="Project Manager Scrum Master"
            company="ITC Infotech"
            location="India and Denmark"
            duration="Jan 2013 - Jul 2015 · 2 yrs 7 mos"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Stakeholder Management", "Team & People Management", "Scrum Master", "Project Management"]}
            description={
              <p className="leading-relaxed">
                Worked as offshore Project manager and overall Scrum master for the project team cross located in India 
                and Denmark for various projects. Project management, scrum master, WBS creation and estimation, 
                project charter, business case development.
              </p>
            }
          />
          
          <JobPosition
            title="Test Manager"
            company="ITC Infotech"
            location="India"
            duration="Jan 2012 - Dec 2012 · 1 yr"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Analytical Skills", "Test Management", "Automation Testing"]}
            description={
              <p className="leading-relaxed">
                Worked as offshore manager and overall Test Manager for a large project where we redesigned the 
                Corporate payments system application and Management of Beneficiary system. Built a wholesome test suite for both Manual and Automation testing.
              </p>
            }
          />
          
          <JobPosition
            title="Solutions Architect"
            company="ITC Infotech"
            location="Bangalore"
            duration="Sep 2008 - Dec 2011 · 3 yrs 4 mos"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["TOGAF", "Solutions Architecture", "SOA"]}
            description={
              <p className="leading-relaxed">
                Designed SOA compliant solutions for core banking user administration, collection services and 
                direct debit systems for nordic regions using z/OS and Compuware stack along with IBM WebSphere suite.
              </p>
            }
          />
        </JobExperienceItem>
        
        {/* Infosys */}
        <JobExperienceItem companyName="Infosys" initialOpen={false}>
          {/* Client Box */}
          <div className="bg-card rounded-2xl shadow-sm p-6 mb-12 border border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Client</h3>
              <p className="text-xl font-bold text-secondary">Ameriprise Financial</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Service Provider</h3>
              <p className="text-xl font-bold text-secondary">Infosys</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
              <p className="text-xl font-bold text-secondary">Bangalore & Minneapolis</p>
            </div>
          </div>
          
          <JobPosition
            title="Application Architect"
            company="Infosys"
            location="Bengaluru Area, India"
            duration="Jan 2007 - Aug 2008 · 1 yr 8 mos"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Analytical Skills", "Architecture", "Mainframe"]}
            description={
              <p className="leading-relaxed">
                Worked as Application and Technical Architect in the Brokerage Services Department using the complete mainframe stack (COBOL, PACBASE, REXX, SAS, DB2).
              </p>
            }
          />
          
          <JobPosition
            title="Tech Lead"
            company="Infosys"
            location="Minneapolis, USA / India"
            duration="Jan 2004 - Dec 2006 · 3 yrs"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Analytical Skills", "Technical Leadership", "Project Management"]}
            description={
              <>
                <p className="mb-4 leading-relaxed">
                  Lead development for a Project from client's location in Minneapolis for Fund Merger and Fund liquidation. 
                </p>
                <p className="leading-relaxed">
                  Created a new system for average cost reporting of tax for brokerage systems. 
                  This project was executed within a hard budget and timeline to go on to win project of the year award.
                </p>
              </>
            }
          />
          
          <JobPosition
            title="Software Developer"
            company="Infosys"
            location="India"
            duration="May 2002 - Dec 2003 · 1 yr 8 mos"
            icon={<Briefcase size={20} className="text-primary" />}
            skills={["Analytical Skills", "Software Development", "Mainframe Technologies"]}
            description={
              <p className="leading-relaxed">
                Worked as a mainframe developer for various project and production support for a Mutual Funds transaction 
                processing and accounting system.
              </p>
            }
          />
        </JobExperienceItem>
      </div>
    </div>
  );
}
