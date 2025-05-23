
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          Sravan Kumar
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('projects')} className="text-primary hover:text-accent transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('about')} className="text-primary hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('process')} className="text-primary hover:text-accent transition-colors">
            Process
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-primary hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('projects')} className="text-primary hover:text-accent transition-colors py-2 text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="text-primary hover:text-accent transition-colors py-2 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('process')} className="text-primary hover:text-accent transition-colors py-2 text-left">
                Process
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-primary hover:text-accent transition-colors py-2 text-left">
                Contact
              </button>
              <button onClick={toggleTheme} className="text-primary hover:text-accent transition-colors py-2 text-left flex items-center">
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent/10 text-primary"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          
          <a 
            href="/sravan-kumar-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
