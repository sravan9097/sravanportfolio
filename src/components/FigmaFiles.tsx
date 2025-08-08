import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/LazyImage";

const FigmaFiles = () => {
  const figmaFiles = [
    {
      id: "growthy-figma",
      title: "Growthy – for Continuous Learning | UI Screens & Design System",
      description: "Explore selected UI screens and design patterns from Growthy, a platform designed to build a Developing Expertise Culture in organizations through structured learning, daily reflections, and mentorship.",
      image: "/Hero_Images/growthyCover.png",
      category: "Figma File - Design System",
      link: "https://www.figma.com/community/file/1535273022446774903/growthy-for-continuous-learning-ui-screens-design-system"
    },
    {
      id: "rummy-figma",
      title: "Rummy Game App - Design System",
      description: "Explore selected UI screens and design system implementation from Rummy Game App.",
      image: "/Hero_Images/rummyCover.png",
      category: "Figma File - Design System",
      link: "https://www.figma.com/community/file/1535246006291565048/design-system-rummy-game-app"
    },
    {
      id: "real-estate-app-figma",
      title: "Real Estate App - Design System",
      description: "Explore design system implementation from Real Estate App.",
      image: "/Hero_Images/realestateCover.png",
      category: "Figma File - Design System",
      link: "https://www.figma.com/community/file/1295787971747216645/real-estate-app-ui-kit-free-to-customise-components-variables-modes"
    }
  ];

  return (
    <section className="section-padding" id="figma-files">
      <div className="flex flex-col items-center mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Figma Projects</h2>
          <p className="text-muted-foreground">Explore my design systems and UI kits available on Figma Community</p>
        </div>
        <div className="items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {figmaFiles.map((file) => (
            <div key={file.id} className="w-full min-w-0 flex flex-col">
              <a href={file.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-full sm:h-64 h-full overflow-hidden">
                    <LazyImage 
                      src={file.image} 
                      alt={file.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">{file.category}</p>
                    <h3 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-card-foreground mb-2 hover:text-accent transition-colors">{file.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{file.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.figma.com/@sravan" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              View All Figma Files
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FigmaFiles;
