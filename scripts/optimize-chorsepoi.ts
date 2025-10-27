/**
 * Optimize and upload Chorsepoi images to Supabase Storage
 * 
 * This script targets only the chorsepoi folder
 * 
 * Usage: npm run optimize-chorsepoi
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

const CHORSEPOI_FOLDER = 'public/chorsepoi';

// List of images to process
const imagesToProcess = [
  'login_view.png',
  'game_waiting_area.png',
  'game_drawphase.png',
  'drawphase_completed.png',
  'gameboard_chor.png',
  'gameboard_police.png',
  'leave_modal.png',
  'Map.png'
];

/**
 * Optimize image using Sharp
 */
async function optimizeImage(inputPath: string, outputPath: string) {
  let pipeline = sharp(inputPath);
  
  // Convert to WebP for best compression
  pipeline = pipeline.webp({ quality: 85, effort: 6 });
  
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
 * Main optimization and upload function
 */
async function optimizeAndUploadChorsepoi() {
  console.log('🎮 Starting Chorsepoi image optimization...\n');
  
  const tempDir = path.join(process.cwd(), '.tmp-chorsepoi');
  
  // Create temp directory
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  const optimizedFiles: Array<{
    localPath: string;
    supabasePath: string;
    originalSize: number;
    optimizedSize: number;
  }> = [];
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  console.log(`📦 Processing ${imagesToProcess.length} Chorsepoi images...\n`);
  
  // Optimize each image
  for (const img of imagesToProcess) {
    const inputPath = path.join(CHORSEPOI_FOLDER, img);
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  Skipping ${img} (file not found)`);
      continue;
    }
    
    try {
      const outputName = img.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(tempDir, outputName);
      
      const result = await optimizeImage(inputPath, outputPath);
      
      totalOriginalSize += result.originalSize;
      totalOptimizedSize += result.optimizedSize;
      
      const supabasePath = `chorsepoi/${outputName}`;
      
      optimizedFiles.push({
        localPath: outputPath,
        supabasePath,
        originalSize: result.originalSize,
        optimizedSize: result.optimizedSize,
      });
      
      const fileName = img;
      console.log(`✅ ${fileName} → ${outputName} (${result.savingsPercent}% smaller)`);
    } catch (error: any) {
      console.error(`❌ Failed to optimize ${img}: ${error.message}`);
    }
  }
  
  const totalSavings = totalOriginalSize - totalOptimizedSize;
  const totalSavingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(1);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary:');
  console.log(`📦 Processed: ${optimizedFiles.length} images`);
  console.log(`💾 Original Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Optimized Size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💰 Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${totalSavingsPercent}%)`);
  console.log('='.repeat(60) + '\n');
  
  if (optimizedFiles.length === 0) {
    console.log('⚠️  No images to upload');
    fs.rmSync(tempDir, { recursive: true, force: true });
    return;
  }
  
  // Upload optimized images
  console.log('🚀 Uploading to Supabase...\n');
  
  let uploaded = 0;
  let failed = 0;
  const errors: string[] = [];
  
  for (const img of optimizedFiles) {
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
    } catch (error: any) {
      failed++;
      errors.push(`${img.supabasePath}: ${error.message}`);
      console.error(`❌ Failed to upload ${img.supabasePath}: ${error.message}`);
    }
  }
  
  // Upload Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Upload Summary:');
  console.log(`✅ Uploaded: ${uploaded}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`💰 Total Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
  console.log('='.repeat(60) + '\n');
  
  // Clean up temp directory
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('🧹 Cleaned up temporary files\n');
  
  if (errors.length > 0) {
    console.log('❌ Errors:\n');
    errors.forEach(e => console.log('  ' + e));
  }
  
  console.log('✅ Chorsepoi optimization and upload complete!');
}

optimizeAndUploadChorsepoi()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });

