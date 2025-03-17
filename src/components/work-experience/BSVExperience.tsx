
import { Book } from 'lucide-react';
import JobPosition from './JobPosition';

const BSVExperience = () => {
  return (
    <JobPosition
      title="Curriculum Writer"
      company="BSV Association"
      location="Bengaluru, Karnataka, India"
      duration="Sep 2020 - Sep 2021 · 1 yr 1 mo"
      icon={<Book className="text-primary" size={24} />}
      description={
        <>
          <p className="text-gray-700 mb-4">
            Conceived and created the first developer course for academy, 
            <a href="https://academy.bsvblockchain.org/course/bitcoin-development" className="text-primary hover:underline"> https://academy.bsvblockchain.org/course/bitcoin-development</a>.
          </p>
          <p className="text-gray-700 mb-4">
            Contributed to content reviews and webinars, teaching sessions etc.
          </p>
        </>
      }
    />
  );
};

export default BSVExperience;
