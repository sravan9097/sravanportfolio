
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
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

const bcexperienceproject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-4xl pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">UX Design & Development </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">Building BeautifulCode Experience App </h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="/Hero_Images/BC_experience_cover.png" 
              alt="E-Commerce Redesign" 
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
              <li>Chat GPT</li>
              <li>Cursor</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">UX Designer & Front-End Developer</p>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-gray-100">
            <p className="text-primary-light mb-6">The Beautiful Code Experience App is designed to enhance transparency and trust within remote teams by providing real-time insights into task progress, blockers, and meeting productivity. This case study outlines the UX design process undertaken to create an intuitive and efficient platform for employees, managers, and partners.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem Statement</h3>
                <p className="text-primary-light">BeautifulCode’s success in client projects hinges on maintaining trust through transparency and frequent communication. Initially, there was no structured, centralized system to track project progress or daily updates. This resulted in:</p>
                <ul className=" mt-2 list-disc pl-5 space-y-2 text-primary-light">
                  <li>Managers and partners having to micromanage teams to stay updated and resolve blockers.</li>
                  <li>Strained capacity for BeautifulCode to scale effectively without continuous partner involvement.</li>
                </ul>
              </div>
              <div>
              <h3 className="font-medium text-lg mb-2 text-primary">Key issues that needed solving</h3>
                <ul className=" mt-2 list-decimal pl-5 space-y-2 text-primary-light">
                  <li><span className="font-semibold">Frequent Communication & Transparency:</span> A daily tracking mechanism for tasks and blockers was missing, leading to delayed discovery of issues.</li>
                  <li><span className="font-semibold">Micromanagement & Scalability:</span> Partners and managers were overly involved in routine updates, limiting their time to focus on strategic areas.</li>
                  <li> <span className="font-semibold">Meeting Overload:</span> Employees’ productivity was impacted by an overload of meetings, and there was no insight into how meeting hours impacted productivity.</li>
                  <li> <span className="font-semibold">Client Trust & Visibility:</span> As the product grows, the same system would need to provide real-time visibility to clients for project transparency.</li>
                </ul>

              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Target Audience</h3>
                <p className="text-primary-light">Target Audience where Clients, Partners and Employees</p>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">My Role</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-gray-100">
            <p className="text-primary-light mb-4">As the UX Designer on this project, my responsibilities included:</p>
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>To build the complete experience for this tool. Define all User flows and Site structure / Define relations between Objects & Roles.</li>
              <li>Build a style guide to match with the existing brand guidelines of main website of the company.</li>
              <li>Creating and testing high fidility screens for all features</li>
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-gray-100">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Facilitate daily work tracking and progress updates to improve internal alignment and productivity.</li>
              <li>Enable employees to check in twice daily to update on tasks, blockers, and priorities.</li>
              <li>Target of atleast Avg 90% Check-in done by users on daily basis.</li>
              <li>Avg Time taken by user to do check-in should be less than 5 mins.</li>
              <li>Establish a data-backed foundation for developing a future client role, where clients can view project progress and updates.</li>
            </ul>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Process & Methodology</h2>
          
          {/* Research & Assumptions*/}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Research & Assumptions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Conducted interviews with partners and employess to get initial assumptions.</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Employees and Managers are already accustomed to daily check-ins via Slack or email and tracking tasks on Jira.</li>
                <li>Google Calendar Integration is sufficient for capturing meeting data and analyzing productivity.</li>
                <li>Trust is built through transparent and structured updates; a future client-facing portal would rely heavily on data gathered from this internal tool.</li>
                <li>Teams may have different working styles and reporting preferences, so flexibility in the check-in process will be crucial.s</li>
              </ul>
              <h4 className="font-semibold mb-2">Key Insights:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Transparency + Structure = Improved trust and reduced managerial overhead.</li>
                <li>Daily Progress Tracking helps employees clarify tasks and identify blockers, while managers stay updated and respond to issues quickly.</li>
                <li>Meeting Overload is a major productivity barrier; analyzing meeting data empowers managers to make more informed scheduling decisions.</li>
                <li>Data-Driven Visibility fosters a proactive work culture internally and can extend to clients for better relationships.</li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Problem Statement & Scope */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Defining the Problem & Scope</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Based on the above insights and initial stakeholder discussions, I refined and finalized the problem statement:</p>
              <p className="pl-4 border-blue-500 border-l-4 mb-4 italic text-lg">“BeautifulCode needs a centralized, real-time tool that provides structured daily updates, task tracking, and meeting analytics to minimize micromanagement and lay the groundwork for future client transparency.”</p>
            
            </CardContent>
          </Card>

           {/* Objects & Roles */}
           <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Defining Objects & Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Before creating the site structure, I identified all required user roles and key objects:.</p>
              <div className="grid md:grid-cols-2 gap-8 mb-4">
                <div>
                  <h4 className="font-medium mb-2">Objects:</h4>
                  <ul className="list-decimal pl-5 mb-4 space-y-1">
                    <li><span className="font-bold">Project:</span>Holds sprints, tasks, team, and status information.</li>
                    <li><span className="font-bold">Team: </span>Group of employees working on one or more projects.</li>
                    <li><span className="font-bold">Sprint: </span>Specific timeframe for task delivery within a project.</li>
                    <li><span className="font-bold">Check-In: </span> Daily status update from employees, including tasks, progress, and blockers.</li>
                    <li><span className="font-bold">Meeting: </span> Data captured from Google Calendar, used for productivity analytics.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Roles:</h4>
                  <ul className="list-decimal pl-5 mb-4 space-y-1">
                    <li><span className="font-bold">Admin / Partner:</span> High-level oversight of all teams and projects, strategic decision-making.</li>
                    <li><span className="font-bold">Team Manager: </span>Monitors team’s progress, resolves blockers, assigns tasks.</li>
                    <li><span className="font-bold">Employee: </span>Performs daily check-ins, updates task statuses, flags blockers.</li>
                    <li><span className="font-bold">Client (in future): </span> Views project progress and updates in a read-only capacity.</li>
                  </ul>
                </div>
              </div>

              <p className="mb-6">Mapping out attributes and operations for each object helped clarify how users interact with the system and served as a foundation for the overall information architecture.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/Objects.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/Objects.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/Roles.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/Roles.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
               
              </div>
            </CardContent>
          </Card>

           {/* Site Structure */}
           <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl"> Site Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">From the roles and objects, I sketched out a site map:</p>
              <ul className="list-decimal pl-5 mb-4 space-y-1">
                    <li><span className="font-bold">Dashboard:</span>Quick access to check-in/check-out, daily tasks summary.</li>
                    <li><span className="font-bold">Teams: </span>High-level and drill-down views for tasks and blockers, Team wise & individual performance.</li>
                    <li><span className="font-bold">Reports & Analytics: </span>Meeting analysis and time-tracking dashboard.Team productivity reports.High-level performance summaries for partners.</li>
                    <li><span className="font-bold">Settings & Integrations: </span>Google Calendar integration. Slack notifications. Role-based permissions and user management.</li>
                    <li><span className="font-bold">Profile:</span>Employee/Client Profile.</li>
              </ul>
              
              
                {/* Modal for full view image */}
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/Site_Map.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/Site_Map.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              
            </CardContent>
          </Card>
          
          {/* user flow */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">User Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row gap-6 mb-4 ">
                <div className="flex flex-col flex-1"> 
                    <p className="mb-4">As the most frequent and critical interaction in the BC Experience App, the Check-In Flow was designed to be:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      <li>Quick and frictionless</li>
                      <li>Structured yet flexible</li>
                      <li>Smart enough to adapt over time</li>
              </ul>
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="font-normal mb-2">Employees are prompted to check in twice daily (Midday & Day-End) to log:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>Tasks worked on</li>
                    <li>Progress made</li>
                    <li>Blockers faced</li>
                    <li>Supporting materials (WIP links or docs)</li>
                  </ul>
                  
                </div>
              </div>
              <h3 className="font-medium mb-2">✍️ My Design Goal:</h3>
                  <p className="mb-4">To make check-ins feel lightweight and non-disruptive, while capturing high-quality, structured updates for managers and partners.</p>
              
              <Dialog>
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/check_in_flow.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/check_in_flow.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
               
              
            </CardContent>
          </Card>

           {/* Wireframing */}
           <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Created quick sketches in Figma to visualize basic layouts and user journeys.</li>
                <li>Iterated with stakeholders to confirm that the approach addressed their main pain points.</li>
              </ul>
              <p className="mb-4">Below are some of the intial wireframes i came up to discuss with stakeholders</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Dialog>  
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/check_in_flow_1.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/check_in_flow_1.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>  
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/check_in_flow_2.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/check_in_flow_2.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>  
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/team_view_1.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/team_view_1.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>  
                  <DialogTrigger asChild>
                    <img
                      src="/Hero_Images/team_settings.png"
                      alt="Wireframe 1"
                      className="w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition"
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-0  shadow-none border-none flex items-center justify-center">
                    <img
                      src="/Hero_Images/team_settings.png"
                      alt="Wireframe 1 Full View"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
          
          {/* Testing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Validated design decisions through multiple testing methodologies.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>A/B testing of key page elements</li>
                <li>Usability testing of the checkout process</li>
                <li>Beta testing with loyal customers</li>
              </ul>
              <h4 className="font-medium mb-2">Key Findings:</h4>
              <p>The redesigned product filtering system improved product discovery time by 35%, and the simplified checkout increased completion rates by 28%.</p>
            </CardContent>
          </Card>
        </section>
        
        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Challenges Faced</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Balancing comprehensive product information with a clean, uncluttered design</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Implemented a progressive disclosure approach to product details, with the most critical information visible upfront.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Addressing diverse user shopping patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Created multiple pathways for product discovery to accommodate both browsers and searchers.</p>
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
                <li>24% increase in conversion rate</li>
                <li>15% increase in average order value</li>
                <li>30% reduction in cart abandonment</li>
              </ul>
              
              <h3 className="font-medium text-lg mb-3">Impact:</h3>
              <p className="mb-6">The redesign contributed to a significant revenue increase and established a new baseline for UX quality in the client's industry.</p>
              
              <h3 className="font-medium text-lg mb-3">Key Takeaways:</h3>
              <p>The critical importance of reducing friction in the checkout process and the value of making pricing transparent throughout the shopping journey.</p>
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
                alt="Product Page Redesign" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Product Page Redesign</h3>
                <p className="text-primary-light">Before and after comparison showing improved information hierarchy</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Checkout Flow" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Checkout Flow</h3>
                <p className="text-primary-light">The streamlined checkout process with progress indication</p>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://placehold.co/800x600" 
                alt="Mobile Shopping Experience" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Mobile Shopping Experience</h3>
                <p className="text-primary-light">Responsive design optimized for mobile conversion</p>
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

export default bcexperienceproject;
