
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { theme, setTheme } = useTheme();

  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          Sravan Kumar
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
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
          <button onClick={() => navigate('/projects')} className="text-foreground hover:text-accent transition-colors">
            My Work
          </button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        {/* Mobile menu */}
        <div ref={mobileMenuRef} className={`absolute top-full left-0 w-full bg-card/95 backdrop-blur-md shadow-md py-4 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => { setIsMenuOpen(false); navigate('/projects'); }} className="text-foreground hover:text-accent transition-colors py-2 text-left">
                My Work
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors py-2 text-left">
                About
              </button>               
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors py-2 text-left">
                Contact
              </button>
              <button onClick={toggleTheme} className="text-foreground hover:text-accent transition-colors py-2 text-left flex items-center">
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

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent/10 text-foreground"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          
          <button 
            onClick={() => window.open("https://drive.google.com/file/d/1JaGLKGczaqfxbIG8t4QrTbZ4jn2GkgfW/view?usp=sharing", "_blank")}
            className="bg-primary text-[#fff] hover:bg-primary/90 px-4 py-2 rounded"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
