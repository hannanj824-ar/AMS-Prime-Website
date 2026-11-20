const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    name: 'school-uniform.jpg',
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'school-tshirt.jpg',
    url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'school-pants.jpg',
    url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'company-uniform.jpg',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'cargo-pants.jpg',
    url: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'industrial-coverall.jpg',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'safety-vest.jpg',
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'safety-shoes.jpg',
    url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'safety-helmet.jpg',
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'safety-belt.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'chef-uniform.jpg',
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'chef-coat.jpg',
    url: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'table-napkin.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'graduation-gown.jpg',
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'hero-banner.jpg',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85'
  },
  {
    name: 'about-facility.jpg',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'about-sharjah.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'custom-embroidery.jpg',
    url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80'
  }
];

const destDir = path.join(__dirname, '..', 'assets', 'images');

function download(url, dest, callback) {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      // Follow redirect
      file.close();
      fs.unlink(dest, () => {});
      return download(response.headers.location, dest, callback);
    }
    if (response.statusCode !== 200) {
      file.close();
      fs.unlink(dest, () => {});
      return callback(new Error(`Failed with status ${response.statusCode} for ${url}`));
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  }).on('error', (err) => {
    file.close();
    fs.unlink(dest, () => {});
    callback(err);
  });
}

async function run() {
  console.log(`Starting download of ${images.length} images...`);
  for (const img of images) {
    const dest = path.join(destDir, img.name);
    await new Promise((resolve) => {
      download(img.url, dest, (err) => {
        if (err) {
          console.error(`Error downloading ${img.name}:`, err.message);
        } else {
          const stats = fs.statSync(dest);
          console.log(`✔ Downloaded ${img.name} (${(stats.size / 1024).toFixed(1)} KB)`);
        }
        resolve();
      });
    });
  }
  console.log('Finished downloading images.');
}

run();
