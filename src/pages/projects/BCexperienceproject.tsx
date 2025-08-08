
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ImageDialog } from "@/components/ImageDialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProjectLayout from "@/components/ProjectLayout";

  
const BCExperienceProject = () => {

  const processArtifactsSlides = [
    { src: "/Hero_Images/Objects.png", alt: "Objects", caption: "Defining key objects in the system like Projects, Teams, and Check-Ins." },
    { src: "/Hero_Images/Roles.png", alt: "Roles", caption: "Mapping user roles such as Admin, Manager, and Employee." },
    { src: "/Hero_Images/Site_Map.png", alt: "Site Map", caption: "Structuring the application with a clear sitemap." },
    { src: "/Hero_Images/check_in_flow.png", alt: "Check-in Flow", caption: "Mapping the critical check-in user flow." },
  ];

  const wireframesSlides = [
    { src: "/Hero_Images/check_in_flow_1.png", alt: "Check-in Flow Screen 1" },
    { src: "/Hero_Images/check_in_flow_2.png", alt: "Check-in Flow Screen 2" },
    { src: "/Hero_Images/team_view_1.png", alt: "Team View Screen" },
    { src: "/Hero_Images/team_settings.png", alt: "Team Settings Screen" },
  ];

  const finalScreensSlides = [
      { src: "/bcexperience/checkin_creation.png", alt: "Check-in Creation", caption: "The simplified check-in interface where engineers update their progress twice daily." },
      { src: "/bcexperience/Single_Member_View.png", alt: "Single Member View", caption: "A timeline of daily check-ins for a specific team member to track progress and blockers." },
      { src: "/bcexperience/Team-View.png", alt: "Team View", caption: "A snapshot of check-in status across all team members." },
  ];

  function ImageCarousel({
    slides,
    className,
    itemClassName,
  }: {
    slides: { src: string; alt: string; caption?: string }[];
    className?: string;
    itemClassName?: string;
  }) {
    const [api, setApi] = React.useState<CarouselApi>();
    React.useEffect(() => {
      if (!api) return;
      const interval = setInterval(() => {
        api.scrollNext();
      }, 4000);
      return () => clearInterval(interval);
    }, [api]);

    return (
      <div className="w-full">
        <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className={className}>
          <CarouselContent className="-ml-4">
            {slides.map((slide, idx) => (
              <CarouselItem key={idx} className={itemClassName || "pl-4 basis-full"}>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto object-cover rounded-lg border"
                    draggable={false}
                  />
                  {slide.caption && (
                    <p className="text-sm text-muted-foreground text-center max-w-4xl mt-4">
                      {slide.caption}
                    </p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }

  return (
    <ProjectLayout projectTitle="BC Experience App">
      
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Case Study - Web App Design</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Building BeautifulCode Experience App </h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="/Hero_Images/BC_experience_cover.png" 
              alt="BC Experience App" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 ">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
            <p className="text-primary-light">3 months</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
            <ul className="text-primary-light">
              <li>Figma</li>
              <li>Cursor</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">UX Designer & Front-End Developer</p>
          </div>
        </div>
        
        {/* The Challenge Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">The Challenge</h2>
          <div >
            <p className="text-base text-muted-foreground mb-4">
              BeautifulCode’s success in client projects hinges on trust and transparency. As the team grew, the lack of a structured, centralized system for daily updates led to managers manually chasing updates and made it difficult to scale without constant partner involvement.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg my-6">
              <p className="italic font-semibold text-xl text-primary">
                How can we build a tool that fosters trust, minimizes micromanagement, and provides structured insights for a scaling remote team?
              </p>
            </div>
            <p className="text-base text-muted-foreground">Key issues to solve included improving communication, reducing meeting overload, and providing visibility for both internal teams and future clients.</p>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Design Process</h2>
          <div >
            <p className="text-base text-muted-foreground mb-6">
              My process started with research to understand user needs, which led to defining the core architecture of the application. Before jumping into visual design, I focused on building a solid foundation by mapping out key objects, roles, and the application's structure.
            </p>

            <h3 className="text-xl font-semibold mb-2 text-foreground mt-8">User Flow & Site Mapping</h3>
            <p className="text-base text-muted-foreground mb-4">
              I began by creating a detailed <strong>site map</strong> to establish a clear and logical structure for the application. This helped in organizing features and ensuring that navigation would be intuitive for all user roles—from admins to engineers.
            </p>
            <p className="text-base text-muted-foreground mb-6">
              Next, I mapped out the most critical <strong>user flow</strong>: the daily check-in. The goal was to make this process as fast and frictionless as possible to encourage adoption. By visualizing each step, I could identify potential pain points and simplify the interaction, ensuring engineers could complete their updates in just a few clicks.
            </p>

            <div className="my-8">
              <ImageCarousel slides={processArtifactsSlides} className="w-full" itemClassName="pl-4 basis-full md:basis-1/2"/>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-foreground mt-8">Wireframing & Prototyping</h3>
            <p className="text-base text-muted-foreground mb-6">
              With the architecture and flows defined, I sketched ideas quickly in Figma to visualize core screens. Focusing on the daily check-in process, I created low-fidelity wireframes that prioritized speed and simplicity. Early versions were shared with the team to validate assumptions, which led to interactive prototypes for real-world testing and feedback.
            </p>
            <div className="my-8">
               <ImageCarousel slides={wireframesSlides} className="w-full" itemClassName="pl-4 basis-full md:basis-1/2"/>
            </div>
            
             <div className="my-8 flex flex-col items-center">
               <img src="/bcexperience/checkin.gif" alt="Check-in Flow Animation" className="w-full rounded-lg shadow-md border" />
               <span className="text-sm text-muted-foreground mt-2">Check-in flow Animation</span>
             </div>

               {/* Final Prototype Section */}
          <section className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Working Figma Prototype</h3>
            <div >
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Interactive Prototype</h4>
                    <p className="text-sm text-muted-foreground">Figma Prototype</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore the full interactive prototype to see the check-in flow, team views, and core application features in action.
                </p>
                <a 
                  href="https://www.figma.com/proto/EtqeVYOBvOPc15RlSbZmZr/BeautifulCode-Experience-App?page-id=553%3A11178&node-id=40000021-50100&p=f&viewport=2332%2C217%2C0.12&t=L0l2vB5rOzhuFU8Q-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000021%3A49953" 
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Interactive Prototype
                </a>
              </div>
            </div>
          </section>
            </div>
          </section>
        
        {/* Challenges Faced Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Challenges Faced</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Making Check-ins Feel Lightweight</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Getting engineers to adopt daily check-ins without it feeling like micromanagement was the hardest part. We focused on making the flow fast, clean, and integrated with their workflow. Constant feedback and small improvements (like auto-fill and Slack summaries) made adoption smoother.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Overcoming Adoption Hurdles</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Early feedback showed the process felt repetitive. To reduce friction, we added auto-fill for repeated entries and a "Generate Summary" feature to easily share updates in Slack, which became important for team visibility.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final UI Section */}
        <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Final UI</h2>
            <div >
              <p className="text-base text-muted-foreground mb-6">
                The final design focused on a clean, developer-first aesthetic. The UI is simple, structured, and provides clear information hierarchy, making it easy for users to check in, view team progress, and get a snapshot of daily activities.
              </p>

              <div className="my-8 bg-white border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                 
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-foreground font-normal">This is the main Figma project file where I have everything documented in detail.</p>
                    <a 
                      href="https://www.figma.com/community/file/1532192399307808386/beautiful-code-experience-app" 
                      target="_blank" rel="noopener noreferrer"

                      className="text-base text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      View detailed documentation →
                    </a>
                  </div>
                </div>
              </div>

              <ImageCarousel slides={finalScreensSlides} className="w-full" itemClassName="pl-4 basis-full" />
              
              
            </div>
        </section>

      
        
        {/* Outcomes & Results Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Outcomes & Results</h2>
          <div >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-3 text-primary">Results:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-primary-light">
                  <li>✅ Reduced check-in time to under 5 minutes.</li>
                  <li>🔁 Introduced auto-fill for repeated ticket details to reduce friction.</li>
                  <li>📄 Added a "Generate Summary" CTA for easy sharing to Slack.</li>
                  <li>📈 Achieved an average 85% daily check-in rate across the organization.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3 text-primary">Next Features:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-1 text-primary-light">
                  <li>📊 Analytics Section for Managers</li>
                  <li>🏠 Main Dashboard</li>
                  <li>🧑‍💼 Client-Side Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-primary">Interested in working together?</h2>
          <Button asChild className="bg-accent hover:bg-accent-hover text-white">
            <a href="/#contact">Contact Me</a>
          </Button>
        </div>
      
    </ProjectLayout>
  );
};

export default BCExperienceProject;
