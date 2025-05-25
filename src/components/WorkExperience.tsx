
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
    <section id="workexperience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-12 text-center">
          Work Experiences
        </h2>
         
        {/* nChain */}
        <JobExperienceItem companyName="nChain" icon={<Briefcase className="text-primary dark:text-blue-400" size={24} />}>
          <NChainExperience />
        </JobExperienceItem>
        
        {/* BSV Association */}
        <JobExperienceItem companyName="BSV Association" icon={<Book className="text-primary dark:text-blue-400" size={24} />}>
          <BSVExperience />
        </JobExperienceItem>
        
        {/* Book Author */}
        <JobExperienceItem companyName="Bitcoin Blockchain: Protocol for Micropayment" icon={<Book className="text-primary dark:text-blue-400" size={24} />}>
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
        {/* Client and Service Provider Box */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Client</h3>
              <p className="text-xl font-bold text-primary dark:text-blue-400">Danske Bank</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Service Provider</h3>
              <p className="text-xl font-bold text-primary dark:text-blue-400">ITC Infotech</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Location</h3>
              <p className="text-xl font-bold text-primary dark:text-blue-400">Bangalore, Copenhagen & Aarhus</p>
            </div>
          </div>
        </div>
          <ITCInfotechExperience />
        </JobExperienceItem>
        
        {/* Infosys */}
        <JobExperienceItem companyName="Infosys">
        {/* Client and Service Provider Box */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Client</h3>
              <p className="text-xl font-bold text-primary dark:text-blue-400">Ameriprise Financial</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Service Provider</h3>
              <p className="text-xl font-bold text-primary dark:text-blue-400">Infosys</p>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Location</h3>
              <p className="text-xl font-bold text-primary dark:text-blue-400">Bangalore & Minneapolis</p>
            </div>
          </div>
        </div>
          <InfosysExperience />
        </JobExperienceItem>
      </div>
    </section>
  );
};

export default WorkExperience;
