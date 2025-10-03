


const Process = () => {
  const processSteps = [
    {
      icon: '/check.svg',
      title: "Discover & Define",
      description: "User research, personas, journey maps, stakeholder alignment."
    },
    {
      icon: '/lightning.svg',
      title: "Ideate & Wireframe",
      description: "Sketching, rapid iteration, flow mapping."
    },
    {
      icon: '/sync.svg',
      title: "Prototype & Test",
      description: "Interactive prototypes, usability feedback."
    },
    {
      icon: '/scale.svg',
      title: "Refine, Deliver & Scale",
      description: "Polished UI, handoff, QA support, iterate with patterns & systems."
    },
  ];

  return (
    <section id="process" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">My Process</h2>
          <p className="text-muted-foreground">I partner closely with product managers, engineers, and stakeholders. I value clear communication, regular feedback, and documentation to bridge design and development.</p>
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
                  <h3 className="text-xl font-bold mb-2 text-foreground text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-base text-center">{step.description}</p>
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
