
import { Briefcase } from 'lucide-react';
import JobPosition from './JobPosition';

const ITCInfotechExperience = () => {
  return (
    <>
      <JobPosition
        title="Project Manager Scrum Master"
        company="ITC Infotech"
        location="India and Denmark"
        duration="Jan 2013 - Jul 2015 · 2 yrs 7 mos"
        icon={<Briefcase className="text-primary" size={24} />}
        skills={["Analytical Skills", "Scrum Master", "Project Management"]}
        description={
          <>
            <p className="text-gray-700 mb-4">
              Worked as offshore Project manager and overall Scrum master for the project team cross located in India 
              and Denmark for various projects.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Management:</h4>
              <p className="text-gray-700">
                Project management, scrum master, WBS creation and estimation via SMC & 3 point estimates, 
                project charter, business case development and cost benefit analysis, reporting and CMMI 
                compliance in documentation and tracking, monitoring and change management, HR management etc.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Client:</h4>
              <p className="text-gray-700">Danske Bank</p>
            </div>
          </>
        }
      />
      
      <JobPosition
        title="Test Manager"
        company="ITC Infotech"
        location="India"
        duration="Jan 2012 - Dec 2012 · 1 yr"
        icon={<Briefcase className="text-primary" size={24} />}
        skills={["Analytical Skills", "Test Management", "Automation Testing"]}
        animationDelay="0.2s"
        description={
          <>
            <p className="text-gray-700 mb-4">
              Worked as offshore manager and overall Test Manager for a large project where we redesigned the 
              Corporate payments system application and Management of Beneficiary system. This was something I 
              took out of my own interest and the need for the hour for my department. We built a wholesome test 
              suite for doing both Manual and Automation testing during this project. (Tools: Quality center, QTP etc.)
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Client:</h4>
              <p className="text-gray-700">Danske Bank</p>
            </div>
          </>
        }
      />
      
      <JobPosition
        title="Solutions Architect"
        company="ITC Infotech"
        location="Bangalore"
        duration="Sep 2008 - Dec 2011 · 3 yrs 4 mos"
        icon={<Briefcase className="text-primary" size={24} />}
        skills={["Analytical Skills", "Solutions Architecture", "SOA"]}
        animationDelay="0.4s"
        description={
          <>
            <p className="text-gray-700 mb-4">
              Designed SOA compliant solutions for core banking user administration, collection services and 
              direct debit systems for nordic regions.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Tech Stack:</h4>
              <p className="text-gray-700">
                z/OS and Compuware stack along with PL1, Cobol, HTML and JavaScript. 
                IBM WebSphere suite (WebSphere Application Server, MQ etc.)
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Tools:</h4>
              <p className="text-gray-700">
                RTC, RDz, MS Excel, Word, PowerPoint, Project, Quality Center, RQM, QTP
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Process:</h4>
              <p className="text-gray-700">
                CMMI, SCRUM, Agile, Waterfall, RUP, SOA, layered architecture, function points, 4DX etc.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-1">Client:</h4>
              <p className="text-gray-700">Danske Bank</p>
            </div>
          </>
        }
      />
    </>
  );
};

export default ITCInfotechExperience;
