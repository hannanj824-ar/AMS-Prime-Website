# AMS PRIME LLC FZE - Official Multi-Page E-Commerce Website

A premium, modern, responsive multi-page B2B E-commerce website for **AMS PRIME LLC FZE**, headquartered in **Sharjah, United Arab Emirates**.

> **Note on Architecture:** This is a pure multi-page HTML, CSS, and JavaScript E-commerce website (NOT a React application). All pages, images, and functionality are fully self-contained.

---

## Company Information
- **Company Name:** AMS PRIME LLC FZE
- **Location:** Sharjah, United Arab Emirates
- **Phone / WhatsApp:** +971 56 453 1486
- **Business Availability:** Open 24 Hours / 24/7

---

## Quick Start: How to Run the Website

### Option 1: Built-in Node Server (Recommended)
Run the dedicated server directly:
```bash
node server.cjs
```
Or via npm:
```bash
npm start
```
*(or `npm run dev`)*

Then open your browser at:
**http://localhost:3000**

---

### Option 2: Using Vite (Optional)
If you prefer running Vite for static multi-page serving:
```bash
npx vite
```
*(or `npm run vite`)*

The included `vite.config.js` is configured specifically for multi-page static HTML (without any React plugins or JSX requirements).

---

## Website Pages & Files

1. **Home (`index.html`)** – Hero section, company introduction, category cards, featured products, "Why Choose Us", and contact CTA.
2. **About Us (`about.html`)** – UAE manufacturing heritage, Sharjah logistics hub, embroidery workshops, and certified quality standards.
3. **Products Catalog (`products.html`)** – Complete 13-product catalog with live search, category filter pills, and sorting.
4. **School Uniform (`school-uniform.html`)** – Tailored school uniform sets, sports PE polo t-shirts, and trousers.
5. **Company Uniform (`company-uniform.html`)** – Corporate blazers, executive suits, work polo sets, and cargo pants.
6. **Safety Products (`safety-products.html`)** – High-visibility safety vests (EN ISO 20471), steel-toe shoes (CE S3), hard hats (ANSI/EN 397), and safety harnesses (EN 361).
7. **Chef Uniform (`chef-uniform.html`)** – Executive chef suits, double-breasted chef coats, and luxury banquet table napkins.
8. **Graduation Gown (`graduation-gown.html`)** – Commencement regalia, robes, caps, tassels, and embroidered stoles.
9. **Contact Us (`contact.html`)** – Clickable phone (+971 56 453 1486), WhatsApp links, 24/7 availability, interactive RFQ form, and 7-Emirates map.
10. **Product Details (`product-details.html`)** – Dynamic product detail view with zoomable images, specifications table, size/color selectors, and direct WhatsApp quote dispatcher.
11. **Quote Bag / Cart (`cart.html`)** – Full-page quote cart with quantity steppers and one-click WhatsApp quotation generator.

---

## Assets & Styling
- **CSS:** `assets/css/styles.css` (Deep Navy Blue `#0B1B3D`, White `#FFFFFF`, and High-Visibility Accent Orange `#FF6B00`)
- **JavaScript:** `assets/js/main.js` (Cart manager, slide-over drawer, WhatsApp quotation formatters, and event listeners)
- **Data:** `assets/js/products-data.js` (Complete 13-item product specifications and catalog database)
- **Images:** `assets/images/` (18 unique high-resolution local images for all products, hero banner, and facilities)
