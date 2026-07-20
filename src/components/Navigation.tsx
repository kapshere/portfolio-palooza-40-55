"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full bg-white shadow-sm z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">Technology Consultant</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-primary"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/about') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                About
              </Link>
              <Link 
                href="/work" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/work') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Work
              </Link>
              <Link 
                href="/publications" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/publications') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Publications
              </Link>
              <Link 
                href="/social" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/social') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Social
              </Link>
              <Link 
                href="/blog" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/blog') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/contact') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/work"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/work') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Work
              </Link>
              <Link
                href="/publications"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/publications') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Publications
              </Link>
              <Link
                href="/social"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/social') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Social
              </Link>
              <Link
                href="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:text-primary'
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
