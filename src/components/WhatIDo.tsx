import { LayoutDashboard, Code, Layers } from "lucide-react";
import MagicBento, { BentoCardProps } from "./MagicBento";

const WhatIDo = () => {
  const capabilities: BentoCardProps[] = [
    {
      title: "Product strategy",
      description: "Define the problem, success metrics, and a roadmap that de-risks decisions. I run discovery, map jobs-to-be-done, and prioritize experiments that move a KPI, not just a backlog.",
      label: "Strategy",
      icon: <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      colorClass: "blue"
    },
    {
      title: "UX design",
      description: "Research, wireframes, and high-fidelity flows that meet accessibility standards and real user needs. Usability tests close the loop before engineering commits.",
      label: "Design",
      icon: <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />,
      colorClass: "green"
    },
    {
      title: "Prototype → Production",
      description: "I prototype in TypeScript/React (or Storybook) to validate interactions, states, and edge cases. When it's right, I ship production-ready components to reduce handoff friction.",
      label: "Development",
      icon: <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      colorClass: "purple"
    }
  ];

  return (
    <section className="section-padding" id="what-i-do">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="mb-12 w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-title-light">What I do.</h2>
            <p className="text-xl md:text-2xl text-foreground font-medium leading-snug max-w-4xl">
              I help teams turn real user needs into measurable product outcomes.
             
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium leading-snug max-w-4xl">
            My work spans strategy, UX design, and shipping production-ready systems.
            </p>
          </div>

          {/* Magic Bento Grid Layout */}
          <MagicBento 
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            cardData={capabilities}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

