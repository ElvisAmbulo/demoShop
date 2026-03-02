export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  compareAt: number;
  images: string[];
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  highlights: string[];
  inStock: boolean;
  stockCount?: number;
  badge?: 'new' | 'trending' | 'bestseller' | 'limited';
  description: string;
}

const img = (seed: string) => `https://images.unsplash.com/${seed}?w=600&h=750&fit=crop`;

export const products: Product[] = [
  // MEN'S WEAR
  { id: 'm1', name: 'Classic Linen Shirt', category: "Men's Wear", subcategory: 'Shirts', price: 2499, compareAt: 3999, images: [img('photo-1602810318383-e386cc2a3ccf'), img('photo-1596755094514-f87e34085b2c')], rating: 4.8, reviews: 124, colors: ['White', 'Beige', 'Navy'], sizes: ['S', 'M', 'L', 'XL'], highlights: ['100% Linen', 'Breathable fabric', 'Perfect for Nairobi weather'], inStock: true, badge: 'bestseller', description: 'Premium linen shirt crafted for the modern Kenyan gentleman.' },
  { id: 'm2', name: 'Urban Cargo Pants', category: "Men's Wear", subcategory: 'Pants', price: 3199, compareAt: 4999, images: [img('photo-1473966968600-fa801b869a1a')], rating: 4.6, reviews: 89, colors: ['Olive', 'Black', 'Khaki'], sizes: ['28', '30', '32', '34', '36'], highlights: ['Relaxed fit', 'Multiple pockets', 'Durable cotton blend'], inStock: true, badge: 'trending', description: 'Street-ready cargo pants with a relaxed silhouette.' },
  { id: 'm3', name: 'Premium Bomber Jacket', category: "Men's Wear", subcategory: 'Jackets', price: 5499, compareAt: 8999, images: [img('photo-1551028719-00167b16eac5')], rating: 4.9, reviews: 56, colors: ['Black', 'Army Green'], sizes: ['M', 'L', 'XL'], highlights: ['Quilted lining', 'Water-resistant', 'Signature fit'], inStock: true, stockCount: 5, badge: 'limited', description: 'Statement bomber jacket for cool Nairobi evenings.' },
  { id: 'm4', name: 'Slim Fit Chinos', category: "Men's Wear", subcategory: 'Pants', price: 2799, compareAt: 3999, images: [img('photo-1624378439575-d8705ad7ae80')], rating: 4.5, reviews: 201, colors: ['Tan', 'Navy', 'Grey'], sizes: ['28', '30', '32', '34'], highlights: ['Stretch cotton', 'Slim fit', 'Versatile styling'], inStock: true, badge: 'bestseller', description: 'Essential slim-fit chinos for every wardrobe.' },
  { id: 'm5', name: 'Graphic Street Tee', category: "Men's Wear", subcategory: 'T-Shirts', price: 1499, compareAt: 2499, images: [img('photo-1576566588028-4147f3842f27')], rating: 4.3, reviews: 312, colors: ['Black', 'White', 'Grey'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], highlights: ['Soft cotton', 'Bold graphics', 'Oversized fit'], inStock: true, description: 'Urban graphic tee with Kenyan-inspired design.' },
  { id: 'm6', name: 'Formal Blazer', category: "Men's Wear", subcategory: 'Formal', price: 7999, compareAt: 12999, images: [img('photo-1507679799987-c73779587ccf')], rating: 4.7, reviews: 43, colors: ['Charcoal', 'Navy'], sizes: ['M', 'L', 'XL'], highlights: ['Tailored fit', 'Premium wool blend', 'Satin-lined'], inStock: true, badge: 'new', description: 'Impeccably tailored blazer for the professional man.' },

  // WOMEN'S WEAR
  { id: 'w1', name: 'Flowing Maxi Dress', category: "Women's Wear", subcategory: 'Dresses', price: 3999, compareAt: 6499, images: [img('photo-1595777457583-95e059d581b8')], rating: 4.9, reviews: 187, colors: ['Terracotta', 'Sage', 'Black'], sizes: ['XS', 'S', 'M', 'L'], highlights: ['Flattering silhouette', 'Lightweight chiffon', 'Perfect for events'], inStock: true, badge: 'bestseller', description: 'Elegant maxi dress that moves beautifully.' },
  { id: 'w2', name: 'Ankara Print Blouse', category: "Women's Wear", subcategory: 'Tops', price: 2299, compareAt: 3499, images: [img('photo-1594938298603-c8148c4dae35')], rating: 4.7, reviews: 156, colors: ['Multi-print', 'Blue Print', 'Red Print'], sizes: ['S', 'M', 'L', 'XL'], highlights: ['Authentic Ankara', 'Handcrafted', 'Cultural heritage'], inStock: true, badge: 'trending', description: 'Vibrant Ankara print blouse celebrating African heritage.' },
  { id: 'w3', name: 'High-Waist Palazzo Pants', category: "Women's Wear", subcategory: 'Pants', price: 2899, compareAt: 4499, images: [img('photo-1509631179647-0177331693ae')], rating: 4.6, reviews: 98, colors: ['White', 'Black', 'Camel'], sizes: ['XS', 'S', 'M', 'L'], highlights: ['Wide-leg fit', 'Elastic waist', 'Flowy fabric'], inStock: true, description: 'Sophisticated palazzo pants for effortless elegance.' },
  { id: 'w4', name: 'Bodycon Knit Dress', category: "Women's Wear", subcategory: 'Dresses', price: 3499, compareAt: 5499, images: [img('photo-1515886657613-9f3515b0c78f')], rating: 4.8, reviews: 134, colors: ['Black', 'Burgundy', 'Olive'], sizes: ['XS', 'S', 'M', 'L'], highlights: ['Form-fitting', 'Stretch knit', 'Day to night'], inStock: true, stockCount: 8, badge: 'limited', description: 'Sleek bodycon dress with modern appeal.' },
  { id: 'w5', name: 'Oversized Denim Jacket', category: "Women's Wear", subcategory: 'Jackets', price: 4299, compareAt: 6999, images: [img('photo-1548126032-079a0fb0099d')], rating: 4.5, reviews: 76, colors: ['Light Wash', 'Dark Wash'], sizes: ['S', 'M', 'L'], highlights: ['Oversized fit', 'Vintage wash', 'Iconic styling'], inStock: true, badge: 'new', description: 'The perfect oversized denim for layering.' },
  { id: 'w6', name: 'Silk Wrap Top', category: "Women's Wear", subcategory: 'Tops', price: 2699, compareAt: 4199, images: [img('photo-1564257631407-4deb1f99d992')], rating: 4.4, reviews: 67, colors: ['Ivory', 'Blush', 'Emerald'], sizes: ['XS', 'S', 'M', 'L'], highlights: ['Satin finish', 'Adjustable tie', 'Elegant drape'], inStock: true, description: 'Luxurious silk wrap top for sophisticated style.' },

  // KIDS
  { id: 'k1', name: 'Kids Fun Print Set', category: 'Kids', subcategory: 'Sets', price: 1899, compareAt: 2999, images: [img('photo-1519238263530-99bdd11df2ea')], rating: 4.7, reviews: 89, colors: ['Multi', 'Blue', 'Pink'], sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'], highlights: ['Comfortable cotton', 'Machine washable', 'Fun prints'], inStock: true, badge: 'new', description: 'Adorable matching set for active kids.' },
  { id: 'k2', name: 'Kids Denim Dungarees', category: 'Kids', subcategory: 'Bottoms', price: 2299, compareAt: 3499, images: [img('photo-1543854589-fdd815f1e07a')], rating: 4.6, reviews: 45, colors: ['Blue', 'Light Wash'], sizes: ['3-4Y', '5-6Y', '7-8Y'], highlights: ['Adjustable straps', 'Durable denim', 'Easy to wear'], inStock: true, description: 'Classic dungarees built for play.' },

  // SHOES
  { id: 's1', name: 'Premium Leather Sneakers', category: 'Shoes', subcategory: 'Sneakers', price: 4999, compareAt: 7999, images: [img('photo-1549298916-b41d501d3772')], rating: 4.8, reviews: 234, colors: ['White', 'Black', 'Tan'], sizes: ['38', '39', '40', '41', '42', '43', '44'], highlights: ['Genuine leather', 'Cushioned sole', 'All-day comfort'], inStock: true, badge: 'bestseller', description: 'Premium leather sneakers for everyday luxury.' },
  { id: 's2', name: 'Canvas Slip-Ons', category: 'Shoes', subcategory: 'Casual', price: 1999, compareAt: 2999, images: [img('photo-1525966222134-fcfa99b8ae77')], rating: 4.4, reviews: 167, colors: ['Navy', 'White', 'Grey'], sizes: ['38', '39', '40', '41', '42', '43'], highlights: ['Easy slip-on', 'Breathable canvas', 'Flexible sole'], inStock: true, description: 'Effortless canvas slip-ons for casual days.' },
  { id: 's3', name: 'Heeled Ankle Boots', category: 'Shoes', subcategory: 'Boots', price: 5999, compareAt: 8999, images: [img('photo-1543163521-1bf539c55dd2')], rating: 4.7, reviews: 78, colors: ['Black', 'Brown'], sizes: ['36', '37', '38', '39', '40'], highlights: ['Block heel', 'Side zip', 'Genuine leather'], inStock: true, stockCount: 12, badge: 'trending', description: 'Versatile ankle boots with a comfortable block heel.' },

  // BAGS
  { id: 'b1', name: 'Leather Tote Bag', category: 'Bags', subcategory: 'Totes', price: 4499, compareAt: 6999, images: [img('photo-1584917865442-de89df76afd3')], rating: 4.8, reviews: 145, colors: ['Cognac', 'Black', 'Tan'], sizes: ['One Size'], highlights: ['Genuine leather', 'Spacious interior', 'Laptop compatible'], inStock: true, badge: 'bestseller', description: 'Timeless leather tote for work and weekends.' },
  { id: 'b2', name: 'Crossbody Mini Bag', category: 'Bags', subcategory: 'Crossbody', price: 2499, compareAt: 3999, images: [img('photo-1548036328-c9fa89d128fa')], rating: 4.5, reviews: 98, colors: ['Black', 'Nude', 'Red'], sizes: ['One Size'], highlights: ['Adjustable strap', 'Compact design', 'Multiple pockets'], inStock: true, badge: 'new', description: 'Chic crossbody bag for hands-free style.' },

  // ACCESSORIES
  { id: 'a1', name: 'Gold Chain Necklace', category: 'Accessories', subcategory: 'Jewelry', price: 1299, compareAt: 1999, images: [img('photo-1599643478518-a784e5dc4c8f')], rating: 4.6, reviews: 210, colors: ['Gold', 'Silver'], sizes: ['One Size'], highlights: ['18K gold plated', 'Tarnish-resistant', 'Adjustable length'], inStock: true, badge: 'trending', description: 'Elegant chain necklace to elevate any outfit.' },
  { id: 'a2', name: 'Woven Leather Belt', category: 'Accessories', subcategory: 'Belts', price: 1799, compareAt: 2499, images: [img('photo-1553062407-98eeb64c6a62')], rating: 4.4, reviews: 87, colors: ['Brown', 'Black'], sizes: ['S', 'M', 'L'], highlights: ['Hand-woven', 'Genuine leather', 'Classic buckle'], inStock: true, description: 'Handcrafted woven leather belt.' },
  { id: 'a3', name: 'Oversized Sunglasses', category: 'Accessories', subcategory: 'Eyewear', price: 1999, compareAt: 3499, images: [img('photo-1511499767150-a48a237f0083')], rating: 4.7, reviews: 156, colors: ['Black', 'Tortoise', 'Brown'], sizes: ['One Size'], highlights: ['UV400 protection', 'Lightweight frame', 'Iconic shape'], inStock: true, badge: 'bestseller', description: 'Statement sunglasses with full UV protection.' },

  // STREETWEAR
  { id: 'st1', name: 'Oversized Hoodie', category: 'Streetwear', subcategory: 'Hoodies', price: 3499, compareAt: 5499, images: [img('photo-1556821840-3a63f95609a7')], rating: 4.8, reviews: 289, colors: ['Black', 'Grey', 'Cream'], sizes: ['S', 'M', 'L', 'XL'], highlights: ['Heavy cotton', 'Oversized fit', 'Kangaroo pocket'], inStock: true, badge: 'bestseller', description: 'The ultimate oversized hoodie for street style.' },
  { id: 'st2', name: 'Track Pants', category: 'Streetwear', subcategory: 'Pants', price: 2799, compareAt: 4499, images: [img('photo-1580906853305-a31294f54d60')], rating: 4.5, reviews: 178, colors: ['Black', 'Navy', 'Grey'], sizes: ['S', 'M', 'L', 'XL'], highlights: ['Side stripe', 'Elastic waist', 'Tapered leg'], inStock: true, badge: 'trending', description: 'Modern track pants with signature side stripe.' },

  // FORMAL WEAR
  { id: 'f1', name: 'Tailored Suit Set', category: 'Formal Wear', subcategory: 'Suits', price: 14999, compareAt: 24999, images: [img('photo-1594938298603-c8148c4dae35')], rating: 4.9, reviews: 34, colors: ['Navy', 'Charcoal', 'Black'], sizes: ['M', 'L', 'XL', 'XXL'], highlights: ['Italian wool blend', 'Slim fit', 'Full canvas'], inStock: true, stockCount: 10, badge: 'limited', description: 'Investment-grade tailored suit for the modern professional.' },
  { id: 'f2', name: 'Formal Dress Shirt', category: 'Formal Wear', subcategory: 'Shirts', price: 2999, compareAt: 4499, images: [img('photo-1603252109303-2751441dd157')], rating: 4.6, reviews: 112, colors: ['White', 'Light Blue', 'Pink'], sizes: ['S', 'M', 'L', 'XL'], highlights: ['Non-iron', 'French cuff option', 'Slim fit'], inStock: true, description: 'Crisp formal shirt for business and events.' },
];

export const categories = [
  { name: "Men's Wear", count: 6 },
  { name: "Women's Wear", count: 6 },
  { name: 'Kids', count: 2 },
  { name: 'Shoes', count: 3 },
  { name: 'Bags', count: 2 },
  { name: 'Accessories', count: 3 },
  { name: 'Streetwear', count: 2 },
  { name: 'Formal Wear', count: 2 },
];

export const getDiscountPercent = (price: number, compareAt: number) =>
  Math.round(((compareAt - price) / compareAt) * 100);

export const formatPrice = (price: number) =>
  `KES ${price.toLocaleString()}`;
