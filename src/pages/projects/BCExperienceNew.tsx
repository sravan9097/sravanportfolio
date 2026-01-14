import React from "react";
import ProjectLayout from "@/components/ProjectLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Zap, Eye, Target, Box, Users, Lock } from "lucide-react";
import { useImageModal } from "@/components/ImageModal";

const FinalUICarousel = () => {
  const { openModal } = useImageModal();
  
  const screens = [
    {
      src: "/bcexperience/checkin_creation.png",
      alt: "Check-in Creation"
    },
    {
      src: "/bcexperience/Single_Member_View.png",
      alt: "Single Member View"
    },
    {
      src: "/bcexperience/Team-View.png",
      alt: "Team View"
    },
    {
      src: "/bcexperience/Login Page.png",
      alt: "Login Page"
    },
    {
      src: "/bc-experience/2001 - Check-in Creation - Guidelines CTA Addition.png",
      alt: "Check-in Creation with Guidelines"
    },
    {
      src: "/bcexperience/Analytics View - New View.png",
      alt: "Objects"
    },
    {
      src: "/bcexperience/Client Creation - Client Details Page.png",
      alt: "Client Creation"
    },
    // {
    //   src: "/bc-experience/Site_Map.png",
    //   alt: "Site Map"
    // },
    // {
    //   src: "/bc-experience/check_in_flow.png",
    //   alt: "Check-in Flow"
    // }
  ];

  // Duplicate screens multiple times for seamless infinite loop
  const duplicatedScreens = [...screens, ...screens, ...screens];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex animate-scroll-infinite" style={{ gap: '24px' }}>
        {duplicatedScreens.map((screen, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{ width: '600px' }}
          >
            <div className="relative h-[500px] overflow-hidden flex items-center justify-center">
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                draggable={false}
                onClick={() => openModal(screen.src, screen.alt)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BCExperienceNew = () => {
  const { openModal } = useImageModal();
  
  return (
    <ProjectLayout projectTitle="BC Experience App">
      <div className="w-full">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground max-w-4xl">
            Capturing Daily Engineering Progress Without Meetings
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                Engineering teams need visibility into progress, not more meetings. The BC Experience App enables
                lightweight, async daily check ins that help teams stay aligned without interrupting focus or adding
                process overhead.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Role</p>
                  <p className="text-sm font-medium text-foreground">Sr UX Designer</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                  <p className="text-sm font-medium text-foreground">4 months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Platform</p>
                  <p className="text-sm font-medium text-foreground">Web · Internal tooling</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Users</p>
                  <p className="text-sm font-medium text-foreground">Engineers, Tech Leads, Managers</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border">
                  4 min faster check-in time
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border">
                  76.5% adoption
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-border">
                  40% friction reduction
                </Badge>
              </div>
            </div>
            
            <div className="lg:w-[508px] lg:h-[376px] w-full aspect-[508/376] bg-muted rounded-2xl overflow-hidden">
              <img 
                src="/Hero_Images/BC_experience_cover.png" 
                alt="BC Experience App" 
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal("/Hero_Images/BC_experience_cover.png", "BC Experience App")}
              />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-24 bg-muted/50 rounded-2xl p-12 md:p-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground max-w-2xl">
            The problem was not accountability. It was visibility at scale.
          </h2>
          
          <p className="text-base text-muted-foreground mb-8 w-full leading-relaxed">
            As teams became more distributed, daily progress updates relied heavily on synchronous standups and
            manual follow ups. While developers were actively working, there was no consistent way to capture
            and share progress asynchronously.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Inconsistent updates across distributed teams",
              "Excessive time spent collecting and consolidating status",
              "Limited visibility into progress and blockers",
              "Dependence on synchronous meetings for alignment"
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
          
          {/* <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="grid grid-cols-3 gap-2 flex-shrink-0">
                <div className="w-12 h-12 bg-muted rounded-lg"></div>
                <div className="w-12 h-12 bg-muted rounded-lg"></div>
                <div className="w-12 h-12 bg-muted rounded-lg"></div>
              </div>
              <div className="flex-1">
                <div className="w-full h-14 bg-muted rounded-lg mb-4"></div>
                <div className="border border-dashed border-accent/50 rounded-xl p-4 bg-accent/5">
                  <Badge variant="outline" className="border-accent text-accent bg-accent/10">
                    Unified Path
                  </Badge>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* Why Leadership Invested */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Why leadership invested in this problem
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/bcexperience/thunder.svg",
                title: "Velocity at risk",
                description: "Time spent coordinating work was increasing as teams scaled"
              },
              {
                icon: "/bcexperience/Shield.svg",
                title: "Low signal visibility",
                description: "Leaders lacked early indicators of blockers and delivery risk"
              },
              {
                icon: "/bcexperience/Clock.svg",
                title: "Developer experience impact",
                description: "Meetings and reporting disrupted focus and autonomy"
              }
            ].map((item, idx) => {
              // CSS filters to convert white to theme colors
              // Accent color (blue): brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(94%)
              // Primary color (similar blue): brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(94%)
              const iconFilters = [
                "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(94%)", // thunder - accent blue
                "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(94%)", // shield - primary blue
                "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(94%)" // clock - accent blue
              ];
              
              return (
                <div key={idx} className="flex flex-col gap-4 bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="w-6 h-6"
                      style={{ filter: iconFilters[idx] }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">{item.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Design Intent */}
        {/* <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Design Intent</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent">Design Principles</h3>
              <div className="space-y-3">
                {[
                  { text: "Speed over completeness", icon: Zap },
                  { text: "Clarity over configurability", icon: Eye },
                  { text: "Defaults over decisions", icon: Target }
                ].map((principle, idx) => {
                  const IconComponent = principle.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-accent/10 rounded-xl">
                      <div className="w-8 h-8 rounded-xl bg-accent/5 dark:bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-accent" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{principle.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Constraints</h3>
              <div className="space-y-3">
                {[
                  { text: "Existing tooling ecosystem could not be replaced", icon: Box },
                  { text: "Teams varied in maturity and process", icon: Users },
                  { text: "Adoption depended on trust, not mandates", icon: Lock }
                ].map((constraint, idx) => {
                  const IconComponent = constraint.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                      <div className="w-8 h-8 rounded-xl bg-muted-foreground/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{constraint.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Enable transparency without micromanagement
            </h3>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              The goal was to design a system that developers would use willingly. Not because
              they were required to, but because it helped them reflect on progress and unblock faster.
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-muted rounded-xl">
                <Badge variant="outline" className="mb-2 text-muted-foreground">Considered</Badge>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• No heavy workflows</li>
                  <li>• No performance tracking</li>
                  <li>• No forced structure</li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}




        {/* Key Design Decisions */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Key Design Decisions</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                title: "Centralize progress, not people",
                description: "Developers were already making progress. The missing piece was a shared, reliable view of that progress without tracking individuals or activity.",
                considered: "Activity tracking and time based reporting",
                chosen: "Progress focused daily check ins that capture work movement and blockers",
                benefit: "Consistent visibility without micromanagement or surveillance"
              },
              {
                title: "Design for the most common daily flow",
                description: "Daily updates happen under time pressure. Any friction would reduce consistency and adoption.",
                considered: "Custom dashboards, flexible templates, and per team configurations",
                chosen: "A fast, opinionated check in flow optimized for everyday updates",
                benefit: "Higher completion rates and lower cognitive load"
              },
              {
                title: "Make progress visible, not configurable",
                description: "Too many options slow teams down and create inconsistency across updates.",
                considered: "Highly configurable views and settings",
                chosen: "Clear defaults for status, ownership, and blockers",
                benefit: "Reduced decision fatigue and clearer team wide understanding"
              }
              // {
              //   title: "Async by default, synchronous when needed",
              //   description: "Teams operate across time zones and focus hours. Visibility should not depend on meetings.",
              //   considered: "Standup driven updates and scheduled syncs",
              //   chosen: "Asynchronous check ins with optional follow up conversations",
              //   benefit: "Fewer meetings and stronger cross time zone alignment"
              // }
            ].map((decision, idx) => (
              <Card key={idx} className="border-border shadow-sm flex-1 bg-slate-50 dark:bg-slate-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Left Column: Title, Description, and Benefit */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold text-primary">{decision.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{decision.description}</p>
                      </div>
                      
                      {/* Benefit with checkmark icon */}
                      {/* <div className="flex items-center gap-2 mt-auto">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <p className="text-sm font-medium text-accent leading-relaxed">{decision.benefit}</p>
                      </div> */}
                    </div>
                    
                    {/* Right Column: Considered and Chosen boxes stacked vertically */}
                    {/* <div className="flex flex-row flex-1 gap-6">
                      <div className="p-4 bg-muted rounded-xl w-full">
                        <Badge variant="outline" className="mb-3.5 text-xs text-muted-foreground border-0 bg-transparent p-0 h-auto font-normal">Considered</Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">{decision.considered}</p>
                      </div>
                      <div className="p-4 bg-accent/10 rounded-xl w-full">
                        <Badge variant="outline" className="mb-2.5 text-xs border-0 bg-transparent p-0 h-auto font-normal text-accent">Chosen</Badge>
                        <p className="text-sm font-medium text-foreground leading-relaxed">{decision.chosen}</p>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>



         {/* Process Artifacts */}
         <section className="mb-24">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Process Artifacts</h2>
          
          <p className="text-base text-muted-foreground mb-6 leading-relaxed w-full">
            Before jumping into visual design, I focused on building a solid foundation by mapping out key objects, roles, and the application's structure. These artifacts helped establish the core architecture and user flows.
          </p> 
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              {
                src: "/Objects.png",
                alt: "Objects",
                caption: "Defining key objects in the system like Projects, Teams, and Check-Ins."
              },
              {
                src: "/Roles.png",
                alt: "Roles",
                caption: "Mapping user roles such as Admin, Manager, and Employee."
              },
              {
                src: "/Site_Map.png",
                alt: "Site Map",
                caption: "Structuring the application with a clear sitemap."
              },
              {
                src: "/check_in_flow.png",
                alt: "Check-in Flow",
                caption: "Mapping the critical check-in user flow."
              }
            ].map((artifact, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl overflow-hidden">
                <div className="p-2.5">
                  <img
                    src={artifact.src}
                    alt={artifact.alt}
                    className="w-full h-auto object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal(artifact.src, artifact.alt)}
                  />
                </div>
                {artifact.caption && (
                  <p className="text-sm text-muted-foreground text-center p-4 pt-0">
                    {artifact.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>



        

        {/* Core Flows & Interactions */}
        <section className="mb-24 py-12">
          <div className="mb-6 flex flex-col items-start justify-center  w-full">
            <h2 className="text-3xl font-bold mb-2 text-foreground text-left">Core Flows & Interactions</h2>
            <p className="text-base text-muted-foreground w-full leading-relaxed text-left">
              The experience is built around a lightweight, async check in flow that captures daily progress while
              keeping effort intentionally low for developers.
            </p>
          </div>
          
          <div className="space-y-0">
            {/* Creating a Check-In */}
            <div className="flex flex-col md:flex-row items-center gap-6 py-8">
              <div className="flex flex-col gap-2.5 p-2.5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground">Creating a Check-In</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The check in flow is intentionally short and opinionated. Developers choose between
                    two paths based on how they worked that day.
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="p-4 bg-accent/5 rounded-xl">
                      <p className="text-base font-normal text-accent mb-2.5">Ticket based check in</p>
                      <ul className="text-sm font-medium text-foreground leading-relaxed list-disc list-inside space-y-1">
                        <li>Link progress directly to a Jira ticket</li>
                        <li>Describe work completed in plain language</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-xl">
                      <p className="text-base font-normal text-accent mb-2.5">Ad hoc check in</p>
                      <ul className="text-sm font-medium text-foreground leading-relaxed list-disc list-inside space-y-1">
                        <li>Capture unplanned but necessary work</li>
                        <li>Avoid forcing everything into a ticket</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
                <div className="w-[700px] h-auto border border-border rounded-xl flex items-center justify-center">
                  <img 
                    src="/bcexperience/Check-in Ticket.png" 
                    alt="Ticket based check in" 
                    className="w-full h-full object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("/bcexperience/Check-in Ticket.png", "Ticket based check in")}
                  />
                </div>
              </div>
            {/* Capturing Blockers */}
            <div className="flex flex-col md:flex-row items-center gap-6 py-6">
              
                <div className="w-[400px] h-auto border border-border rounded-xl flex items-center justify-center">
                  <img 
                    src="/bcexperience/Blockers.png" 
                    alt="Capturing Blockers" 
                    className="w-full h-full object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("/bcexperience/Blockers.png", "Capturing Blockers")}
                  />
                </div>
              
              <div className="flex-1 flex flex-col gap-2.5 p-2.5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground">Capturing Blockers Without Friction</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Blockers are optional and surfaced only when present.
                  </p>
                  
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <p className="text-base font-normal text-accent mb-2.5">When a blocker is added:</p>
                    <ul className="text-sm font-medium text-foreground leading-relaxed list-disc list-inside space-y-1">
                      <li>It becomes visible at the team level immediately</li>
                      <li>It is tied to context, not just a warning state</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Assisted Summary */}
            <div className="flex flex-col md:flex-row items-center gap-6 py-6">
              <div className="flex-1 flex flex-col gap-2.5 p-2.5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground">AI Assisted Daily Summary</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At any point, developers can generate a clean daily summary from their check ins.
                  </p>
                  
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <p className="text-base font-normal text-accent mb-2.5">The summary consolidates:</p>
                    <ul className="text-sm font-medium text-foreground leading-relaxed list-disc list-inside space-y-1">
                      <li>What was worked on today</li>
                      <li>What is planned next</li>
                      <li>Any blockers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
                <div className="w-[450px] h-auto border border-border rounded-xl flex items-center justify-center">
                  <img 
                    src="/bcexperience/dailysummary.png" 
                    alt="AI Assisted Daily Summary" 
                    className="w-full h-full object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("/bcexperience/dailysummary.png", "AI Assisted Daily Summary")}
                  />
                </div>
              
            </div>
            
            {/* Individual Progress View */}
            <div className="flex flex-col md:flex-row items-center gap-8 py-6">
              
                <div className="w-[450px] h-auto border border-border rounded-xl flex items-center justify-center">
                  <img 
                    src="/bcexperience/indivudal.png" 
                    alt="Individual Progress View" 
                    className="w-full h-full object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("/bcexperience/indivudal.png", "Individual Progress View")}
                  />
                </div>
              
              <div className="flex-1 flex flex-col gap-2.5 p-2.5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground">Individual Progress View</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each developer has a personal workspace that brings together their work timeline,
                    active tickets, ad hoc tasks, and meeting context.
                  </p>
                  
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <p className="text-base font-normal text-accent mb-2.5">Key elements include:</p>
                    <ul className="text-sm font-medium text-foreground leading-relaxed list-disc list-inside space-y-1">
                      <li>Ticket level progress tracked over time</li>
                      <li>Ad hoc tasks captured alongside planned work</li>
                      <li>Clear visual indicators for missed check ins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Check-In Overview */}
            <div className="flex flex-col md:flex-row items-center gap-8 py-6">
              <div className="flex-1 flex flex-col gap-2.5 p-2.5">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground">Team Check-In Overview</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The team view provides a real time snapshot of daily activity across the
                    sprint or selected day.
                  </p>
                  
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <p className="text-base font-normal text-accent mb-2.5">Instead of status meetings, managers can see:</p>
                    <ul className="text-sm font-medium text-foreground leading-relaxed list-disc list-inside space-y-1">
                      <li>Who has checked in and when</li>
                      <li>What work is in progress, completed, or blocked</li>
                      <li>Missed check ins surfaced clearly but neutrally</li>
                    </ul>
                  </div>
                </div>
              </div>
              
                <div className="w-[450px] h-auto border border-border rounded-xl flex items-center justify-center">
                  <img 
                    src="/bcexperience/team.png" 
                    alt="Team Check-In Overview" 
                    className="w-full h-full object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal("/bcexperience/team.png", "Team Check-In Overview")}
                  />
                </div>
              
            </div>
          </div>
        </section>

        {/* Final UI Highlights */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Final UI Highlights</h2>
          </div>
          
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <FinalUICarousel />
          </div>
        </section>

        {/* Outcomes & Impact */}
        <section className="mb-24 bg-accent/5 rounded-2xl p-12 md:p-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Outcomes & Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">4 min</div>
              <h3 className="text-xl font-medium mb-2 text-foreground">Faster Checkin time</h3>
              <p className="text-sm text-muted-foreground">
                New engineers got used to the flow and started checking in within under 5 minutes on average.
              </p>
            </div>
            <div className="text-center">
              
              <div className="text-5xl font-bold text-accent mb-4">40%</div>
              <h3 className="text-xl font-medium mb-2 text-foreground">Friction reduction</h3>
              <p className="text-sm text-muted-foreground">
                Less repetitive input and fewer steps.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">76.5%</div>
              <h3 className="text-xl font-medium mb-2 text-foreground">Adoption rate</h3>
              <p className="text-sm text-muted-foreground">
                Teams adopted the flow organically within the first rollout.
              </p>
            </div>
           
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">What I learned</h2>
          
          <div className="space-y-8">
            {[
              {
                number: "1",
                title: "Opinionated defaults scale better than flexible systems.",
                description: "When you know your users' context, make decisions for them."
              },
              {
                number: "2",
                title: "Designing for engineers requires respecting time and context.",
                description: "They're not looking for delight—they're looking for efficiency."
              },
              {
                number: "3",
                title: "Trust is the strongest adoption lever.",
                description: "When people feel the tool respects their expertise, they champion it."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-muted-foreground">{item.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

       

        {/* Figma Links */}
        <section className="mb-24 flex flex-col lg:flex-row items-stretch gap-4">
          {/* Figma Prototype */}
          <div className="flex-1 flex items-start gap-4 bg-background rounded-xl border border-border shadow-md dark:shadow-none p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Interactive Prototype</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                Explore the full interactive prototype to see the check-in flow, team views, and core application features in action.
              </p>
              <a 
                href="https://www.figma.com/proto/EtqeVYOBvOPc15RlSbZmZr/BeautifulCode-Experience-App?page-id=553%3A11178&node-id=40000021-50100&p=f&viewport=2332%2C217%2C0.12&t=L0l2vB5rOzhuFU8Q-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=40000021%3A49953" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-primary/80 font-medium transition-colors"
              >
                View Interactive Prototype
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Figma Project File */}
          <div className="flex-1 flex items-start gap-4 bg-background rounded-xl border border-border shadow-md dark:shadow-none p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/figmalogo.svg" alt="Figma" className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Figma Project File</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                This is the main Figma project file where I have everything documented in detail, including all design iterations, components, and design system elements.
              </p>
              <a 
                href="https://www.figma.com/community/file/1532192399307808386/beautiful-code-experience-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent font-medium transition-colors"
              >
                View detailed documentation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
};

export default BCExperienceNew;
