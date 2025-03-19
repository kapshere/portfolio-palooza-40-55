
import { Phone, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { saveMessage } from "@/utils/messageStorage";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save the message to a file
      await saveMessage({ name, email, message, date: new Date().toISOString() });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 bg-rose-100/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-secondary-foreground/10 text-white placeholder:text-gray-400 border-gray-700"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary-foreground/10 text-white placeholder:text-gray-400 border-gray-700"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-secondary-foreground/10 text-white placeholder:text-gray-400 border-gray-700 min-h-[150px]"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
