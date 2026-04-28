const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, 'public', 'projects');
const files = ['cinemaflow_premium.png', 'trev_premium.png', 'ecommerce_premium.png'];

async function convert() {
  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace('.png', '.webp'));
    
    if (fs.existsSync(input)) {
      console.log(`Converting ${file} to webp...`);
      await sharp(input)
        .webp({ quality: 80 })
        .toFile(output);
      console.log(`Saved ${output}`);
    } else {
      console.log(`File not found: ${input}`);
    }
  }
}

convert().catch(console.error);
