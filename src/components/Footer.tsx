
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button onClick={scrollToTop} className="text-xl font-bold text-foreground">
              Sravan Kumar
            </button>
            <p className="mt-2 text-sm text-muted-foreground">
              UX Designer creating intuitive digital experiences
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ul className="flex gap-6 text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-accent transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-accent transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">
                  Contact
                </button>
              </li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="p-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-accent" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sravan Kumar Mulugurthy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
