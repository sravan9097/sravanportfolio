
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProjectNotFound from "@/components/ProjectNotFound";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Sample project data - this would ideally come from a database or CMS
const projectsData = {
  "finance-app": {
    title: "Mobile Banking App",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "UX Design",
    duration: "3 months",
    role: "Lead UX/UI Designer",
    tools: ["Figma", "Adobe XD", "Miro", "UserTesting"],
    overview: {
      description: "This comprehensive redesign of a mobile banking platform focused on creating a more intuitive and accessible user experience.",
      problem: "Users found the existing banking app confusing to navigate, leading to high drop-off rates and customer service requests for basic functions.",
      audience: "Adults aged 25-55 who use mobile banking services but aren't necessarily tech-savvy.",
      scope: "Full redesign of the user experience from research through implementation support."
    },
    responsibilities: [
      "Conducting user research and interviews",
      "Defining information architecture",
      "Creating wireframes and prototypes",
      "Designing the visual interface",
      "Collaborating with developers during implementation"
    ],
    goals: [
      "Improve user satisfaction scores by 30%",
      "Reduce customer support calls related to app usage by 25%",
      "Increase daily active users by 20%",
      "Simplify the transaction flow to require fewer steps"
    ],
    process: {
      research: {
        description: "Conducted extensive user research to understand pain points with the existing application.",
        methods: ["User interviews with 20+ customers", "Competitive analysis of 5 leading banking apps", "Surveys with 200+ users"],
        insights: "Discovered that users struggled most with finding transaction history and setting up recurring payments."
      },
      ideation: {
        description: "Brainstormed solutions to address the key pain points identified in the research phase.",
        methods: ["Collaborative ideation workshops", "Sketching sessions", "Card sorting exercises"],
        insights: "Developed a new navigation concept that prioritized the most common user tasks."
      },
      wireframing: {
        description: "Created low and high-fidelity wireframes to test and refine the new information architecture.",
        tools: "Figma for wireframing and prototyping",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"]
      },
      testing: {
        description: "Conducted multiple rounds of usability testing to validate and refine the designs.",
        methods: ["Moderated usability sessions with 15 users", "A/B testing of two navigation concepts"],
        findings: "Users completed tasks 40% faster with the new design and reported higher confidence levels."
      }
    },
    challenges: [
      {
        challenge: "Balancing security requirements with usability",
        solution: "Worked closely with the security team to implement biometric authentication that maintained security while reducing friction."
      },
      {
        challenge: "Supporting a wide range of financial features in a simple interface",
        solution: "Created a tiered navigation system that made common tasks immediately accessible while organizing less common features in a logical structure."
      }
    ],
    outcomes: {
      results: [
        "35% increase in daily active users",
        "28% decrease in customer support tickets related to app usage",
        "User satisfaction ratings improved from 2.8/5 to 4.3/5"
      ],
      impact: "The redesign significantly improved the bank's digital presence and contributed to a 15% increase in mobile transactions.",
      lessons: "The importance of continuous user testing throughout the design process to catch potential usability issues early."
    },
    visuals: [
      {
        title: "Before & After Homepage",
        description: "Comparison showing the streamlined new design",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Transaction Flow",
        description: "The redesigned payment process reduced steps by 40%",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Final Designs",
        description: "Key screens from the final application",
        image: "https://placehold.co/800x600"
      }
    ]
  },
  "fitness-tracker": {
    title: "Fitness Tracker Dashboard",
    heroImage: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    category: "UI/UX Design",
    duration: "2.5 months",
    role: "UX Designer",
    tools: ["Figma", "Sketch", "Principle", "Optimal Workshop"],
    overview: {
      description: "A comprehensive dashboard for a fitness tracking application that allows users to visualize their progress, set goals, and receive personalized recommendations.",
      problem: "Users struggled to understand their fitness data and how it related to their goals, leading to low engagement with the app.",
      audience: "Fitness enthusiasts aged 18-45 who regularly track their workouts and health metrics.",
      scope: "Redesign of the dashboard experience and data visualization components."
    },
    responsibilities: [
      "User journey mapping",
      "Data visualization research and design",
      "Interactive prototype development",
      "User testing coordination"
    ],
    goals: [
      "Increase user retention by 30%",
      "Improve goal completion rates by 25%",
      "Make complex health data accessible and motivating",
      "Create a personalized experience that adapts to user behavior"
    ],
    process: {
      research: {
        description: "Analyzed user behavior and conducted research to understand how people interpret fitness data.",
        methods: ["User interviews with 15 fitness app users", "Data analysis of app usage patterns", "Review of scientific literature on fitness motivation"],
        insights: "Users were more motivated by progress visualization than raw numbers and responded well to achievement-based incentives."
      },
      ideation: {
        description: "Explored various approaches to data visualization and dashboard organization.",
        methods: ["Sketching sessions", "Mood boarding", "Competitive analysis of data visualization techniques"],
        insights: "Developed a concept for progressive disclosure of data, showing simple achievements first with the option to dive deeper."
      },
      wireframing: {
        description: "Created interactive wireframes to test the information hierarchy and user flow.",
        tools: "Figma and Principle for interactive prototyping",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"]
      },
      testing: {
        description: "Conducted iterative usability testing to refine the design based on user feedback.",
        methods: ["Remote usability testing with 12 participants", "Preference testing between visualization styles"],
        findings: "Users strongly preferred the progress-focused visualization and reported higher motivation to continue their fitness routines."
      }
    },
    challenges: [
      {
        challenge: "Presenting complex health data in an accessible way",
        solution: "Developed a layered approach to data, with simple visualizations on the main dashboard and more detailed breakdowns available on demand."
      },
      {
        challenge: "Creating a system that felt motivating rather than judgmental",
        solution: "Focused on progress and achievements rather than shortfalls, and implemented positive reinforcement mechanisms."
      }
    ],
    outcomes: {
      results: [
        "45% increase in user retention",
        "38% increase in goal completion rates",
        "50% increase in daily app opens"
      ],
      impact: "The redesigned dashboard became a competitive advantage for the product in the crowded fitness app market.",
      lessons: "The power of progressive disclosure in making complex data approachable and the importance of positive reinforcement in habit-forming products."
    },
    visuals: [
      {
        title: "Dashboard Evolution",
        description: "The progression from early concepts to final design",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Progress Visualization",
        description: "The new goal tracking interface showing progress over time",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Mobile View",
        description: "Responsive adaptation of the dashboard for mobile devices",
        image: "https://placehold.co/800x600"
      }
    ]
  },
  "ecommerce-redesign": {
    title: "E-Commerce Redesign",
    heroImage: "https://images.unsplash.com/photo-1532299033990-5bf394529e15",
    category: "UX Research & Design",
    duration: "4 months",
    role: "UX Researcher & Designer",
    tools: ["Figma", "Hotjar", "Google Analytics", "InVision"],
    overview: {
      description: "A complete overhaul of an e-commerce platform focusing on optimizing the conversion funnel and streamlining the product discovery process.",
      problem: "The client was experiencing high cart abandonment rates and poor conversion despite good traffic numbers.",
      audience: "Fashion-conscious shoppers aged 25-40 with disposable income but limited shopping time.",
      scope: "End-to-end redesign of the shopping experience from landing page through checkout."
    },
    responsibilities: [
      "Analyzing existing user behavior and conversion data",
      "Developing user personas and journey maps",
      "Creating and testing redesign concepts",
      "Implementing A/B tests to validate design changes"
    ],
    goals: [
      "Reduce cart abandonment by 20%",
      "Increase conversion rate by 15%",
      "Improve average order value by 10%",
      "Enhance product discovery experience"
    ],
    process: {
      research: {
        description: "Conducted comprehensive analysis of user behavior and conversion blockers.",
        methods: ["Heatmap and session recording analysis", "Exit surveys", "Checkout funnel analysis", "Customer interviews"],
        insights: "Identified that users were abandoning carts primarily during the checkout process due to unexpected shipping costs and a complex form flow."
      },
      ideation: {
        description: "Developed multiple concepts to address the key pain points in the customer journey.",
        methods: ["Conversion-focused brainstorming workshops", "Competitive analysis of checkout processes", "Customer journey mapping"],
        insights: "Created a simplified checkout concept that surfaced shipping costs earlier and reduced form fields by 40%."
      },
      wireframing: {
        description: "Designed wireframes and prototypes of the new shopping experience.",
        tools: "Figma for wireframing and InVision for prototyping",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"]
      },
      testing: {
        description: "Validated design decisions through multiple testing methodologies.",
        methods: ["A/B testing of key page elements", "Usability testing of the checkout process", "Beta testing with loyal customers"],
        findings: "The redesigned product filtering system improved product discovery time by 35%, and the simplified checkout increased completion rates by 28%."
      }
    },
    challenges: [
      {
        challenge: "Balancing comprehensive product information with a clean, uncluttered design",
        solution: "Implemented a progressive disclosure approach to product details, with the most critical information visible upfront."
      },
      {
        challenge: "Addressing diverse user shopping patterns",
        solution: "Created multiple pathways for product discovery to accommodate both browsers and searchers."
      }
    ],
    outcomes: {
      results: [
        "24% increase in conversion rate",
        "15% increase in average order value",
        "30% reduction in cart abandonment"
      ],
      impact: "The redesign contributed to a significant revenue increase and established a new baseline for UX quality in the client's industry.",
      lessons: "The critical importance of reducing friction in the checkout process and the value of making pricing transparent throughout the shopping journey."
    },
    visuals: [
      {
        title: "Product Page Redesign",
        description: "Before and after comparison showing improved information hierarchy",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Checkout Flow",
        description: "The streamlined checkout process with progress indication",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Mobile Shopping Experience",
        description: "Responsive design optimized for mobile conversion",
        image: "https://placehold.co/800x600"
      }
    ]
  },
  "travel-app": {
    title: "Travel Planning App",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    category: "Mobile Design",
    duration: "5 months",
    role: "Lead Mobile Designer",
    tools: ["Sketch", "Adobe XD", "Zeplin", "Maze"],
    overview: {
      description: "A mobile app that simplifies the travel planning experience by integrating flight booking, accommodation, local activities, and itinerary management into a single platform.",
      problem: "Travelers were using 4-6 different apps throughout their journey, causing frustration and missed opportunities.",
      audience: "Frequent travelers aged 25-45 who take multiple trips per year for both business and leisure.",
      scope: "Full design of a new mobile application from concept to developer handoff."
    },
    responsibilities: [
      "Concept development and user research",
      "User journey and flow mapping",
      "UI design system creation",
      "Prototype development and testing",
      "Developer collaboration and handoff"
    ],
    goals: [
      "Create a unified travel planning experience",
      "Reduce the time required to plan a trip by 40%",
      "Enable offline access to essential travel information",
      "Achieve a 4.5+ star app store rating at launch"
    ],
    process: {
      research: {
        description: "Conducted extensive research into traveler pain points and behaviors.",
        methods: ["Travel diary studies with 12 participants", "Competitive analysis of 20+ travel apps", "Survey of 350 frequent travelers"],
        insights: "Discovered that the biggest pain point was the fragmentation of information across multiple platforms and the lack of coordination between different aspects of travel planning."
      },
      ideation: {
        description: "Developed the concept for an integrated travel companion that would serve users throughout their journey.",
        methods: ["Design sprints", "User story mapping", "Concept validation interviews"],
        insights: "Created a unique approach that would integrate with existing services while providing a unified interface and smart recommendations."
      },
      wireframing: {
        description: "Designed the app structure and core interactions.",
        tools: "Sketch for wireframing and Principle for motion design",
        images: ["https://placehold.co/600x400", "https://placehold.co/600x400"]
      },
      testing: {
        description: "Validated the design through multiple rounds of testing.",
        methods: ["Prototype testing with 20+ users", "Preference testing for key screens", "Unmoderated task completion studies"],
        findings: "Users were able to plan a complete weekend trip in an average of 15 minutes, compared to 45+ minutes with their current tools."
      }
    },
    challenges: [
      {
        challenge: "Integrating diverse data sources and services",
        solution: "Developed a modular architecture that could incorporate APIs from various travel services while maintaining a consistent user experience."
      },
      {
        challenge: "Creating an interface that worked well for both planning and during-trip usage",
        solution: "Designed context-aware views that adapted based on the user's stage in their travel journey."
      }
    ],
    outcomes: {
      results: [
        "App Store featured app in the Travel category",
        "4.8/5 star rating at launch",
        "95% of test users reported they would switch from their current travel planning methods"
      ],
      impact: "The app redefined expectations for travel planning tools and became a case study for successful integration of complex services.",
      lessons: "The value of addressing the entire user journey rather than isolated pain points, and the importance of offline functionality for travel applications."
    },
    visuals: [
      {
        title: "App Flow Diagram",
        description: "The comprehensive user flow showing key paths through the application",
        image: "https://placehold.co/800x600"
      },
      {
        title: "Trip Planning Interface",
        description: "The intelligent trip builder showing recommendations based on user preferences",
        image: "https://placehold.co/800x600"
      },
      {
        title: "In-Trip Companion Mode",
        description: "The app's travel mode with offline access to reservations and local information",
        image: "https://placehold.co/800x600"
      }
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : undefined;

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">{project.title}</h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
            <p className="text-primary-light">{project.duration}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
            <ul className="text-primary-light">
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">{project.role}</p>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-6">{project.overview.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem</h3>
                <p className="text-primary-light">{project.overview.problem}</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Target Audience</h3>
                <p className="text-primary-light">{project.overview.audience}</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Scope</h3>
                <p className="text-primary-light">{project.overview.scope}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">My Role</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-4">As the {project.role} on this project, my responsibilities included:</p>
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              {project.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Process & Methodology</h2>
          
          {/* Research */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.process.research.description}</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {project.process.research.methods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>{project.process.research.insights}</p>
            </CardContent>
          </Card>
          
          {/* Ideation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Ideation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.process.ideation.description}</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {project.process.ideation.methods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>{project.process.ideation.insights}</p>
            </CardContent>
          </Card>
          
          {/* Wireframing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframes & Prototypes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.process.wireframing.description}</p>
              <h4 className="font-medium mb-2">Tools:</h4>
              <p className="mb-6">{project.process.wireframing.tools}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {project.process.wireframing.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-border">
                    <img src={image} alt={`Wireframe ${index + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Testing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.process.testing.description}</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                {project.process.testing.methods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
              <h4 className="font-medium mb-2">Key Findings:</h4>
              <p>{project.process.testing.findings}</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Challenges Faced</h2>
          <div className="space-y-6">
            {project.challenges.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{item.challenge}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Outcomes Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Outcomes & Results</h2>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-3">Results:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                {project.outcomes.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
              
              <h3 className="font-medium text-lg mb-3">Impact:</h3>
              <p className="mb-6">{project.outcomes.impact}</p>
              
              <h3 className="font-medium text-lg mb-3">Key Takeaways:</h3>
              <p>{project.outcomes.lessons}</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Visuals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Visuals & Artifacts</h2>
          <div className="space-y-8">
            {project.visuals.map((visual, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={visual.image} 
                  alt={visual.title} 
                  className="w-full h-auto" 
                />
                <div className="p-5">
                  <h3 className="font-medium text-lg mb-2">{visual.title}</h3>
                  <p className="text-primary-light">{visual.description}</p>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default ProjectDetail;
