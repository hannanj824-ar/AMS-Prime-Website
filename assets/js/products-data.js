// AMS PRIME LLC FZE & AMJAD GARMENTS - Master Product Catalog
// Contact: Mr. Amjad (amjad@amsprimellc.com | info@amsprimellc.com)
// Phone / WhatsApp: +971 050 353 7101 | +971 56 453 1486
// Locations: Dubai & Sharjah, United Arab Emirates
// Website: www.amsglobals.com

const PRODUCTS_DATA = [
  // 1. SCHOOL UNIFORMS
  {
    id: "school-uniform",
    category: "school-uniform",
    categoryName: "School Uniform",
    name: "Classic School Uniform Set & Student Wear",
    subtitle: "Tailored Blazer, Shirt & Pleated Skirt / Trousers",
    priceQuote: "Request a Quote",
    image: "assets/images/real-school-uniforms.jpg",
    badge: "Official Supply",
    shortDesc: "Complete institutional school uniform ensemble featuring breathable, wrinkle-resistant twill fabric designed for active school days.",
    fullDesc: "Designed for premium educational institutions across Dubai, Sharjah, and the GCC. Combines durability, elegance, and day-long student comfort. Crafted from high-density poly-cotton and anti-pilling fabric to endure daily wear and frequent laundry cycles. Includes custom school crest embroidery, reinforced stress seams, and adjustable waistbands.",
    features: [
      "Wrinkle-resistant & anti-pilling premium fabric",
      "Reinforced double-stitched stress seams",
      "Breathable poly-cotton blend tailored for UAE climate",
      "Custom school logo embroidery & color piping available",
      "Available for Kindergarten, Primary, and Secondary grades"
    ],
    fabric: "65% Polyester, 35% Combed Cotton / Wool-touch Twill",
    sizes: ["24", "26", "28", "30", "32", "34", "36", "38", "40", "Custom Bespoke"],
    colors: ["Navy Blue", "Royal Blue", "Maroon", "Charcoal Gray", "Beige", "White"],
    minOrderQty: "50 sets (Bulk institutional supply available)"
  },
  {
    id: "school-tshirt",
    category: "school-uniform",
    categoryName: "School Uniform",
    name: "School Sports & Activity Polo T-Shirt",
    subtitle: "Breathable Piqué Cotton & Dry-Fit PE Uniform",
    priceQuote: "Request a Quote",
    image: "assets/images/school-tshirt.jpg",
    badge: "High Durability",
    shortDesc: "Ultra-breathable sports and classroom polo shirt engineered with moisture-wicking yarns and color-fast dyes.",
    fullDesc: "Engineered specifically for school sports days, physical education, and everyday warm-weather wear. Made from high-grade combed cotton piqué or lightweight performance dry-fit polyester that allows optimal ventilation. Features anti-odor technology and shape-retaining ribbed collars.",
    features: [
      "Quick-dry moisture management fabric",
      "Durable non-roll ribbed collar & cuffs",
      "Color-fast dyes resistant to sun fading and industrial washes",
      "Side vents for maximum freedom of motion",
      "Custom multi-color screen printing & embroidery"
    ],
    fabric: "100% Combed Cotton Piqué or 180 GSM Performance Poly-Mesh",
    sizes: ["XS", "S", "M", "L", "XL", "Youth 4-16"],
    colors: ["White", "Navy Blue", "Sky Blue", "Yellow", "Emerald Green", "Red"],
    minOrderQty: "100 pieces"
  },
  {
    id: "school-pants",
    category: "school-uniform",
    categoryName: "School Uniform",
    name: "Tailored School Formal Trousers",
    subtitle: "Durable Flat-Front & Pleated Uniform Pants",
    priceQuote: "Request a Quote",
    image: "assets/images/school-pants.jpg",
    badge: "Reinforced",
    shortDesc: "Smart, comfortable school trousers with stain-release finish and reinforced knee lining for active youngsters.",
    fullDesc: "Our school trousers strike the perfect balance between smart formal appearance and everyday resilience. Fitted with an internal adjustable waistband to accommodate growing children, deep secure pockets, and heavy-duty YKK zipper closures.",
    features: [
      "Stain-resistant Teflon fabric shield",
      "Internal elasticized button-tab adjustable waist",
      "Reinforced double-knee construction for extended longevity",
      "Twin slanted front pockets and secure back welt pocket",
      "Pre-hemmed with generous let-down allowance"
    ],
    fabric: "65% Polyester, 35% Viscose Durable Twill",
    sizes: ["Age 4-6", "Age 7-9", "Age 10-12", "Age 13-16", "Adult 28-42"],
    colors: ["Navy Blue", "Dark Gray", "Black", "Khaki / Sand"],
    minOrderQty: "50 pairs"
  },

  // 2. CORPORATE & COMPANY UNIFORMS
  {
    id: "company-uniform",
    category: "company-uniform",
    categoryName: "Company Uniform",
    name: "Executive Corporate Suit, Blazer & Office Shirts",
    subtitle: "Premium Tailored Office & Front-Desk Business Uniform",
    priceQuote: "Request a Quote",
    image: "assets/images/real-corporate-uniforms.jpg",
    badge: "Executive Cut",
    shortDesc: "Prestigious corporate executive shirts, blazers, and formal trousers tailored to elevate your corporate brand identity.",
    fullDesc: "Handcrafted for corporate headquarters, financial institutions, airline staff, luxury hospitality, and front-desk professionals in Dubai and Sharjah. Made from premium tropical-weight wool-blend fabrics with silken lining, structured shoulders, and bespoke lapels.",
    features: [
      "Premium wrinkle-resistant tropical wool-blend fabric",
      "Breathable interior lining with internal passport pockets",
      "Single and double-breasted custom tailoring cuts",
      "Fine corporate logo breast-pocket embroidery",
      "Matching trousers and tailored pencil skirts available"
    ],
    fabric: "70% Fine Wool Blend, 28% Polyester, 2% Spandex Stretch",
    sizes: ["36R - 52R (Men) / 32 - 48 (Women) / Made-to-Measure"],
    colors: ["Midnight Navy", "Charcoal Gray", "Jet Black", "Steel Gray", "Sky Blue"],
    minOrderQty: "25 sets"
  },
  {
    id: "polo-tshirts",
    category: "tshirts-polo",
    categoryName: "T-Shirts & Polos",
    name: "Custom Branded Corporate & Work Polo Shirts",
    subtitle: "Heavyweight Piqué Polo with Front & Back Logo Embroidery",
    priceQuote: "Request a Quote",
    image: "assets/images/real-polo-tshirts.jpg",
    badge: "Bestseller",
    shortDesc: "Versatile corporate and work polo shirts available in navy, black, maroon, and white with precision 3D chest & back embroidery.",
    fullDesc: "The quintessential uniform staple for corporate staff, retail chains, hospitality crews, and events teams. Blends smart-casual presentation with high-motion comfort. Built with reinforced collar stands that retain shape after 60°C washes, reinforced plackets, and dyed-to-match buttons.",
    features: [
      "Heavyweight 220 GSM combed piqué cotton",
      "Precision front chest embroidery + back company lettering",
      "Industrial wash tested to withstand 60°C commercial laundering",
      "Non-curl ribbed collar and sleeve cuffs",
      "Available in coordinated male and female tailored silhouettes"
    ],
    fabric: "100% Combed Cotton or 65/35 Easy-Care Poly-Cotton",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: ["Navy Blue", "Jet Black", "Maroon", "Royal Blue", "Forest Green", "White"],
    minOrderQty: "50 pieces"
  },
  {
    id: "outerwear-jacket",
    category: "jackets",
    categoryName: "Outerwear & Jackets",
    name: "Corporate Bomber Jacket & Delivery Windbreaker",
    subtitle: "Insulated Water-Resistant Staff Jacket with Ribbed Trim",
    priceQuote: "Request a Quote",
    image: "assets/images/real-outerwear-jacket.jpg",
    badge: "Weatherproof",
    shortDesc: "Sleek full-zip corporate bomber jackets and team windbreakers engineered with water-repellent shell and thermal lining.",
    fullDesc: "Designed for corporate delivery teams, logistics coordinators, field supervisors, and outdoor corporate events. Features durable matte nylon or coated microfiber shell, heavy-duty zipper closures, twin welt side pockets, interior device pockets, and ribbed hem and cuffs.",
    features: [
      "Water-repellent and windproof outer shell",
      "Comfortable breathable quilted or mesh inner lining",
      "Heavy-duty front brass or nylon coil zipper",
      "Custom brand chest patch or direct digitized embroidery",
      "Ribbed collar, cuffs, and waist band for snug thermal fit"
    ],
    fabric: "100% Coated Nylon / High-Density Microfiber Shell",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: ["Midnight Black", "Deep Navy", "Olive Drab", "Charcoal Gray"],
    minOrderQty: "30 pieces"
  },

  // 3. WORKWEAR & COVERALLS
  {
    id: "workwear-coveralls",
    category: "workwear-coveralls",
    categoryName: "Workwear & Coveralls",
    name: "Flame-Resistant Industrial Coverall / Boiler Suit",
    subtitle: "Heavy-Duty Oil & Gas Workwear with 3M Hi-Vis Reflective Bands",
    priceQuote: "Request a Quote",
    image: "assets/images/real-workwear-coveralls.jpg",
    badge: "Flame-Resistant",
    shortDesc: "Rugged one-piece industrial boiler suits and matching work shirt & pant combinations for oil & gas, marine, and engineering sites.",
    fullDesc: "Engineered to meet the stringent demands of oil & gas facilities, fabrication yards, aviation maintenance, and heavy construction in the UAE. Made from heavy-duty cotton drill or certified flame-retardant (FR) treated fabric. Features 50mm high-visibility reflective bands on shoulders, arms, and legs, two-way brass zippers, and action back pleats.",
    features: [
      "EN ISO compliant high-visibility 3M reflective tape",
      "Flame-resistant and anti-static fabric options",
      "Two-way concealed heavy brass zipper with snap storm flap",
      "Action-back pleats and elasticized waist for maximum mobility",
      "Multiple tool pockets, chest pockets with flaps, and rule pocket"
    ],
    fabric: "100% Heavy Cotton Drill (240-280 GSM) or FR Treated Twill",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    colors: ["Navy Blue", "Hi-Vis Orange", "Petrol Red", "Royal Blue", "Charcoal Gray"],
    minOrderQty: "50 units"
  },
  {
    id: "cargo-pants",
    category: "workwear-coveralls",
    categoryName: "Workwear & Coveralls",
    name: "Heavy-Duty Multi-Pocket Cargo Work Pants",
    subtitle: "Tactical & Industrial Workwear with Reinforced Knees",
    priceQuote: "Request a Quote",
    image: "assets/images/cargo-pants.jpg",
    badge: "Heavy Duty",
    shortDesc: "Tough ripstop cargo trousers engineered with 8 utility tool pockets, hammer loops, and knee pad compartments.",
    fullDesc: "Built for engineers, technicians, field operatives, and warehouse managers who demand unyielding durability. Manufactured from high-tensile poly-cotton ripstop fabric that stops tears in their tracks. Reinforced with triple-stitched seams, heavy-duty belt loops, and multi-compartment cargo pockets with hook-and-loop flaps.",
    features: [
      "High-tensile ripstop fabric with water & oil repellent finish",
      "8 functional utility pockets with reinforced Velcro flaps",
      "Ergonomic articulated knees with internal knee-pad insert pockets",
      "Triple-needle stitched crotch, inseam, and outer seams",
      "Heavy-duty brass YKK zipper and unbreakable button closure"
    ],
    fabric: "65% Polyester, 35% Heavyweight Cotton Ripstop (260 GSM)",
    sizes: ["30", "32", "34", "36", "38", "40", "42", "44", "46"],
    colors: ["Khaki / Sand", "Tactical Navy", "Stealth Black", "Olive Green"],
    minOrderQty: "50 pairs"
  },

  // 4. INDUSTRIAL SAFETY & PPE
  {
    id: "safety-vest",
    category: "safety-products",
    categoryName: "Safety Products (PPE)",
    name: "High-Visibility Reflective Safety Vest",
    subtitle: "EN ISO 20471 Certified Class 2 PPE Safety Waistcoat",
    priceQuote: "Request a Quote",
    image: "assets/images/real-safety-vests.jpg",
    badge: "EN ISO 20471",
    shortDesc: "Fluorescent safety waistcoat featuring dual horizontal and vertical 2-inch silver reflective micro-prismatic bands with company logo.",
    fullDesc: "Essential personal protective equipment (PPE) for construction sites, logistics yards, traffic management, and airport ground handling across the UAE. Crafted from ultra-lightweight breathable fluorescent polyester mesh or solid fabric. Features a front heavy-duty zip closure, transparent ID card pouch, radio clip loop, and twin lower utility pockets.",
    features: [
      "Certified to EN ISO 20471:2013 Class 2 standards",
      "50mm premium glass-bead reflective tape with high retroreflection",
      "Dual chest mic loops, clear PVC ID badge holder, and phone pocket",
      "Reinforced black trim binding preventing fraying and dirt accumulation",
      "High airflow mesh design ideal for high-temperature Middle East conditions"
    ],
    fabric: "100% Breathable Fluorescent Knitted / Mesh Polyester (120 GSM)",
    sizes: ["M", "L", "XL", "2XL", "3XL", "Universal Fit"],
    colors: ["Neon Fluorescent Yellow/Lime", "Hi-Vis Safety Orange", "Two-Tone Yellow/Navy"],
    minOrderQty: "100 units"
  },
  {
    id: "safety-gloves",
    category: "safety-products",
    categoryName: "Safety Products (PPE)",
    name: "Industrial Safety Gloves & Accessories",
    subtitle: "Cut-Resistant, Nitrile Coated & Heavy-Duty Leather Rigger Gloves",
    priceQuote: "Request a Quote",
    image: "assets/images/safety-gloves.jpg",
    badge: "EN 388 Certified",
    shortDesc: "Comprehensive hand protection range: cut-resistant level 5 gloves, oil-repellent sandy nitrile dipped gloves, and heavy leather riggers.",
    fullDesc: "Engineered to protect workforce hands from mechanical risks, abrasions, cuts, punctures, and chemical splashes on site. Ergonomically shaped to minimize hand fatigue while maintaining dexterity for precision assembly and tool handling.",
    features: [
      "Meets EN 388 mechanical risk protection standards (4543C rated)",
      "Breathable seamless knit liner for all-day hand cooling",
      "Reinforced thumb crotch and knuckle guards on impact series",
      "Oil-resistant textured palm coating ensuring firm grip",
      "Available in bulk carton packs for contractor fleets"
    ],
    fabric: "HPPE Knitted Liner / Sandy Nitrile / Cow split leather",
    sizes: ["Size 8 (M)", "Size 9 (L)", "Size 10 (XL)", "Size 11 (2XL)"],
    colors: ["Hi-Vis Yellow / Black", "Gray / Blue Nitrile", "Natural Leather"],
    minOrderQty: "120 pairs"
  },
  {
    id: "safety-shoes",
    category: "safety-products",
    categoryName: "Safety Products (PPE)",
    name: "Steel-Toe Puncture-Resistant Safety Boots",
    subtitle: "CE EN ISO 20345 S3 SRC Certified Protective Footwear",
    priceQuote: "Request a Quote",
    image: "assets/images/safety-shoes.jpg",
    badge: "CE S3 Certified",
    shortDesc: "Rugged waterproof leather safety boots equipped with 200J steel toe cap, anti-perforation steel midsole, and SRC slip resistance.",
    fullDesc: "Engineered for maximum foot safety on industrial job sites, fabrication plants, and heavy warehouses. Crafted from genuine full-grain water-repellent cowhide leather with a moisture-wicking breathable lining. Features a shock-absorbing dual-density polyurethane sole resistant to oils, acids, fuel, and extreme temperatures up to 300°C.",
    features: [
      "200 Joule impact-resistant steel toe cap and puncture-proof midsole",
      "SRC rated slip resistance on ceramic tile and steel surfaces",
      "Shock-absorbing anti-fatigue PU insole for all-day standing comfort",
      "Oil, fuel, acid, and heat-resistant dual density PU/TPU outsole",
      "Padded collar and bellows tongue to keep out dust and debris"
    ],
    fabric: "Full-Grain Embossed Leather with Dual Density Polyurethane Sole",
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46", "EU 47"],
    colors: ["Industrial Black", "Earth Brown", "Wheat / Desert Tan"],
    minOrderQty: "25 pairs"
  },
  {
    id: "safety-helmet",
    category: "safety-products",
    categoryName: "Safety Products (PPE)",
    name: "Industrial Hard Hat Safety Helmet",
    subtitle: "ANSI Z89.1 & EN 397 Approved with Ratchet Suspension",
    priceQuote: "Request a Quote",
    image: "assets/images/safety-helmet.jpg",
    badge: "ANSI / EN 397",
    shortDesc: "High-density polyethylene (HDPE) protective safety helmet with 6-point textile suspension, wheel ratchet adjustment, and sweatband.",
    fullDesc: "Provides dependable top-impact protection for engineers, scaffolding crews, and site supervisors. Manufactured from high-impact virgin HDPE with UV stabilizer additives. Equipped with an ergonomic wheel-ratchet headband for instantaneous size adjustment, plush brow sweatband, and universal slots for ear muffs and face visors.",
    features: [
      "Certified to ANSI Z89.1 Type 1 Class E, G & C and EN 397 standards",
      "6-point suspension harness distributing impact energy evenly",
      "Wheel ratchet knob mechanism for precision one-handed fitting",
      "Universal 30mm slots to attach earmuffs and visor brackets",
      "Includes adjustable chin strap with emergency breakaway release"
    ],
    fabric: "High-Density Virgin UV-Stabilized Polyethylene (HDPE)",
    sizes: ["Standard Adjustable (53 cm - 64 cm head circumference)"],
    colors: ["Safety Yellow", "Signal White", "Safety Blue", "Safety Red", "Orange", "Green"],
    minOrderQty: "50 units"
  },
  {
    id: "safety-belt",
    category: "safety-products",
    categoryName: "Safety Products (PPE)",
    name: "Full-Body Fall Protection Safety Harness",
    subtitle: "EN 361 & OSHA Compliant High-Altitude Fall Arrest System",
    priceQuote: "Request a Quote",
    image: "assets/images/safety-belt.jpg",
    badge: "EN 361 Certified",
    shortDesc: "Ergonomic full-body safety harness with dorsal D-ring, shock-absorbing energy lanyard, and quick-connect mating buckles.",
    fullDesc: "Engineered for scaffolding, steel erection, telecommunications towers, and high-altitude exterior facade work. Built with 44mm high-tenacity polyester webbing with contrasting stitching for instant pre-use inspection. Features an ergonomic dorsal D-ring for fall arrest, sternal attachment loops, and fall indicators.",
    features: [
      "Meets EN 361:2002 and OSHA fall-arrest compliance standards",
      "High-tenacity 44mm polyester webbing with 25kN minimum break strength",
      "Rear dorsal forged alloy-steel D-ring and dual front attachment loops",
      "Includes 1.8m shock-absorbing lanyard with scaffold carabiner hooks",
      "Fully adjustable chest, shoulder, and thigh straps with quick-release buckles"
    ],
    fabric: "High-Tenacity Polyester Webbing with Forged Alloy Steel Hardware",
    sizes: ["Fully Adjustable Universal Size (M - 2XL)"],
    colors: ["High-Visibility Neon Green & Black", "Safety Orange & Blue"],
    minOrderQty: "20 units"
  },

  // 5. CHEF & HOSPITALITY UNIFORMS
  {
    id: "chef-uniform",
    category: "chef-uniform",
    categoryName: "Chef Uniform",
    name: "Master Executive Chef & Hospitality Service Uniform Suite",
    subtitle: "Complete Culinary & Front-of-House Ensemble with Coat, Apron & Staff Shirts",
    priceQuote: "Request a Quote",
    image: "assets/images/real-hospitality-uniforms.jpg",
    badge: "5-Star Hotel Grade",
    shortDesc: "Full professional kitchen & dining room hospitality suite: executive chef jackets, barista aprons, service shirts, and manager polos.",
    fullDesc: "Designed for luxury hotels, cafes, fine-dining restaurants, and catering brigades across Dubai and Sharjah. Features executive white double-breasted jackets, barista bib aprons with pen slots, stylish cafe shirts, and front-of-house coordinator polos with personalized restaurant logo embroidery.",
    features: [
      "Stain-repellent and grease-resistant breathable poly-cotton twill",
      "Underarm CoolVent™ air mesh panels for heat dispersion",
      "Executive double-breasted closure with interchangeable stud buttons",
      "Left arm thermometer/pen split pocket and apron collar stay tab",
      "Custom multi-color embroidery for restaurant and hotel chains"
    ],
    fabric: "65% Long-Staple Cotton, 35% Polyester Twill (210 GSM)",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colors: ["Classic Kitchen White", "Executive Onyx Black", "Earthy Brown", "Forest Green", "Navy"],
    minOrderQty: "25 sets"
  },
  {
    id: "chef-apron",
    category: "chef-uniform",
    categoryName: "Chef Uniform",
    name: "Handcrafted Denim, Leather & Canvas Work Aprons",
    subtitle: "Artisan Barista, Chef & Bartender Aprons with Solid Brass Buckles",
    priceQuote: "Request a Quote",
    image: "assets/images/real-chef-aprons.jpg",
    badge: "Artisan Series",
    shortDesc: "Luxury cross-back barista and culinary aprons crafted from heavyweight denim, top-grain saddle leather, and organic canvas.",
    fullDesc: "The premier uniform choice for modern specialty coffee shops, cocktail lounges, steakhouses, and culinary artisans. Handcrafted with reinforced rivets at stress points, cross-back straps that eliminate neck strain, genuine brass buckles, chest pen slots, and large kangaroo utility pockets.",
    features: [
      "Heavyweight 12 oz raw indigo denim, genuine leather, and washed canvas",
      "Ergonomic cross-back harness strap system relieving neck pressure",
      "Antique solid brass hardware, swivel clips, and reinforced rivets",
      "Multi-compartment pockets for tongs, thermometer, order pads, and tools",
      "Custom laser-engraved leather brand patch or embroidered insignia"
    ],
    fabric: "12 oz Cotton Denim / Genuine Cowhide Leather / 14 oz Heavy Duck Canvas",
    sizes: ["Standard Adjustable Length (78 cm x 65 cm)", "Long Fit (88 cm x 70 cm)"],
    colors: ["Raw Indigo Denim", "Cognac Saddle Brown Leather", "Olive Military Canvas", "Onyx Black"],
    minOrderQty: "20 pieces"
  },
  {
    id: "chef-coat",
    category: "chef-uniform",
    categoryName: "Chef Uniform",
    name: "Premium Double-Breasted Master Chef Coat",
    subtitle: "Breathable Long & Short Sleeve Kitchen Jacket with French Cuffs",
    priceQuote: "Request a Quote",
    image: "assets/images/chef-coat.jpg",
    badge: "Executive Cut",
    shortDesc: "Elegant double-breasted culinary jacket with mandarin collar, cloth-knot buttons, and sleeve utility pockets.",
    fullDesc: "The hallmark of culinary distinction. Cut with a tailored modern silhouette that looks impeccably sharp on television appearances, open-kitchen pass lines, and dining room guest greetings. Handcrafted with rolled French cuffs, reinforced stitching, and reversible front panels.",
    features: [
      "Reversible double-breasted closure with 10 hand-rolled cloth-knot buttons",
      "Stand-up mandarin collar with soft brushed inner neckband",
      "Dual sleeve thermometer/pen pocket with bar-tack reinforcement",
      "Moisture-wicking back stretch panel for continuous heat regulation",
      "Machine washable with bleach-safe white or color-fast black finishes"
    ],
    fabric: "100% Super-Combed Egyptian Cotton or 60/40 Easy-Iron Twill",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Crisp White with Black Piping", "All Black with Silver Buttons", "Graphite Gray"],
    minOrderQty: "30 pieces"
  },
  {
    id: "table-napkin",
    category: "chef-uniform",
    categoryName: "Chef Uniform & Table Linen",
    name: "Luxury Banquet & Restaurant Cloth Table Napkin",
    subtitle: "Heavyweight Spun Polyester & Damask Satin Linen Napkins",
    priceQuote: "Request a Quote",
    image: "assets/images/table-napkin.jpg",
    badge: "Hospitality Grade",
    shortDesc: "Premium hotel-grade cloth napkins with hemmed borders, superior fold-holding crispness, and soil-release finish.",
    fullDesc: "Supplied to premier hotels, wedding banquet halls, convention centers, and fine-dining restaurants across the United Arab Emirates. Engineered from 100% heavyweight mill-finished spun polyester that combines the luxurious soft touch of Egyptian cotton with the industrial longevity of polyester.",
    features: [
      "Heavyweight 220-240 GSM spun polyester with cotton-soft hand feel",
      "Hemmed merrowed edges preventing unravelling during industrial laundering",
      "Exceptional soil-release technology repelling red wine, grease, and sauces",
      "Holds crisp structural folds: Bishop's Mitre, Pyramid, Crown, and Fan folds",
      "Custom woven jacquard damask patterns or bespoke embroidered monogram"
    ],
    fabric: "100% Spun Polyester (Cotton-touch) or Damask Satin Weave",
    sizes: ["50 cm x 50 cm (20\" x 20\")", "55 cm x 55 cm (22\" x 22\")"],
    colors: ["Pure Hotel White", "Ivory / Champagne", "Burgundy / Maroon", "Midnight Navy", "Black", "Gold"],
    minOrderQty: "200 pieces"
  },

  // 6. SECURITY & TACTICAL UNIFORMS
  {
    id: "security-uniform",
    category: "security-uniform",
    categoryName: "Security Uniform",
    name: "Professional Security Guard Tactical Uniform Set",
    subtitle: "Epaulette Patrol Shirt, Cargo Trousers, Security Badge & Hi-Vis Vest",
    priceQuote: "Request a Quote",
    image: "assets/images/real-security-uniforms.jpg",
    badge: "Tactical Spec",
    shortDesc: "Authoritative security guard uniforms featuring reinforced shoulder epaulettes, dual pleated chest pockets, badge tabs, and tactical trousers.",
    fullDesc: "Supplied to private security companies, commercial facility management providers, VIP guard services, and residential communities in Dubai and Sharjah. Cut with a crisp, authoritative silhouette using ripstop poly-cotton. Includes button-down epaulettes for rank slides, reinforced radio microphone loops, and tailored utility trousers.",
    features: [
      "Reinforced epaulettes for rank slides and radio shoulder clips",
      "Dual pleated box chest pockets with button-down flaps and pen slots",
      "Tough poly-cotton ripstop trousers with deep utility pockets",
      "Custom embroidered security badges and company insignia crests",
      "Coordinated high-visibility patrol security vests and guard windbreakers"
    ],
    fabric: "65% Polyester, 35% Combed Cotton Ripstop (220 GSM)",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    colors: ["Security Navy Blue", "Tactical Black", "Field Khaki", "High-Vis Guard Yellow"],
    minOrderQty: "30 sets"
  },

  // 7. SPORTS KITS & TEAMWEAR
  {
    id: "sports-jersey",
    category: "sports-uniform",
    categoryName: "Sports Kits & Jerseys",
    name: "Custom Athletic Sports Jerseys & Team Kits",
    subtitle: "Sublimated Football, Cricket & Basketball Kits with Player Numbers",
    priceQuote: "Request a Quote",
    image: "assets/images/real-sports-jerseys.jpg",
    badge: "Quick-Dry Mesh",
    shortDesc: "High-performance moisture-wicking athletic jerseys and shorts for school sports teams, corporate tournaments, and clubs.",
    fullDesc: "Outfitting school athletic leagues, university sports clubs, and corporate tournament teams across the UAE. Made from ultra-lightweight micro-mesh dry-fit polyester that rapidly pulls perspiration away from the skin. Available with full all-over digital sublimation printing for custom club colors, sponsor logos, and player numbers that will never crack or peel.",
    features: [
      "Full digital sublimation printing with vibrant, permanent colors",
      "Ultra-breathable dry-fit honeycomb poly-mesh fabric",
      "Antimicrobial and odor-resistant fabric treatment",
      "Includes matching athletic shorts with elastic waistband and drawstring",
      "Customized player names, numbers, team crests, and tournament sponsors"
    ],
    fabric: "100% Performance Dry-Fit Micro Polyester (160 GSM)",
    sizes: ["Youth 6-16", "Adult XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Electric Blue / White", "Emerald Green", "Royal Blue", "Maroon / Gold", "Custom Sublimation"],
    minOrderQty: "20 sets"
  },

  // 8. GRADUATION REGALIA
  {
    id: "graduation-gown",
    category: "graduation-gown",
    categoryName: "Graduation Gown",
    name: "Academic Graduation Regalia Gown & Cap Set",
    subtitle: "Bachelor, Master & Doctorate Ceremonial Robe with Mortarboard & Stole",
    priceQuote: "Request a Quote",
    image: "assets/images/graduation-gown.jpg",
    badge: "University Grade",
    shortDesc: "Flawlessly draped matte academic ceremony gown with matching mortarboard cap, golden tassel, and custom embroidered graduation stole.",
    fullDesc: "Crafted for prestigious universities, colleges, and high school commencement ceremonies throughout the UAE and Gulf region. Cut from non-see-through matte finish polyester fabric with deep front fluting and reinforced shoulder darts for a majestic drape. Includes mortarboard cap with comfort elastic band, metallic charm tassel, and satin graduation sash/stole featuring institutional emblems.",
    features: [
      "High-density opaque matte polyester finish (eliminates camera flash sheen)",
      "Traditional fluted pleating across shoulders and back yoke",
      "Reinforced concealed front zipper matching robe color",
      "Matching mortarboard cap with reinforced cardboard interior and loop tassel",
      "Custom two-tone satin stoles with school seal or graduation year embroidery"
    ],
    fabric: "100% Matte Non-Sheer Woven Polyester",
    sizes: ["42\" (Height 4'9\"-4'11\")", "45\" (5'0\"-5'2\")", "48\" (5'3\"-5'5\")", "51\" (5'6\"-5'8\")", "54\" (5'9\"-5'11\")", "57\" (6'0\"-6'2\")", "60\" (6'3\"-6'5\")"],
    colors: ["Classic Academic Black", "Royal Blue", "Crimson / Maroon", "Emerald Green", "Navy Blue"],
    minOrderQty: "30 sets"
  },

  // 9. PROMOTIONAL GIFTS & CORPORATE GIVEAWAYS
  {
    id: "promotional-boxes",
    category: "promotional-boxes",
    categoryName: "Promotional Gift Boxes",
    name: "Luxury Corporate Executive Gift Boxes & Onboarding Sets",
    subtitle: "Bespoke Hard-Box Packaging with Foil Stamped Logo & Velvet Lining",
    priceQuote: "Request a Quote",
    image: "assets/images/promotional-boxes.jpg",
    badge: "VIP Packaging",
    shortDesc: "Custom branded corporate luxury gift boxes, client onboarding hampers, and presentation packaging with bespoke foam inserts.",
    fullDesc: "Designed for corporate event giveaways, Ramadan corporate hampers, VIP executive onboarding, and international business delegacy gifts. Made from rigid cardboard wrapped in soft-touch specialty paper with metallic gold or silver foil hot-stamping. Features magnetic closures and precision laser-cut EVA foam inserts tailored to hold notebooks, pens, tumblers, and keychains.",
    features: [
      "Rigid luxury hard-box structure with concealed magnetic closure",
      "Foil hot-stamping, UV spot embossing, and debossed company branding",
      "Custom precision-cut high-density foam or velvet insert trays",
      "Full custom sizing for single gifts, executive duos, or complete VIP gift sets",
      "Supplied empty or complete with curated corporate promotional merchandise"
    ],
    fabric: "1200 GSM Heavy Rigid Board wrapped in Soft-Touch Matte Specialty Paper",
    sizes: ["Small (15x15x6 cm)", "Medium (24x18x8 cm)", "Large Executive (34x26x10 cm)", "Bespoke Dimensions"],
    colors: ["Matte Onyx Black with Gold Foil", "Midnight Navy Blue", "Emerald Green", "Pure White", "Kraft Earth"],
    minOrderQty: "100 units"
  },
  {
    id: "promotional-keychains",
    category: "promotional-keychains",
    categoryName: "Promotional Keychains",
    name: "Custom Engraved Metal, Leather & Acrylic Keychains",
    subtitle: "Heavy-Duty Zinc Alloy & Genuine Leather Corporate Keyrings",
    priceQuote: "Request a Quote",
    image: "assets/images/promotional-keychains.jpg",
    badge: "Precision Laser",
    shortDesc: "High-durability promotional keychains crafted from brushed stainless steel, cast zinc alloy, and bonded leather with laser etching.",
    fullDesc: "The timeless corporate promotional giveaway for automotive dealerships, real estate agencies, hospitality brands, and corporate annual summits. Features robust split rings, rotating swivel hinges, and precision fiber-laser engraved corporate logos that will never wear off.",
    features: [
      "High-grade scratch-resistant zinc alloy, stainless steel, or genuine leather",
      "Precision computerized laser engraving or full-color epoxy dome finish",
      "Heavy-duty nickel-plated split key ring holding multiple keys securely",
      "Supplied in individual protective sleeves or optional black gift boxes",
      "Available with multifunctional bottle opener or trolley coin features"
    ],
    fabric: "Die-Cast Zinc Alloy / Brushed Stainless Steel / Full-Grain Leather",
    sizes: ["Standard Oval (85 mm x 32 mm)", "Rectangular Plate (75 mm x 28 mm)", "Round Medallion (40 mm dia)"],
    colors: ["Matte Gunmetal", "Brushed Silver / Chrome", "Antique Bronze", "Black Leather & Silver"],
    minOrderQty: "200 units"
  },
  {
    id: "promotional-bottles",
    category: "promotional-bottles",
    categoryName: "Promotional Water Bottles",
    name: "Stainless Steel Thermal Water Bottles & Sports Flasks",
    subtitle: "Double-Wall Vacuum Insulated Drinkware with Laser Engraved Logo",
    priceQuote: "Request a Quote",
    image: "assets/images/promotional-bottles.jpg",
    badge: "Hot & Cold 24h",
    shortDesc: "Eco-friendly reusable drinkware: vacuum-insulated stainless steel thermal flasks that keep drinks cold for 24h and hot for 12h.",
    fullDesc: "Promote sustainability and healthy lifestyle among your employees and clients. Manufactured from food-grade 304 (18/8) stainless steel with double-walled copper-lined vacuum insulation. Sweat-proof exterior with durable powder-coated finish and laser-etched corporate branding.",
    features: [
      "Food-grade 18/8 (304) stainless steel interior with zero metallic aftertaste",
      "Double-wall vacuum insulation keeping beverages cold 24h / hot 12h",
      "Leak-proof screw lid with silicone gasket seal and carry loop handle",
      "Matte powder-coated finish resistant to scratches and peeling",
      "360-degree rotary laser engraving, screen printing, or UV digital print"
    ],
    fabric: "18/8 Food Grade Stainless Steel & BPA-Free Polypropylene Lid",
    sizes: ["500 ml (17 oz)", "750 ml (25 oz)", "1000 ml (32 oz)"],
    colors: ["Matte Black", "Brushed Steel", "Navy Blue", "Pure White", "Military Olive", "Rose Gold"],
    minOrderQty: "100 units"
  },
  {
    id: "promotional-caps",
    category: "promotional-caps",
    categoryName: "Promotional Caps & Headwear",
    name: "3D Embroidered Custom Baseball Caps & Trucker Hats",
    subtitle: "Premium 6-Panel Cotton Twill & Mesh Back Hats with Metal Buckle",
    priceQuote: "Request a Quote",
    image: "assets/images/real-promotional-caps.jpg",
    badge: "3D Embroidery",
    shortDesc: "Premium structured and unstructured promotional headwear featuring high-density 3D puff embroidery, ventilation eyelets, and adjustable straps.",
    fullDesc: "Designed for corporate staff, construction team gear, promotional marketing campaigns, and sports teams across the UAE. Made from heavy brushed cotton twill or breathable trucker mesh. Features pre-curved sandwich visors, structured buckram front panels, and brass or Velcro rear adjustment closures.",
    features: [
      "Heavy brushed cotton twill with reinforced 6-panel structured crown",
      "High-density 3D puff embroidery and woven front crest patches",
      "Embroidered breathable eyelets and interior sweatband",
      "Adjustable metal tuck-in buckle closure or snapback tab",
      "Sandwich peak contrasting piping available to match company colors"
    ],
    fabric: "100% Heavy Brushed Cotton Twill or Cotton / Polyester Mesh",
    sizes: ["One Size Fits Most (Adjustable 54 cm - 62 cm)"],
    colors: ["Jet Black", "Midnight Navy", "Sand / Beige", "Forest Green", "White / Navy Two-Tone"],
    minOrderQty: "100 units"
  }
];

// Helper functions for easy querying
function getAllProducts() {
  return PRODUCTS_DATA;
}

function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || null;
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category === category || p.category.includes(category));
}
