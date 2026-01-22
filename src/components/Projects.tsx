
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/ui/LazyImage";
import { getCaseStudies } from "@/lib/content";

// Mapping of case study slugs to their project titles
const projectTitleMap: Record<string, string> = {
  "bc-experience": "Capturing Daily Engineering Progress Without Meetings",
  "sharechat": "ShareChat Lead Generation",
  "sharechat-wallet": "Improving Wallet Recharge Experience for Advertisers",
  "beautifulcode-revamp": "BeautifulCode Website Redesign",
  "design-system": "What is a Design System?",
  "mcp-design-code-bridge": "Bridging Design & Code in the Age of AI",
  "ai-agents-design-systems": "When Your 'User' Isn't Human",
  "design-token-naming": "Naming Design Tokens"
};

const Projects = () => {
  // Get top 3 case studies by rank
  const caseStudies = getCaseStudies().slice(0, 3);
  
  // Convert to projects format for display
  const projects = caseStudies.map(cs => ({
    id: cs.slug,
    title: projectTitleMap[cs.slug] || cs.title,
    description: cs.description,
    image: cs.image || "/placeholder.svg",
    category: `${cs.category} - ${cs.tags?.[0] || 'Design'}`
  }));

  return (
    <section className="section-padding bg-background-alt" id="projects">
      <div className="flex flex-col items-center container-padded">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-light">Featured Projects</h2>
          {/* <p className="text-muted-foreground">Teasers focused on the UX challenge and impact</p> */}
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="group block"
              >
                <article className="h-full space-y-4">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-muted">
                    <div className="aspect-[4/3]">
                      <LazyImage 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    {/* Category */}
                    <div className="flex items-center gap-3">
                      <div className="h-px w-8 bg-accent" />
                      <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* CTA */}
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
