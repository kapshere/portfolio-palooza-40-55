
import { Link } from 'react-router-dom';
import { Briefcase, Lightbulb, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import Skills from "@/components/Skills";

const Work = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding section-container">
        <h1 className="heading-primary">Work Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Entrepreneurship and Current Work */}
          <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative border border-gray-100 dark:border-gray-700">
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "linear-gradient(59deg, #60a5fa 0%, #0f172a 100%)"
              }}
            ></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Lightbulb className="text-primary dark:text-blue-400 mr-2" size={28} />
                <CardTitle className="text-2xl font-bold text-primary dark:text-blue-400">Entrepreneurship & Current Work</CardTitle>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Latest ventures and ongoing professional activities
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Discover my latest entrepreneurial projects, current professional activities, and ongoing ventures. This section highlights my most recent work and innovative initiatives.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/entrepreneurship">
                  View Entrepreneurial Journey
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Corporate Work Experience */}
          <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative border border-gray-100 dark:border-gray-700">
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #0f172a 100%)"
              }}
            ></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Briefcase className="text-primary dark:text-blue-400 mr-2" size={28} />
                <CardTitle className="text-2xl font-bold text-primary dark:text-blue-400">Corporate Work Experience</CardTitle>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Professional journey through corporate environments
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Explore my professional journey through various corporate roles and positions. This section provides a timeline of my career progression, key achievements, and experiences in different organizations.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/corporate-experience">
                  View Timeline
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Projects */}
          <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative border border-gray-100 dark:border-gray-700">
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #0f172a 100%)"
              }}
            ></div>
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center mb-2">
                <Code className="text-primary dark:text-blue-400 mr-2" size={28} />
                <CardTitle className="text-2xl font-bold text-primary dark:text-blue-400">Projects</CardTitle>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Key projects and technical implementations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                View a collection of my key projects across various domains including blockchain, digital identity, payment systems, and enterprise architecture. Each project showcases problem-solving and technical implementation.
              </p>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/projects">
                  Browse Projects
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Adding the Skills component below the work experience cards */}
        <div className="mt-16">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Work;
