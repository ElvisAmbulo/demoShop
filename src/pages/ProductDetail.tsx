import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, formatPrice, getDiscountPercent } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { Star, Minus, Plus, Truck, Shield, RotateCcw, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return (
    <div className="container py-20 text-center">
      <h1 className="text-2xl font-heading font-bold">Product not found</h1>
      <Button asChild className="mt-4"><Link to="/products">Back to Shop</Link></Button>
    </div>
  );

  const discount = getDiscountPercent(product.price, product.compareAt);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const complementary = products.filter(p => p.category !== product.category).slice(0, 4);

  const handleAdd = () => {
    if (!selectedSize && product.sizes.length > 1) { toast.error('Please select a size'); return; }
    if (!selectedColor && product.colors.length > 1) { toast.error('Please select a color'); return; }
    addItem(product, selectedSize || product.sizes[0], selectedColor || product.colors[0], qty);
    toast.success(`${product.name} added to bag!`);
  };

  return (
    <div className="container py-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-primary">Shop</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Images */}
        <div className="space-y-4">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[3/4] rounded-xl overflow-hidden bg-muted"
          >
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-24 rounded-lg overflow-hidden border-2 ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <>
                <span className="text-lg text-muted-foreground line-through">{formatPrice(product.compareAt)}</span>
                <span className="bg-destructive/10 text-destructive text-sm font-semibold px-2 py-0.5 rounded">Save {discount}%</span>
              </>
            )}
          </div>

          <p className="text-foreground/80 leading-relaxed">{product.description}</p>

          {/* Size */}
          {product.sizes.length > 1 && (
            <div>
              <h3 className="text-sm font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${selectedSize === s ? 'bg-foreground text-background border-foreground' : 'hover:border-foreground'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color */}
          {product.colors.length > 1 && (
            <div>
              <h3 className="text-sm font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(c => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${selectedColor === c ? 'bg-foreground text-background border-foreground' : 'hover:border-foreground'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button className="p-3" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="w-4 h-4" /></button>
              <span className="px-4 font-medium">{qty}</span>
              <button className="p-3" onClick={() => setQty(qty + 1)}><Plus className="w-4 h-4" /></button>
            </div>
            <Button size="lg" className="flex-1 text-base" onClick={handleAdd}>
              Add to Bag — {formatPrice(product.price * qty)}
            </Button>
            <Button variant="outline" size="lg"><Heart className="w-5 h-5" /></Button>
          </div>

          {product.stockCount && product.stockCount <= 15 && (
            <p className="text-destructive text-sm font-medium animate-pulse-soft">
              🔥 Only {product.stockCount} left in stock — selling fast!
            </p>
          )}

          {/* Highlights */}
          <div className="space-y-2 pt-4 border-t">
            {product.highlights.map(h => (
              <p key={h} className="text-sm text-foreground/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {h}
              </p>
            ))}
          </div>

          {/* Trust */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <Truck className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">2-5 Day Delivery</p>
            </div>
            <div className="text-center">
              <Shield className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">Secure Payment</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">14-Day Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-heading text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* Complete the Look */}
      {complementary.length > 0 && (
        <section className="mt-16 mb-8">
          <h2 className="font-heading text-2xl font-bold mb-8">Complete the Look</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {complementary.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
