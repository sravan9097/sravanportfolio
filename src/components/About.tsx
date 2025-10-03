const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-padded">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center mb-12">
          {/* On mobile: image medium; show intro text alongside image using order utilities */}
          <div className=" w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-primary-light">About Me</h2>
            <p className="text-primary-light mb-4 text-base">
            I’m Sravan Kumar, a UX designer who bridges strategy, design, and execution. I specialize in turning complex user problems into intuitive, scalable solutions—grounded in research and validated through prototypes.

            </p>
            
            <p className="text-primary-light mb-6 text-base">
            Over the years, I’ve led end-to-end UX projects across research, user flows, interaction design, and usability testing, while collaborating closely with developers to ensure designs ship as intended. My hybrid approach—designing in Figma and prototyping in code—helps reduce handoff friction and deliver experiences that work in the real world.
            </p>


            
            <p className="text-primary-light mb-6 text-base">
            I bring a balanced mindset: user-first thinking, measurable business impact, and consistency at scale.
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
                <ul className="space-y-1  ">
                 <li> <span className="font-semibold text-primary-light">Figma & FigJam</span> <span className="text-muted-foreground">(design systems, prototyping, collaboration)</span></li>

                  <li> <span className="font-semibold text-primary-light">Notion</span> <span className="text-muted-foreground">(documentation & product ops)</span></li>

                  <li> <span className="font-semibold text-primary-light">Balsamiq</span> <span className="text-muted-foreground">(low-fi wireframes)</span></li>

                  <li> <span className="font-semibold text-primary-light">GitHub / Cursor</span> <span className="text-muted-foreground">(design-to-code workflows)</span></li>
                  
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-primary">Technical Skills</h3>
                <ul className="space-y-1 text-primary-light">
                  <li> <span className="font-semibold text-primary-light">Product UI/UX</span> <span className="text-muted-foreground">– flows, wireframes, high-fidelity UI, and accessibility</span></li>

                  <li> <span className="font-semibold text-primary-light">Design Systems</span> <span className="text-muted-foreground">– scalable, reusable components with documentation</span></li>

                  <li> <span className="font-semibold text-primary-light">Prototyping</span> <span className="text-muted-foreground">– interactive prototypes in Figma & code (React, Next.js)</span></li>

                  <li> <span className="font-semibold text-primary-light">Developer Collaboration</span> <span className="text-muted-foreground">– handoff-ready designs, tokens, and guidelines</span></li>

                  <span className="font-semibold">Frontend Basics</span> <span className="text-muted-foreground">– HTML, CSS (TailwindCSS), JavaScript, React</span>
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
