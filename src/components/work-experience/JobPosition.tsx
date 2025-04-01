
import { ReactNode } from 'react';
import { Calendar } from 'lucide-react';

interface JobPositionProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: ReactNode;
  icon: ReactNode;
  skills?: string[];
  animationDelay?: string;
}

const JobPosition = ({ 
  title, 
  company, 
  location, 
  duration, 
  description, 
  icon,
  skills = [],
  animationDelay = "0s"
}: JobPositionProps) => {
  return (
    <div className="mb-16 relative animate-fade-up" style={{ animationDelay }}>
      <div className="absolute -left-12 p-2 bg-white rounded-full border-4 border-primary">
        {icon}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md hover-glow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-bold text-secondary">{title}</h3>
          <div className="flex items-center text-gray-600 mt-2 md:mt-0">
            <Calendar size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-primary">{company}</span> • <span className="text-gray-600">{location}</span>
        </div>
        
        {description}
        
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill) => (
              <span key={skill} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPosition;
