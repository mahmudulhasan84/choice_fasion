/**
 * CHOICE FASHION | HAUTE MENSWEAR INTERACTIVE ENGINE (বাংলা সংস্করণ)
 * চয়েস ফ্যাশন লাক্সারি ই-কমার্স স্ক্রিপ্ট
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Master Product Database (বাংলা সংস্করণ)
     ========================================================================== */
  const PRODUCTS_DATA = [
    {
      id: 'cf-panjabi-01',
      title: 'ইম্পেরিয়াল মিডনাইট সিল্ক পাঞ্জাবি',
      category: 'panjabi',
      categoryLabel: 'ডিজাইনার পাঞ্জাবি',
      badge: 'লিমিটেড এডিশন',
      price: 12500,
      origPrice: 14500,
      rating: 4.95,
      reviewsCount: 38,
      sizes: ['M (৪০)', 'L (৪২)', 'XL (৪৪)', 'XXL (৪৬)'],
      description: 'খাঁটি তুঁত রেশমের জাকোয়ার্ড সিল্কে তৈরি। কলার ও বুকে অ্যান্টিক গোল্ডেন জরির নিপুণ কারুকাজ এবং আসল মাদার-অব-পার্ল বোতাম সংবলিত রাজকীয় পোশাক।',
      image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-panjabi-02',
      title: 'হেরিটেজ প্লাটিনাম এমব্রয়ডারি পাঞ্জাবি',
      category: 'panjabi',
      categoryLabel: 'ডিজাইনার পাঞ্জাবি',
      badge: 'আর্টিসান মাস্টারপিস',
      price: 14200,
      origPrice: 16500,
      rating: 4.92,
      reviewsCount: 29,
      sizes: ['S (৩৮)', 'M (৪০)', 'L (৪২)', 'XL (৪৪)'],
      description: 'হাতে বোনা প্লাটিনাম-শিন স্পান সিল্ক। কলার এবং কাফ-এ ঐতিহ্যবাহী জারদৌসি সুতোর সূক্ষ্ম কাজ। যেকোনো পারিবারিক ও জাতীয় উদযাপনে অনন্য।',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-panjabi-03',
      title: 'রয়্যাল জরি এমব্রয়ডারি টাক্সিডো পাঞ্জাবি',
      category: 'panjabi',
      categoryLabel: 'ডিজাইনার পাঞ্জাবি',
      badge: 'রয়্যাল সিরিজ',
      price: 16800,
      origPrice: 19500,
      rating: 5.0,
      reviewsCount: 44,
      sizes: ['M (৪০)', 'L (৪২)', 'XL (৪৪)'],
      description: 'অভিজাত সান্ধ্যকালীন আয়োজনের জন্য আদর্শ। গভীর অবসিডিয়ান ব্ল্যাক ফেব্রিকের উপর শ্যাম্পেন গোল্ডেন মেটালিক সুতোর কারুকাজ।',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-panjabi-04',
      title: 'বেসপোক আইভরি ব্রোকেড পাঞ্জাবি',
      category: 'panjabi',
      categoryLabel: 'ডিজাইনার পাঞ্জাবি',
      badge: 'উৎসবের সেরা পছন্দ',
      price: 11900,
      origPrice: 13500,
      rating: 4.88,
      reviewsCount: 22,
      sizes: ['S (৩৮)', 'M (৪০)', 'L (৪২)', 'XL (৪৪)', 'XXL (৪৬)'],
      description: 'আইভরি হোয়াইটের ওপর সেলফ-উইভ সূক্ষ্ম ব্রোকেড টেক্সচার। রিঙ্কল-রেজিস্ট্যান্ট ফেব্রিক এবং সহজে চলাফেরার জন্য আরামদায়ক ফিট।',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-tee-01',
      title: 'সুপিমা লাক্স হেভিওয়েট টি-শার্ট - অবসিডিয়ান',
      category: 'tshirts',
      categoryLabel: 'প্রিমিয়াম টি-শার্ট',
      badge: 'বেস্ট সেলার',
      price: 3200,
      origPrice: 3800,
      rating: 4.96,
      reviewsCount: 84,
      sizes: ['S', 'M', 'L', 'XL'],
      description: '২৮০ জিএসএম লং-স্ট্যাপল ১০০% সুপিমা কম্বড কটন। হাই-ডেনসিটি অ্যান্টি-স্যাগ কলার এবং প্রাক-ধৌত সিল্কি স্মুথ অনুভূতি।',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-tee-02',
      title: 'টেইলর্ড মিনিমালিস্ট ক্রু-নেক - অফ-হোয়াইট',
      category: 'tshirts',
      categoryLabel: 'প্রিমিয়াম টি-শার্ট',
      badge: 'এসেনশিয়াল',
      price: 2900,
      origPrice: 3400,
      rating: 4.9,
      reviewsCount: 61,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: '১০০% মিশরীয় গিজা মারসেরাইজড কটন। চমৎকার ঔজ্জ্বল্য ও কোমলতা। ব্লেজার বা জ্যাকেটের নিচে পরার জন্য সেরা চয়েস।',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-tee-03',
      title: 'টেক্সচার্ড মারসেরাইজড পিমা টি-শার্ট - সেজ স্লেট',
      category: 'tshirts',
      categoryLabel: 'প্রিমিয়াম টি-শার্ট',
      badge: 'লিমিটেড রান',
      price: 3500,
      origPrice: 4000,
      rating: 4.87,
      reviewsCount: 33,
      sizes: ['M', 'L', 'XL'],
      description: 'পেরুভিয়ান পিমা কটন থেকে তৈরি মাইক্রো-রিবড লাক্সারি নিট ফেব্রিক। প্রাকৃতিকভাবে ঠান্ডা ও বাতাস চলাচলে সক্ষম।',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-tee-04',
      title: 'ভিন্টেজ চারকোল ওভারসাইজড হেভিওয়েট টি-শার্ট',
      category: 'tshirts',
      categoryLabel: 'প্রিমিয়াম টি-শার্ট',
      badge: 'নতুন আগমন',
      price: 3400,
      origPrice: 3900,
      rating: 4.89,
      reviewsCount: 45,
      sizes: ['S', 'M', 'L', 'XL'],
      description: '২৯০ জিএসএম ড্রপড-শোল্ডার রিল্যাক্সড ফিট। আধুনিক আরবান স্টাইলের নিখুঁত উপস্থাপনা।',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-shoe-01',
      title: 'হ্যান্ড-বার্নিশড ইতালিয়ান লেদার অক্সফোর্ড',
      category: 'shoes',
      categoryLabel: 'হস্তনির্মিত জুতো',
      badge: 'মাস্টার কারিগরি',
      price: 18500,
      origPrice: 21500,
      rating: 4.98,
      reviewsCount: 52,
      sizes: ['EU ৪০', 'EU ৪১', 'EU ৪২', 'EU ৪৩', 'EU ৪৪'],
      description: 'ফুল-গ্রেইন খাঁটি ইতালিয়ান কাফস্কিন লেদার। হাতে পলিশ করা কনিয়াক ফিনিশ এবং টেকসই ব্লেক-ওয়েল্ট সোল কনস্ট্রাকশন।',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-shoe-02',
      title: 'ভেনিসিয়ান সোয়েড ট্যাসেল লোফার - কনিয়াক',
      category: 'shoes',
      categoryLabel: 'হস্তনির্মিত জুতো',
      badge: 'ক্লাসিক জেন্টলম্যান',
      price: 15900,
      origPrice: 17800,
      rating: 4.94,
      reviewsCount: 39,
      sizes: ['EU ৪০', 'EU ৪১', 'EU ৪২', 'EU ৪৩', 'EU ৪৪'],
      description: 'ওয়াটার-রিপেলেন্ট রিভার্স-কাফ সোয়েড চামড়া। পায়ে আরামের জন্য মেমোরি ফোম ইনসোল ও হাতে বোনা লেদার ট্যাসেল।',
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-shoe-03',
      title: 'আর্টিসান মিডনাইট কাফস্কিন চেলসি বুট',
      category: 'shoes',
      categoryLabel: 'হস্তনির্মিত জুতো',
      badge: 'আইকনিক সিরিজ',
      price: 19800,
      origPrice: 23000,
      rating: 4.97,
      reviewsCount: 47,
      sizes: ['EU ৪১', 'EU ৪২', 'EU ৪৩', 'EU ৪৪'],
      description: 'সিঙ্গেল-কাট কাফস্কিন চামড়ায় তৈরি প্রিমিয়াম চেলসি বুট। স্ট্যাকড লেদার হিল যা ব্যক্তিত্বে যোগ করে রাজকীয় গাম্ভীর্য।',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cf-shoe-04',
      title: 'অ্যারিস্টোক্র্যাট ডাবল মঙ্ক-স্ট্র্যাপ - এসপ্রেসো',
      category: 'shoes',
      categoryLabel: 'হস্তনির্মিত জুতো',
      badge: 'ট্রেন্ডিং চয়েস',
      price: 17200,
      origPrice: 19500,
      rating: 4.91,
      reviewsCount: 31,
      sizes: ['EU ৪০', 'EU ৪১', 'EU ৪২', 'EU ৪৩', 'EU ৪৪'],
      description: 'চিজেলেড টো আর্কিটেকচার এবং অ্যান্টিক ব্রাস বাকলযুক্ত এসপ্রেসো রঙের ডাবল মঙ্ক-স্ট্র্যাপ ফর্মাল শুজ।',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80'
    }
  ];

  /* ==========================================================================
     2. Application State Management
     ========================================================================== */
  const state = {
    cart: [
      {
        id: 'cf-panjabi-01',
        title: 'ইম্পেরিয়াল মিডনাইট সিল্ক পাঞ্জাবি',
        price: 12500,
        size: 'L (৪২)',
        qty: 1,
        image: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80'
      }
    ],
    wishlist: new Set(),
    discountPercent: 0,
    appliedPromoCode: '',
    freeShippingThreshold: 5000,
    currentCategory: 'all'
  };

  /* ==========================================================================
     3. DOM Element References
     ========================================================================== */
  const header = document.getElementById('header');
  const productsGrid = document.getElementById('productsGrid');
  const filterTabs = document.querySelectorAll('.filter-tab');
  
  // Cart Drawer Elements
  const cartTrigger = document.getElementById('cartTrigger');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartCount = document.getElementById('cartCount');
  const drawerCount = document.getElementById('drawerCount');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const emptyCartState = document.getElementById('emptyCartState');
  const emptyCartBrowseBtn = document.getElementById('emptyCartBrowseBtn');
  const shippingStatusText = document.getElementById('shippingStatusText');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const promoInput = document.getElementById('promoInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoFeedback = document.getElementById('promoFeedback');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartShipping = document.getElementById('cartShipping');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const footerCartLink = document.getElementById('footerCartLink');

  // Search Modal Elements
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Wishlist Elements
  const wishlistTrigger = document.getElementById('wishlistTrigger');
  const wishlistCount = document.getElementById('wishlistCount');

  // Quick View Modal
  const quickviewModal = document.getElementById('quickviewModal');
  const quickviewClose = document.getElementById('quickviewClose');
  const quickviewBody = document.getElementById('quickviewBody');

  // Mobile Drawer Elements
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Newsletter Form & Year
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMsg = document.getElementById('newsletterMsg');
  const currentYear = document.getElementById('currentYear');
  const toastContainer = document.getElementById('toastContainer');

  if (currentYear) {
    currentYear.textContent = '২০২৬';
  }

  /* ==========================================================================
     4. Formatters & Utility Functions (বাংলা ডিজিট কনভার্টার)
     ========================================================================== */
  const bnDigits = {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};

  function toBengaliNumber(num) {
    return num.toString().replace(/\d/g, d => bnDigits[d] || d);
  }

  function formatCurrency(amount) {
    const formattedEnglish = amount.toLocaleString('en-US');
    const bengaliNum = toBengaliNumber(formattedEnglish);
    return '৳' + bengaliNum;
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-gold-check">✦</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  /* ==========================================================================
     5. Render Products Grid
     ========================================================================== */
  function renderProducts(category = 'all') {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    const filtered = category === 'all' 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(item => item.category === category);

    filtered.forEach(product => {
      const isWishlisted = state.wishlist.has(product.id);
      const card = document.createElement('div');
      card.className = 'product-card';
      card.dataset.id = product.id;
      card.dataset.category = product.category;

      card.innerHTML = `
        <div class="card-visual">
          <span class="product-badge">${product.badge}</span>
          <button class="product-wish-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="উইশলিস্টে যুক্ত করুন">
            <svg viewBox="0 0 24 24" fill="${isWishlisted ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
          <button class="card-quickview-btn" data-id="${product.id}">বিস্তারিত দেখুন</button>
        </div>

        <div class="card-details">
          <div>
            <span class="card-category">${product.categoryLabel}</span>
            <h3 class="card-title">${product.title}</h3>
            <div class="card-rating">
              <span class="rating-stars">★★★★★</span>
              <span class="rating-count">(${toBengaliNumber(product.rating)})</span>
            </div>
          </div>

          <div class="card-price-action">
            <div class="card-price-box">
              <span class="current-price">${formatCurrency(product.price)}</span>
              ${product.origPrice ? `<span class="orig-price">${formatCurrency(product.origPrice)}</span>` : ''}
            </div>
            <button class="add-cart-btn" data-id="${product.id}">
              <span>ব্যাগে নিন</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      `;

      productsGrid.appendChild(card);
    });

    attachProductCardListeners();
  }

  function attachProductCardListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        addToCart(id);
      });
    });

    // Wishlist buttons
    document.querySelectorAll('.product-wish-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        toggleWishlist(id, btn);
      });
    });

    // Quick View buttons
    document.querySelectorAll('.card-quickview-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        openQuickView(id);
      });
    });

    // Image click opens Quick View
    document.querySelectorAll('.card-visual img').forEach(img => {
      img.addEventListener('click', () => {
        const card = img.closest('.product-card');
        if (card) {
          openQuickView(card.dataset.id);
        }
      });
    });
  }

  /* ==========================================================================
     6. Category Filtering Logic
     ========================================================================== */
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      
      const filter = tab.dataset.filter;
      state.currentCategory = filter;
      renderProducts(filter);
    });
  });

  // Category links inside cards and footer
  document.querySelectorAll('.filter-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const filter = trigger.dataset.filter;
      if (!filter) return;
      
      const targetTab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  /* ==========================================================================
     7. Cart Drawer Operations
     ========================================================================== */
  function openCartDrawer() {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (footerCartLink) {
    footerCartLink.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  }

  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      closeCartDrawer();
    }
  });

  if (emptyCartBrowseBtn) {
    emptyCartBrowseBtn.addEventListener('click', () => {
      closeCartDrawer();
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function addToCart(productId, selectedSize = null) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const sizeToUse = selectedSize || product.sizes[0];
    const existingIndex = state.cart.findIndex(item => item.id === productId && item.size === sizeToUse);

    if (existingIndex > -1) {
      state.cart[existingIndex].qty += 1;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        size: sizeToUse,
        qty: 1,
        image: product.image
      });
    }

    updateCartUI();
    showToast(`"${product.title}" আপনার শপিং ব্যাগে যুক্ত হয়েছে।`);
    openCartDrawer();
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = toBengaliNumber(totalItems);
    drawerCount.textContent = toBengaliNumber(totalItems);

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = '';
      cartItemsContainer.appendChild(emptyCartState);
      emptyCartState.style.display = 'flex';
    } else {
      emptyCartState.style.display = 'none';
      cartItemsContainer.innerHTML = '';

      state.cart.forEach((item, index) => {
        const itemElem = document.createElement('div');
        itemElem.className = 'cart-item';
        itemElem.innerHTML = `
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="cart-item-info">
            <div>
              <div class="cart-item-head">
                <h4 class="cart-item-name">${item.title}</h4>
                <button class="cart-item-del-btn" data-index="${index}" title="পোশাকটি সরান">&times;</button>
              </div>
              <p class="cart-item-variant">সাইজ: <strong>${item.size}</strong></p>
            </div>
            <div class="cart-item-bottom">
              <div class="qty-control">
                <button class="qty-btn qty-minus" data-index="${index}">-</button>
                <span class="qty-value">${toBengaliNumber(item.qty)}</span>
                <button class="qty-btn qty-plus" data-index="${index}">+</button>
              </div>
              <span class="cart-item-price">${formatCurrency(item.price * item.qty)}</span>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(itemElem);
      });

      // Quantity & Delete events
      document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          if (state.cart[idx].qty > 1) {
            state.cart[idx].qty -= 1;
          } else {
            state.cart.splice(idx, 1);
          }
          updateCartUI();
        });
      });

      document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          state.cart[idx].qty += 1;
          updateCartUI();
        });
      });

      document.querySelectorAll('.cart-item-del-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          const removed = state.cart.splice(idx, 1)[0];
          updateCartUI();
          showToast(`"${removed.title}" ব্যাগ থেকে সরানো হয়েছে।`);
        });
      });
    }

    // Calculations
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountAmount = Math.round(subtotal * state.discountPercent);
    const isFreeShipping = subtotal >= state.freeShippingThreshold || subtotal === 0;
    const shippingAmount = isFreeShipping ? 0 : 250;
    const finalTotal = Math.max(0, subtotal - discountAmount + shippingAmount);

    cartSubtotal.textContent = formatCurrency(subtotal);
    cartDiscount.textContent = `- ${formatCurrency(discountAmount)}`;
    cartShipping.textContent = subtotal === 0 ? '৳০' : (isFreeShipping ? 'ফ্রি (কমপ্লিমেন্টারি)' : '৳২৫০');
    cartTotal.textContent = formatCurrency(finalTotal);

    // Free Shipping Progress calculation
    if (subtotal >= state.freeShippingThreshold) {
      shippingStatusText.innerHTML = `✦ অভিনন্দন! আপনি <strong>ফ্রি এক্সপ্রেস হোম ডেলিভারি</strong> পেয়েছেন!`;
      shippingProgressFill.style.width = '100%';
    } else {
      const remaining = state.freeShippingThreshold - subtotal;
      const percent = Math.min(100, Math.round((subtotal / state.freeShippingThreshold) * 100));
      shippingStatusText.innerHTML = `ফ্রি শিপিং পেতে আর <strong>${formatCurrency(remaining)}</strong> টাকার অর্ডার করুন`;
      shippingProgressFill.style.width = `${percent}%`;
    }
  }

  // Promo Code Handler
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) return;

      if (code === 'GENTLEMAN10' || code === 'LUXURY10' || code === 'CHOICE10') {
        state.discountPercent = 0.10;
        state.appliedPromoCode = code;
        promoFeedback.className = 'promo-feedback success';
        promoFeedback.textContent = '✓ ১০% ভিআইপি প্রিভিলেজ কোড সফলভাবে যুক্ত হয়েছে!';
        updateCartUI();
        showToast('১০% ভিআইপি ডিসকাউন্ট সক্রিয় হয়েছে!');
      } else {
        promoFeedback.className = 'promo-feedback error';
        promoFeedback.textContent = 'অকার্যকর প্রোমো কোড। অনুগ্রহ করে "GENTLEMAN10" ব্যবহার করুন।';
      }
    });
  }

  // Checkout Button
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('আপনার শপিং ব্যাগ খালি। অনুগ্রহ করে পছন্দের পোশাক নির্বাচন করুন।');
        return;
      }
      checkoutBtn.disabled = true;
      checkoutBtn.innerHTML = `<span>নিরাপদ কনসিয়ার্জের সাথে যুক্ত হচ্ছে...</span>`;
      
      setTimeout(() => {
        alert('চয়েস ফ্যাশনকে বেছে নেওয়ার জন্য ধন্যবাদ!\n\nআপনার অর্ডার প্রক্রিয়াধীন হয়েছে। আপনার সাইজ, ফিটিং ও দ্রুত হোম ডেলিভারি নিশ্চিত করতে আমাদের স্টাইলিং টিম সরাসরি আপনার হোয়াটসঅ্যাপে যোগাযোগ করবেন।');
        state.cart = [];
        updateCartUI();
        closeCartDrawer();
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = `
          <span>অর্ডার সম্পন্ন করতে এগিয়ে যান</span>
          <svg viewBox="0 0 24 24" class="btn-icon" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        `;
      }, 1000);
    });
  }

  /* ==========================================================================
     8. Wishlist Logic
     ========================================================================== */
  function toggleWishlist(productId, btnElem) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    if (state.wishlist.has(productId)) {
      state.wishlist.delete(productId);
      if (btnElem) {
        btnElem.classList.remove('active');
        const svg = btnElem.querySelector('svg');
        if (svg) svg.setAttribute('fill', 'none');
      }
      showToast(`"${product.title}" উইশলিস্ট থেকে সরানো হয়েছে।`);
    } else {
      state.wishlist.add(productId);
      if (btnElem) {
        btnElem.classList.add('active');
        const svg = btnElem.querySelector('svg');
        if (svg) svg.setAttribute('fill', '#ef4444');
      }
      showToast(`"${product.title}" আপনার উইশলিস্টে যুক্ত হয়েছে।`);
    }

    wishlistCount.textContent = toBengaliNumber(state.wishlist.size);
  }

  if (wishlistTrigger) {
    wishlistTrigger.addEventListener('click', () => {
      if (state.wishlist.size === 0) {
        showToast('আপনার উইশলিস্ট বর্তমানে খালি। পছন্দের পোশাক সেভ করতে হার্ট আইকনে ট্যাপ করুন।');
      } else {
        showToast(`আপনার উইশলিস্টে ${toBengaliNumber(state.wishlist.size)}টি পোশাক সংরক্ষিত রয়েছে।`);
      }
    });
  }

  /* ==========================================================================
     9. Quick View Modal Operations
     ========================================================================== */
  function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    let selectedSize = product.sizes[0];

    quickviewBody.innerHTML = `
      <div class="qv-image-col">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="qv-details-col">
        <span class="qv-badge">${product.badge}</span>
        <h2 class="qv-title">${product.title}</h2>
        <div class="qv-price-row">
          <span class="qv-price">${formatCurrency(product.price)}</span>
          ${product.origPrice ? `<span class="qv-original-price">${formatCurrency(product.origPrice)}</span>` : ''}
        </div>
        <p class="qv-desc">${product.description}</p>
        
        <div class="qv-size-selector">
          <span class="qv-size-label">টেইলর্ড সাইজ নির্বাচন করুন:</span>
          <div class="qv-sizes" id="qvSizes">
            ${product.sizes.map((s, i) => `
              <button class="size-pill ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>
        </div>

        <button class="btn btn-gold btn-block" id="qvAddToCartBtn">
          <span>ব্যাগে যোগ করুন</span>
          <svg viewBox="0 0 24 24" class="btn-icon" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    `;

    // Size Pill selector
    const sizePills = quickviewBody.querySelectorAll('.size-pill');
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedSize = pill.dataset.size;
      });
    });

    // Add to Cart from Quick View
    const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
    if (qvAddToCartBtn) {
      qvAddToCartBtn.addEventListener('click', () => {
        addToCart(product.id, selectedSize);
        closeQuickView();
      });
    }

    quickviewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickviewModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (quickviewClose) quickviewClose.addEventListener('click', closeQuickView);
  quickviewModal.addEventListener('click', (e) => {
    if (e.target === quickviewModal) {
      closeQuickView();
    }
  });

  /* ==========================================================================
     10. Search Modal Operations
     ========================================================================== */
  function openSearchModal() {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearchModal() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = `<p class="search-hint">পছন্দের পোশাক খুঁজে পেতে টাইপ করুন।</p>`;
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearchModal);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearchModal);
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
      closeSearchModal();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = `<p class="search-hint">পছন্দের পোশাক খুঁজে পেতে টাইপ করুন।</p>`;
        return;
      }

      const matches = PRODUCTS_DATA.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p class="search-hint">"${query}" এর সাথে মিল রেখে কোনো পোশাক খুঁজে পাওয়া যায়নি।</p>`;
      } else {
        searchResults.innerHTML = matches.map(item => `
          <div class="search-result-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.title}" class="search-result-thumb">
            <div class="search-result-info">
              <h4>${item.title}</h4>
              <p>${formatCurrency(item.price)} • ${item.categoryLabel}</p>
            </div>
          </div>
        `).join('');

        searchResults.querySelectorAll('.search-result-item').forEach(resItem => {
          resItem.addEventListener('click', () => {
            const id = resItem.dataset.id;
            closeSearchModal();
            openQuickView(id);
          });
        });
      }
    });
  }

  /* ==========================================================================
     11. Mobile Navigation Drawer
     ========================================================================== */
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeMobileDrawer() {
    mobileDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  mobileDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === mobileDrawerOverlay) {
      closeMobileDrawer();
    }
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  /* ==========================================================================
     12. Global Keyboard Handlers (ESC to close modals)
     ========================================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cartOverlay.classList.contains('active')) closeCartDrawer();
      if (searchModal.classList.contains('active')) closeSearchModal();
      if (quickviewModal.classList.contains('active')) closeQuickView();
      if (mobileDrawerOverlay.classList.contains('active')) closeMobileDrawer();
    }
  });

  /* ==========================================================================
     13. Sticky Header Scroll Effect & Active Nav Link Observer
     ========================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Active link highlighters
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     14. Newsletter Subscription Form
     ========================================================================== */
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (!email) return;

      newsletterMsg.className = 'newsletter-msg success';
      newsletterMsg.textContent = '✓ চয়েস ইনার সার্কেলে আপনাকে স্বাগতম! আপনার প্রিভিলেজ কোড পাঠানো হয়েছে।';
      showToast('চয়েস ইনার সার্কেলে যুক্ত হওয়ার জন্য ধন্যবাদ!');
      newsletterEmail.value = '';

      setTimeout(() => {
        newsletterMsg.textContent = '';
      }, 6000);
    });
  }

  /* ==========================================================================
     15. Initialize App
     ========================================================================== */
  renderProducts('all');
  updateCartUI();

});
