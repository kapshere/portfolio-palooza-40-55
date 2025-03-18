
import { Link } from 'react-router-dom';
import { Briefcase, Lightbulb, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';

const Work = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Work Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Entrepreneurship and Current Work */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "linear-gradient(59deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)"
              }}
            ></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Lightbulb className="text-primary mr-2" size={28} />
                <CardTitle className="text-2xl font-bold">Entrepreneurship & Current Work</CardTitle>
              </div>
              <CardDescription>
                Latest ventures and ongoing professional activities
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 mb-4">
                Discover my latest entrepreneurial projects, current professional activities, and ongoing ventures. This section highlights my most recent work and innovative initiatives.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button className="w-full">
                <span>Emerging Technology and Architecture Consultant</span>
              </Button>
            </CardFooter>
          </Card>

          {/* Corporate Work Experience */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)"
              }}
            ></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Briefcase className="text-primary mr-2" size={28} />
                <CardTitle className="text-2xl font-bold">Corporate Work Experience</CardTitle>
              </div>
              <CardDescription>
                Professional journey through corporate environments
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 mb-4">
                Explore my professional journey through various corporate roles and positions. This section provides a timeline of my career progression, key achievements, and experiences in different organizations.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full">
                <Link to="/corporate-experience">
                  View Timeline
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Projects */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)"
              }}
            ></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Code className="text-primary mr-2" size={28} />
                <CardTitle className="text-2xl font-bold">Projects</CardTitle>
              </div>
              <CardDescription>
                Key projects and technical implementations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 mb-4">
                View a collection of my key projects across various domains including blockchain, digital identity, payment systems, and enterprise architecture. Each project showcases problem-solving and technical implementation.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full">
                <Link to="#projects">
                  Browse Projects
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Work;
