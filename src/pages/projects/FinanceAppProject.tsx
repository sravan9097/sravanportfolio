
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

const FinanceAppProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">UX Design</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Mobile Banking App</h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3" 
              alt="Mobile Banking App" 
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
              <li>Adobe XD</li>
              <li>Miro</li>
              <li>UserTesting</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">Lead UX/UI Designer</p>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-6">This comprehensive redesign of a mobile banking platform focused on creating a more intuitive and accessible user experience.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem</h3>
                <p className="text-primary-light">Users found the existing banking app confusing to navigate, leading to high drop-off rates and customer service requests for basic functions.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Target Audience</h3>
                <p className="text-primary-light">Adults aged 25-55 who use mobile banking services but aren't necessarily tech-savvy.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Scope</h3>
                <p className="text-primary-light">Full redesign of the user experience from research through implementation support.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">My Role</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-4">As the Lead UX/UI Designer on this project, my responsibilities included:</p>
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Conducting user research and interviews</li>
              <li>Defining information architecture</li>
              <li>Creating wireframes and prototypes</li>
              <li>Designing the visual interface</li>
              <li>Collaborating with developers during implementation</li>
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Improve user satisfaction scores by 30%</li>
              <li>Reduce customer support calls related to app usage by 25%</li>
              <li>Increase daily active users by 20%</li>
              <li>Simplify the transaction flow to require fewer steps</li>
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
              <p className="mb-4">Conducted extensive user research to understand pain points with the existing application.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>User interviews with 20+ customers</li>
                <li>Competitive analysis of 5 leading banking apps</li>
                <li>Surveys with 200+ users</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Discovered that users struggled most with finding transaction history and setting up recurring payments.</p>
            </CardContent>
          </Card>
          
          {/* Ideation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Ideation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Brainstormed solutions to address the key pain points identified in the research phase.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Collaborative ideation workshops</li>
                <li>Sketching sessions</li>
                <li>Card sorting exercises</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Developed a new navigation concept that prioritized the most common user tasks.</p>
            </CardContent>
          </Card>
          
          {/* Wireframing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframes & Prototypes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Created low and high-fidelity wireframes to test and refine the new information architecture.</p>
              <h4 className="font-medium mb-2">Tools:</h4>
              <p className="mb-6">Figma for wireframing and prototyping</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-border">
                  <img src="https://placehold.co/600x400" alt="Wireframe 1" className="w-full h-auto" />
                </div>
                <div className="rounded-lg overflow-hidden border border-border">
                  <img src="https://placehold.co/600x400" alt="Wireframe 2" className="w-full h-auto" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Testing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Conducted multiple rounds of usability testing to validate and refine the designs.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Moderated usability sessions with 15 users</li>
                <li>A/B testing of two navigation concepts</li>
              </ul>
              <h4 className="font-medium mb-2">Key Findings:</h4>
              <p>Users completed tasks 40% faster with the new design and reported higher confidence levels.</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Challenges Faced</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Balancing security requirements with usability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Worked closely with the security team to implement biometric authentication that maintained security while reducing friction.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Supporting a wide range of financial features in a simple interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Created a tiered navigation system that made common tasks immediately accessible while organizing less common features in a logical structure.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Outcomes Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Outcomes & Results</h2>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-3">Results:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>35% increase in daily active users</li>
                <li>28% decrease in customer support tickets related to app usage</li>
                <li>User satisfaction ratings improved from 2.8/5 to 4.3/5</li>
              </ul>
              
              <h3 className="font-medium text-lg mb-3">Impact:</h3>
              <p className="mb-6">The redesign significantly improved the bank's digital presence and contributed to a 15% increase in mobile transactions.</p>
              
              <h3 className="font-medium text-lg mb-3">Key Takeaways:</h3>
              <p>The importance of continuous user testing throughout the design process to catch potential usability issues early.</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Visuals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Visuals & Artifacts</h2>
          <div className="space-y-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Before & After Homepage" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Before & After Homepage</h3>
                <p className="text-primary-light">Comparison showing the streamlined new design</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Transaction Flow" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Transaction Flow</h3>
                <p className="text-primary-light">The redesigned payment process reduced steps by 40%</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Final Designs" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Final Designs</h3>
                <p className="text-primary-light">Key screens from the final application</p>
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
    </div>
  );
};

export default FinanceAppProject;
