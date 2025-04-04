
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary animate-fade-in">
            UX Designer<br />
            <span className="text-accent">Creating intuitive experiences</span>
          </h1>
          <p className="text-lg text-primary-light max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I design digital products that help people solve problems through thoughtful user experience and clean interface design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-accent hover:bg-accent-hover text-white px-6 py-6 rounded-md">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 px-6 py-6 rounded-md">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
