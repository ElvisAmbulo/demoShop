import { useState, useEffect } from 'react';
import { products, formatPrice, getDiscountPercent } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { Flame } from 'lucide-react';

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const saleProducts = products.filter(p => getDiscountPercent(p.price, p.compareAt) >= 35).slice(0, 4);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
              <Flame className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold">Flash Sale</h2>
              <p className="text-muted-foreground text-sm">Limited time offers — don't miss out!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">Ends in:</span>
            {[pad(timeLeft.hours), pad(timeLeft.minutes), pad(timeLeft.seconds)].map((v, i) => (
              <span key={i} className="bg-foreground text-background font-mono text-lg font-bold px-3 py-1.5 rounded">
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {saleProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
}
