import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

const TechnologyArticles = () => {
  return (
    <div className="space-y-8">
      {blogPosts.map((post, index) => (
        <div key={post.slug} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-secondary mb-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground font-medium mb-6">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {post.author}
            </p>
            <p className="text-foreground/80 mb-8 line-clamp-3 md:line-clamp-none">
              {post.excerpt}
            </p>
            {post.externalLink ? (
              <a
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-colors"
              >
                Read on LinkedIn
              </a>
            ) : (
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-colors"
              >
                Read More
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyArticles;
