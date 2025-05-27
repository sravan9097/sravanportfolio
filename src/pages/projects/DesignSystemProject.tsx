
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlusIcon } from "lucide-react";

const DesignSystemProject = () => {
  // Color palette state
  const [selectedColorCategory, setSelectedColorCategory] = useState("primary");
  
  // Color palettes
  const colorPalettes = {
    primary: [
      { name: "Blue-500", hex: "#3B82F6", className: "bg-blue-500" },
      { name: "Blue-400", hex: "#60A5FA", className: "bg-blue-400" },
      { name: "Blue-300", hex: "#93C5FD", className: "bg-blue-300" },
      { name: "Blue-200", hex: "#BFDBFE", className: "bg-blue-200" },
      { name: "Blue-100", hex: "#DBEAFE", className: "bg-blue-100" }
    ],
    secondary: [
      { name: "Dark-500", hex: "#1E293B", className: "bg-slate-800" },
      { name: "Dark-400", hex: "#334155", className: "bg-slate-700" },
      { name: "Dark-300", hex: "#475569", className: "bg-slate-600" },
      { name: "Dark-200", hex: "#64748B", className: "bg-slate-500" },
      { name: "Dark-100", hex: "#94A3B8", className: "bg-slate-400" }
    ],
    accent: [
      { name: "White", hex: "#FFFFFF", className: "bg-white border" },
      { name: "Gray-100", hex: "#F3F4F6", className: "bg-gray-100" },
      { name: "Gray-200", hex: "#E5E7EB", className: "bg-gray-200" },
      { name: "Gray-300", hex: "#D1D5DB", className: "bg-gray-300" },
      { name: "Gray-400", hex: "#9CA3AF", className: "bg-gray-400" }
    ],
    teal: [
      { name: "Teal-500", hex: "#14B8A6", className: "bg-teal-500" },
      { name: "Teal-400", hex: "#2DD4BF", className: "bg-teal-400" },
      { name: "Teal-300", hex: "#5EEAD4", className: "bg-teal-300" },
      { name: "Teal-200", hex: "#99F6E4", className: "bg-teal-200" },
      { name: "Teal-100", hex: "#CCFBF1", className: "bg-teal-100" }
    ],
    green: [
      { name: "Green-500", hex: "#22C55E", className: "bg-green-500" },
      { name: "Green-400", hex: "#4ADE80", className: "bg-green-400" },
      { name: "Green-300", hex: "#86EFAC", className: "bg-green-300" },
      { name: "Green-200", hex: "#BBF7D0", className: "bg-green-200" },
      { name: "Green-100", hex: "#DCFCE7", className: "bg-green-100" }
    ],
    purple: [
      { name: "Purple-500", hex: "#8B5CF6", className: "bg-purple-500" },
      { name: "Purple-400", hex: "#A78BFA", className: "bg-purple-400" },
      { name: "Purple-300", hex: "#C4B5FD", className: "bg-purple-300" },
      { name: "Purple-200", hex: "#DDD6FE", className: "bg-purple-200" },
      { name: "Purple-100", hex: "#EDE9FE", className: "bg-purple-100" }
    ],
    pink: [
      { name: "Pink-500", hex: "#EC4899", className: "bg-pink-500" },
      { name: "Pink-400", hex: "#F472B6", className: "bg-pink-400" },
      { name: "Pink-300", hex: "#F9A8D4", className: "bg-pink-300" },
      { name: "Pink-200", hex: "#FBCFE8", className: "bg-pink-200" },
      { name: "Pink-100", hex: "#FCE7F3", className: "bg-pink-100" }
    ],
    red: [
      { name: "Red-500", hex: "#EF4444", className: "bg-red-500" },
      { name: "Red-400", hex: "#F87171", className: "bg-red-400" },
      { name: "Red-300", hex: "#FCA5A5", className: "bg-red-300" },
      { name: "Red-200", hex: "#FECACA", className: "bg-red-200" },
      { name: "Red-100", hex: "#FEE2E2", className: "bg-red-100" }
    ],
    orange: [
      { name: "Orange-500", hex: "#F97316", className: "bg-orange-500" },
      { name: "Orange-400", hex: "#FB923C", className: "bg-orange-400" },
      { name: "Orange-300", hex: "#FDBA74", className: "bg-orange-300" },
      { name: "Orange-200", hex: "#FED7AA", className: "bg-orange-200" },
      { name: "Orange-100", hex: "#FFEDD5", className: "bg-orange-100" }
    ],
    gray: [
      { name: "Gray-900", hex: "#111827", className: "bg-gray-900" },
      { name: "Gray-800", hex: "#1F2937", className: "bg-gray-800" },
      { name: "Gray-700", hex: "#374151", className: "bg-gray-700" },
      { name: "Gray-600", hex: "#4B5563", className: "bg-gray-600" },
      { name: "Gray-500", hex: "#6B7280", className: "bg-gray-500" }
    ]
  };
  
  // Design system components
  const atomicDesignComponents = [
    { 
      name: "Consistency Across Products", 
      icon: "/check.svg",
      description: "Design systems ensure that every part of a digital product looks and feels the same, which enhances user experience (UX) and builds brand trust." 
    },
    { 
      name: "Faster Design and Development", 
      icon: "/lightning.svg",
      description: "Teams don't need to reinvent the wheel every time they design a button or a form. Components are already built, tested, and ready to use — saving time."
    },
    { 
      name: "Improved Collaboration", 
      icon: "/sync.svg", 
      description: "Designers, developers, product managers, and writers can all speak the same visual and functional language. Everyone knows what a 'primary button' or 'error message' should look like."
    },
    { 
      name: "Scalability", 
      icon: "/scale.svg", 
      description: "When your product grows — more pages, new apps, different teams — a design system allows for easy scaling while maintaining visual and functional harmony."
    },
    { 
      name: "Accessibility", 
      icon: "/accessibility.svg", 
      description: "Good design systems bake in accessibility best practices, helping ensure your products work for all users, including those with disabilities."
    }
  ];

  // Typography examples
  const typographyExamples = [
    { name: "Heading 1", size: "2.5rem", weight: "Bold", lineHeight: "1.2", preview: "Heading 1" },
    { name: "Heading 2", size: "2rem", weight: "Bold", lineHeight: "1.3", preview: "Heading 2" },
    { name: "Heading 3", size: "1.75rem", weight: "Semibold", lineHeight: "1.4", preview: "Heading 3" },
    { name: "Paragraph", size: "1rem", weight: "Regular", lineHeight: "1.5", preview: "Body text" },
    { name: "Small", size: "0.875rem", weight: "Regular", lineHeight: "1.5", preview: "Small text" },
  ];

  // Spacing examples
  const spacingExamples = [4, 8, 12, 16, 24, 32, 48, 64];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-4xl pt-32 pb-16 px-4">
        <Link to="/#projects" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
        
        {/* Hero Section */}
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
          <img 
            src="/Hero_Images/designsystemhero.png" 
            alt="Design System" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <section className="mb-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is Design System?</h2>
            <p className="text-muted-foreground mb-4">
            In the fast-paced world of digital product development, consistency, scalability, and efficiency are crucial. This is where a design system becomes an essential tool. 
            A design system is more than just a collection of UI elements—it's a comprehensive guide that defines the visual language, 
            interaction patterns, and code standards for a brand or product. It serves as a single source of truth for designers and developers, 
            ensuring that products look, feel, and function consistently across different platforms and teams.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-muted flex items-center justify-center min-h-[300px]">
            <img 
              src="/design-system/designsystemhero.png" 
              alt="Design System Diagram" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Why Design System Needed?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Design systems solve several key problems in digital product development:
                </p>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6">
                  {atomicDesignComponents.map((component, index) => (
                    <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md transition-shadow bg-card">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <img className="w-12 h-12" src={component.icon} alt={component.name} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-bold text-lg mb-2 text-card-foreground">{component.name}</h3>
                        <p className="text-muted-foreground text-sm">{component.description}</p>
                      </div>
                    </div>
                  ))}
                </div>  
                <p>
                  By creating a shared language and toolkit, design systems ensure everyone
                  is working with the same components, patterns, and principles. This
                  improves both the user experience and the team collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Atomic Design</h2>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Colors</h2>
          <div className="mb-6">
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.keys(colorPalettes).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedColorCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm transition-colors ${
                    selectedColorCategory === category 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colorPalettes[selectedColorCategory as keyof typeof colorPalettes].map((color, index) => (
                <div key={index} className="flex flex-col">
                  <div 
                    className={`${color.className} h-20 rounded-md mb-2`}
                  ></div>
                  <div className="text-sm font-medium text-foreground">{color.name}</div>
                  <div className="text-xs text-muted-foreground">{color.hex}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Typography</h2>
          <div className="mb-8 flex items-center justify-center">
            <div className="inline-flex items-center border border-border rounded-md p-2 bg-card">
              <span className="font-bold text-2xl mr-3 text-card-foreground">Aa</span>
              <div className="text-sm">
                <div className="text-card-foreground">Inter</div>
                <div className="text-muted-foreground">Sans-serif</div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Size</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Weight</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Line Height</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Preview</th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {typographyExamples.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-card-foreground">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.size}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{item.lineHeight}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-card-foreground ${
                        item.name === "Heading 1" ? "text-2xl font-bold" :
                        item.name === "Heading 2" ? "text-xl font-bold" :
                        item.name === "Heading 3" ? "text-lg font-semibold" :
                        item.name === "Paragraph" ? "text-base" :
                        "text-sm"
                      }`}>
                        {item.preview}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Spacing</h2>
          <div className="mb-6">
            <p className="text-muted-foreground mb-6">
              Consistent spacing helps maintain visual harmony throughout an interface.
              Our spacing system uses a base unit of 4px to create a rhythmic feel.
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                {spacingExamples.map((space, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-accent mb-2" style={{ width: `${space}px`, height: `${space}px` }}></div>
                    <span className="text-xs text-muted-foreground">{space}px</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Components</h2>
          <p className="text-muted-foreground mb-8">
            Our design system provides a comprehensive set of UI components that can be 
            combined to create consistent user experiences.
          </p>

          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
            </TabsList>
            <TabsContent value="buttons" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-card-foreground">Button Variants</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-card-foreground">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" variant="outline">
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inputs" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-card-foreground">Text Inputs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Default</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Disabled</label>
                      <input
                        type="text"
                        disabled
                        placeholder="Disabled input"
                        className="w-full px-3 py-2 border border-input rounded-md bg-muted text-muted-foreground"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4 text-card-foreground">Select Inputs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-card-foreground">Default</label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cards" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2 text-card-foreground">Basic Card</h3>
                    <p className="text-muted-foreground text-sm">
                      This is a basic card component that can be used to display content.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <div className="h-32 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Image</span>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-medium mb-2 text-card-foreground">Card with Image</h3>
                    <p className="text-muted-foreground text-sm">
                      This card includes an image above the content.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Grid System</h2>
          <p className="text-muted-foreground mb-8">
            Our grid system is based on a 12-column layout that provides flexibility and 
            structure across different screen sizes.
          </p>
          <div className="mb-8">
            <div className="grid grid-cols-12 gap-2 mb-4">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="bg-accent/20 h-12 flex items-center justify-center text-xs text-accent-foreground border border-border">
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-2 mb-4">
              {[4, 4, 4].map((span, i) => (
                <div key={i} className={`col-span-${span} bg-accent/30 h-12 flex items-center justify-center text-xs text-accent-foreground border border-border`}>
                  col-{span}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-2 mb-4">
              {[6, 6].map((span, i) => (
                <div key={i} className={`col-span-${span} bg-accent/40 h-12 flex items-center justify-center text-xs text-accent-foreground border border-border`}>
                  col-{span}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 bg-accent/50 h-12 flex items-center justify-center text-xs text-accent-foreground border border-border">
                col-12
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DesignSystemProject;
