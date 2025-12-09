// scripts/webp-converter.mjs - WEBP CONVERSION FOR BETTER COMPRESSION
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.join(__dirname, '..');

async function convertToWebP() {
  console.log('📦 Converting images to WebP format...');

  const sourceDir = path.join(projectRoot, 'src/assets/images');
  const outputDir = path.join(projectRoot, 'public/optimized-images');

  try {
    await fs.mkdir(outputDir, { recursive: true });

    // Recursively find all image files
    async function processDir(dir) {
      const files = await fs.readdir(dir, { withFileTypes: true });

      for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
          await processDir(fullPath);
        } else if (/\.(png|jpg|jpeg)$/i.test(file.name)) {
          const relative = path.relative(sourceDir, fullPath);
          const outputPath = path.join(outputDir, relative.replace(/\.[^.]+$/, '.webp'));

          // Ensure output directory exists
          await fs.mkdir(path.dirname(outputPath), { recursive: true });

          try {
            await sharp(fullPath)
              .webp({ quality: 75, alphaQuality: 100 })
              .toFile(outputPath);

            const originalSize = (await fs.stat(fullPath)).size;
            const webpSize = (await fs.stat(outputPath)).size;
            const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

            console.log(`✅ ${relative} → ${relative.replace(/\.[^.]+$/, '.webp')} (${savings}% smaller)`);
          } catch (err) {
            console.error(`❌ Failed to convert ${relative}:`, err.message);
          }
        }
      }
    }

    await processDir(sourceDir);
    console.log('✨ WebP conversion complete!');
  } catch (error) {
    console.error('❌ Error converting images:', error);
  }
}

convertToWebP();