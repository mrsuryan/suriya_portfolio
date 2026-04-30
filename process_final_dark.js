const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\cyoga\\.gemini\\antigravity\\brain\\22cd9ea7-5bec-4214-b412-0fa2ab1af008\\eduhub_dark_mockup_v4_1777525193904.webp';
const outputPath = 'c:\\Users\\cyoga\\Desktop\\suriya_portfolio\\public\\projects\\eduhub_premium.webp';

async function processImage() {
  if (fs.existsSync(inputPath)) {
    console.log('Processing final dark mockup...');
    await sharp(inputPath)
      .resize(1200)
      .webp({ quality: 90 })
      .toFile(outputPath);
    console.log('Saved eduhub_premium.webp');
  } else {
    console.log('Input file not found');
  }
}

processImage().catch(console.error);
