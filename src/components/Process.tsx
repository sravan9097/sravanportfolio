
import { ClipboardCheck, Search, PenTool, Layers } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Research",
      description: "Understanding the problem space through user research, competitive analysis, and stakeholder interviews."
    },
    {
      icon: ClipboardCheck,
      title: "Define",
      description: "Creating user personas, journey maps, and defining requirements to guide the design process."
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Ideating, sketching, wireframing, and creating high-fidelity mockups with iterative feedback."
    },
    {
      icon: Layers,
      title: "Deliver",
      description: "Prototyping, user testing, and handing off design specifications to development teams."
    },
  ];

  return (
    <section className="section-padding bg-background-alt">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">My Process</h2>
          <p className="text-primary-light">How I approach design challenges and deliver effective solutions</p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute h-0.5 bg-border top-24 left-0 right-0 z-0"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary text-center">{step.title}</h3>
                  <p className="text-primary-light text-sm text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
