
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
        <JobExperienceItem companyName="Infosys : working for client Ameriprise Financial">
          <InfosysExperience />
        </JobExperienceItem>
      </div>
    </section>
  );
};

export default WorkExperience;
