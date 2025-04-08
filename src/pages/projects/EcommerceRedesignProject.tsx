
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

const EcommerceRedesignProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">UX Research & Design</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary">E-Commerce Redesign</h1>
          
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
            <img 
              src="https://images.unsplash.com/photo-1532299033990-5bf394529e15" 
              alt="E-Commerce Redesign" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Project Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Timeline</h2>
            <p className="text-primary-light">4 months</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">Tools</h2>
            <ul className="text-primary-light">
              <li>Figma</li>
              <li>Hotjar</li>
              <li>Google Analytics</li>
              <li>InVision</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2 text-primary">My Role</h2>
            <p className="text-primary-light">UX Researcher & Designer</p>
          </div>
        </div>
        
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Overview</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-6">A complete overhaul of an e-commerce platform focusing on optimizing the conversion funnel and streamlining the product discovery process.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Problem</h3>
                <p className="text-primary-light">The client was experiencing high cart abandonment rates and poor conversion despite good traffic numbers.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Target Audience</h3>
                <p className="text-primary-light">Fashion-conscious shoppers aged 25-40 with disposable income but limited shopping time.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2 text-primary">Scope</h3>
                <p className="text-primary-light">End-to-end redesign of the shopping experience from landing page through checkout.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Role Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">My Role</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <p className="text-primary-light mb-4">As the UX Researcher & Designer on this project, my responsibilities included:</p>
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Analyzing existing user behavior and conversion data</li>
              <li>Developing user personas and journey maps</li>
              <li>Creating and testing redesign concepts</li>
              <li>Implementing A/B tests to validate design changes</li>
            </ul>
          </div>
        </section>
        
        {/* Project Goals Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-primary">Project Goals</h2>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-primary-light">
              <li>Reduce cart abandonment by 20%</li>
              <li>Increase conversion rate by 15%</li>
              <li>Improve average order value by 10%</li>
              <li>Enhance product discovery experience</li>
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
              <p className="mb-4">Conducted comprehensive analysis of user behavior and conversion blockers.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Heatmap and session recording analysis</li>
                <li>Exit surveys</li>
                <li>Checkout funnel analysis</li>
                <li>Customer interviews</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Identified that users were abandoning carts primarily during the checkout process due to unexpected shipping costs and a complex form flow.</p>
            </CardContent>
          </Card>
          
          {/* Ideation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Ideation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Developed multiple concepts to address the key pain points in the customer journey.</p>
              <h4 className="font-medium mb-2">Methods:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Conversion-focused brainstorming workshops</li>
                <li>Competitive analysis of checkout processes</li>
                <li>Customer journey mapping</li>
              </ul>
              <h4 className="font-medium mb-2">Key Insights:</h4>
              <p>Created a simplified checkout concept that surfaced shipping costs earlier and reduced form fields by 40%.</p>
            </CardContent>
          </Card>
          
          {/* Wireframing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Wireframes & Prototypes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Designed wireframes and prototypes of the new shopping experience.</p>
              <h4 className="font-medium mb-2">Tools:</h4>
              <p className="mb-6">Figma for wireframing and InVision for prototyping</p>
              
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

export default EcommerceRedesignProject;
