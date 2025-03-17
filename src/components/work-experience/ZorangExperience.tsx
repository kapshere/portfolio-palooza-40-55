
import { Monitor } from 'lucide-react';
import JobPosition from './JobPosition';

const ZorangExperience = () => {
  return (
    <JobPosition
      title="Technical Director"
      company="Zorang, Inc"
      location="Gurgaon, Haryana, India"
      duration="Dec 2018 - Dec 2019 · 1 yr 1 mo"
      icon={<Monitor className="text-primary" size={24} />}
      skills={["Analytical Skills"]}
      description={
        <>
          <p className="text-gray-700 mb-4">
            Technology director for various verticals for Zorang Inc heading their India operations.
          </p>
          <p className="text-gray-700 mb-4">
            I managed the SFCC/Demandware/Salesforce unit, the In-House Product development unit and a QA Testing and Automation unit among other engineering teams operating at Gurgaon, Bangalore and Pune locations.
          </p>
          <p className="text-gray-700 mb-4">
            I manage multiple client engagements, and closely involved with an In-House AI/ML based Product developed with Zorang.
          </p>
        </>
      }
    />
  );
};

export default ZorangExperience;
