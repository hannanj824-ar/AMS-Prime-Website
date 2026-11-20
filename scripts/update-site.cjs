const fs = require('fs');
const path = require('path');

// 1. UPDATE index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Topbar replacement
indexHtml = indexHtml.replace(
  /<div class="flex items-center gap-4 flex-wrap">[\s\S]*?<div class="flex items-center gap-4">/m,
  `<div class="flex items-center gap-4 flex-wrap">
        <span class="flex items-center gap-1.5 text-slate-200">
          <i class="fas fa-map-marker-alt text-orange-400"></i> Dubai & Sharjah, United Arab Emirates
        </span>
        <span class="hidden sm:inline-block text-slate-500">|</span>
        <span class="flex items-center gap-1.5 text-emerald-400 font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Open 24 Hours / 24/7 Service
        </span>
        <span class="hidden md:inline-block text-slate-500">|</span>
        <span class="text-slate-300">
          <i class="fas fa-user-tie text-orange-400 mr-1"></i> Contact: Mr. Amjad
        </span>
      </div>
      <div class="flex items-center gap-4">`
);

// Topbar telephone & whatsapp links
indexHtml = indexHtml.replace(
  /\+971 50 353 7101/g,
  '+971 050 353 7101'
);

// Brand subtitle
indexHtml = indexHtml.replace(
  /LLC FZE • Dubai, UAE/g,
  'LLC FZE • DUBAI & SHARJAH'
);

// Desktop Navigation Links
indexHtml = indexHtml.replace(
  /<nav class="hidden xl:flex items-center gap-6 text-sm">[\s\S]*?<\/nav>/m,
  `<nav class="hidden xl:flex items-center gap-5 text-sm">
          <a href="index.html" class="nav-link active">Home</a>
          <a href="about.html" target="_blank" rel="noopener noreferrer" class="nav-link">About Us</a>
          <a href="products.html" target="_blank" rel="noopener noreferrer" class="nav-link">All Products</a>
          <a href="workwear-coveralls.html" target="_blank" rel="noopener noreferrer" class="nav-link text-orange-400 font-bold">Coveralls & Workwear</a>
          <a href="promotional-gifts.html" target="_blank" rel="noopener noreferrer" class="nav-link text-amber-400 font-bold">Promotional Giveaways</a>
          <a href="school-uniform.html" target="_blank" rel="noopener noreferrer" class="nav-link">School Uniform</a>
          <a href="company-uniform.html" target="_blank" rel="noopener noreferrer" class="nav-link">Company Uniform</a>
          <a href="safety-products.html" target="_blank" rel="noopener noreferrer" class="nav-link">Safety PPE</a>
          <a href="security-uniform.html" target="_blank" rel="noopener noreferrer" class="nav-link">Security</a>
          <a href="contact.html" target="_blank" rel="noopener noreferrer" class="nav-link">Contact Us</a>
        </nav>`
);

// Mobile Drawer Links
indexHtml = indexHtml.replace(
  /<div id="mobileMenuDrawer" class="hidden xl:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2">[\s\S]*?<div class="pt-4 border-t border-slate-800 flex flex-col gap-2">/m,
  `<div id="mobileMenuDrawer" class="hidden xl:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2">
      <a href="index.html" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Home</a>
      <a href="about.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">About Us</a>
      <a href="products.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">All Products</a>
      <a href="workwear-coveralls.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-orange-400 font-bold rounded-lg bg-slate-800">Coveralls & Workwear</a>
      <a href="promotional-gifts.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-amber-400 font-bold rounded-lg bg-slate-800">Promotional Giveaways</a>
      <a href="promotional-boxes.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-slate-300 font-medium rounded-lg hover:bg-slate-800 pl-6">↳ Custom Gift Boxes</a>
      <a href="promotional-keychains.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-slate-300 font-medium rounded-lg hover:bg-slate-800 pl-6">↳ Engraved Keychains</a>
      <a href="promotional-bottles.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-slate-300 font-medium rounded-lg hover:bg-slate-800 pl-6">↳ Thermal Water Bottles</a>
      <a href="promotional-caps.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-slate-300 font-medium rounded-lg hover:bg-slate-800 pl-6">↳ 3D Embroidered Caps</a>
      <a href="school-uniform.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">School Uniform</a>
      <a href="company-uniform.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Company Uniform</a>
      <a href="safety-products.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Safety Products</a>
      <a href="security-uniform.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Security Uniform</a>
      <a href="sports-uniform.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Sports Kits</a>
      <a href="jackets.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Outerwear Jackets</a>
      <a href="tshirts-polo.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Polo T-Shirts</a>
      <a href="chef-uniform.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Chef Uniform & Aprons</a>
      <a href="graduation-gown.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Graduation Gown</a>
      <a href="contact.html" target="_blank" rel="noopener noreferrer" class="block py-2 px-3 text-white font-medium rounded-lg hover:bg-slate-800 hover:text-orange-400">Contact Us</a>
      <div class="pt-4 border-t border-slate-800 flex flex-col gap-2">`
);

// 14 Category Cards HTML
const categoryCardsHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        
        <!-- Category 1: School Uniforms -->
        <a href="school-uniform.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-school-uniforms.jpg" alt="School Uniforms" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 01</span>
              <h3 class="text-lg font-bold mt-1">School Uniforms</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Complete school blazers, skirts, pinafores, classroom polos, and formal trousers crafted with stain-resistant twill.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated School Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 2: Corporate Uniforms -->
        <a href="company-uniform.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-corporate-uniforms.jpg" alt="Company Uniforms" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 02</span>
              <h3 class="text-lg font-bold mt-1">Company Uniforms</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Executive business suits, tailored blazers, formal oxfords, and front-desk corporate apparel with fine chest embroidery.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Corporate Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 3: Flame-Resistant Coveralls -->
        <a href="workwear-coveralls.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-orange-500/40 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-workwear-coveralls.jpg" alt="Industrial Coveralls" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 03 • Amjad Garments</span>
              <h3 class="text-lg font-bold mt-1">FR Coveralls & Workwear</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Flame-resistant 100% cotton drill boiler suits, multi-pocket cargo work pants, and utility work shirts for oil, gas & marine.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Coveralls Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 4: Safety Products & PPE -->
        <a href="safety-products.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-safety-vests.jpg" alt="Industrial Safety Products" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 04</span>
              <h3 class="text-lg font-bold mt-1">Safety Products & PPE</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              EN ISO 20471 hi-vis vests, steel-toe boots, CE safety helmets, fall-arrest harnesses, and industrial gloves.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Safety Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 5: Custom Polo T-Shirts -->
        <a href="tshirts-polo.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-polo-tshirts.jpg" alt="Polo T-Shirts" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 05</span>
              <h3 class="text-lg font-bold mt-1">Polo T-Shirts</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              220 GSM combed cotton piqué polo shirts and dry-fit crewneck tees with front/back embroidery and company screen prints.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Polo Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 6: Outerwear Bomber Jackets -->
        <a href="jackets.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-outerwear-jacket.jpg" alt="Outerwear Jackets" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 06</span>
              <h3 class="text-lg font-bold mt-1">Outerwear Jackets</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Corporate leatherette & matte nylon bomber jackets, windbreakers, and fleece zip jackets for delivery fleets and executives.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Jackets Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 7: Security Guard Tactical Uniforms -->
        <a href="security-uniform.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-security-uniforms.jpg" alt="Security Guard Uniforms" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 07</span>
              <h3 class="text-lg font-bold mt-1">Security Uniforms</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              SIRA-compliant guard shirts with shoulder epaulettes, tactical ripstop trousers, metal badges, and duty gear accessories.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Security Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 8: Custom Sports Jerseys & Team Kits -->
        <a href="sports-uniform.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-sports-jerseys.jpg" alt="Athletic Sports Jerseys" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 08</span>
              <h3 class="text-lg font-bold mt-1">Sports Jerseys & Kits</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Full dye-sublimation athletic jerseys, football kits, basketball uniforms, and dry-fit sports sets with player names.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Sports Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 9: Chef Uniforms & Aprons -->
        <a href="chef-uniform.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-hospitality-uniforms.jpg" alt="Chef Uniforms" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 09</span>
              <h3 class="text-lg font-bold mt-1">Chef & Aprons</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Master double-breasted chef coats, barista denim/leather cross-back aprons, server shirts, and banquet table napkins.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Chef Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 10: Academic Graduation Gowns -->
        <a href="graduation-gown.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/graduation-gown.jpg" alt="Graduation Gowns" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 px-2 py-0.5 rounded">Category 10</span>
              <h3 class="text-lg font-bold mt-1">Graduation Gowns</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              University commencement robes, mortarboards with year-charms, velvet doctoral hoods, and custom graduation stoles.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Graduation Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 11: Corporate Gift Boxes -->
        <a href="promotional-boxes.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-amber-500/40 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/promotional-boxes.jpg" alt="Corporate Gift Boxes" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">Category 11 • Promotional</span>
              <h3 class="text-lg font-bold mt-1">Corporate Gift Boxes</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Luxury rigid gift boxes with hot-stamped foil branding, magnetic closures, and custom EVA foam inserts for VIP hampers.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Gift Boxes Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 12: Custom Engraved Keychains -->
        <a href="promotional-keychains.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/promotional-keychains.jpg" alt="Laser Engraved Keychains" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">Category 12 • Promotional</span>
              <h3 class="text-lg font-bold mt-1">Laser-Engraved Keychains</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              Fiber laser engraved metal tags, hand-stitched PU leather keyrings, and opener keychains for corporate events.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Keychains Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 13: Insulated Water Bottles -->
        <a href="promotional-bottles.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/promotional-bottles.jpg" alt="Thermal Water Bottles" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">Category 13 • Promotional</span>
              <h3 class="text-lg font-bold mt-1">Thermal Water Bottles</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              304 stainless steel vacuum-insulated thermal sports flasks keeping drinks cold 24h with UV color print or laser engraving.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Bottles Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

        <!-- Category 14: 3D Embroidered Caps -->
        <a href="promotional-caps.html" target="_blank" rel="noopener noreferrer" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col">
          <div class="h-60 overflow-hidden relative">
            <div class="ams-prime-watermark">
              <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
              <span class="ams-wm-text">AMS PRIME LLC</span>
              <span class="ams-wm-dot"></span>
              <span class="ams-wm-sub">DUBAI • SHARJAH</span>
            </div>
            <img src="assets/images/real-promotional-caps.jpg" alt="3D Embroidered Caps" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 px-2 py-0.5 rounded">Category 14 • Promotional</span>
              <h3 class="text-lg font-bold mt-1">3D Embroidered Caps</h3>
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              6-panel heavy brushed cotton twill caps and mesh trucker hats featuring 3D puff embroidery and contrast sandwich visors.
            </p>
            <div class="flex items-center justify-between text-xs font-bold text-orange-600 pt-3 border-t border-slate-100">
              <span>Dedicated Caps Page</span>
              <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </a>

      </div>
`;

// Replace Categories Grid in index.html
indexHtml = indexHtml.replace(
  /<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">[\s\S]*?<\/div>(\s*<\/div>\s*<\/section>\s*<!-- FEATURED PRODUCTS SECTION -->)/m,
  categoryCardsHTML + '$1'
);

// Footer replacement
indexHtml = indexHtml.replace(
  /<footer class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 mt-auto">[\s\S]*?<\/footer>/m,
  `<footer class="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="brand-logo-text text-2xl font-black text-white flex items-center gap-2 mb-3">
            <span class="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-base">
              <i class="fas fa-vest"></i>
            </span>
            AMS <span class="text-orange-500">PRIME</span> LLC FZE
          </div>
          <div class="text-xs text-amber-400 font-bold mb-2">Amjad Garments & AMS Prime Wholesale Division</div>
          <p class="text-xs text-slate-400 leading-relaxed mb-6">
            Leading manufacturer and supplier of institutional school uniforms, corporate business wear, flame-resistant workwear coveralls, industrial PPE, and customized promotional gifts. Serving Dubai, Sharjah, and the GCC with 24/7 client support.
          </p>
          <div class="space-y-2.5 text-xs text-slate-300">
            <div class="flex items-center gap-2.5">
              <i class="fas fa-map-marker-alt text-orange-500 w-4"></i>
              <span>Dubai & Sharjah, United Arab Emirates</span>
            </div>
            <div class="flex items-center gap-2.5">
              <i class="fas fa-user-tie text-orange-500 w-4"></i>
              <span>Representative: <strong>Mr. Amjad</strong></span>
            </div>
            <div class="flex items-center gap-2.5">
              <i class="fas fa-phone-alt text-orange-500 w-4"></i>
              <a href="tel:+9710503537101" class="hover:text-orange-400 font-semibold transition-colors">+971 050 353 7101</a>
              <span class="text-slate-500">|</span>
              <a href="tel:+971564531486" class="hover:text-orange-400 font-semibold transition-colors">+971 56 453 1486</a>
            </div>
            <div class="flex items-center gap-2.5">
              <i class="fab fa-whatsapp text-emerald-400 w-4 text-sm"></i>
              <a href="https://wa.me/971503537101" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 font-semibold transition-colors">+971 050 353 7101 (WhatsApp 24/7)</a>
            </div>
            <div class="flex items-center gap-2.5">
              <i class="fas fa-envelope text-orange-500 w-4"></i>
              <a href="mailto:amjad@amsprimellc.com" class="hover:text-orange-400">amjad@amsprimellc.com</a>
              <span class="text-slate-500">|</span>
              <a href="mailto:info@amsprimellc.com" class="hover:text-orange-400">info@amsprimellc.com</a>
            </div>
            <div class="flex items-center gap-2.5">
              <i class="fas fa-globe text-orange-500 w-4"></i>
              <a href="https://www.amsglobals.com" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400">www.amsglobals.com</a>
            </div>
          </div>
        </div>

        <!-- Dedicated Pages -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2.5">Quick Pages</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="index.html" class="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="about.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">About Us</a></li>
            <li><a href="products.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">All Products</a></li>
            <li><a href="workwear-coveralls.html" target="_blank" rel="noopener noreferrer" class="text-orange-400 font-bold hover:underline">Coveralls & Workwear</a></li>
            <li><a href="promotional-gifts.html" target="_blank" rel="noopener noreferrer" class="text-amber-400 font-bold hover:underline">Promotional Hub</a></li>
            <li><a href="contact.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Contact Us</a></li>
            <li><a href="cart.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Quote Cart / RFQ</a></li>
          </ul>
        </div>

        <!-- Uniform Categories -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2.5">Uniforms & Wear</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="school-uniform.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">School Uniform</a></li>
            <li><a href="company-uniform.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Company Uniform</a></li>
            <li><a href="security-uniform.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Security Uniform</a></li>
            <li><a href="sports-uniform.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Sports Kits</a></li>
            <li><a href="jackets.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Outerwear Jackets</a></li>
            <li><a href="tshirts-polo.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Polo T-Shirts</a></li>
            <li><a href="chef-uniform.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Chef Uniform & Aprons</a></li>
            <li><a href="graduation-gown.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Graduation Gown</a></li>
          </ul>
        </div>

        <!-- Promotional & Safety -->
        <div>
          <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-2.5">Promotional & Safety</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="promotional-boxes.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Corporate Gift Boxes</a></li>
            <li><a href="promotional-keychains.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Engraved Keychains</a></li>
            <li><a href="promotional-bottles.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Thermal Water Bottles</a></li>
            <li><a href="promotional-caps.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">3D Embroidered Caps</a></li>
            <li><a href="safety-products.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">High-Vis Safety Vests</a></li>
            <li><a href="safety-products.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Safety Shoes & Boots</a></li>
            <li><a href="safety-products.html" target="_blank" rel="noopener noreferrer" class="hover:text-orange-400 transition-colors">Safety Helmets & Belts</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 <strong>AMS PRIME LLC FZE & Amjad Garments</strong>. Dubai & Sharjah, United Arab Emirates. All rights reserved.
        </div>
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-1 text-slate-400"><i class="fas fa-check text-emerald-400"></i> Direct Manufacturer</span>
          <span class="flex items-center gap-1 text-slate-400"><i class="fas fa-check text-emerald-400"></i> Official RFQ Quotes</span>
          <span class="flex items-center gap-1 text-slate-400"><i class="fas fa-check text-emerald-400"></i> 24/7 Availability</span>
        </div>
      </div>
    </div>
  </footer>`
);

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Successfully updated index.html!');
