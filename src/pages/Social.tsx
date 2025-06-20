
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Calendar, MapPin } from 'lucide-react';

const Social = () => {
  const socialEvents = [
    {
      title: "Blockchain Conference Speaker",
      description: "Delivered a keynote on 'Enterprise Blockchain Adoption' at the International Blockchain Summit",
      date: "March 2024",
      location: "Mumbai, India",
      type: "Speaking",
      image: "/Images/Social/Blockchain conf image 2.jpeg"
    },
    {
      title: "Industry Panel Discussion",
      description: "Participated in a panel discussion on 'Future of Digital Payments' with industry leaders",
      date: "February 2024", 
      location: "Delhi, India",
      type: "Panel",
      image: "/Images/Social/Group Pic.jpeg"
    }
  ];

  return (
    <div className="page-wrapper social">
      <Navigation />
      <div className="content-padding section-container">
        <h1 className="heading-primary">Social Contributions & Events</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {socialEvents.map((event, index) => (
            <Card key={index} className="colored-page-card shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {event.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-primary">{event.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="colored-page-card shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Let's Connect</CardTitle>
              <CardDescription className="text-lg">
                Interested in collaboration, speaking opportunities, or professional networking?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm always open to meaningful conversations about technology, innovation, and industry trends. 
                Whether you're looking for a speaker for your event, want to discuss potential collaborations, 
                or simply connect professionally, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="mailto:contact@kapiljain.tech" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://linkedin.com/in/kapiljain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Social;
