
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "design-system",
      title: "Design System",
      description: "A comprehensive design system with components, colors, typography and design guidelines.",
      image: "/Hero_Images/designsystemhero.png",
      category: "UI/UX Design"
    },
    {
      id: "bcexperienceproject",
      title: "Building BeautifulCode Experience App",
      description: "Transforming an e-commerce platform with a focus on conversion optimization and user flow.",
      image: "/Hero_Images/BC_experience_cover.png",
      category: "UX Research & Design"
    },
    {
      id: "finance-app",
      title: "Mobile Banking App",
      description: "Redesigning the user experience for a digital banking platform focusing on accessibility and ease of use.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      category: "UX Design"
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker Dashboard",
      description: "Creating an intuitive dashboard for users to track their fitness goals and progress.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      category: "UI/UX Design"
    }
  ];

  return (
    <section className="section-padding bg-background-alt" id="projects">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground">A selection of my recent work in UX design</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="group">
              <Link to={`/project/${project.id}`} className="block">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{project.category}</p>
                    <h3 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
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
