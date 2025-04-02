
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { blogPosts } from '@/data/blogPosts';
import { philosophicalWritings } from '@/data/philosophicalWritings';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const FeaturedContent = () => {
  // Combine both types of content and sort by date (most recent first)
  const combinedContent = [
    ...blogPosts.map(post => ({
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      slug: post.slug,
      type: 'tech'
    })),
    ...philosophicalWritings.map(writing => ({
      title: writing.title,
      date: writing.date,
      excerpt: writing.excerpt,
      slug: writing.slug,
      type: 'philosophy'
    }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 3); // Get only the 3 most recent items

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 21GLabs Box - Updated with sunrise orange gradient */}
          <a 
            href="https://www.21GLabs.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-glow group block h-full"
          >
            <div className="bg-gradient-to-r from-sky-100 to-orange-100 rounded-xl p-8 shadow-xl text-blue overflow-hidden relative h-full flex flex-col justify-center">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-3">21GLabs</h2>
                <p className="text-xl font-semibold mb-6">"Innovation to Reality"</p>
                <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full text-blue group-hover:bg-white/30 transition-all">
                  Visit Website <ExternalLink size={18} />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 z-0"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-6 -mb-6 z-0"></div>
            </div>
          </a>

          {/* Latest Articles Box */}
          <div className="hover-glow h-full">
            <Card className="h-full shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-secondary">Latest Articles</CardTitle>
                <CardDescription>Recent insights from technology and philosophy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {combinedContent.map((item, index) => (
                    <li key={index} className="border-b pb-3 border-gray-100 last:border-0">
                      <HoverCard>
                        <HoverCardTrigger>
                          <Link 
                            to={item.type === 'tech' ? `/blog/${item.slug}` : `/philosophy/${item.slug}`}
                            className="group"
                          >
                            <h3 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                              {item.title}
                            </h3>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <p className="text-sm text-muted-foreground">
                            {item.excerpt}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(item.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    <Link to="/blog">View All Articles</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
