import React from "react";
import ProjectLayout from "@/components/ProjectLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BeautifulCodeRedesignProject = () => {
  return (
    <ProjectLayout projectTitle="BeautifulCode Website Redesign">
      <div className="min-h-screen bg-background">
        <div className="flex flex-col items-center mx-auto ">
          {/* Hero Section */}
          <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">UX Design </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">BeautifulCode Website Revamp </h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img 
              src="/bcwebsite/beautifulcodeCover.png" 
              alt="BeautifulCode Website Revamp" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
          
          <div className="flex w-full mx-auto md:grid md:grid-cols-3 gap-8 mb-12 ">
              <div>
                <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
                <p className="text-primary-light">1 month</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
                <ul className="text-primary-light">
                  <li>Figma</li>
                </ul>
              </div>
            <div>
              <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
              <p className="text-primary-light">UX Designer</p>
            </div>
        
           
          </div>

          

          {/* Challenge */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h2>
            <p className="text-base text-muted-foreground mb-4">When I was approached by the leadership team at BeautifulCode, they gave me a very clear but unique vision for their website. 
              They wanted it to feel geeky. Not in an over-the-top, flashy way, but in a calm, thoughtful, and technical sense. 
              It had to feel like a website made by engineers who love writing code. The site was intended for seasoned engineers, CTOs, and senior 
              leadership who would appreciate the authenticity of a simple, no-nonsense design.</p>
              <p className="text-base text-muted-foreground mb-4">The key theme they wanted was:</p>
            
            <blockquote className="border-l-4 pl-4 italic font-semibold text-xl text-muted-foreground mb-4">“We are engineers who care deeply about our craft. Here’s what we’re good at, no fluff, no sales talk.”</blockquote>
            <p className="text-muted-foreground text-base mb-2">Their goal was clear, but the challenge was: How do you design a site that’s both geeky and professional? How do you show off expertise without sounding too flashy?</p>
          </section>

          {/* Approach */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">The Approach</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Understanding the Core Vision</h3>
            <p className="text-base text-muted-foreground mb-4">The leadership provided an initial wireframe, which helped outline the structure of the website:</p>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li className="mb-2"> <span className="font-semibold">What We’re Wired For:</span> A section showing their main engineering capabilities — Frontend, Backend, AI & ML, Infrastructure, Data Engineering, and Site Maintenance.</li>
              <li className="mb-2"><span className="font-semibold">Foundation Principles:</span> A section for showcasing their core engineering beliefs (still being finalized).</li>
              
            </ul>
            <p className="text-muted-foreground">The homepage was the entry point, designed to be a navigational hub. 
              The rest of the site would consist of articles and case studies within each category to give users an idea of what BeautifulCode excels at.</p>
          </section>

          {/* Wireframing & Navigation Concepts */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Wireframing & Early Concepts</h2>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Wireframing</h3>
              <p className="text-base text-muted-foreground mb-4">I began by translating the sketch into low-fidelity wireframes. I experimented with different layouts for the homepage and category pages.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">  
              <Card>
                <h4  className=" mb-2 text-foreground p-6">First Iteration</h4>
                <CardContent>
                  <div className="my-4">
                    <img src="/bcwebsite/wireframe1.png" alt="BeautifulCode Website Revamp" className="w-full object-cover" />
                  </div>
                  
                 
                </CardContent>
              </Card>
              <Card>
                <h4 className="mb-2 text-foreground p-6">Second Iteration</h4>
                <CardContent>
                  <div className="my-4">
                    <img src="/bcwebsite/wireframe2.png" alt="BeautifulCode Website Revamp" className="w-full object-cover" />
                  </div>
                  
                </CardContent>
              </Card>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Feedback</h3>
            <p className="text-muted-foreground mb-4 ">Feedback: “Too structured… too boxed in. It feels like a dashboard.”</p>
            <blockquote className="border-l-4 pl-4 italic font-semibold text-xl text-muted-foreground">“It’s too boxed in, too structured — it feels like a dashboard.”
              <br />
            “We want the homepage to feel calm and clean, like a developer’s workspace.”</blockquote>
            <p className="text-muted-foreground py-4">This led to the decision to simplify the design further by removing unnecessary containers and relying more on spatial alignment and typography to create a more relaxed, readable experience.
              It was all about less is more.</p>
            
          </section>

          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground"> Exploring Concepts </h2>
            <p className="text-muted-foreground mb-4">I started by exploring different concepts for the website, including a retro Windows 92 UI and a modern Bento-style layout.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">  
            <div>
              <h4  className=" mb-2  text-foreground  pt-4">Retro Windows 92 UI</h4>
              
                <div className="my-4 border rounded-lg overflow-hidden">
                  <img src="/bcwebsite/theme1screen1.png" alt="BeautifulCode Website Revamp" className="w-full object-cover" />
                </div>
                
               
             
            </div>
            <div>
              <h4 className="mb-2 text-foreground  pt-4">Modern Bento-style layout</h4>
              
                <div className="my-4 border  rounded-lg overflow-hidden">
                  <img src="/bcwebsite/theme2screen1.png" alt="BeautifulCode Website Revamp" className="w-full object-cover" />
                </div>
                
              
            </div>
          </div>
            
          </section>

          {/* High-Fidelity Prototype & Shared Transitions */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground"> High-Fidelity Prototype</h2>
            <p className="text-muted-foreground mb-4">Once the wireframes were approved, I moved to high-fidelity design. Since the homepage acted as the primary navigation hub, I needed to make sure the transition between the homepage and category pages felt smooth.</p>
            <p className="text-muted-foreground mb-4">I designed a <span className="font-semibold">Shared Element Transition</span>, where the category cards on the homepage would smoothly transform into a sidebar navigation on the category page. Articles and case studies would slide in from the right, keeping everything aligned and easy to digest.</p>
            <p className="text-muted-foreground mb-4">I created an <span className="font-semibold">Interactive Prototype</span> to showcase these transitions, and the team was on board with it almost immediately.</p>
            <div className="my-4 text-center text-muted-foreground">[Showcase this with GIFs or Figma prototype preview]</div>
            <p className="text-muted-foreground">This flow was finalized and praised for its clarity.</p>
          </section>

          {/* Article & Case Study Listing Design */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Article & Case Study Listing Design</h2>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li>Clean layout for articles & case studies</li>
              <li>Display: Title, Date, and relevant metadata</li>
              <li>2–3 iterations for listing styles: balancing typography readability, tag visibility, density</li>
            </ul>
            <div className="my-4 text-center text-muted-foreground">[Show the evolution of list views — use before/after or side-by-side]</div>
            <p className="text-muted-foreground">Final version emphasized scanability and minimized scroll.</p>
          </section>

          {/* Visual Language & Style Guide */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Visual Language, Style Guide & Concept Design</h2>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Colors: Muted background, minimal contrast, strong content contrast</li>
              <li>Spacing System</li>
              <li>Icon Grid (512×512px with 24px padding)</li>
              <li>Button & Interaction States</li>
            </ul>
            <div className="my-4 text-center text-muted-foreground">[Include typography spec, color swatches, button states]</div>
          </section>

          {/* Mobile-First Thinking */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Mobile-First Thinking</h2>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li>Categories become vertical nav</li>
              <li>Article cards stack vertically</li>
              <li>Load More adapted for scroll</li>
            </ul>
            <div className="my-4 text-center text-muted-foreground">[Show mobile vs desktop view comparison]</div>
          </section>

          {/* Final Pages */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Final Pages</h2>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li>Home Page</li>
              <li>Category Page (e.g., Frontend Craft)</li>
              <li>Article / Case Study Detail Page</li>
              <li>Foundation Principles List Page</li>
              <li>Principle Detail Page</li>
            </ul>
            <div className="my-4 text-center text-muted-foreground">[Add clean screens for each final page, mocked in device frames if possible]</div>
          </section>

          {/* Process Snapshots & Outcome */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Process Snapshots & Outcome</h2>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li>Whiteboard photos or sticky notes</li>
              <li>Figma in-progress views</li>
              <li>Slack feedback exchanges (blurred usernames if needed)</li>
              <li>Mobile vs desktop iteration breakdown</li>
            </ul>
            <div className="my-4 text-center text-muted-foreground">[Include these visuals if available]</div>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-primary">Outcome</h3>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Explored two contrasting themes: one inspired by retro Windows 92 UI, and another using modern Bento-style layout</li>
              <li>The retro theme gave a nostalgic, hacker-vibe look with pixel grid feel and monospaced layout</li>
              <li>The modern Bento layout helped structure categories cleanly using whitespace and simple hierarchy</li>
              <li>Typography: IBM Flex Mono (system font, developer tone)</li>
              <li>Color system: Subtle, low-contrast backgrounds with strong text focus</li>
              <li>Aligned with the engineering culture</li>
              <li>Clean, minimal, and reader-focused</li>
              <li>Fully responsive</li>
              <li>Scalable with a growing icon system and design system</li>
            </ul>
            <p className="text-muted-foreground mt-4">Designing for engineers taught me to design like one — with precision, minimalism, and logic. The BeautifulCode site reflects more than just skills — it reflects craft, restraint, and clarity. This case reminded me that great design is often invisible, letting the content (and code) speak for itself.</p>
          </section>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default BeautifulCodeRedesignProject;
