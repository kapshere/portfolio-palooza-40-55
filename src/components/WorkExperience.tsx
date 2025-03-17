
import { Book, Briefcase } from 'lucide-react';
import JobExperienceItem from './work-experience/JobExperienceItem';
import NChainExperience from './work-experience/nChainExperience';
import BSVExperience from './work-experience/BSVExperience';
import BookAuthorExperience from './work-experience/BookAuthorExperience';
import SocieteGeneraleExperience from './work-experience/SocieteGeneraleExperience';
import ZorangExperience from './work-experience/ZorangExperience';
import DanskeITExperience from './work-experience/DanskeITExperience';
import ITCInfotechExperience from './work-experience/ITCInfotechExperience';
import InfosysExperience from './work-experience/InfosysExperience';

const WorkExperience = () => {
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
        
        {/* nChain */}
        <JobExperienceItem companyName="nChain" icon={<Briefcase className="text-primary" size={24} />}>
          <NChainExperience />
        </JobExperienceItem>
        
        {/* BSV Association */}
        <JobExperienceItem companyName="BSV Association" icon={<Book className="text-primary" size={24} />}>
          <BSVExperience />
        </JobExperienceItem>
        
        {/* Book Author */}
        <JobExperienceItem companyName="Bitcoin Blockchain: Protocol for Micropayment" icon={<Book className="text-primary" size={24} />}>
          <BookAuthorExperience />
        </JobExperienceItem>
        
        {/* Societe Generale */}
        <JobExperienceItem companyName="Société Générale">
          <SocieteGeneraleExperience />
        </JobExperienceItem>
        
        {/* Zorang */}
        <JobExperienceItem companyName="Zorang, Inc">
          <ZorangExperience />
        </JobExperienceItem>
        
        {/* Danske IT */}
        <JobExperienceItem companyName="Danske IT">
          <DanskeITExperience />
        </JobExperienceItem>
        
        {/* ITC Infotech */}
        <JobExperienceItem companyName="ITC Infotech">
          <ITCInfotechExperience />
        </JobExperienceItem>
        
        {/* Infosys */}
        <JobExperienceItem companyName="Infosys">
          <InfosysExperience />
        </JobExperienceItem>
      </div>
    </section>
  );
};

export default WorkExperience;
