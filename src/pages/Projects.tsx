
import { Link } from "react-router-dom";
import { track } from "@vercel/analytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

const Projects = () => {
  const allProjects = [
    {
      id: "mcp-design-code-bridge",
      title: "Bridging Design & Code in the Age of AI: How MCP Turns Your Design System into a Live-Synced Developer Guide",
      description: "Learn how Model Context Protocol (MCP) creates a real-time bridge between design systems and development, enabling AI-powered tools to maintain perfect design-to-code consistency.",
      image: "/Hero_Images/figmamcpCover.webp",
      category: "Article Design System"
    },
    {
      id: "ai-agents-design-systems",
      title: "When Your 'User' Isn't Human: Reimagining Design Systems for AI Agents",
      description: "Explore how design systems must evolve to serve both human users and AI agents, requiring new approaches to semantics, predictability, and machine-readable documentation.",
      image: "/Hero_Images/aiagents.png",
      category: "Article Design System"
    },
    {
      id: "design-system",
      title: "What is Design System?",
      description: "A comprehensive design system with components, colors, typography and design guidelines.",
      image: "/Hero_Images/designsystemhero.png",
      category: "Article Design System"
    },
    {
      id: "design-tokens-naming",
      title: "Naming Design Tokens: A Vital Step in the Design System Journey",
      description: "A comprehensive guide to naming design tokens effectively for better design system communication and collaboration.",
      image: "/Hero_Images/naming-design-tokens.webp",
      category: "Article Design System"
    },
    
    {
      id: "beautifulcode-revamp",
      title: "BeautifulCode Website Revamp",
      description: "A calm, minimal, and geek-friendly website for BeautifulCode, reflecting deep engineering culture and thought leadership.",
      image: "/bcwebsite/beautifulcodeCover.png", // Replace with actual image when available
      category: "Case Study - Website Redesign"
    },
   
    {
      id: "sharechat",
      title: "Designing Lead Generation Feature for ShareChat", 
      description: "Designing a lead generation feature for ShareChat.",
      image: "/Hero_Images/sharechatCover.png",
      category: "Case Study - Feature Design"
    },
    {
      id: "bcexperienceproject", 
      title: "Building BeautifulCode Experience App",
      description: "Transforming an e-commerce platform with a focus on conversion optimization and user flow.",
      image: "/Hero_Images/BC_experience_cover.png",
      category: "Case Study - Web App Design"
    },
    {
      id: "growthy-figma",
      title: "Growthy – for Continuous Learning ",
      description: "Explore selected UI screens and design patterns from Growthy, a platform designed to build a Developing Expertise Culture in organizations through structured learning, daily reflections, and mentorship.",
      image: "/Hero_Images/growthyCover.png",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {allProjects.filter(project => project.category.includes("Case Study")).map((project) => (
                <Link 
                  key={project.id} 
                  to={`/project/${project.id}`} 
                  className="group block"
                  onClick={() => track('project_open', { id: project.id, title: project.title, category: project.category })}
                >
                  <article className="h-full space-y-4">
                    {/* Image */}
                    <div className="relative overflow-hidden bg-muted">
                      <div className="aspect-[16/10]">
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
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.filter(project => project.category.includes("Article")).map((project) => (
                <Link 
                  key={project.id} 
                  to={`/project/${project.id}`}
                  className="group block"
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
          </div>

          {/* Figma Files Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Figma Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.filter(project => project.category.includes("Figma File")).map((project) => (
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
