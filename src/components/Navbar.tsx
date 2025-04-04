
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          John Doe
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-primary hover:text-accent transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-primary hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/process" className="text-primary hover:text-accent transition-colors">
            Process
          </Link>
          <Link to="/contact" className="text-primary hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-primary hover:text-accent transition-colors py-2" onClick={toggleMenu}>
                Projects
              </Link>
              <Link to="/about" className="text-primary hover:text-accent transition-colors py-2" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/process" className="text-primary hover:text-accent transition-colors py-2" onClick={toggleMenu}>
                Process
              </Link>
              <Link to="/contact" className="text-primary hover:text-accent transition-colors py-2" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}

        <Button className="hidden md:flex bg-accent hover:bg-accent-hover text-white">
          Resume
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
