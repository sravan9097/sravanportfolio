
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Sample project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: "finance-app",
    title: "Mobile Banking App",
    description: "Redesigning the user experience for a digital banking platform focusing on accessibility and ease of use.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "UX Design",
    fullDescription: "This comprehensive redesign of a mobile banking platform focused on creating a more intuitive and accessible user experience. The project involved extensive user research, including interviews with diverse user groups to understand pain points with the existing application. Key improvements included a simplified navigation structure, enhanced transaction flow, and the implementation of biometric authentication options. The redesign resulted in a 35% increase in daily active users and a 28% decrease in customer support tickets related to app usage.",
    process: [
      "User Research & Interviews",
      "Competitive Analysis",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Visual Design",
      "Implementation Support"
    ],
    tools: ["Figma", "Adobe XD", "Miro", "UserTesting"],
    duration: "3 months"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker Dashboard",
    description: "Creating an intuitive dashboard for users to track their fitness goals and progress.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    category: "UI/UX Design",
    fullDescription: "This project involved designing a comprehensive dashboard for a fitness tracking application that allows users to visualize their progress, set goals, and receive personalized recommendations. The main challenge was presenting complex health data in an accessible and motivating way. Through iterative design and testing, we developed a solution that utilizes dynamic data visualization and achievement systems to keep users engaged with their fitness journey. The redesigned dashboard led to a 45% increase in user retention and significantly higher goal completion rates.",
    process: [
      "User Journey Mapping",
      "Data Visualization Research",
      "Wireframing",
      "Interactive Prototyping",
      "User Testing",
      "Visual Design Refinement"
    ],
    tools: ["Figma", "Sketch", "Principle", "Optimal Workshop"],
    duration: "2.5 months"
  },
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    description: "Transforming an e-commerce platform with a focus on conversion optimization and user flow.",
    image: "https://images.unsplash.com/photo-1532299033990-5bf394529e15",
    category: "UX Research & Design",
    fullDescription: "This e-commerce redesign project focused on optimizing the conversion funnel and streamlining the product discovery process. Working with a mid-sized fashion retailer, I identified critical pain points in the original user journey that were causing cart abandonment. The solution included a redesigned product filtering system, simplified checkout process, and enhanced product detail pages with more comprehensive information. The implementation of this design resulted in a 24% increase in conversion rate and a 15% increase in average order value.",
    process: [
      "Analytics Review",
      "User Interviews",
      "Customer Journey Mapping",
      "A/B Testing",
      "Wireframing",
      "High-fidelity Design",
      "Developer Collaboration"
    ],
    tools: ["Figma", "Hotjar", "Google Analytics", "InVision"],
    duration: "4 months"
  },
  {
    id: "travel-app",
    title: "Travel Planning App",
    description: "Designing a seamless experience for travelers to plan and book their trips in one place.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    category: "Mobile Design",
    fullDescription: "This mobile app design project aimed to simplify the travel planning experience by integrating flight booking, accommodation, local activities, and itinerary management into a single platform. Through extensive user research, I identified that travelers were frustrated with having to use multiple apps throughout their journey. The solution featured an intelligent trip builder that learns user preferences, a unified booking system, and offline access to essential information. The app launched successfully with a 4.8/5 star rating and was featured in the App Store's travel category.",
    process: [
      "Competitive Analysis",
      "User Surveys",
      "User Personas",
      "User Flow Mapping",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Visual Design"
    ],
    tools: ["Sketch", "Adobe XD", "Zeplin", "Maze"],
    duration: "5 months"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto pt-32 pb-16 px-4">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-accent hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        <div className="mb-10">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">{project.title}</h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
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
              <p className="text-primary-light">Lead UX/UI Designer</p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Project Overview</h2>
            <p className="text-primary-light mb-4">{project.fullDescription}</p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <p className="text-primary-light">{step}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4 text-primary">Interested in working together?</h2>
            <Button asChild className="bg-accent hover:bg-accent-hover text-white">
              <a href="/#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
