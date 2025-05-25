
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { philosophicalWritings } from '@/data/philosophicalWritings';

const PersonalWritings = () => {
  return (
    <div className="space-y-8">
      {philosophicalWritings.map((article) => (
        <Card key={article.slug} className="overflow-hidden bg-white dark:bg-gray-800 shadow-md hover-glow transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-secondary dark:text-white">{article.title}</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              {new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">{article.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="text-primary dark:text-blue-400 border-primary dark:border-blue-400 hover:bg-primary/10 dark:hover:bg-blue-400/10">
              <Link to={`/philosophy/${article.slug}`}>Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PersonalWritings;
