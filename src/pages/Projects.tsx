
import { Link } from "react-router-dom";
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
      id: "design-system",
      title: "What is Design System?",
      description: "A comprehensive design system with components, colors, typography and design guidelines.",
      image: "/Hero_Images/designsystemhero.png",
      category: "Design System"
    },
    {
      id: "design-tokens-naming",
      title: "Naming Design Tokens: A Vital Step in the Design System Journey",
      description: "A comprehensive guide to naming design tokens effectively for better design system communication and collaboration.",
      image: "/Hero_Images/naming-design-tokens.webp",
      category: "Design System"
    },
    {
      id: "mcp-design-code-bridge",
      title: "Bridging Design & Code in the Age of AI: How MCP Turns Your Design System into a Live-Synced Developer Guide",
      description: "Learn how Model Context Protocol (MCP) creates a real-time bridge between design systems and development, enabling AI-powered tools to maintain perfect design-to-code consistency.",
      image: "/Hero_Images/figmamcpCover.webp",
      category: "Design System"
    },
    {
      id: "beautifulcode-revamp",
      title: "BeautifulCode Website Revamp",
      description: "A calm, minimal, and geek-friendly website for BeautifulCode, reflecting deep engineering culture and thought leadership.",
      image: "/bcwebsite/beautifulcodeCover.png", // Replace with actual image when available
      category: "UX/UI Design"
    },
   
    {
      id: "sharechat",
      title: "Designing Lead Generation Feature for ShareChat", 
      description: "Designing a lead generation feature for ShareChat.",
      image: "/Hero_Images/sharechatCover.png",
      category: "Case Study"
    },
    {
      id: "bcexperienceproject", 
      title: "Building BeautifulCode Experience App",
      description: "Transforming an e-commerce platform with a focus on conversion optimization and user flow.",
      image: "/Hero_Images/BC_experience_cover.png",
      category: "UX/UI Design"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className=" max-w-5xl container mx-auto pt-32 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">All Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Explore my complete collection of design work and case studies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
