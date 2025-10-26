/**
 * Image Utilities for Hybrid Storage Strategy
 * 
 * This utility handles image paths with a hybrid approach:
 * - Supabase Storage: For frequently-updated images (hero/cover images)
 * - Local /public: For static assets (design system, wireframes, etc.)
 * 
 * Benefits:
 * - Update images without redeploying via Supabase dashboard
 * - Automatic CDN delivery for Supabase images
 * - Graceful fallback if Supabase is unavailable
 */

import { supabase } from '@/integrations/supabase/client';

/**
 * Configuration for images stored in Supabase Storage
 */
const SUPABASE_IMAGES = {
  // Profile images
  'profile_photo_new.jpg': 'profile/profile_photo_new.jpg',
  
  // Project cover images (hero images)
  'beautifulcodeCover.png': 'covers/beautifulcodeCover.png',
  'sharechatCover.png': 'covers/sharechatCover.png',
  'BC_experience_cover.png': 'covers/BC_experience_cover.png',
  'designsystemhero.png': 'covers/designsystemhero.png',
  'growthyCover.png': 'covers/growthyCover.png',
} as const;

type SupabaseImageKey = keyof typeof SUPABASE_IMAGES;

/**
 * Check if an image is configured to use Supabase Storage
 */
function isSupabaseImage(imagePath: string): boolean {
  // Extract the filename from the path
  const filename = imagePath.split('/').pop() || '';
  return filename in SUPABASE_IMAGES;
}

/**
 * Get the Supabase storage path for a given image
 */
function getSupabaseImagePath(imagePath: string): string | null {
  const filename = imagePath.split('/').pop() || '';
  if (filename in SUPABASE_IMAGES) {
    return SUPABASE_IMAGES[filename as SupabaseImageKey];
  }
  return null;
}

/**
 * Generate a public Supabase Storage URL
 */
function generateSupabaseURL(filePath: string): string | null {
  if (!supabase) {
    console.warn('Supabase client not configured');
    return null;
  }

  try {
    const { data } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  } catch (error) {
    console.error('Error generating Supabase URL:', error);
    return null;
  }
}

/**
 * Get the appropriate image URL (Supabase or local)
 * 
 * @param imagePath - The image path (e.g., '/profile_photo_new.jpg' or '/covers/hero.png')
 * @returns The full URL to the image
 * 
 * @example
 * getImageURL('/profile_photo_new.jpg') 
 * // Returns: 'https://<project>.supabase.co/storage/v1/object/public/portfolio-images/profile/profile_photo_new.jpg'
 * 
 * getImageURL('/design-system/atoms.png')
 * // Returns: '/design-system/atoms.png' (local path)
 */
export function getImageURL(imagePath: string): string {
  // Remove leading slash if present for consistency
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Check if this image should be served from Supabase
  const supabasePath = getSupabaseImagePath(normalizedPath);
  
  if (supabasePath) {
    const supabaseURL = generateSupabaseURL(supabasePath);
    
    // Fallback to local path if Supabase unavailable
    if (supabaseURL) {
      return supabaseURL;
    }
    
    // Log warning for debugging
    console.warn(`Supabase image unavailable, using local fallback: ${normalizedPath}`);
  }
  
  // Return local path (with leading slash for web compatibility)
  return normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
}

/**
 * Check if Supabase is configured and available
 */
export function isSupabaseAvailable(): boolean {
  return supabase !== null;
}

/**
 * Get all Supabase image mappings for debugging
 */
export function getSupabaseImageMappings(): Record<string, string> {
  return SUPABASE_IMAGES as Record<string, string>;
}

