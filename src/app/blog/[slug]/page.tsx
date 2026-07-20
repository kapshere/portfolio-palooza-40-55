import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '@/data/blogPosts';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | Kapil Jain`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Next.js runs from project root, so public folder is accessible
  const filePath = path.join(process.cwd(), 'public', post.contentPath);
  
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the first heading if it matches the post title
    const firstHeadingRegex = /^#\s+.*\n/;
    const match = content.match(firstHeadingRegex);
    if (match && match[0].toLowerCase().includes(post.title.toLowerCase().split(':')[0])) {
      content = content.replace(firstHeadingRegex, '');
    }
  } catch (error) {
    console.error(`Failed to read markdown file at ${filePath}`, error);
    content = "Sorry, the content for this post could not be loaded.";
  }

  return (
    <div className="page-wrapper pt-10">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>
        
        <header className="mb-10 pb-8 border-b border-border">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight animate-fade-up">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-muted-foreground text-sm font-medium animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-secondary/5 px-3 py-1 rounded-full">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="mx-3">•</span>
            <span>{post.author}</span>
          </div>
        </header>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <ReactMarkdown 
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-10 mb-6 text-secondary leading-tight" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-10 mb-6 text-secondary leading-tight" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-4 text-secondary leading-tight" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-primary pl-6 italic mb-8 py-2 text-muted-foreground bg-primary/5 rounded-r-lg" {...props} />
              ),
              code: ({node, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                const isInline = !match && children?.toString().split('\n').length === 1;
                
                return isInline ? 
                  <code className="bg-secondary/10 text-primary px-1.5 py-0.5 rounded-md text-sm font-mono" {...props}>{children}</code> : 
                  <code className="block bg-secondary/5 p-6 rounded-xl mb-8 overflow-x-auto text-sm font-mono border border-border shadow-sm" {...props}>{children}</code>;
              },
              img: ({ node, alt, src, ...props }) => {
                let imgSrc = src || '';
                if (imgSrc && !imgSrc.startsWith('/') && !imgSrc.startsWith('http')) {
                  imgSrc = `/${imgSrc}`;
                }
                return (
                  <div className="my-10 text-center">
                    <img
                      src={imgSrc}
                      alt={alt || ''}
                      className="rounded-xl w-full max-w-full h-auto shadow-md mx-auto border border-border"
                      {...props}
                    />
                    {alt && <p className="text-center text-sm text-muted-foreground mt-4 italic">{alt}</p>}
                  </div>
                );
              },
              table: ({node, ...props}) => (
                <div className="overflow-x-auto mb-8 rounded-xl border border-border shadow-sm">
                  <table className="min-w-full divide-y divide-border" {...props} />
                </div>
              ),
              thead: ({node, ...props}) => <thead className="bg-secondary/5" {...props} />,
              tbody: ({node, ...props}) => <tbody className="divide-y divide-border bg-card" {...props} />,
              tr: ({node, ...props}) => <tr className="hover:bg-secondary/5 transition-colors" {...props} />,
              th: ({node, ...props}) => <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider" {...props} />,
              td: ({node, ...props}) => <td className="px-6 py-4 text-sm" {...props} />,
              hr: () => <hr className="my-12 border-t border-border" />
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
