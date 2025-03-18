
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-secondary to-secondary/90 min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
