
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "design-system",
      title: "What is Design System?",
      description: "A comprehensive design system with components, colors, typography and design guidelines.",
      image: "/Hero_Images/designsystemhero.png",
      category: "Design System"
    },
    {
      id: "beautifulcode-revamp",  
      title: "BeautifulCode Website Revamp",
      description: "Creating a calm, minimal, and geek-friendly website for BeautifulCode, reflecting deep engineering culture and thought leadership.",
      image: "/bcwebsite/beautifulcodeCover.png",
      category: "UX/UI Design"
    },
    
    {
      id: "sharechat",
      title: "Designing Lead Generation Feature for ShareChat",
      description: "Designing a lead generation feature for ShareChat.",
      image: "/Hero_Images/sharechatCover.png",
      category: "UX/UI Design"
    }
  ];

  return (
    <section className="section-padding bg-background-alt" id="projects">
      <div className="flex flex-col items-center mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work in UX design</p>
        </div>
        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="w-full min-w-0 flex flex-col">
              <Link to={`/project/${project.id}`}>
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{project.category}</p>
                    <h3 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-card-foreground mb-2 hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
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
