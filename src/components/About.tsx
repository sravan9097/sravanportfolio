
import { Code, PenTool, Lightbulb, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: "UX Strategy",
      description: "Creating user-centered design strategies based on research and business objectives."
    },
    {
      icon: PenTool,
      title: "UI Design",
      description: "Crafting beautiful, intuitive interfaces with attention to visual hierarchy and accessibility."
    },
    {
      icon: Users,
      title: "User Research",
      description: "Conducting interviews, usability testing, and analyzing data to inform design decisions."
    },
    {
      icon: Code,
      title: "Prototyping",
      description: "Building interactive prototypes to validate design solutions and gather user feedback."
    }
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-primary-light mb-4">
              I'm a UX Designer with over 5 years of experience creating digital products that people love to use. 
              My approach combines user research, strategic thinking, and creative problem-solving.
            </p>
            <p className="text-primary-light mb-6">
              I've worked with startups and established companies across various industries including fintech, 
              healthcare, and e-commerce to deliver user-centered design solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium mb-2 text-primary">Design Tools</h3>
                <ul className="space-y-1 text-primary-light">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>Protopie</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-primary">Technical Skills</h3>
                <ul className="space-y-1 text-primary-light">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
              alt="Profile" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">My Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-white shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">{skill.title}</h3>
                <p className="text-primary-light text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
