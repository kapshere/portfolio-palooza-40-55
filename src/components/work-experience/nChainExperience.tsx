
import { Code } from 'lucide-react';
import JobPosition from './JobPosition';

const NChainExperience = () => {
  return (
    <JobPosition
      title="Solutions Architect"
      company="nChain"
      location="London, England, United Kingdom"
      duration="Feb 2021 - Sep 2023 · 2 yrs 8 mos"
      icon={<Code className="text-primary" size={24} />}
      skills={[
        "Bitcoin", 
        "Blockchain", 
        "Smart Contracts", 
        "Digital Identity", 
        "Payment Systems", 
        "PKI", 
        "Analytical Skills"
      ]}
      description={
        <>
          <p className="text-gray-700 mb-4">
            Solutions Architect for various projects related to blockchain infrastructure development, digital identity (SSI) and p2p payments with light clients for blockchain.
          </p>
          <p className="text-gray-700 mb-4">
            Worked for an year with pre-sales customer engagements and consultation enabling blockchain use cases. Integration of customer systems with nChain blockchain product suite. Creating RFPs and creating bespoke solutions for specific customer needs.
          </p>
          <p className="text-gray-700 mb-4">
            I have also developed large amount of blockchain education material that exists for BSV blockchain.
          </p>
        </>
      }
    />
  );
};

export default NChainExperience;
