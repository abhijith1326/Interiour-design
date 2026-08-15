import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\010e10a2-45c6-415d-ba55-2c96172c16f0';
const destDir = 'd:\\Interiour design\\public\\images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.endsWith('.png')) {
    const cleanName = file.replace(/_\d+\.png$/, '.png');
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, cleanName));
    console.log(`Copied ${file} -> ${cleanName}`);
  }
});
