const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-padded">
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center mb-12">
          {/* On mobile: image medium; show intro text alongside image using order utilities */}
          <div className=" w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-light">About Me</h2>
            <p className="text-primary-light mb-4 text-base">
            I’m Sravan Kumar. A Senior UX & Product Designer who works where strategy meets systems and real-world execution. I design for complex products that need to scale. Not just look good.

            </p>
            
            <p className="text-primary-light mb-6 text-base">
            Over the last 6+ years, I’ve led end-to-end UX across research, flows, interaction design, and usability testing. I work closely with engineering to ensure what gets designed actually ships. My hybrid workflow of designing in Figma and prototyping in code helps reduce handoff friction and move teams faster with confidence.
            </p>


            
            <p className="text-primary-light mb-6 text-base">
            At the core of my work is a simple belief. Less chaos. More clarity. I design with a strong focus on user-first thinking, measurable business impact, and long-term consistency at scale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a
                href="https://www.figma.com/@sravan"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-4 bg-accent/10 hover:bg-accent/20 transition-colors p-4 rounded-xl border border-border h-full">
                  <div className="flex-shrink-0">
                    <img src="/figmalogo.svg" alt="Figma Community" className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Figma Community</div>
                    <div className="text-primary-light text-sm mb-1">www.figma.com/@sravan</div>
                    <div className="text-primary-light text-sm">Explore my published systems, templates, and resources</div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/sravan9097"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-4 bg-accent/10 hover:bg-accent/20 transition-colors p-4 rounded-xl border border-border h-full">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">GitHub</div>
                    <div className="text-primary-light text-sm mb-1">www.github.com/sravan9097</div>
                    <div className="text-primary-light text-sm">Check out my code repositories and projects</div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
              <div>
                <h3 className="font-medium mb-2 text-primary">Tools & Softwares</h3>
                <ul className="space-y-1  ">
                 <li> <span className="font-semibold text-primary-light">Figma & FigJam</span> <span className="text-muted-foreground">(design systems, prototyping, collaboration)</span></li>
                  <li> <span className="font-semibold text-primary-light">Zeplin (or Figma Dev Mode)</span> <span className="text-muted-foreground">(design-to-code workflows)</span></li>
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
