
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  slug: string;
}

const BlogContent = ({ slug }: BlogContentProps) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        if (!post) {
          setError('Blog post not found');
          setIsLoading(false);
          return;
        }
        
        const response = await fetch(post.contentPath);
        if (!response.ok) {
          throw new Error('Failed to load blog post');
        }
        
        const text = await response.text();
        setContent(text);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load blog post');
        setIsLoading(false);
        console.error(err);
      }
    };
    
    fetchMarkdown();
  }, [slug, post]);
  
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="space-y-2 pt-6">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Error</h2>
        <p className="text-secondary mb-6">{error || 'Blog post not found'}</p>
        <Button asChild variant="secondary">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <article className="py-12 bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6 text-primary">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to all posts
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown 
            components={{
              // Enhanced styling for headers
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-primary" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-primary" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-3 text-primary" {...props} />,
              
              // Improved paragraph spacing
              p: ({node, ...props}) => <p className="my-4 leading-relaxed text-gray-700" {...props} />,
              
              // List styling
              ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="pl-2 leading-relaxed" {...props} />,
              
              // Enhanced blockquote styling
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-600" {...props} />
              ),
              
              // Improved code blocks - fixed the TypeScript error by properly typing the props
              code: ({node, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                const isInline = !match && children?.toString().split('\n').length === 1;
                
                return isInline ? 
                  <code className="bg-gray-100 text-primary px-1 py-0.5 rounded text-sm font-mono" {...props}>{children}</code> : 
                  <code className="block bg-gray-100 p-4 rounded-md my-4 overflow-x-auto text-sm font-mono" {...props}>{children}</code>;
              },
              
              // Improved image styling
              img: ({ node, alt, src, ...props }) => {
                let imgSrc = src || '';
                
                // Handle relative paths that don't start with /
                if (imgSrc && !imgSrc.startsWith('/') && !imgSrc.startsWith('http')) {
                  imgSrc = `/${imgSrc}`;
                }
                
                return (
                  <div className="my-8">
                    <img
                      src={imgSrc}
                      alt={alt || ''}
                      className="rounded-lg w-full max-w-full h-auto shadow-md mx-auto"
                      onError={(e) => {
                        console.error(`Failed to load image: ${imgSrc}`);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                      {...props}
                    />
                    {alt && <p className="text-center text-sm text-gray-500 mt-2">{alt}</p>}
                  </div>
                );
              },
              
              // Better table styling
              table: ({node, ...props}) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-md" {...props} />
                </div>
              ),
              thead: ({node, ...props}) => <thead className="bg-gray-50" {...props} />,
              tbody: ({node, ...props}) => <tbody className="divide-y divide-gray-200" {...props} />,
              tr: ({node, ...props}) => <tr className="hover:bg-gray-50" {...props} />,
              th: ({node, ...props}) => <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />,
              td: ({node, ...props}) => <td className="px-4 py-3 text-sm" {...props} />,
              
              // Better horizontal rule
              hr: () => <hr className="my-8 border-t border-gray-300" />
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogContent;
