
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { track } from "@vercel/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticles, getCaseStudies } from "@/lib/content";
import { getImageURL } from "@/lib/imageUtils";
import { getFigmaFilesWithProcessedImages } from "@/lib/figmaFiles";
import { getAnimations } from "@/lib/animations";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Projects = () => {
  const location = useLocation();
  const caseStudies = getCaseStudies();
  // const articles = getArticles();
  
  // Add design system project manually since it's a React component, not markdown
  const designSystemProject = {
    slug: "design-system",
    title: "What is a Design System?",
    category: "Case Study",
    description: "A design system is a collection of reusable components, patterns, and guidelines that ensure consistency and efficiency across all products and platforms.",
    image: getImageURL("/Hero_Images/designsystemhero.png"),
    date: "2024-01-15",
    rank: 6,
    tags: ["design-system", "ui-components", "documentation"],
    body: "",
    timeline: "2 months",
    tools: ["Figma", "Storybook"],
    role: "Design System Lead"
  };
  
  // Add design system to case studies
  const allCaseStudies = [...caseStudies, designSystemProject];
  const figmaProjects = getFigmaFilesWithProcessedImages();
  const animations = getAnimations();
  
  // Refs for dotLottie instances
  const dotLottieRefsMap = useRef<Record<string, any>>({});

  // Handle hash scrolling when component mounts or hash changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the # symbol
      const sectionId = hash.substring(1);
      
      // Use a longer timeout to ensure the page has fully rendered
      // Also try multiple times in case the element isn't ready yet
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Calculate offset for navbar
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };
      
      // Try immediately
      if (!scrollToSection()) {
        // If not found, try after a delay
        setTimeout(() => {
          if (!scrollToSection()) {
            // Try one more time after a longer delay
            setTimeout(scrollToSection, 300);
          }
        }, 200);
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-32 pb-16 px-4 md:px-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>My Work</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">My Work</h1>
          <p className="text-lg text-muted-foreground mb-12"> 
            Explore my complete collection of articles, design work and case studies.
          </p>
          
          {/* Case Studies Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {allCaseStudies.map((project) => (
                <Link 
                  key={project.slug} 
                  to={`/project/${project.slug}`} 
                  className="group block"
                  onClick={() => track('project_open', { id: project.slug, title: project.title, category: project.category })}
                >
                  <article className="h-full space-y-4">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-muted">
                      <div className="aspect-[16/10]">
                        <img 
                          src={project.image || "/placeholder.svg"} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-4 transition-all duration-300">
                        <span>View Project</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Articles Section */}
          {/* <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((project) => (
                <Link 
                  key={project.slug} 
                  to={`/project/${project.slug}`}
                  className="group block"
                >
                  <article className="h-full space-y-4">
                    
                    <div className="relative overflow-hidden bg-muted">
                      <div className="aspect-[4/3]">
                        <img 
                          src={project.image || "/placeholder.svg"} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                    </div>
                    
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-4 transition-all duration-300">
                        <span>Read Article</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div> */}

          {/* Figma Files Section */}
          <div className="mb-16" id="figma-files">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Figma Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {figmaProjects.map((project) => (
                <a 
                  key={project.id} 
                  href={project.redirectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block"
                  onClick={() => track('figma_open', { id: project.id, title: project.title })}
                >
                  <article className="h-full space-y-4">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-muted">
                      <div className="aspect-[4/3]">
                        <img 
                          src={project.thumbnailImagePath} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                          {project.label}
                        </span>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-4 transition-all duration-300">
                        <span>Open in Figma</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>

          {/* Animations Section */}
          <div className="mb-16" id="animations">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Animations</h2>
            <p className="text-muted-foreground mb-8">
              Handcrafted Lottie animations designed to enhance user experiences and bring interfaces to life. 
              Each animation is carefully crafted to provide smooth, engaging interactions for various UI states and scenarios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {animations.map((animation) => (
                <div 
                  key={animation.id} 
                  className="group block"
                >
                  <article className="h-full space-y-4">
                    {/* Animation Preview */}
                    <div className="relative overflow-hidden bg-muted rounded-lg">
                      <div className="aspect-square flex items-center justify-center p-8">
                        <DotLottieReact
                          src={animation.animationPath}
                          loop
                          autoplay
                          dotLottieRefCallback={(dotLottie) => {
                            dotLottieRefsMap.current[animation.id] = dotLottie;
                          }}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      {/* <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                          {animation.label}
                        </span>
                      </div> */}
                      
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight ">
                        {animation.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {animation.description}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
