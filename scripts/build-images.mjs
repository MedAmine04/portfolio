// Builds the image assets in public/assets.
//
// 1. Social share image (og-image.jpg) — always built. It uses the portrait if one exists, otherwise a monogram.
// 2. Responsive portraits (portrait-512/768/1024.webp) — built only when you add your photos to the project root:
//      photo.jpg = square studio portrait
//    After running this, set `portrait` in src/data/portfolio.ts (see README → Photo).
import sharp from 'sharp';
import { existsSync, mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

let photo = null;
if (existsSync('photo.jpg')) {
  // Square studio photo (1024 px): resized to the widths used by srcSet in src/data/portfolio.ts
  photo = await sharp('photo.jpg').toBuffer();
  for (const w of [1024, 768, 512]) {
    await sharp(photo).resize({ width: w }).webp({ quality: 84 }).toFile(`${OUT}/portrait-${w}.webp`);
  }
  console.log('portraits built');
}

// Social share image (1200x630): cobalt panel, name on the left, portrait on the right
const layers = [
  {
    input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs><pattern id="d" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#ffffff" fill-opacity="0.18"/></pattern></defs>
      <rect width="1200" height="630" fill="url(#d)"/>
    </svg>`),
  },
];
if (photo) {
  layers.push({ input: await sharp(photo).resize({ width: 630, height: 630 }).png().toBuffer(), left: 570, top: 0 });
  layers.push({ input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0.47" x2="0.62"><stop offset="0" stop-color="#2b44e6"/><stop offset="1" stop-color="#2b44e6" stop-opacity="0"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`) });
}
layers.push({
  input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <text x="72" y="270" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="84" fill="#ffffff" letter-spacing="-2">Mohamed Amine</text>
    <text x="72" y="360" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="84" fill="#ffffff" letter-spacing="-2">Khouchaf</text>
    <text x="74" y="430" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="30" fill="#ffffff" fill-opacity="0.85">Data &amp; AI engineering student · EMSI</text>
    <text x="74" y="500" font-family="Courier New, monospace" font-weight="700" font-size="22" fill="#ffffff" fill-opacity="0.75" letter-spacing="3">LOOKING FOR A PFE INTERNSHIP · 2027</text>
  </svg>`),
});

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#2b44e6' } })
  .composite(layers)
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('share image built');
