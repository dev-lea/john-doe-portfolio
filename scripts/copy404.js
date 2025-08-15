// Copie build/index.html -> build/404.html (SPA fallback pour GitHub Pages)
const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'build', 'index.html');
const dest = path.resolve(__dirname, '..', 'build', '404.html');

try {
  fs.copyFileSync(src, dest);
  console.log('✅ Created build/404.html for GitHub Pages SPA fallback.');
} catch (err) {
  console.error('❌ Could not create 404.html:', err.message);
  process.exit(1);
}
