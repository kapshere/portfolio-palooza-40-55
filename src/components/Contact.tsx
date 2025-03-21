
import { Phone, Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          Get In Touch
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all">
            <Phone className="text-white h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">Phone</h3>
              <p className="text-blue-100">+91 999999999</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-800 to-green-900 p-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all">
            <Mail className="text-white h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">Email</h3>
              <a href="mailto:jain.kapil@outlook.com" className="text-green-100 hover:text-white transition-colors">
                jain.kapil@outlook.com
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all">
            <Linkedin className="text-white h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/kapil-jain-9829aa4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Kapil Jain
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-800 to-green-900 p-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all">
            <Twitter className="text-white h-6 w-6 mr-3" />
            <div>
              <h3 className="text-white font-medium">Twitter</h3>
              <a 
                href="https://twitter.com/_kapiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition-colors"
              >
                @_kapiljain
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
