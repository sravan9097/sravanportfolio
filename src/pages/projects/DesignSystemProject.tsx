import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
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
import { User, Lock, CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const components: { title: string; href: string; description: string }[] = [
  { 
    title: "Alert Dialog",
    href: "",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const DesignSystemProject = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Color palette state
  const [selectedColorCategory, setSelectedColorCategory] = useState("primary");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  
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

  const designSystemProcessSteps = [
    {
      name: "Audit & Research",
      icon: "/design-system/audit.png", // Reusing existing icon
      description: "Analyze existing products, identify inconsistencies, and research user needs and business goals to define the system's scope and requirements."
    },
    {
      name: "Strategy & Principles",
      icon: "/design-system/business-target.png", // Reusing existing icon
      description: "Establish core design principles, brand guidelines, and a clear vision for the design system to guide all future decisions."
    },
    {
      name: "Foundation Building",
      icon: "/design-system/brick.png", // Reusing existing icon
      description: "Develop foundational elements like color palettes, typography scales, spacing systems, and iconography, ensuring they are robust and scalable."
    },
    {
      name: "Component Development",
      icon: "/design-system/components.png", // Reusing existing icon
      description: "Create reusable UI components (atoms, molecules, organisms) with clear documentation, usage guidelines, and code examples for designers and developers."
    },
    {
      name: "Documentation & Governance",
      icon: "/design-system/documentation.png", // Reusing existing icon
      description: "Document every aspect of the design system, including guidelines, best practices, and contribution models, to ensure its adoption and long-term maintenance."
    },
    {
      name: "Implementation & Adoption",
      icon: "/design-system/adoption.png", // Reusing existing icon
      description: "Integrate the design system into actual product development workflows, providing support and training to teams for successful adoption."
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

  // Border Radius examples
  const borderRadiusExamples = [
    { name: "rounded-none", image: "/design-system/rounded-none.png", description: "sharp edges" },
    { name: "rounded-sm", image: "/design-system/rounded-sm.png", description: "subtle rounding" },
    { name: "rounded-md", image: "/design-system/rounded-md.png", description: "for chips, tags" },
    { name: "rounded-lg", image: "/design-system/rounded-lg.png", description: "default for most components" },
    { name: "rounded-xl", image: "/design-system/rounded-xl.png", description: "cards, containers" },
    { name: "rounded-full", image: "/design-system/rounded-full.png", description: "for circular shapes (e.g., avatars, badges)" }
  ];

  // Elevation examples
  const elevationExamples = [
    { name: "Zero Elevation", value: "0dp", shadow: "shadow-none" },
    { name: "Low Elevation", value: "4dp", shadow: "shadow-md" },
    { name: "Medium Elevation", value: "8dp", shadow: "shadow-lg" },
    { name: "High Elevation", value: "12dp", shadow: "shadow-xl" }
  ];


  // Icon styles
  const iconStyles = [
    {image: <img src="/design-system/outlinedIcons.svg" alt="Outlined Icons" className="w-full rounded-xl mb-3 border-border border"/>, name: "Outlined", description: "Minimal, clean, and often used in low-emphasis or neutral contexts (e.g., toolbars, inputs, secondary buttons). These work well for modern and lightweight interfaces." },
    {image: <img src="/design-system/filledIcons.svg" alt="Filled Icons" className="w-full rounded-xl mb-3 border-border border"/>, name: "Filled", description: "Bolder, high-emphasis icons used for primary actions or alerts. These draw more attention and are best used selectively to avoid visual clutter." }
  ];

  const avatarSizes = [
    { name: "Small", size: "h-6 w-6", text: "text-xs", px: "24px" },
    { name: "Medium", size: "h-10 w-10", text: "text-sm", px: "40px" },
    { name: "Large", size: "h-14 w-14", text: "text-base", px: "54px" },
    { name: "ExtraLarge", size: "h-16 w-16", text: "text-lg", px: "64px" },
  ];

  const notificationTypes = [
    { type: "success", icon: <CheckCircle className="h-5 w-5" />, color: "text-green-500", title: "Success", description: "Add your message here" },
    { type: "error", icon: <XCircle className="h-5 w-5" />, color: "text-red-500", title: "Error", description: "Add your message here" },
    { type: "warning", icon: <AlertTriangle className="h-5 w-5" />, color: "text-yellow-500", title: "Warning", description: "Add your message here" },
    { type: "info", icon: <Info className="h-5 w-5" />, color: "text-blue-500", title: "Information", description: "Add your message here" },
  ];

  const { toast } = useToast();

  return (
    <ProjectLayout projectTitle="What is Design System?">
      {/* Hero Section */}
      
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
        <img 
          src="/Hero_Images/designsystemhero.png" 
          alt="Design System" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <section className="my-24 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-foreground">What is Design System?</h2>
          <p className="text-muted-foreground mb-4">
          A design system is a comprehensive guide defining visual language, interaction patterns, and code standards for a product. It ensures consistency across platforms and teams, serving as a single source of truth for designers and developers.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden flex items-center justify-center min-h-[300px] bg-[#F9F7F3]">
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
                  Design systems solve key problems in digital product development:
                </p>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6">
                  {atomicDesignComponents.map((component, index) => (
                    <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
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
                  By creating a shared language and toolkit, design systems improve user experience and team collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Atomic Design Section */}

        {/* Design System Process Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">The Design System Process</h2>
          <p className="text-muted-foreground mb-6">
            Building a robust design system involves a systematic, iterative approach to ensure it's comprehensive, adaptable, and serves both designers and developers.
          </p>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {designSystemProcessSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white p-2">
                  <img className="w-12 h-12" src={step.icon} alt={`${step.name} icon`} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg mb-2 text-card-foreground">{step.name}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Atomic Design Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Atomic Design</h2>
          <p className="text-muted-foreground mb-6">
          Atomic Design, by Brad Frost, structures design systems hierarchically: atoms combine into molecules, then organisms, templates, and finally pages. This modular approach fosters consistency, reusability, and scalability.
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
          A well-crafted color system supports usability, accessibility, and brand recognition. It helps users understand states (like success or error), draw attention to key elements, and maintain consistency across UI components.
          </p>
          <p className="text-muted-foreground mb-6">
          Our color palette is structured into three main groups: 
          </p>
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
                  {colorExamples.map((component, index) => (
                    <div key={index} className="flex flex-col items-start border border-border rounded-xl p-5 hover:shadow-md bg-card">
                        {/* Color Dots */}
<div className="flex gap-2 mb-2">
  {index === 0 && (
    // Core Colors: Primary and Secondary (show first color of each)
    <>
      <div className="w-6 h-6 rounded-full border border-border" style={{ background: colorPalettes.primary[0].hex }} title={colorPalettes.primary[0].name}></div>
      <div className="w-6 h-6 rounded-full border border-border" style={{ background: colorPalettes.secondary[0].hex }} title={colorPalettes.secondary[0].name}></div>
    </>
  )}
  {index === 1 && (
    // Functional Colors: green, red, orange, blue, teal, purple, pink (show first swatch of each)
    <>
      {["green","red","orange","primary","accent"].map((cat) => (
        <div key={cat} className="w-6 h-6 rounded-full border border-border" style={{ background: colorPalettes[cat][0].hex }} title={colorPalettes[cat][0].name}></div>
      ))}
    </>
  )}
  {index === 2 && (
    // Neutrals: show 4 gray colors in descending order
    <>
      {[3,4,5,6].map((i) => (
        <div key={i} className="w-6 h-6 rounded-full border border-border" style={{ background: colorPalettes.gray[i].hex }} title={colorPalettes.gray[i].name}></div>
      ))}
    </>
  )}
</div>
                        <h3 className="mt-3 font-semibold text-lg mb-3 text-card-foreground">{component.name}</h3>
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
            <p className="text-muted-foreground">Typography sets the tone and structure of your product’s content. It creates visual hierarchy, improves readability, and brings consistency across your interface.</p>
            <p className="text-muted-foreground">Our type scale uses the Golden Ratio (~1.618) for harmonious sizing, ensuring a balanced and readable system from headlines to body text.</p>
            <p className="text-muted-foreground">We use a range of weights (Bold, Semibold, Regular, Medium) to define hierarchy and ensure clarity across all text elements.</p> 
              
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
            <div className="flex flex-col items-start justify-center gap-2 p-10 mt-10 border border-border rounded-xl bg-card min-w-[650px]">
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
              Consistent spacing maintains visual harmony. Our system uses a 4px base unit for a rhythmic feel.
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


        {/* Border Radius Section */}
        
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Border Radius</h2>
          <div className="mb-6">
            <p className="text-muted-foreground mb-6">
            Border radius defines the roundness of UI elements. Consistent values across components maintain visual harmony and brand tone.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {borderRadiusExamples.map((example, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full rounded-md mb-2 overflow-hidden">
                <img 
                  src={example.image} 
                  alt={example.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-base font-medium text-foreground text-center mb-3">{example.name}</div>
              <div className="text-sm text-muted-foreground text-center">{example.description}</div>
            </div>
          ))}
        </div> 
          </div>
        </section>

        {/* Elevation Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Elevation</h2>
          <p className="text-muted-foreground mb-10">
            Elevation is depicted by consistent use of shadow. Shadow size reflects elevation. Surfaces at higher elevations have larger shadows, while those at lower elevations have smaller shadows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {elevationExamples.map((example, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-32 h-32 rounded-lg flex items-center justify-center mb-4 bg-card ${example.shadow}`}>
                  <span className="text-lg font-medium text-foreground">{example.value}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{example.name}</h3>
              </div>
            ))}
          </div>
        </section>



        {/* Icons Section */} 

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Icons</h2>
          <div className="mb-6">
            <p className="text-muted-foreground mb-6">
            Icons visually communicate actions, states, and content at a glance, making interfaces faster to scan and more intuitive.
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

        {/* Grid System Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Grid System</h2>
          <p className="text-muted-foreground mb-10">
            A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page. We use it to place text, images, and functions in a consistent way throughout a product or site's design.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="border border-border rounded-xl p-6 bg-card md:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Desktop</h3>
               <div className="flex flex-row gap-4 items-center w-full justify-between">
                  <div className="flex flex-col space-y-2 text-muted-foreground mb-4">
                    <p><strong>Size:</strong> 1440×1024px</p>
                    <p><strong>Column width:</strong> 88px</p>
                    
                  </div>
                  <div className="flex flex-col space-y-2 text-muted-foreground mb-4">
                    <p><strong>Gutter:</strong> 20px</p>
                    <p><strong>Columns:</strong> 12</p>
                  </div>
                </div> 
              <div className="grid grid-cols-12 gap-5 h-56 bg-neutral-100 p-4 rounded-lg">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-sm"></div>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Tablet</h3>
              <div className="flex flex-row gap-4 items-center w-full justify-between">
                <div className="space-y-2 text-muted-foreground mb-4">
                  <p><strong>Size:</strong> 834×1194px</p>
                  <p><strong>Column width:</strong> 78px</p>
                </div>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <p><strong>Gutter:</strong> 20px</p>
                  <p><strong>Columns:</strong> 8</p>
                </div>
                </div>
              <div className="grid grid-cols-8 gap-5 h-32 bg-neutral-100 p-4 rounded-lg">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-sm"></div>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Mobile</h3>
              <div className="flex flex-row gap-4 items-center w-full justify-between">
                <div className="space-y-2 text-muted-foreground mb-4">
                  <p><strong>Size:</strong> 375×812px</p>
                  <p><strong>Width:</strong> 68px</p>
                </div>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <p><strong>Gutter:</strong> 16px</p>
                  <p><strong>Columns:</strong> 4</p>
                </div>
                </div>
              <div className="grid grid-cols-4 gap-4 h-32 bg-neutral-100 p-4 rounded-lg">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </section>



     


      


        




        

        {/* Components Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Components</h2>
          <p className="text-muted-foreground mb-8">
            Our design system provides a comprehensive set of UI components for consistent user experiences.
          </p>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Buttons</h3>
            <p className="text-muted-foreground mb-2">
            Buttons trigger actions, guiding users through the interface. Types:
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
                  <h3 className="text-lg font-medium mb-6 text-card-foreground ">Button Variants & States</h3>
                  <div className="space-y-8">
                    {/* Default State */}
                    <div>
                      <h4 className="text-md font-semibold mb-3 text-card-foreground">Default State</h4>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="default">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                        <Button variant="link">Link Button</Button>
                      </div>
                    </div>

                    {/* Hover State */}
                    <div>
                      <h4 className="text-md font-semibold mb-3 text-card-foreground">Hover State</h4>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="default" className="bg-primary/90">Primary Button</Button>
                        <Button variant="secondary" className="bg-secondary/80 border border-border">Secondary Button</Button>
                        <Button variant="outline" className="bg-accent text-accent-foreground">Outline Button</Button>
                        <Button variant="ghost" className="bg-accent text-accent-foreground">Ghost Button</Button>
                        <Button variant="link" className="underline">Link Button</Button>
                      </div>
                    </div>

                    {/* Disabled State */}
                    <div>
                      <h4 className="text-md font-semibold mb-3 text-card-foreground">Disabled State</h4>
                      <div className="flex flex-wrap gap-4">
                        <Button variant="default" disabled>Primary Button</Button>
                        <Button variant="secondary" disabled>Secondary Button</Button>
                        <Button variant="outline" disabled>Outline Button</Button>
                        <Button variant="ghost" disabled>Ghost Button</Button>
                        <Button variant="link" disabled>Link Button</Button>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mb-6 text-card-foreground mt-10">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small Button</Button>
                    <Button size="default">Default Button</Button>
                    <Button size="lg">Large Button</Button>
                    <Button size="icon" variant="outline">
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
        </section>
         
        
        <section className="mb-24">
        
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Input Fields</h3>
            <p className="text-muted-foreground mb-2">
            Input fields collect user input. Types:
            </p>

            {/* <ul className="list-disc list-inside ml-2 mb-6">
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Single Line:</span> Single line input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Multi Line:</span> Multi line input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Number:</span> Number input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Date:</span> Date input field.</li>
              <li className="mb-1 text-muted-foreground"><span className="text-primary-light text-bold">Time:</span> Time input field.</li>
            </ul> */}
          </div>
                  
          <Card>
            <CardContent>
              <h3 className="text-lg font-medium mb-6 text-card-foreground mt-8">Input Types & States</h3>
              <div className="space-y-8">
                {/* Single Line Input */}
                <div>
                  <h4 className="text-md font-semibold mb-3 text-card-foreground">Single Line Input</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="single-default" className="block text-sm font-medium text-muted-foreground mb-1">Default</label>
                      <Input id="single-default" placeholder="Enter text" />
                    </div>
                    <div>
                      <label htmlFor="single-disabled" className="block text-sm font-medium text-muted-foreground mb-1">Disabled</label>
                      <Input id="single-disabled" placeholder="Disabled input" disabled />
                    </div>
                    <div>
                      <label htmlFor="single-error" className="block text-sm font-medium text-muted-foreground mb-1">Error</label>
                      <Input id="single-error" placeholder="Error state" className="border-red-500 focus-visible:ring-red-500" />
                      <p className="text-xs text-red-500 mt-1">Error message</p>
                    </div>
                  </div>
                </div>

                {/* Multi Line Input (Textarea) */}
                <div>
                  <h4 className="text-md font-semibold mb-3 text-card-foreground">Multi Line Input</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="multi-default" className="block text-sm font-medium text-muted-foreground mb-1">Default</label>
                      <textarea id="multi-default" placeholder="Enter multiple lines of text" className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                    </div>
                    <div>
                      <label htmlFor="multi-disabled" className="block text-sm font-medium text-muted-foreground mb-1">Disabled</label>
                      <textarea id="multi-disabled" placeholder="Disabled multi-line input" disabled className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                    </div>
                    <div>
                      <label htmlFor="multi-error" className="block text-sm font-medium text-muted-foreground mb-1">Error</label>
                      <textarea id="multi-error" placeholder="Error state" className="flex min-h-[80px] w-full rounded-md border border-red-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                      <p className="text-xs text-red-500 mt-1">Error message</p>
                    </div>
                  </div>
                </div>

                {/* Number Input */}
                <div>
                  <h4 className="text-md font-semibold mb-3 text-card-foreground">Number Input</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="number-default" className="block text-sm font-medium text-muted-foreground mb-1">Default</label>
                      <Input id="number-default" type="number" placeholder="Enter number" />
                    </div>
                    <div>
                      <label htmlFor="number-disabled" className="block text-sm font-medium text-muted-foreground mb-1">Disabled</label>
                      <Input id="number-disabled" type="number" placeholder="Disabled number input" disabled />
                    </div>
                    <div>
                      <label htmlFor="number-error" className="block text-sm font-medium text-muted-foreground mb-1">Error</label>
                      <Input id="number-error" type="number" placeholder="Error state" className="border-red-500 focus-visible:ring-red-500" />
                      <p className="text-xs text-red-500 mt-1">Error message</p>
                    </div>
                  </div>
                </div>

                {/* Date Input */}
                <div>
                  <h4 className="text-md font-semibold mb-3 text-card-foreground">Date Input</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="date-default" className="block text-sm font-medium text-muted-foreground mb-1">Default</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label htmlFor="date-disabled" className="block text-sm font-medium text-muted-foreground mb-1">Disabled</label>
                      <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                            disabled
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                    </div>
                    <div>
                      <label htmlFor="date-error" className="block text-sm font-medium text-muted-foreground mb-1">Error</label>
                      <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal border-red-500"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                      <p className="text-xs text-red-500 mt-1">Error message</p>
                    </div>
                  </div>
                </div>

                {/* Time Input */}
                <div>
                  <h4 className="text-md font-semibold mb-3 text-card-foreground">Time Input</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="time-default" className="block text-sm font-medium text-muted-foreground mb-1">Default</label>
                      <Input id="time-default" type="time" />
                    </div>
                    <div>
                      <label htmlFor="time-disabled" className="block text-sm font-medium text-muted-foreground mb-1">Disabled</label>
                      <Input id="time-disabled" type="time" disabled />
                    </div>
                    <div>
                      <label htmlFor="time-error" className="block text-sm font-medium text-muted-foreground mb-1">Error</label>
                      <Input id="time-error" type="time" className="border-red-500 focus-visible:ring-red-500" />
                      <p className="text-xs text-red-500 mt-1">Error message</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>


        
        {/* Selections */}      
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Selections</h2>
          <p className="text-muted-foreground mb-10">
            Selection controls such as radio buttons, checkboxes and switches allow users to control all kinds of options, settings and situations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Toggle Switch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="toggle-on" defaultChecked />
                  <label htmlFor="toggle-on">On</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="toggle-off" />
                  <label htmlFor="toggle-off">Off</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="toggle-disabled-on" defaultChecked disabled />
                  <label htmlFor="toggle-disabled-on">Disabled On</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="toggle-disabled-off" disabled />
                  <label htmlFor="toggle-disabled-off" className="text-muted-foreground">Disabled Off</label>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Checkbox</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-unchecked" className="h-5 w-5" />
                  <label htmlFor="checkbox-unchecked">Unchecked</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-hover" className="h-5 w-5" />
                  <label htmlFor="checkbox-hover">Hover</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-checked" defaultChecked className="h-5 w-5" />
                  <label htmlFor="checkbox-checked">Checked</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-disabled-unchecked" disabled className="h-5 w-5" />
                  <label htmlFor="checkbox-disabled-unchecked" className="text-muted-foreground">Disabled Unchecked</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox-disabled-checked" defaultChecked disabled className="h-5 w-5" />
                  <label htmlFor="checkbox-disabled-checked" className="text-muted-foreground">Disabled Checked</label>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Radio Buttons</h3>
              <div className="space-y-4">
                <RadioGroup defaultValue="selected">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unselected" id="radio-unselected" className="h-5 w-5"/>
                    <label htmlFor="radio-unselected">Unselected</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hover" id="radio-hover" className="h-5 w-5"/>
                    <label htmlFor="radio-hover">Hover</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="selected" id="radio-selected" className="h-5 w-5"/>
                    <label htmlFor="radio-selected">Selected</label>
                  </div>
                </RadioGroup>
                <RadioGroup defaultValue="disabled-selected">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disabled-unselected" id="radio-disabled-unselected" disabled className="h-5 w-5"/>
                    <label htmlFor="radio-disabled-unselected" className="text-muted-foreground">Disable Unselected</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="disabled-selected" id="radio-disabled-selected" disabled className="h-5 w-5"/>
                    <label htmlFor="radio-disabled-selected" className="text-muted-foreground">Disable Selected</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card md:col-span-3">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Sliders</h3>
              <div className="space-y-8 pt-4">
                <div>
                  <label className="text-sm text-muted-foreground">Single Slider</label>
                  <Slider defaultValue={[50]} max={100} step={1} className="mt-2"/>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Double Slider</label>
                  <Slider defaultValue={[25, 75]} max={100} step={1} className="mt-2"/>
                  <p className="text-xs text-muted-foreground mt-2">Allows users to select a range of values.</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">On Focus/Drag</label>
                  <Slider defaultValue={[33]} max={100} step={1} className="mt-2 [&>span:first-child>span]:ring-2 [&>span:first-child>span]:ring-ring [&>span:first-child>span]:ring-offset-2"/>
                  <p className="text-xs text-muted-foreground mt-2">The slider handle enlarges or shows a distinct visual style when the user clicks, taps, or drags it, providing clear feedback that the component is active.</p>
                </div>
              </div>
            </div>
             <div className="border border-border rounded-xl p-6 bg-card md:col-span-3">
              <h3 className=" text-xl font-semibold mb-4 text-card-foreground">Date Picker</h3>
                <div className="flex gap-6 items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-[280px] justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Pick a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="w-[280px] justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateRange?.from ? (
                        dateRange.to ? (
                          <>
                            {format(dateRange.from, "LLL dd, y")} -{" "}
                            {format(dateRange.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(dateRange.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date range</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={dateRange?.from}
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
                </div>
            </div>
          </div>
        </section>


        {/* Navigations Section */}

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Navigations</h2>
          <p className="text-muted-foreground mb-10">
            Navigation components help users find their way through the application.
          </p>
          <div className="grid md:grid-cols-1 gap-8">
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Tabs</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Text Only</h4>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                      <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                  </Tabs>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Icon and Text</h4>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList>
                      <TabsTrigger value="account">
                        <User className="mr-2 h-4 w-4" />
                        Account
                      </TabsTrigger>
                      <TabsTrigger value="password">
                        <Lock className="mr-2 h-4 w-4" />
                        Password
                      </TabsTrigger>
                      <TabsTrigger value="disabled" disabled>
                        <Lock className="mr-2 h-4 w-4" />
                        Disabled
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-xl p-6 bg-card">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Breadcrumbs</h3>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="">Navigation</BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="border border-border rounded-xl p-6 bg-card align-left">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Pagination</h3>
                <div className=" flex items-start justify-center align-left">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Navigation Menu</h3>
              <div className="w-full flex items-start justify-start"> 
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Shadcn
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components built with Radix UI and
                                Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </ListItem>
                        <ListItem href="/docs/installation" title="Installation">
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem href="/docs/primitives/typography" title="Typography">
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              </div>
            </div>
          </div>
        </section>


        {/* Avatars Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Avatars</h2>
          <p className="text-muted-foreground mb-10">
            Avatars are an object that represents the user's identity on screen. Avatars are one of the most common UI elements. We have avatars in business apps, social networks, games. Despite that it is a relatively small sized object, it has great power.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Avatar Size</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Default</h4>
                  <div className="flex items-end space-x-4">
                    {avatarSizes.map((size, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <Avatar className={`${size.size} mb-2`}>
                          <AvatarFallback className={`${size.text}`}>SA</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{size.px}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Profile Picture</h4>
                  <div className="flex items-end space-x-4">
                    {avatarSizes.map((size, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <Avatar className={`${size.size} mb-2`}>
                          <AvatarImage className={`${size.text} object-cover`} src={`/design-system/profile 2.jpg`} alt="@sravan" />
                          <AvatarFallback className={`${size.text}`}>SA</AvatarFallback> 
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{size.px}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Avatar Types</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Group</h4>
                  <div className="flex items-center -space-x-2 overflow-hidden mb-2">
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarImage src="/design-system/profile 1.jpg" alt="@sravan" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarImage src="/design-system/profile 2.jpg" alt="@sravan" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarImage src="/design-system/profile 3.jpg" alt="@sravan" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarFallback>+3</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Profile Online</h4>
                  <div className="relative w-fit">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/design-system/profile 1.jpg" alt="@sravan" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 ring-2 ring-background" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-card-foreground mb-3">Profile Offline</h4>
                  <div className="relative w-fit">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/design-system/profile 2.jpg" alt="@sravan" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-gray-400 ring-2 ring-background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Notifications</h2>
          <p className="text-muted-foreground mb-10">
            Notifications inform users of a process that an app has performed or will perform. It indicates brief, informative message that appears when a user interacts with an element in a graphical user interface.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Snack Bar</h3>
              <div className="space-y-4">
                {notificationTypes.map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-md border border-border bg-background shadow">
                    <div className="flex items-center space-x-3">
                      <span className={`${notification.color}`}>{notification.icon}</span>
                      <div>
                        <p className="font-medium text-foreground">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                      </div>
                    </div>
                    <div>
                      <X className="h-5 w-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Tool Tip</h3>
              <div className="space-y-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover for Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
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
