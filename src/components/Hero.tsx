
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-secondary/80 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-up">
            Hi, I'm <span className="text-primary">Kapil Jain</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A Senior Technology Professional and Architecture consultant
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
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors"
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
