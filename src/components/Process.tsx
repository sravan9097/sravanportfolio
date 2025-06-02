


const Process = () => {
  const processSteps = [
    {
      icon: '/check.svg',
      title: "Consistency",
      description: "Design systems unify UI elements—colors, typography, spacing, and components—so products look and behave the same everywhere. This builds trust and improves usability."
    },
    {
      icon: '/lightning.svg',
      title: "Efficiency",
      description: "With reusable components and guidelines, teams design and build faster. No need to start from scratch every time—just plug, play, and customize."
    },
    {
      icon: '/sync.svg',
      title: "Collaboration",
      description: "Design systems create a shared language between designers, developers, and product teams. Everyone knows what a button or card means—no guesswork."
    },
    {
      icon: '/scale.svg',
      title: " Scalability",
      description: "As products grow, a system ensures they scale smoothly. Whether it’s a new feature, app, or platform, the foundation stays consistent and flexible."
    },
  ];

  return (
    <section id="process" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">Why Design Systems?</h2>
          <p className="text-muted-foreground">Design systems aren't just about components and colors — they're about creating structure that drives efficiency and clarity. I love building systems that not only make interfaces consistent but also empower teams to work faster and stay focused on solving real user problems.</p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute h-0.5 bg-border top-24 left-0 right-0 z-0"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm h-full">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <img src={step.icon} alt={step.title} className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-sm text-center">{step.description}</p>
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
