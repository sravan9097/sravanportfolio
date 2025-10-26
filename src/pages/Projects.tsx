
import { Link } from "react-router-dom";
import { track } from "@vercel/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticles, getCaseStudies } from "@/lib/content";
import { getImageURL } from "@/lib/imageUtils";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Projects = () => {
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
    rank: 5,
    tags: ["design-system", "ui-components", "documentation"],
    body: "",
    timeline: "2 months",
    tools: ["Figma", "Storybook"],
    role: "Design System Lead"
  };
  
  // Add design system to case studies
  const allCaseStudies = [...caseStudies, designSystemProject];
  const figmaProjects = [
    {
      id: "growthy-figma",
      title: "Growthy – for Continuous Learning ",
      description: "Explore selected UI screens and design patterns from Growthy, a platform designed to build a Developing Expertise Culture in organizations through structured learning, daily reflections, and mentorship.",
      image: getImageURL("/Hero_Images/growthyCover.png"),
      category: "Figma File - UI Screens",
      link: "https://www.figma.com/community/file/1535273022446774903/growthy-for-continuous-learning-ui-screens-design-system"
    },
    {
      id: "rummy-figma",
      title: "Rummy Game App ",
      description: "Explore selected UI screens and design system implementation from Rummy Game App.",
      image: "/Hero_Images/rummyCover.png",
      category: "Figma File - UI Screens",
      link: "https://www.figma.com/community/file/1535246006291565048/design-system-rummy-game-app"
    },
    {
      id: "real-estate-app-figma",
      title: "Real Estate App - Design System",
      description: "Explore design system implementation from Real Estate App.",
      image: "/Hero_Images/realestateCover.png",
      category: "Figma File - Communnity Template",
      link: "https://www.figma.com/community/file/1295787971747216645/real-estate-app-ui-kit-free-to-customise-components-variables-modes"
    },
    {
      id: "adspark-figma",
      title: "Adspark - Design System",
      description: "Explore design system implementation from Adspark.",
      image: "/Hero_Images/adsparkCover.png",
      category: "Figma File - Design System",
      link: "https://www.figma.com/community/file/1324430043396376581/adspark-ads-platform-responsive-to-all-devices-light-dark-ui-support-variables"
    }
  ];

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
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Figma Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {figmaProjects.map((project) => (
                <a 
                  key={project.id} 
                  href={project.link} 
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
                          src={project.image} 
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
