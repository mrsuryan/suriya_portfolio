const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = 'c:\\Users\\cyoga\\Desktop\\suriya_portfolio\\public';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

async function convertAll() {
  const allFiles = getAllFiles(publicDir);
  const pngFiles = allFiles.filter(file => file.endsWith('.png'));

  console.log(`Found ${pngFiles.length} PNG files to convert.`);

  for (const file of pngFiles) {
    const output = file.replace('.png', '.webp');
    console.log(`Converting ${file} -> ${output}`);
    await sharp(file)
      .webp({ quality: 85 })
      .toFile(output);
  }
  console.log('Conversion complete!');
}

convertAll().catch(console.error);
