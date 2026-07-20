import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { philosophicalWritings } from '@/data/philosophicalWritings';

const FeaturedContent = () => {
  // Combine both types of content and sort by date (most recent first)
  const combinedContent = [
    ...blogPosts.map(post => ({
      title: post.title,
      date: post.date,
      excerpt: post.excerpt,
      slug: post.slug,
      type: 'tech',
      externalLink: post.externalLink
    })),
    ...philosophicalWritings.map(writing => ({
      title: writing.title,
      date: writing.date,
      excerpt: writing.excerpt,
      slug: writing.slug,
      type: 'philosophy',
      externalLink: undefined
    }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 3); // Get only the 3 most recent items

  return (
    <section className="py-20 bg-white dark:bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 21GLabs Box - Updated with sunrise orange gradient */}
          <a 
            href="https://acausal.freedomwise.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-glow group block h-full animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="bg-gradient-to-r from-sky-100 to-orange-100 dark:from-sky-900/40 dark:to-orange-900/40 rounded-xl p-8 shadow-md text-sky-900 dark:text-sky-100 overflow-hidden relative h-full flex flex-col justify-center border border-transparent">
              <div className="flex flex-col items-center text-center relative z-10">
                <h2 className="text-3xl font-bold mb-3 text-sky-900 dark:text-sky-100">aCausal Labs</h2>
                <p className="text-xl font-semibold mb-3">Private Limited</p>
                <p className="text-md font-medium mb-6 opacity-80 max-w-sm">Building Freedom Wise: A game changing product for personal finance to achieve financial freedom.</p>
                <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-black/20 px-6 py-3 rounded-full font-medium group-hover:bg-white/80 dark:group-hover:bg-black/40 transition-all">
                  Visit Website <ExternalLink size={18} />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 dark:bg-black/10 rounded-full -mr-10 -mt-10 z-0"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 dark:bg-black/10 rounded-full -ml-6 -mb-6 z-0"></div>
            </div>
          </a>

          {/* Latest Articles Box */}
          <div className="hover-glow h-full animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary mb-1">Latest Articles</h2>
                <p className="text-muted-foreground">Recent Writings on technology and philosophy</p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4">
                  {combinedContent.map((item, index) => {
                    const isExternal = !!item.externalLink;
                    const href = isExternal ? item.externalLink! : (item.type === 'tech' ? `/blog/${item.slug}` : `/philosophy/${item.slug}`);
                    
                    return (
                      <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <Link 
                          href={href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="group block"
                        >
                          <h3 className="font-semibold text-lg text-primary group-hover:text-primary/80 transition-colors mb-2">
                            {item.title} {isExternal && <ExternalLink size={14} className="inline ml-1 opacity-50" />}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {item.excerpt}
                          </p>
                          <p className="text-xs font-medium text-foreground/50">
                            {new Date(item.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              <div className="mt-8 text-center pt-4 border-t border-border">
                <Link 
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-sm font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-all"
                >
                  View All Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
