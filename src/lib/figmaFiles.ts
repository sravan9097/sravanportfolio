/**
 * Figma Community Files Data
 * 
 * This file contains all Figma community files with their metadata.
 * Files are sorted by rank (lower rank = higher priority in display order).
 */

import { getImageURL } from './imageUtils';

export interface FigmaFile {
  id: string;
  title: string;
  description: string;
  label: string; // Category/Label displayed on the card
  thumbnailImagePath: string; // Path to thumbnail image
  redirectLink: string; // Figma community file URL
  rank: number; // Lower rank = displayed first (1 is highest priority)
}

export const figmaFilesData: FigmaFile[] = [
  {
    id: "bc-experience-platform",
    title: "BeautifulCode Experience Platform",
    description: "Explore BeautifulCode Experience App.",
    label: "Figma File - Web Platform",
    thumbnailImagePath: "/Hero_Images/BC_experience_cover.png",
    redirectLink: "https://www.figma.com/community/file/1532192399307808386/beautiful-code-experience-app",
    rank: 1
  },

  {
    id: "growthy-figma",
    title: "Growthy – for Continuous Learning | UI Screens & Design System",
    description: "Explore selected UI screens and design patterns from Growthy, a platform designed to build a Developing Expertise Culture in organizations through structured learning, daily reflections, and mentorship.",
    label: "Figma File - UI Screens",
    thumbnailImagePath: "/Hero_Images/growthyCover.png",
    redirectLink: "https://www.figma.com/community/file/1535273022446774903/growthy-for-continuous-learning-ui-screens-design-system",
    rank: 2
  },
  {
    id: "rummy-figma",
    title: "Rummy Game App - Design System",
    description: "Explore selected UI screens and design system implementation from Rummy Game App.",
    label: "Figma File - Mobile UI Screens",
    thumbnailImagePath: "/Hero_Images/rummyCover.png",
    redirectLink: "https://www.figma.com/community/file/1535246006291565048/design-system-rummy-game-app",
    rank: 3
  },
  {
    id: "real-estate-app-figma",
    title: "Real Estate App - Design System",
    description: "Explore design system implementation from Real Estate App.",
    label: "Figma File - Community Template",
    thumbnailImagePath: "/Hero_Images/realestateCover.png",
    redirectLink: "https://www.figma.com/community/file/1295787971747216645/real-estate-app-ui-kit-free-to-customise-components-variables-modes",
    rank: 4
  },
  {
    id: "sharechat-lead-generation",
    title: "ShareChat Lead Generation",
    description: "Explore ShareChat Lead Generation Ad Feature project documentation.",
    label: "Figma File - Feature Design",
    thumbnailImagePath: "/Hero_Images/sharechatCover.png",
    redirectLink: "https://www.figma.com/community/file/1324673389958171817/new-feature-introduction-of-lead-generation-ad-format",
    rank: 5
  },
  {
    id: "adspark-figma",
    title: "Adspark - Design System",
    description: "Explore design system implementation from Adspark.",
    label: "Figma File - Design System",
    thumbnailImagePath: "/Hero_Images/adsparkCover.png",
    redirectLink: "https://www.figma.com/community/file/1324430043396376581/adspark-ads-platform-responsive-to-all-devices-light-dark-ui-support-variables",
    rank: 6
  },
  {
    id: "beautifulcode-revamp",
    title: "BeautifulCode Website Revamp",
    description: "Explore BeautifulCode Website Revamp project documentation.",
    label: "Figma File - Website Redesign",
    thumbnailImagePath: "/beautifulcode-revamp/beautifulcodeCover.png",
    redirectLink: "https://www.figma.com/community/file/1531452240079073955/beautifulcode-website-redesign-a-geeky-developer-first-experience",
    rank: 7
  },
  {
    id: "rummy-game-app-figma",
    title: "Rummy Game App",
    description: "Explore Rummy Game App project documentation.",
    label: "Figma File - Game App",
    thumbnailImagePath: "/Hero_Images/rummygameCover.png",
    redirectLink: "https://www.figma.com/community/file/1311452273811577489/game-app-rummy-supports-light-dark-mode-mobile-screens-variables",
    rank: 8
  }
];

/**
 * Get all Figma files sorted by rank (lower rank appears first)
 */
export function getFigmaFiles(): FigmaFile[] {
  return [...figmaFilesData].sort((a, b) => a.rank - b.rank);
}

/**
 * Get a Figma file by ID
 */
export function getFigmaFileById(id: string): FigmaFile | undefined {
  return figmaFilesData.find(file => file.id === id);
}

/**
 * Get Figma files with processed image URLs
 * Useful for components that need to use getImageURL for consistent image handling
 */
export function getFigmaFilesWithProcessedImages(): FigmaFile[] {
  return getFigmaFiles().map(file => ({
    ...file,
    thumbnailImagePath: getImageURL(file.thumbnailImagePath)
  }));
}

/**
 * Get top N Figma files for preview (e.g., home page)
 */
export function getTopFigmaFiles(count: number = 3): FigmaFile[] {
  return getFigmaFilesWithProcessedImages().slice(0, count);
}

