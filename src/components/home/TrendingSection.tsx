import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function TrendingSection() {
  const trending = products.filter(p => p.badge === 'trending' || p.badge === 'bestseller').slice(0, 8);

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">Trending Now</h2>
            <p className="text-muted-foreground text-sm mt-1">What everyone's wearing this season</p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link to="/products?badge=trending">View All <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trending.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
