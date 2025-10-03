import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/LazyImage";

const FigmaFiles = () => {
  const figmaFiles = [
    {
      id: "growthy-figma",
      title: "Growthy – for Continuous Learning | UI Screens & Design System",
      description: "Explore selected UI screens and design patterns from Growthy, a platform designed to build a Developing Expertise Culture in organizations through structured learning, daily reflections, and mentorship.",
      image: "/Hero_Images/growthyCover.png",
      category: "Figma File - UI Screens",
      link: "https://www.figma.com/community/file/1535273022446774903/growthy-for-continuous-learning-ui-screens-design-system"
    },
    {
      id: "rummy-figma",
      title: "Rummy Game App - Design System",
      description: "Explore selected UI screens and design system implementation from Rummy Game App.",
      image: "/Hero_Images/rummyCover.png",
      category: "Figma File - Mobile UI Screens",
      link: "https://www.figma.com/community/file/1535246006291565048/design-system-rummy-game-app"
    },
    {
      id: "real-estate-app-figma",
      title: "Real Estate App - Design System",
      description: "Explore design system implementation from Real Estate App.",
      image: "/Hero_Images/realestateCover.png",
      category: "Figma File - Communnity Template",
      link: "https://www.figma.com/community/file/1295787971747216645/real-estate-app-ui-kit-free-to-customise-components-variables-modes"
    }
  ];

  return (
    <section className="section-padding" id="figma-files">
      <div className="flex flex-col items-center mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Figma Projects</h2>
          <p className="text-muted-foreground">Explore my design systems and UI kits available on Figma Community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {figmaFiles.map((file) => (
            <a 
              key={file.id} 
              href={file.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="h-full space-y-4">
                {/* Image */}
                <div className="relative overflow-hidden bg-muted">
                  <div className="aspect-[4/3]">
                    <LazyImage 
                      src={file.image} 
                      alt={file.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                    />
                  </div>
                  {/* Accent bar that appears on hover */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-accent transition-all duration-500 group-hover:h-full" />
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-accent" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                      {file.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
                    {file.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {file.description}
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
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              window.location.href = "/projects#figma-files";
              setTimeout(() => {
                const el = document.getElementById("figma-files");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            View All Figma Files
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FigmaFiles;
