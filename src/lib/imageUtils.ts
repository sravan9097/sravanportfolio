/**
 * Image Utilities for Local Asset Management
 * 
 * This utility handles image paths for assets stored in the /public folder.
 * All images are served directly from the public directory without external dependencies.
 */

/**
 * Get the local image URL from the public folder
 * 
 * @param imagePath - The image path (e.g., '/profile_photo_new.jpg' or '/Hero_Images/designsystemhero.png')
 * @returns The local path to the image (with leading slash for web compatibility)
 * 
 * @example
 * getImageURL('/profile_photo_new.jpg') 
 * // Returns: '/profile_photo_new.jpg'
 * 
 * getImageURL('/Hero_Images/designsystemhero.png')
 * // Returns: '/Hero_Images/designsystemhero.png'
 */
export function getImageURL(imagePath: string): string {
  // Ensure the path starts with a leading slash for web compatibility
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
}

