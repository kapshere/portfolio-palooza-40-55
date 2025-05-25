
import { Phone, Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary dark:text-white">
          Get In Touch
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center border border-gray-200 dark:border-gray-700 shadow-sm">
            <Phone className="text-primary dark:text-blue-400 h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary dark:text-white font-medium">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">+91 95358 62900</p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center border border-gray-200 dark:border-gray-700 shadow-sm">
            <Mail className="text-primary dark:text-blue-400 h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary dark:text-white font-medium">Email</h3>
              <a href="mailto:jain.kapil@outlook.com" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                jain.kapil@outlook.com
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center border border-gray-200 dark:border-gray-700 shadow-sm">
            <Linkedin className="text-primary dark:text-blue-400 h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary dark:text-white font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/kapil-jain-9829aa4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Kapil Jain
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex items-center border border-gray-200 dark:border-gray-700 shadow-sm">
            <Twitter className="text-primary dark:text-blue-400 h-6 w-6 mr-3" />
            <div>
              <h3 className="text-secondary dark:text-white font-medium">Twitter</h3>
              <a 
                href="https://twitter.com/_kapiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
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
