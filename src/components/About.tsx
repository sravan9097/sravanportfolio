const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-padded">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center mb-12">
          {/* On mobile: image medium; show intro text alongside image using order utilities */}
          <div className=" w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-primary-light mb-4 text-base">
            I’m Sravan Kumar, a UX designer who believes in grounding design in empathy and strategy. Over the years, I’ve led end-to-end UX projects—user research, flows, interaction design, prototyping, and usability testing—and supported product growth with scalable systems.
            </p>
            <p className="text-primary-light mb-6 text-base">
            I bring a balanced mindset: user-first thinking, business impact, and consistency at scale.
            </p>
            <div className="mb-6">
              <a
                href="https://www.figma.com/@sravan"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-4 bg-accent/10 hover:bg-accent/20 transition-colors p-4 rounded-xl border border-border">
                  <div className="flex-shrink-0">
                    <img src="/figmalogo.svg" alt="Figma Community" className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Figma Community</div>
                    <div className="text-primary-light text-sm">View my published files, templates, and resources</div>
                  </div>
                </div>
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

        {/* <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Why Choose Me</h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">User-first, data-informed</h3>
              <p className="text-muted-foreground text-base">Every design starts from real users and metrics.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">End-to-end accountability</h3>
              <p className="text-muted-foreground text-base">I handle projects from concept through delivery.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">Scalable thinking</h3>
              <p className="text-muted-foreground text-base">I build designs that future-proof growth.</p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary">Collaboration & mentorship</h3>
              <p className="text-muted-foreground text-base">Guiding junior designers, aligning across teams.</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">Past work: improved conversion by 18%, reduced dev overhead by 25%.</p>
        </div> */}
      </div>
    </section>
  );
};

export default About;
