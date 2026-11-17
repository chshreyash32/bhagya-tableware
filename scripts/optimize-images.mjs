import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rootDir = process.cwd();
const srcLeafDir = path.join(rootDir, 'leaf');
const publicLeafDir = path.join(rootDir, 'public', 'leaf');
const publicOptDir = path.join(rootDir, 'public', 'leaf-opt');

fs.mkdirSync(publicLeafDir, { recursive: true });
fs.mkdirSync(publicOptDir, { recursive: true });

// Slugify helper for clean URLs
function toSlug(filename) {
  return filename
    .replace(/\.JPG\.jpeg$/i, '')
    .replace(/\.jpg\.jpeg$/i, '')
    .replace(/\.(jpg|jpeg|png|webp|avif|gif)$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);

async function run() {
  const files = fs.readdirSync(srcLeafDir);
  console.log(`Found ${files.length} files in leaf/`);

  // Copy all original files to public/leaf/ without modifying originals
  for (const file of files) {
    const src = path.join(srcLeafDir, file);
    const dst = path.join(publicLeafDir, file);
    if (fs.statSync(src).isFile()) {
      fs.copyFileSync(src, dst);
    }
  }
  console.log('Copied original files to public/leaf/');

  // Track duplicates (.jpg vs .jpg.jpeg with same size)
  const fileSet = new Set(files);
  const processed = [];

  for (const file of files) {
    const src = path.join(srcLeafDir, file);
    if (!fs.statSync(src).isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) {
      console.log(`Skipping non-image file: ${file}`);
      continue;
    }

    // Check if this is an exact duplicate of .jpg version
    if (file.endsWith('.jpg.jpeg')) {
      const baseJpg = file.slice(0, -5); // removes .jpeg
      if (fileSet.has(baseJpg)) {
        const sizeA = fs.statSync(src).size;
        const sizeB = fs.statSync(path.join(srcLeafDir, baseJpg)).size;
        if (sizeA === sizeB) {
          console.log(`Skipping duplicate: ${file} (exact match of ${baseJpg})`);
          continue;
        }
      }
    }

    const slug = toSlug(file);

    // Special handling for the official transparent PNG logo
    if (file === 'bhayga akku final pdf without tree 12 pngggg.png') {
      // Strictly preserve transparency and exact original aspect ratio
      await sharp(src)
        .resize({ width: 640, withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toFile(path.join(publicOptDir, 'bhagya-logo.png'));

      await sharp(src)
        .resize({ width: 640, withoutEnlargement: true })
        .webp({ quality: 92, alphaQuality: 100 })
        .toFile(path.join(publicOptDir, 'bhagya-logo.webp'));

      await sharp(src)
        .trim()
        .resize({ width: 720, withoutEnlargement: true })
        .webp({ quality: 95, alphaQuality: 100 })
        .toFile(path.join(publicOptDir, 'bhagya-logo-hero.webp'));

      // Generate favicon (preserve transparency, square contain)
      await sharp(src)
        .resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(path.join(rootDir, 'public', 'favicon.png'));

      console.log(`Optimized official logo & favicon from ${file}`);
      processed.push({ file, slug: 'bhagya-logo' });
      continue;
    }

    try {
      // Full web-optimized version (max 1200px)
      await sharp(src)
        .rotate() // honor EXIF orientation
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(publicOptDir, `${slug}.webp`));

      // Mobile card thumbnail (max 600px)
      await sharp(src)
        .rotate()
        .resize({ width: 600, height: 600, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(publicOptDir, `${slug}-thumb.webp`));

      processed.push({ file, slug });
      console.log(`Optimized: ${file} -> ${slug}.webp & ${slug}-thumb.webp`);
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err.message);
    }
  }

  console.log(`\nOptimization complete! Processed ${processed.length} unique images.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
