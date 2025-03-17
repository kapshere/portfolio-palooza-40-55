
import { Briefcase } from 'lucide-react';
import JobPosition from './JobPosition';

const InfosysExperience = () => {
  return (
    <>
      <JobPosition
        title="Application Architect"
        company="Infosys"
        location="Bengaluru Area, India"
        duration="Jan 2007 - Aug 2008 · 1 yr 8 mos"
        icon={<Briefcase className="text-primary" size={24} />}
        skills={["Analytical Skills", "Architecture", "Mainframe"]}
        description={
          <>
            <p className="text-gray-700 mb-4">
              Worked as Application and Technical Architect in the Brokerage Services Department for client, Ameriprise Financial.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Tech Stack:</h4>
              <p className="text-gray-700">Complete mainframe stack (COBOL, PACBASE, REXX, SAS, CA utility suite, IMS DB and DB2)</p>
            </div>
          </>
        }
      />
      
      <JobPosition
        title="Tech Lead"
        company="Infosys"
        location="Minneapolis, USA / India"
        duration="Jan 2004 - Dec 2006 · 3 yrs"
        icon={<Briefcase className="text-primary" size={24} />}
        skills={["Analytical Skills", "Technical Leadership", "Project Management"]}
        animationDelay="0.2s"
        description={
          <>
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
          </>
        }
      />
      
      <JobPosition
        title="Software Developer"
        company="Infosys"
        location="India"
        duration="May 2002 - Dec 2003 · 1 yr 8 mos"
        icon={<Briefcase className="text-primary" size={24} />}
        skills={["Analytical Skills", "Software Development", "Mainframe Technologies"]}
        animationDelay="0.4s"
        description={
          <>
            <p className="text-gray-700 mb-4">
              Worked as a mainframe developer for various project and production support for a Mutual Funds transaction 
              processing and accounting system.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Key Contributions:</h4>
              <p className="text-gray-700">A whole lot of coding, testing and reviews. Client: Ameriprise Financial</p>
            </div>
          </>
        }
      />
    </>
  );
};

export default InfosysExperience;
