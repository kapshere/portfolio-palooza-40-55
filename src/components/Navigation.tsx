
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to close mobile menu when navigating
  const closeMenu = () => setIsOpen(false);

  // Helper function to determine if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">Management & Architecture Consultancy</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/work" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/work') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Work
              </Link>
              <Link 
                to="/skills" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/skills') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Skills
              </Link>
              <Link 
                to="/blog" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/blog') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/contact') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/work"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/work') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                Work
              </Link>
              <Link
                to="/skills"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/skills') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                Skills
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') ? 'bg-primary/20 text-white' : 'text-gray-300 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
