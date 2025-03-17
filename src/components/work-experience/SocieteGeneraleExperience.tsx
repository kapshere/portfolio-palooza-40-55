
import { Briefcase } from 'lucide-react';
import JobPosition from './JobPosition';

const SocieteGeneraleExperience = () => {
  return (
    <JobPosition
      title="Program Manager"
      company="Société Générale"
      location="Bengaluru Area, India"
      duration="Jan 2020 - Jan 2021 · 1 yr 1 mo"
      icon={<Briefcase className="text-primary" size={24} />}
      skills={["Analytical Skills"]}
      description={
        <>
          <p className="text-gray-700 mb-4">
            Program Manager for banks transaction banking department heading the program for the migration of Bank's core corporate payment infrastructure from existing to a new Payment engine, Account and liquidity management solutions.
          </p>
          <p className="text-gray-700 mb-4">
            Building team from scratch, in one year I created full portfolio of teams to address various projects in the larger program which was at the level of about 50 in headcount.
          </p>
        </>
      }
    />
  );
};

export default SocieteGeneraleExperience;
