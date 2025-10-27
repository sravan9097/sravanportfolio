import { LayoutDashboard, Code, Layers } from "lucide-react";

const WhatIDo = () => {
  const capabilities = [
    {
      icon: LayoutDashboard,
      title: "Product strategy",
      description: "Define the problem, success metrics, and a roadmap that de-risks decisions. I run discovery, map jobs-to-be-done, and prioritize experiments that move a KPI, not just a backlog."
    },
    {
      icon: Layers,
      title: "UX design",
      description: "Research, wireframes, and high-fidelity flows that meet accessibility standards and real user needs. Usability tests close the loop before engineering commits."
    },
    {
      icon: Code,
      title: "Prototype → production",
      description: "I prototype in TypeScript/React (or Next.js) to validate interactions, states, and edge cases. When it’s right, I ship production-ready components to reduce handoff friction."
    }
  ];

  return (
    <section className="section-padding" id="what-i-do">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row justify-between gap-12 item-end">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-light">What I do.</h2>
            <p className="text-xl md:text-2xl text-foreground font-medium leading-snug max-w-4xl">
            I help teams translate user needs into measurable outcomes by designing accessible, tested experiences and building the prototypes that prove they work.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Card 1 - Product strategy */}
            <div className="md:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10 hover:shadow-lg transition-all border border-border/50 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[0].title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{capabilities[0].description}</p>
            </div>

            {/* Card 2 - UX design */}
            <div className="md:col-span-1 p-8 h-full rounded-2xl bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10 hover:shadow-lg transition-all border border-border/50 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/10 dark:bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[1].title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{capabilities[1].description}</p>
            </div>

            {/* Card 3 - Prototype to production */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/10 hover:shadow-lg transition-all border border-border/50 group">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform mb-0 md:mb-0">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{capabilities[2].title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{capabilities[2].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

