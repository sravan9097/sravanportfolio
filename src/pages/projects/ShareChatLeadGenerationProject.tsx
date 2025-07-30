
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
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Case Study</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Lead Generation Ad Feature – ShareChat Ads Platform</h1>
          <p className="text-xl text-primary-light mb-6">Empowering advertisers to launch lead-gen campaigns independently through a customizable, self-serve form builder.</p>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="/Hero_Images/sharechatCover.png" 
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
          <h2 className="text-2xl font-bold mb-6 text-foreground">Project Overview</h2>
          <div>
            <p className="text-primary-light mb-6">Sharechat Ads platform aims to revolutionise the lead generation campaign process for high-paying clients by introducing a self-service feature that allows advertisers to create and customise forms independently. This project addresses the current challenges faced by the marketing team, designers, and developers in launching campaigns, by reducing the time required to launch a campaign from one to three weeks to a matter of days. By enabling advertisers to have more control over their campaigns, Sharechat Ads platform expects to increase the number of advertisers and revenue significantly.</p>
          </div>
        </section>

        {/* Background & Goal Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Background & Goal</h2>
          <div>
            <p className="text-primary-light mb-6">As ShareChat's ad platform matured, we identified a recurring blocker: advertisers were unable 
              to create or manage lead generation forms without internal support.
               This created bottlenecks, slowed down campaign launches, and introduced quality issues due to manual handovers.</p> 
            
            <blockquote className="border-l-4 pl-4 italic font-medium text-xl text-muted-foreground mb-4">The goal was clear: Design a feature that enables advertisers to create and customize lead generation forms independently — streamlining the process and reducing dependencies.</blockquote>
            
          </div>
        </section>
        
        {/* Discovery & Research Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Discovery & Research</h2>
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
          <h2 className="text-2xl font-bold mb-6 text-foreground">Process Overview</h2>
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
          <h2 className="text-2xl font-bold mb-6 text-foreground">Wireframes & Exploration</h2>
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
          <h2 className="text-2xl font-bold mb-6 text-foreground">Final Designs & Prototyping</h2>
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
            
            <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Final Prototype</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              {/* Ad Creation Screen */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Ad Creation Screen</h4>
                    <p className="text-sm text-muted-foreground">Form builder interface</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience the ad creation workflow where advertisers can build and customize lead generation forms with drag-and-drop functionality, field customization, and real-time preview.
                </p>
                <a 
                  href="https://www.figma.com/proto/9eaO1h8VmtYnhHMr2oFKMk/New-Feature---Introduction-of-Lead-Generation-Ad-Format?page-id=3%3A118&node-id=120-144385&viewport=-2772%2C-1891%2C0.2&t=QUVJx2wc7svG6dyZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=120%3A144385&show-proto-sidebar=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Ad Creation Prototype
                </a>
              </div>

              {/* Form Template Customization */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Form Template Concept</h4>
                    <p className="text-sm text-muted-foreground">Customization demonstration</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  A concept prototype I created to demonstrate to the team how advertisers could customize form templates with different field types, styling options, and branding elements. This helped communicate the vision for form flexibility.
                </p>
                <a 
                  href="https://www.figma.com/proto/9eaO1h8VmtYnhHMr2oFKMk/New-Feature---Introduction-of-Lead-Generation-Ad-Format?page-id=3%3A118&node-id=118-2565&viewport=-2772%2C-1891%2C0.2&t=QUVJx2wc7svG6dyZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=118%3A2565&show-proto-sidebar=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Concept Demo
                </a>
              </div>
            </div>

            <div className="my-8 bg-white border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                 
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-foreground font-normal">This is the main Figma project file where I have everything documented in detail.</p>
                    <a 
                      href="https://www.figma.com/community/file/1324673389958171817/new-feature-introduction-of-lead-generation-ad-format" 
                      target="_blank" 
                      rel="noopener noreferrer"

                      className="text-base text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      View detailed documentation →
                    </a>
                  </div>
                </div>
              </div> 
              
          </div>
        </section>
        
        {/* Outcome & Impact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Outcome & Impact</h2>
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
        <div className="text-center my-16">
          <h2 className="text-2xl font-bold mb-4 text-primary">Interested in working together?</h2>
          <Button asChild className="bg-accent hover:bg-accent-hover text-white">
            <a href="/#contact">Contact Me</a>
          </Button>
        </div>
      </div>
     
    </ProjectLayout>
    );
};

export default ShareChatLeadGenerationProject;
