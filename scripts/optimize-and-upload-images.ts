/**
 * Optimize and upload images to Supabase Storage
 * 
 * This script:
 * 1. Converts PNG/JPEG to WebP (40-80% size reduction)
 * 2. Optimizes images while maintaining quality
 * 3. Uploads to Supabase Storage
 * 
 * Usage: npm run optimize-and-upload
 */

import { config } from 'dotenv';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// Load .env file
config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Missing Supabase credentials in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const BUCKET_NAME = 'portfolio-images';

interface ImageFile {
  localPath: string;
  supabasePath: string;
  originalSize: number;
  optimizedSize: number;
  format: string;
}

/**
 * Optimize image using Sharp
 */
async function optimizeImage(inputPath: string, outputPath: string, format: 'webp' | 'jpeg' | 'png') {
  let pipeline = sharp(inputPath);
  
  if (format === 'webp') {
    pipeline = pipeline.webp({ quality: 85, effort: 6 });
  } else if (format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
  } else if (format === 'png') {
    pipeline = pipeline.png({ quality: 90, compressionLevel: 9 });
  }
  
  await pipeline.toFile(outputPath);
  
  const inputStats = fs.statSync(inputPath);
  const outputStats = fs.statSync(outputPath);
  
  const savings = inputStats.size - outputStats.size;
  const savingsPercent = ((savings / inputStats.size) * 100).toFixed(1);
  
  return {
    originalSize: inputStats.size,
    optimizedSize: outputStats.size,
    savings,
    savingsPercent,
    path: outputPath,
  };
}

/**
 * Determine best format for optimization
 */
function getOptimizationFormat(filePath: string): 'webp' | 'jpeg' | 'png' | null {
  const ext = path.extname(filePath).toLowerCase();
  
  if (ext === '.svg') {
    return null; // Skip SVG, already optimized
  }
  
  // Convert most images to WebP for best compression
  if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
    // Keep GIFs as-is (animated) or convert static ones
    if (ext === '.gif') {
      return null; // Keep GIFs as-is
    }
    return 'webp';
  }
  
  return null;
}

/**
 * Scan and optimize images
 */
async function scanAndOptimize() {
  console.log('🔍 Scanning images for optimization...\n');
  
  const images: Array<{ localPath: string; supabasePath: string; format: string }> = [];
  const tempDir = path.join(process.cwd(), '.tmp-optimized');
  
  // Create temp directory
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  function walkDir(dir: string, relativePath: string = '') {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const relPath = path.join(relativePath, file).replace(/\\/g, '/');
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath, relPath);
      } else if (/\.(png|jpg|jpeg|webp|gif|svg)$/i.test(file)) {
        // Skip excluded files
        if (file.includes('favicon') || file === 'sw.js' || file.includes('google')) {
          continue;
        }
        
        images.push({
          localPath: fullPath,
          supabasePath: relPath.replace(/^public\//, ''),
          format: path.extname(file),
        });
      }
    }
  }
  
  walkDir('public');
  
  console.log(`📦 Found ${images.length} images to optimize\n`);
  
  if (images.length === 0) {
    console.log('⚠️  No images found');
    return;
  }
  
  // Optimize images
  let optimized = 0;
  let skipped = 0;
  const optimizedFiles: ImageFile[] = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  console.log('⚙️  Optimizing images...\n');
  
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const optFormat = getOptimizationFormat(img.localPath);
    
    if (!optFormat) {
      skipped++;
      continue;
    }
    
    try {
      const tempPath = path.join(tempDir, img.supabasePath.replace(/\//g, '_'));
      const result = await optimizeImage(img.localPath, tempPath, optFormat);
      
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
      
      optimizedFiles.push({
        localPath: tempPath,
        supabasePath: img.supabasePath.replace(/\.[^.]+$/, '.webp'),
        originalSize: result.originalSize,
        optimizedSize: result.optimizedSize,
        format: optFormat,
      });
      
      optimized++;
      
      if (optimized % 20 === 0) {
        console.log(`✅ Optimized ${optimized}/${images.length} images...`);
      }
    } catch (error: any) {
      console.error(`❌ Failed to optimize ${img.localPath}: ${error.message}`);
      skipped++;
    }
  }
  
  const totalSavings = totalOriginalSize - totalOptimizedSize;
  const totalSavingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(1);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary:');
  console.log(`✅ Optimized: ${optimized}`);
  console.log(`⏭️  Skipped: ${skipped}`);
  console.log(`📦 Total: ${images.length}`);
  console.log(`💾 Original Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Optimized Size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💰 Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${totalSavingsPercent}%)`);
  console.log('='.repeat(60) + '\n');
  
  if (optimizedFiles.length === 0) {
    console.log('⚠️  No images to upload');
    // Clean up temp directory
    fs.rmSync(tempDir, { recursive: true, force: true });
    return;
  }
  
  // Upload optimized images
  console.log('🚀 Uploading optimized images to Supabase...\n');
  
  let uploaded = 0;
  let failed = 0;
  const errors: string[] = [];
  
  for (let i = 0; i < optimizedFiles.length; i += 3) {
    const batch = optimizedFiles.slice(i, i + 3);
    const promises = batch.map(async (img) => {
      try {
        const buffer = fs.readFileSync(img.localPath);
        
        const { error } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(img.supabasePath, buffer, {
            contentType: 'image/webp',
            upsert: true,
          });
        
        if (error) {
          throw error;
        }
        
        uploaded++;
        
        const fileName = img.supabasePath.split('/').pop();
        const savings = ((img.originalSize - img.optimizedSize) / img.originalSize * 100).toFixed(1);
        
        console.log(`✅ [${uploaded}/${optimizedFiles.length}] ${fileName} (${savings}% smaller)`);
        return true;
      } catch (error: any) {
        failed++;
        errors.push(`${img.supabasePath}: ${error.message}`);
        return false;
      }
    });
    
    await Promise.all(promises);
    
    // Progress update
    if ((i + 3) % 15 === 0) {
      console.log(`\n📊 Progress: ${i + 3}/${optimizedFiles.length} (${Math.round((i + 3) / optimizedFiles.length * 100)}%)\n`);
    }
  }
  
  // Upload Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Upload Summary:');
  console.log(`✅ Uploaded: ${uploaded}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📦 Total: ${optimizedFiles.length}`);
  console.log(`💰 Total Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
  console.log('='.repeat(60) + '\n');
  
  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('🧹 Cleaned up temporary files\n');
  
  if (errors.length > 0) {
    console.log('❌ Errors:\n');
    errors.slice(0, 10).forEach(e => console.log('  ' + e));
    if (errors.length > 10) {
      console.log(`\n  ... and ${errors.length - 10} more`);
    }
  }
  
  console.log('✅ Optimization and upload complete!');
  console.log(`\n💰 You saved ${(totalSavings / 1024 / 1024).toFixed(2)} MB of storage!`);
}

optimizeAndUpload();
async function optimizeAndUpload() {
  await scanAndOptimize()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('💥 Fatal error:', error);
      process.exit(1);
    });
}

