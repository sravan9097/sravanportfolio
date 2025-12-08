import { LayoutDashboard, Code, Layers, Brain } from "lucide-react";

const WhatIDo = () => {
  const capabilities = [
    {
      icon: LayoutDashboard,
      title: "Product Strategy",
      description: "I define the problem space, success metrics, and UX direction before solutions take shape. I run discovery, map jobs-to-be-done, and prioritize experiments that move business KPIs, not just feature backlogs."
    },
    {
      icon: Layers,
      title: "UX Design",
      description: "From research and flows to high-fidelity UI and accessibility-first interactions. I validate decisions through usability testing and data before engineering commits, reducing rework and risk."
    },
    {
      icon: Code,
      title: "Prototype → Production",
      description: "I build behavior-rich prototypes to validate states, logic, and edge cases early. When needed, I collaborate directly with engineers or ship production-ready components to accelerate delivery and reduce handoff friction."
    },
    {
      icon: Brain,
      title: "AI-driven Experiences",
      description: "I design how people collaborate with intelligent systems — from AI-assisted learning flows to automation-supported workflows that balance control, trust, and efficiency."
    }
  ];

  return (
    <section className="section-padding" id="what-i-do">
      <div className="container-padded">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-light">What I do.</h2>
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed max-w-5xl">
          I help teams turn complex product problems into clear, scalable, and measurable outcomes. My work sits at the intersection of UX strategy, systems thinking, and high-craft execution. I design accessible, validated experiences and build the prototypes that align teams before a single line of production code is written.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 - Product strategy */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10 hover:shadow-lg transition-all border border-border/50 group">
              {/* <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div> */}
              <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[0].title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{capabilities[0].description}</p>
            </div>

            {/* Card 2 - UX design */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10 hover:shadow-lg transition-all border border-border/50 group">
              {/* <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div> */}
              <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[1].title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{capabilities[1].description}</p>
            </div>

            {/* Card 3 - Prototype to production */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/10 hover:shadow-lg transition-all border border-border/50 group">
              {/* <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div> */}
              <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[2].title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{capabilities[2].description}</p>
            </div>

            {/* Card 4 - AI-driven experiences */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-red-950/20 dark:to-red-900/10 hover:shadow-lg transition-all border border-border/50 group">
              {/* <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500/10 dark:bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div> */}
              <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[3].title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{capabilities[3].description}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

