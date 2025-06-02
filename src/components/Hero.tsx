
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 px-4 " id="home">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl md:text-left font-bold leading-tight text-primary-light animate-fade-in"> Designing Systems That Scale<br />
            <span className="text-accent md:text-left">— One Component at a Time.</span>
          </h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I’m Sravan Kumar Mulugurthy, a product designer who builds scalable design systems and intuitive digital experiences. With a background in fast-growing startups and platforms like ShareChat, I specialize in transforming fragmented UIs into cohesive, efficient systems that empower teams to ship faster and smarter.
          </p>
          <div className="flex flex-wrap gap-4 justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-accent hover:bg-accent-hover text-white px-6 py-6 rounded-md"
              onClick={() => scrollToSection('projects')}
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-primary-light px-6 py-6 rounded-md"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
