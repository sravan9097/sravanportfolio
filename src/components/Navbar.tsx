
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { track } from "@vercel/analytics";
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-3 flex items-center justify-between">
        <Link onClick={() => scrollToSection('home')} to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-border/50 group-hover:ring-accent/50 transition-all duration-200">
            <img 
              src="/profile_photo_new.jpg" 
              alt="Sravan Kumar" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">Sravan Kumar</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2 hover:bg-accent/10 rounded-lg transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => navigate('/projects')} className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
            My work
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
            About
          </button>
        </div>

        {/* Mobile menu */}
        <div ref={mobileMenuRef} className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 shadow-lg py-6 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
            <div className="flex flex-col space-y-2 px-6">
              <button onClick={() => { track('nav_click', { label: 'my_work', context: 'mobile' }); setIsMenuOpen(false); navigate('/projects'); }} className="text-sm text-foreground/80 hover:text-foreground hover:bg-accent/5 transition-all py-3 px-3 rounded-lg text-left font-medium">
                My work
              </button>
              <button onClick={() => { track('nav_click', { label: 'about', context: 'mobile' }); setIsMenuOpen(false); scrollToSection('about'); }} className="text-sm text-foreground/80 hover:text-foreground hover:bg-accent/5 transition-all py-3 px-3 rounded-lg text-left font-medium">
                About
              </button>
              
              <div className="pt-4 border-t border-border/40 space-y-2">
                <button onClick={() => { track('resume_download', { location: 'navbar_mobile' }); setIsMenuOpen(false); window.open("https://drive.google.com/drive/folders/1_p8uKUiWuPJGIB-Y5_y375I50rx3WOmR?usp=sharing", "_blank"); }} className="w-full flex items-center justify-center gap-2 border-2 border-accent text-accent  hover:text-white px-5 py-3 rounded-full text-sm font-medium transition-all">
                  Resume
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
                <button onClick={() => { setIsMenuOpen(false); toggleTheme(); }} className="w-full text-sm text-foreground/60 hover:text-foreground hover:bg-accent/5 transition-all py-3 px-3 rounded-lg flex items-center justify-center gap-2">
                  {theme === 'dark' ? (
                    <>
                      <Sun className="w-4 h-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent/10 text-foreground/60 hover:text-foreground transition-all"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          
          <button 
            onClick={() => { track('resume_download', { location: 'navbar_desktop' }); window.open("https://drive.google.com/drive/folders/1_p8uKUiWuPJGIB-Y5_y375I50rx3WOmR?usp=sharing", "_blank"); }}
            className="flex items-center gap-2 border-2 border-accent text-accent  hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:gap-3 group"
          >
            Resume
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
