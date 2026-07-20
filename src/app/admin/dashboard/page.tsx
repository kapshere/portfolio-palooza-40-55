"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubConfig, PostMetadata, publishNewPost } from "@/lib/github";

export default function AdminDashboard() {
  const router = useRouter();
  const [config, setConfig] = useState<GithubConfig | null>(null);
  
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState<'tech' | 'philosophy'>('tech');
  const [content, setContent] = useState("");
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [commitUrl, setCommitUrl] = useState("");

  useEffect(() => {
    const storedConfig = localStorage.getItem("github_admin_config");
    if (!storedConfig) {
      router.push("/admin");
      return;
    }
    
    try {
      setConfig(JSON.parse(storedConfig));
    } catch (e) {
      router.push("/admin");
    }
  }, [router]);

  // Auto-generate slug from title
  useEffect(() => {
    if (title && status === 'idle') {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setSlug(generatedSlug);
    }
  }, [title, status]);

  const handleLogout = () => {
    localStorage.removeItem("github_admin_config");
    router.push("/admin");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!config) return;
    
    setStatus('loading');
    setErrorMessage("");
    
    try {
      const metadata: PostMetadata = {
        title,
        excerpt,
        slug,
        date,
        category
      };
      
      const result = await publishNewPost(config, metadata, content);
      
      setStatus('success');
      setCommitUrl(result.commitUrl);
      
      // Reset form (except date/category)
      setTitle("");
      setExcerpt("");
      setSlug("");
      setContent("");
      
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || "Failed to publish post.");
    }
  };

  if (!config) return null; // loading state

  return (
    <div className="page-wrapper min-h-screen bg-background text-foreground pb-20">
      {/* Top Nav */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
              {config.owner.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="font-bold text-secondary text-sm leading-tight">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">{config.owner}/{config.repo} ({config.branch})</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            className="text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-1.5 text-sm font-medium"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Editor */}
          <div className="flex-1 bg-card border border-border rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-secondary mb-6">Create New Post</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 rounded-xl flex gap-3 text-green-800 dark:text-green-300">
                <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-sm">Successfully Published!</h3>
                  <p className="text-sm mt-1">Your new post was committed to GitHub and the site will rebuild shortly.</p>
                  <a href={commitUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline mt-2 inline-block">
                    View Commit on GitHub
                  </a>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-xl flex gap-3 text-red-800 dark:text-red-300">
                <AlertCircle className="shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-sm">Publishing Failed</h3>
                  <p className="text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Post Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. The Future of AI Agents"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Excerpt (Short description)</label>
                <textarea
                  required
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="A brief summary for the blog listing page..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">URL Slug</label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Publish Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as 'tech' | 'philosophy')}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="tech">Technology (Blog)</option>
                    <option value="philosophy">Philosophy</option>
                  </select>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-1">
                  <label className="block text-sm font-medium text-secondary">Markdown Content</label>
                  <span className="text-xs text-muted-foreground">Supports standard Markdown</span>
                </div>
                <textarea
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="w-full px-4 py-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm resize-y"
                  placeholder="# Your amazing post starts here..."
                />
              </div>
              
              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary text-primary-foreground font-semibold py-2.5 px-6 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Publishing...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Publish to GitHub
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Sidebar / Guide */}
          <div className="w-full md:w-80 space-y-6">
            <div className="bg-secondary/5 rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-secondary mb-3">How it works</h3>
              <p className="text-sm text-muted-foreground mb-4">
                When you click Publish, this portal uses the GitHub API to directly commit your Markdown file and update the index files on your repository.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                <li>Creates <code className="bg-card px-1 py-0.5 rounded text-xs">.md</code> file in public directory.</li>
                <li>Updates metadata array in your TypeScript data file.</li>
                <li>Triggers an automatic redeploy on your hosting platform.</li>
              </ul>
            </div>
            
            <div className="bg-secondary/5 rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-secondary mb-3">Markdown Tips</h3>
              <div className="space-y-3 text-sm text-muted-foreground font-mono">
                <p># Heading 1</p>
                <p>## Heading 2</p>
                <p>**Bold Text**</p>
                <p>*Italic Text*</p>
                <p>[Link Text](url)</p>
                <p>![Image](url)</p>
                <p>```<br/>code block<br/>```</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
