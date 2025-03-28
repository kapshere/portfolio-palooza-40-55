
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import PersonalWritings from '@/components/PersonalWritings';

const About = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding section-container">
        <h1 className="heading-primary mb-12">About Kapil Jain</h1>
        
        {/* Cover Letter Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Cover Letter</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p>
              With over 20 years of experience in technology leadership, I specialize in blockchain technology, 
              enterprise architecture, and digital transformation. My career spans across global financial 
              institutions, technology companies, and entrepreneurial ventures where I've demonstrated 
              expertise in leading complex technical initiatives and building high-performance teams.
            </p>
            <p>
              As a technology consultant, I bridge the gap between emerging technologies and business needs, 
              helping organizations leverage innovations like blockchain, AI, and cloud architectures to solve 
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
          </CardContent>
        </Card>
        
        <Separator className="my-12" />
        
        {/* Personal Writings Section */}
        <section>
          <h2 className="text-3xl font-bold text-secondary mb-8">Personal Writings on Life and Philosophy</h2>
          <PersonalWritings />
        </section>
      </div>
    </div>
  );
};

export default About;
