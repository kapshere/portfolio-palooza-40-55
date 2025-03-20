
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogList from "@/components/BlogList";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navigation />
      <Hero />
      <BlogList />
      <Contact />
    </div>
  );
};

export default Index;
