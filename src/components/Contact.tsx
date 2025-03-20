
import { Phone, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:jain.kapil@outlook.com';
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-secondary/80 to-secondary/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Get In Touch
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100/10 backdrop-blur-sm p-4 rounded-lg flex items-center border border-white/10 shadow-md">
            <Phone className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">Phone</h3>
              <p className="text-gray-300">+91 999999999</p>
            </div>
          </div>
          
          <div className="bg-green-100/10 backdrop-blur-sm p-4 rounded-lg flex items-center border border-white/10 shadow-md">
            <Mail className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">Email</h3>
              <a href="mailto:jain.kapil@outlook.com" className="text-gray-300 hover:text-primary transition-colors">
                jain.kapil@outlook.com
              </a>
            </div>
          </div>
          
          <div className="bg-purple-100/10 backdrop-blur-sm p-4 rounded-lg flex items-center border border-white/10 shadow-md">
            <Linkedin className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/kapil-jain-9829aa4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Kapil Jain
              </a>
            </div>
          </div>
          
          <div className="bg-amber-100/10 backdrop-blur-sm p-4 rounded-lg flex items-center border border-white/10 shadow-md">
            <Twitter className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">Twitter</h3>
              <a 
                href="https://twitter.com/_kapiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                @_kapiljain
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg h-auto"
            onClick={handleEmailClick}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
