
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

const TravelAppProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Mobile Design</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Travel Planning App</h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" 
              alt="Travel Planning App" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
            <p className="text-primary-light">5 months</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
            <ul className="text-primary-light">
              <li>Sketch</li>
              <li>Adobe XD</li>
              <li>Zeplin</li>
              <li>Maze</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">Lead Mobile Designer</p>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-6">A mobile app that simplifies the travel planning experience by integrating flight booking, accommodation, local activities, and itinerary management into a single platform.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem</h3>
                <p className="text-primary-light">Travelers were using 4-6 different apps throughout their journey, causing frustration and missed opportunities.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Target Audience</h3>
                <p className="text-primary-light">Frequent travelers aged 25-45 who take multiple trips per year for both business and leisure.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Scope</h3>
                <p className="text-primary-light">Full design of a new mobile application from concept to developer handoff.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">My Role</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-4">As the Lead Mobile Designer on this project, my responsibilities included:</p>
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Concept development and user research</li>
              <li>User journey and flow mapping</li>
              <li>UI design system creation</li>
              <li>Prototype development and testing</li>
              <li>Developer collaboration and handoff</li>
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Create a unified travel planning experience</li>
              <li>Reduce the time required to plan a trip by 40%</li>
              <li>Enable offline access to essential travel information</li>
              <li>Achieve a 4.5+ star app store rating at launch</li>
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
              <p className="mb-4">Conducted extensive research into traveler pain points and behaviors.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Travel diary studies with 12 participants</li>
                <li>Competitive analysis of 20+ travel apps</li>
                <li>Survey of 350 frequent travelers</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Discovered that the biggest pain point was the fragmentation of information across multiple platforms and the lack of coordination between different aspects of travel planning.</p>
            </CardContent>
          </Card>
          
          {/* Ideation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Ideation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Developed the concept for an integrated travel companion that would serve users throughout their journey.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Design sprints</li>
                <li>User story mapping</li>
                <li>Concept validation interviews</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Created a unique approach that would integrate with existing services while providing a unified interface and smart recommendations.</p>
            </CardContent>
          </Card>
          
          {/* Wireframing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframes & Prototypes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Designed the app structure and core interactions.</p>
              <h4 className="font-medium mb-2">Tools:</h4>
              <p className="mb-6">Sketch for wireframing and Principle for motion design</p>
              
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
              <p className="mb-4">Validated the design through multiple rounds of testing.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Prototype testing with 20+ users</li>
                <li>Preference testing for key screens</li>
                <li>Unmoderated task completion studies</li>
              </ul>
              <h4 className="font-medium mb-2">Key Findings:</h4>
              <p>Users were able to plan a complete weekend trip in an average of 15 minutes, compared to 45+ minutes with their current tools.</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Challenges Faced</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Integrating diverse data sources and services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Developed a modular architecture that could incorporate APIs from various travel services while maintaining a consistent user experience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Creating an interface that worked well for both planning and during-trip usage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Designed context-aware views that adapted based on the user's stage in their travel journey.</p>
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
                <li>App Store featured app in the Travel category</li>
                <li>4.8/5 star rating at launch</li>
                <li>95% of test users reported they would switch from their current travel planning methods</li>
              </ul>
              
              <h3 className="font-medium text-lg mb-3">Impact:</h3>
              <p className="mb-6">The app redefined expectations for travel planning tools and became a case study for successful integration of complex services.</p>
              
              <h3 className="font-medium text-lg mb-3">Key Takeaways:</h3>
              <p>The value of addressing the entire user journey rather than isolated pain points, and the importance of offline functionality for travel applications.</p>
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
                alt="App Flow Diagram" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">App Flow Diagram</h3>
                <p className="text-primary-light">The comprehensive user flow showing key paths through the application</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Trip Planning Interface" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Trip Planning Interface</h3>
                <p className="text-primary-light">The intelligent trip builder showing recommendations based on user preferences</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="In-Trip Companion Mode" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">In-Trip Companion Mode</h3>
                <p className="text-primary-light">The app's travel mode with offline access to reservations and local information</p>
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

export default TravelAppProject;
