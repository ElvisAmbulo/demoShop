import { Link } from 'react-router-dom';
import { Product, formatPrice, getDiscountPercent } from '@/data/products';
import { Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const badgeStyles: Record<string, string> = {
  new: 'bg-success text-success-foreground',
  trending: 'bg-accent text-accent-foreground',
  bestseller: 'bg-primary text-primary-foreground',
  limited: 'bg-destructive text-destructive-foreground',
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = getDiscountPercent(product.price, product.compareAt);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4]">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${badgeStyles[product.badge]}`}>
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-destructive text-destructive-foreground text-[10px] font-semibold px-2 py-0.5 rounded">
                -{discount}%
              </span>
            )}
          </div>
          {product.stockCount && product.stockCount <= 15 && (
            <span className="absolute bottom-3 left-3 bg-foreground/80 text-background text-[10px] px-2 py-0.5 rounded animate-pulse-soft">
              Only {product.stockCount} left
            </span>
          )}
          <button
            className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={e => { e.preventDefault(); }}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <h3 className="font-medium text-sm leading-tight truncate">{product.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <span className="text-xs text-muted-foreground line-through">{formatPrice(product.compareAt)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
