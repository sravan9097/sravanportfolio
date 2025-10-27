/**
 * Optimize and save Chorsepoi images as WebP locally
 * 
 * Usage: npm run save-chorsepoi-webp
 */

import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

const CHORSEPOI_FOLDER = 'public/chorsepoi';

// List of images to process
const imagesToProcess = [
  'login_view.png',
  'game_waiting_area.png',
  'gameboard_chor.png',
  'leave_modal.png'
];

async function optimizeAndSave() {
  console.log('🎮 Starting Chorsepoi image optimization...\n');
  
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
      const outputPath = path.join(CHORSEPOI_FOLDER, outputName);
      
      // Convert to WebP
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      
      const savings = inputStats.size - outputStats.size;
      const savingsPercent = ((savings / inputStats.size) * 100).toFixed(1);
      
      totalOriginalSize += inputStats.size;
      totalOptimizedSize += outputStats.size;
      
      console.log(`✅ ${img} → ${outputName} (${savingsPercent}% smaller)`);
    } catch (error: any) {
      console.error(`❌ Failed to optimize ${img}: ${error.message}`);
    }
  }
  
  const totalSavings = totalOriginalSize - totalOptimizedSize;
  const totalSavingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(1);
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary:');
  console.log(`💾 Original Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Optimized Size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💰 Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${totalSavingsPercent}%)`);
  console.log('='.repeat(60) + '\n');
  
  console.log('✅ Chorsepoi optimization complete!');
}

optimizeAndSave()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });

