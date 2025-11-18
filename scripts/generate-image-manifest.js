const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, '..', 'src');
const OUT_FILE = path.join(PUBLIC_DIR, 'image-manifest.json');
const IMAGE_EXT = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.bmp', '.ico'];

async function walk(dir, base, prefix = '/') {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  let files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      files = files.concat(await walk(full, base, prefix));
    } else if (ent.isFile()) {
      const ext = path.extname(ent.name).toLowerCase();
      if (IMAGE_EXT.includes(ext)) {
        const relativePath = path.relative(base, full).replace(/\\/g, '/');
        files.push(prefix + relativePath);
      }
    }
  }
  return files;
}

(async () => {
  try {
    const publicImages = await walk(PUBLIC_DIR, PUBLIC_DIR, '/');
    const srcImages = await walk(SRC_DIR, SRC_DIR, '/static/media/'); // CRA serves src images from here

    // In development, src images don't have hashes, so we need to adjust the path.
    // This is a simple heuristic. A more robust solution might be needed for complex setups.
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const finalSrcImages = isDevelopment
      ? srcImages.map(p => p.replace(/\/static\/media\//, '/'))
      : srcImages;

    const allImages = [...publicImages, ...finalSrcImages];
    const uniqueImages = [...new Set(allImages)];

    await fs.promises.writeFile(OUT_FILE, JSON.stringify(uniqueImages, null, 2), 'utf8');
    console.log(`Wrote ${uniqueImages.length} entries to ${OUT_FILE}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

