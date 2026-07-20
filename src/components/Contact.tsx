import { Phone, Mail, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-background/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          Get In Touch
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-card p-5 rounded-xl flex items-center border border-gray-200 dark:border-border shadow-sm hover-glow animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Phone className="text-primary h-6 w-6 mr-4" />
            <div>
              <h3 className="text-secondary font-medium">Phone</h3>
              <p className="text-muted-foreground">+91 95358 62900</p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-card p-5 rounded-xl flex items-center border border-gray-200 dark:border-border shadow-sm hover-glow animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Mail className="text-primary h-6 w-6 mr-4" />
            <div>
              <h3 className="text-secondary font-medium">Email</h3>
              <a href="mailto:jain.kapil@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                jain.kapil@outlook.com
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-card p-5 rounded-xl flex items-center border border-gray-200 dark:border-border shadow-sm hover-glow animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Linkedin className="text-primary h-6 w-6 mr-4" />
            <div>
              <h3 className="text-secondary font-medium">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/kapil-jain-9829aa4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kapil Jain
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-card p-5 rounded-xl flex items-center border border-gray-200 dark:border-border shadow-sm hover-glow animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Twitter className="text-primary h-6 w-6 mr-4" />
            <div>
              <h3 className="text-secondary font-medium">Twitter</h3>
              <a 
                href="https://twitter.com/_kapiljain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
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
