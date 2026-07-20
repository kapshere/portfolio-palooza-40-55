import { Youtube, Users } from 'lucide-react';
import Image from 'next/image';

export default function SocialPage() {
  const conferenceVideos = [
    {
      title: 'Use cases of Blockchain Technology in Digital Public Infrastructure',
      embedUrl: 'https://www.youtube.com/embed/x3KI_If7b3Y?start=11745',
      description: 'International conference on "WEB3: Decentralised Internet of Ownership by convergence of Blockchain, IoT, IPv6 & AI. by Blockchain for Productivity Forum'
    },
    {
      title: 'Bitcoin SV Hackathon webinar | SPV & mAPI Overview - Jad Wahab and Kapil Jain',
      embedUrl: 'https://www.youtube.com/embed/c_LU7byeCg0',
      description: 'With the 4th #BitcoinSV Hackathon underway, the first special webinar for participants was conducted by Jad Wahab, R&D software engineer, nChain and Kapil Jain, curriculum contributor, Bitcoin Association, with a focus on simplified payment verification (SPV) and merchant API (mAPI).'
    }
  ];

  const conferenceImages = [
    {
      title: 'CDAC Hyderabad 4th International Conference on Blockchain on June 14th 2024',
      imageUrl: '/Images/Social/Blockchain conf image 2.jpeg',
      description: 'Panel discussion at the Global Blockchain Technology Conference where industry experts shared insights on blockchain innovations and future trends.'
    },
    {
      title: 'Networking Session',
      imageUrl: '/Images/Social/Group Pic.jpeg',
      description: 'Networking with blockchain professionals and enthusiasts, discussing real-world applications and collaborative opportunities.'
    }
  ];

  return (
    <div className="page-wrapper pt-10">
      <div className="section-container">
        <h1 className="heading-primary animate-fade-up">Social Media & Speaking Engagements</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Conference Talks */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-secondary/5 px-6 py-4 flex items-center gap-3 border-b border-border">
              <Youtube className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-secondary">Conference Talks</h2>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-8">
                Watch recordings of keynote presentations and panel discussions from various technology conferences around the world.
              </p>
              
              <div className="space-y-10">
                {conferenceVideos.map((video, index) => (
                  <div key={index} className="space-y-4">
                    <div className="aspect-video rounded-xl overflow-hidden bg-muted shadow-sm border border-border">
                      <iframe 
                        src={video.embedUrl} 
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="font-bold text-lg text-secondary leading-tight">{video.title}</h3>
                    <p className="text-muted-foreground text-sm">{video.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Conference Images */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-secondary/5 px-6 py-4 flex items-center gap-3 border-b border-border">
              <Users className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-secondary truncate">&quot;Unlocking the Potential of Blockchain, Metaverse, Web3&quot;</h2>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-8">
                Recently participated in the International Blockchain Technology Conference, engaging with industry leaders and sharing insights on blockchain applications for productivity and enterprise solutions.
                <a 
                  href="https://www.linkedin.com/posts/blockchainforproductivity_blockchain-techconference-innovation-activity-7209933317758939136-GotN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADb3vIBczGvQIJDEakO8ehQ9SpYyu1XtEU"
                  className="text-primary hover:underline ml-1 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conference Link
                </a>
              </p>
              
              <div className="mb-10">
                <div className="rounded-xl overflow-hidden mb-4 shadow-sm border border-border relative aspect-video">
                  <Image 
                    src={conferenceImages[0].imageUrl} 
                    alt={conferenceImages[0].title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-secondary mb-1">{conferenceImages[0].title}</h3>
                <p className="text-muted-foreground text-sm">{conferenceImages[0].description}</p>
              </div>
              
              <h3 className="font-bold text-lg text-secondary mb-4">More Conference Highlights</h3>
              
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x">
                {conferenceImages.slice(1).map((image, index) => (
                  <div key={index} className="min-w-[280px] sm:min-w-[320px] snap-center">
                    <div className="space-y-3">
                      <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-sm relative">
                        <Image 
                          src={image.imageUrl} 
                          alt={image.title} 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-secondary text-sm">{image.title}</h3>
                      <p className="text-muted-foreground text-xs">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Past Speaking Engagements */}
        <section className="mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="heading-secondary mb-8">Past Speaking Engagements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-secondary mb-2">Enterprise Blockchain Utility Summit</h3>
              <p className="text-primary text-sm font-medium mb-4">August 5 & 6, 2022 • Bangalore</p>
              <p className="text-muted-foreground">
                Moderator and Organiser for session on Security in Blockchain with Dr Craig Wright Chief Scientist at nChain and Prof Sandeep Shukla IIT, Kanpur
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-secondary mb-2">Alliance University Bangalore Blockchain Summit</h3>
              <p className="text-primary text-sm font-medium mb-4">July 27, 2019 • Bangalore</p>
              <p className="text-muted-foreground">
                Panel discussion on &quot;Who is making the greatest advancements in AI, and what are they doing?&quot;
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-secondary mb-2">Alliance University Blockchain Conference</h3>
              <p className="text-primary text-sm font-medium mb-4">February 4, 2019 • Bangalore</p>
              <p className="text-muted-foreground">
                Panelist for Session on Blockchain Technology - The Application & Economics!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
