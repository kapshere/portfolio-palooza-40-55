
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from '@/data/blogPosts';

const TechnologyArticles = () => {
  return (
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
  );
};

export default TechnologyArticles;
