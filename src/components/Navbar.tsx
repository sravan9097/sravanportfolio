
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { track } from "@vercel/analytics";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <div className="bg-background/40 backdrop-blur-2xl border border-border/50 rounded-2xl shadow-lg px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
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
          
          {/* Desktop navigation - Right aligned */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate('/projects')} className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
              My work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </button>
            <button 
              onClick={() => { track('resume_download', { location: 'navbar_desktop' }); window.open("https://docs.google.com/document/d/1_Oo6KGpCElotMFFhrYa4jN_EG43L0soP1lYqaGjEX6c/edit?usp=sharing", "_blank"); }}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Resume
            </button>
            
            {/* Theme toggle */}
            <ThemeToggle />
          </div>
          
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
        </div>

        {/* Mobile menu */}
        <div ref={mobileMenuRef} className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 visible pt-4 mt-4 border-t border-border/40' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
          <div className="flex flex-col space-y-2">
            <button onClick={() => { track('nav_click', { label: 'my_work', context: 'mobile' }); setIsMenuOpen(false); navigate('/projects'); }} className="text-sm text-foreground/80 hover:text-foreground hover:bg-accent/5 transition-all py-3 px-3 rounded-lg text-left font-medium">
              My work
            </button>
            <button onClick={() => { track('nav_click', { label: 'about', context: 'mobile' }); setIsMenuOpen(false); scrollToSection('about'); }} className="text-sm text-foreground/80 hover:text-foreground hover:bg-accent/5 transition-all py-3 px-3 rounded-lg text-left font-medium">
              About
            </button>
            <button onClick={() => { track('resume_download', { location: 'navbar_mobile' }); setIsMenuOpen(false); window.open("https://docs.google.com/document/d/1_Oo6KGpCElotMFFhrYa4jN_EG43L0soP1lYqaGjEX6c/edit?usp=sharing", "_blank"); }} className="text-sm text-foreground/80 hover:text-foreground hover:bg-accent/5 transition-all py-3 px-3 rounded-lg text-left font-medium">
              Resume
            </button>
            
            <div className="pt-2 border-t border-border/40 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
