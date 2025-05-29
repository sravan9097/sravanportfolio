
import { Code, PenTool, Lightbulb, Layers } from "lucide-react";

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
      icon: Layers,
      title: "Design System",
      description: "Create Brand Guidelines and build design sytem from scratch or Revamp any exisitng system."
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
            I’ve had an unconventional journey into product design, beginning as a video editor and growing into a system-oriented designer through hands-on problem solving. 
            Over the years, I’ve worked across startups and large platforms—leading design, creating scalable systems, optimizing flows, and shipping impactful features.
            </p>
            <p className="text-primary-light mb-6">
            My strength lies in turning chaos into structure—whether it’s through a robust design system or simplifying a messy user journey. 
            Currently, I'm the sole designer at BeautifulCode, leading product design for two internal platforms.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-medium mb-2 text-primary">Tools & Softwares</h3>
                <ul className="space-y-1 text-primary-light">
                  <li>Figma</li>
                  <li>Figma Make, Site, Buzz (New features)</li>
                  <li>Figjam</li>
                  <li>Notion</li>
                  <li>Balsamiq</li>
                  <li>Cursor/Windsurf/Lovable/GitHub</li>
                  <li></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-primary">Technical Skills</h3>
                <ul className="space-y-1 text-primary-light">
                  <li>Design System</li>
                  <li>Product UI/UX</li>
                  <li>Prototyping</li>
                  <li>Developer Collaboration</li>
                  <li>HTML/CSS (TailwindCSS), JavaScript/React</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/profile_photo.jpg" 
              alt="Profile" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">My Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card shadow-sm">
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
