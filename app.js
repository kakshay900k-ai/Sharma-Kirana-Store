const { useState, useEffect, useMemo } = React;

// ==================== STORE LOCATION ====================
// Live Google Maps link (shared by you)
const STORE_MAP_LINK = 'https://maps.app.goo.gl/6EZVQDUFoDk1WjyX9?g_st=ac';
// Coordinates for embedded map
const STORE_COORDS = '25.3675959,87.0031022';
const STORE_MAP_EMBED = `https://www.google.com/maps?q=${STORE_COORDS}&hl=en&z=15&output=embed`;

// ==================== SVG ICON COMPONENTS ====================
const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);
const IconStore = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
  </svg>
);
const IconBars = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
);
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);
const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);
const IconMinus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 13H5v-2h14v2z"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);
const IconTrash = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconPin = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);
const IconPhone = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);
const IconMail = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const IconTruck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
  </svg>
);
const IconTag = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
  </svg>
);
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);
const IconMap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.46 4.9c-.37.12-.63.47-.63.87V20.5c0 .55.45 1 1 1l.16-.03L9 19.4l6 2.1 5.54-1.9c.37-.12.63-.47.63-.87V3.5c0-.55-.45-1-1-1zM15 19l-6-2.11V5l6 2.11V19z"/>
  </svg>
);

// ==================== NAVBAR ====================
function Navbar({ onCartClick, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <div className="logo-icon"><IconStore /></div>
          <div>
            <div className="logo-main">Sharma Kirana</div>
            <div className="logo-sub">Kharik Bazar, Bhagalpur</div>
          </div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollTo('home')}>Home</li>
          <li onClick={() => scrollTo('products')}>Products</li>
          <li onClick={() => scrollTo('about')}>About</li>
          <li onClick={() => scrollTo('contact')}>Contact</li>
        </ul>
        <div className="nav-right">
          <button className="cart-btn" onClick={onCartClick}>
            <IconCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IconClose /> : <IconBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ==================== HERO ====================
function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="hero" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">🌾 Since 1995</div>
          <h1 className="hero-title">
            Sharma <span className="highlight">Kirana</span> Store
          </h1>
          <p className="hero-subtitle">
            Your trusted neighborhood grocery store in Kharik Bazar, Bhagalpur.
            Fresh groceries, daily essentials & household items at the best prices.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('products')}>
              <IconCart /> Shop Now
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Contact Us
            </button>
          </div>
          <div className="hero-features">
            <div className="feature"><IconTruck /> <span>Free Home Delivery</span></div>
            <div className="feature"><IconTag /> <span>Best Prices</span></div>
            <div className="feature"><IconClock /> <span>Open 7 AM - 9 PM</span></div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-circle">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600"
              alt="Grocery Store" className="hero-img"
            />
          </div>
          <div className="floating-card card-1">
            <span className="card-icon">🛒</span>
            <div><strong>500+</strong><small>Products</small></div>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">⭐</span>
            <div><strong>4.8</strong><small>Rating</small></div>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">😊</span>
            <div><strong>10K+</strong><small>Customers</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PRODUCT CARD ====================
function ProductCard({ product, index, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="product-image-wrapper">
        <img
          src={product.image} alt={product.name}
          className="product-image" loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/4caf50/ffffff?text=' + encodeURIComponent(product.name);
          }}
        />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <div className="product-price">
            <span className="price">₹{product.price}</span>
            <span className="unit">/ {product.unit}</span>
          </div>
          <button className={`add-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
            {added ? <IconCheck /> : <IconPlus />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ==================== PRODUCT LIST ====================
function ProductList({ onAdd }) {
  const [products] = useState([
    { id: 1, name: 'Basmati Rice', price: 85, unit: 'kg', category: 'Grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', description: 'Premium quality basmati rice' },
    { id: 2, name: 'Sona Masoori Rice', price: 55, unit: 'kg', category: 'Grains', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400', description: 'Fine grain sona masoori rice' },
    { id: 3, name: 'Wheat Flour (Atta)', price: 45, unit: 'kg', category: 'Grains', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', description: 'Fresh chakki atta' },
    { id: 4, name: 'Toor Dal', price: 140, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=400', description: 'Premium toor dal' },
    { id: 5, name: 'Moong Dal', price: 120, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1585996985419-28e6fcb32f9f?w=400', description: 'Yellow moong dal' },
    { id: 6, name: 'Chana Dal', price: 95, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400', description: 'Fresh chana dal' },
    { id: 7, name: 'Masoor Dal', price: 100, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400', description: 'Red masoor dal' },
    { id: 8, name: 'Sunflower Oil', price: 150, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', description: 'Refined sunflower oil' },
    { id: 9, name: 'Mustard Oil', price: 180, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400', description: 'Pure kachi ghani mustard oil' },
    { id: 10, name: 'Desi Ghee', price: 650, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400', description: 'Pure cow desi ghee' },
    { id: 11, name: 'Refined Oil', price: 130, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=400', description: 'Refined cooking oil' },
    { id: 12, name: 'Turmeric Powder', price: 40, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400', description: 'Pure haldi powder' },
    { id: 13, name: 'Red Chilli Powder', price: 60, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400', description: 'Spicy lal mirch powder' },
    { id: 14, name: 'Coriander Powder', price: 35, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1599909533140-1a3c7e0c8c1c?w=400', description: 'Fresh dhaniya powder' },
    { id: 15, name: 'Cumin Seeds (Jeera)', price: 80, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400', description: 'Premium jeera' },
    { id: 16, name: 'Garam Masala', price: 75, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400', description: 'Aromatic garam masala' },
    { id: 17, name: 'Mustard Seeds', price: 50, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1599909533140-1a3c7e0c8c1c?w=400', description: 'Black mustard seeds' },
    { id: 18, name: 'Sugar', price: 45, unit: 'kg', category: 'Essentials', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400', description: 'Fine grain sugar' },
    { id: 19, name: 'Salt', price: 25, unit: 'kg', category: 'Essentials', image: 'https://images.unsplash.com/photo-1518110925495-c5c3e6c2c2c2?w=400', description: 'Iodized table salt' },
    { id: 20, name: 'Tea Leaves', price: 250, unit: '500g', category: 'Beverages', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400', description: 'Premium Assam tea' },
    { id: 21, name: 'Coffee Powder', price: 350, unit: '250g', category: 'Beverages', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', description: 'Instant coffee powder' },
    { id: 22, name: 'Milk Powder', price: 280, unit: '500g', category: 'Beverages', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', description: 'Full cream milk powder' },
    { id: 23, name: 'Biscuits (Parle-G)', price: 10, unit: 'pack', category: 'Snacks', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400', description: 'Parle-G biscuits' },
    { id: 24, name: 'Namkeen Mixture', price: 60, unit: '250g', category: 'Snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', description: 'Spicy namkeen mix' },
    { id: 25, name: 'Potato Chips', price: 20, unit: 'pack', category: 'Snacks', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', description: 'Crispy potato chips' },
    { id: 26, name: 'Rusk Toast', price: 40, unit: 'pack', category: 'Snacks', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', description: 'Crunchy rusk toast' },
    { id: 27, name: 'Detergent Powder', price: 120, unit: '1kg', category: 'Household', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400', description: 'Detergent powder' },
    { id: 28, name: 'Dish Wash Liquid', price: 99, unit: '500ml', category: 'Household', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400', description: 'Dishwash liquid' },
    { id: 29, name: 'Bath Soap', price: 45, unit: 'piece', category: 'Household', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400', description: 'Beauty soap' },
    { id: 30, name: 'Toothpaste', price: 95, unit: '150g', category: 'Household', image: 'https://images.unsplash.com/photo-1559591939-8e9c5d9a1c1c?w=400', description: 'Toothpaste' },
    { id: 31, name: 'Potato', price: 30, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', description: 'Fresh potatoes' },
    { id: 32, name: 'Onion', price: 40, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400', description: 'Fresh onions' },
    { id: 33, name: 'Tomato', price: 35, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400', description: 'Ripe tomatoes' },
    { id: 34, name: 'Green Chilli', price: 20, unit: '250g', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400', description: 'Fresh green chillies' },
    { id: 35, name: 'Banana', price: 50, unit: 'dozen', category: 'Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', description: 'Ripe bananas' },
    { id: 36, name: 'Apple', price: 180, unit: 'kg', category: 'Fruits', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', description: 'Kashmiri apples' }
  ]);

  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filtered = useMemo(() => {
    let result = products;
    if (activeCat !== 'All') {
      result = result.filter(p => p.category === activeCat);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }
    return result;
  }, [products, activeCat, search]);

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Browse our wide range of fresh groceries & daily essentials
        </p>

        <div className="products-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`cat-btn ${activeCat === cat ? 'active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-products">
            <span>😕</span>
            <p>No products found</p>
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onAdd={onAdd} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ==================== CART ====================
function Cart({ isOpen, onClose, items, onUpdate, onRemove, onClear }) {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleWhatsAppOrder = () => {
    const lines = items
      .map(i => `${i.name} (${i.unit}) x ${i.quantity} = ₹${i.price * i.quantity}`)
      .join('%0A');
    const msg = `Hello Sharma Kirana Store!%0A%0AI'd like to order:%0A${lines}%0A%0ATotal: ₹${total}%0A%0APlease confirm my order.`;
    window.open(`https://wa.me/917992231711?text=${msg}`, '_blank');
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="close-btn" onClick={onClose}><IconClose /></button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>Your cart is empty</p>
            <small>Add some products to get started!</small>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/60/4caf50/ffffff?text=🛒'; }} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">₹{item.price} / {item.unit}</span>
                    <div className="qty-controls">
                      <button onClick={() => onUpdate(item.id, item.quantity - 1)}><IconMinus /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdate(item.id, item.quantity + 1)}><IconPlus /></button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <span className="item-total">₹{item.price * item.quantity}</span>
                    <button className="remove-btn" onClick={() => onRemove(item.id)}><IconTrash /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <strong>₹{total}</strong>
              </div>
              <button className="checkout-btn" onClick={handleWhatsAppOrder}>
                <IconWhatsApp /> Order on WhatsApp
              </button>
              <button className="clear-btn" onClick={onClear}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ==================== ABOUT ====================
function About() {
  const features = [
    '100% Fresh & Quality Products',
    'Competitive Market Prices',
    'Free Home Delivery',
    'Trusted by 10,000+ Families'
  ];
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600"
              alt="Sharma Kirana Store"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600'; }}
            />
            <div className="about-experience">
              <span className="exp-number">25+</span>
              <span className="exp-label">Years of Service</span>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About Sharma Kirana Store</h2>
            <p className="about-text">
              Welcome to <strong>Sharma Kirana Store</strong>, your trusted neighborhood grocery
              store located in the heart of <strong>Kharik Bazar, Bhagalpur, Bihar</strong>.
              Since 1995, we have been serving our community with the freshest groceries,
              premium quality products, and unmatched personalized service.
            </p>
            <p className="about-text">
              We take pride in offering a comprehensive range of products — from daily
              essentials like rice, dal, and spices to fresh vegetables, fruits, and
              household items. Our commitment to quality and fair pricing has made us
              a household name in Kharik Bazar.
            </p>
            <div className="about-features">
              {features.map((f, i) => (
                <div className="about-feature" key={i}>
                  <IconCheck /> <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CONTACT ====================
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Visit or Contact Us</h2>
        <p className="section-subtitle">We're here to serve you! Reach out for orders, queries, or bulk purchases.</p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon address"><IconPin /></div>
            <h3>Our Address</h3>
            <p>Post - Kharik Bazar<br />Dist - Bhagalpur<br />Pin - 853202<br />State - Bihar, India</p>
            <a
              href={STORE_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <IconMap /> Open in Google Maps
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon phone"><IconPhone /></div>
            <h3>Call Us</h3>
            <p>
              <a href="tel:+917992231711">+91 7992231711</a><br />
              <a href="tel:+919546835239">+91 9546835239</a><br />
              <a href="tel:+919931972930">+91 9931972930</a>
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-icon email"><IconMail /></div>
            <h3>Email Us</h3>
            <p><a href="mailto:kakshay900k@gmail.com">kakshay900k@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <div className="contact-icon whatsapp"><IconWhatsApp /></div>
            <h3>WhatsApp Order</h3>
            <p>
              <a href="https://wa.me/917992231711?text=Hello%20Sharma%20Kirana%20Store!"
                target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
        </div>

        {/* ===== Live Google Map ===== */}
        <div className="contact-map">
          <h3 style={{ textAlign: 'center', marginBottom: '16px' }}>📍 Find Us on Live Map</h3>
          <iframe
            title="Sharma Kirana Store Live Location"
            src={STORE_MAP_EMBED}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a
              href={STORE_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <IconMap /> Get Directions on Google Maps
            </a>
          </div>
        </div>

        <div className="contact-hours">
          <h3>🕒 Store Timings</h3>
          <div className="hours-grid">
            <div><strong>Monday - Saturday</strong><span>7:00 AM - 9:00 PM</span></div>
            <div><strong>Sunday</strong><span>8:00 AM - 8:00 PM</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER ====================
function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <IconStore />
              <div>
                <h3>Sharma Kirana Store</h3>
                <p>Kharik Bazar, Bhagalpur</p>
              </div>
            </div>
            <p className="footer-about">
              Your trusted neighborhood grocery store serving the community
              with fresh products and quality service since 1995.
            </p>
            <div className="social-links">
              <a href="https://wa.me/917992231711" target="_blank" rel="noopener noreferrer"><IconWhatsApp /></a>
              <a href="mailto:kakshay900k@gmail.com"><IconMail /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => scrollTo('home')}>Home</li>
              <li onClick={() => scrollTo('products')}>Products</li>
              <li onClick={() => scrollTo('about')}>About Us</li>
              <li onClick={() => scrollTo('contact')}>Contact</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li>Grains & Rice</li>
              <li>Pulses & Dals</li>
              <li>Spices & Masalas</li>
              <li>Fresh Vegetables</li>
              <li>Household Items</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                📍{" "}
                <a
                  href={STORE_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kharik Bazar, Bhagalpur — View on Map
                </a>
              </li>
              <li>📞 +91 7992231711</li>
              <li>📞 +91 9546835239</li>
              <li>📞 +91 9931972930</li>
              <li>✉️ kakshay900k@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sharma Kirana Store. All rights reserved.</p>
          <p>Made with ❤️ for our customers in Bhagalpur</p>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN APP ====================
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('sharmaCart');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sharmaCart', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
      return;
    }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const removeItem = (id) => setCartItems(prev => prev.filter(i => i.id !== id));
  const clearCart = () => setCartItems([]);
  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <div>
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cartCount} />
      <Hero />
      <ProductList onAdd={addToCart} />
      <About />
      <Contact />
      <Footer />
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdate={updateQty}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);