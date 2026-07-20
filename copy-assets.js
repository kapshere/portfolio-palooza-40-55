const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    // Read and write file instead of copyFileSync to avoid syscall restrictions
    const content = fs.readFileSync(src);
    fs.writeFileSync(dest, content);
  }
}

const itemsToCopy = ['Images', 'KJ', 'blog-posts', 'writings', 'placeholder.svg'];

const sourceDir = '/Users/kj/code/portfolio/portfolio/public';
const destDir = '/Users/kj/code/portfolio/public';

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  itemsToCopy.forEach(item => {
    const src = path.join(sourceDir, item);
    const dest = path.join(destDir, item);
    if (fs.existsSync(src)) {
      copyRecursiveSync(src, dest);
    }
  });
  console.log('Successfully copied specific assets');
} catch (err) {
  console.error('Error copying assets:', err);
  process.exit(1);
}
