
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, Users } from 'lucide-react';

const Social = () => {
  // Sample conference images and videos
  const conferenceMedia = [
    {
      type: 'video',
      title: 'Blockchain Technology in Enterprise',
      embedUrl: 'https://www.youtube.com/embed/lik8X1aI2RQ',
      description: 'A conference talk on implementing blockchain solutions in enterprise environments.'
    },
    {
      type: 'image',
      title: 'Technology Summit 2023',
      imageUrl: '/placeholder.svg',
      description: 'Speaking at the annual Technology Summit about digital transformation strategies.'
    },
    {
      type: 'video',
      title: 'Digital Identity Solutions',
      embedUrl: 'https://www.youtube.com/embed/SSo_EIwHSd4',
      description: 'Discussing the future of digital identity and self-sovereign identity systems.'
    },
    {
      type: 'image',
      title: 'Blockchain Conference',
      imageUrl: '/placeholder.svg',
      description: 'Networking with industry leaders at the International Blockchain Conference.'
    }
  ];

  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding section-container">
        <h1 className="heading-primary">Social Media & Speaking Engagements</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <div className="bg-primary/10 p-4 flex items-center gap-2">
              <Youtube className="text-primary" />
              <h2 className="text-xl font-semibold">Conference Talks</h2>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">
                Watch recordings of keynote presentations and panel discussions from various technology conferences around the world.
              </p>
              
              <div className="space-y-6">
                {conferenceMedia
                  .filter(item => item.type === 'video')
                  .map((video, index) => (
                    <div key={index} className="space-y-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe 
                          src={video.embedUrl} 
                          title={video.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <h3 className="font-semibold text-lg">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-primary/10 p-4 flex items-center gap-2">
              <Users className="text-primary" />
              <h2 className="text-xl font-semibold">Events & Gatherings</h2>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">
                Photos from recent industry events, meetups, and conferences where I've participated as a speaker or panelist.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {conferenceMedia
                  .filter(item => item.type === 'image')
                  .map((image, index) => (
                    <div key={index} className="space-y-2">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={image.imageUrl} 
                          alt={image.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error("Failed to load image");
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <h3 className="font-semibold">{image.title}</h3>
                      <p className="text-gray-600 text-sm">{image.description}</p>
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </div>
        
        <section className="mb-16">
          <h2 className="heading-secondary mb-8">Upcoming Speaking Engagements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Web3 Development Summit</h3>
                <p className="text-gray-500 mb-4">June 15-17, 2024 • San Francisco, CA</p>
                <p className="text-gray-700">
                  Presenting on "Blockchain Integration Patterns for Enterprise Applications"
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">AI & Blockchain Conference</h3>
                <p className="text-gray-500 mb-4">July 8-10, 2024 • London, UK</p>
                <p className="text-gray-700">
                  Panel discussion on "The Future of Decentralized Identity Systems"
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Technology Architecture Forum</h3>
                <p className="text-gray-500 mb-4">August 22-24, 2024 • Singapore</p>
                <p className="text-gray-700">
                  Keynote on "Scalable Architecture for Digital Transformation"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Social;
