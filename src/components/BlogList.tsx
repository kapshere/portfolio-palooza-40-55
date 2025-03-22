
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
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden bg-gradient-to-br from-[#0a192f] to-[#112240] shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">{post.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} • {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-[#64ffda] border-[#64ffda] hover:bg-[#172a45]">
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
