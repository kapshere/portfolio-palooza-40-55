import Link from 'next/link';

export default function About() {
  return (
    <div className="page-wrapper pt-10">
      <div className="section-container">
        <h1 className="heading-primary mb-12 animate-fade-up">About Kapil Jain</h1>
        
        <div className="mb-16 rounded-xl border border-border bg-card p-8 md:p-12 shadow-sm animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 space-y-6">
            <p>
              With over 21 years of experience in building technology products and leadership, I specialize in blockchain technology, AI Agents and LLM Adoption, 
              enterprise architecture, and digital transformation. My career spans across global financial 
              institutions, technology companies, and entrepreneurial ventures where I've demonstrated 
              expertise in leading complex technical initiatives and building high-performance teams.
            </p>
            <p>
              As a technology consultant, I bridge the gap between emerging technologies and business needs, 
              helping organizations leverage innovations like blockchain, AI/ML, and cloud architectures to solve 
              real-world problems. My technical knowledge is complemented by a deep understanding of domains 
              including transaction banking, digital identity, and payment systems.
            </p>
            <p>
              Beyond my professional work, I'm an author, speaker, and curriculum developer who has contributed 
              to advancing knowledge in the blockchain space through publications, conference presentations, 
              and educational content development. I'm passionate about mentoring technical talent and 
              fostering innovation ecosystems that can drive meaningful industry transformation.
            </p>
            <p>
              I bring a strategic mindset combined with hands-on technical skills, allowing me to navigate 
              complex challenges while delivering tangible results that create business value. My collaborative 
              approach and clear communication help ensure alignment between technical solutions and 
              organizational objectives.
            </p>
            <p>
              I prefer working in an outcome-focused environment, where vision, goal, and quality of execution are 
              given a similar weightage. I enjoy ownership and accountability with responsibilities and have been 
              very successful in creating similar self-sufficient teams in the past. My leadership style is to focus 
              on defining the problem as a starting point so that it can be broken down into achievable milestones. 
              Creating a positive environment by establishing collaboration and acting with sensitivity towards people, 
              has been a strong driving force in my career success so far. I am a self-starter and a quick learner, 
              and I enjoy reading about enterprise architectures and evolving behavioural trends. From time to time, 
              I have enjoyed assignments that involve discovery, research and provide thought leadership.
            </p>
            
            <p>
              I am available as a technology consultant for your startup or organization, specializing in 
              Blockchain, Digital Transformation, and AI Transformation for your business. Whether you need 
              guidance on implementing cutting-edge technologies or developing a comprehensive architecture 
              strategy, I offer both technology and architecture consultancy services tailored to your 
              specific needs and goals.
            </p>
           
            <div className="mt-12 flex justify-center pt-8 border-t border-border">
              <Link 
                href="/entrepreneurship"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-all hover:-translate-y-1"
              >
                Entrepreneurship & Current Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
