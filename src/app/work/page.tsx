import Link from 'next/link';
import { Briefcase, Lightbulb, Code } from 'lucide-react';
import Skills from "@/components/Skills";

export default function Work() {
  return (
    <div className="page-wrapper pt-10">
      <div className="section-container">
        <h1 className="heading-primary animate-fade-up">Work Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Entrepreneurship and Current Work */}
          <div className="bg-card dark:bg-card shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden relative border border-border group animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-cover bg-center z-0 bg-gradient-to-tr from-primary to-secondary"></div>
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className="p-2.5 rounded-full bg-primary/10 text-primary mr-3 group-hover:scale-110 transition-transform">
                  <Lightbulb size={24} />
                </div>
                <h2 className="text-xl font-bold text-primary">Entrepreneurship & Current Work</h2>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Latest ventures and ongoing professional activities
              </p>
              <div className="flex-grow">
                <p className="text-foreground/80 mb-6">
                  Discover my latest entrepreneurial projects, current professional activities, and ongoing ventures. This section highlights my most recent work and innovative initiatives.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/entrepreneurship"
                  className="inline-flex w-full items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm transition-colors"
                >
                  View Entrepreneurial Journey
                </Link>
              </div>
            </div>
          </div>

          {/* Corporate Work Experience */}
          <div className="bg-card dark:bg-card shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden relative border border-border group animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-cover bg-center z-0 bg-gradient-to-tr from-primary to-secondary"></div>
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className="p-2.5 rounded-full bg-primary/10 text-primary mr-3 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-xl font-bold text-primary">Corporate Work Experience</h2>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Professional journey through corporate environments
              </p>
              <div className="flex-grow">
                <p className="text-foreground/80 mb-6">
                  Explore my professional journey through various corporate roles and positions. This section provides a timeline of my career progression, key achievements, and experiences in different organizations.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/corporate-experience"
                  className="inline-flex w-full items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm transition-colors"
                >
                  View Timeline
                </Link>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-card dark:bg-card shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden relative border border-border group animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-cover bg-center z-0 bg-gradient-to-tr from-primary to-secondary"></div>
            <div className="p-6 relative z-10 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className="p-2.5 rounded-full bg-primary/10 text-primary mr-3 group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
                <h2 className="text-xl font-bold text-primary">Projects</h2>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Key projects and technical implementations
              </p>
              <div className="flex-grow">
                <p className="text-foreground/80 mb-6">
                  View a collection of my key projects across various domains including blockchain, digital identity, payment systems, and enterprise architecture. Each project showcases problem-solving and technical implementation.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/projects"
                  className="inline-flex w-full items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm transition-colors"
                >
                  Browse Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Adding the Skills component below the work experience cards */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Skills />
        </div>
      </div>
    </div>
  );
}
