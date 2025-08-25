import * as esbuild from 'esbuild';
import { rimraf } from 'rimraf';
import stylePlugin from 'esbuild-style-plugin';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import fs from 'fs-extra';
import path from 'path';

// CLI Args
const args = process.argv.slice(2);
const isProd = args[0] === '--production';

// Directories
const outDir = 'dist';
const publicDir = 'public';

// حذف مجلد dist قبل البيلد
await rimraf(outDir);

// إعدادات esbuild
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: outDir,
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
};

// دالة لنسخ الملفات من public إلى dist
async function copyPublicFiles() {
  try {
    if (await fs.pathExists(publicDir)) {
      await fs.copy(publicDir, outDir, { overwrite: true });
      console.log('✅ Public files copied to dist');
    } else {
      console.warn('⚠️ No public folder found. Skipping...');
    }
  } catch (error) {
    console.error('❌ Error copying public files:', error);
  }
}

// وضع الإنتاج
if (isProd) {
  try {
    await esbuild.build(esbuildOpts);
    await copyPublicFiles();
    console.log('✅ Build completed successfully in production mode.');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
} else {
  // وضع التطوير مع الـ watch & serve
  try {
    const ctx = await esbuild.context(esbuildOpts);
    await ctx.watch();
    const { hosts, port } = await ctx.serve();
    console.log(`🚀 Development server running on:`);
    hosts.forEach((host) => {
      console.log(`http://${host}:${port}`);
    });
    await copyPublicFiles();
  } catch (error) {
    console.error('❌ Dev server failed:', error);
    process.exit(1);
  }
}
