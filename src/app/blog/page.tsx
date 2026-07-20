"use client";

import { useState } from 'react';
import TechnologyArticles from "@/components/TechnologyArticles";
import PersonalWritings from "@/components/PersonalWritings";

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'tech' | 'philosophy'>('tech');

  return (
    <div className="page-wrapper pt-10">
      <div className="section-container max-w-5xl mx-auto">
        <h1 className="heading-primary animate-fade-up">Articles and Writings</h1>
        
        <div className="w-full animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex p-1 space-x-1 bg-gray-100 dark:bg-card/50 rounded-xl max-w-md mx-auto mb-12">
            <button
              onClick={() => setActiveTab('tech')}
              className={`w-full py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'tech'
                  ? 'bg-white dark:bg-card text-primary shadow-sm'
                  : 'text-muted-foreground hover:bg-white/50 hover:text-foreground'
              }`}
            >
              Technology Articles
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`w-full py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'philosophy'
                  ? 'bg-white dark:bg-card text-primary shadow-sm'
                  : 'text-muted-foreground hover:bg-white/50 hover:text-foreground'
              }`}
            >
              Personal Writings
            </button>
          </div>
          
          <div className="mt-4">
            {activeTab === 'tech' && (
              <div className="animate-fade-up">
                <TechnologyArticles />
              </div>
            )}
            
            {activeTab === 'philosophy' && (
              <div className="animate-fade-up">
                <PersonalWritings />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
