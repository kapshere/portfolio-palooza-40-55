import { BookText, FileText } from 'lucide-react';
import Image from 'next/image';

export default function PublicationsPage() {
  return (
    <div className="page-wrapper pt-10">
      <div className="section-container">
        <h1 className="heading-primary animate-fade-up">Publications</h1>
        
        {/* First publication - Book */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up mb-16 bg-card p-8 rounded-2xl shadow-sm border border-border" style={{ animationDelay: '0.1s' }}>
          <div className="lg:w-1/3 relative h-64 w-48 shadow-xl rounded-lg overflow-hidden group">
            <Image 
              src="/Images/Bitcoin Blockchain.png" 
              alt="Learning Bitcoin SV book cover" 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="lg:w-2/3 max-w-2xl">
            <h2 className="text-2xl font-bold text-secondary mb-3">Learning Bitcoin SV: The Original Bitcoin & Global Public Blockchain for Enterprise</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This comprehensive guide explores the Bitcoin protocol, explaining the internal workings of the blockchain, 
              cryptography, and advanced application layer protocols. The book covers everything from creating applications 
              using Bitcoin as a public registry to developing on the Metanet protocol and implementing tokenized solutions.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Blockchain</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Bitcoin SV</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Enterprise Solutions</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Cryptography</span>
            </div>
            <a 
              href="https://www.amazon.in/dp/9389898099" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-all hover:-translate-y-0.5"
            >
              <BookText size={18} className="mr-2" />
              View on Amazon
            </a>
          </div>
        </div>
        
        {/* Second publication - Protocol Documentation */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up mb-16 bg-card p-8 rounded-2xl shadow-sm border border-border" style={{ animationDelay: '0.2s' }}>
          <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
            <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10 flex items-center justify-center">
              <FileText size={100} className="text-primary opacity-80" />
            </div>
          </div>
          <div className="lg:w-2/3 max-w-2xl order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-secondary mb-3">Bitcoin Protocol Documentation</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Authored and published comprehensive technical documentation for the Bitcoin protocol as part of work at nChain. 
              This documentation serves as a definitive resource for developers and enterprises looking to build on the Bitcoin SV blockchain, 
              covering protocol specifications, implementation details, and best practices.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Protocol Specification</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Technical Writing</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Bitcoin SV</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Blockchain</span>
            </div>
            <a 
              href="https://docs.bsvblockchain.org/protocol/introduction" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-all hover:-translate-y-0.5"
            >
              <FileText size={18} className="mr-2" />
              View Documentation
            </a>
          </div>
        </div>
        
        {/* Third publication - Enterprise Blockchain E-Book */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up bg-card p-8 rounded-2xl shadow-sm border border-border" style={{ animationDelay: '0.3s' }}>
          <div className="lg:w-1/3 flex justify-center">
            <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10 flex items-center justify-center">
              <BookText size={100} className="text-primary opacity-80" />
            </div>
          </div>
          <div className="lg:w-2/3 max-w-2xl">
            <h2 className="text-2xl font-bold text-secondary mb-3">Enterprise Blockchain Products Using the BSV Blockchain</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This e-book explores the implementation of enterprise-grade blockchain solutions using the BSV blockchain. 
              It covers key architectural patterns, integration strategies, and real-world use cases for businesses 
              looking to leverage blockchain technology for improved efficiency, transparency, and security.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Enterprise Blockchain</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">BSV</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Product Architecture</span>
              <span className="bg-secondary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">Implementation Guide</span>
            </div>
            <a 
              href="https://drive.google.com/file/d/1euXbRSLy66MJLqNWxi_8xqPaTMloTvgm/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-all hover:-translate-y-0.5"
            >
              <BookText size={18} className="mr-2" />
              View E-Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
