import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/products' },
  { label: "Men", to: '/products?category=Men%27s+Wear' },
  { label: "Women", to: '/products?category=Women%27s+Wear' },
  { label: 'New Arrivals', to: '/products?badge=new' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-xs sm:text-sm py-2 font-body tracking-wide">
        🔥 FREE DELIVERY on orders above KES 5,000 — Use code <span className="font-semibold">SHOPKE</span>
      </div>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
              SHOP<span className="text-primary">.</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === l.to ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/products" className="hidden sm:block">
              <Search className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Link to="/admin" className="hidden sm:block">
              <User className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
            </Link>
            <Heart className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors cursor-pointer hidden sm:block" />
            <button onClick={() => setIsOpen(true)} className="relative">
              <ShoppingBag className="w-5 h-5 text-foreground/70 hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-50 bg-background"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <span className="font-heading text-xl font-bold">SHOP<span className="text-primary">.</span></span>
                <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
              </div>
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map(l => (
                  <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="text-lg font-medium">
                    {l.label}
                  </Link>
                ))}
                <Link to="/admin" onClick={() => setMobileOpen(false)} className="text-lg font-medium text-muted-foreground">
                  Admin Dashboard
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
