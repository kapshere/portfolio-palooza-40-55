
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Social = () => {
  // Conference videos
  const conferenceVideos = [
    {
      title: 'Blockchain Technology in Enterprise',
      embedUrl: 'https://www.youtube.com/embed/lik8X1aI2RQ',
      description: 'A conference talk on implementing blockchain solutions in enterprise environments.'
    },
    {
      title: 'Digital Identity Solutions',
      embedUrl: 'https://www.youtube.com/embed/SSo_EIwHSd4',
      description: 'Discussing the future of digital identity and self-sovereign identity systems.'
    }
  ];

  // Blockchain conference images based on the LinkedIn post
  const conferenceImages = [
    {
      title: 'Blockchain Conference Panel',
      imageUrl: 'https://media.licdn.com/dms/image/D5622AQHZnIg1uC9BsA/feedshare-shrink_800/0/1717596646342?e=1724889600&v=beta&t=0QUoLWPOhKzDhjzq5lTrELjCYvTzg-wZz3WvX7rAV0M',
      description: 'Panel discussion at the Global Blockchain Technology Conference where industry experts shared insights on blockchain innovations and future trends.'
    },
    {
      title: 'Networking Session',
      imageUrl: 'https://media.licdn.com/dms/image/D5622AQGm6T2TP5jc0w/feedshare-shrink_800/0/1717596646368?e=1724889600&v=beta&t=f7bW_UoHkXSQ3l6p27WP1bH8Rx-Cm5YWOB8SRaA33gg',
      description: 'Networking with blockchain professionals and enthusiasts, discussing real-world applications and collaborative opportunities.'
    },
    {
      title: 'Blockchain Workshop',
      imageUrl: 'https://media.licdn.com/dms/image/D5622AQGW-QLz7b8SsA/feedshare-shrink_800/0/1717596645858?e=1724889600&v=beta&t=6OWPPnHwTNBMEbXY4V_aSdSXj34s1c5JGVRs5PFwwOA',
      description: 'Interactive workshop on blockchain implementation strategies for enterprise solutions and productivity enhancements.'
    },
    {
      title: 'Conference Reception',
      imageUrl: 'https://media.licdn.com/dms/image/D5622AQE4RMSk6s8T_A/feedshare-shrink_800/0/1717596645888?e=1724889600&v=beta&t=HZFEH52cD-3QQnGCZ4L2-qKB_kNkYcxX83v8G62LHIE',
      description: 'Evening reception where participants continued discussions on blockchain adoption challenges and success stories.'
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
                {conferenceVideos.map((video, index) => (
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
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="bg-primary/10 p-4 flex items-center gap-2">
              <Users className="text-primary" />
              <h2 className="text-xl font-semibold">Global Blockchain Technology Conference</h2>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">
                Recently participated in the Global Blockchain Technology Conference, engaging with industry leaders and sharing insights on blockchain applications for productivity and enterprise solutions.
              </p>
              
              <div className="mb-8">
                <img 
                  src={conferenceImages[0].imageUrl} 
                  alt={conferenceImages[0].title} 
                  className="w-full h-auto rounded-lg mb-3"
                  onError={(e) => {
                    console.error("Failed to load image");
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <h3 className="font-semibold">{conferenceImages[0].title}</h3>
                <p className="text-gray-600 text-sm">{conferenceImages[0].description}</p>
              </div>
              
              <h3 className="font-semibold text-lg mb-4">More Conference Highlights</h3>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {conferenceImages.slice(1).map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="space-y-2">
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
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
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
