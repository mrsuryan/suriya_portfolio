const sharp = require('sharp');
const fs = require('fs');

async function optimizeImages() {
  const images = [
    { in: 'public/suriya_img.png', out: 'public/suriya_img.webp', width: 800 },
    { in: 'public/movie.png', out: 'public/movie.webp', width: 1200 }
  ];

  for (const img of images) {
    if (fs.existsSync(img.in)) {
      await sharp(img.in)
        .resize({ width: img.width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(img.out);
      console.log(`Optimized ${img.in} to ${img.out}`);
    }
  }
}

optimizeImages().catch(console.error);
