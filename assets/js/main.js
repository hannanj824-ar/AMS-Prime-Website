// AMS PRIME LLC FZE & AMJAD GARMENTS - Global JavaScript
// Contact: Mr. Amjad
// Phones / WhatsApp: +971 050 353 7101 | +971 56 453 1486
// Emails: amjad@amsprimellc.com | info@amsprimellc.com
// Locations: Dubai & Sharjah, United Arab Emirates
// Website: www.amsglobals.com

const COMPANY_PHONE_PRIMARY = "+971 050 353 7101";
const COMPANY_PHONE_SECONDARY = "+971 56 453 1486";
const WHATSAPP_PRIMARY_RAW = "971503537101";
const WHATSAPP_SECONDARY_RAW = "971564531486";
const COMPANY_EMAIL_AMJAD = "amjad@amsprimellc.com";
const COMPANY_EMAIL_INFO = "info@amsprimellc.com";
const CART_STORAGE_KEY = "ams_prime_rfq_cart";

// Initialize state
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  setupCartDrawer();
  setupQuoteModal();
  setupMobileMenu();
});

// CART STATE HELPERS
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
    renderCartDrawer();
  } catch (e) {
    console.error("Error saving cart to localStorage", e);
  }
}

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((acc, item) => acc + (parseInt(item.quantity) || 1), 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "inline-flex" : "none";
  });
}

function addToCart(productId, quantity = 1, options = {}) {
  const product = typeof getProductById === "function" ? getProductById(productId) : null;
  if (!product) {
    console.warn("Product not found:", productId);
    return;
  }

  const cart = getCart();
  const existingIndex = cart.findIndex(i => i.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += parseInt(quantity) || 1;
    if (options.notes) cart[existingIndex].notes = options.notes;
    if (options.size) cart[existingIndex].size = options.size;
    if (options.color) cart[existingIndex].color = options.color;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      categoryName: product.categoryName,
      image: product.image,
      quantity: parseInt(quantity) || 1,
      size: options.size || (product.sizes ? product.sizes[0] : "Standard"),
      color: options.color || (product.colors ? product.colors[0] : "Standard"),
      notes: options.notes || "Standard B2B Bulk Order"
    });
  }

  saveCart(cart);
  showToast(`Added "${product.name}" to your Quote Bag!`);
  openCartDrawer();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  showToast("Item removed from Quote Bag");
}

function updateItemQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    saveCart(cart);
  }
}

function clearCart() {
  if (confirm("Are you sure you want to clear your Quote Bag?")) {
    saveCart([]);
    showToast("Quote Bag cleared");
  }
}

// CART DRAWER UI
function setupCartDrawer() {
  const drawerTriggers = document.querySelectorAll(".cart-drawer-toggle");
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  const closeBtn = document.getElementById("closeCartDrawer");

  if (!drawer) return;

  drawerTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeCartDrawer);
  if (backdrop) backdrop.addEventListener("click", closeCartDrawer);
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    renderCartDrawer();
    drawer.classList.add("open");
    backdrop.classList.add("open");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsList");
  const emptyState = document.getElementById("cartEmptyState");
  const footerArea = document.getElementById("cartDrawerFooter");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (footerArea) footerArea.style.display = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (footerArea) footerArea.style.display = "block";

  container.innerHTML = cart.map(item => `
    <div class="flex items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-xl mb-3">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg border border-slate-200 shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-bold text-slate-900 truncate">${item.name}</h4>
        <p class="text-xs text-slate-500">${item.categoryName} • ${item.size}</p>
        <div class="flex items-center gap-2 mt-2">
          <div class="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white text-xs">
            <button onclick="updateItemQuantity('${item.id}', -1)" class="px-2 py-1 hover:bg-slate-100 text-slate-600 font-bold">−</button>
            <span class="px-2 py-1 font-semibold text-slate-800 min-w-6 text-center">${item.quantity}</span>
            <button onclick="updateItemQuantity('${item.id}', 1)" class="px-2 py-1 hover:bg-slate-100 text-slate-600 font-bold">+</button>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="text-xs text-red-500 hover:text-red-700 ml-auto font-medium">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// SEND RFQ VIA WHATSAPP (DIRECT TO MR. AMJAD)
function sendCartViaWhatsApp() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Your Quote Bag is empty. Please add items to request a quote.");
    return;
  }

  let text = `*New RFQ Quotation Inquiry*\n`;
  text += `*Company:* AMS PRIME LLC FZE / Amjad Garments\n`;
  text += `*Attn:* Mr. Amjad (amjad@amsprimellc.com)\n`;
  text += `*Locations:* Dubai & Sharjah, UAE\n\n`;
  text += `*Requested Products (${cart.length} items):*\n`;

  cart.forEach((item, index) => {
    text += `${index + 1}. *${item.name}*\n`;
    text += `   • Category: ${item.categoryName}\n`;
    text += `   • Quantity: ${item.quantity} units\n`;
    text += `   • Size: ${item.size}\n`;
    text += `   • Color: ${item.color}\n`;
    if (item.notes) text += `   • Notes: ${item.notes}\n`;
  });

  text += `\nPlease reply with quotation, customization details, and delivery schedule. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_PRIMARY_RAW}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// QUICK SINGLE PRODUCT WHATSAPP INQUIRY
function inquireProductWhatsApp(productId) {
  const product = typeof getProductById === "function" ? getProductById(productId) : null;
  const name = product ? product.name : productId;
  const text = `Hello Mr. Amjad (AMS PRIME LLC FZE - Dubai/Sharjah),\n\nI would like to request an official wholesale quotation for:\n*${name}*\n\nPlease share price quotation, minimum order quantity, and customization options.`;
  const url = `https://wa.me/${WHATSAPP_PRIMARY_RAW}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// QUOTE REQUEST MODAL
function setupQuoteModal() {
  const modal = document.getElementById("quoteModal");
  const closeBtn = document.getElementById("closeQuoteModal");
  const cancelBtn = document.getElementById("cancelQuoteModal");
  const form = document.getElementById("quoteRequestForm");

  if (!modal) return;

  const hide = () => modal.classList.add("hidden");

  if (closeBtn) closeBtn.addEventListener("click", hide);
  if (cancelBtn) cancelBtn.addEventListener("click", hide);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hide();
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const clientName = form.clientName.value.trim();
      const company = form.companyName ? form.companyName.value.trim() : "";
      const phone = form.clientPhone.value.trim();
      const product = form.productInterest ? form.productInterest.value : "General Inquiry";
      const message = form.clientMessage ? form.clientMessage.value.trim() : "";

      if (!clientName || !phone) {
        alert("Please provide at least your Name and Phone/WhatsApp number.");
        return;
      }

      const waText = `*Direct RFQ - AMS PRIME LLC FZE / Amjad Garments*\nAttn: Mr. Amjad\nName: ${clientName}\nCompany: ${company || "Corporate / School Client"}\nPhone: ${phone}\nProduct of Interest: ${product}\nMessage: ${message}`;
      
      hide();
      form.reset();
      showToast("Thank you! Opening WhatsApp (+971 050 353 7101)...");
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_PRIMARY_RAW}?text=${encodeURIComponent(waText)}`, "_blank");
      }, 700);
    });
  }
}

function openQuoteModal(productName = "") {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  modal.classList.remove("hidden");
  const select = document.getElementById("quoteProductSelect");
  if (select && productName) {
    select.value = productName;
  }
}

// MOBILE MENU
function setupMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenuDrawer");
  const close = document.getElementById("closeMobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  }
  if (close && menu) {
    close.addEventListener("click", () => menu.classList.add("hidden"));
  }
}

// TOAST NOTIFICATION
function showToast(message) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
    <span class="text-sm font-medium">${message}</span>
  `;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// STANDARDIZED PRODUCT CARD HTML WITH REQUIRED AMS PRIME LLC WATERMARK LOGO
function generateProductCardHTML(p) {
  return `
    <div class="product-card group" data-category="${p.category}">
      <div class="product-image-container">
        <!-- OFFICIAL AMS PRIME LLC WATERMARK BADGE ON EVERY PICTURE -->
        <div class="ams-prime-watermark">
          <span class="ams-wm-shield"><i class="fas fa-shield-halved"></i></span>
          <span class="ams-wm-text">AMS PRIME LLC</span>
          <span class="ams-wm-dot"></span>
          <span class="ams-wm-sub">DUBAI • SHARJAH</span>
        </div>

        <img src="${p.image}" alt="${p.name}" loading="lazy" />

        <div class="absolute bottom-3 left-3 flex flex-col gap-1.5 z-10">
          <span class="badge-navy text-[11px] shadow-sm">${p.categoryName}</span>
          ${p.badge ? `<span class="badge-orange text-[10px] shadow-sm">${p.badge}</span>` : ""}
        </div>

        <div class="absolute bottom-3 right-3 z-10">
          <button onclick="inquireProductWhatsApp('${p.id}')" title="Inquire to Mr. Amjad on WhatsApp" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
            <i class="fab fa-whatsapp text-lg"></i>
          </button>
        </div>
      </div>

      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1 line-clamp-1">${p.name}</h3>
        <p class="text-xs text-orange-600 font-semibold mb-2 line-clamp-1">${p.subtitle || ""}</p>
        <p class="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed flex-1">${p.shortDesc}</p>
        
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-4 flex items-center justify-between text-xs">
          <span class="text-slate-500 font-medium"><i class="fas fa-industry text-slate-400 mr-1"></i> B2B Pricing:</span>
          <span class="font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded border border-slate-200">Request a Quote</span>
        </div>

        <div class="grid grid-cols-2 gap-2 mt-auto">
          <a href="product-details.html?id=${p.id}" target="_blank" rel="noopener noreferrer" class="btn-navy text-center py-2.5 px-2 sm:px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fas fa-eye text-orange-400"></i> View Details
          </a>
          <button onclick="addToCart('${p.id}')" class="btn-orange py-2.5 px-2 sm:px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fas fa-cart-plus"></i> Add to Quote
          </button>
        </div>
      </div>
    </div>
  `;
}
