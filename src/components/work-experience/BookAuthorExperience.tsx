
import { Book } from 'lucide-react';
import JobPosition from './JobPosition';

const BookAuthorExperience = () => {
  return (
    <JobPosition
      title="Author"
      company="Bitcoin Blockchain: Protocol for Micropayment"
      location="Bengaluru, Karnataka, India"
      duration="Oct 2019 - Aug 2020 · 11 mos"
      icon={<Book className="text-primary" size={24} />}
      description={
        <p className="text-gray-700 mb-4">
          Bitcoin Blockchain: Protocol for Micropayments (English Edition)
          <a href="https://www.amazon.com/dp/B08F6SPC5T/ref=cm_sw_r_awdo_JTCZ44KZZCJRT81ES2BR" className="text-primary hover:underline"> https://www.amazon.com/dp/B08F6SPC5T/ref=cm_sw_r_awdo_JTCZ44KZZCJRT81ES2BR</a>
        </p>
      }
    />
  );
};

export default BookAuthorExperience;
