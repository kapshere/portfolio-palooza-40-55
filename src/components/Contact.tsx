
import { Phone, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:jain.kapil@outlook.com';
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          Get In Touch
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg flex items-center border border-gray-200 shadow-sm">
            <Phone className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary font-medium">Phone</h3>
              <p className="text-gray-700">+91 999999999</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg flex items-center border border-gray-200 shadow-sm">
            <Mail className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary font-medium">Email</h3>
              <a href="mailto:jain.kapil@outlook.com" className="text-gray-700 hover:text-primary transition-colors">
                jain.kapil@outlook.com
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg flex items-center border border-gray-200 shadow-sm">
            <Linkedin className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/kapil-jain-9829aa4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Kapil Jain
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg flex items-center border border-gray-200 shadow-sm">
            <Twitter className="text-primary h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary font-medium">Twitter</h3>
              <a 
                href="https://twitter.com/_kapiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
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
