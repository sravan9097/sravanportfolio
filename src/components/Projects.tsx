
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/ui/LazyImage";

const Projects = () => {
  const projects = [
    {
      id: "beautifulcode-revamp",  
      title: "BeautifulCode Website Redesign",
      description: "A calm, minimal, and geek-friendly website for BeautifulCode, reflecting deep engineering culture and thought leadership.",
      image: "/bcwebsite/beautifulcodeCover.png",
      category: "Case Study — Website Redesign"
    },

    {
      id: "sharechat",
      title: "ShareChat Lead Generation Feature Design",
      description: "Empowering advertisers to launch lead-gen campaigns independently through a customizable, self-serve form builder.",
      image: "/Hero_Images/sharechatCover.png",
      category: "Case Study — Feature Design"
    },
    
    {
      id: "design-system",
      title: "What is a Design System?",
      description: "A design system is a collection of reusable components, patterns, and guidelines that ensure consistency and efficiency across all products and platforms.",
      image: "/Hero_Images/designsystemhero.png",
      category: "Case Study — Design System"
    },
    
   
    
    
    // Articles retained but de-emphasized in homepage slice
    {
      id: "design-tokens-naming",
      title: "Naming Design Tokens: A Vital Step in the Design System Journey",
      description: "A guide to naming tokens for clarity and collaboration in design systems.",
      image: "/Hero_Images/naming-design-tokens.webp",
      category: "Article — Design System"
    },
    {
      id: "mcp-design-code-bridge",
      title: "Bridging Design & Code in the Age of AI: How MCP Turns Your Design System into a Live-Synced Developer Guide",
      description: "Learn how Model Context Protocol (MCP) creates a real-time bridge between design systems and development, enabling AI-powered tools to maintain perfect design-to-code consistency.",
      image: "/Hero_Images/figmamcpCover.webp",
      category: "Design System"
    },
    {
      id: "ai-agents-design-systems",
      title: "When Your 'User' Isn't Human: Reimagining Design Systems for AI Agents",
      description: "Explore how design systems must evolve to serve both human users and AI agents, requiring new approaches to semantics, predictability, and machine-readable documentation.",
      image: "/Hero_Images/aiagents.png",
      category: "Design System"
    }
  ];

  return (
    <section className="section-padding bg-background-alt" id="projects">
      <div className="flex flex-col items-center container-padded">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-light">Featured Projects</h2>
          {/* <p className="text-muted-foreground">Teasers focused on the UX challenge and impact</p> */}
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-12 md:space-y-20">
            {projects.slice(0, 3).map((project, index) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="group block"
              >
                <article className={`grid grid-cols-1 gap-6 md:gap-8 lg:gap-12 items-center ${
                  index % 2 === 0 ? 'md:grid-cols-[0.8fr,1.2fr]' : 'md:grid-cols-[1.2fr,0.8fr]'
                }`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-muted ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}>
                    <div className="aspect-[4/3]">
                      <LazyImage 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                      />
                    </div>
                    {/* Accent bar that appears on hover */}
                    <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                  </div>
                  
                  {/* Content */}
                  <div className={`${
                    index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                  }`}>
                    <div className="space-y-4">
                      {/* Category */}
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="pt-2">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-4 transition-all duration-300">
                          <span>View Project</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button variant="outline" size="lg">
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
