
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-primary">
              John Doe
            </Link>
            <p className="mt-2 text-sm text-primary-light">
              UX Designer creating intuitive digital experiences
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ul className="flex gap-6 text-primary-light">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-accent transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
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
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-primary-light">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
