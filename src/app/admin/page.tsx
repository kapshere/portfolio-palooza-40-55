"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Github, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [branch, setBranch] = useState("main");

  useEffect(() => {
    // Pre-fill if exists
    const storedConfig = localStorage.getItem("github_admin_config");
    if (storedConfig) {
      try {
        const config = JSON.parse(storedConfig);
        setToken(config.token || "");
        setOwner(config.owner || "");
        setRepo(config.repo || "");
        setBranch(config.branch || "main");
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !owner || !repo || !branch) return;

    localStorage.setItem(
      "github_admin_config",
      JSON.stringify({ token, owner, repo, branch })
    );
    router.push("/admin/dashboard");
  };

  return (
    <div className="page-wrapper pt-10 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-primary" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-secondary mb-2">Admin Portal</h1>
          <p className="text-muted-foreground mb-8 text-sm">
            Enter your GitHub Personal Access Token to manage your blog posts directly from this site.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">GitHub PAT</label>
              <input
                type="password"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                placeholder="ghp_xxxxxxxxxxxx"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Repo Owner</label>
                <input
                  type="text"
                  required
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="e.g. KapilJain-dev"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Repo Name</label>
                <input
                  type="text"
                  required
                  value={repo}
                  onChange={(e) => setRepo(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="e.g. portfolio"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Branch</label>
              <input
                type="text"
                required
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                placeholder="main or master"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              Access Dashboard <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border flex items-start gap-3 text-left">
            <Github className="text-muted-foreground mt-0.5" size={16} />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your token is stored purely locally in your browser&apos;s LocalStorage and is only used to push commits directly to your repository via the GitHub REST API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
