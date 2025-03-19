
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { isAuthenticated } from '@/utils/auth';
import Navigation from '@/components/Navigation';
import { BlogPost, blogPosts } from '@/data/blogPosts';

const AdminBlog = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Kapil Jain',
    excerpt: '',
    contentPath: ''
  });
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      toast.error('Please login to access this page');
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      setNewPost(prev => ({ ...prev, title: value, slug }));
    } else {
      setNewPost(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a demo, so we can't actually save files to the server
    // In a real application, you would send this to a backend API
    // to save the markdown file and update the blogPosts array
    
    toast.success('Blog post created successfully (demo only)');
    toast.info('In a real app, this would save the file to the server');
    
    // Log the new post details and markdown content for demo purposes
    console.log('New blog post:', newPost);
    console.log('Markdown content:', markdownContent);
    
    // Reset form
    setNewPost({
      title: '',
      slug: '',
      date: new Date().toISOString().split('T')[0],
      author: 'Kapil Jain',
      excerpt: '',
      contentPath: ''
    });
    setMarkdownContent('');
  };

  const generateContentPathFromSlug = (slug: string) => {
    return `/blog-posts/${slug}.md`;
  };

  return (
    <div className="bg-gradient-to-b from-secondary to-secondary/90 min-h-screen">
      <Navigation />
      <div className="pt-24 px-4 pb-12">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-primary">Manage Blog Posts</h1>
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')}
              className="text-white border-white/20"
            >
              View Blog
            </Button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Create New Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-white mb-2">Title</label>
                <Input
                  id="title"
                  name="title"
                  value={newPost.title}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-white mb-2">
                  Slug (auto-generated from title)
                </label>
                <Input
                  id="slug"
                  name="slug"
                  value={newPost.slug}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-white mb-2">Date</label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={newPost.date}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-white mb-2">Author</label>
                <Input
                  id="author"
                  name="author"
                  value={newPost.author}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="excerpt" className="block text-white mb-2">Excerpt</label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={newPost.excerpt}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white h-24"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-white mb-2">
                  Content (Markdown)
                  <span className="block text-sm text-white/70 mt-1">
                    Add images with: ![alt text](image-filename.jpg)
                  </span>
                </label>
                <Textarea
                  id="content"
                  value={markdownContent}
                  onChange={(e) => setMarkdownContent(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white min-h-[300px] font-mono"
                />
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full">
                  Create New Blog Post
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Existing Blog Posts</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div 
                  key={post.slug}
                  className="p-4 bg-white/5 rounded border border-white/10 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-white font-medium">{post.title}</h3>
                    <p className="text-white/70 text-sm">
                      {new Date(post.date).toLocaleDateString()} · {post.author}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="secondary" 
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      size="sm"
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
