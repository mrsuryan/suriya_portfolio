const sharp = require('sharp');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function optimizeHero() {
  const inputPath = path.join(publicDir, 'suriya_img.webp');
  const outputPath = path.join(publicDir, 'suriya_img_mobile.webp');

  console.log('Optimizing hero image for mobile...');
  await sharp(inputPath)
    .resize(400) // Small enough for mobile
    .webp({ quality: 80 })
    .toFile(outputPath);
  console.log('Saved suriya_img_mobile.webp');
}

optimizeHero().catch(console.error);
