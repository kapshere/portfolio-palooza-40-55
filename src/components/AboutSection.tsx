
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">About Me</h2>
        
        <Card className="mb-6">
          <CardContent className="prose prose-lg max-w-none pt-6">
            <p>
              With over 20 years of experience in technology leadership, I specialize in blockchain technology, 
              enterprise architecture, and digital transformation. My career spans across global financial 
              institutions, technology companies, and entrepreneurial ventures where I've demonstrated 
              expertise in leading complex technical initiatives and building high-performance teams.
            </p>
            <p className="mt-4">
              I am available as a technology consultant for your startup or organization, specializing in 
              Blockchain, Digital Transformation, and AI Transformation for your business.
            </p>
            
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
