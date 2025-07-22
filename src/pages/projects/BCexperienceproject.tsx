
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ImageDialog } from "@/components/ImageDialog";
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

  
const bcexperienceproject = () => {
  return (
    <ProjectLayout projectTitle="BC Experience App">
      
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
        <div className="grid md:grid-cols-3 gap-8 mb-12 ">
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
            <p className="text-primary-light mb-6">The BC Experience App was built to bring trust and structure to remote teams at scale. It helps teams check in quickly, track blockers, and analyze meeting time—without micromanagement. My goal was to design a tool that felt geeky, clean, and fast—just like well-written code.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem Statement</h3>
                <p className="text-primary-light">BeautifulCode’s success in client projects hinges on maintaining trust through transparency and frequent communication. Initially, there was no structured, centralized system to track project progress or daily updates. This resulted in:</p>
                <ul className=" mt-2 list-disc pl-5 space-y-2 text-primary-light">
                  <li>Managers had to chase updates manually, which didn’t scale.</li>
                  <li>Without a better system, scaling without constant partner involvement was nearly impossible.</li>
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
              <li>Led UX design from start to finish—mapping system logic, user flows, and real-world use cases.</li>
              <li>Created a design system using IBM Flex Mono and neutral tones that felt minimal and developer-focused.</li>
              <li>Designed and tested high-fidelity prototypes with employees, iterating based on feedback.</li>
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm border border-gray-100">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Make daily check-ins fast, simple, and structured—under 5 minutes per session.</li>
              <li>Help employees check in twice a day without feeling micromanaged.</li>
              <li>Target a 90%+ daily check-in rate across the company.</li>
              <li>Keep average check-in time below 5 minutes.</li>
              <li>Lay the groundwork for a future client dashboard with real-time progress updates.</li>
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
              
              <div className="flex flex-col gap-4">
              
                    <ImageDialog 
                      src="/Hero_Images/Objects.png" 
                      alt="Objects" 
                    />
                
                    <ImageDialog 
                      src="/Hero_Images/Roles.png" 
                      alt="Roles" 
                    />
                

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

              <ImageDialog 
                src="/Hero_Images/Site_Map.png" 
                alt="Site Map" 
              />
       
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

                  <ImageDialog 
                    src="/Hero_Images/check_in_flow.png" 
                    alt="Check-in Flow" 
                  />

            </CardContent>
          </Card>

           {/* Wireframing */}
           <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Sketched ideas quickly in Figma to visualize core flows and layout logic.</li>
                <li>Shared early versions with the team to validate assumptions and refine user experience.</li>
              </ul>
              <p className="mb-4">Below are some of the intial wireframes i came up to discuss with stakeholders</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ImageDialog 
                  src="/Hero_Images/check_in_flow_1.png" 
                  alt="Check-in Flow Screen 1" 
                />
                <ImageDialog 
                  src="/Hero_Images/check_in_flow_2.png" 
                  alt="Check-in Flow Screen 2" 
                />
                <ImageDialog 
                  src="/Hero_Images/team_view_1.png" 
                  alt="Team View Screen" 
                />
                <ImageDialog 
                  src="/Hero_Images/team_settings.png" 
                  alt="Team Settings Screen" 
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Prototyping */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl">Prototyping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Turned designs into interactive prototypes for real-world testing.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Created interactive prototypes in Figma to simulate user interactions and workflows.</li>
                <li>Conducted usability testing with employees to validate the check-in flow.</li>
                <li>Refined reporting views and added features like auto-fill and Slack summaries based on feedback.</li>
              </ul>
              <h4 className="font-medium mb-2">Key Findings:</h4>
              <p>Based on the feedback, we refined the check-in flow to be more concise and focused on the most critical information.</p>
              
            </CardContent>
          </Card>
          <iframe className="w-full h-[750px] border border-gray-50 mb-8" 
              src="https://embed.figma.com/proto/kWhXJjfBK6PYf2PyFPhlCg/BC-Experience?page-id=553%3A11178&node-id=848-31872&viewport=370%2C161%2C0.09&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=848%3A31872&embed-host=share" 
              allowFullScreen
        ></iframe>
        <p className="text-sm text-gray-500">Above is the final prototype of doing check-in in the BC Experience App. For better experience, please use full screen mode to view the prototype  </p>

          
        </section>
       
        
        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Challenges Faced</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Making check-in feel lightweight and non-disruptive</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Getting engineers to adopt check-ins without it feeling like micromanagement was the hardest part. We focused on making the flow fast, clean, and integrated with their workflow. Constant feedback and small improvements (like auto-fill and Slack summaries) made adoption smoother.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Overcoming Adoption Hurdles and Workflow Friction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">A key challenge was encouraging engineers to consistently check in twice daily. Early feedback showed that the process felt repetitive and time-consuming, 
                  especially when users had to re-enter the same supporting documents or links for the same ticket. 
                  To reduce friction, we later added auto-fill for repeated entries.</p>
                  <p>Another request was the ability to generate a summary of updates to share in Slack channels. Initially missing, this became an important feature for team visibility. 
                    We addressed it by adding a "Generate Summary" CTA at the top, making it easy for users to access and share their work progress.</p>
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
                <li>✅ Reduced check-in time to under 5 minutes, meeting the original UX goal.</li>
                <li>🔁 Introduced auto-fill for repeated ticket details, cutting down manual input and reducing user friction.</li>
                <li>📄 Added "Generate Summary" CTA, allowing users to easily create updates for Slack and client communication.</li>
                <li>📈 Improved daily check-in compliance, with an average 85% check-in rate across the organization. While some teams still fall below the 90% target, most are consistently meeting it, showing strong adoption.</li>
              </ul>
              
              <h3 className="font-medium text-lg mb-3">Next Features</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                <li>📊 Analytics Section for Managers</li>
                <li>🏠 Main Dashboard</li>
                <li>🧑‍💼 Client-Side Dashboard</li>
              </ul>
            </CardContent>
          </Card>
        </section>
        
        {/* Visuals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Visuals & Artifacts</h2>
          <div className="space-y-8">

          <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <ImageDialog 
                src="/bcexperience/checkin_creation.png" 
                alt="Check-in Creation" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Check-in Creation</h3>
                <p className="text-primary-light">This screenshot showcases the simplified check-in interface where engineers update their progress twice daily.</p>
              </div>
            </div>


            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <ImageDialog 
                src="/bcexperience/Single_Member_View.png" 
                alt="Single Member View" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Single Member View</h3>
                <p className="text-primary-light">This view displays a timeline of daily check-ins for a specific team member, making it easy to track progress, consistency, and any blockers reported over time. 
                  It helps managers understand individual contributions and identify patterns in productivity.</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <ImageDialog 
                src="/bcexperience/Team-View.png" 
                alt="Team View" 
                className="w-full h-auto" 
              />
              <div className="p-5">
                <h3 className="font-medium text-lg mb-2">Team View</h3>
                <p className="text-primary-light">The team dashboard gives a snapshot of check-in status across all team members. 
                  It highlights who has completed their check-ins, any pending updates, and overall compliance trends. 
                  This view supports team leads in maintaining accountability and ensuring sprint goals are on track.</p>
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
      
   
    </ProjectLayout>
  );
};

export default bcexperienceproject;
