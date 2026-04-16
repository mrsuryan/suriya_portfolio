const sharp = require('sharp');
const fs = require('fs');

async function optimizeImages() {
  const images = [
    { in: 'public/suriya_img.png', out: 'public/suriya_img.webp', width: 800 },
    { in: 'public/projects/cinemaflow.png', out: 'public/projects/cinemaflow.webp', width: 1000 },
    { in: 'public/projects/trev.png', out: 'public/projects/trev.webp', width: 1000 },
    { in: 'public/projects/ecommerce.png', out: 'public/projects/ecommerce.webp', width: 1000 }
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
