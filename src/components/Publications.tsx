
import { BookText } from 'lucide-react';
import { Button } from './ui/button';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Publications
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up">
          <div className="lg:w-1/3">
            <img 
              src="/lovable-uploads/32a123f1-bbb1-4fdb-9649-1108cd654387.png" 
              alt="Learning Bitcoin SV book cover" 
              className="w-full max-w-xs mx-auto shadow-lg rounded-lg"
            />
          </div>
          <div className="lg:w-2/3 max-w-2xl">
            <h3 className="text-2xl font-bold text-secondary mb-3">Learning Bitcoin SV: The Original Bitcoin & Global Public Blockchain for Enterprise</h3>
            <p className="text-gray-700 mb-4">
              This comprehensive guide explores the Bitcoin protocol, explaining the internal workings of the blockchain, 
              cryptography, and advanced application layer protocols. The book covers everything from creating applications 
              using Bitcoin as a public registry to developing on the Metanet protocol and implementing tokenized solutions.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Blockchain</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Bitcoin SV</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Enterprise Solutions</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Cryptography</span>
            </div>
            <Button asChild>
              <a 
                href="https://www.amazon.in/dp/9389898099" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <BookText className="mr-2" />
                View on Amazon
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
