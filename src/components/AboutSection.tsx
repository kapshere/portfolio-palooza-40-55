import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">About Me</h2>
        
        <div className="mb-6 rounded-xl border border-border bg-card shadow-sm hover-glow transition-all p-8 md:p-12 animate-fade-up">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-foreground/90 text-lg leading-relaxed">
              With over 21 years of experience in technology leadership, I specialize in blockchain technology, 
              enterprise architecture, and digital transformation. My career spans across global financial 
              institutions, technology companies, and entrepreneurial ventures where I&apos;ve demonstrated 
              expertise in leading complex technical initiatives and building high-performance teams.
            </p>
            <p className="mt-6 text-foreground/90 text-lg leading-relaxed">
              I am available as a technology consultant for your startup or organization, specializing in 
              Blockchain, Digital Transformation, and AI Transformation for your business.
            </p>
            
            <div className="mt-10 flex justify-center">
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-all hover:-translate-y-1"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
