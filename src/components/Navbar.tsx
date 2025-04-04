
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-brand-dark/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold gradient-text">
              ContentCraftAI
            </Link>
            <div className="hidden md:flex md:ml-10 space-x-8">
              <Link to="/features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/examples" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Examples
              </Link>
              <Link to="/trading-post" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Trading Post
              </Link>
              <Link to="/tiktok" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                TikTok
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:opacity-90">
                Try Free
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/examples" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </Link>
            <Link 
              to="/trading-post" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Trading Post
            </Link>
            <Link 
              to="/tiktok" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              TikTok
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                to="/signin" 
                className="px-3 py-2 text-center rounded-md text-base font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="px-3 py-2 text-center rounded-md text-base font-medium bg-gradient-to-r from-brand-purple to-brand-cyan text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Try Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
