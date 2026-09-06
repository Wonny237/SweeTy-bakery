
(function(){
  "use strict";

  /* ============================================================
     ICON LIBRARY — simple flat SVGs reused across cards & modal
     ============================================================ */
  const icons = {
    bread: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 55c0-20 15-38 35-38s35 18 35 38-15 22-35 22-35-2-35-22z" fill="#3A2313" opacity="0.9"/><path d="M20 50c3-14 12-24 30-24s27 10 30 24" stroke="#FBF3E1" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M28 42c3-8 9-14 22-14" stroke="#FBF3E1" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/></svg>`,
    croissant: `<svg viewBox="0 0 100 100" fill="none"><path d="M20 65c-4-20 8-42 30-46 18-3 34 8 38 22-6-6-16-9-25-6 10 3 17 11 18 22-8-8-20-11-30-8 8 4 13 12 12 21-10-10-24-14-38-9-2 1-4 2-5 4z" fill="#3A2313"/></svg>`,
    cinnamon: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="34" fill="#3A2313"/><path d="M50 24a26 26 0 1126 26" stroke="#FBF3E1" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 34a16 16 0 1116 16" stroke="#FBF3E1" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="50" cy="50" r="4" fill="#FBF3E1"/></svg>`,
    cake: `<svg viewBox="0 0 100 100" fill="none"><path d="M20 85V55l30-30 30 30v30z" fill="#3A2313"/><rect x="20" y="70" width="60" height="15" fill="#2C1A0D"/><rect x="20" y="55" width="60" height="6" fill="#FBF3E1" opacity="0.5"/><rect x="47" y="18" width="6" height="14" fill="#3A2313"/><path d="M50 10c-4 4-4 8 0 12 4-4 4-8 0-12z" fill="#E7A83B"/></svg>`,
    cupcake: `<svg viewBox="0 0 100 100" fill="none"><path d="M28 55h44l-6 32a6 6 0 01-6 5H40a6 6 0 01-6-5z" fill="#3A2313"/><path d="M50 20c-14 0-26 12-26 24 0 8 6 12 26 12s26-4 26-12c0-12-12-24-26-24z" fill="#E7A83B"/><circle cx="50" cy="18" r="4" fill="#3A2313"/></svg>`,
    cookie: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="34" fill="#3A2313"/><circle cx="38" cy="42" r="4" fill="#FBF3E1"/><circle cx="60" cy="38" r="4" fill="#FBF3E1"/><circle cx="55" cy="58" r="4" fill="#FBF3E1"/><circle cx="34" cy="60" r="4" fill="#FBF3E1"/><circle cx="66" cy="58" r="4" fill="#FBF3E1"/></svg>`,
    tart: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 62a35 15 0 0070 0z" fill="#3A2313"/><path d="M15 62a35 15 0 0170 0" stroke="#2C1A0D" stroke-width="2" fill="none"/><circle cx="35" cy="55" r="5" fill="#E7A83B"/><circle cx="50" cy="50" r="5" fill="#E7A83B"/><circle cx="65" cy="55" r="5" fill="#E7A83B"/></svg>`,
    macaron: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="32" rx="26" ry="14" fill="#3A2313"/><rect x="24" y="46" width="52" height="8" fill="#E7A83B"/><ellipse cx="50" cy="68" rx="26" ry="14" fill="#3A2313"/></svg>`
  };

  /* ============================================================
     DATA
     ============================================================ */
  const menuItems = [
    { id:1, name:"Sourdough Country Loaf", cat:"Breads", price:"Rp 45.000", icon:"bread", thumb:"thumb-1",
      desc:"A 24-hour naturally leavened loaf with a deep, crackly crust and an open, tangy crumb. Baked in small batches every morning.",
      ing:["Bread flour","Filtered water","Sourdough starter","Sea salt"], allergen:"Contains gluten." },
    { id:2, name:"Butter Croissant", cat:"Pastries", price:"Rp 22.000", icon:"croissant", thumb:"thumb-2",
      desc:"Laminated over three days with cultured butter for a shatter-crisp shell and a soft, honeycombed inside.",
      ing:["Flour","Cultured butter","Fresh yeast","Sugar","Sea salt","Milk"], allergen:"Contains gluten and dairy." },
    { id:3, name:"Cinnamon Roll", cat:"Pastries", price:"Rp 25.000", icon:"cinnamon", thumb:"thumb-3",
      desc:"Soft brioche dough rolled with brown sugar and Ceylon cinnamon, finished with a tangy cream cheese glaze.",
      ing:["Flour","Butter","Ceylon cinnamon","Brown sugar","Cream cheese","Sugar","Eggs"], allergen:"Contains gluten, dairy and egg." },
    { id:4, name:"Chocolate Fudge Cake", cat:"Cakes", price:"Rp 35.000 / slice", icon:"cake", thumb:"thumb-4",
      desc:"Three layers of dark cocoa sponge with a silky fudge ganache — dense, rich, and not overly sweet.",
      ing:["70% dark chocolate","Butter","Eggs","Flour","Sugar","Cocoa powder"], allergen:"Contains gluten, dairy and egg." },
    { id:5, name:"Classic Vanilla Cupcake", cat:"Cakes", price:"Rp 18.000", icon:"cupcake", thumb:"thumb-5",
      desc:"A tender vanilla-bean crumb piped high with light buttercream — a party-table regular for a reason.",
      ing:["Flour","Butter","Sugar","Eggs","Vanilla bean","Milk"], allergen:"Contains gluten, dairy and egg." },
    { id:6, name:"Golden Honey Oat Cookies", cat:"Cookies", price:"Rp 15.000", icon:"cookie", thumb:"thumb-6",
      desc:"Crisp at the edge, chewy in the middle, sweetened with real honey instead of syrup.",
      ing:["Rolled oats","Honey","Butter","Flour","Brown sugar","Sea salt"], allergen:"Contains gluten and dairy." },
    { id:7, name:"Caramel Almond Tart", cat:"Pastries", price:"Rp 32.000", icon:"tart", thumb:"thumb-7",
      desc:"A buttery shortcrust shell filled with soft caramel and toasted almonds, finished with a torch-caramelised top.",
      ing:["Flour","Butter","Caramel","Toasted almonds","Cream","Eggs"], allergen:"Contains gluten, dairy, egg and nuts." },
    { id:8, name:"French Macaron (box of 2)", cat:"Cookies", price:"Rp 20.000", icon:"macaron", thumb:"thumb-8",
      desc:"Almond meringue shells with a crisp shell and chewy centre, sandwiched with dark chocolate ganache.",
      ing:["Almond flour","Icing sugar","Egg whites","Dark chocolate ganache"], allergen:"Contains egg, nuts and dairy." }
  ];

  const packages = [
    { name:"Sweet Start", pax:"For 10–15 guests", price:"Rp 350.000", featured:false,
      items:["Assorted mini pastries (30 pcs)","1 medium celebration cake (20cm)","Cookie platter (24 pcs)","Simple dessert table setup"] },
    { name:"Golden Celebration", pax:"For 25–30 guests", price:"Rp 650.000", featured:true,
      items:["2-tier customisable cake","Full pastry box (50 pcs)","Macaron tower (40 pcs)","Styled dessert table setup","Flavour tasting session included"] },
    { name:"Royal Feast", pax:"For 50+ guests", price:"Rp 1.200.000", featured:false,
      items:["Full dessert table, 6+ items","Custom-designed celebration cake","Optional live pastry station","Personalised party favour boxes","Dedicated event coordinator"] }
  ];

  /* ============================================================
     RENDER MENU
     ============================================================ */
  const menuGrid = document.getElementById("menuGrid");

  function renderMenu(filter){
    menuGrid.innerHTML = "";
    menuItems
      .filter(item => filter === "all" || item.cat === filter)
      .forEach(item => {
        const card = document.createElement("button");
        card.className = "menu-card";
        card.setAttribute("data-id", item.id);
        card.innerHTML = `
          <div class="card-thumb ${item.thumb}">${icons[item.icon]}</div>
          <div class="card-body">
            <div class="card-cat">${item.cat}</div>
            <div class="card-name">${item.name}</div>
            <div class="card-price">${item.price}</div>
            <div class="card-hint">Tap for ingredients →</div>
          </div>`;
        card.addEventListener("click", () => openModal(item));
        menuGrid.appendChild(card);
      });
  }
  renderMenu("all");

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderMenu(chip.getAttribute("data-filter"));
    });
  });

  /* ============================================================
     RENDER PARTY PACKAGES
     ============================================================ */
  const pkgGrid = document.getElementById("pkgGrid");
  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg>`;

  packages.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "pkg-card" + (pkg.featured ? " featured" : "");
    card.innerHTML = `
      ${pkg.featured ? '<span class="pkg-badge">Most popular</span>' : ""}
      <div class="pkg-name">${pkg.name}</div>
      <div class="pkg-for">${pkg.pax}</div>
      <div class="pkg-price">${pkg.price}<span> / package</span></div>
      <ul class="pkg-list">${pkg.items.map(i => `<li>${checkIcon}<span>${i}</span></li>`).join("")}</ul>
      <a class="pkg-btn" href="https://wa.me/6281234567890?text=${encodeURIComponent("Hi Golden Crust, I'd like to enquire about the " + pkg.name + " package.")}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
    `;
    pkgGrid.appendChild(card);
  });

  /* ============================================================
     MENU ITEM MODAL LOGIC
     ============================================================ */
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalThumb = document.getElementById("modalThumb");
  const modalCat = document.getElementById("modalCat");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDesc = document.getElementById("modalDesc");
  const modalIng = document.getElementById("modalIng");
  const modalAllergen = document.getElementById("modalAllergen");
  const modalClose = document.getElementById("modalClose");
  const modalQtyValue = document.getElementById("modalQtyValue");
  const modalQtyMinus = document.getElementById("modalQtyMinus");
  const modalQtyPlus = document.getElementById("modalQtyPlus");
  const modalAddBtn = document.getElementById("modalAddBtn");
  let lastFocused = null;
   let currentModalItem = null;
  let currentModalQty = 1;

  function openModal(item){
    lastFocused = document.activeElement;
    modalThumb.className = "modal-thumb " + item.thumb;
    modalThumb.innerHTML = icons[item.icon];
    modalCat.textContent = item.cat;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.desc;
    modalIng.innerHTML = item.ing.map(i => `<li>${i}</li>`).join("");
    modalAllergen.textContent = item.allergen;
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }
  function closeModal(){
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }
  modalQtyMinus.addEventListener("click", () => {
    if (currentModalQty > 1){ currentModalQty--; modalQtyValue.textContent = currentModalQty; }
  });
  modalQtyPlus.addEventListener("click", () => {
    if (currentModalQty < 20){ currentModalQty++; modalQtyValue.textContent = currentModalQty; }
  });
  modalAddBtn.addEventListener("click", () => {
    if (!currentModalItem) return;
    addToCart(currentModalItem, currentModalQty);
    modalAddBtn.textContent = `Added ${currentModalQty} to order ✓`;
    setTimeout(closeModal, 700);
  });
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", e => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape"){
      if (modalBackdrop.classList.contains("open")) closeModal();
      if (adBackdrop.classList.contains("open")) closeAd();
      if (cartPanel.classList.contains("open")) closeCart();
    }
  });





    const CART_STORAGE_KEY = "gc_cart";
  let cart = []; // [{ id, name, price, thumb, icon, qty }]
 
  function loadCart(){
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) cart = JSON.parse(saved);
    } catch(e) { cart = []; }
  }
  function saveCart(){
    try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); } catch(e) {}
  }
  function formatRupiah(num){
    return "Rp " + num.toLocaleString("id-ID");
  }
 
  function addToCart(item, qty){
    const existing = cart.find(c => c.id === item.id);
    if (existing){
      existing.qty += qty;
    } else {
      cart.push({ id:item.id, name:item.name, price:item.priceNum, thumb:item.thumb, icon:item.icon, qty:qty });
    }
    saveCart();
    renderCart();
    openCartBriefly();
  }
  function removeFromCart(id){
    cart = cart.filter(c => c.id !== id);
    saveCart();
    renderCart();
  }
  function changeCartQty(id, delta){
    const line = cart.find(c => c.id === id);
    if (!line) return;
    line.qty += delta;
    if (line.qty <= 0){ removeFromCart(id); return; }
    saveCart();
    renderCart();
  }
 
  const cartToggle = document.getElementById("cartToggle");
  const cartPanel = document.getElementById("cartPanel");
  const cartPanelClose = document.getElementById("cartPanelClose");
  const cartItemsEl = document.getElementById("cartItems");
  const cartEmptyEl = document.getElementById("cartEmpty");
  const cartFooterEl = document.getElementById("cartFooter");
  const cartCountEl = document.getElementById("cartCount");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCheckoutEl = document.getElementById("cartCheckout");
 
  function renderCart(){
    const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
    const totalPrice = cart.reduce((sum, c) => sum + c.qty * c.price, 0);
 
    // badge on the floating button
    if (totalItems > 0){
      cartCountEl.hidden = false;
      cartCountEl.textContent = totalItems;
    } else {
      cartCountEl.hidden = true;
    }
 
    // empty state vs list
    if (cart.length === 0){
      cartItemsEl.innerHTML = "";
      cartEmptyEl.hidden = false;
      cartFooterEl.hidden = true;
      return;
    }
    cartEmptyEl.hidden = true;
    cartFooterEl.hidden = false;
 
    cartItemsEl.innerHTML = cart.map(line => `
      <div class="cart-item" data-cart-id="${line.id}">
        <div class="cart-item-thumb ${line.thumb}">${icons[line.icon]}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${line.name}</div>
          <div class="cart-item-price">${formatRupiah(line.price)}</div>
        </div>
        <div class="qty-stepper">
          <button type="button" class="cart-qty-minus" data-id="${line.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${line.qty}</span>
          <button type="button" class="cart-qty-plus" data-id="${line.id}" aria-label="Increase quantity">+</button>
        </div>
        <button type="button" class="cart-item-remove" data-id="${line.id}" aria-label="Remove ${line.name}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg>
        </button>
      </div>
    `).join("");
 
    cartTotalEl.textContent = formatRupiah(totalPrice);
 
    // build the WhatsApp message with every item pre-filled
    let msg = "Hi Golden Crust, I'd like to order:\n\n";
    cart.forEach(line => {
      msg += `• ${line.name} x${line.qty} — ${formatRupiah(line.price * line.qty)}\n`;
    });
    msg += `\nTotal: ${formatRupiah(totalPrice)}\n\nPlease let me know how to proceed. Thank you!`;
    cartCheckoutEl.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }
 
  // event delegation: qty +/- and remove buttons inside the cart list
  cartItemsEl.addEventListener("click", e => {
    const minus = e.target.closest(".cart-qty-minus");
    const plus = e.target.closest(".cart-qty-plus");
    const remove = e.target.closest(".cart-item-remove");
    if (minus) changeCartQty(Number(minus.dataset.id), -1);
    if (plus) changeCartQty(Number(plus.dataset.id), 1);
    if (remove) removeFromCart(Number(remove.dataset.id));
  });
 
  function openCart(){
    cartPanel.classList.add("open");
    cartToggle.setAttribute("aria-expanded", "true");
  }
  function closeCart(){
    cartPanel.classList.remove("open");
    cartToggle.setAttribute("aria-expanded", "false");
  }
  function openCartBriefly(){
    // auto-pop the cart open for a moment so the add feels confirmed
    openCart();
  }
  cartToggle.addEventListener("click", () => {
    cartPanel.classList.contains("open") ? closeCart() : openCart();
  });
  cartPanelClose.addEventListener("click", closeCart);
  document.addEventListener("click", e => {
    if (!cartPanel.classList.contains("open")) return;
    if (cartPanel.contains(e.target) || cartToggle.contains(e.target)) return;
    closeCart();
  });
 
  loadCart();
  renderCart();



  

  /* ============================================================
     EVENT / AD POPUP — shows once per calendar day
     ============================================================ */
  const adBackdrop = document.getElementById("adBackdrop");
  const adClose = document.getElementById("adClose");
  const adCta = document.getElementById("adCta");
  const adTimerFill = document.getElementById("adTimerFill");
  const AD_STORAGE_KEY = "gc_ad_last_shown";
  let adAutoCloseTimer = null;

  function todayString(){
    const d = new Date();
    return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
  }

  function openAd(){
    adBackdrop.classList.add("open");
    adTimerFill.classList.add("run");
    adAutoCloseTimer = setTimeout(closeAd, 20000);
    try { localStorage.setItem(AD_STORAGE_KEY, todayString()); } catch(e) {}
  }
  function closeAd(){
    adBackdrop.classList.remove("open");
    adTimerFill.classList.remove("run");
    if (adAutoCloseTimer){ clearTimeout(adAutoCloseTimer); adAutoCloseTimer = null; }
  }
  adClose.addEventListener("click", closeAd);
  adCta.addEventListener("click", closeAd);
  adBackdrop.addEventListener("click", e => { if (e.target === adBackdrop) closeAd(); });

  (function maybeShowAd(){
    let lastShown = null;
    try { lastShown = localStorage.getItem(AD_STORAGE_KEY); } catch(e) {}
    if (lastShown !== todayString()){
      setTimeout(openAd, 600);
    }
  })();

  /* ============================================================
     MOBILE NAV TOGGLE
     ============================================================ */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

})();





