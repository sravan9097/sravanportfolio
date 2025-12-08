
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { createAnimatable } from 'animejs';
import RotatingText from "./RotatingText";
import DotGrid from "./DotGrid";
import SplashCursor from "./SplashCursor";

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
    <section ref={sectionRef} className="pt-36 pb-0 relative overflow-hidden" id="home">
      {/* Interactive Dot Grid Background */}
      <DotGrid />
      
      {/* Splash Cursor Effect */}
      <SplashCursor 
        containerRef={sectionRef}
        DENSITY_DISSIPATION={2}
        VELOCITY_DISSIPATION={1.5}
        SPLAT_FORCE={4000}
        SPLAT_RADIUS={0.15}
      />
      
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
      <div className="container-padded max-w-7xl pb-14 relative z-10">
        <div className="space-y-8 px-2 md:px-10">
         
          {/* Animated hero line */}
          <h1 className="mb-6 max-w-6xl font-semibold text-5xl lg:text-7xl leading-tight overflow-visible pb-8">
            <span>Less chaos. More </span>
            <RotatingText
              texts={['clarity', 'focus', 'order', 'sense', 'calm', 'flow', 'meaning']}
              mainClassName="hero-rotating-word-box"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
          <div className="flex flex-col gap-2">
             {/* Greeting like reference site */}
            <p className="text-2xl sm:text-3xl  text-primary-light font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hi! I'm Sravan
            </p>
          
          
            {/* Shorter, punchier description */}
            <p className="text-base md:text-xl text-primary-light max-w-4xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Senior UX & Product Designer building systems that make complex products feel simple.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-accent hover:bg-accent-hover text-white px-6 py-6 rounded-md w-full md:w-auto"
              onClick={() => window.location.href = '/projects'}
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-primary-light px-6 py-6 rounded-md hover:bg-accent/10 w-full md:w-auto"
              onClick={() => window.open("https://docs.google.com/document/d/1_Oo6KGpCElotMFFhrYa4jN_EG43L0soP1lYqaGjEX6c/edit?usp=sharing", "_blank")}
            >
              View Resume
            </Button>
          </div>

          {/* Company Credibility */}
          <div 
            className="mt-4 pt-8  animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-base text-muted-foreground mb-4">
              Work shipped across
            </p>
            <div className="flex flex-wrap items-center justify-start gap-6 md:gap-8">
              {/* ShareChat */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/5f49207a68ecc70004ae7045.png" 
                  alt="ShareChat" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-base font-medium text-foreground">ShareChat</span>
              </div>

              {/* Moj */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/Mojapp_logo.png" 
                  alt="Moj" 
                  className="w-8 h-8 object-contain rounded"
                />
                <span className="text-base font-medium text-foreground">Moj</span>
              </div>

              {/* Circle */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/circle_internet_tech_pvt_ltd_logo.jpeg" 
                  alt="Circle" 
                  className="w-8 h-8 object-contain rounded-lg"
                />
                <span className="text-base font-medium text-foreground">Circle</span>
              </div>

              {/* BeautifulCode */}
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src="/BCLogo.png" 
                  alt="BeautifulCode" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-base font-medium text-foreground">BeautifulCode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Ticker - Full Width */}
      {/* <div className="w-full overflow-hidden py-6  bg-card/30 backdrop-blur-sm">
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
      </div> */}
    </section>
  );
};

export default Hero;
