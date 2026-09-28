const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ==================== PRODUCTS DATA ====================
const products = [
  // Grains & Rice
  { id: 1, name: 'Basmati Rice', price: 85, unit: 'kg', category: 'Grains', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', description: 'Premium quality basmati rice' },
  { id: 2, name: 'Sona Masoori Rice', price: 55, unit: 'kg', category: 'Grains', image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400', description: 'Fine grain sona masoori rice' },
  { id: 3, name: 'Wheat Flour (Atta)', price: 45, unit: 'kg', category: 'Grains', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', description: 'Fresh chakki atta' },

  // Pulses
  { id: 4, name: 'Toor Dal', price: 140, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=400', description: 'Premium toor dal' },
  { id: 5, name: 'Moong Dal', price: 120, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1585996985419-28e6fcb32f9f?w=400', description: 'Yellow moong dal' },
  { id: 6, name: 'Chana Dal', price: 95, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400', description: 'Fresh chana dal' },
  { id: 7, name: 'Masoor Dal', price: 100, unit: 'kg', category: 'Pulses', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400', description: 'Red masoor dal' },

  // Oils & Ghee
  { id: 8, name: 'Sunflower Oil', price: 150, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', description: 'Refined sunflower oil' },
  { id: 9, name: 'Mustard Oil', price: 180, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400', description: 'Pure kachi ghani mustard oil' },
  { id: 10, name: 'Desi Ghee', price: 650, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400', description: 'Pure cow desi ghee' },
  { id: 11, name: 'Refined Oil', price: 130, unit: 'L', category: 'Oils', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=400', description: 'Fortune refined oil' },

  // Spices
  { id: 12, name: 'Turmeric Powder', price: 40, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400', description: 'Pure haldi powder' },
  { id: 13, name: 'Red Chilli Powder', price: 60, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400', description: 'Spicy lal mirch powder' },
  { id: 14, name: 'Coriander Powder', price: 35, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1599909533140-1a3c7e0c8c1c?w=400', description: 'Fresh dhaniya powder' },
  { id: 15, name: 'Cumin Seeds (Jeera)', price: 80, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400', description: 'Premium jeera' },
  { id: 16, name: 'Garam Masala', price: 75, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400', description: 'Aromatic garam masala' },
  { id: 17, name: 'Mustard Seeds', price: 50, unit: '100g', category: 'Spices', image: 'https://images.unsplash.com/photo-1599909533140-1a3c7e0c8c1c?w=400', description: 'Black mustard seeds' },

  // Essentials
  { id: 18, name: 'Sugar', price: 45, unit: 'kg', category: 'Essentials', image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=400', description: 'Fine grain sugar' },
  { id: 19, name: 'Salt', price: 25, unit: 'kg', category: 'Essentials', image: 'https://images.unsplash.com/photo-1518110925495-c5c3e6c2c2c2?w=400', description: 'Iodized table salt' },

  // Beverages
  { id: 20, name: 'Tea Leaves', price: 250, unit: '500g', category: 'Beverages', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400', description: 'Premium Assam tea' },
  { id: 21, name: 'Coffee Powder', price: 350, unit: '250g', category: 'Beverages', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', description: 'Instant coffee powder' },
  { id: 22, name: 'Milk Powder', price: 280, unit: '500g', category: 'Beverages', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400', description: 'Full cream milk powder' },

  // Snacks
  { id: 23, name: 'Biscuits (Parle-G)', price: 10, unit: 'pack', category: 'Snacks', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400', description: 'Parle-G biscuits' },
  { id: 24, name: 'Namkeen Mixture', price: 60, unit: '250g', category: 'Snacks', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', description: 'Spicy namkeen mix' },
  { id: 25, name: 'Potato Chips', price: 20, unit: 'pack', category: 'Snacks', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', description: 'Crispy potato chips' },
  { id: 26, name: 'Rusk Toast', price: 40, unit: 'pack', category: 'Snacks', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', description: 'Crunchy rusk toast' },

  // Household
  { id: 27, name: 'Detergent Powder', price: 120, unit: '1kg', category: 'Household', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400', description: 'Surf excel detergent' },
  { id: 28, name: 'Dish Wash Liquid', price: 99, unit: '500ml', category: 'Household', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400', description: 'Vim dishwash liquid' },
  { id: 29, name: 'Bath Soap', price: 45, unit: 'piece', category: 'Household', image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400', description: 'Lux beauty soap' },
  { id: 30, name: 'Toothpaste', price: 95, unit: '150g', category: 'Household', image: 'https://images.unsplash.com/photo-1559591939-8e9c5d9a1c1c?w=400', description: 'Colgate toothpaste' },

  // Vegetables
  { id: 31, name: 'Potato', price: 30, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', description: 'Fresh potatoes' },
  { id: 32, name: 'Onion', price: 40, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400', description: 'Fresh onions' },
  { id: 33, name: 'Tomato', price: 35, unit: 'kg', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400', description: 'Ripe tomatoes' },
  { id: 34, name: 'Green Chilli', price: 20, unit: '250g', category: 'Vegetables', image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400', description: 'Fresh green chillies' },

  // Fruits
  { id: 35, name: 'Banana', price: 50, unit: 'dozen', category: 'Fruits', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400', description: 'Ripe bananas' },
  { id: 36, name: 'Apple', price: 180, unit: 'kg', category: 'Fruits', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400', description: 'Kashmiri apples' }
];

// ==================== ROUTES ====================
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Sharma Kirana Store API' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(['All', ...categories]);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`✅ Sharma Kirana Store API running on http://localhost:${PORT}`);
});