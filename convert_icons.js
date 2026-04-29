const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const filesToConvert = [
  'favicon.png',
  'brand_logo.png'
];

async function convert() {
  for (const file of filesToConvert) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.png', '.webp'));

    if (fs.existsSync(inputPath)) {
      console.log(`Converting ${file} to webp...`);
      await sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(outputPath);
      console.log(`Saved to ${path.basename(outputPath)}`);
    } else {
      console.log(`File not found: ${file}`);
    }
  }
}

convert().catch(console.error);
