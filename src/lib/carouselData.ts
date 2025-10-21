// Carousel data configuration
// This file contains all carousel data for case studies and articles

export interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CarouselData {
  [key: string]: CarouselImage[];
}

export const carouselData: CarouselData = {
  // Design System Carousels
  'design-system-slides': [
    {
      src: "/design-system/Atoms.png",
      alt: "Atomic Design System - Atoms",
      caption: "Atomic Design System: The foundation of the design system. Atoms are the smallest building blocks, while molecules are simple groups of atoms working together (e.g., a labeled input field)."
    },
    {
      src: "/design-system/molecules.png",
      alt: "Atomic Design System - Molecules",
      caption: "Molecules: Simple combinations of atoms that form functional units, like form inputs with labels, navigation items, or search bars."
    },
    {
      src: "/design-system/organisms.png",
      alt: "Atomic Design System - Organisms",
      caption: "Organisms: Relatively complex UI components composed of groups of molecules and/or atoms, such as navigation bars, footers, or feature sections."
    },
    {
      src: "/design-system/templates.png",
      alt: "Atomic Design System - Templates",
      caption: "Templates: Page-level layouts that arrange organisms, molecules, and atoms into a cohesive structure, defining the overall flow and hierarchy of content."
    }
  ],

  'component-slides': [
    {
      src: "/design-system/components.png",
      alt: "Design System Components",
      caption: "Component Library: Comprehensive collection of reusable UI components with consistent styling and behavior patterns."
    },
    {
      src: "/design-system/design-system-cover.png",
      alt: "Design System Overview",
      caption: "Design System Overview: Complete framework including tokens, components, patterns, and guidelines for consistent product development."
    }
  ],

  // ShareChat Carousels
  'process-slides': [
    {
      src: "/sharechat/mindmapping.png",
      alt: "Mind Mapping Process",
      caption: "Mind Mapping: Visual exploration of user needs, pain points, and solution opportunities for the lead generation feature."
    },
    {
      src: "/sharechat/userflow.png",
      alt: "User Flow Design",
      caption: "User Flow: Detailed mapping of the advertiser journey from campaign creation to form submission and lead collection."
    }
  ],

  // BC Experience Carousels
  'bc-experience-slides': [
    {
      src: "/bc-experience/Single_Member_View.png",
      alt: "Single Member View",
      caption: "Single Member View: Comprehensive member profile with activity timeline, status indicators, and quick actions for efficient member management."
    },
    {
      src: "/bc-experience/Team-View.png",
      alt: "Team Overview",
      caption: "Team Overview: Visual grid layout showing all team members with status overview, bulk actions, and filtering capabilities."
    },
    {
      src: "/bc-experience/checkin_creation.png",
      alt: "Check-in Creation",
      caption: "Check-in Creation: Streamlined step-by-step workflow with smart defaults, progress indicators, and contextual guidance."
    },
    {
      src: "/bc-experience/2001 - Check-in Creation - Guidelines CTA Addition.png",
      alt: "Check-in Guidelines",
      caption: "Check-in Guidelines: Integrated help system with contextual guidelines, clear call-to-actions, and validation feedback."
    }
  ],

  // BeautifulCode Desktop Screens
  'desktop-screens': [
    {
      src: "/beautifulcode-revamp/desktop/Homepage - Landing Page Default.png",
      alt: "Desktop - Homepage",
      caption: "Homepage: Clean, minimal landing page with clear navigation and content hierarchy."
    },
    {
      src: "/beautifulcode-revamp/desktop/Category Page - What we are wired for - Default View.png",
      alt: "Desktop - Category Page",
      caption: "Category Page: Organized layout showing articles and case studies with clear filtering options."
    },
    {
      src: "/beautifulcode-revamp/desktop/Article Page - Default View - Article Example 2.png",
      alt: "Desktop - Article Page",
      caption: "Article Page: Focused reading experience with proper typography and spacing for long-form content."
    },
    {
      src: "/beautifulcode-revamp/desktop/Case Study - Default View - Case Study Example 1.png",
      alt: "Desktop - Case Study Page",
      caption: "Case Study Page: Detailed project showcase with structured information and visual elements."
    },
    {
      src: "/beautifulcode-revamp/desktop/Principle Page - Our Engineering Principles.png",
      alt: "Desktop - Principles List",
      caption: "Principles List: Overview of engineering principles with clear categorization and navigation."
    },
    {
      src: "/beautifulcode-revamp/desktop/Principle Page - Principle Definition page - Default View.png",
      alt: "Desktop - Principle Detail",
      caption: "Principle Detail: In-depth explanation of individual engineering principles with examples."
    }
  ],

  // BeautifulCode Mobile Screens
  'mobile-screens': [
    {
      src: "/beautifulcode-revamp/mobile/Mobile Homepage - Landing Page.png",
      alt: "Mobile - Homepage",
      caption: "Mobile Homepage: Optimized for touch interaction with simplified navigation and content prioritization."
    },
    {
      src: "/beautifulcode-revamp/mobile/Mobile • Category Page - Default View.png",
      alt: "Mobile - Category Page",
      caption: "Mobile Category Page: Responsive layout with touch-friendly elements and streamlined content display."
    },
    {
      src: "/beautifulcode-revamp/mobile/Mobile • Category Page - Side menu.png",
      alt: "Mobile - Side Menu",
      caption: "Mobile Side Menu: Smooth navigation transitions with intuitive gesture-based interactions."
    },
    {
      src: "/beautifulcode-revamp/mobile/Mobile •  Article Page - Default View.png",
      alt: "Mobile - Article Page",
      caption: "Mobile Article Page: Optimized reading experience with proper text sizing and touch-friendly controls."
    },
    {
      src: "/beautifulcode-revamp/mobile/Mobile •  Case Study  Page - Default View.png",
      alt: "Mobile - Case Study Page",
      caption: "Mobile Case Study Page: Adapted layout for mobile viewing with scrollable content sections."
    },
    {
      src: "/beautifulcode-revamp/mobile/Mobile - Foundation Prinicple Category Page - List of Principles View.png",
      alt: "Mobile - Principles List",
      caption: "Mobile Principles List: Compact layout showing engineering principles with easy navigation."
    },
    {
      src: "/beautifulcode-revamp/mobile/Mobile Principle Page -  Default View.png",
      alt: "Mobile - Principle Detail",
      caption: "Mobile Principle Detail: Focused reading experience optimized for mobile screens and touch interaction."
    }
  ],

  // MCP Design Code Bridge Carousels
  'mcp-slides': [
    {
      src: "/mcp-design-code-bridge/mcp_server_figma.png",
      alt: "MCP Server Architecture",
      caption: "MCP Server Architecture: The bridge between design systems and AI tools, providing real-time access to design system data."
    },
    {
      src: "/mcp-design-code-bridge/figmatokenaccess.png",
      alt: "Figma Token Access",
      caption: "Figma Token Access: Direct integration with Figma's API to provide live component specifications and design token values."
    }
  ],

  // AI Agents Design Systems Carousels
  'ai-agent-slides': [
    {
      src: "/ai-agents-design-systems/aiagents.png",
      alt: "AI Agents Interface",
      caption: "AI Agents Interface: Designing interfaces that serve both human users and AI agents with semantic structure and predictable patterns."
    }
  ]
};

// Helper function to get carousel data by key
export const getCarouselData = (key: string): CarouselImage[] => {
  return carouselData[key] || [];
};

// Helper function to check if carousel exists
export const hasCarouselData = (key: string): boolean => {
  return key in carouselData;
};
