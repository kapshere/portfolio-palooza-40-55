
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from 'react';

const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="workexperience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Work Experiences
        </h2>
        
        {/* Client and Service Provider Box */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Client</h3>
              <p className="text-xl font-bold text-primary">Ameriprise Financial</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800">Service Provider</h3>
              <p className="text-xl font-bold text-primary">Infosys</p>
            </div>
          </div>
        </div>
        
        {/* Collapsible Timeline */}
        <Collapsible 
          open={isOpen} 
          onOpenChange={setIsOpen}
          className="max-w-3xl mx-auto"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Infosys</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* Infosys - Application Architect */}
              <div className="mb-16 relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Application Architect</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Jan 2007 - Aug 2008 · 1 yr 8 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Infosys</span> • <span className="text-gray-600">Bengaluru Area, India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Worked as Application and Technical Architect in the Brokerage Services Department for client, Ameriprise Financial.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Tech Stack:</h4>
                    <p className="text-gray-700">Complete mainframe stack (COBOL, PACBASE, REXX, SAS, CA utility suite, IMS DB and DB2)</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Architecture</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Mainframe</span>
                  </div>
                </div>
              </div>
              
              {/* Infosys - Tech Lead */}
              <div className="mb-16 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Tech Lead</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Jan 2004 - Dec 2006 · 3 yrs</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Infosys</span> • <span className="text-gray-600">Minneapolis, USA / India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Lead development for a Project from client's location in Minneapolis for Fund Merger and Fund liquidation. 
                    I was the key contributor for developing and maintaining of the mutual funds system of record for couple of years for this engagement.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Year 2006 we created a (New IP) new system of creating average cost reporting of tax for borkerage systems. 
                    This project was executed within a hard budget and timeline to go on to win project of the year award.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Key Contributions:</h4>
                    <p className="text-gray-700">A whole lot of coding, testing and reviews. Client: Ameriprise Financial</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Technical Leadership</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Project Management</span>
                  </div>
                </div>
              </div>
              
              {/* Infosys - Software Developer */}
              <div className="relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Software Developer</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>May 2002 - Dec 2003 · 1 yr 8 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Infosys</span> • <span className="text-gray-600">India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Worked as a mainframe developer for various project and production support for a Mutual Funds transaction 
                    processing and accounting system.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Key Contributions:</h4>
                    <p className="text-gray-700">A whole lot of coding, testing and reviews. Client: Ameriprise Financial</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Software Development</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Mainframe Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default WorkExperience;
