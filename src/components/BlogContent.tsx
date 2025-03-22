
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
          <div className="h-8 bg-[#172a45] rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-[#172a45] rounded w-1/2 mx-auto"></div>
          <div className="space-y-2 pt-6">
            <div className="h-4 bg-[#172a45] rounded"></div>
            <div className="h-4 bg-[#172a45] rounded"></div>
            <div className="h-4 bg-[#172a45] rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl font-bold text-[#64ffda] mb-4">Error</h2>
          <p className="text-gray-300 mb-6">{error || 'Blog post not found'}</p>
          <Button asChild variant="outline" className="text-[#64ffda] border-[#64ffda] hover:bg-[#172a45]">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <article className="py-12 bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-6 text-[#0a192f] hover:bg-[#e6f1ff]/20">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to all posts
          </Link>
        </Button>
        
        <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-300 mb-2">
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-800">
          <ReactMarkdown 
            components={{
              img: ({ node, alt, src, ...props }) => {
                let imgSrc = src || '';
                
                // Handle relative paths that don't start with /
                if (imgSrc && !imgSrc.startsWith('/') && !imgSrc.startsWith('http')) {
                  imgSrc = `/${imgSrc}`;
                }
                
                console.log('Image source in markdown:', imgSrc);
                
                return (
                  <div className="my-8">
                    <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-4 rounded-lg shadow-xl">
                      <img
                        src={imgSrc}
                        alt={alt || ''}
                        className="rounded-lg max-w-full h-auto mx-auto"
                        onError={(e) => {
                          console.error(`Failed to load image: ${imgSrc}`);
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                        {...props}
                      />
                    </div>
                  </div>
                );
              },
              h2: ({node, ...props}) => (
                <h2 className="text-2xl font-bold text-[#0a192f] mt-8 mb-4" {...props} />
              ),
              h3: ({node, ...props}) => (
                <h3 className="text-xl font-bold text-[#0a192f] mt-6 mb-3" {...props} />
              ),
              p: ({node, ...props}) => (
                <p className="my-4 text-gray-800" {...props} />
              ),
              ul: ({node, ...props}) => (
                <ul className="list-disc pl-6 my-4" {...props} />
              ),
              li: ({node, ...props}) => (
                <li className="mb-2" {...props} />
              ),
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
