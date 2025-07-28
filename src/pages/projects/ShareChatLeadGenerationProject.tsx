
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProjectLayout from "@/components/ProjectLayout";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React from "react";

const ShareChatLeadGenerationProject = () => {
  const processSlides = [
    {
      src: "/sharechatLead/mindmapping.png",
      alt: "Mind Mapping Process",
      caption: "Mind mapping helped us explore different approaches to form building and user flow design."
    },
    {
      src: "/sharechatLead/userflow.png",
      alt: "User Flow Design",
      caption: "Detailed user flow mapping from campaign creation to form submission and backend sync."
    }
  ];

  function ProcessSlideshow() {
    const [api, setApi] = React.useState(null);
    React.useEffect(() => {
      if (!api) return;
      const interval = setInterval(() => {
        api.scrollNext();
      }, 4000);
      return () => clearInterval(interval);
    }, [api]);

    return (
      <div className="w-full">
        <Carousel setApi={setApi} opts={{ loop: true, align: "start", slidesToScroll: 1 }} className="w-full">
          <CarouselContent className="-ml-4">
            {processSlides.map((slide, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-full">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto object-cover min-h-120 rounded-lg"
                    draggable={false}
                  />
                  <p className="text-sm text-muted-foreground text-center max-w-4xl mt-4">
                    {slide.caption}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }

  return (
    <ProjectLayout projectTitle="ShareChat Lead Generation">  
    <div className="min-h-screen bg-background">
      
      
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">UX Design</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Lead Generation Ad Feature – ShareChat Ads Platform</h1>
          <p className="text-xl text-primary-light mb-6">Empowering advertisers to launch lead-gen campaigns independently through a customizable, self-serve form builder.</p>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3" 
              alt="ShareChat Lead Generation" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
            <p className="text-primary-light">3 months</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
            <ul className="text-primary-light">
              <li>Figma</li>
              <li>UserTesting</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">UX/UI Designer</p>
          </div>
        </div>
        
        {/* Project Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div>
            <p className="text-primary-light mb-6">Sharechat Ads platform aims to revolutionise the lead generation campaign process for high-paying clients by introducing a self-service feature that allows advertisers to create and customise forms independently. This project addresses the current challenges faced by the marketing team, designers, and developers in launching campaigns, by reducing the time required to launch a campaign from one to three weeks to a matter of days. By enabling advertisers to have more control over their campaigns, Sharechat Ads platform expects to increase the number of advertisers and revenue significantly.</p>
          </div>
        </section>

        {/* Background & Goal Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Background & Goal</h2>
          <div>
            <p className="text-primary-light mb-6">As ShareChat's ad platform matured, we identified a recurring blocker: advertisers were unable to create or manage lead generation forms without internal support. This created bottlenecks, slowed down campaign launches, and introduced quality issues due to manual handovers.</p>
            
            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
              <p className="text-primary font-medium">The goal was clear: "Design a feature that enables advertisers to create and customize lead generation forms independently — streamlining the process and reducing dependencies."</p>
            </div>
          </div>
        </section>
        
        {/* Discovery & Research Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Discovery & Research</h2>
          <div>
            <p className="text-primary-light mb-6">To kick things off, I collaborated closely with product, ads ops, and engineering teams to identify pain points and map out the ideal workflow. I also conducted platform benchmarking to analyze how similar solutions were built by Meta, Google, and InMobi.</p>
            
            <h3 className="font-medium text-lg mb-3 text-primary">Key Insights:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-primary-light">
              <li>Advertisers needed speed and flexibility.</li>
              <li>Internal teams spent hours handling requests that could be automated.</li>
              <li>There was no visibility into the actual lead data structure during campaign setup.</li>
            </ul>
            <div className="">
              <img src="/sharechatLead/researchImiage.png" alt="Discovery & Research" className="w-full h-auto" />
            </div>
          </div>
        </section>
        
        {/* Process Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Process Overview</h2>
          <div>
            <p className="text-primary-light mb-6">We followed a Double Diamond approach, moving from research to definition, then exploring solutions before refining the best one.</p>
            <div className="my-10">
              <img src="/sharechatLead/Double Diamond.svg" alt="Double Diamond" className="w-full h-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">1. Understanding the User & Goals</h3>
                <p className="text-primary-light">Created user personas for campaign managers, media buyers, and ops stakeholders. This helped prioritize use cases like quick form deployment, previewing designs, and lead analytics compatibility.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">2. Ideation & Mapping</h3>
                <ul className="list-disc pl-5 space-y-1 text-primary-light">
                  <li>Conducted mind mapping and user flow design.</li>
                  <li>Created form state logic: default templates, validation, data syncing.</li>
                  <li>Mapped user journeys from campaign creation to form submission and backend sync.</li>
                </ul>
              </div>
            </div>

            <div className="my-10">
              <ProcessSlideshow />
            </div>
          </div>
        </section>
        
        {/* Wireframes & Exploration Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Wireframes & Exploration</h2>
          <div>
            <p className="text-primary-light mb-6">Designed multiple versions of form templates — exploring layouts, card styles, and field logic. Early concepts tested:</p>
            
            <ul className="list-disc pl-5 mb-6 space-y-2 text-primary-light">
              <li>Single-column vs. dual-view layouts</li>
              <li>Static templates vs. dynamic drag-and-drop fields</li>
              <li>Preview interactions before publishing</li>
            </ul>
            
            <p className="text-primary-light mb-6">We iterated quickly based on internal feedback and usability reviews, narrowing down to two clear card formats:</p>
            
            {/* <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">Basic Input Card</h4>
                <p className="text-sm text-primary-light">Simple form fields with clean layout</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-primary">Visual Promo Card</h4>
                <p className="text-sm text-primary-light">With branding and image upload</p>
              </div>
            </div> */}
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-border">
                <img src="/sharechatLead/Wireframe1.png" alt="Wireframe Exploration" className="w-full h-auto" />
                <div className="p-2">
                  <h4 className="font-medium mb-1">Wireframe Exploration</h4>
                  <p className="text-sm text-primary-light">Layout and field variations</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between rounded-lg overflow-hidden border border-border ">
                <div className="flex flex-col items-center justify-center w-full gap-2">
                  <img src="/sharechatLead/layout.png" alt="Card Format Testing" className="w-full h-auto object-cover  " />
                  <img src="/sharechatLead/sampletemplate.png" alt="Card Format Testing" className="w-full h-auto object-cover" />
                </div>
                <div className="p-2 ">
                  <h4 className="font-medium mb-1">Card Format Testing</h4>
                  <p className="text-sm text-primary-light">Basic vs Visual card concepts</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final Designs & Prototyping Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Final Designs & Prototyping</h2>
          <div>
            <p className="text-primary-light mb-6">The final design included:</p>
            
            <ul className="list-disc pl-5 mb-6 space-y-2 text-primary-light">
              <li>Form Builder UI with field customization, previews, and styling tools</li>
              <li>Clean, responsive UI optimized for mobile creation</li>
              <li>Templates that adapt to campaign type</li>
            </ul>
            
            <p className="text-primary-light mb-6">I created a high-fidelity prototype with real interactions to simulate the creation experience and demo it to stakeholders.</p>
            
            <div className="bg-accent/10 p-6 rounded-lg mb-6">
              <h3 className="font-medium text-lg mb-3 text-primary">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-2 text-primary-light">
                <li>Template selection with instant preview</li>
                <li>Field control: title, placeholder, type (dropdown, number, etc.)</li>
                <li>Visual customization for brand consistency</li>
                <li>Integration-ready lead output format</li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-border">
              <img src="https://placehold.co/800x600" alt="Final Form Builder UI" className="w-full h-auto" />
              <div className="p-4">
                <h4 className="font-medium mb-1">Final Form Builder UI</h4>
                <p className="text-sm text-primary-light">High-fidelity prototype with real interactions</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Outcome & Impact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Outcome & Impact</h2>
          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-medium text-lg mb-3 text-primary">Results:</h3>
                <ul className="list-disc pl-5 space-y-2 text-primary-light">
                  <li>Reduced turnaround time for lead-gen campaigns from days to minutes</li>
                  <li>Internal ops time freed up by 30–40%</li>
                  <li>Enabled advertisers to experiment and iterate campaigns independently</li>
                  <li>Created a scalable framework for future form-based ad formats</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3 text-primary">Key Metrics:</h3>
                <div className="space-y-4">
                  <div className="bg-accent/10 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-2xl text-accent">Days → Minutes</h4>
                    <p className="text-sm text-primary-light">Campaign turnaround time</p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-2xl text-accent">30-40%</h4>
                    <p className="text-sm text-primary-light">Ops time freed up</p>
                  </div>
                </div>
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
      </div>
      <Footer />
    </ProjectLayout>
    );
};

export default ShareChatLeadGenerationProject;
