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
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Director, AI & Data Science
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            I design and ship AI and data platforms for regulated, enterprise environments — combining LLMs, machine learning, and large-scale transaction systems to reduce risk and unlock new products.
          </p>
          <p className="text-sm text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Co-founder & Chief Architect at VerusAI.ai · Product Head at Stockscore.in · Protocol designer for ZYND (Alan Scott) · Author of "Bitcoin Blockchain: A Protocol for Micropayments"
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
