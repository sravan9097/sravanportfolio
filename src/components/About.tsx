import {  Paintbrush, LayoutDashboard, Code, Layers, Figma, Dribbble } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: LayoutDashboard,
      title: "UX Strategy",
      description: "Designing user-centric experiences that align with business goals and user needs."
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Creating visually engaging, accessible interfaces with a focus on usability and aesthetics."
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Developing scalable design systems and brand guidelines from scratch or revamping existing ones."
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Transforming designs into responsive, interactive web interfaces with clean frontend code."
    }
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container-padded">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center mb-12">
          {/* On mobile: image medium; show intro text alongside image using order utilities */}
          <div className=" w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-primary-light mb-4 text-base">
            I’ve had an unconventional journey into product design, beginning as a video editor and growing into a system oriented designer through hands-on problem solving. 
            Over the years, I’ve worked across startups and large platforms leading design, creating scalable systems, optimizing flows, and shipping impactful features.
            </p>
            <p className="text-primary-light mb-6 text-base">
            My strength lies in turning chaos into structure whether it’s through a robust design system or simplifying a messy user journey. 
            Currently, I'm the sole designer at BeautifulCode, leading product design for two internal platforms.
            </p>
            <div className="flex flex-row items-center gap-4 mb-6">
              <a href="https://www.figma.com/@sravan" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors">
                    <Figma className="w-5 h-5 text-accent" />
              </a>
              <a href="https://www.dribbble.com/@sra1van" target="_blank" rel="noopener noreferrer" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors">
                    <Dribbble className="w-5 h-5 text-accent" />
              </a>
        </div>
           
          </div>
          <div className="flex items-center justify-center w-full max-w-sm md:w-1/3">
            <div className="rounded-lg overflow-hidden  ">
              <img 
                src="/profile_photo_new.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        
            <div className="grid grid-cols-2 gap-4 text-base">
              <div>
                <h3 className="font-medium mb-2 text-primary">Tools & Softwares</h3>
                <ul className="space-y-1 text-primary-light">
                  <li>Figma</li>
                  <li>Figma Make, Site, Buzz (New features)</li>
                  <li>Figjam</li>
                  <li>Notion</li>
                  <li>Balsamiq</li>
                  <li>Cursor/GitHub</li>
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
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">My Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 rounded-xl border border-border bg-card shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">{skill.title}</h3>
                <p className="text-primary-light text-base">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
