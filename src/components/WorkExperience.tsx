
import { Briefcase, Calendar, ChevronDown, Book, Monitor, Code } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from 'react';

const WorkExperience = () => {
  const [isInfosysOpen, setIsInfosysOpen] = useState(true);
  const [isITCOpen, setIsITCOpen] = useState(true);
  const [isDanskeOpen, setIsDanskeOpen] = useState(true);
  const [isZorangOpen, setIsZorangOpen] = useState(true);
  const [isSocGenOpen, setIsSocGenOpen] = useState(true);
  const [isBSVOpen, setIsBSVOpen] = useState(true);
  const [isNChainOpen, setIsNChainOpen] = useState(true);
  const [isBookOpen, setIsBookOpen] = useState(true);

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
        
        {/* nChain Collapsible Timeline */}
        <Collapsible 
          open={isNChainOpen} 
          onOpenChange={setIsNChainOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">nChain</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isNChainOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* nChain - Solutions Architect */}
              <div className="relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Code className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Solutions Architect</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Feb 2021 - Sep 2023 · 2 yrs 8 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">nChain</span> • <span className="text-gray-600">London, England, United Kingdom</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Solutions Architect for various projects related to blockchain infrastructure development, digital identity (SSI) and p2p payments with light clients for blockchain.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Worked for an year with pre-sales customer engagements and consultation enabling blockchain use cases. Integration of customer systems with nChain blockchain product suite. Creating RFPs and creating bespoke solutions for specific customer needs.
                  </p>
                  <p className="text-gray-700 mb-4">
                    I have also developed large amount of blockchain education material that exists for BSV blockchain.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Bitcoin</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Blockchain</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Smart Contracts</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Digital Identity</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Payment Systems</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">PKI</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* BSV Association Collapsible Timeline */}
        <Collapsible 
          open={isBSVOpen} 
          onOpenChange={setIsBSVOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">BSV Association</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isBSVOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* BSV Association - Curriculum Writer */}
              <div className="relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Book className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Curriculum Writer</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Sep 2020 - Sep 2021 · 1 yr 1 mo</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">BSV Association</span> • <span className="text-gray-600">Bengaluru, Karnataka, India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Conceived and created the first developer course for academy, 
                    <a href="https://academy.bsvblockchain.org/course/bitcoin-development" className="text-primary hover:underline"> https://academy.bsvblockchain.org/course/bitcoin-development</a>.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Contributed to content reviews and webinars, teaching sessions etc.
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Book Author Collapsible Timeline */}
        <Collapsible 
          open={isBookOpen} 
          onOpenChange={setIsBookOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Book className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Bitcoin Blockchain: Protocol for Micropayment</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isBookOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* Book Author */}
              <div className="relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Book className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Author</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Oct 2019 - Aug 2020 · 11 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Bitcoin Blockchain: Protocol for Micropayment</span> • <span className="text-gray-600">Bengaluru, Karnataka, India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Bitcoin Blockchain: Protocol for Micropayments (English Edition)
                    <a href="https://www.amazon.com/dp/B08F6SPC5T/ref=cm_sw_r_awdo_JTCZ44KZZCJRT81ES2BR" className="text-primary hover:underline"> https://www.amazon.com/dp/B08F6SPC5T/ref=cm_sw_r_awdo_JTCZ44KZZCJRT81ES2BR</a>
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Societe Generale Collapsible Timeline */}
        <Collapsible 
          open={isSocGenOpen} 
          onOpenChange={setIsSocGenOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Société Générale</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isSocGenOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* Societe Generale - Program Manager */}
              <div className="relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Program Manager</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Jan 2020 - Jan 2021 · 1 yr 1 mo</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Société Générale</span> • <span className="text-gray-600">Bengaluru Area, India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Program Manager for banks transaction banking department heading the program for the migration of Bank's core corporate payment infrastructure from existing to a new Payment engine, Account and liquidity management solutions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Building team from scratch, in one year I created full portfolio of teams to address various projects in the larger program which was at the level of about 50 in headcount.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Zorang Collapsible Timeline */}
        <Collapsible 
          open={isZorangOpen} 
          onOpenChange={setIsZorangOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Zorang, Inc</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isZorangOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* Zorang - Technical Director */}
              <div className="relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Monitor className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Technical Director</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Dec 2018 - Dec 2019 · 1 yr 1 mo</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Zorang, Inc</span> • <span className="text-gray-600">Gurgaon, Haryana, India</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Technology director for various verticals for Zorang Inc heading their India operations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    I managed the SFCC/Demandware/Salesforce unit, the In-House Product development unit and a QA Testing and Automation unit among other engineering teams operating at Gurgaon, Bangalore and Pune locations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    I manage multiple client engagements, and closely involved with an In-House AI/ML based Product developed with Zorang.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Danske IT Collapsible Timeline */}
        <Collapsible 
          open={isDanskeOpen} 
          onOpenChange={setIsDanskeOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Danske IT</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isDanskeOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* Danske IT - Senior Manager */}
              <div className="relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Senior Manager</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Aug 2015 - Nov 2018 · 3 yrs 4 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">Danske IT and Support Services India Pvt Ltd</span> • <span className="text-gray-600">Bangalore</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Product Owner and Manager for various Cash Management and Supply Chain Financing products for 
                    Business, Corporate and Institutional customers.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Owner of a portfolio of systems and in day to day, develop, maintain and innovate along as equal 
                    partners with Business and Cash Managers to stay ahead in quality, user experience and customer 
                    satisfaction for the Bank.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Domain:</h4>
                    <p className="text-gray-700">
                      Cash management and transaction banking, Domestic, SEPA and cross border payments, local and swift 
                      file formats, mobile payments, Liquidity management products, Supply chain financing products like 
                      reverse factoring, factoring. E-invoices and Creditor and debtor management systems.
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Implementation experience of analytics and data visualization for payments, cross selling of products 
                    to customers.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Tech Stack:</h4>
                    <p className="text-gray-700">
                      PL1, Cobol, CICS, MQ, C#, SAS, R, js, Rest & Soap APIs, Microservices. Microsoft stack for Application development, 
                      angular 2&4, datapower, kafka, html, js., DB2, Cassandra, BFF etc.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Tools:</h4>
                    <p className="text-gray-700">
                      Jira, confluence, rational tools, sas studio, Slack
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Process:</h4>
                    <p className="text-gray-700">
                      agile/scrum, agile @ scale, kanban
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Product Ownership</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Cash Management</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* ITC Infotech Collapsible Timeline */}
        <Collapsible 
          open={isITCOpen} 
          onOpenChange={setIsITCOpen}
          className="max-w-3xl mx-auto mb-10"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">ITC Infotech</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isITCOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
              {/* ITC Infotech - Project Manager Scrum Master */}
              <div className="mb-16 relative animate-fade-up">
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Project Manager Scrum Master</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Jan 2013 - Jul 2015 · 2 yrs 7 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">ITC Infotech</span> • <span className="text-gray-600">India and Denmark</span>
                  </div>
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Scrum Master</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Project Management</span>
                  </div>
                </div>
              </div>
              
              {/* ITC Infotech - Test Manager */}
              <div className="mb-16 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Test Manager</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Jan 2012 - Dec 2012 · 1 yr</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">ITC Infotech</span> • <span className="text-gray-600">India</span>
                  </div>
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Test Management</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Automation Testing</span>
                  </div>
                </div>
              </div>
              
              {/* ITC Infotech - Solutions Architect */}
              <div className="relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary">Solutions Architect</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>Sep 2008 - Dec 2011 · 3 yrs 4 mos</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-primary">ITC Infotech</span> • <span className="text-gray-600">Bangalore</span>
                  </div>
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
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Analytical Skills</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Solutions Architecture</span>
                    <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">SOA</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Infosys Collapsible Timeline */}
        <Collapsible 
          open={isInfosysOpen} 
          onOpenChange={setIsInfosysOpen}
          className="max-w-3xl mx-auto"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
            <div className="flex items-center">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Infosys</h3>
            </div>
            <ChevronDown className={`text-primary transition-transform duration-200 ${isInfosysOpen ? 'rotate-180' : ''}`} />
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
