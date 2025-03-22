
import { BookText, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Publications
        </h2>
        
        {/* First publication - Book */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up mb-16">
          <div className="lg:w-1/3">
            <img 
              src="/public/Images/Bitcoin Blockchain.png" 
              alt="Learning Bitcoin SV book cover" 
              className="w-full max-w-xs mx-auto shadow-lg rounded-lg"
              onError={(e) => {
                console.error("Failed to load book cover image");
                e.currentTarget.src = "/placeholder.svg";
              }}
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
        
        {/* Second publication - Protocol Documentation */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up mb-16">
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 max-w-xs mx-auto h-full flex items-center justify-center">
              <FileText size={120} className="text-primary opacity-70" />
            </div>
          </div>
          <div className="lg:w-2/3 max-w-2xl order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-secondary mb-3">Bitcoin Protocol Documentation</h3>
            <p className="text-gray-700 mb-4">
              Authored and published comprehensive technical documentation for the Bitcoin protocol as part of work at nChain. 
              This documentation serves as a definitive resource for developers and enterprises looking to build on the Bitcoin SV blockchain, 
              covering protocol specifications, implementation details, and best practices.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Protocol Specification</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Technical Writing</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Bitcoin SV</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Blockchain</span>
            </div>
            <Button asChild>
              <a 
                href="https://docs.bsvblockchain.org/protocol/introduction" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <FileText className="mr-2" />
                View Documentation
              </a>
            </Button>
          </div>
        </div>
        
        {/* Third publication - Enterprise Blockchain E-Book */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up">
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 max-w-xs mx-auto h-full flex items-center justify-center">
              <BookText size={120} className="text-primary opacity-70" />
            </div>
          </div>
          <div className="lg:w-2/3 max-w-2xl">
            <h3 className="text-2xl font-bold text-secondary mb-3">Enterprise Blockchain Products Using the BSV Blockchain</h3>
            <p className="text-gray-700 mb-4">
              This e-book explores the implementation of enterprise-grade blockchain solutions using the BSV blockchain. 
              It covers key architectural patterns, integration strategies, and real-world use cases for businesses 
              looking to leverage blockchain technology for improved efficiency, transparency, and security.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Enterprise Blockchain</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">BSV</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Product Architecture</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Implementation Guide</span>
            </div>
            <Button asChild>
              <a 
                href="/Enterprise-blockchain-products-using-the-bsv-blockchain-ebook.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <BookText className="mr-2" />
                Download E-Book
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
