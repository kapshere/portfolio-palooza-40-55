
import Navigation from "@/components/Navigation";
import TechnologyArticles from "@/components/TechnologyArticles";
import PersonalWritings from "@/components/PersonalWritings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogPage = () => {
  return (
    <div className="page-wrapper blog">
      <Navigation />
      <div className="content-padding max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Articles and Writings</h1>
        
        <Tabs defaultValue="tech" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 colored-page-card">
            <TabsTrigger value="tech">Technology Articles</TabsTrigger>
            <TabsTrigger value="philosophy">Personal Writings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tech" className="prose prose-lg max-w-none">
            <TechnologyArticles />
          </TabsContent>
          
          <TabsContent value="philosophy" className="prose prose-lg max-w-none">
            <PersonalWritings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogPage;
