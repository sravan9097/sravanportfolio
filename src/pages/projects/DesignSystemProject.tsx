import { useState, useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger,
  TabsContent 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Footer } from "react-day-picker";
import { Input } from "@/components/ui/input";

const DesignSystemProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Color palette state
  const [selectedColorCategory, setSelectedColorCategory] = useState("primary");
  
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
      { name: "Gray-500", hex: "#6B7280", className: "bg-gray-500" },
      { name: "Gray-400", hex: "#9CA3AF", className: "bg-gray-400" },
      { name: "Gray-300", hex: "#D1D5DB", className: "bg-gray-300" },
      { name: "Gray-200", hex: "#E5E7EB", className: "bg-gray-200" },
      { name: "Gray-100", hex: "#F9FAFB", className: "bg-gray-100" },
      { name: "Gray-50", hex: "#F9FAFB", className: "bg-gray-50" }
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
      description: "Layout foundations. Designers, developers, product managers, and writers can all speak the same visual and functional language. Everyone knows what a \"primary button\" or \"error message\" should look like."
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

  // Atomic Design Examples
  const atomicDesignExamples = [
    { name: "Atoms", image: "/design-system/Atoms.png", description: "Atoms are the smallest building blocks — like buttons, inputs, labels, or color swatches. They can’t be broken down further without losing their meaning." },
    { name: "Molecules", image: "/design-system/molecules.png", description: "Molecules are groups of atoms working together. For example, a label + input field + button can form a search bar — a functional, reusable unit." },
    { name: "Organisms", image: "/design-system/organisms.png", description: "Organisms are complex UI components made of molecules and/or atoms, such as a navigation bar or product card." },
    { name: "Templates", image: "/design-system/templates.png", description: "Templates are pages or layouts made of organisms and molecules, such as a dashboard or checkout page." },
    { name: "Pages", image: "/design-system/pages.png", description: "Pages are the highest level of the design system, representing the full-screen views of a digital product." }
  ];

  // Color Examples
  const colorExamples = [
    { name: "Core Colours", description: "These represent the brand's primary and secondary colors — used for buttons, links, highlights, and key interactions." },
    { name: "Functional Colours", description: "These are semantic colors used to indicate states, such as: Success (e.g. green) Error (e.g. red) Warning (e.g. orange) Info (e.g. blue)" },
    { name: "Neutrals", description: "Greys, blacks, and whites used for text, backgrounds, dividers, and UI surfaces. These form the foundation of layout and readability." }
  ];


  // Typography examples
  const typographyExamples = [
    { name: "Hero Title", size: "4.24rem", weight: "Medium", lineHeight: "1.1", preview: "Hero Title" },          // ~67.8px
    { name: "Heading 1", size: "3.14rem", weight: "Bold", lineHeight: "1.2", preview: "Heading 1" },                  // ~50.2px
    { name: "Heading 2", size: "1.94rem", weight: "Bold", lineHeight: "1.3", preview: "Heading 2" },                  // ~31px
    { name: "Heading 3", size: "1.2rem", weight: "Semibold", lineHeight: "1.4", preview: "Heading 3" },               // ~19.2px
    { name: "Body Large", size: "1.125rem", weight: "Regular", lineHeight: "1.6", preview: "Body large text" },       // ~18px
    { name: "Paragraph", size: "1rem", weight: "Regular", lineHeight: "1.5", preview: "Body text" },                  // 16px
    { name: "Body Small", size: "0.875rem", weight: "Regular", lineHeight: "1.5", preview: "Body small text" },       // ~14px
    { name: "Caption", size: "0.75rem", weight: "Regular", lineHeight: "1.4", preview: "Caption text" },              // 12px
    { name: "Overline", size: "0.618rem", weight: "Medium", lineHeight: "1.4", preview: "OVERLINE TEXT" },            // ~10px
    { name: "Micro", size: "0.5rem", weight: "Medium", lineHeight: "1.2", preview: "Micro text" },                    // 8px
  ];

  // Spacing examples
  const spacingExamples = [4, 8, 12, 16, 24, 32, 48, 64 ];


  // Icon styles
  const iconStyles = [
    {image: <img src="/design-system/outlinedIcons.svg" alt="Outlined Icons" className="w-full rounded-xl mb-3 border-border border"/>, name: "Outlined", description: "Minimal, clean, and often used in low-emphasis or neutral contexts (e.g., toolbars, inputs, secondary buttons). These work well for modern and lightweight interfaces." },
    {image: <img src="/design-system/filledIcons.svg" alt="Filled Icons" className="w-full rounded-xl mb-3 border-border border"/>, name: "Filled", description: "Bolder, high-emphasis icons used for primary actions or alerts. These draw more attention and are best used selectively to avoid visual clutter." }
  ];

  return (
    <ProjectLayout projectTitle="Design System">
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
        <div className="relative rounded-xl overflow-hidden bg-muted flex items-center justify-center min-h-[300px] bg-[#F9F7F3]">
          <img 
            src="/design-system/designsystemimage.png" 
            alt="Design System Diagram" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>


        {/* Why Design System Needed Section */}

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
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white p-2">
                        <img className="w-12 h-12" src={component.icon} alt={`${component.name} icon`} />
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


        {/* Atomic Design Section */}

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Atomic Design</h2>
          <p className="text-muted-foreground mb-6">
          Atomic Design is a methodology for crafting design systems in a hierarchical, structured manner.
          Coined by Brad Frost, it draws inspiration from chemistry, breaking down interfaces into smaller parts called atoms,
          which combine to form molecules, organisms, and finally templates and pages. This modular thinking encourages consistency,
          reusability, and scalability in UI development.
          </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {atomicDesignExamples.map((example, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full rounded-md mb-2 overflow-hidden">
                <img 
                  src={example.image} 
                  alt={`${example.name} example`} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-lg font-medium text-foreground text-center mb-3">{example.name}</div>
              <div className="text-sm text-muted-foreground text-center">{example.description}</div>
            </div>
          ))}
        </div>  
        </section>

        {/* Color Section */}

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Colors</h2>
          <p className="text-primary-light text-lg font-semibold mb-2">
          "Color defines the visual identity and emotional tone of your product."
          </p>
          <p className="text-muted-foreground mb-6">
          A well-crafted color system supports usability, accessibility, and brand recognition. 
          It helps users understand states (like success or error), draw attention to key elements, and maintain consistency across UI components.
          </p>
          <p className="text-muted-foreground mb-6">
          Our color palette is structured into three main groups: 
          </p>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
                  {colorExamples.map((component, index) => (
                    <div key={index} className="flex flex-col items-start border border-border rounded-xl p-5 hover:shadow-md transition-shadow bg-card">
                        <h3 className="font-semibold text-lg mb-3 text-card-foreground">{component.name}</h3>
                        <p className="text-muted-foreground text-base">{component.description}</p>
                      </div>
                  ))}
          </div>

          
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



        {/* Typography Section */}


        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Typography</h2>
          <div className="mb-8 flex flex-col gap-4 items-center justify-center">
            <p className="text-muted-foreground">Typography sets the tone and structure of your product’s content. 
              It creates visual hierarchy, improves readability, and brings consistency across your interface.</p>
            <p className="text-muted-foreground">In this type scale, we use the Golden Ratio (~1.618) to ensure harmonious sizing—from headlines to body text. Starting at a base of 1rem, each size scales naturally for a balanced and readable system.</p>
            <p className="text-muted-foreground">We use a range of weights (Bold, Semibold, Regular, Medium) to define hierarchy and ensure clarity across headings, paragraphs, and UI labels.</p> 
              
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-card-foreground">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        {item.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        {item.weight}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                        {item.lineHeight}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div
                          className="text-card-foreground"
                          style={{
                            fontSize: item.size,
                            fontWeight:
                              item.weight === "Extra Bold" ? 800 :
                              item.weight === "Bold" ? 700 :
                              item.weight === "Semibold" ? 600 :
                              item.weight === "Medium" ? 500 :
                              400,
                            lineHeight: item.lineHeight
                          }}
                        >
                          {item.preview}
                        </div>
                      </td>
                    </tr>
                    ))}
              </tbody>          
            </table>
            <div className="flex flex-col items-start justify-center gap-2 p-10 mt-10 border border-border rounded-xl bg-card ">
              <h3 className="text-xl font-bold mb-2 text-primary">For Example</h3>
              
              <div className="flex flex-row w-full justify-between items-center gap-2">
                <span className="flex items-center gap-1 text-primary text-base text-nowrap">
                  <span className="text-xl">★</span> 30 Days free trail
                </span>
                <span className="flex w-full border-b border-gray-200 border-dashed ml-2"></span>
                <span className="text-primary-light text-base flex justify-center items-center px-4 py-1 border border-border rounded-md bg-card text-center text-nowrap">Body Large</span>
              </div>
              <div className="flex flex-row w-full justify-between items-center gap-2">
              <h2 className="text-4xl font-bold text-primary-light text-nowrap">
                Best Payments <br /> Experience
              </h2>
              <span className="flex w-full border-b border-gray-200 border-dashed ml-2"></span>
              <span className="text-primary-light text-base flex items-center w-fit px-4 py-1 border border-border rounded-md bg-card text-center text-nowrap">Heading 2</span>
              </div>
              <div className="flex flex-row w-full justify-between  items-center gap-2 mb-2"> 
              <span className="text-primary-light text-base text-nowrap ">
                Make your daily routine easier by managingmoney and  <br/>transactions with the Bank Card.
              </span>
              <span className="flex w-full border-b border-gray-200 border-dashed ml-2"></span>
              <span className="text-primary-light text-base flex items-center w-auto px-4 py-1 border border-border rounded-md bg-card text-center text-nowrap">Paragraph</span>
              </div>
              <div className="flex flex-row w-full justify-between items-center gap-2">

              <Button> Get Started </Button>
              <span className="flex w-full border-b border-gray-200 border-dashed ml-2"></span>
              <span className="text-primary-light text-base flex items-center w-auto px-4 py-1 border border-border rounded-md bg-card text-center text-nowrap">Body</span>
              </div>
            </div>

          </div>
        </section>




        {/* Spacing Section */}
        
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



        {/* Icons Section */} 

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Icons</h2>
          <div className="mb-6">
            <p className="text-muted-foreground mb-6">
            Icons visually communicate actions, states, and content at a glance. 
            They make interfaces faster to scan and more intuitive to use.
            </p>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Styles</h3>
              <p className="text-muted-foreground mb-6">
              Icons are available in two styles: outlined and filled.
              </p>
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 mb-8 w-full">
                  {iconStyles.map((component, index) => (
                    <div key={index} className="flex flex-col items-start border border-border rounded-xl p-5 hover:shadow-md transition-shadow bg-card">
                        {component.image}
                        <h3 className="font-semibold text-lg mb-3 text-card-foreground">{component.name}</h3>
                        <p className="text-muted-foreground text-base">{component.description}</p>
                      </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Guidelines</h3>
            <p className="text-muted-foreground mb-2">
            Use icons to represent actions, states, and content at a glance.
            </p>
            <ul className="list-disc list-inside text-muted-foreground ml-2">
              <li>Use a consistent grid (e.g., 24×24px).</li>
              <li>Maintain stroke weight across all icons.</li>
              <li>UPair icons with labels unless universally understood.</li>
              <li>Add aria-label for accessibility.</li>
            </ul>
          </div>
        </section>



        {/* Components Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Components</h2>
          <p className="text-muted-foreground mb-8">
            Our design system provides a comprehensive set of UI components that can be 
            combined to create consistent user experiences.
          </p>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Buttons</h3>
            <p className="text-muted-foreground mb-2">
            Buttons trigger actions. They guide users through your interface and drive interaction. Types of Button:
            </p>

            <ul className="list-disc list-inside ml-2 mb-6">
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Primary:</span> Main call to action. Use once per screen.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Secondary:</span> Used for less important actions.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Outline:</span> Use for less prominent actions.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Ghost:</span> Use for less important actions.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Link:</span> Use for navigation actions.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 p-2 ">
            <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-6 text-card-foreground ">Button Variants</h3>
                  <div className="space-y-6">
                    <div className="flex flex-row flex-wrap gap-4">
                      <span className="text-muted-foreground text-sm text-center flex  w-40 text-nowrap"> State / Variant</span>
                      <span className="text-muted-foreground text-sm text-center flex justify-center w-[84px] text-nowrap"> Primary</span>
                      <span className="text-muted-foreground text-sm text-center flex justify-center w-[104px] text-nowrap"> Secondary</span>
                      <span className="text-muted-foreground text-sm text-center flex justify-center w-[82px] text-nowrap"> Outline</span>
                      <span className="text-muted-foreground text-sm text-center flex justify-center w-[72px] text-nowrap"> Ghost</span>
                      <span className="text-muted-foreground text-sm text-center flex justify-center w-[60px] text-nowrap"> Link</span>
                    </div>
                    <span className="flex w-full border-b border-gray-200 border-dashed mx-2"></span>
                      <div className="flex flex-wrap gap-4">
                        <span className="text-primary-light text-base flex items-center w-40 text-nowrap"> Default State</span>
                        <Button variant="default">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                      <span className="flex w-full border-b border-gray-200 border-dashed mx-2"></span>
                      <div className="flex flex-wrap gap-4">
                        <span className="text-primary-light text-base flex items-center w-40 text-nowrap"> Hover State</span>
                        <Button variant="default" className="bg-primary/90">Primary</Button>
                        <Button variant="secondary" className="bg-secondary/80 border border-border">Secondary</Button>
                        <Button variant="outline" className="bg-primary text-white">Outline</Button>
                        <Button variant="ghost" className="bg-primary text-white">Ghost</Button>
                        <Button variant="link" className="underline">Link</Button>
                      </div>
                      <span className="flex w-full border-b border-gray-200 border-dashed mx-2"></span>
                      <div className="flex flex-wrap gap-4">
                        <span className="text-primary-light text-base flex items-center text-nowrap w-40"> Disabled State</span>
                        <Button variant="default" disabled>Primary</Button>
                        <Button variant="secondary" disabled>Secondary</Button>
                        <Button variant="outline" disabled>Outline</Button>
                        <Button variant="ghost" disabled>Ghost</Button>
                        <Button variant="link" disabled>Link</Button>
                      </div>
                  </div>
                  <h3 className="text-lg font-medium mb-6 text-card-foreground mt-10">Button Sizes</h3>
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
            </div>
        </section>
         
        
        <section>
        
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Input Fields</h3>
            <p className="text-muted-foreground mb-2">
            Input fields are used to collect user input. Types of Input Fields:
            </p>

            <ul className="list-disc list-inside ml-2 mb-6">
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Single Line:</span> Single line input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Multi Line:</span> Multi line input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Number:</span> Number input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Date:</span> Date input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Time:</span> Time input field.</li>
            </ul>
          </div>
                  
          <Card>
            <CardContent>
              <h3 className="text-lg font-medium mb-6 text-card-foreground mt-8">Input Variants</h3>
              <div className="flex flex-col  gap-4">
                <div className="flex flex-row gap-6 items-center w-full ">
                    <div className="w-1/2">
                      <Input placeholder="Single Line" />
                    </div>
                    <div className="w-1/2">
                      <Input placeholder="Multi Line" />
                    </div>
                </div>
                <div className="flex flex-row gap-6 items-center w-full">
                    <div className="w-1/2">
                      <Input placeholder="Number" />
                    </div>
                    <div className="w-1/2">
                      <Input placeholder="Date" />
                    </div>
                </div>
                
              </div>    
            </CardContent>
          </Card>
        </section>
        
        <div className="text-center mt-16">
            <h2 className="text-xl font-bold mb-4 text-primary">Interested in working together?</h2>
            <Button asChild className="bg-accent hover:bg-accent-hover text-white">
              <a href="/#contact">Contact Me</a>
            </Button>
        </div>
                  
      
    </ProjectLayout>
  );
};

export default DesignSystemProject;
