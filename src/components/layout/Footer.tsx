import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-bold text-background mb-4">SHOP<span className="text-primary">.</span></h3>
          <p className="text-sm leading-relaxed">Kenya's premium fashion destination. Quality meets affordability.</p>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Shop</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/products" className="hover:text-primary transition-colors">All Products</Link>
            <Link to="/products?category=Men%27s+Wear" className="hover:text-primary transition-colors">Men</Link>
            <Link to="/products?category=Women%27s+Wear" className="hover:text-primary transition-colors">Women</Link>
            <Link to="/products?badge=new" className="hover:text-primary transition-colors">New Arrivals</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Support</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>Shipping & Delivery</span>
            <span>Returns & Exchanges</span>
            <span>Size Guide</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>Instagram</span>
            <span>Twitter / X</span>
            <span>TikTok</span>
            <span>WhatsApp: +254 700 000 000</span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <span>© 2026 SHOP. All rights reserved.</span>
          <div className="flex gap-4">
            <span>M-Pesa</span>
            <span>Visa</span>
            <span>Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
