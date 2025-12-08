
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { createAnimatable } from 'animejs';
import { track } from "@vercel/analytics";

const uxSkills: string[] = [
  "User Research",
  "Usability Testing",
  "Information Architecture",
  "Product Design",
  "Wireframing",
  "Prototyping",
  "Interaction Design",
  "Design Systems",
  "Figma",
  "Accessibility",
  "User Flows",
  "Heuristic Evaluation",
  "Journey Mapping",
  "UI Design",
  "Microinteractions",
  "Mircoanimations",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lightRef.current) return;

    const section = sectionRef.current;
    const light = lightRef.current;

    // Create animatable for smooth light movement
    const animatableLight = createAnimatable(light, {
      x: 600, // Duration in ms for x animation
      y: 600, // Duration in ms for y animation
      ease: 'out(3)', // Smooth easing
    });

    const onMouseMove = (e: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      // Center the light on the cursor (accounting for the element being centered via translate)
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      
      // Animate the light position smoothly
      animatableLight.x(x);
      animatableLight.y(y);
    };

    const onMouseEnter = () => {
      light.style.opacity = '1';
    };

    const onMouseLeave = () => {
      light.style.opacity = '0';
    };

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseenter', onMouseEnter);
    section.addEventListener('mouseleave', onMouseLeave);

    return () => {
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseenter', onMouseEnter);
      section.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="pt-36 pb-0 hero-grid relative overflow-hidden" id="home">
      {/* Animated light effect */}
      <div 
        ref={lightRef}
        className="pointer-events-none absolute opacity-0 transition-opacity duration-500"
        style={{
          left: '-300px', // Center the 600px wide element
          top: '-300px', // Center the 600px tall element
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 25%, transparent 70%)',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />
      <div className="container-padded max-w-7xl pb-14">
        <div className="space-y-8">
         
          {/* Headline */}
          <h1 className="mx-auto mb-6 max-w-6xl font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:text-center leading-tight overflow-visible pb-2">
            Designing Intelligent Product Experiences at Scale
          </h1>
          
          {/* Subhead */}
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-light font-bold animate-fade-in md:text-center">
            Hi, I&apos;m Sravan, a Senior UX &amp; Product Designer focused on design systems, enterprise workflows, and AI-informed experiences.
          </p>
          
          {/* Value line */}
          <p
            className="text-base md:text-xl text-primary-light max-w-4xl animate-fade-in md:text-center md:mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            I turn complex product challenges into clear, scalable, and measurable outcomes across B2B, B2C, and internal platforms.
          </p>
          
          <div
            className="flex flex-wrap gap-4 justify-start animate-fade-in md:justify-center"
            style={{ animationDelay: '0.4s' }}
          >
            <Button 
              className="bg-accent hover:bg-accent-hover text-white px-6 py-6 rounded-md w-full md:w-auto"
              onClick={() => window.location.href = '/projects'}
            >
              View Selected Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-primary-light px-6 py-6 rounded-md hover:bg-accent/10 w-full md:w-auto flex items-center justify-center gap-2"
              onClick={() => { 
                track('resume_download', { location: 'hero' }); 
                window.open("https://drive.google.com/drive/folders/1_p8uKUiWuPJGIB-Y5_y375I50rx3WOmR?usp=sharing", "_blank"); 
              }}
            >
              Download Resume
              <Download className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Micro-credibility */}
          <p
            className="text-sm text-muted-foreground mt-4 animate-fade-in md:text-center"
            style={{ animationDelay: '0.6s' }}
          >
            BeautifulCode · ShareChat · Circle · DigiRetail
          </p>
        </div>
      </div>
      
      {/* Skills Ticker - Full Width */}
      <div className="w-full overflow-hidden py-6  bg-card/30 backdrop-blur-sm">
        <div className="container-padded max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-border" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Skills</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
        <div className="ticker-mask">
          <div className="ticker-track" aria-hidden="true">
            {[...Array(2)].map((_, loopIndex) => (
              <ul className="ticker-row" key={loopIndex}>
                {uxSkills.map((skill, idx) => (
                  <li key={`${loopIndex}-${idx}`} className="ticker-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
