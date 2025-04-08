
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

const FitnessTrackerProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">UI/UX Design</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Fitness Tracker Dashboard</h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9" 
              alt="Fitness Tracker Dashboard" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
            <p className="text-primary-light">2.5 months</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
            <ul className="text-primary-light">
              <li>Figma</li>
              <li>Sketch</li>
              <li>Principle</li>
              <li>Optimal Workshop</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">UX Designer</p>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-6">A comprehensive dashboard for a fitness tracking application that allows users to visualize their progress, set goals, and receive personalized recommendations.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem</h3>
                <p className="text-primary-light">Users struggled to understand their fitness data and how it related to their goals, leading to low engagement with the app.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Target Audience</h3>
                <p className="text-primary-light">Fitness enthusiasts aged 18-45 who regularly track their workouts and health metrics.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Scope</h3>
                <p className="text-primary-light">Redesign of the dashboard experience and data visualization components.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">My Role</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-4">As the UX Designer on this project, my responsibilities included:</p>
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>User journey mapping</li>
              <li>Data visualization research and design</li>
              <li>Interactive prototype development</li>
              <li>User testing coordination</li>
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Increase user retention by 30%</li>
              <li>Improve goal completion rates by 25%</li>
              <li>Make complex health data accessible and motivating</li>
              <li>Create a personalized experience that adapts to user behavior</li>
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
              <p className="mb-4">Analyzed user behavior and conducted research to understand how people interpret fitness data.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>User interviews with 15 fitness app users</li>
                <li>Data analysis of app usage patterns</li>
                <li>Review of scientific literature on fitness motivation</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Users were more motivated by progress visualization than raw numbers and responded well to achievement-based incentives.</p>
            </CardContent>
          </Card>
          
          {/* Ideation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Ideation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explored various approaches to data visualization and dashboard organization.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Sketching sessions</li>
                <li>Mood boarding</li>
                <li>Competitive analysis of data visualization techniques</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Developed a concept for progressive disclosure of data, showing simple achievements first with the option to dive deeper.</p>
            </CardContent>
          </Card>
          
          {/* Wireframing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframes & Prototypes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Created interactive wireframes to test the information hierarchy and user flow.</p>
              <h4 className="font-medium mb-2">Tools:</h4>
              <p className="mb-6">Figma and Principle for interactive prototyping</p>
              
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
              <p className="mb-4">Conducted iterative usability testing to refine the design based on user feedback.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Remote usability testing with 12 participants</li>
                <li>Preference testing between visualization styles</li>
              </ul>
              <h4 className="font-medium mb-2">Key Findings:</h4>
              <p>Users strongly preferred the progress-focused visualization and reported higher motivation to continue their fitness routines.</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Challenges Faced</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Presenting complex health data in an accessible way</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Developed a layered approach to data, with simple visualizations on the main dashboard and more detailed breakdowns available on demand.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Creating a system that felt motivating rather than judgmental</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Focused on progress and achievements rather than shortfalls, and implemented positive reinforcement mechanisms.</p>
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
                <li>45% increase in user retention</li>
                <li>38% increase in goal completion rates</li>
                <li>50% increase in daily app opens</li>
              </ul>
              
              <h3 className="font-medium text-lg mb-3">Impact:</h3>
              <p className="mb-6">The redesigned dashboard became a competitive advantage for the product in the crowded fitness app market.</p>
              
              <h3 className="font-medium text-lg mb-3">Key Takeaways:</h3>
              <p>The power of progressive disclosure in making complex data approachable and the importance of positive reinforcement in habit-forming products.</p>
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
                alt="Dashboard Evolution" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Dashboard Evolution</h3>
                <p className="text-primary-light">The progression from early concepts to final design</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Progress Visualization" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Progress Visualization</h3>
                <p className="text-primary-light">The new goal tracking interface showing progress over time</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Mobile View" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Mobile View</h3>
                <p className="text-primary-light">Responsive adaptation of the dashboard for mobile devices</p>
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

export default FitnessTrackerProject;
