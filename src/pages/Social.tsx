
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Social = () => {
  // Conference videos
  const conferenceVideos = [
    {
      title: 'Use cases of Blockchain Technology in Digital Public Infrastructure',
      embedUrl: 'https://youtu.be/x3KI_If7b3Y?feature=shared&t=11745',
      description: 'International conference on "WEB3: Dcentralised Internet of Ownership by convergance of Blockchain, IoT, IPv6 & AI. by Blockchain for Productivity Forum'
    },
    {
      title: 'Bitcoin SV Hackathon webinar | SPV & mAPI Overview - Jad Wahab and Kapil Jain',
      embedUrl: 'https://www.youtube.com/watch?v=c_LU7byeCg0',
      description: 'With the 4th #BitcoinSV Hackathon underway, the first special webinar for participants was conducted by Jad Wahab, R&D software engineer, nChain and Kapil Jain, curriculum contributor, Bitcoin Association, with a focus on simplified payment verification (SPV) and merchant API (mAPI).'
    }
  ];

  // Blockchain conference images based on the LinkedIn post
  const conferenceImages = [
    {
      title: 'CDAC Hyderabad 4th International Conference on Blockchain on June 14th 2024',
      imageUrl: '/public/Images/Social/Blockchain conf image 2.jpeg',
      description: 'Panel discussion at the Global Blockchain Technology Conference where industry experts shared insights on blockchain innovations and future trends.'
    },
    {
      title: 'Networking Session',
      imageUrl: '/public/Images/Social/Group Pic.jpeg',
      description: 'Networking with blockchain professionals and enthusiasts, discussing real-world applications and collaborative opportunities.'
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
              <h2 className="text-xl font-semibold">"Unlocking the Potential of Blockchain, Metaverse, Web3," at IIIT Hyderabad.</h2>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-6">
                Recently participated in the International Blockchain Technology Conference, engaging with industry leaders and sharing insights on blockchain applications for productivity and enterprise solutions.
                https://www.linkedin.com/posts/blockchainforproductivity_blockchain-techconference-innovation-activity-7209933317758939136-GotN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADb3vIBczGvQIJDEakO8ehQ9SpYyu1XtEU
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
          <h2 className="heading-secondary mb-8">Past Speaking Engagements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Enterprise Blockchain Utility Summit</h3>
                <p className="text-gray-500 mb-4">August 5 & 6, 2022 • Bangalore</p>
                <p className="text-gray-700">
                  Moderator and Organiser for session on Security in Blockchain with Dr Craig Wright Chief Scientist at nChain and Prof Sandeep Shukla IIT, Kanpur
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Alliance University Bangalore Blockchain Summit</h3>
                <p className="text-gray-500 mb-4">July 27, 2019 • Bangalore</p>
                <p className="text-gray-700">
                  Panel discussion on "Who is making the greatest advancements in AI, and what are they doing?"
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Alliance University Blockchain Conference</h3>
                <p className="text-gray-500 mb-4">February 4, 2019 • Bangalore</p>
                <p className="text-gray-700">
                Panalist for Session on Blockchain Technology - The Application & Economics!
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
