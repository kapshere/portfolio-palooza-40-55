
import { Link } from 'react-router-dom';
import { Briefcase, Lightbulb, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';

const Work = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Work Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Entrepreneurship and Current Work */}
          <Card className="bg-gradient-to-br from-blue-800 to-blue-900 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative border-0">
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Lightbulb className="text-blue-300 mr-2" size={28} />
                <CardTitle className="text-2xl font-bold text-white">Entrepreneurship & Current Work</CardTitle>
              </div>
              <CardDescription className="text-blue-200">
                Latest ventures and ongoing professional activities
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-blue-100 mb-4">
                Discover my latest entrepreneurial projects, current professional activities, and ongoing ventures. This section highlights my most recent work and innovative initiatives.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/entrepreneurship">
                  View Entrepreneurial Journey
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Corporate Work Experience */}
          <Card className="bg-gradient-to-br from-green-800 to-green-900 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative border-0">
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Briefcase className="text-green-300 mr-2" size={28} />
                <CardTitle className="text-2xl font-bold text-white">Corporate Work Experience</CardTitle>
              </div>
              <CardDescription className="text-green-200">
                Professional journey through corporate environments
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-green-100 mb-4">
                Explore my professional journey through various corporate roles and positions. This section provides a timeline of my career progression, key achievements, and experiences in different organizations.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Link to="/corporate-experience">
                  View Timeline
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Projects */}
          <Card className="bg-gradient-to-br from-blue-800 to-blue-900 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative border-0">
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Code className="text-blue-300 mr-2" size={28} />
                <CardTitle className="text-2xl font-bold text-white">Projects</CardTitle>
              </div>
              <CardDescription className="text-blue-200">
                Key projects and technical implementations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-blue-100 mb-4">
                View a collection of my key projects across various domains including blockchain, digital identity, payment systems, and enterprise architecture. Each project showcases problem-solving and technical implementation.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/projects">
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
