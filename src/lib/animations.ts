/**
 * Lottie Animations Data
 * 
 * This file contains all Lottie animations with their metadata.
 * Animations are sorted by rank (lower rank = higher priority in display order).
 */

export interface Animation {
  id: string;
  title: string;
  description: string;
  label: string; // Category/Label displayed on the card
  animationPath: string; // Path to .lottie animation file
  rank: number; // Lower rank = displayed first (1 is highest priority)
}

export const animationsData: Animation[] = [
  {
    id: "verified-badge",
    title: "Verified Badge",
    description: "A celebratory verification badge animation with animated stars and checkmark. Perfect for confirming user actions, account verification, or success states in your application.",
    label: "UI Animation - Badge",
    animationPath: "/Animations/Verified Badge.lottie",
    rank: 1
  },
  {
    id: "search-loading",
    title: "Search Loading Animation",
    description: "An elegant loading animation designed for search interfaces. Features smooth transitions and visual feedback that keeps users engaged during search operations.",
    label: "UI Animation - Loading",
    animationPath: "/Animations/Search Loading Animation.lottie",
    rank: 2
  },
  {
    id: "select-location",
    title: "Select Your Location",
    description: "An interactive location selection animation that guides users through the process of choosing their location. Ideal for maps, delivery apps, or location-based services.",
    label: "UI Animation - Interaction",
    animationPath: "/Animations/Select Your Location.lottie",
    rank: 3
  },
  {
    id: "no-comments",
    title: "No Comments",
    description: "A friendly empty state animation for when there are no comments or interactions. Helps maintain a positive user experience even when content is missing.",
    label: "UI Animation - Empty State",
    animationPath: "/Animations/No comments.lottie",
    rank: 4
  },
  {
    id: "hour-glass",
    title: "Hour Glass",
    description: "A classic hourglass timer animation perfect for indicating wait times, processing states, or countdown scenarios. Clean and minimal design that fits any interface.",
    label: "UI Animation - Timer",
    animationPath: "/Animations/Hour Glass.lottie",
    rank: 5
  }
];

/**
 * Get all animations sorted by rank (lower rank appears first)
 */
export function getAnimations(): Animation[] {
  return [...animationsData].sort((a, b) => a.rank - b.rank);
}

/**
 * Get an animation by ID
 */
export function getAnimationById(id: string): Animation | undefined {
  return animationsData.find(animation => animation.id === id);
}

/**
 * Get top N animations for preview (e.g., home page)
 */
export function getTopAnimations(count: number = 3): Animation[] {
  return getAnimations().slice(0, count);
}

