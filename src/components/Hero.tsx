
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-primary pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Add profile picture */}
          <div className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-primary animate-fade-up">
            <img 
              src="/KJ/KJ.jpeg" 
              alt="Kapil Jain" 
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Failed to load profile image");
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-up">
            Hi, I'm <span className="text-primary">Kapil Jain</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A Senior Technology Professional and Technology Consultant
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 bg-gray-100 text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Publications
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
