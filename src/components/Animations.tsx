import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getTopAnimations } from "@/lib/animations";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Animations = () => {
  const navigate = useNavigate();
  const animations = getTopAnimations(3);
  const dotLottieRefs = [
    useRef<any>(null),
    useRef<any>(null),
    useRef<any>(null)
  ];

  return (
    <section className="section-padding bg-background-alt" id="animations">
      <div className="flex flex-col items-center container-padded">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary-light">Lottie Animations</h2>
          <p className="text-muted-foreground">Handcrafted animations designed to enhance user experiences and bring interfaces to life</p>
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {animations.map((animation, index) => {
              const dotLottieRef = dotLottieRefs[index];
              
              return (
                <div 
                  key={animation.id} 
                  className="group block"
                >
                  <article className="h-full space-y-4">
                    {/* Animation Preview */}
                    <div className="relative overflow-hidden bg-muted rounded-lg">
                      <div className="aspect-square flex items-center justify-center p-8">
                        <DotLottieReact
                          src={animation.animationPath}
                          loop
                          autoplay
                          dotLottieRefCallback={(dotLottie) => {
                            dotLottieRef.current = dotLottie;
                          }}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      {/* <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-accent" />
                        <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                          {animation.label}
                        </span>
                      </div> */}
                      
                      <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight ">
                        {animation.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
                        {animation.description}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              navigate("/projects#animations");
              setTimeout(() => {
                const el = document.getElementById("animations");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            View All Animations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Animations;

