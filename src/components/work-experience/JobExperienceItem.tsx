
import { ReactNode, useState } from 'react';
import { Briefcase, Calendar, ChevronDown, Book, Monitor, Code } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SkillTag {
  name: string;
}

interface JobExperienceProps {
  companyName: string;
  initialOpen?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const JobExperienceItem = ({ 
  companyName, 
  initialOpen = true, 
  icon = <Briefcase className="text-primary dark:text-blue-400" size={24} />,
  children 
}: JobExperienceProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className="max-w-3xl mx-auto mb-10"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6 cursor-pointer hover-glow border border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="text-primary dark:text-blue-400 mr-3">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-secondary dark:text-white">{companyName}</h3>
        </div>
        <ChevronDown className={`text-primary dark:text-blue-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="relative border-l-4 border-primary dark:border-blue-400 ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default JobExperienceItem;
