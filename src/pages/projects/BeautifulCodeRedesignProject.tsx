import React from "react";
import ProjectLayout from "@/components/ProjectLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const BeautifulCodeRedesignProject = () => {
  return (
    <ProjectLayout projectTitle="BeautifulCode Website Redesign">
      <div className="min-h-screen bg-background">
        <div className="flex flex-col items-center mx-auto ">
          {/* Hero Section */}
          <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Case Study - Website Redesign</span>
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
              <li className="mb-2"> <span className="font-semibold">What We’re Wired For:</span> A section showing their main engineering capabilities &mdash; Frontend, Backend, AI & ML, Infrastructure, Data Engineering, and Site Maintenance.</li>
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
          

          <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Feedback</h3>
            <p className="text-muted-foreground mb-4 ">Feedback: “Too structured… too boxed in. It feels like a dashboard.”</p>
            <blockquote className="border-l-4 pl-4 italic font-semibold text-xl text-muted-foreground">“It’s too boxed in, too structured — it feels like a dashboard.”
              <br />
            “We want the homepage to feel calm and clean, like a developer’s workspace.”</blockquote>
            <p className="text-muted-foreground py-4">This led to the decision to simplify the design further by removing unnecessary containers and relying more on spatial alignment and typography to create a more relaxed, readable experience.
              It was all about less is more.</p>
            

          </section>

          {/* High-Fidelity Prototype & Shared Transitions */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Final Layout & High-Fidelity Prototype</h2>
            <p className="text-muted-foreground mb-4">After multiple iterations and rounds of internal feedback, I arrived at a final layout that was simple, clear, and true to the personality of the BeautifulCode brand — geeky, developer-first, and content-driven.</p>
                            
            <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Design Direction</h3>
            <p className="text-muted-foreground mb-4">The main idea was to strip away anything unnecessary and let the content speak for itself. I leaned into:</p>
            <ul className="mb-2 pl-5 list-disc text-muted-foreground">
              <li>Clean vertical rhythm and structured spacing</li>
              <li>Typography hierarchy using monospaced IBM Flex Mono</li>
              <li>Generous use of white space to create a calm, readable layout</li>
              <li>Minimalist UI with subtle transitions — nothing flashy, just thoughtful</li>
            </ul>
            <p className="text-muted-foreground mb-4">The homepage itself acts as a navigation hub, guiding users to categories, articles, and principles. The design avoids overwhelming users with blocks or containers and instead uses spacing, typography, and alignment to organize content visually.</p>
           
            {/* Navigation GIF */}
            <div className="my-4 flex flex-col items-center">
              <img src="/bcwebsite/navigation.gif" alt="Navigation Animation" className="w-full rounded-lg shadow" />
              <span className="text-sm text-muted-foreground mt-2">Smooth navigation animation demonstrating the shared transitions and mobile menu.</span>
            </div>
            <div className="my-4 flex flex-row items-start gap-12">
              <div className="w-1/2 flex flex-col items-start">
              <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Interactivity</h3>
              <p className="text-muted-foreground mb-4">To showcase how everything comes together, I created a fully clickable prototype with:</p>
              <ul className="mb-2 pl-5 list-disc text-muted-foreground">
                <li>Interactive category navigation</li>
                <li>Expandable “load more” for articles and case studies</li>
                <li>Smooth mobile navigation experience</li>
                <li>Layouts optimized for both first-time visitors and frequent users</li>
              </ul>
              </div>
              {/* Why It Works */}
              <div className="w-1/2 flex flex-col items-start"> 
              
              <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Why It Works</h3>
              <ul className="mb-2 pl-5 list-disc text-muted-foreground">
                <li>Experience the flow of navigation across pages</li>
                <li>Validate the layout logic and content hierarchy</li>
                <li>Test both desktop and mobile responsiveness early</li>
                <li>Fine-tune interactions like hover, transitions, and collapsible sections</li>
              </ul>
              </div>
            </div>
            <blockquote className="border-l-4 pl-4 italic font-semibold text-muted-foreground mb-4">
              “We didn’t want the site to feel like a typical company page. This prototype helped sell that — it feels more like a curated dev wiki, structured and clean.”
            </blockquote>

            <h3 className="text-xl font-semibold mb-2 text-foreground mt-4">Final Prototype</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              {/* Desktop Prototype */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Desktop Prototype</h4>
                    <p className="text-sm text-muted-foreground">Full desktop experience</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience the complete desktop version with all interactions, navigation, and responsive elements.
                </p>
                <a 
                  href="https://www.figma.com/proto/8UL3n9NG6qx2f9sOIhJvYA/BeautifulCode-Website-Revamp?page-id=2017%3A8672&node-id=2017-8682&p=f&viewport=628%2C-1150%2C0.13&t=ZaoTSCj3ULZxGmE2-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=2017%3A8682" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Desktop Prototype
                </a>
              </div>

              {/* Mobile Prototype */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Mobile Prototype</h4>
                    <p className="text-sm text-muted-foreground">Touch-optimized experience</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Test the mobile experience with touch interactions, responsive navigation, and mobile-specific features.
                </p>
                <a 
                  href="https://www.figma.com/proto/8UL3n9NG6qx2f9sOIhJvYA/BeautifulCode-Website-Revamp?page-id=1978%3A7025&node-id=1978-7050&p=f&viewport=615%2C583%2C0.14&t=X3Hip31XRA6oB769-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1978%3A7050" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Mobile Prototype
                </a>
              </div>
            </div>

           

            
          </section>

        


          {/* Building the Design System */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Building the Design System with Atomic Design</h2>
            <p className="text-base text-muted-foreground mb-6">
              To ensure consistency and scalability across the BeautifulCode website, I followed the Atomic Design methodology. This approach helped break down the UI into small, reusable pieces — from typography tokens to full page templates — making the system both modular and easy to maintain.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Why Atomic Design?</h3>
              <p className="text-base text-muted-foreground">
                The website had multiple sections — categories, articles, principles — all sharing a common structure. Atomic Design gave me a clear framework to structure elements systematically, ensuring visual consistency and reducing design debt as the project scaled.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">The Breakdown</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">⚛️ Atoms</h4>
                  <p className="text-sm text-muted-foreground mb-2">The smallest building blocks — raw HTML-like elements that can't be broken down further:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Colors, spacing tokens, font styles</li>
                    <li>Icons</li>
                    <li>Buttons</li>
                    <li>Text fields</li>
                    <li>Tags and badges</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">🧪 Molecules</h4>
                  <p className="text-sm text-muted-foreground mb-2">Combinations of atoms that form functional units:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Article cards (title, date, tag)</li>
                    <li>Navigation items with icons</li>
                    <li>Category tiles</li>
                    <li>Input fields with labels</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">🧱 Organisms</h4>
                  <p className="text-sm text-muted-foreground mb-2">More complex components made of groups of molecules:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Navigation bars (logo, links, mobile toggle)</li>
                    <li>Footer with links and social icons</li>
                    <li>Lists of article previews</li>
                    <li>Principle highlight blocks</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">🧩 Templates</h4>
                  <p className="text-sm text-muted-foreground mb-2">Page-level structure combining organisms with layout logic:</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Home page layout (categories + principles)</li>
                    <li>Category page layout (articles + case studies)</li>
                    <li>Mobile layout grid and responsiveness</li>
                  </ul>
                </div>
              </div>
            </div>

            <DesignSystemSVGSlideshow />
          </section>

          {/* Final UI – Desktop & Mobile */}
          <section className="mb-12 w-full">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Final UI – Desktop & Mobile</h2>
            <p className="text-base text-muted-foreground mb-6">
              After several rounds of iteration and feedback, I translated the refined design system and layout concepts into a set of polished, high-fidelity screens. Every screen was thoughtfully crafted to maintain consistency across breakpoints and feel smooth to navigate.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              I designed the site to be fully responsive, knowing that many first-time visitors — especially external leadership — may land on mobile.
            </p>

            <div className="my-8 bg-white border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                 
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-foreground font-normal">This is the main Figma project file where I have everything documented in detail.</p>
                    <a 
                      href="https://www.figma.com/community/file/1531452240079073955/beautifulcode-website-redesign-a-geeky-developer-first-experience" 
                      target="_blank" 
                      rel="noopener noreferrer"

                      className="text-base text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      View detailed documentation →
                    </a>
                  </div>
                </div>
              </div> 

            {/* Desktop Screens */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Desktop Screens</h3>
              {/* <ul className="text-sm text-muted-foreground list-disc pl-5 mb-4 space-y-1">
                <li>Home Page</li>
                <li>Category Page (Articles & Case Studies)</li>
                <li>Article Detail Page</li>
                <li>Foundation Principles List & Detail</li>
                <li>404 / Empty States</li>
              </ul> */}
              <DesktopScreensSlideshow />
            </div>

            {/* Mobile Screens */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Mobile Screens</h3>
              {/* <ul className="text-sm text-muted-foreground list-disc pl-5 mb-4 space-y-1">
                <li>Mobile navigation with smooth transitions</li>
                <li>Responsive versions of all major pages</li>
                <li>Optimized layout for readability and interaction</li>
                <li>Special care on spacing, stacking, and performance</li>
              </ul> */}
              <MobileScreensSlideshow />
            </div>

            {/* Outcome */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Outcome</h3>
              <p className="text-base text-muted-foreground mb-4">
                The final design reflects the original goal:
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-lg text-muted-foreground mb-4">
                A clean, thoughtful, engineering-first website that feels like it was built by developers, for developers.
              </blockquote>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Reduced clutter and leaned into simplicity</li>
                <li>Geeky, nostalgic, yet modern visual language</li>
                <li>Layout that prioritizes content and ease of discovery</li>
                <li>A design system that can scale with new content and sections</li>
                <li>Responsive experience tailored to all devices</li>
              </ul>
            </div>

            {/* Reflections */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Reflections</h3>
              <p className="text-base text-muted-foreground mb-4">
                This project challenged me to simplify. Instead of flashy visuals, I had to focus on restraint, hierarchy, and developer-minded clarity. It reminded me how powerful typography, spacing, and structure can be in communicating identity.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                It was also a chance to flex multiple skills — from prototyping and interaction design to design systems thinking.
              </p>
              <p className="text-base text-muted-foreground">
                More than anything, it taught me to listen closely, iterate quickly, and trust simple ideas done well.
              </p>
            </div>
          </section>

         
        </div>
      </div>
    </ProjectLayout>
  );
};

const svgSlides = [
  {
    src: "/bcwebsite/atoms.png",
    alt: "Atomic Design System - Atoms",
    caption: "Atomic Design System: The foundation of the design system. Atoms are the smallest building blocks, while molecules are simple groups of atoms working together (e.g., a labeled input field)."
  },
  {
    src: "/bcwebsite/atoms&molecules.png",
    alt: "Atomic Design System - Atoms & Molecules",
    caption: "Atoms & Molecules: The foundation of the design system. Atoms are the smallest building blocks, while molecules are simple groups of atoms working together (e.g., a labeled input field)."
  },
  {
    src: "/bcwebsite/compounds.png",
    alt: "Atomic Design System - Compounds",
    caption: "Compounds: More complex groupings, often representing reusable UI patterns that combine molecules and atoms (e.g., a card with a header, content, and actions)."
  },
  {
    src: "/bcwebsite/organisms.png",
    alt: "Atomic Design System - Organisms",
    caption: "Organisms: Relatively complex UI components composed of groups of molecules and/or atoms, such as navigation bars, footers, or feature sections."
  },
  {
    src: "/bcwebsite/templates.png",
    alt: "Atomic Design System - Templates",
    caption: "Templates: Page-level layouts that arrange organisms, molecules, and atoms into a cohesive structure, defining the overall flow and hierarchy of content."
  },
];

const desktopScreens = [
  {
    src: "/bcwebsite/desktop/Homepage - Landing Page Default.png",
    alt: "Desktop - Homepage",
    caption: "Homepage: Clean, minimal landing page with clear navigation and content hierarchy."
  },
  {
    src: "/bcwebsite/desktop/Category Page - What we are wired for - Default View.png",
    alt: "Desktop - Category Page",
    caption: "Category Page: Organized layout showing articles and case studies with clear filtering options."
  },
  {
    src: "/bcwebsite/desktop/Article Page - Default View - Article Example 2.png",
    alt: "Desktop - Article Page",
    caption: "Article Page: Focused reading experience with proper typography and spacing for long-form content."
  },
  {
    src: "/bcwebsite/desktop/Case Study - Default View - Case Study Example 1.png",
    alt: "Desktop - Case Study Page",
    caption: "Case Study Page: Detailed project showcase with structured information and visual elements."
  },
  {
    src: "/bcwebsite/desktop/Principle Page - Our Engineering Principles.png",
    alt: "Desktop - Principles List",
    caption: "Principles List: Overview of engineering principles with clear categorization and navigation."
  },
  {
    src: "/bcwebsite/desktop/Principle Page - Principle Definition page - Default View.png",
    alt: "Desktop - Principle Detail",
    caption: "Principle Detail: In-depth explanation of individual engineering principles with examples."
  }
];

const mobileScreens = [
  {
    src: "/bcwebsite/mobile/Mobile Homepage - Landing Page.png",
    alt: "Mobile - Homepage",
    caption: "Mobile Homepage: Optimized for touch interaction with simplified navigation and content prioritization."
  },
  {
    src: "/bcwebsite/mobile/Mobile • Category Page - Default View.png",
    alt: "Mobile - Category Page",
    caption: "Mobile Category Page: Responsive layout with touch-friendly elements and streamlined content display."
  },
  {
    src: "/bcwebsite/mobile/Mobile • Category Page - Side menu.png",
    alt: "Mobile - Side Menu",
    caption: "Mobile Side Menu: Smooth navigation transitions with intuitive gesture-based interactions."
  },
  {
    src: "/bcwebsite/mobile/Mobile •  Article Page - Default View.png",
    alt: "Mobile - Article Page",
    caption: "Mobile Article Page: Optimized reading experience with proper text sizing and touch-friendly controls."
  },
  {
    src: "/bcwebsite/mobile/Mobile •  Case Study  Page - Default View.png",
    alt: "Mobile - Case Study Page",
    caption: "Mobile Case Study Page: Adapted layout for mobile viewing with scrollable content sections."
  },
  {
    src: "/bcwebsite/mobile/Mobile - Foundation Prinicple Category Page - List of Principles View.png",
    alt: "Mobile - Principles List",
    caption: "Mobile Principles List: Compact layout showing engineering principles with easy navigation."
  },
  {
    src: "/bcwebsite/mobile/Mobile Principle Page -  Default View.png",
    alt: "Mobile - Principle Detail",
    caption: "Mobile Principle Detail: Focused reading experience optimized for mobile screens and touch interaction."
  }
];

function DesignSystemSVGSlideshow() {
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
          {svgSlides.map((slide, idx) => (
            <CarouselItem key={idx} className="pl-4 basis-full">
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-auto object-cover min-h-120"
                  draggable={false}
                  style={{ background: "white" }}
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

function DesktopScreensSlideshow() {
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
          {desktopScreens.map((screen, idx) => (
            <CarouselItem key={idx} className="pl-4 basis-full ">
              <div className="flex flex-col items-center justify-center w-full">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full h-auto object-cover min-h-120"
                  draggable={false}
                />
                <p className="text-sm text-muted-foreground text-center max-w-2xl mt-4">
                  {screen.caption}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function MobileScreensSlideshow() {
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
          {mobileScreens.map((screen, idx) => (
            <CarouselItem key={idx} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 pb-2">
              <div className="flex flex-col items-center justify-center p-1 rounded-xl border border-gray-200 shadow-md">
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full h-auto object-contain min-h-80 rounded-lg"
                  draggable={false}
                />
                {/* <p className="text-sm text-muted-foreground text-center max-w-xs mt-2">
                  {screen.caption}
                </p> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default BeautifulCodeRedesignProject;
