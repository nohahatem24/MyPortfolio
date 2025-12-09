import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function optimizeImages() {
  console.log('🖼️  Optimizing all images...');
  
  try {
    const assetsDir = join(projectRoot, 'src/assets/images');
    const optimizedDir = join(projectRoot, 'public/optimized-images');
    
    if (!fs.existsSync(optimizedDir)) {
      fs.mkdirSync(optimizedDir, { recursive: true });
    }

    // 1. Optimize PNGs
    console.log('📦 Optimizing PNG files...');
    const pngFiles = await imagemin([join(assetsDir, '**/*.png')], {
      destination: optimizedDir,
      plugins: [
        imageminPngquant({
          quality: [0.65, 0.8],
          strip: true,
          speed: 4,
        }),
      ],
    });

    // 2. Optimize JPGs
    console.log('📦 Optimizing JPG files...');
    const jpgFiles = await imagemin([join(assetsDir, '**/*.{jpg,jpeg}')], {
      destination: optimizedDir,
      plugins: [
        imageminMozjpeg({
          quality: 75,
          progressive: true,
        }),
      ],
    });

    // 3. Convert to WebP (next-gen format)
    console.log('📦 Converting to WebP format...');
    const webpFiles = await imagemin(
      [join(assetsDir, '**/*.{png,jpg,jpeg}')],
      {
        destination: optimizedDir,
        plugins: [
          imageminWebp({
            quality: 75,
            alphaQuality: 100,
          }),
        ],
      }
    );

    console.log('✅ Image optimization complete!');
    console.log(`✨ Optimized ${pngFiles.length} PNG files`);
    console.log(`✨ Optimized ${jpgFiles.length} JPG files`);
    console.log(`✨ Converted ${webpFiles.length} WebP files`);

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();
