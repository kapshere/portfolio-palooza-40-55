
import { BookText } from 'lucide-react';
import { Button } from './ui/button';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Publications
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center animate-fade-up">
          <div className="lg:w-1/3">
            <img 
              src="https://m.media-amazon.com/images/I/71zZJWVG0lL._SY425_.jpg" 
              alt="Accelerating Enterprise Digital Transformation book cover" 
              className="w-full max-w-xs mx-auto shadow-lg rounded-lg"
            />
          </div>
          <div className="lg:w-2/3 max-w-2xl">
            <h3 className="text-2xl font-bold text-secondary mb-3">Accelerating Enterprise Digital Transformation</h3>
            <p className="text-gray-700 mb-4">
              A comprehensive guide for enterprises navigating the complex journey of digital transformation. 
              This book provides practical frameworks and strategies to help organizations accelerate their 
              digital initiatives and drive meaningful business outcomes.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Digital Strategy</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Enterprise Architecture</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Technology Leadership</span>
            </div>
            <Button asChild>
              <a 
                href="https://www.amazon.in/dp/9389898099" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <BookText className="mr-2" />
                View on Amazon
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
