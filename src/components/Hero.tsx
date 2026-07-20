import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mx-auto h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative animate-fade-up">
            <Image
              src="/KJ/KJ.jpeg"
              alt="Kapil Jain"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-4 tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Kapil Jain
          </h1>

          <h2 className="text-xl sm:text-2xl text-primary font-medium mb-6 animate-fade-up px-4" style={{ animationDelay: '0.2s' }}>
            CTO, AI4iCPS, AI THUB @ IIT Kharagpur
          </h2>

          <div className="flex items-center justify-center text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <MapPin size={18} className="mr-2 text-primary" />
            <span>Kharagpur, India • Remote Worldwide</span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Empowering businesses with AI-first architectures, scalable data strategies, and innovative product leadership.
            Bridging the gap between cutting-edge AI research and enterprise value creation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-sm transition-all hover:-translate-y-1"
            >
              View My Work
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-all hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
