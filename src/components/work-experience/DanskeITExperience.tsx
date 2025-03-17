
import { Briefcase } from 'lucide-react';
import JobPosition from './JobPosition';

const DanskeITExperience = () => {
  return (
    <JobPosition
      title="Senior Manager"
      company="Danske IT and Support Services India Pvt Ltd"
      location="Bangalore"
      duration="Aug 2015 - Nov 2018 · 3 yrs 4 mos"
      icon={<Briefcase className="text-primary" size={24} />}
      skills={["Analytical Skills", "Product Ownership", "Cash Management"]}
      description={
        <>
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
        </>
      }
    />
  );
};

export default DanskeITExperience;
