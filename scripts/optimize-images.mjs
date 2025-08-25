import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function optimizeImages() {
  console.log('🖼️  Optimizing images...');
  
  try {
    // Create optimized directory if it doesn't exist
    const optimizedDir = join(projectRoot, 'src/assets/images/optimized');
    if (!fs.existsSync(optimizedDir)) {
      fs.mkdirSync(optimizedDir, { recursive: true });
    }

    // Optimize PNG images
    const pngFiles = await imagemin([join(projectRoot, 'src/assets/images/*.png')], {
      destination: optimizedDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8], // Compress to 60-80% quality
          strip: true // Remove metadata
        })
      ]
    });

    // Optimize JPG images (if any)
    const jpgFiles = await imagemin([join(projectRoot, 'src/assets/images/*.{jpg,jpeg}')], {
      destination: optimizedDir,
      plugins: [
        imageminMozjpeg({
          quality: 80, // 80% quality for JPEGs
          progressive: true
        })
      ]
    });

    console.log('✅ Images optimized successfully!');
    console.log(`📁 Optimized ${pngFiles.length} PNG files`);
    console.log(`📁 Optimized ${jpgFiles.length} JPG files`);
    
    // Show file size comparison
    for (const file of pngFiles) {
      const originalPath = join(projectRoot, 'src/assets/images', file.sourcePath.split('/').pop());
      const optimizedPath = file.destinationPath;
      
      if (fs.existsSync(originalPath)) {
        const originalSize = fs.statSync(originalPath).size;
        const optimizedSize = fs.statSync(optimizedPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`📉 ${file.sourcePath.split('/').pop()}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(optimizedSize/1024/1024).toFixed(2)}MB (${savings}% smaller)`);
      }
    }

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();
