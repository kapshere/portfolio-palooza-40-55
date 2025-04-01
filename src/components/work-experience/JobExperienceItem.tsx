
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
  icon = <Briefcase className="text-primary" size={24} />,
  children 
}: JobExperienceProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <Collapsible 
      open={isOpen} 
      onOpenChange={setIsOpen}
      className="max-w-3xl mx-auto mb-10"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md mb-6 cursor-pointer">
        <div className="flex items-center">
          <div className="text-primary mr-3">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-secondary">{companyName}</h3>
        </div>
        <ChevronDown className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="relative border-l-4 border-primary ml-6 md:ml-0 md:mx-auto pl-8 pb-6">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default JobExperienceItem;
