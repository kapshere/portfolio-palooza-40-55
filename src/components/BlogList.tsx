
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from '@/data/blogPosts';
import { BookText } from 'lucide-react';

const BlogList = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Articles</h1>
        
        {/* Publications Box */}
        <div className="mb-12 bg-gradient-to-r from-blue-700 to-teal-600 rounded-xl p-6 shadow-xl text-white overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <BookText size={60} className="text-white opacity-90" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Publications</h2>
              <p className="mb-4 opacity-90">
                Check out my published books, technical documentation, and whitepapers about blockchain technology, enterprise architecture, and more.
              </p>
              <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/publications">View Publications</Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 z-0"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-6 -mb-6 z-0"></div>
        </div>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} • {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10">
                  <Link to={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
