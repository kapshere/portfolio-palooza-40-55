
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from '@/data/blogPosts';

const BlogList = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.slug} 
              className={`overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-0 ${
                index % 2 === 0 
                  ? "bg-gradient-to-br from-blue-800 to-blue-900" 
                  : "bg-gradient-to-br from-green-800 to-green-900"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{post.title}</CardTitle>
                <CardDescription className={index % 2 === 0 ? "text-blue-200" : "text-green-200"}>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} • {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={index % 2 === 0 ? "text-blue-100" : "text-green-100"}>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild 
                  variant="outline" 
                  className={index % 2 === 0 
                    ? "text-white border-blue-300 hover:bg-blue-700/50" 
                    : "text-white border-green-300 hover:bg-green-700/50"
                  }
                >
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
